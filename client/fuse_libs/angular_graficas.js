(function (factory) {
  // 'use strict';
  // if (typeof exports === 'object') {
  //   // Node/CommonJS
  //   module.exports = factory(
  //     typeof angular !== 'undefined' ? angular : require('angular'),
  //     typeof Chart !== 'undefined' ? Chart : require('chart.js'));
  // }  else if (typeof define === 'function' && define.amd) {
  //   // AMD. Register as an anonymous module.
  //   define(['angular', 'chart'], factory);
  // } else {
    // Browser globals
    factory(angular, Chart);
  //}
}(function (angular, Chart) {
  'use strict';

  Chart.defaults.global.responsive = true;
  Chart.defaults.global.multiTooltipTemplate = '<%if (datasetLabel){%><%=datasetLabel%>: <%}%><%= value %>';

  Chart.defaults.global.colours = [
    '#97BBCD', // blue
    '#DCDCDC', // light grey
    '#F7464A', // red
    '#46BFBD', // green
    '#FDB45C', // yellow
    '#949FB1', // grey
    '#4D5360'  // dark grey
  ];

  var usingExcanvas = typeof window.G_vmlCanvasManager === 'object' &&
    window.G_vmlCanvasManager !== null &&
    typeof window.G_vmlCanvasManager.initElement === 'function';

  if (usingExcanvas) Chart.defaults.global.animation = false;

  return angular.module('chart.js', [])
    .provider('ChartJs', ChartJsProvider)
    .factory('ChartJsFactory', ['ChartJs', '$timeout', ChartJsFactory])
    .directive('chartBase', function (ChartJsFactory) { return new ChartJsFactory(); })
    .directive('chartLine', function (ChartJsFactory) { return new ChartJsFactory('Line'); })
    .directive('chartBar', function (ChartJsFactory) { return new ChartJsFactory('Bar'); })
    .directive('chartRadar', function (ChartJsFactory) { return new ChartJsFactory('Radar'); })
    .directive('chartDoughnut', function (ChartJsFactory) { return new ChartJsFactory('Doughnut'); })
    .directive('chartPie', function (ChartJsFactory) { return new ChartJsFactory('Pie'); })
    .directive('chartPolarArea', function (ChartJsFactory) { return new ChartJsFactory('PolarArea'); });

  /**
   * Wrapper for chart.js
   * Allows configuring chart js using the provider
   *
   * angular.module('myModule', ['chart.js']).config(function(ChartJsProvider) {
   *   ChartJsProvider.setOptions({ responsive: true });
   *   ChartJsProvider.setOptions('Line', { responsive: false });
   * })))
   */
  function ChartJsProvider () {
    var options = {};
    var ChartJs = {
      Chart: Chart,
      getOptions: function (type) {
        var typeOptions = type && options[type] || {};
        return angular.extend({}, options, typeOptions);
      }
    };

    /**
     * Allow to set global options during configuration
     */
    this.setOptions = function (type, customOptions) {
      // If no type was specified set option for the global object
      if (! customOptions) {
        customOptions = type;
        options = angular.extend(options, customOptions);
        return;
      }
      // Set options for the specific chart
      options[type] = angular.extend(options[type] || {}, customOptions);
    };

    this.$get = function () {
      return ChartJs;
    };
  }

  function ChartJsFactory (ChartJs, $timeout) {
    return function chart (type) {
      return {
        restrict: 'CA',
        scope: {
          data: '=?',
          labels: '=?',
          options: '=?',
          series: '=?',
          colours: '=?',
          getColour: '=?',
          chartType: '=',
          legend: '@',
          click: '=?',
          hover: '=?',

          chartData: '=?',
          chartLabels: '=?',
          chartOptions: '=?',
          chartSeries: '=?',
          chartColours: '=?',
          chartLegend: '@',
          chartClick: '=?',
          chartHover: '=?'
        },
        link: function (scope, elem/*, attrs */) {
          var chart, container = document.createElement('div');
          container.className = 'chart-container';
          elem.replaceWith(container);
          container.appendChild(elem[0]);

          if (usingExcanvas) window.G_vmlCanvasManager.initElement(elem[0]);

          ['data', 'labels', 'options', 'series', 'colours', 'legend', 'click', 'hover'].forEach(deprecated);
          function aliasVar (fromName, toName) {
            scope.$watch(fromName, function (newVal) {
              if (typeof newVal === 'undefined') return;
              scope[toName] = newVal;
            });
          }
          /* provide backward compatibility to "old" directive names, by
           * having an alias point from the new names to the old names. */
          aliasVar('chartData', 'data');
          aliasVar('chartLabels', 'labels');
          aliasVar('chartOptions', 'options');
          aliasVar('chartSeries', 'series');
          aliasVar('chartColours', 'colours');
          aliasVar('chartLegend', 'legend');
          aliasVar('chartClick', 'click');
          aliasVar('chartHover', 'hover');

          // Order of setting "watch" matter

          scope.$watch('data', function (newVal, oldVal) {
            if (! newVal || ! newVal.length || (Array.isArray(newVal[0]) && ! newVal[0].length)) return;
            var chartType = type || scope.chartType;
            if (! chartType) return;

            if (chart) {
              if (canUpdateChart(newVal, oldVal)) return updateChart(chart, newVal, scope, elem);
              chart.destroy();
            }

            createChart(chartType);
          }, true);

          scope.$watch('series', resetChart, true);
          scope.$watch('labels', resetChart, true);
          scope.$watch('options', resetChart, true);
          scope.$watch('colours', resetChart, true);

          scope.$watch('chartType', function (newVal, oldVal) {
            if (isEmpty(newVal)) return;
            if (angular.equals(newVal, oldVal)) return;
            if (chart) chart.destroy();
            createChart(newVal);
          });

          scope.$on('$destroy', function () {
            if (chart) chart.destroy();
          });

          function resetChart (newVal, oldVal) {
            if (isEmpty(newVal)) return;
            if (angular.equals(newVal, oldVal)) return;
            var chartType = type || scope.chartType;
            if (! chartType) return;

            // chart.update() doesn't work for series and labels
            // so we have to re-create the chart entirely
            if (chart) chart.destroy();

            createChart(chartType);
          }

          function createChart (type) {
            if (isResponsive(type, scope) && elem[0].clientHeight === 0 && container.clientHeight === 0) {
              return $timeout(function () {
                createChart(type);
              }, 50, false);
            }
            if (! scope.data || ! scope.data.length) return;
            scope.getColour = typeof scope.getColour === 'function' ? scope.getColour : getRandomColour;
            scope.colours = getColours(type, scope);
            var cvs = elem[0], ctx = cvs.getContext('2d');
            var data = Array.isArray(scope.data[0]) ?
              getDataSets(scope.labels, scope.data, scope.series || [], scope.colours) :
              getData(scope.labels, scope.data, scope.colours);
            var options = angular.extend({}, ChartJs.getOptions(type), scope.options);
            chart = new ChartJs.Chart(ctx)[type](data, options);
            scope.$emit('create', chart);

            // Bind events
            cvs.onclick = scope.click ? getEventHandler(scope, chart, 'click', false) : angular.noop;
            cvs.onmousemove = scope.hover ? getEventHandler(scope, chart, 'hover', true) : angular.noop;

            if (scope.legend && scope.legend !== 'false') setLegend(elem, chart);
          }

          function deprecated (attr) {
            if (typeof console !== 'undefined' && ChartJs.getOptions().env !== 'test') {
              var warn = typeof console.warn === 'function' ? console.warn : console.log;
              if (!! scope[attr]) {
                warn.call(console, '"%s" is deprecated and will be removed in a future version. ' +
                  'Please use "chart-%s" instead.', attr, attr);
              }
            }
          }
        }
      };
    };

    function canUpdateChart (newVal, oldVal) {
      if (newVal && oldVal && newVal.length && oldVal.length) {
        return Array.isArray(newVal[0]) ?
        newVal.length === oldVal.length && newVal.every(function (element, index) {
          return element.length === oldVal[index].length; }) :
          oldVal.reduce(sum, 0) > 0 ? newVal.length === oldVal.length : false;
      }
      return false;
    }

    function sum (carry, val) {
      return carry + val;
    }

    function getEventHandler (scope, chart, action, triggerOnlyOnChange) {
      var lastState = null;
      return function (evt) {
        var atEvent = chart.getPointsAtEvent || chart.getBarsAtEvent || chart.getSegmentsAtEvent;
        if (atEvent) {
          var activePoints = atEvent.call(chart, evt);
          if (triggerOnlyOnChange === false || angular.equals(lastState, activePoints) === false) {
            lastState = activePoints;
            scope[action](activePoints, evt);
            scope.$apply();
          }
        }
      };
    }

    function getColours (type, scope) {
      var colours = angular.copy(scope.colours ||
        ChartJs.getOptions(type).colours ||
        Chart.defaults.global.colours
      );
      while (colours.length < scope.data.length) {
        colours.push(scope.getColour());
      }
      return colours.map(convertColour);
    }

    function convertColour (colour) {
      if (typeof colour === 'object' && colour !== null) return colour;
      if (typeof colour === 'string' && colour[0] === '#') return getColour(hexToRgb(colour.substr(1)));
      return getRandomColour();
    }

    function getRandomColour () {
      var colour = [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
      return getColour(colour);
    }

    function getColour (colour) {
      return {
        fillColor: rgba(colour, 0.2),
        strokeColor: rgba(colour, 1),
        pointColor: rgba(colour, 1),
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: rgba(colour, 0.8)
      };
    }

    function getRandomInt (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function rgba (colour, alpha) {
      if (usingExcanvas) {
        // rgba not supported by IE8
        return 'rgb(' + colour.join(',') + ')';
      } else {
        return 'rgba(' + colour.concat(alpha).join(',') + ')';
      }
    }

    // Credit: http://stackoverflow.com/a/11508164/1190235
    function hexToRgb (hex) {
      var bigint = parseInt(hex, 16),
        r = (bigint >> 16) & 255,
        g = (bigint >> 8) & 255,
        b = bigint & 255;

      return [r, g, b];
    }

    function getDataSets (labels, data, series, colours) {
      return {
        labels: labels,
        datasets: data.map(function (item, i) {
          return angular.extend({}, colours[i], {
            label: series[i],
            data: item
          });
        })
      };
    }

    function getData (labels, data, colours) {
      return labels.map(function (label, i) {
        return angular.extend({}, colours[i], {
          label: label,
          value: data[i],
          color: colours[i].strokeColor,
          highlight: colours[i].pointHighlightStroke
        });
      });
    }

    function setLegend (elem, chart) {
      var $parent = elem.parent(),
          $oldLegend = $parent.find('chart-legend'),
          legend = '<chart-legend>' + chart.generateLegend() + '</chart-legend>';
      if ($oldLegend.length) $oldLegend.replaceWith(legend);
      else $parent.append(legend);
    }

    function updateChart (chart, values, scope, elem) {
      if (Array.isArray(scope.data[0])) {
        chart.datasets.forEach(function (dataset, i) {
          (dataset.points || dataset.bars).forEach(function (dataItem, j) {
            dataItem.value = values[i][j];
          });
        });
      } else {
        chart.segments.forEach(function (segment, i) {
          segment.value = values[i];
        });
      }
      chart.update();
      scope.$emit('update', chart);
      if (scope.legend && scope.legend !== 'false') setLegend(elem, chart);
    }

    function isEmpty (value) {
      return ! value ||
        (Array.isArray(value) && ! value.length) ||
        (typeof value === 'object' && ! Object.keys(value).length);
    }

    function isResponsive (type, scope) {
      var options = angular.extend({}, Chart.defaults.global, ChartJs.getOptions(type), scope.options);
      return options.responsive;
    }
  }
}));

/*Chartist*/

(function(root, factory) {
  // if (typeof define === 'function' && define.amd) {
  //   define(["angular","chartist"], factory);
  // } else if (typeof exports === 'object') {
  //   module.exports = factory(require('angular'), require('chartist'));
  // } else {
    root.angularChartist = factory(root.angular, root.Chartist);
  //}
}(this, function(angular, Chartist) {

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*global angular, Chartist*/

var AngularChartistCtrl = (function () {
    function AngularChartistCtrl($scope, $element) {
        var _this = this;

        _classCallCheck(this, AngularChartistCtrl);

        this.data = $scope.data;
        this.chartType = $scope.chartType;

        this.events = $scope.events() || {};
        this.options = $scope.chartOptions() || null;
        this.responsiveOptions = $scope.responsiveOptions() || null;

        this.element = $element[0];

        this.renderChart();

        $scope.$watch(function () {
            return {
                data: $scope.data,
                chartType: $scope.chartType,
                chartOptions: $scope.chartOptions()
            };
        }, this.update.bind(this), true);

        $scope.$on('$destroy', function () {
            if (_this.chart) {
                _this.chart.detach();
            }
        });
    }

    _createClass(AngularChartistCtrl, [{
        key: 'bindEvents',
        value: function bindEvents() {
            var _this2 = this;

            Object.keys(this.events).forEach(function (eventName) {
                _this2.chart.on(eventName, _this2.events[eventName]);
            });
        }
    }, {
        key: 'renderChart',
        value: function renderChart() {
            // ensure that the chart does not get created without data
            if (this.data) {
                this.chart = Chartist[this.chartType](this.element, this.data, this.options, this.responsiveOptions);

                this.bindEvents();

                return this.chart;
            }
        }
    }, {
        key: 'update',
        value: function update(newConfig, oldConfig) {
            // Update controller with new configuration
            this.chartType = newConfig.chartType;
            this.data = newConfig.data;
            this.options = newConfig.chartOptions;

            // If chart type changed we need to recreate whole chart, otherwise we can update
            if (!this.chart || newConfig.chartType !== oldConfig.chartType) {
                this.renderChart();
            } else {
                this.chart.update(this.data, this.options);
            }
        }
    }]);

    return AngularChartistCtrl;
})();

AngularChartistCtrl.$inject = ['$scope', '$element'];

function chartistDirective() {
    return {
        restrict: 'EA',
        scope: {
            // mandatory
            data: '=chartistData',
            chartType: '@chartistChartType',
            // optional
            events: '&chartistEvents',
            chartOptions: '&chartistChartOptions',
            responsiveOptions: '&chartistResponsiveOptions'
        },
        controller: 'AngularChartistCtrl'
    };
}

chartistDirective.$inject = [];

/*eslint-disable no-unused-vars */
var angularChartist = angular.module('angular-chartist', []).controller('AngularChartistCtrl', AngularChartistCtrl).directive('chartist', chartistDirective);
/*eslint-enable no-unused-vars */
return angularChartist;

}));


/*! c3-angular - v0.7.1 - 2015-09-08
* https://github.com/jettro/c3-angular-sample
* Copyright (c) 2015 ; Licensed  */

function ChartAxes(){var a=function(a,b,c,d){var e=c.valuesX;e&&d.addXAxisValues(e);var f=c.valuesXs,g={};if(f){xsItems=f.split(",");for(var h in xsItems)xsItem=xsItems[h].split(":"),g[xsItem[0]]=xsItem[1];d.addXSValues(g)}var i=c.y,j=c.y2,k={};if(j){var l=j.split(",");for(var m in l)k[l[m]]="y2";if(i){var n=i.split(",");for(var o in n)k[n[o]]="y"}d.addYAxis(k)}};return{require:"^c3chart",restrict:"E",scope:{},replace:!0,link:a}}function ChartAxis(){var a=function(a,b,c,d){var e=c.axisRotate;e&&d.rotateAxis()};return{require:"^c3chart",restrict:"E",scope:{},transclude:!0,template:"<div ng-transclude></div>",replace:!0,link:a}}function ChartAxisX(){var a=function(a,b,c,d){var e=c.axisPosition,f=c.axisLabel,g={label:{text:f,position:e}},h=c.paddingLeft,i=c.paddingRight;(h||i)&&(h=h?h:0,i=i?i:0,g.padding={left:parseInt(h),right:parseInt(i)});var j=c.axisHeight;j&&(g.height=parseInt(j)),"false"===c.show&&(g.show=!1),"true"===c.axisLocaltime&&(g.localtime=!0);var k=c.axisMax;k&&(g.max=k);var l=c.axisMin;l&&(g.min=l);var m=c.axisType;m&&(g.type=m),d.addAxisProperties("x",g)};return{require:"^c3chart",restrict:"E",scope:{},transclude:!0,template:"<div ng-transclude></div>",replace:!0,link:a}}function ChartAxisXTick(){var a=function(a,b,c,d){var e={},f=c.tickCount;f&&(e.count=f);var g=c.tickCulling;g&&(g=angular.lowercase(g),"true"===g?e.culling=!0:"false"===g&&(e.culling=!1));var h=c.tickCullingMax;h&&(e.culling={max:parseInt(h)});var i=c.tickMultiline;i&&(i=angular.lowercase(i),"true"===i?e.multiline=!0:"false"===i&&(e.multiline=!1));var j=c.tickCentered;j&&(j=angular.lowercase(j),"true"===j?e.centered=!0:"false"===j&&(e.centered=!1));var k=c.tickRotate;k&&(e.rotate=k);var l=c.tickFit;l&&(l=angular.lowercase(l),"true"===l?e.fit=!0:"false"===l&&(e.fit=!1));var m=c.tickValues;m&&(e.values=m);var n=c.tickOuter;n&&(n=angular.lowercase(n),"true"===n?e.outer=!0:"false"===n&&(e.outer=!1));var o=c.format;o&&(e.format=d3.format(o)),d.addXTick(e),c.tickFormatFunction&&d.addXTickFormatFunction(a.tickFormatFunction())};return{require:"^c3chart",restrict:"E",scope:{tickFormatFunction:"&"},replace:!0,link:a}}function ChartAxisY(){var a=function(a,b,c,d){var e=c.axisId,f=c.axisPosition,g=c.axisLabel;e=void 0==e?"y":e;var h={label:{text:g,position:f}};"false"===c.show?h.show=!1:"y2"===e&&(h.show=!0);var i=c.paddingTop,j=c.paddingBottom;(i||j)&&(i=i?i:0,j=j?j:0,h.padding={top:parseInt(i),bottom:parseInt(j)});var k=c.axisMax,l=c.axisMin;k&&(h.max=parseInt(k)),l&&(h.min=parseInt(l)),"true"===c.axisInverted&&(h.inverted=!0),"true"===c.axisInner&&(h.inner=!0);var m=c.axisCenter;m&&(h.center=parseInt(m)),d.addAxisProperties(e,h)};return{require:"^c3chart",restrict:"E",scope:{},replace:!0,link:a}}function ChartAxisYTick(){var a=function(a,b,c,d){var e={},f=c.tickCount;f&&(e.count=f);var g=c.tickOuter;g&&(g=angular.lowercase(g),"true"===g?e.outer=!0:"false"===g&&(e.outer=!1));var h=c.tickValues;h&&(e.values=h);var i=c.tickFormat;i&&(e.format=d3.format(i)),d.addYTick(e),c.tickFormatFunction&&d.addYTickFormatFunction(a.tickFormatFunction())};return{require:"^c3chart",restrict:"E",scope:{tickFormatFunction:"&"},replace:!0,link:a}}function ChartBar(){var a=function(a,b,c,d){var e={};c.width&&(e.width=parseInt(c.width)),c.ratio&&(e.width||(e.width={}),e.width.ratio=parseFloat(c.ratio)),c.zerobased&&(e.zerobased="true"===c.zerobased),d.addBar(e)};return{require:"^c3chart",restrict:"E",scope:{},replace:!0,link:a}}function C3Chart(a){var b=function(b,c,d,e){var f=d.paddingTop,g=d.paddingRight,h=d.paddingBottom,i=d.paddingLeft,j=d.sortData;f&&e.addPadding("top",f),g&&e.addPadding("right",g),h&&e.addPadding("bottom",h),i&&e.addPadding("left",i),j&&e.addSorting(j),d.labelsFormatFunction&&e.addDataLabelsFormatFunction(b.labelsFormatFunction()),d.callbackFunction&&e.addChartCallbackFunction(b.callbackFunction()),a(function(){e.showGraph()})};return{restrict:"E",controller:"ChartController",scope:{bindto:"@bindtoId",showLabels:"@showLabels",labelsFormatFunction:"&",showSubchart:"@showSubchart",enableZoom:"@enableZoom",chartData:"=chartData",chartColumns:"=chartColumns",chartX:"=chartX",callbackFunction:"&"},template:"<div><div id='{{bindto}}'></div><div ng-transclude></div></div>",replace:!0,transclude:!0,link:b}}function ChartColors(){var a=function(a,b,c,d){var e=c.colorPattern;e&&d.addColors(e.split(",")),c.colorFunction&&d.addColorFunction(a.colorFunction())};return{require:"^c3chart",restrict:"E",scope:{colorFunction:"&"},replace:!0,link:a}}function ChartColumn(){var a=function(a,b,c,d){var e=c.columnValues.split(",");e.unshift(c.columnId),d.addColumn(e,c.columnType,c.columnName,c.columnColor)};return{require:"^c3chart",restrict:"E",scope:{},replace:!0,link:a}}function ChartDonut(){var a=function(a,b,c,d){var e={};c.showLabel&&(e.label={show:"true"===c.showLabel}),c.thresholdLabel&&(e.label||(e.label={}),e.label.threshold=parseFloat(c.thresholdLabel)),c.expand&&(e.expand="true"===c.expand),c.width&&(e.width=parseInt(c.width)),c.title&&(e.title=c.title),d.addDonut(e),c.labelFormatFunction&&d.addDonutLabelFormatFunction(a.labelFormatFunction())};return{require:"^c3chart",restrict:"E",scope:{labelFormatFunction:"&"},replace:!0,link:a}}function ChartEvents(){var a=function(a,b,c,d){c.onInit&&d.addOnInitFunction(a.onInit),c.onMouseover&&d.addOnMouseoverFunction(a.onMouseover),c.onMouseout&&d.addOnMouseoutFunction(a.onMouseout),c.onResize&&d.addOnResizeFunction(a.onResize),c.onResized&&d.addOnResizedFunction(a.onResized),c.onRendered&&d.addOnRenderedFunction(a.onRendered),c.onClickData&&d.addDataOnClickFunction(a.onClickData),c.onMouseoverData&&d.addDataOnMouseoverFunction(a.onMouseoverData),c.onMouseoutData&&d.addDataOnMouseoutFunction(a.onMouseoutData)};return{require:"^c3chart",restrict:"E",scope:{onInit:"&",onMouseover:"&",onMouseout:"&",onResize:"&",onResized:"&",onRendered:"&",onClickData:"&",onMouseoverData:"&",onMouseoutData:"&"},replace:!0,link:a}}function ChartGauge(){var a=function(a,b,c,d){var e={};c.min&&(e.min=parseInt(c.min)),c.max&&(e.max=parseInt(c.max)),c.width&&(e.width=parseInt(c.width)),c.units&&(e.units=c.units),c.showLabel&&(e.label={show:"true"===c.showLabel}),c.expand&&(e.expand="true"===c.expand),d.addGauge(e),c.labelFormatFunction&&d.addGaugeLabelFormatFunction(a.labelFormatFunction())};return{require:"^c3chart",restrict:"E",scope:{labelFormatFunction:"&"},replace:!0,link:a}}function ChartGrid(){var a=function(a,b,c,d){var e=c.showX;e&&"true"===e&&d.addGrid("x");var f=c.showY;f&&"true"===f&&d.addGrid("y");var g=c.showY2;g&&"true"===g&&d.addGrid("y2");var h=c.showFocus;h&&"false"===h&&d.hideGridFocus()};return{require:"^c3chart",restrict:"E",scope:{},replace:!0,link:a,transclude:!0,template:"<div ng-transclude></div>"}}function ChartGridOptional(){var a=function(a,b,c,d){var e=c.axisId,f=c.gridValue,g=c.gridText;d.addGridLine(e,f,g)};return{require:"^c3chart",restrict:"E",scope:{},replace:!0,link:a}}function ChartGroup(){var a=function(a,b,c,d){var e=c.groupValues.split(",");d.addGroup(e)};return{require:"^c3chart",restrict:"E",scope:{},replace:!0,link:a}}function ChartLegend(){var a=function(a,b,c,d){var e=null,f=c.showLegend;if(f&&"false"===f)e={show:!1};else{var g=c.legendPosition;g&&(e={position:g});var h=c.legendInset;h&&(e={position:"inset",inset:{anchor:h}})}null!=e&&d.addLegend(e)};return{require:"^c3chart",restrict:"E",scope:{},replace:!0,link:a}}function ChartPie(){var a=function(a,b,c,d){var e={};c.showLabel&&(e.label={show:"true"===c.showLabel}),c.thresholdLabel&&(e.label||(e.label={}),e.label.threshold=parseFloat(c.thresholdLabel)),c.expand&&(e.expand="true"===c.expand),d.addPie(e),c.labelFormatFunction&&d.addPieLabelFormatFunction(a.labelFormatFunction())};return{require:"^c3chart",restrict:"E",scope:{labelFormatFunction:"&"},replace:!0,link:a}}function ChartPoints(){var a=function(a,b,c,d){var e={};c.showPoint&&(e.show="true"===c.showPoint),c.pointExpandEnabled&&(e.focus||(e.focus={expand:{}}),e.focus.expand.enabled="false"!==c.pointsFocusEnabled),c.pointExpandRadius&&(e.focus||(pie.focus={expand:{}}),e.focus.expand.r=parseInt(c.pointFocusRadius)),c.pointRadius&&(e.r=parseInt(c.pointRadius)),c.pointSelectRadius&&(e.select={r:parseInt(c.pointSelectRadius)}),d.addPoint(e)};return{require:"^c3chart",restrict:"E",scope:{},replace:!0,link:a}}function ChartSize(){var a=function(a,b,c,d){var e=null,f=c.chartWidth,g=c.chartHeight;(f||g)&&(e={},f&&(e.width=parseInt(f)),g&&(e.height=parseInt(g)),d.addSize(e))};return{require:"^c3chart",restrict:"E",scope:{},replace:!0,link:a}}function ChartTooltip(){var a=function(a,b,c,d){var e=null,f=c.showTooltip,g=(c.hideTooltipTitle,c.joinedTooltip);if(f&&"false"===f)e={show:!1};else{var h=c.groupTooltip;h&&"false"===h&&(e={grouped:!1})}g&&"true"===g&&(e=e||{},e.contents=function(a,b,c,d){var e,f,g,h,i,j,k,l=this,m=l.config,n=m.tooltip_format_title||b,o=m.tooltip_format_name||function(a){return a},p=m.tooltip_format_value||c;for(k={tooltipContainer:"c3-tooltip-container",tooltip:"c3-tooltip",tooltipName:"c3-tooltip-name"},f=a[0].x;f<a[0].x+1;f++)a[f]&&(a[f].value||0===a[f].value)&&(e||(g=n?n(a[f].x):a[f].x,e="<table class='"+k.tooltip+"'>"+(g||0===g?"<tr><th colspan='2'>"+g+"</th></tr>":"")),h=p(a[f].value,a[f].ratio,a[f].id,a[f].index),void 0!==h&&(i=o(a[f].name,a[f].ratio,a[f].id,a[f].index),j=l.levelColor?l.levelColor(a[f].value):d(a[f].id),e+="<tr class='"+k.tooltipName+"-"+a[f].id+"'>",e+="<td class='name'><span style='background-color:"+j+"'></span>"+i+"</td>",e+="<td class='value'>"+h+"</td>",e+="</tr>"));return e+"</table>"}),null!=e&&d.addTooltip(e),c.titleFormatFunction&&d.addTooltipTitleFormatFunction(a.titleFormatFunction()),c.nameFormatFunction&&d.addTooltipNameFormatFunction(a.nameFormatFunction()),c.valueFormatFunction&&d.addTooltipValueFormatFunction(a.valueFormatFunction())};return{require:"^c3chart",restrict:"E",scope:{valueFormatFunction:"&",nameFormatFunction:"&",titleFormatFunction:"&"},replace:!0,link:a}}angular.module("gridshore.c3js.chart",[]),angular.module("gridshore.c3js.chart").directive("chartAxes",ChartAxes),angular.module("gridshore.c3js.chart").directive("chartAxis",ChartAxis),angular.module("gridshore.c3js.chart").directive("chartAxisX",ChartAxisX),angular.module("gridshore.c3js.chart").directive("chartAxisXTick",ChartAxisXTick),angular.module("gridshore.c3js.chart").directive("chartAxisY",ChartAxisY),angular.module("gridshore.c3js.chart").directive("chartAxisYTick",ChartAxisYTick),angular.module("gridshore.c3js.chart").directive("chartBar",ChartBar),angular.module("gridshore.c3js.chart").directive("c3chart",["$timeout",function(a){return C3Chart(a)}]),angular.module("gridshore.c3js.chart").directive("chartColors",ChartColors),angular.module("gridshore.c3js.chart").directive("chartColumn",ChartColumn),angular.module("gridshore.c3js.chart").controller("ChartController",["$scope","$timeout",function(a,b){function c(){a.chart=null,a.columns=[],a.types={},a.axis={},a.axes={},a.padding=null,a.xValues=null,a.xsValues=null,a.xTick=null,a.yTick=null,a.names=null,a.colors=null,a.grid=null,a.legend=null,a.tooltip=null,a.chartSize=null,a.colors=null,a.gauge=null,a.jsonKeys=null,a.groups=null,a.sorting=null}function d(b,c,d,e){void 0!==c&&(a.types[b]=c),void 0!==d&&(null===a.names&&(a.names={}),a.names[b]=d),void 0!==e&&(null===a.colors&&(a.colors={}),a.colors[b]=e)}function e(){a.jsonKeys={},a.jsonKeys.value=[],angular.forEach(a.chartColumns,function(b){a.jsonKeys.value.push(b.id),d(b.id,b.type,b.name,b.color)}),a.chartX&&(a.jsonKeys.x=a.chartX.id),a.names&&(a.config.data.names=a.names),a.colors&&(a.config.data.colors=a.colors),a.groups&&(a.config.data.groups=a.groups),a.config.data.keys=a.jsonKeys,a.config.data.json=a.chartData,a.chartIsGenerated?a.chart.load(a.config.data):(a.chart=c3.generate(a.config),a.chartIsGenerated=!0,a.chartCallbackFunction&&a.chartCallbackFunction(a.chart))}c(),this.showGraph=function(){var d={};d.bindto="#"+a.bindto,d.data={},a.xValues&&(d.data.x=a.xValues),a.xsValues&&(d.data.xs=a.xsValues),a.columns&&(d.data.columns=a.columns),d.data.types=a.types,d.data.axes=a.axes,a.names&&(d.data.names=a.names),null!=a.padding&&(d.padding=a.padding),null!=a.sorting&&(d.data.order="null"==a.sorting?null:a.sorting),a.colors&&(d.data.colors=a.colors),a.colorFunction&&(d.data.color=a.colorFunction),a.showLabels&&"true"===a.showLabels&&(d.data.labels=!0),a.dataLabelsFormatFunction&&(d.data.labels=d.data.labels||{},d.data.labels.format=a.dataLabelsFormatFunction),null!=a.groups&&(d.data.groups=a.groups),a.showSubchart&&"true"===a.showSubchart&&(d.subchart={show:!0}),a.enableZoom&&"true"===a.enableZoom&&(d.zoom={enabled:!0}),d.axis=a.axis,a.xTick&&(d.axis.x.tick=a.xTick),a.xTickFormatFunction&&(d.axis.x.tick=d.axis.x.tick||{},d.axis.x.tick.format=a.xTickFormatFunction),a.xType&&(d.axis.x.type=a.xType),a.yTick&&(d.axis.y.tick=a.yTick),a.yTickFormatFunction&&(d.axis.y.tick=d.axis.y.tick||{},d.axis.y.tick.format=a.yTickFormatFunction),null!=a.grid&&(d.grid=a.grid),null!=a.legend&&(d.legend=a.legend),d.tooltip=null!=a.tooltip?a.tooltip:{},a.tooltipTitleFormatFunction&&(d.tooltip.format=d.tooltip.format||{},d.tooltip.format.title=a.tooltipTitleFormatFunction),a.tooltipNameFormatFunction&&(d.tooltip.format=d.tooltip.format||{},d.tooltip.format.name=a.tooltipNameFormatFunction),a.tooltipValueFormatFunction&&(d.tooltip.format=d.tooltip.format||{},d.tooltip.format.value=a.tooltipValueFormatFunction),null!=a.chartSize&&(d.size=a.chartSize),null!=a.colors&&(d.color={pattern:a.colors}),d.gauge=null!=a.gauge?a.gauge:{},a.gaugeLabelFormatFunction&&(d.gauge.label=d.gauge.label||{},d.gauge.label.format=a.gaugeLabelFormatFunction),null!=a.point&&(d.point=a.point),null!=a.bar&&(d.bar=a.bar),null!=a.pie&&(d.pie=a.pie),a.pieLabelFormatFunction&&(d.pie.label=d.pie.label||{},d.pie.label.format=a.pieLabelFormatFunction),d.donut=null!=a.donut?a.donut:{},a.donutLabelFormatFunction&&(d.donut.label=d.donut.label||{},d.donut.label.format=a.donutLabelFormatFunction),null!=a.onInit&&(d.oninit=a.onInit),null!=a.onMouseover&&(d.onmouseover=a.onMouseover),null!=a.onMouseout&&(d.onmouseout=a.onMouseout),null!=a.onRendered&&(d.onrendered=a.onRendered),null!=a.onResize&&(d.onresize=a.onResize),null!=a.onResized&&(d.onresized=a.onResized),null!=a.dataOnClick&&(d.data.onclick=function(b){a.$apply(function(){a.dataOnClick({data:b})})}),null!=a.dataOnMouseover&&(d.data.onmouseover=function(b){a.$apply(function(){a.dataOnMouseover({data:b})})}),null!=a.dataOnMouseout&&(d.data.onmouseout=function(b){a.$apply(function(){a.dataOnMouseout({data:b})})}),a.config=d,a.chartData&&a.chartColumns?a.$watchCollection("chartData",function(){e()}):a.chart=c3.generate(a.config),a.$on("$destroy",function(){b(function(){angular.isDefined(a.chart)&&(a.chart=a.chart.destroy(),c())},1e4)})},this.addColumn=function(b,c,e,f){a.columns.push(b),d(b[0],c,e,f)},this.addDataLabelsFormatFunction=function(b){a.dataLabelsFormatFunction=b},this.addChartCallbackFunction=function(b){a.chartCallbackFunction=b},this.addYAxis=function(b){a.axes=b,a.axis.y2||(a.axis.y2={show:!0})},this.addXAxisValues=function(b){a.xValues=b},this.addXSValues=function(b){a.xsValues=b},this.addAxisProperties=function(b,c){a.axis[b]=c},this.addXTick=function(b){a.xTick=b},this.addXTickFormatFunction=function(b){a.xTickFormatFunction=b},this.addXType=function(b){a.xType=b},this.addYTick=function(b){a.yTick=b},this.addYTickFormatFunction=function(b){a.yTickFormatFunction=b},this.rotateAxis=function(){a.axis.rotated=!0},this.addPadding=function(b,c){null==a.padding&&(a.padding={}),a.padding[b]=parseInt(c)},this.addSorting=function(b){a.sorting=b},this.addGrid=function(b){null==a.grid&&(a.grid={}),null==a.grid[b]&&(a.grid[b]={}),a.grid[b].show=!0},this.addGridLine=function(b,c,d){null==a.grid&&(a.grid={}),"x"===b?(void 0===a.grid.x&&(a.grid.x={}),void 0===a.grid.x.lines&&(a.grid.x.lines=[])):(void 0===a.grid.y&&(a.grid.y={}),void 0===a.grid.y.lines&&(a.grid.y.lines=[])),"y2"===b?a.grid.y.lines.push({value:c,text:d,axis:"y2"}):a.grid[b].lines.push({value:c,text:d})},this.addLegend=function(b){a.legend=b},this.addTooltip=function(b){a.tooltip=b},this.addTooltipTitleFormatFunction=function(b){a.tooltipTitleFormatFunction=b},this.addTooltipNameFormatFunction=function(b){a.tooltipNameFormatFunction=b},this.addTooltipValueFormatFunction=function(b){a.tooltipValueFormatFunction=b},this.addSize=function(b){a.chartSize=b},this.addColors=function(b){a.colors=b},this.addColorFunction=function(b){a.colorFunction=b},this.addOnInitFunction=function(b){a.onInit=b},this.addOnMouseoverFunction=function(b){a.onMouseover=b},this.addOnMouseoutFunction=function(b){a.onMouseout=b},this.addOnRenderedFunction=function(b){a.onRendered=b},this.addOnResizeFunction=function(b){a.onResize=b},this.addOnResizedFunction=function(b){a.onResized=b},this.addDataOnClickFunction=function(b){a.dataOnClick=b},this.addDataOnMouseoverFunction=function(b){a.dataOnMouseover=b},this.addDataOnMouseoutFunction=function(b){a.dataOnMouseout=b},this.addGauge=function(b){a.gauge=b},this.addGaugeLabelFormatFunction=function(b){a.gaugeLabelFormatFunction=b},this.addBar=function(b){a.bar=b},this.addPie=function(b){a.pie=b},this.addPieLabelFormatFunction=function(b){a.pieLabelFormatFunction=b},this.addDonut=function(b){a.donut=b},this.addDonutLabelFormatFunction=function(b){a.donutLabelFormatFunction=b},this.addGroup=function(b){null==a.groups&&(a.groups=[]),a.groups.push(b)},this.addPoint=function(b){a.point=b},this.hideGridFocus=function(){null==a.grid&&(a.grid={}),a.grid.focus={show:!1}}}]),angular.module("gridshore.c3js.chart").directive("chartDonut",ChartDonut),angular.module("gridshore.c3js.chart").directive("chartEvents",ChartEvents),angular.module("gridshore.c3js.chart").directive("chartGauge",ChartGauge),angular.module("gridshore.c3js.chart").directive("chartGrid",ChartGrid),angular.module("gridshore.c3js.chart").directive("chartGridOptional",ChartGridOptional),angular.module("gridshore.c3js.chart").directive("chartGroup",ChartGroup),angular.module("gridshore.c3js.chart").directive("chartLegend",ChartLegend),angular.module("gridshore.c3js.chart").directive("chartPie",ChartPie),angular.module("gridshore.c3js.chart").directive("chartPoints",ChartPoints),angular.module("gridshore.c3js.chart").directive("chartSize",ChartSize),angular.module("gridshore.c3js.chart").directive("chartTooltip",ChartTooltip);
//# sourceMappingURL=c3-angular.min.js.map

!function(){"use strict";angular.module("nvd3",[]).directive("nvd3",["nvd3Utils",function(nvd3Utils){return{restrict:"AE",scope:{data:"=",options:"=",api:"=?",events:"=?",config:"=?",onReady:"&?"},link:function(scope,element){function configure(chart,options,chartType){chart&&options&&angular.forEach(chart,function(value,key){"_"===key[0]||("dispatch"===key?((void 0===options[key]||null===options[key])&&scope._config.extended&&(options[key]={}),configureEvents(value,options[key])):"tooltip"===key?((void 0===options[key]||null===options[key])&&scope._config.extended&&(options[key]={}),configure(chart[key],options[key],chartType)):"contentGenerator"===key?options[key]&&chart[key](options[key]):-1===["axis","clearHighlights","defined","highlightPoint","nvPointerEventsClass","options","rangeBand","rangeBands","scatter","open","close"].indexOf(key)&&(void 0===options[key]||null===options[key]?scope._config.extended&&(options[key]=value()):chart[key](options[key])))})}function configureEvents(dispatch,options){dispatch&&options&&angular.forEach(dispatch,function(value,key){void 0===options[key]||null===options[key]?scope._config.extended&&(options[key]=value.on):dispatch.on(key+"._",options[key])})}function configureWrapper(name){var _=nvd3Utils.deepExtend(defaultWrapper(name),scope.options[name]||{});scope._config.extended&&(scope.options[name]=_);var wrapElement=angular.element("<div></div>").html(_.html||"").addClass(name).addClass(_.className).removeAttr("style").css(_.css);_.html||wrapElement.text(_.text),_.enable&&("title"===name?element.prepend(wrapElement):"subtitle"===name?angular.element(element[0].querySelector(".title")).after(wrapElement):"caption"===name&&element.append(wrapElement))}function configureStyles(){var _=nvd3Utils.deepExtend(defaultStyles(),scope.options.styles||{});scope._config.extended&&(scope.options.styles=_),angular.forEach(_.classes,function(value,key){value?element.addClass(key):element.removeClass(key)}),element.removeAttr("style").css(_.css)}function defaultWrapper(_){switch(_){case"title":return{enable:!1,text:"Write Your Title",className:"h4",css:{width:scope.options.chart.width+"px",textAlign:"center"}};case"subtitle":return{enable:!1,text:"Write Your Subtitle",css:{width:scope.options.chart.width+"px",textAlign:"center"}};case"caption":return{enable:!1,text:"Figure 1. Write Your Caption text.",css:{width:scope.options.chart.width+"px",textAlign:"center"}}}}function defaultStyles(){return{classes:{"with-3d-shadow":!0,"with-transitions":!0,gallery:!1},css:{}}}function dataWatchFn(newData,oldData){newData!==oldData&&(scope._config.disabled||(scope._config.refreshDataOnly?scope.api.update():scope.api.refresh()))}var defaultConfig={extended:!1,visible:!0,disabled:!1,refreshDataOnly:!0,deepWatchOptions:!0,deepWatchData:!0,deepWatchDataDepth:2,debounce:10};scope.isReady=!1,scope._config=angular.extend(defaultConfig,scope.config),scope.api={refresh:function(){scope.api.updateWithOptions(scope.options),scope.isReady=!0},refreshWithTimeout:function(t){setTimeout(function(){scope.api.refresh()},t)},update:function(){scope.chart&&scope.svg?scope.svg.datum(scope.data).call(scope.chart):scope.api.refresh()},updateWithTimeout:function(t){setTimeout(function(){scope.api.update()},t)},updateWithOptions:function(options){scope.api.clearElement(),angular.isDefined(options)!==!1&&scope._config.visible&&(scope.chart=nv.models[options.chart.type](),scope.chart.id=Math.random().toString(36).substr(2,15),angular.forEach(scope.chart,function(value,key){"_"===key[0]||["clearHighlights","highlightPoint","id","options","resizeHandler","state","open","close","tooltipContent"].indexOf(key)>=0||("dispatch"===key?((void 0===options.chart[key]||null===options.chart[key])&&scope._config.extended&&(options.chart[key]={}),configureEvents(scope.chart[key],options.chart[key])):["bars","bars1","bars2","boxplot","bullet","controls","discretebar","distX","distY","interactiveLayer","legend","lines","lines1","lines2","multibar","pie","scatter","sparkline","stack1","stack2","sunburst","tooltip","x2Axis","xAxis","y1Axis","y2Axis","y3Axis","y4Axis","yAxis","yAxis1","yAxis2"].indexOf(key)>=0||"stacked"===key&&"stackedAreaChart"===options.chart.type?((void 0===options.chart[key]||null===options.chart[key])&&scope._config.extended&&(options.chart[key]={}),configure(scope.chart[key],options.chart[key],options.chart.type)):("xTickFormat"!==key&&"yTickFormat"!==key||"lineWithFocusChart"!==options.chart.type)&&("tooltips"===key&&"boxPlotChart"===options.chart.type||("tooltipXContent"!==key&&"tooltipYContent"!==key||"scatterChart"!==options.chart.type)&&(void 0===options.chart[key]||null===options.chart[key]?scope._config.extended&&(options.chart[key]="barColor"===key?value()():value()):scope.chart[key](options.chart[key]))))}),scope.api.updateWithData("sunburstChart"===options.chart.type?angular.copy(scope.data):scope.data),(options.title||scope._config.extended)&&configureWrapper("title"),(options.subtitle||scope._config.extended)&&configureWrapper("subtitle"),(options.caption||scope._config.extended)&&configureWrapper("caption"),(options.styles||scope._config.extended)&&configureStyles(),nv.addGraph(function(){return scope.chart?(scope.chart.resizeHandler&&scope.chart.resizeHandler.clear(),scope.chart.resizeHandler=nv.utils.windowResize(function(){scope.chart&&scope.chart.update&&scope.chart.update()}),void 0!==options.chart.zoom&&["scatterChart","lineChart","candlestickBarChart","cumulativeLineChart","historicalBarChart","ohlcBarChart","stackedAreaChart"].indexOf(options.chart.type)>-1&&nvd3Utils.zoom(scope,options),scope.chart):void 0},options.chart.callback))},updateWithData:function(data){if(data){d3.select(element[0]).select("svg").remove();var h,w;scope.svg=d3.select(element[0]).append("svg"),(h=scope.options.chart.height)&&(isNaN(+h)||(h+="px"),scope.svg.attr("height",h).style({height:h})),(w=scope.options.chart.width)?(isNaN(+w)||(w+="px"),scope.svg.attr("width",w).style({width:w})):scope.svg.attr("width","100%").style({width:"100%"}),scope.svg.datum(data).call(scope.chart)}},clearElement:function(){if(element.find(".title").remove(),element.find(".subtitle").remove(),element.find(".caption").remove(),element.empty(),scope.chart&&scope.chart.tooltip&&scope.chart.tooltip.id&&d3.select("#"+scope.chart.tooltip.id()).remove(),nv.graphs&&scope.chart)for(var i=nv.graphs.length-1;i>=0;i--)nv.graphs[i]&&nv.graphs[i].id===scope.chart.id&&nv.graphs.splice(i,1);nv.tooltip&&nv.tooltip.cleanup&&nv.tooltip.cleanup(),scope.chart&&scope.chart.resizeHandler&&scope.chart.resizeHandler.clear(),scope.chart=null},getScope:function(){return scope},getElement:function(){return element}},scope._config.deepWatchOptions&&scope.$watch("options",nvd3Utils.debounce(function(){scope._config.disabled||scope.api.refresh()},scope._config.debounce,!0),!0),scope._config.deepWatchData&&(1===scope._config.deepWatchDataDepth?scope.$watchCollection("data",dataWatchFn):scope.$watch("data",dataWatchFn,2===scope._config.deepWatchDataDepth)),scope.$watch("config",function(newConfig,oldConfig){newConfig!==oldConfig&&(scope._config=angular.extend(defaultConfig,newConfig),scope.api.refresh())},!0),scope._config.deepWatchOptions||scope._config.deepWatchData||scope.api.refresh(),angular.forEach(scope.events,function(eventHandler,event){scope.$on(event,function(e,args){return eventHandler(e,scope,args)})}),element.on("$destroy",function(){scope.api.clearElement()}),scope.$watch("isReady",function(isReady){isReady&&scope.onReady&&"function"==typeof scope.onReady()&&scope.onReady()(scope,element)})}}}]).factory("nvd3Utils",function(){return{debounce:function(func,wait,immediate){var timeout;return function(){var context=this,args=arguments,later=function(){timeout=null,immediate||func.apply(context,args)},callNow=immediate&&!timeout;clearTimeout(timeout),timeout=setTimeout(later,wait),callNow&&func.apply(context,args)}},deepExtend:function(dst){var me=this;return angular.forEach(arguments,function(obj){obj!==dst&&angular.forEach(obj,function(value,key){dst[key]&&dst[key].constructor&&dst[key].constructor===Object?me.deepExtend(dst[key],value):dst[key]=value})}),dst},zoom:function(scope,options){var zoom=options.chart.zoom,enabled="undefined"==typeof zoom.enabled||null===zoom.enabled?!0:zoom.enabled;if(enabled){var fixDomain,d3zoom,zoomed,unzoomed,xScale=scope.chart.xAxis.scale(),yScale=scope.chart.yAxis.scale(),xDomain=scope.chart.xDomain||xScale.domain,yDomain=scope.chart.yDomain||yScale.domain,x_boundary=xScale.domain().slice(),y_boundary=yScale.domain().slice(),scale=zoom.scale||1,translate=zoom.translate||[0,0],scaleExtent=zoom.scaleExtent||[1,10],useFixedDomain=zoom.useFixedDomain||!1,useNiceScale=zoom.useNiceScale||!1,horizontalOff=zoom.horizontalOff||!1,verticalOff=zoom.verticalOff||!1,unzoomEventType=zoom.unzoomEventType||"dblclick.zoom";useNiceScale&&(xScale.nice(),yScale.nice()),fixDomain=function(domain,boundary){return domain[0]=Math.min(Math.max(domain[0],boundary[0]),boundary[1]-boundary[1]/scaleExtent[1]),domain[1]=Math.max(boundary[0]+boundary[1]/scaleExtent[1],Math.min(domain[1],boundary[1])),domain},zoomed=function(){if(void 0!==zoom.zoomed){var domains=zoom.zoomed(xScale.domain(),yScale.domain());horizontalOff||xDomain([domains.x1,domains.x2]),verticalOff||yDomain([domains.y1,domains.y2])}else horizontalOff||xDomain(useFixedDomain?fixDomain(xScale.domain(),x_boundary):xScale.domain()),verticalOff||yDomain(useFixedDomain?fixDomain(yScale.domain(),y_boundary):yScale.domain());scope.chart.update()},unzoomed=function(){if(void 0!==zoom.unzoomed){var domains=zoom.unzoomed(xScale.domain(),yScale.domain());horizontalOff||xDomain([domains.x1,domains.x2]),verticalOff||yDomain([domains.y1,domains.y2])}else horizontalOff||xDomain(x_boundary),verticalOff||yDomain(y_boundary);d3zoom.scale(scale).translate(translate),scope.chart.update()},d3zoom=d3.behavior.zoom().x(xScale).y(yScale).scaleExtent(scaleExtent).on("zoom",zoomed),scope.svg.call(d3zoom),d3zoom.scale(scale).translate(translate).event(scope.svg),"none"!==unzoomEventType&&scope.svg.on(unzoomEventType,unzoomed)}}}})}();
