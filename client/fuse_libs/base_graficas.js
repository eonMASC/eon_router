/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 1.0.2
 *
 * Copyright 2015 Nick Downie
 * Released under the MIT license
 * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
 */
(function(){"use strict";var t=this,i=t.Chart,e=function(t){this.canvas=t.canvas,this.ctx=t;var i=function(t,i){return t["offset"+i]?t["offset"+i]:document.defaultView.getComputedStyle(t).getPropertyValue(i)},e=this.width=i(t.canvas,"Width"),n=this.height=i(t.canvas,"Height");t.canvas.width=e,t.canvas.height=n;var e=this.width=t.canvas.width,n=this.height=t.canvas.height;return this.aspectRatio=this.width/this.height,s.retinaScale(this),this};e.defaults={global:{animation:!0,animationSteps:60,animationEasing:"easeOutQuart",showScale:!0,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleIntegersOnly:!0,scaleBeginAtZero:!1,scaleFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",responsive:!1,maintainAspectRatio:!0,showTooltips:!0,customTooltips:!1,tooltipEvents:["mousemove","touchstart","touchmove","mouseout"],tooltipFillColor:"rgba(0,0,0,0.8)",tooltipFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",tooltipFontSize:14,tooltipFontStyle:"normal",tooltipFontColor:"#fff",tooltipTitleFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",tooltipTitleFontSize:14,tooltipTitleFontStyle:"bold",tooltipTitleFontColor:"#fff",tooltipYPadding:6,tooltipXPadding:6,tooltipCaretSize:8,tooltipCornerRadius:6,tooltipXOffset:10,tooltipTemplate:"<%if (label){%><%=label%>: <%}%><%= value %>",multiTooltipTemplate:"<%= value %>",multiTooltipKeyBackground:"#fff",onAnimationProgress:function(){},onAnimationComplete:function(){}}},e.types={};var s=e.helpers={},n=s.each=function(t,i,e){var s=Array.prototype.slice.call(arguments,3);if(t)if(t.length===+t.length){var n;for(n=0;n<t.length;n++)i.apply(e,[t[n],n].concat(s))}else for(var o in t)i.apply(e,[t[o],o].concat(s))},o=s.clone=function(t){var i={};return n(t,function(e,s){t.hasOwnProperty(s)&&(i[s]=e)}),i},a=s.extend=function(t){return n(Array.prototype.slice.call(arguments,1),function(i){n(i,function(e,s){i.hasOwnProperty(s)&&(t[s]=e)})}),t},h=s.merge=function(){var t=Array.prototype.slice.call(arguments,0);return t.unshift({}),a.apply(null,t)},l=s.indexOf=function(t,i){if(Array.prototype.indexOf)return t.indexOf(i);for(var e=0;e<t.length;e++)if(t[e]===i)return e;return-1},r=(s.where=function(t,i){var e=[];return s.each(t,function(t){i(t)&&e.push(t)}),e},s.findNextWhere=function(t,i,e){e||(e=-1);for(var s=e+1;s<t.length;s++){var n=t[s];if(i(n))return n}},s.findPreviousWhere=function(t,i,e){e||(e=t.length);for(var s=e-1;s>=0;s--){var n=t[s];if(i(n))return n}},s.inherits=function(t){var i=this,e=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return i.apply(this,arguments)},s=function(){this.constructor=e};return s.prototype=i.prototype,e.prototype=new s,e.extend=r,t&&a(e.prototype,t),e.__super__=i.prototype,e}),c=s.noop=function(){},u=s.uid=function(){var t=0;return function(){return"chart-"+t++}}(),d=s.warn=function(t){window.console&&"function"==typeof window.console.warn&&console.warn(t)},p=s.amd="function"==typeof define&&define.amd,f=s.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},g=s.max=function(t){return Math.max.apply(Math,t)},m=s.min=function(t){return Math.min.apply(Math,t)},v=(s.cap=function(t,i,e){if(f(i)){if(t>i)return i}else if(f(e)&&e>t)return e;return t},s.getDecimalPlaces=function(t){return t%1!==0&&f(t)?t.toString().split(".")[1].length:0}),S=s.radians=function(t){return t*(Math.PI/180)},x=(s.getAngleFromPoint=function(t,i){var e=i.x-t.x,s=i.y-t.y,n=Math.sqrt(e*e+s*s),o=2*Math.PI+Math.atan2(s,e);return 0>e&&0>s&&(o+=2*Math.PI),{angle:o,distance:n}},s.aliasPixel=function(t){return t%2===0?0:.5}),y=(s.splineCurve=function(t,i,e,s){var n=Math.sqrt(Math.pow(i.x-t.x,2)+Math.pow(i.y-t.y,2)),o=Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.y-i.y,2)),a=s*n/(n+o),h=s*o/(n+o);return{inner:{x:i.x-a*(e.x-t.x),y:i.y-a*(e.y-t.y)},outer:{x:i.x+h*(e.x-t.x),y:i.y+h*(e.y-t.y)}}},s.calculateOrderOfMagnitude=function(t){return Math.floor(Math.log(t)/Math.LN10)}),C=(s.calculateScaleRange=function(t,i,e,s,n){var o=2,a=Math.floor(i/(1.5*e)),h=o>=a,l=g(t),r=m(t);l===r&&(l+=.5,r>=.5&&!s?r-=.5:l+=.5);for(var c=Math.abs(l-r),u=y(c),d=Math.ceil(l/(1*Math.pow(10,u)))*Math.pow(10,u),p=s?0:Math.floor(r/(1*Math.pow(10,u)))*Math.pow(10,u),f=d-p,v=Math.pow(10,u),S=Math.round(f/v);(S>a||a>2*S)&&!h;)if(S>a)v*=2,S=Math.round(f/v),S%1!==0&&(h=!0);else if(n&&u>=0){if(v/2%1!==0)break;v/=2,S=Math.round(f/v)}else v/=2,S=Math.round(f/v);return h&&(S=o,v=f/S),{steps:S,stepValue:v,min:p,max:p+S*v}},s.template=function(t,i){function e(t,i){var e=/\W/.test(t)?new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+t.replace(/[\r\t\n]/g," ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');"):s[t]=s[t];return i?e(i):e}if(t instanceof Function)return t(i);var s={};return e(t,i)}),w=(s.generateLabels=function(t,i,e,s){var o=new Array(i);return labelTemplateString&&n(o,function(i,n){o[n]=C(t,{value:e+s*(n+1)})}),o},s.easingEffects={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-1*t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-0.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return 1*((t=t/1-1)*t*t+1)},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-1*((t=t/1-1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-0.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return 1*(t/=1)*t*t*t*t},easeOutQuint:function(t){return 1*((t=t/1-1)*t*t*t*t+1)},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return-1*Math.cos(t/1*(Math.PI/2))+1},easeOutSine:function(t){return 1*Math.sin(t/1*(Math.PI/2))},easeInOutSine:function(t){return-0.5*(Math.cos(Math.PI*t/1)-1)},easeInExpo:function(t){return 0===t?1:1*Math.pow(2,10*(t/1-1))},easeOutExpo:function(t){return 1===t?1:1*(-Math.pow(2,-10*t/1)+1)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*--t)+2)},easeInCirc:function(t){return t>=1?t:-1*(Math.sqrt(1-(t/=1)*t)-1)},easeOutCirc:function(t){return 1*Math.sqrt(1-(t=t/1-1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-0.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var i=1.70158,e=0,s=1;return 0===t?0:1==(t/=1)?1:(e||(e=.3),s<Math.abs(1)?(s=1,i=e/4):i=e/(2*Math.PI)*Math.asin(1/s),-(s*Math.pow(2,10*(t-=1))*Math.sin(2*(1*t-i)*Math.PI/e)))},easeOutElastic:function(t){var i=1.70158,e=0,s=1;return 0===t?0:1==(t/=1)?1:(e||(e=.3),s<Math.abs(1)?(s=1,i=e/4):i=e/(2*Math.PI)*Math.asin(1/s),s*Math.pow(2,-10*t)*Math.sin(2*(1*t-i)*Math.PI/e)+1)},easeInOutElastic:function(t){var i=1.70158,e=0,s=1;return 0===t?0:2==(t/=.5)?1:(e||(e=.3*1.5),s<Math.abs(1)?(s=1,i=e/4):i=e/(2*Math.PI)*Math.asin(1/s),1>t?-.5*s*Math.pow(2,10*(t-=1))*Math.sin(2*(1*t-i)*Math.PI/e):s*Math.pow(2,-10*(t-=1))*Math.sin(2*(1*t-i)*Math.PI/e)*.5+1)},easeInBack:function(t){var i=1.70158;return 1*(t/=1)*t*((i+1)*t-i)},easeOutBack:function(t){var i=1.70158;return 1*((t=t/1-1)*t*((i+1)*t+i)+1)},easeInOutBack:function(t){var i=1.70158;return(t/=.5)<1?.5*t*t*(((i*=1.525)+1)*t-i):.5*((t-=2)*t*(((i*=1.525)+1)*t+i)+2)},easeInBounce:function(t){return 1-w.easeOutBounce(1-t)},easeOutBounce:function(t){return(t/=1)<1/2.75?7.5625*t*t:2/2.75>t?1*(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1*(7.5625*(t-=2.25/2.75)*t+.9375):1*(7.5625*(t-=2.625/2.75)*t+.984375)},easeInOutBounce:function(t){return.5>t?.5*w.easeInBounce(2*t):.5*w.easeOutBounce(2*t-1)+.5}}),b=s.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),P=s.cancelAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t,1e3/60)}}(),L=(s.animationLoop=function(t,i,e,s,n,o){var a=0,h=w[e]||w.linear,l=function(){a++;var e=a/i,r=h(e);t.call(o,r,e,a),s.call(o,r,e),i>a?o.animationFrame=b(l):n.apply(o)};b(l)},s.getRelativePosition=function(t){var i,e,s=t.originalEvent||t,n=t.currentTarget||t.srcElement,o=n.getBoundingClientRect();return s.touches?(i=s.touches[0].clientX-o.left,e=s.touches[0].clientY-o.top):(i=s.clientX-o.left,e=s.clientY-o.top),{x:i,y:e}},s.addEvent=function(t,i,e){t.addEventListener?t.addEventListener(i,e):t.attachEvent?t.attachEvent("on"+i,e):t["on"+i]=e}),k=s.removeEvent=function(t,i,e){t.removeEventListener?t.removeEventListener(i,e,!1):t.detachEvent?t.detachEvent("on"+i,e):t["on"+i]=c},F=(s.bindEvents=function(t,i,e){t.events||(t.events={}),n(i,function(i){t.events[i]=function(){e.apply(t,arguments)},L(t.chart.canvas,i,t.events[i])})},s.unbindEvents=function(t,i){n(i,function(i,e){k(t.chart.canvas,e,i)})}),R=s.getMaximumWidth=function(t){var i=t.parentNode;return i.clientWidth},T=s.getMaximumHeight=function(t){var i=t.parentNode;return i.clientHeight},A=(s.getMaximumSize=s.getMaximumWidth,s.retinaScale=function(t){var i=t.ctx,e=t.canvas.width,s=t.canvas.height;window.devicePixelRatio&&(i.canvas.style.width=e+"px",i.canvas.style.height=s+"px",i.canvas.height=s*window.devicePixelRatio,i.canvas.width=e*window.devicePixelRatio,i.scale(window.devicePixelRatio,window.devicePixelRatio))}),M=s.clear=function(t){t.ctx.clearRect(0,0,t.width,t.height)},W=s.fontString=function(t,i,e){return i+" "+t+"px "+e},z=s.longestText=function(t,i,e){t.font=i;var s=0;return n(e,function(i){var e=t.measureText(i).width;s=e>s?e:s}),s},B=s.drawRoundedRectangle=function(t,i,e,s,n,o){t.beginPath(),t.moveTo(i+o,e),t.lineTo(i+s-o,e),t.quadraticCurveTo(i+s,e,i+s,e+o),t.lineTo(i+s,e+n-o),t.quadraticCurveTo(i+s,e+n,i+s-o,e+n),t.lineTo(i+o,e+n),t.quadraticCurveTo(i,e+n,i,e+n-o),t.lineTo(i,e+o),t.quadraticCurveTo(i,e,i+o,e),t.closePath()};e.instances={},e.Type=function(t,i,s){this.options=i,this.chart=s,this.id=u(),e.instances[this.id]=this,i.responsive&&this.resize(),this.initialize.call(this,t)},a(e.Type.prototype,{initialize:function(){return this},clear:function(){return M(this.chart),this},stop:function(){return P(this.animationFrame),this},resize:function(t){this.stop();var i=this.chart.canvas,e=R(this.chart.canvas),s=this.options.maintainAspectRatio?e/this.chart.aspectRatio:T(this.chart.canvas);return i.width=this.chart.width=e,i.height=this.chart.height=s,A(this.chart),"function"==typeof t&&t.apply(this,Array.prototype.slice.call(arguments,1)),this},reflow:c,render:function(t){return t&&this.reflow(),this.options.animation&&!t?s.animationLoop(this.draw,this.options.animationSteps,this.options.animationEasing,this.options.onAnimationProgress,this.options.onAnimationComplete,this):(this.draw(),this.options.onAnimationComplete.call(this)),this},generateLegend:function(){return C(this.options.legendTemplate,this)},destroy:function(){this.clear(),F(this,this.events);var t=this.chart.canvas;t.width=this.chart.width,t.height=this.chart.height,t.style.removeProperty?(t.style.removeProperty("width"),t.style.removeProperty("height")):(t.style.removeAttribute("width"),t.style.removeAttribute("height")),delete e.instances[this.id]},showTooltip:function(t,i){"undefined"==typeof this.activeElements&&(this.activeElements=[]);var o=function(t){var i=!1;return t.length!==this.activeElements.length?i=!0:(n(t,function(t,e){t!==this.activeElements[e]&&(i=!0)},this),i)}.call(this,t);if(o||i){if(this.activeElements=t,this.draw(),this.options.customTooltips&&this.options.customTooltips(!1),t.length>0)if(this.datasets&&this.datasets.length>1){for(var a,h,r=this.datasets.length-1;r>=0&&(a=this.datasets[r].points||this.datasets[r].bars||this.datasets[r].segments,h=l(a,t[0]),-1===h);r--);var c=[],u=[],d=function(){var t,i,e,n,o,a=[],l=[],r=[];return s.each(this.datasets,function(i){t=i.points||i.bars||i.segments,t[h]&&t[h].hasValue()&&a.push(t[h])}),s.each(a,function(t){l.push(t.x),r.push(t.y),c.push(s.template(this.options.multiTooltipTemplate,t)),u.push({fill:t._saved.fillColor||t.fillColor,stroke:t._saved.strokeColor||t.strokeColor})},this),o=m(r),e=g(r),n=m(l),i=g(l),{x:n>this.chart.width/2?n:i,y:(o+e)/2}}.call(this,h);new e.MultiTooltip({x:d.x,y:d.y,xPadding:this.options.tooltipXPadding,yPadding:this.options.tooltipYPadding,xOffset:this.options.tooltipXOffset,fillColor:this.options.tooltipFillColor,textColor:this.options.tooltipFontColor,fontFamily:this.options.tooltipFontFamily,fontStyle:this.options.tooltipFontStyle,fontSize:this.options.tooltipFontSize,titleTextColor:this.options.tooltipTitleFontColor,titleFontFamily:this.options.tooltipTitleFontFamily,titleFontStyle:this.options.tooltipTitleFontStyle,titleFontSize:this.options.tooltipTitleFontSize,cornerRadius:this.options.tooltipCornerRadius,labels:c,legendColors:u,legendColorBackground:this.options.multiTooltipKeyBackground,title:t[0].label,chart:this.chart,ctx:this.chart.ctx,custom:this.options.customTooltips}).draw()}else n(t,function(t){var i=t.tooltipPosition();new e.Tooltip({x:Math.round(i.x),y:Math.round(i.y),xPadding:this.options.tooltipXPadding,yPadding:this.options.tooltipYPadding,fillColor:this.options.tooltipFillColor,textColor:this.options.tooltipFontColor,fontFamily:this.options.tooltipFontFamily,fontStyle:this.options.tooltipFontStyle,fontSize:this.options.tooltipFontSize,caretHeight:this.options.tooltipCaretSize,cornerRadius:this.options.tooltipCornerRadius,text:C(this.options.tooltipTemplate,t),chart:this.chart,custom:this.options.customTooltips}).draw()},this);return this}},toBase64Image:function(){return this.chart.canvas.toDataURL.apply(this.chart.canvas,arguments)}}),e.Type.extend=function(t){var i=this,s=function(){return i.apply(this,arguments)};if(s.prototype=o(i.prototype),a(s.prototype,t),s.extend=e.Type.extend,t.name||i.prototype.name){var n=t.name||i.prototype.name,l=e.defaults[i.prototype.name]?o(e.defaults[i.prototype.name]):{};e.defaults[n]=a(l,t.defaults),e.types[n]=s,e.prototype[n]=function(t,i){var o=h(e.defaults.global,e.defaults[n],i||{});return new s(t,o,this)}}else d("Name not provided for this chart, so it hasn't been registered");return i},e.Element=function(t){a(this,t),this.initialize.apply(this,arguments),this.save()},a(e.Element.prototype,{initialize:function(){},restore:function(t){return t?n(t,function(t){this[t]=this._saved[t]},this):a(this,this._saved),this},save:function(){return this._saved=o(this),delete this._saved._saved,this},update:function(t){return n(t,function(t,i){this._saved[i]=this[i],this[i]=t},this),this},transition:function(t,i){return n(t,function(t,e){this[e]=(t-this._saved[e])*i+this._saved[e]},this),this},tooltipPosition:function(){return{x:this.x,y:this.y}},hasValue:function(){return f(this.value)}}),e.Element.extend=r,e.Point=e.Element.extend({display:!0,inRange:function(t,i){var e=this.hitDetectionRadius+this.radius;return Math.pow(t-this.x,2)+Math.pow(i-this.y,2)<Math.pow(e,2)},draw:function(){if(this.display){var t=this.ctx;t.beginPath(),t.arc(this.x,this.y,this.radius,0,2*Math.PI),t.closePath(),t.strokeStyle=this.strokeColor,t.lineWidth=this.strokeWidth,t.fillStyle=this.fillColor,t.fill(),t.stroke()}}}),e.Arc=e.Element.extend({inRange:function(t,i){var e=s.getAngleFromPoint(this,{x:t,y:i}),n=e.angle>=this.startAngle&&e.angle<=this.endAngle,o=e.distance>=this.innerRadius&&e.distance<=this.outerRadius;return n&&o},tooltipPosition:function(){var t=this.startAngle+(this.endAngle-this.startAngle)/2,i=(this.outerRadius-this.innerRadius)/2+this.innerRadius;return{x:this.x+Math.cos(t)*i,y:this.y+Math.sin(t)*i}},draw:function(t){var i=this.ctx;i.beginPath(),i.arc(this.x,this.y,this.outerRadius,this.startAngle,this.endAngle),i.arc(this.x,this.y,this.innerRadius,this.endAngle,this.startAngle,!0),i.closePath(),i.strokeStyle=this.strokeColor,i.lineWidth=this.strokeWidth,i.fillStyle=this.fillColor,i.fill(),i.lineJoin="bevel",this.showStroke&&i.stroke()}}),e.Rectangle=e.Element.extend({draw:function(){var t=this.ctx,i=this.width/2,e=this.x-i,s=this.x+i,n=this.base-(this.base-this.y),o=this.strokeWidth/2;this.showStroke&&(e+=o,s-=o,n+=o),t.beginPath(),t.fillStyle=this.fillColor,t.strokeStyle=this.strokeColor,t.lineWidth=this.strokeWidth,t.moveTo(e,this.base),t.lineTo(e,n),t.lineTo(s,n),t.lineTo(s,this.base),t.fill(),this.showStroke&&t.stroke()},height:function(){return this.base-this.y},inRange:function(t,i){return t>=this.x-this.width/2&&t<=this.x+this.width/2&&i>=this.y&&i<=this.base}}),e.Tooltip=e.Element.extend({draw:function(){var t=this.chart.ctx;t.font=W(this.fontSize,this.fontStyle,this.fontFamily),this.xAlign="center",this.yAlign="above";var i=this.caretPadding=2,e=t.measureText(this.text).width+2*this.xPadding,s=this.fontSize+2*this.yPadding,n=s+this.caretHeight+i;this.x+e/2>this.chart.width?this.xAlign="left":this.x-e/2<0&&(this.xAlign="right"),this.y-n<0&&(this.yAlign="below");var o=this.x-e/2,a=this.y-n;if(t.fillStyle=this.fillColor,this.custom)this.custom(this);else{switch(this.yAlign){case"above":t.beginPath(),t.moveTo(this.x,this.y-i),t.lineTo(this.x+this.caretHeight,this.y-(i+this.caretHeight)),t.lineTo(this.x-this.caretHeight,this.y-(i+this.caretHeight)),t.closePath(),t.fill();break;case"below":a=this.y+i+this.caretHeight,t.beginPath(),t.moveTo(this.x,this.y+i),t.lineTo(this.x+this.caretHeight,this.y+i+this.caretHeight),t.lineTo(this.x-this.caretHeight,this.y+i+this.caretHeight),t.closePath(),t.fill()}switch(this.xAlign){case"left":o=this.x-e+(this.cornerRadius+this.caretHeight);break;case"right":o=this.x-(this.cornerRadius+this.caretHeight)}B(t,o,a,e,s,this.cornerRadius),t.fill(),t.fillStyle=this.textColor,t.textAlign="center",t.textBaseline="middle",t.fillText(this.text,o+e/2,a+s/2)}}}),e.MultiTooltip=e.Element.extend({initialize:function(){this.font=W(this.fontSize,this.fontStyle,this.fontFamily),this.titleFont=W(this.titleFontSize,this.titleFontStyle,this.titleFontFamily),this.height=this.labels.length*this.fontSize+(this.labels.length-1)*(this.fontSize/2)+2*this.yPadding+1.5*this.titleFontSize,this.ctx.font=this.titleFont;var t=this.ctx.measureText(this.title).width,i=z(this.ctx,this.font,this.labels)+this.fontSize+3,e=g([i,t]);this.width=e+2*this.xPadding;var s=this.height/2;this.y-s<0?this.y=s:this.y+s>this.chart.height&&(this.y=this.chart.height-s),this.x>this.chart.width/2?this.x-=this.xOffset+this.width:this.x+=this.xOffset},getLineHeight:function(t){var i=this.y-this.height/2+this.yPadding,e=t-1;return 0===t?i+this.titleFontSize/2:i+(1.5*this.fontSize*e+this.fontSize/2)+1.5*this.titleFontSize},draw:function(){if(this.custom)this.custom(this);else{B(this.ctx,this.x,this.y-this.height/2,this.width,this.height,this.cornerRadius);var t=this.ctx;t.fillStyle=this.fillColor,t.fill(),t.closePath(),t.textAlign="left",t.textBaseline="middle",t.fillStyle=this.titleTextColor,t.font=this.titleFont,t.fillText(this.title,this.x+this.xPadding,this.getLineHeight(0)),t.font=this.font,s.each(this.labels,function(i,e){t.fillStyle=this.textColor,t.fillText(i,this.x+this.xPadding+this.fontSize+3,this.getLineHeight(e+1)),t.fillStyle=this.legendColorBackground,t.fillRect(this.x+this.xPadding,this.getLineHeight(e+1)-this.fontSize/2,this.fontSize,this.fontSize),t.fillStyle=this.legendColors[e].fill,t.fillRect(this.x+this.xPadding,this.getLineHeight(e+1)-this.fontSize/2,this.fontSize,this.fontSize)},this)}}}),e.Scale=e.Element.extend({initialize:function(){this.fit()},buildYLabels:function(){this.yLabels=[];for(var t=v(this.stepValue),i=0;i<=this.steps;i++)this.yLabels.push(C(this.templateString,{value:(this.min+i*this.stepValue).toFixed(t)}));this.yLabelWidth=this.display&&this.showLabels?z(this.ctx,this.font,this.yLabels):0},addXLabel:function(t){this.xLabels.push(t),this.valuesCount++,this.fit()},removeXLabel:function(){this.xLabels.shift(),this.valuesCount--,this.fit()},fit:function(){this.startPoint=this.display?this.fontSize:0,this.endPoint=this.display?this.height-1.5*this.fontSize-5:this.height,this.startPoint+=this.padding,this.endPoint-=this.padding;var t,i=this.endPoint-this.startPoint;for(this.calculateYRange(i),this.buildYLabels(),this.calculateXLabelRotation();i>this.endPoint-this.startPoint;)i=this.endPoint-this.startPoint,t=this.yLabelWidth,this.calculateYRange(i),this.buildYLabels(),t<this.yLabelWidth&&this.calculateXLabelRotation()},calculateXLabelRotation:function(){this.ctx.font=this.font;var t,i,e=this.ctx.measureText(this.xLabels[0]).width,s=this.ctx.measureText(this.xLabels[this.xLabels.length-1]).width;if(this.xScalePaddingRight=s/2+3,this.xScalePaddingLeft=e/2>this.yLabelWidth+10?e/2:this.yLabelWidth+10,this.xLabelRotation=0,this.display){var n,o=z(this.ctx,this.font,this.xLabels);this.xLabelWidth=o;for(var a=Math.floor(this.calculateX(1)-this.calculateX(0))-6;this.xLabelWidth>a&&0===this.xLabelRotation||this.xLabelWidth>a&&this.xLabelRotation<=90&&this.xLabelRotation>0;)n=Math.cos(S(this.xLabelRotation)),t=n*e,i=n*s,t+this.fontSize/2>this.yLabelWidth+8&&(this.xScalePaddingLeft=t+this.fontSize/2),this.xScalePaddingRight=this.fontSize/2,this.xLabelRotation++,this.xLabelWidth=n*o;this.xLabelRotation>0&&(this.endPoint-=Math.sin(S(this.xLabelRotation))*o+3)}else this.xLabelWidth=0,this.xScalePaddingRight=this.padding,this.xScalePaddingLeft=this.padding},calculateYRange:c,drawingArea:function(){return this.startPoint-this.endPoint},calculateY:function(t){var i=this.drawingArea()/(this.min-this.max);return this.endPoint-i*(t-this.min)},calculateX:function(t){var i=(this.xLabelRotation>0,this.width-(this.xScalePaddingLeft+this.xScalePaddingRight)),e=i/Math.max(this.valuesCount-(this.offsetGridLines?0:1),1),s=e*t+this.xScalePaddingLeft;return this.offsetGridLines&&(s+=e/2),Math.round(s)},update:function(t){s.extend(this,t),this.fit()},draw:function(){var t=this.ctx,i=(this.endPoint-this.startPoint)/this.steps,e=Math.round(this.xScalePaddingLeft);this.display&&(t.fillStyle=this.textColor,t.font=this.font,n(this.yLabels,function(n,o){var a=this.endPoint-i*o,h=Math.round(a),l=this.showHorizontalLines;t.textAlign="right",t.textBaseline="middle",this.showLabels&&t.fillText(n,e-10,a),0!==o||l||(l=!0),l&&t.beginPath(),o>0?(t.lineWidth=this.gridLineWidth,t.strokeStyle=this.gridLineColor):(t.lineWidth=this.lineWidth,t.strokeStyle=this.lineColor),h+=s.aliasPixel(t.lineWidth),l&&(t.moveTo(e,h),t.lineTo(this.width,h),t.stroke(),t.closePath()),t.lineWidth=this.lineWidth,t.strokeStyle=this.lineColor,t.beginPath(),t.moveTo(e-5,h),t.lineTo(e,h),t.stroke(),t.closePath()},this),n(this.xLabels,function(i,e){var s=this.calculateX(e)+x(this.lineWidth),n=this.calculateX(e-(this.offsetGridLines?.5:0))+x(this.lineWidth),o=this.xLabelRotation>0,a=this.showVerticalLines;0!==e||a||(a=!0),a&&t.beginPath(),e>0?(t.lineWidth=this.gridLineWidth,t.strokeStyle=this.gridLineColor):(t.lineWidth=this.lineWidth,t.strokeStyle=this.lineColor),a&&(t.moveTo(n,this.endPoint),t.lineTo(n,this.startPoint-3),t.stroke(),t.closePath()),t.lineWidth=this.lineWidth,t.strokeStyle=this.lineColor,t.beginPath(),t.moveTo(n,this.endPoint),t.lineTo(n,this.endPoint+5),t.stroke(),t.closePath(),t.save(),t.translate(s,o?this.endPoint+12:this.endPoint+8),t.rotate(-1*S(this.xLabelRotation)),t.font=this.font,t.textAlign=o?"right":"center",t.textBaseline=o?"middle":"top",t.fillText(i,0,0),t.restore()},this))}}),e.RadialScale=e.Element.extend({initialize:function(){this.size=m([this.height,this.width]),this.drawingArea=this.display?this.size/2-(this.fontSize/2+this.backdropPaddingY):this.size/2},calculateCenterOffset:function(t){var i=this.drawingArea/(this.max-this.min);return(t-this.min)*i},update:function(){this.lineArc?this.drawingArea=this.display?this.size/2-(this.fontSize/2+this.backdropPaddingY):this.size/2:this.setScaleSize(),this.buildYLabels()},buildYLabels:function(){this.yLabels=[];for(var t=v(this.stepValue),i=0;i<=this.steps;i++)this.yLabels.push(C(this.templateString,{value:(this.min+i*this.stepValue).toFixed(t)}))},getCircumference:function(){return 2*Math.PI/this.valuesCount},setScaleSize:function(){var t,i,e,s,n,o,a,h,l,r,c,u,d=m([this.height/2-this.pointLabelFontSize-5,this.width/2]),p=this.width,g=0;for(this.ctx.font=W(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily),i=0;i<this.valuesCount;i++)t=this.getPointPosition(i,d),e=this.ctx.measureText(C(this.templateString,{value:this.labels[i]})).width+5,0===i||i===this.valuesCount/2?(s=e/2,t.x+s>p&&(p=t.x+s,n=i),t.x-s<g&&(g=t.x-s,a=i)):i<this.valuesCount/2?t.x+e>p&&(p=t.x+e,n=i):i>this.valuesCount/2&&t.x-e<g&&(g=t.x-e,a=i);l=g,r=Math.ceil(p-this.width),o=this.getIndexAngle(n),h=this.getIndexAngle(a),c=r/Math.sin(o+Math.PI/2),u=l/Math.sin(h+Math.PI/2),c=f(c)?c:0,u=f(u)?u:0,this.drawingArea=d-(u+c)/2,this.setCenterPoint(u,c)},setCenterPoint:function(t,i){var e=this.width-i-this.drawingArea,s=t+this.drawingArea;this.xCenter=(s+e)/2,this.yCenter=this.height/2},getIndexAngle:function(t){var i=2*Math.PI/this.valuesCount;return t*i-Math.PI/2},getPointPosition:function(t,i){var e=this.getIndexAngle(t);return{x:Math.cos(e)*i+this.xCenter,y:Math.sin(e)*i+this.yCenter}},draw:function(){if(this.display){var t=this.ctx;if(n(this.yLabels,function(i,e){if(e>0){var s,n=e*(this.drawingArea/this.steps),o=this.yCenter-n;if(this.lineWidth>0)if(t.strokeStyle=this.lineColor,t.lineWidth=this.lineWidth,this.lineArc)t.beginPath(),t.arc(this.xCenter,this.yCenter,n,0,2*Math.PI),t.closePath(),t.stroke();else{t.beginPath();for(var a=0;a<this.valuesCount;a++)s=this.getPointPosition(a,this.calculateCenterOffset(this.min+e*this.stepValue)),0===a?t.moveTo(s.x,s.y):t.lineTo(s.x,s.y);t.closePath(),t.stroke()}if(this.showLabels){if(t.font=W(this.fontSize,this.fontStyle,this.fontFamily),this.showLabelBackdrop){var h=t.measureText(i).width;t.fillStyle=this.backdropColor,t.fillRect(this.xCenter-h/2-this.backdropPaddingX,o-this.fontSize/2-this.backdropPaddingY,h+2*this.backdropPaddingX,this.fontSize+2*this.backdropPaddingY)}t.textAlign="center",t.textBaseline="middle",t.fillStyle=this.fontColor,t.fillText(i,this.xCenter,o)}}},this),!this.lineArc){t.lineWidth=this.angleLineWidth,t.strokeStyle=this.angleLineColor;for(var i=this.valuesCount-1;i>=0;i--){if(this.angleLineWidth>0){var e=this.getPointPosition(i,this.calculateCenterOffset(this.max));t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(e.x,e.y),t.stroke(),t.closePath()}var s=this.getPointPosition(i,this.calculateCenterOffset(this.max)+5);t.font=W(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily),t.fillStyle=this.pointLabelFontColor;var o=this.labels.length,a=this.labels.length/2,h=a/2,l=h>i||i>o-h,r=i===h||i===o-h;t.textAlign=0===i?"center":i===a?"center":a>i?"left":"right",t.textBaseline=r?"middle":l?"bottom":"top",t.fillText(this.labels[i],s.x,s.y)}}}}}),s.addEvent(window,"resize",function(){var t;return function(){clearTimeout(t),t=setTimeout(function(){n(e.instances,function(t){t.options.responsive&&t.resize(t.render,!0)})},50)}}()),p?define(function(){return e}):"object"==typeof module&&module.exports&&(module.exports=e),t.Chart=e,e.noConflict=function(){return t.Chart=i,e}}).call(this),function(){"use strict";var t=this,i=t.Chart,e=i.helpers,s={scaleBeginAtZero:!0,scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,scaleShowHorizontalLines:!0,scaleShowVerticalLines:!0,barShowStroke:!0,barStrokeWidth:2,barValueSpacing:5,barDatasetSpacing:1,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'};i.Type.extend({name:"Bar",defaults:s,initialize:function(t){var s=this.options;this.ScaleClass=i.Scale.extend({offsetGridLines:!0,calculateBarX:function(t,i,e){var n=this.calculateBaseWidth(),o=this.calculateX(e)-n/2,a=this.calculateBarWidth(t);return o+a*i+i*s.barDatasetSpacing+a/2},calculateBaseWidth:function(){return this.calculateX(1)-this.calculateX(0)-2*s.barValueSpacing},calculateBarWidth:function(t){var i=this.calculateBaseWidth()-(t-1)*s.barDatasetSpacing;return i/t}}),this.datasets=[],this.options.showTooltips&&e.bindEvents(this,this.options.tooltipEvents,function(t){var i="mouseout"!==t.type?this.getBarsAtEvent(t):[];this.eachBars(function(t){t.restore(["fillColor","strokeColor"])}),e.each(i,function(t){t.fillColor=t.highlightFill,t.strokeColor=t.highlightStroke}),this.showTooltip(i)}),this.BarClass=i.Rectangle.extend({strokeWidth:this.options.barStrokeWidth,showStroke:this.options.barShowStroke,ctx:this.chart.ctx}),e.each(t.datasets,function(i){var s={label:i.label||null,fillColor:i.fillColor,strokeColor:i.strokeColor,bars:[]};this.datasets.push(s),e.each(i.data,function(e,n){s.bars.push(new this.BarClass({value:e,label:t.labels[n],datasetLabel:i.label,strokeColor:i.strokeColor,fillColor:i.fillColor,highlightFill:i.highlightFill||i.fillColor,highlightStroke:i.highlightStroke||i.strokeColor}))},this)},this),this.buildScale(t.labels),this.BarClass.prototype.base=this.scale.endPoint,this.eachBars(function(t,i,s){e.extend(t,{width:this.scale.calculateBarWidth(this.datasets.length),x:this.scale.calculateBarX(this.datasets.length,s,i),y:this.scale.endPoint}),t.save()},this),this.render()},update:function(){this.scale.update(),e.each(this.activeElements,function(t){t.restore(["fillColor","strokeColor"])}),this.eachBars(function(t){t.save()}),this.render()},eachBars:function(t){e.each(this.datasets,function(i,s){e.each(i.bars,t,this,s)},this)},getBarsAtEvent:function(t){for(var i,s=[],n=e.getRelativePosition(t),o=function(t){s.push(t.bars[i])},a=0;a<this.datasets.length;a++)for(i=0;i<this.datasets[a].bars.length;i++)if(this.datasets[a].bars[i].inRange(n.x,n.y))return e.each(this.datasets,o),s;return s},buildScale:function(t){var i=this,s=function(){var t=[];return i.eachBars(function(i){t.push(i.value)}),t},n={templateString:this.options.scaleLabel,height:this.chart.height,width:this.chart.width,ctx:this.chart.ctx,textColor:this.options.scaleFontColor,fontSize:this.options.scaleFontSize,fontStyle:this.options.scaleFontStyle,fontFamily:this.options.scaleFontFamily,valuesCount:t.length,beginAtZero:this.options.scaleBeginAtZero,integersOnly:this.options.scaleIntegersOnly,calculateYRange:function(t){var i=e.calculateScaleRange(s(),t,this.fontSize,this.beginAtZero,this.integersOnly);e.extend(this,i)},xLabels:t,font:e.fontString(this.options.scaleFontSize,this.options.scaleFontStyle,this.options.scaleFontFamily),lineWidth:this.options.scaleLineWidth,lineColor:this.options.scaleLineColor,showHorizontalLines:this.options.scaleShowHorizontalLines,showVerticalLines:this.options.scaleShowVerticalLines,gridLineWidth:this.options.scaleShowGridLines?this.options.scaleGridLineWidth:0,gridLineColor:this.options.scaleShowGridLines?this.options.scaleGridLineColor:"rgba(0,0,0,0)",padding:this.options.showScale?0:this.options.barShowStroke?this.options.barStrokeWidth:0,showLabels:this.options.scaleShowLabels,display:this.options.showScale};this.options.scaleOverride&&e.extend(n,{calculateYRange:e.noop,steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}),this.scale=new this.ScaleClass(n)},addData:function(t,i){e.each(t,function(t,e){this.datasets[e].bars.push(new this.BarClass({value:t,label:i,x:this.scale.calculateBarX(this.datasets.length,e,this.scale.valuesCount+1),y:this.scale.endPoint,width:this.scale.calculateBarWidth(this.datasets.length),base:this.scale.endPoint,strokeColor:this.datasets[e].strokeColor,fillColor:this.datasets[e].fillColor}))
},this),this.scale.addXLabel(i),this.update()},removeData:function(){this.scale.removeXLabel(),e.each(this.datasets,function(t){t.bars.shift()},this),this.update()},reflow:function(){e.extend(this.BarClass.prototype,{y:this.scale.endPoint,base:this.scale.endPoint});var t=e.extend({height:this.chart.height,width:this.chart.width});this.scale.update(t)},draw:function(t){var i=t||1;this.clear();this.chart.ctx;this.scale.draw(i),e.each(this.datasets,function(t,s){e.each(t.bars,function(t,e){t.hasValue()&&(t.base=this.scale.endPoint,t.transition({x:this.scale.calculateBarX(this.datasets.length,s,e),y:this.scale.calculateY(t.value),width:this.scale.calculateBarWidth(this.datasets.length)},i).draw())},this)},this)}})}.call(this),function(){"use strict";var t=this,i=t.Chart,e=i.helpers,s={segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,percentageInnerCutout:50,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'};i.Type.extend({name:"Doughnut",defaults:s,initialize:function(t){this.segments=[],this.outerRadius=(e.min([this.chart.width,this.chart.height])-this.options.segmentStrokeWidth/2)/2,this.SegmentArc=i.Arc.extend({ctx:this.chart.ctx,x:this.chart.width/2,y:this.chart.height/2}),this.options.showTooltips&&e.bindEvents(this,this.options.tooltipEvents,function(t){var i="mouseout"!==t.type?this.getSegmentsAtEvent(t):[];e.each(this.segments,function(t){t.restore(["fillColor"])}),e.each(i,function(t){t.fillColor=t.highlightColor}),this.showTooltip(i)}),this.calculateTotal(t),e.each(t,function(t,i){this.addData(t,i,!0)},this),this.render()},getSegmentsAtEvent:function(t){var i=[],s=e.getRelativePosition(t);return e.each(this.segments,function(t){t.inRange(s.x,s.y)&&i.push(t)},this),i},addData:function(t,i,e){var s=i||this.segments.length;this.segments.splice(s,0,new this.SegmentArc({value:t.value,outerRadius:this.options.animateScale?0:this.outerRadius,innerRadius:this.options.animateScale?0:this.outerRadius/100*this.options.percentageInnerCutout,fillColor:t.color,highlightColor:t.highlight||t.color,showStroke:this.options.segmentShowStroke,strokeWidth:this.options.segmentStrokeWidth,strokeColor:this.options.segmentStrokeColor,startAngle:1.5*Math.PI,circumference:this.options.animateRotate?0:this.calculateCircumference(t.value),label:t.label})),e||(this.reflow(),this.update())},calculateCircumference:function(t){return 2*Math.PI*(Math.abs(t)/this.total)},calculateTotal:function(t){this.total=0,e.each(t,function(t){this.total+=Math.abs(t.value)},this)},update:function(){this.calculateTotal(this.segments),e.each(this.activeElements,function(t){t.restore(["fillColor"])}),e.each(this.segments,function(t){t.save()}),this.render()},removeData:function(t){var i=e.isNumber(t)?t:this.segments.length-1;this.segments.splice(i,1),this.reflow(),this.update()},reflow:function(){e.extend(this.SegmentArc.prototype,{x:this.chart.width/2,y:this.chart.height/2}),this.outerRadius=(e.min([this.chart.width,this.chart.height])-this.options.segmentStrokeWidth/2)/2,e.each(this.segments,function(t){t.update({outerRadius:this.outerRadius,innerRadius:this.outerRadius/100*this.options.percentageInnerCutout})},this)},draw:function(t){var i=t?t:1;this.clear(),e.each(this.segments,function(t,e){t.transition({circumference:this.calculateCircumference(t.value),outerRadius:this.outerRadius,innerRadius:this.outerRadius/100*this.options.percentageInnerCutout},i),t.endAngle=t.startAngle+t.circumference,t.draw(),0===e&&(t.startAngle=1.5*Math.PI),e<this.segments.length-1&&(this.segments[e+1].startAngle=t.endAngle)},this)}}),i.types.Doughnut.extend({name:"Pie",defaults:e.merge(s,{percentageInnerCutout:0})})}.call(this),function(){"use strict";var t=this,i=t.Chart,e=i.helpers,s={scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,scaleShowHorizontalLines:!0,scaleShowVerticalLines:!0,bezierCurve:!0,bezierCurveTension:.4,pointDot:!0,pointDotRadius:4,pointDotStrokeWidth:1,pointHitDetectionRadius:20,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'};i.Type.extend({name:"Line",defaults:s,initialize:function(t){this.PointClass=i.Point.extend({strokeWidth:this.options.pointDotStrokeWidth,radius:this.options.pointDotRadius,display:this.options.pointDot,hitDetectionRadius:this.options.pointHitDetectionRadius,ctx:this.chart.ctx,inRange:function(t){return Math.pow(t-this.x,2)<Math.pow(this.radius+this.hitDetectionRadius,2)}}),this.datasets=[],this.options.showTooltips&&e.bindEvents(this,this.options.tooltipEvents,function(t){var i="mouseout"!==t.type?this.getPointsAtEvent(t):[];this.eachPoints(function(t){t.restore(["fillColor","strokeColor"])}),e.each(i,function(t){t.fillColor=t.highlightFill,t.strokeColor=t.highlightStroke}),this.showTooltip(i)}),e.each(t.datasets,function(i){var s={label:i.label||null,fillColor:i.fillColor,strokeColor:i.strokeColor,pointColor:i.pointColor,pointStrokeColor:i.pointStrokeColor,points:[]};this.datasets.push(s),e.each(i.data,function(e,n){s.points.push(new this.PointClass({value:e,label:t.labels[n],datasetLabel:i.label,strokeColor:i.pointStrokeColor,fillColor:i.pointColor,highlightFill:i.pointHighlightFill||i.pointColor,highlightStroke:i.pointHighlightStroke||i.pointStrokeColor}))},this),this.buildScale(t.labels),this.eachPoints(function(t,i){e.extend(t,{x:this.scale.calculateX(i),y:this.scale.endPoint}),t.save()},this)},this),this.render()},update:function(){this.scale.update(),e.each(this.activeElements,function(t){t.restore(["fillColor","strokeColor"])}),this.eachPoints(function(t){t.save()}),this.render()},eachPoints:function(t){e.each(this.datasets,function(i){e.each(i.points,t,this)},this)},getPointsAtEvent:function(t){var i=[],s=e.getRelativePosition(t);return e.each(this.datasets,function(t){e.each(t.points,function(t){t.inRange(s.x,s.y)&&i.push(t)})},this),i},buildScale:function(t){var s=this,n=function(){var t=[];return s.eachPoints(function(i){t.push(i.value)}),t},o={templateString:this.options.scaleLabel,height:this.chart.height,width:this.chart.width,ctx:this.chart.ctx,textColor:this.options.scaleFontColor,fontSize:this.options.scaleFontSize,fontStyle:this.options.scaleFontStyle,fontFamily:this.options.scaleFontFamily,valuesCount:t.length,beginAtZero:this.options.scaleBeginAtZero,integersOnly:this.options.scaleIntegersOnly,calculateYRange:function(t){var i=e.calculateScaleRange(n(),t,this.fontSize,this.beginAtZero,this.integersOnly);e.extend(this,i)},xLabels:t,font:e.fontString(this.options.scaleFontSize,this.options.scaleFontStyle,this.options.scaleFontFamily),lineWidth:this.options.scaleLineWidth,lineColor:this.options.scaleLineColor,showHorizontalLines:this.options.scaleShowHorizontalLines,showVerticalLines:this.options.scaleShowVerticalLines,gridLineWidth:this.options.scaleShowGridLines?this.options.scaleGridLineWidth:0,gridLineColor:this.options.scaleShowGridLines?this.options.scaleGridLineColor:"rgba(0,0,0,0)",padding:this.options.showScale?0:this.options.pointDotRadius+this.options.pointDotStrokeWidth,showLabels:this.options.scaleShowLabels,display:this.options.showScale};this.options.scaleOverride&&e.extend(o,{calculateYRange:e.noop,steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}),this.scale=new i.Scale(o)},addData:function(t,i){e.each(t,function(t,e){this.datasets[e].points.push(new this.PointClass({value:t,label:i,x:this.scale.calculateX(this.scale.valuesCount+1),y:this.scale.endPoint,strokeColor:this.datasets[e].pointStrokeColor,fillColor:this.datasets[e].pointColor}))},this),this.scale.addXLabel(i),this.update()},removeData:function(){this.scale.removeXLabel(),e.each(this.datasets,function(t){t.points.shift()},this),this.update()},reflow:function(){var t=e.extend({height:this.chart.height,width:this.chart.width});this.scale.update(t)},draw:function(t){var i=t||1;this.clear();var s=this.chart.ctx,n=function(t){return null!==t.value},o=function(t,i,s){return e.findNextWhere(i,n,s)||t},a=function(t,i,s){return e.findPreviousWhere(i,n,s)||t};this.scale.draw(i),e.each(this.datasets,function(t){var h=e.where(t.points,n);e.each(t.points,function(t,e){t.hasValue()&&t.transition({y:this.scale.calculateY(t.value),x:this.scale.calculateX(e)},i)},this),this.options.bezierCurve&&e.each(h,function(t,i){var s=i>0&&i<h.length-1?this.options.bezierCurveTension:0;t.controlPoints=e.splineCurve(a(t,h,i),t,o(t,h,i),s),t.controlPoints.outer.y>this.scale.endPoint?t.controlPoints.outer.y=this.scale.endPoint:t.controlPoints.outer.y<this.scale.startPoint&&(t.controlPoints.outer.y=this.scale.startPoint),t.controlPoints.inner.y>this.scale.endPoint?t.controlPoints.inner.y=this.scale.endPoint:t.controlPoints.inner.y<this.scale.startPoint&&(t.controlPoints.inner.y=this.scale.startPoint)},this),s.lineWidth=this.options.datasetStrokeWidth,s.strokeStyle=t.strokeColor,s.beginPath(),e.each(h,function(t,i){if(0===i)s.moveTo(t.x,t.y);else if(this.options.bezierCurve){var e=a(t,h,i);s.bezierCurveTo(e.controlPoints.outer.x,e.controlPoints.outer.y,t.controlPoints.inner.x,t.controlPoints.inner.y,t.x,t.y)}else s.lineTo(t.x,t.y)},this),s.stroke(),this.options.datasetFill&&h.length>0&&(s.lineTo(h[h.length-1].x,this.scale.endPoint),s.lineTo(h[0].x,this.scale.endPoint),s.fillStyle=t.fillColor,s.closePath(),s.fill()),e.each(h,function(t){t.draw()})},this)}})}.call(this),function(){"use strict";var t=this,i=t.Chart,e=i.helpers,s={scaleShowLabelBackdrop:!0,scaleBackdropColor:"rgba(255,255,255,0.75)",scaleBeginAtZero:!0,scaleBackdropPaddingY:2,scaleBackdropPaddingX:2,scaleShowLine:!0,segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'};i.Type.extend({name:"PolarArea",defaults:s,initialize:function(t){this.segments=[],this.SegmentArc=i.Arc.extend({showStroke:this.options.segmentShowStroke,strokeWidth:this.options.segmentStrokeWidth,strokeColor:this.options.segmentStrokeColor,ctx:this.chart.ctx,innerRadius:0,x:this.chart.width/2,y:this.chart.height/2}),this.scale=new i.RadialScale({display:this.options.showScale,fontStyle:this.options.scaleFontStyle,fontSize:this.options.scaleFontSize,fontFamily:this.options.scaleFontFamily,fontColor:this.options.scaleFontColor,showLabels:this.options.scaleShowLabels,showLabelBackdrop:this.options.scaleShowLabelBackdrop,backdropColor:this.options.scaleBackdropColor,backdropPaddingY:this.options.scaleBackdropPaddingY,backdropPaddingX:this.options.scaleBackdropPaddingX,lineWidth:this.options.scaleShowLine?this.options.scaleLineWidth:0,lineColor:this.options.scaleLineColor,lineArc:!0,width:this.chart.width,height:this.chart.height,xCenter:this.chart.width/2,yCenter:this.chart.height/2,ctx:this.chart.ctx,templateString:this.options.scaleLabel,valuesCount:t.length}),this.updateScaleRange(t),this.scale.update(),e.each(t,function(t,i){this.addData(t,i,!0)},this),this.options.showTooltips&&e.bindEvents(this,this.options.tooltipEvents,function(t){var i="mouseout"!==t.type?this.getSegmentsAtEvent(t):[];e.each(this.segments,function(t){t.restore(["fillColor"])}),e.each(i,function(t){t.fillColor=t.highlightColor}),this.showTooltip(i)}),this.render()},getSegmentsAtEvent:function(t){var i=[],s=e.getRelativePosition(t);return e.each(this.segments,function(t){t.inRange(s.x,s.y)&&i.push(t)},this),i},addData:function(t,i,e){var s=i||this.segments.length;this.segments.splice(s,0,new this.SegmentArc({fillColor:t.color,highlightColor:t.highlight||t.color,label:t.label,value:t.value,outerRadius:this.options.animateScale?0:this.scale.calculateCenterOffset(t.value),circumference:this.options.animateRotate?0:this.scale.getCircumference(),startAngle:1.5*Math.PI})),e||(this.reflow(),this.update())},removeData:function(t){var i=e.isNumber(t)?t:this.segments.length-1;this.segments.splice(i,1),this.reflow(),this.update()},calculateTotal:function(t){this.total=0,e.each(t,function(t){this.total+=t.value},this),this.scale.valuesCount=this.segments.length},updateScaleRange:function(t){var i=[];e.each(t,function(t){i.push(t.value)});var s=this.options.scaleOverride?{steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}:e.calculateScaleRange(i,e.min([this.chart.width,this.chart.height])/2,this.options.scaleFontSize,this.options.scaleBeginAtZero,this.options.scaleIntegersOnly);e.extend(this.scale,s,{size:e.min([this.chart.width,this.chart.height]),xCenter:this.chart.width/2,yCenter:this.chart.height/2})},update:function(){this.calculateTotal(this.segments),e.each(this.segments,function(t){t.save()}),this.reflow(),this.render()},reflow:function(){e.extend(this.SegmentArc.prototype,{x:this.chart.width/2,y:this.chart.height/2}),this.updateScaleRange(this.segments),this.scale.update(),e.extend(this.scale,{xCenter:this.chart.width/2,yCenter:this.chart.height/2}),e.each(this.segments,function(t){t.update({outerRadius:this.scale.calculateCenterOffset(t.value)})},this)},draw:function(t){var i=t||1;this.clear(),e.each(this.segments,function(t,e){t.transition({circumference:this.scale.getCircumference(),outerRadius:this.scale.calculateCenterOffset(t.value)},i),t.endAngle=t.startAngle+t.circumference,0===e&&(t.startAngle=1.5*Math.PI),e<this.segments.length-1&&(this.segments[e+1].startAngle=t.endAngle),t.draw()},this),this.scale.draw()}})}.call(this),function(){"use strict";var t=this,i=t.Chart,e=i.helpers;i.Type.extend({name:"Radar",defaults:{scaleShowLine:!0,angleShowLineOut:!0,scaleShowLabels:!1,scaleBeginAtZero:!0,angleLineColor:"rgba(0,0,0,.1)",angleLineWidth:1,pointLabelFontFamily:"'Arial'",pointLabelFontStyle:"normal",pointLabelFontSize:10,pointLabelFontColor:"#666",pointDot:!0,pointDotRadius:3,pointDotStrokeWidth:1,pointHitDetectionRadius:20,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'},initialize:function(t){this.PointClass=i.Point.extend({strokeWidth:this.options.pointDotStrokeWidth,radius:this.options.pointDotRadius,display:this.options.pointDot,hitDetectionRadius:this.options.pointHitDetectionRadius,ctx:this.chart.ctx}),this.datasets=[],this.buildScale(t),this.options.showTooltips&&e.bindEvents(this,this.options.tooltipEvents,function(t){var i="mouseout"!==t.type?this.getPointsAtEvent(t):[];this.eachPoints(function(t){t.restore(["fillColor","strokeColor"])}),e.each(i,function(t){t.fillColor=t.highlightFill,t.strokeColor=t.highlightStroke}),this.showTooltip(i)}),e.each(t.datasets,function(i){var s={label:i.label||null,fillColor:i.fillColor,strokeColor:i.strokeColor,pointColor:i.pointColor,pointStrokeColor:i.pointStrokeColor,points:[]};this.datasets.push(s),e.each(i.data,function(e,n){var o;this.scale.animation||(o=this.scale.getPointPosition(n,this.scale.calculateCenterOffset(e))),s.points.push(new this.PointClass({value:e,label:t.labels[n],datasetLabel:i.label,x:this.options.animation?this.scale.xCenter:o.x,y:this.options.animation?this.scale.yCenter:o.y,strokeColor:i.pointStrokeColor,fillColor:i.pointColor,highlightFill:i.pointHighlightFill||i.pointColor,highlightStroke:i.pointHighlightStroke||i.pointStrokeColor}))},this)},this),this.render()},eachPoints:function(t){e.each(this.datasets,function(i){e.each(i.points,t,this)},this)},getPointsAtEvent:function(t){var i=e.getRelativePosition(t),s=e.getAngleFromPoint({x:this.scale.xCenter,y:this.scale.yCenter},i),n=2*Math.PI/this.scale.valuesCount,o=Math.round((s.angle-1.5*Math.PI)/n),a=[];return(o>=this.scale.valuesCount||0>o)&&(o=0),s.distance<=this.scale.drawingArea&&e.each(this.datasets,function(t){a.push(t.points[o])}),a},buildScale:function(t){this.scale=new i.RadialScale({display:this.options.showScale,fontStyle:this.options.scaleFontStyle,fontSize:this.options.scaleFontSize,fontFamily:this.options.scaleFontFamily,fontColor:this.options.scaleFontColor,showLabels:this.options.scaleShowLabels,showLabelBackdrop:this.options.scaleShowLabelBackdrop,backdropColor:this.options.scaleBackdropColor,backdropPaddingY:this.options.scaleBackdropPaddingY,backdropPaddingX:this.options.scaleBackdropPaddingX,lineWidth:this.options.scaleShowLine?this.options.scaleLineWidth:0,lineColor:this.options.scaleLineColor,angleLineColor:this.options.angleLineColor,angleLineWidth:this.options.angleShowLineOut?this.options.angleLineWidth:0,pointLabelFontColor:this.options.pointLabelFontColor,pointLabelFontSize:this.options.pointLabelFontSize,pointLabelFontFamily:this.options.pointLabelFontFamily,pointLabelFontStyle:this.options.pointLabelFontStyle,height:this.chart.height,width:this.chart.width,xCenter:this.chart.width/2,yCenter:this.chart.height/2,ctx:this.chart.ctx,templateString:this.options.scaleLabel,labels:t.labels,valuesCount:t.datasets[0].data.length}),this.scale.setScaleSize(),this.updateScaleRange(t.datasets),this.scale.buildYLabels()},updateScaleRange:function(t){var i=function(){var i=[];return e.each(t,function(t){t.data?i=i.concat(t.data):e.each(t.points,function(t){i.push(t.value)})}),i}(),s=this.options.scaleOverride?{steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}:e.calculateScaleRange(i,e.min([this.chart.width,this.chart.height])/2,this.options.scaleFontSize,this.options.scaleBeginAtZero,this.options.scaleIntegersOnly);e.extend(this.scale,s)},addData:function(t,i){this.scale.valuesCount++,e.each(t,function(t,e){var s=this.scale.getPointPosition(this.scale.valuesCount,this.scale.calculateCenterOffset(t));this.datasets[e].points.push(new this.PointClass({value:t,label:i,x:s.x,y:s.y,strokeColor:this.datasets[e].pointStrokeColor,fillColor:this.datasets[e].pointColor}))},this),this.scale.labels.push(i),this.reflow(),this.update()},removeData:function(){this.scale.valuesCount--,this.scale.labels.shift(),e.each(this.datasets,function(t){t.points.shift()},this),this.reflow(),this.update()},update:function(){this.eachPoints(function(t){t.save()}),this.reflow(),this.render()},reflow:function(){e.extend(this.scale,{width:this.chart.width,height:this.chart.height,size:e.min([this.chart.width,this.chart.height]),xCenter:this.chart.width/2,yCenter:this.chart.height/2}),this.updateScaleRange(this.datasets),this.scale.setScaleSize(),this.scale.buildYLabels()},draw:function(t){var i=t||1,s=this.chart.ctx;this.clear(),this.scale.draw(),e.each(this.datasets,function(t){e.each(t.points,function(t,e){t.hasValue()&&t.transition(this.scale.getPointPosition(e,this.scale.calculateCenterOffset(t.value)),i)},this),s.lineWidth=this.options.datasetStrokeWidth,s.strokeStyle=t.strokeColor,s.beginPath(),e.each(t.points,function(t,i){0===i?s.moveTo(t.x,t.y):s.lineTo(t.x,t.y)},this),s.closePath(),s.stroke(),s.fillStyle=t.fillColor,s.fill(),e.each(t.points,function(t){t.hasValue()&&t.draw()})},this)}})}.call(this);


/*Chartist*/
(function (root, factory) {
  // if (typeof define === 'function' && define.amd) {
  //   // AMD. Register as an anonymous module unless amdModuleId is set
  //   define([], function () {
  //     return (root['Chartist'] = factory());
  //   });
  // } else if (typeof exports === 'object') {
  //   // Node. Does not work with strict CommonJS, but
  //   // only CommonJS-like environments that support module.exports,
  //   // like Node.
  //   module.exports = factory();
  // } else {
    root['Chartist'] = factory();
  //}
}(this, function () {

/* Chartist.js 0.9.5
 * Copyright © 2015 Gion Kunz
 * Free to use under the WTFPL license.
 * http://www.wtfpl.net/
 */
/**
 * The core module of Chartist that is mainly providing static functions and higher level functions for chart modules.
 *
 * @module Chartist.Core
 */
var Chartist = {
  version: '0.9.5'
};

(function (window, document, Chartist) {
  'use strict';

  /**
   * Helps to simplify functional style code
   *
   * @memberof Chartist.Core
   * @param {*} n This exact value will be returned by the noop function
   * @return {*} The same value that was provided to the n parameter
   */
  Chartist.noop = function (n) {
    return n;
  };

  /**
   * Generates a-z from a number 0 to 26
   *
   * @memberof Chartist.Core
   * @param {Number} n A number from 0 to 26 that will result in a letter a-z
   * @return {String} A character from a-z based on the input number n
   */
  Chartist.alphaNumerate = function (n) {
    // Limit to a-z
    return String.fromCharCode(97 + n % 26);
  };

  /**
   * Simple recursive object extend
   *
   * @memberof Chartist.Core
   * @param {Object} target Target object where the source will be merged into
   * @param {Object...} sources This object (objects) will be merged into target and then target is returned
   * @return {Object} An object that has the same reference as target but is extended and merged with the properties of source
   */
  Chartist.extend = function (target) {
    target = target || {};

    var sources = Array.prototype.slice.call(arguments, 1);
    sources.forEach(function(source) {
      for (var prop in source) {
        if (typeof source[prop] === 'object' && source[prop] !== null && !(source[prop] instanceof Array)) {
          target[prop] = Chartist.extend({}, target[prop], source[prop]);
        } else {
          target[prop] = source[prop];
        }
      }
    });

    return target;
  };

  /**
   * Replaces all occurrences of subStr in str with newSubStr and returns a new string.
   *
   * @memberof Chartist.Core
   * @param {String} str
   * @param {String} subStr
   * @param {String} newSubStr
   * @return {String}
   */
  Chartist.replaceAll = function(str, subStr, newSubStr) {
    return str.replace(new RegExp(subStr, 'g'), newSubStr);
  };

  /**
   * Converts a number to a string with a unit. If a string is passed then this will be returned unmodified.
   *
   * @memberof Chartist.Core
   * @param {Number} value
   * @param {String} unit
   * @return {String} Returns the passed number value with unit.
   */
  Chartist.ensureUnit = function(value, unit) {
    if(typeof value === 'number') {
      value = value + unit;
    }

    return value;
  };

  /**
   * Converts a number or string to a quantity object.
   *
   * @memberof Chartist.Core
   * @param {String|Number} input
   * @return {Object} Returns an object containing the value as number and the unit as string.
   */
  Chartist.quantity = function(input) {
    if (typeof input === 'string') {
      var match = (/^(\d+)\s*(.*)$/g).exec(input);
      return {
        value : +match[1],
        unit: match[2] || undefined
      };
    }
    return { value: input };
  };

  /**
   * This is a wrapper around document.querySelector that will return the query if it's already of type Node
   *
   * @memberof Chartist.Core
   * @param {String|Node} query The query to use for selecting a Node or a DOM node that will be returned directly
   * @return {Node}
   */
  Chartist.querySelector = function(query) {
    return query instanceof Node ? query : document.querySelector(query);
  };

  /**
   * Functional style helper to produce array with given length initialized with undefined values
   *
   * @memberof Chartist.Core
   * @param length
   * @return {Array}
   */
  Chartist.times = function(length) {
    return Array.apply(null, new Array(length));
  };

  /**
   * Sum helper to be used in reduce functions
   *
   * @memberof Chartist.Core
   * @param previous
   * @param current
   * @return {*}
   */
  Chartist.sum = function(previous, current) {
    return previous + (current ? current : 0);
  };

  /**
   * Multiply helper to be used in `Array.map` for multiplying each value of an array with a factor.
   *
   * @memberof Chartist.Core
   * @param {Number} factor
   * @returns {Function} Function that can be used in `Array.map` to multiply each value in an array
   */
  Chartist.mapMultiply = function(factor) {
    return function(num) {
      return num * factor;
    };
  };

  /**
   * Add helper to be used in `Array.map` for adding a addend to each value of an array.
   *
   * @memberof Chartist.Core
   * @param {Number} addend
   * @returns {Function} Function that can be used in `Array.map` to add a addend to each value in an array
   */
  Chartist.mapAdd = function(addend) {
    return function(num) {
      return num + addend;
    };
  };

  /**
   * Map for multi dimensional arrays where their nested arrays will be mapped in serial. The output array will have the length of the largest nested array. The callback function is called with variable arguments where each argument is the nested array value (or undefined if there are no more values).
   *
   * @memberof Chartist.Core
   * @param arr
   * @param cb
   * @return {Array}
   */
  Chartist.serialMap = function(arr, cb) {
    var result = [],
        length = Math.max.apply(null, arr.map(function(e) {
          return e.length;
        }));

    Chartist.times(length).forEach(function(e, index) {
      var args = arr.map(function(e) {
        return e[index];
      });

      result[index] = cb.apply(null, args);
    });

    return result;
  };

  /**
   * This helper function can be used to round values with certain precision level after decimal. This is used to prevent rounding errors near float point precision limit.
   *
   * @memberof Chartist.Core
   * @param {Number} value The value that should be rounded with precision
   * @param {Number} [digits] The number of digits after decimal used to do the rounding
   * @returns {number} Rounded value
   */
  Chartist.roundWithPrecision = function(value, digits) {
    var precision = Math.pow(10, digits || Chartist.precision);
    return Math.round(value * precision) / precision;
  };

  /**
   * Precision level used internally in Chartist for rounding. If you require more decimal places you can increase this number.
   *
   * @memberof Chartist.Core
   * @type {number}
   */
  Chartist.precision = 8;

  /**
   * A map with characters to escape for strings to be safely used as attribute values.
   *
   * @memberof Chartist.Core
   * @type {Object}
   */
  Chartist.escapingMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#039;'
  };

  /**
   * This function serializes arbitrary data to a string. In case of data that can't be easily converted to a string, this function will create a wrapper object and serialize the data using JSON.stringify. The outcoming string will always be escaped using Chartist.escapingMap.
   * If called with null or undefined the function will return immediately with null or undefined.
   *
   * @memberof Chartist.Core
   * @param {Number|String|Object} data
   * @return {String}
   */
  Chartist.serialize = function(data) {
    if(data === null || data === undefined) {
      return data;
    } else if(typeof data === 'number') {
      data = ''+data;
    } else if(typeof data === 'object') {
      data = JSON.stringify({data: data});
    }

    return Object.keys(Chartist.escapingMap).reduce(function(result, key) {
      return Chartist.replaceAll(result, key, Chartist.escapingMap[key]);
    }, data);
  };

  /**
   * This function de-serializes a string previously serialized with Chartist.serialize. The string will always be unescaped using Chartist.escapingMap before it's returned. Based on the input value the return type can be Number, String or Object. JSON.parse is used with try / catch to see if the unescaped string can be parsed into an Object and this Object will be returned on success.
   *
   * @memberof Chartist.Core
   * @param {String} data
   * @return {String|Number|Object}
   */
  Chartist.deserialize = function(data) {
    if(typeof data !== 'string') {
      return data;
    }

    data = Object.keys(Chartist.escapingMap).reduce(function(result, key) {
      return Chartist.replaceAll(result, Chartist.escapingMap[key], key);
    }, data);

    try {
      data = JSON.parse(data);
      data = data.data !== undefined ? data.data : data;
    } catch(e) {}

    return data;
  };

  /**
   * Create or reinitialize the SVG element for the chart
   *
   * @memberof Chartist.Core
   * @param {Node} container The containing DOM Node object that will be used to plant the SVG element
   * @param {String} width Set the width of the SVG element. Default is 100%
   * @param {String} height Set the height of the SVG element. Default is 100%
   * @param {String} className Specify a class to be added to the SVG element
   * @return {Object} The created/reinitialized SVG element
   */
  Chartist.createSvg = function (container, width, height, className) {
    var svg;

    width = width || '100%';
    height = height || '100%';

    // Check if there is a previous SVG element in the container that contains the Chartist XML namespace and remove it
    // Since the DOM API does not support namespaces we need to manually search the returned list http://www.w3.org/TR/selectors-api/
    Array.prototype.slice.call(container.querySelectorAll('svg')).filter(function filterChartistSvgObjects(svg) {
      return svg.getAttributeNS('http://www.w3.org/2000/xmlns/', Chartist.xmlNs.prefix);
    }).forEach(function removePreviousElement(svg) {
      container.removeChild(svg);
    });

    // Create svg object with width and height or use 100% as default
    svg = new Chartist.Svg('svg').attr({
      width: width,
      height: height
    }).addClass(className).attr({
      style: 'width: ' + width + '; height: ' + height + ';'
    });

    // Add the DOM node to our container
    container.appendChild(svg._node);

    return svg;
  };


  /**
   * Reverses the series, labels and series data arrays.
   *
   * @memberof Chartist.Core
   * @param data
   */
  Chartist.reverseData = function(data) {
    data.labels.reverse();
    data.series.reverse();
    for (var i = 0; i < data.series.length; i++) {
      if(typeof(data.series[i]) === 'object' && data.series[i].data !== undefined) {
        data.series[i].data.reverse();
      } else if(data.series[i] instanceof Array) {
        data.series[i].reverse();
      }
    }
  };

  /**
   * Convert data series into plain array
   *
   * @memberof Chartist.Core
   * @param {Object} data The series object that contains the data to be visualized in the chart
   * @param {Boolean} reverse If true the whole data is reversed by the getDataArray call. This will modify the data object passed as first parameter. The labels as well as the series order is reversed. The whole series data arrays are reversed too.
   * @param {Boolean} multi Create a multi dimensional array from a series data array where a value object with `x` and `y` values will be created.
   * @return {Array} A plain array that contains the data to be visualized in the chart
   */
  Chartist.getDataArray = function (data, reverse, multi) {
    // If the data should be reversed but isn't we need to reverse it
    // If it's reversed but it shouldn't we need to reverse it back
    // That's required to handle data updates correctly and to reflect the responsive configurations
    if(reverse && !data.reversed || !reverse && data.reversed) {
      Chartist.reverseData(data);
      data.reversed = !data.reversed;
    }

    // Recursively walks through nested arrays and convert string values to numbers and objects with value properties
    // to values. Check the tests in data core -> data normalization for a detailed specification of expected values
    function recursiveConvert(value) {
      if(Chartist.isFalseyButZero(value)) {
        // This is a hole in data and we should return undefined
        return undefined;
      } else if((value.data || value) instanceof Array) {
        return (value.data || value).map(recursiveConvert);
      } else if(value.hasOwnProperty('value')) {
        return recursiveConvert(value.value);
      } else {
        if(multi) {
          var multiValue = {};

          // Single series value arrays are assumed to specify the Y-Axis value
          // For example: [1, 2] => [{x: undefined, y: 1}, {x: undefined, y: 2}]
          // If multi is a string then it's assumed that it specified which dimension should be filled as default
          if(typeof multi === 'string') {
            multiValue[multi] = Chartist.getNumberOrUndefined(value);
          } else {
            multiValue.y = Chartist.getNumberOrUndefined(value);
          }

          multiValue.x = value.hasOwnProperty('x') ? Chartist.getNumberOrUndefined(value.x) : multiValue.x;
          multiValue.y = value.hasOwnProperty('y') ? Chartist.getNumberOrUndefined(value.y) : multiValue.y;

          return multiValue;

        } else {
          return Chartist.getNumberOrUndefined(value);
        }
      }
    }

    return data.series.map(recursiveConvert);
  };

  /**
   * Converts a number into a padding object.
   *
   * @memberof Chartist.Core
   * @param {Object|Number} padding
   * @param {Number} [fallback] This value is used to fill missing values if a incomplete padding object was passed
   * @returns {Object} Returns a padding object containing top, right, bottom, left properties filled with the padding number passed in as argument. If the argument is something else than a number (presumably already a correct padding object) then this argument is directly returned.
   */
  Chartist.normalizePadding = function(padding, fallback) {
    fallback = fallback || 0;

    return typeof padding === 'number' ? {
      top: padding,
      right: padding,
      bottom: padding,
      left: padding
    } : {
      top: typeof padding.top === 'number' ? padding.top : fallback,
      right: typeof padding.right === 'number' ? padding.right : fallback,
      bottom: typeof padding.bottom === 'number' ? padding.bottom : fallback,
      left: typeof padding.left === 'number' ? padding.left : fallback
    };
  };

  Chartist.getMetaData = function(series, index) {
    var value = series.data ? series.data[index] : series[index];
    return value ? Chartist.serialize(value.meta) : undefined;
  };

  /**
   * Calculate the order of magnitude for the chart scale
   *
   * @memberof Chartist.Core
   * @param {Number} value The value Range of the chart
   * @return {Number} The order of magnitude
   */
  Chartist.orderOfMagnitude = function (value) {
    return Math.floor(Math.log(Math.abs(value)) / Math.LN10);
  };

  /**
   * Project a data length into screen coordinates (pixels)
   *
   * @memberof Chartist.Core
   * @param {Object} axisLength The svg element for the chart
   * @param {Number} length Single data value from a series array
   * @param {Object} bounds All the values to set the bounds of the chart
   * @return {Number} The projected data length in pixels
   */
  Chartist.projectLength = function (axisLength, length, bounds) {
    return length / bounds.range * axisLength;
  };

  /**
   * Get the height of the area in the chart for the data series
   *
   * @memberof Chartist.Core
   * @param {Object} svg The svg element for the chart
   * @param {Object} options The Object that contains all the optional values for the chart
   * @return {Number} The height of the area in the chart for the data series
   */
  Chartist.getAvailableHeight = function (svg, options) {
    return Math.max((Chartist.quantity(options.height).value || svg.height()) - (options.chartPadding.top +  options.chartPadding.bottom) - options.axisX.offset, 0);
  };

  /**
   * Get highest and lowest value of data array. This Array contains the data that will be visualized in the chart.
   *
   * @memberof Chartist.Core
   * @param {Array} data The array that contains the data to be visualized in the chart
   * @param {Object} options The Object that contains the chart options
   * @param {String} dimension Axis dimension 'x' or 'y' used to access the correct value and high / low configuration
   * @return {Object} An object that contains the highest and lowest value that will be visualized on the chart.
   */
  Chartist.getHighLow = function (data, options, dimension) {
    // TODO: Remove workaround for deprecated global high / low config. Axis high / low configuration is preferred
    options = Chartist.extend({}, options, dimension ? options['axis' + dimension.toUpperCase()] : {});

    var highLow = {
        high: options.high === undefined ? -Number.MAX_VALUE : +options.high,
        low: options.low === undefined ? Number.MAX_VALUE : +options.low
      };
    var findHigh = options.high === undefined;
    var findLow = options.low === undefined;

    // Function to recursively walk through arrays and find highest and lowest number
    function recursiveHighLow(data) {
      if(data === undefined) {
        return undefined;
      } else if(data instanceof Array) {
        for (var i = 0; i < data.length; i++) {
          recursiveHighLow(data[i]);
        }
      } else {
        var value = dimension ? +data[dimension] : +data;

        if (findHigh && value > highLow.high) {
          highLow.high = value;
        }

        if (findLow && value < highLow.low) {
          highLow.low = value;
        }
      }
    }

    // Start to find highest and lowest number recursively
    if(findHigh || findLow) {
      recursiveHighLow(data);
    }

    // Overrides of high / low based on reference value, it will make sure that the invisible reference value is
    // used to generate the chart. This is useful when the chart always needs to contain the position of the
    // invisible reference value in the view i.e. for bipolar scales.
    if (options.referenceValue || options.referenceValue === 0) {
      highLow.high = Math.max(options.referenceValue, highLow.high);
      highLow.low = Math.min(options.referenceValue, highLow.low);
    }

    // If high and low are the same because of misconfiguration or flat data (only the same value) we need
    // to set the high or low to 0 depending on the polarity
    if (highLow.high <= highLow.low) {
      // If both values are 0 we set high to 1
      if (highLow.low === 0) {
        highLow.high = 1;
      } else if (highLow.low < 0) {
        // If we have the same negative value for the bounds we set bounds.high to 0
        highLow.high = 0;
      } else {
        // If we have the same positive value for the bounds we set bounds.low to 0
        highLow.low = 0;
      }
    }

    return highLow;
  };

  /**
   * Checks if the value is a valid number or string with a number.
   *
   * @memberof Chartist.Core
   * @param value
   * @returns {Boolean}
   */
  Chartist.isNum = function(value) {
    return !isNaN(value) && isFinite(value);
  };

  /**
   * Returns true on all falsey values except the numeric value 0.
   *
   * @memberof Chartist.Core
   * @param value
   * @returns {boolean}
   */
  Chartist.isFalseyButZero = function(value) {
    return !value && value !== 0;
  };

  /**
   * Returns a number if the passed parameter is a valid number or the function will return undefined. On all other values than a valid number, this function will return undefined.
   *
   * @memberof Chartist.Core
   * @param value
   * @returns {*}
   */
  Chartist.getNumberOrUndefined = function(value) {
    return isNaN(+value) ? undefined : +value;
  };

  /**
   * Gets a value from a dimension `value.x` or `value.y` while returning value directly if it's a valid numeric value. If the value is not numeric and it's falsey this function will return undefined.
   *
   * @param value
   * @param dimension
   * @returns {*}
   */
  Chartist.getMultiValue = function(value, dimension) {
    if(Chartist.isNum(value)) {
      return +value;
    } else if(value) {
      return value[dimension || 'y'] || 0;
    } else {
      return 0;
    }
  };

  /**
   * Pollard Rho Algorithm to find smallest factor of an integer value. There are more efficient algorithms for factorization, but this one is quite efficient and not so complex.
   *
   * @memberof Chartist.Core
   * @param {Number} num An integer number where the smallest factor should be searched for
   * @returns {Number} The smallest integer factor of the parameter num.
   */
  Chartist.rho = function(num) {
    if(num === 1) {
      return num;
    }

    function gcd(p, q) {
      if (p % q === 0) {
        return q;
      } else {
        return gcd(q, p % q);
      }
    }

    function f(x) {
      return x * x + 1;
    }

    var x1 = 2, x2 = 2, divisor;
    if (num % 2 === 0) {
      return 2;
    }

    do {
      x1 = f(x1) % num;
      x2 = f(f(x2)) % num;
      divisor = gcd(Math.abs(x1 - x2), num);
    } while (divisor === 1);

    return divisor;
  };

  /**
   * Calculate and retrieve all the bounds for the chart and return them in one array
   *
   * @memberof Chartist.Core
   * @param {Number} axisLength The length of the Axis used for
   * @param {Object} highLow An object containing a high and low property indicating the value range of the chart.
   * @param {Number} scaleMinSpace The minimum projected length a step should result in
   * @param {Boolean} onlyInteger
   * @return {Object} All the values to set the bounds of the chart
   */
  Chartist.getBounds = function (axisLength, highLow, scaleMinSpace, onlyInteger) {
    var i,
      optimizationCounter = 0,
      newMin,
      newMax,
      bounds = {
        high: highLow.high,
        low: highLow.low
      };

    bounds.valueRange = bounds.high - bounds.low;
    bounds.oom = Chartist.orderOfMagnitude(bounds.valueRange);
    bounds.step = Math.pow(10, bounds.oom);
    bounds.min = Math.floor(bounds.low / bounds.step) * bounds.step;
    bounds.max = Math.ceil(bounds.high / bounds.step) * bounds.step;
    bounds.range = bounds.max - bounds.min;
    bounds.numberOfSteps = Math.round(bounds.range / bounds.step);

    // Optimize scale step by checking if subdivision is possible based on horizontalGridMinSpace
    // If we are already below the scaleMinSpace value we will scale up
    var length = Chartist.projectLength(axisLength, bounds.step, bounds);
    var scaleUp = length < scaleMinSpace;
    var smallestFactor = onlyInteger ? Chartist.rho(bounds.range) : 0;

    // First check if we should only use integer steps and if step 1 is still larger than scaleMinSpace so we can use 1
    if(onlyInteger && Chartist.projectLength(axisLength, 1, bounds) >= scaleMinSpace) {
      bounds.step = 1;
    } else if(onlyInteger && smallestFactor < bounds.step && Chartist.projectLength(axisLength, smallestFactor, bounds) >= scaleMinSpace) {
      // If step 1 was too small, we can try the smallest factor of range
      // If the smallest factor is smaller than the current bounds.step and the projected length of smallest factor
      // is larger than the scaleMinSpace we should go for it.
      bounds.step = smallestFactor;
    } else {
      // Trying to divide or multiply by 2 and find the best step value
      while (true) {
        if (scaleUp && Chartist.projectLength(axisLength, bounds.step, bounds) <= scaleMinSpace) {
          bounds.step *= 2;
        } else if (!scaleUp && Chartist.projectLength(axisLength, bounds.step / 2, bounds) >= scaleMinSpace) {
          bounds.step /= 2;
          if(onlyInteger && bounds.step % 1 !== 0) {
            bounds.step *= 2;
            break;
          }
        } else {
          break;
        }

        if(optimizationCounter++ > 1000) {
          throw new Error('Exceeded maximum number of iterations while optimizing scale step!');
        }
      }
    }

    // Narrow min and max based on new step
    newMin = bounds.min;
    newMax = bounds.max;
    while(newMin + bounds.step <= bounds.low) {
      newMin += bounds.step;
    }
    while(newMax - bounds.step >= bounds.high) {
      newMax -= bounds.step;
    }
    bounds.min = newMin;
    bounds.max = newMax;
    bounds.range = bounds.max - bounds.min;

    bounds.values = [];
    for (i = bounds.min; i <= bounds.max; i += bounds.step) {
      bounds.values.push(Chartist.roundWithPrecision(i));
    }

    return bounds;
  };

  /**
   * Calculate cartesian coordinates of polar coordinates
   *
   * @memberof Chartist.Core
   * @param {Number} centerX X-axis coordinates of center point of circle segment
   * @param {Number} centerY X-axis coordinates of center point of circle segment
   * @param {Number} radius Radius of circle segment
   * @param {Number} angleInDegrees Angle of circle segment in degrees
   * @return {{x:Number, y:Number}} Coordinates of point on circumference
   */
  Chartist.polarToCartesian = function (centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  /**
   * Initialize chart drawing rectangle (area where chart is drawn) x1,y1 = bottom left / x2,y2 = top right
   *
   * @memberof Chartist.Core
   * @param {Object} svg The svg element for the chart
   * @param {Object} options The Object that contains all the optional values for the chart
   * @param {Number} [fallbackPadding] The fallback padding if partial padding objects are used
   * @return {Object} The chart rectangles coordinates inside the svg element plus the rectangles measurements
   */
  Chartist.createChartRect = function (svg, options, fallbackPadding) {
    var hasAxis = !!(options.axisX || options.axisY);
    var yAxisOffset = hasAxis ? options.axisY.offset : 0;
    var xAxisOffset = hasAxis ? options.axisX.offset : 0;
    // If width or height results in invalid value (including 0) we fallback to the unitless settings or even 0
    var width = svg.width() || Chartist.quantity(options.width).value || 0;
    var height = svg.height() || Chartist.quantity(options.height).value || 0;
    var normalizedPadding = Chartist.normalizePadding(options.chartPadding, fallbackPadding);

    // If settings were to small to cope with offset (legacy) and padding, we'll adjust
    width = Math.max(width, yAxisOffset + normalizedPadding.left + normalizedPadding.right);
    height = Math.max(height, xAxisOffset + normalizedPadding.top + normalizedPadding.bottom);

    var chartRect = {
      padding: normalizedPadding,
      width: function () {
        return this.x2 - this.x1;
      },
      height: function () {
        return this.y1 - this.y2;
      }
    };

    if(hasAxis) {
      if (options.axisX.position === 'start') {
        chartRect.y2 = normalizedPadding.top + xAxisOffset;
        chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
      } else {
        chartRect.y2 = normalizedPadding.top;
        chartRect.y1 = Math.max(height - normalizedPadding.bottom - xAxisOffset, chartRect.y2 + 1);
      }

      if (options.axisY.position === 'start') {
        chartRect.x1 = normalizedPadding.left + yAxisOffset;
        chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
      } else {
        chartRect.x1 = normalizedPadding.left;
        chartRect.x2 = Math.max(width - normalizedPadding.right - yAxisOffset, chartRect.x1 + 1);
      }
    } else {
      chartRect.x1 = normalizedPadding.left;
      chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
      chartRect.y2 = normalizedPadding.top;
      chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
    }

    return chartRect;
  };

  /**
   * Creates a grid line based on a projected value.
   *
   * @memberof Chartist.Core
   * @param position
   * @param index
   * @param axis
   * @param offset
   * @param length
   * @param group
   * @param classes
   * @param eventEmitter
   */
  Chartist.createGrid = function(position, index, axis, offset, length, group, classes, eventEmitter) {
    var positionalData = {};
    positionalData[axis.units.pos + '1'] = position;
    positionalData[axis.units.pos + '2'] = position;
    positionalData[axis.counterUnits.pos + '1'] = offset;
    positionalData[axis.counterUnits.pos + '2'] = offset + length;

    var gridElement = group.elem('line', positionalData, classes.join(' '));

    // Event for grid draw
    eventEmitter.emit('draw',
      Chartist.extend({
        type: 'grid',
        axis: axis,
        index: index,
        group: group,
        element: gridElement
      }, positionalData)
    );
  };

  /**
   * Creates a label based on a projected value and an axis.
   *
   * @memberof Chartist.Core
   * @param position
   * @param length
   * @param index
   * @param labels
   * @param axis
   * @param axisOffset
   * @param labelOffset
   * @param group
   * @param classes
   * @param useForeignObject
   * @param eventEmitter
   */
  Chartist.createLabel = function(position, length, index, labels, axis, axisOffset, labelOffset, group, classes, useForeignObject, eventEmitter) {
    var labelElement;
    var positionalData = {};

    positionalData[axis.units.pos] = position + labelOffset[axis.units.pos];
    positionalData[axis.counterUnits.pos] = labelOffset[axis.counterUnits.pos];
    positionalData[axis.units.len] = length;
    positionalData[axis.counterUnits.len] = axisOffset - 10;

    if(useForeignObject) {
      // We need to set width and height explicitly to px as span will not expand with width and height being
      // 100% in all browsers
      var content = '<span class="' + classes.join(' ') + '" style="' +
        axis.units.len + ': ' + Math.round(positionalData[axis.units.len]) + 'px; ' +
        axis.counterUnits.len + ': ' + Math.round(positionalData[axis.counterUnits.len]) + 'px">' +
        labels[index] + '</span>';

      labelElement = group.foreignObject(content, Chartist.extend({
        style: 'overflow: visible;'
      }, positionalData));
    } else {
      labelElement = group.elem('text', positionalData, classes.join(' ')).text(labels[index]);
    }

    eventEmitter.emit('draw', Chartist.extend({
      type: 'label',
      axis: axis,
      index: index,
      group: group,
      element: labelElement,
      text: labels[index]
    }, positionalData));
  };

  /**
   * Helper to read series specific options from options object. It automatically falls back to the global option if
   * there is no option in the series options.
   *
   * @param {Object} series Series object
   * @param {Object} options Chartist options object
   * @param {string} key The options key that should be used to obtain the options
   * @returns {*}
   */
  Chartist.getSeriesOption = function(series, options, key) {
    if(series.name && options.series && options.series[series.name]) {
      var seriesOptions = options.series[series.name];
      return seriesOptions.hasOwnProperty(key) ? seriesOptions[key] : options[key];
    } else {
      return options[key];
    }
  };

  /**
   * Provides options handling functionality with callback for options changes triggered by responsive options and media query matches
   *
   * @memberof Chartist.Core
   * @param {Object} options Options set by user
   * @param {Array} responsiveOptions Optional functions to add responsive behavior to chart
   * @param {Object} eventEmitter The event emitter that will be used to emit the options changed events
   * @return {Object} The consolidated options object from the defaults, base and matching responsive options
   */
  Chartist.optionsProvider = function (options, responsiveOptions, eventEmitter) {
    var baseOptions = Chartist.extend({}, options),
      currentOptions,
      mediaQueryListeners = [],
      i;

    function updateCurrentOptions(preventChangedEvent) {
      var previousOptions = currentOptions;
      currentOptions = Chartist.extend({}, baseOptions);

      if (responsiveOptions) {
        for (i = 0; i < responsiveOptions.length; i++) {
          var mql = window.matchMedia(responsiveOptions[i][0]);
          if (mql.matches) {
            currentOptions = Chartist.extend(currentOptions, responsiveOptions[i][1]);
          }
        }
      }

      if(eventEmitter && !preventChangedEvent) {
        eventEmitter.emit('optionsChanged', {
          previousOptions: previousOptions,
          currentOptions: currentOptions
        });
      }
    }

    function removeMediaQueryListeners() {
      mediaQueryListeners.forEach(function(mql) {
        mql.removeListener(updateCurrentOptions);
      });
    }

    if (!window.matchMedia) {
      throw 'window.matchMedia not found! Make sure you\'re using a polyfill.';
    } else if (responsiveOptions) {

      for (i = 0; i < responsiveOptions.length; i++) {
        var mql = window.matchMedia(responsiveOptions[i][0]);
        mql.addListener(updateCurrentOptions);
        mediaQueryListeners.push(mql);
      }
    }
    // Execute initially so we get the correct options
    updateCurrentOptions(true);

    return {
      removeMediaQueryListeners: removeMediaQueryListeners,
      getCurrentOptions: function getCurrentOptions() {
        return Chartist.extend({}, currentOptions);
      }
    };
  };

}(window, document, Chartist));
;/**
 * Chartist path interpolation functions.
 *
 * @module Chartist.Interpolation
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  Chartist.Interpolation = {};

  /**
   * This interpolation function does not smooth the path and the result is only containing lines and no curves.
   *
   * @example
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [[1, 2, 8, 1, 7]]
   * }, {
   *   lineSmooth: Chartist.Interpolation.none({
   *     fillHoles: false
   *   })
   * });
   *
   *
   * @memberof Chartist.Interpolation
   * @return {Function}
   */
  Chartist.Interpolation.none = function(options) {
    var defaultOptions = {
      fillHoles: false
    };
    options = Chartist.extend({}, defaultOptions, options);
    return function none(pathCoordinates, valueData) {
      var path = new Chartist.Svg.Path();
      var hole = true;

      for(var i = 0; i < pathCoordinates.length; i += 2) {
        var currX = pathCoordinates[i];
        var currY = pathCoordinates[i + 1];
        var currData = valueData[i / 2];

        if(currData.value !== undefined) {

          if(hole) {
            path.move(currX, currY, false, currData);
          } else {
            path.line(currX, currY, false, currData);
          }

          hole = false;
        } else if(!options.fillHoles) {
          hole = true;
        }
      }

      return path;
    };
  };

  /**
   * Simple smoothing creates horizontal handles that are positioned with a fraction of the length between two data points. You can use the divisor option to specify the amount of smoothing.
   *
   * Simple smoothing can be used instead of `Chartist.Smoothing.cardinal` if you'd like to get rid of the artifacts it produces sometimes. Simple smoothing produces less flowing lines but is accurate by hitting the points and it also doesn't swing below or above the given data point.
   *
   * All smoothing functions within Chartist are factory functions that accept an options parameter. The simple interpolation function accepts one configuration parameter `divisor`, between 1 and ∞, which controls the smoothing characteristics.
   *
   * @example
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [[1, 2, 8, 1, 7]]
   * }, {
   *   lineSmooth: Chartist.Interpolation.simple({
   *     divisor: 2,
   *     fillHoles: false
   *   })
   * });
   *
   *
   * @memberof Chartist.Interpolation
   * @param {Object} options The options of the simple interpolation factory function.
   * @return {Function}
   */
  Chartist.Interpolation.simple = function(options) {
    var defaultOptions = {
      divisor: 2,
      fillHoles: false
    };
    options = Chartist.extend({}, defaultOptions, options);

    var d = 1 / Math.max(1, options.divisor);

    return function simple(pathCoordinates, valueData) {
      var path = new Chartist.Svg.Path();
      var prevX, prevY, prevData;

      for(var i = 0; i < pathCoordinates.length; i += 2) {
        var currX = pathCoordinates[i];
        var currY = pathCoordinates[i + 1];
        var length = (currX - prevX) * d;
        var currData = valueData[i / 2];

        if(currData.value !== undefined) {

          if(prevData === undefined) {
            path.move(currX, currY, false, currData);
          } else {
            path.curve(
              prevX + length,
              prevY,
              currX - length,
              currY,
              currX,
              currY,
              false,
              currData
            );
          }

          prevX = currX;
          prevY = currY;
          prevData = currData;
        } else if(!options.fillHoles) {
          prevX = currX = prevData = undefined;
        }
      }

      return path;
    };
  };

  /**
   * Cardinal / Catmull-Rome spline interpolation is the default smoothing function in Chartist. It produces nice results where the splines will always meet the points. It produces some artifacts though when data values are increased or decreased rapidly. The line may not follow a very accurate path and if the line should be accurate this smoothing function does not produce the best results.
   *
   * Cardinal splines can only be created if there are more than two data points. If this is not the case this smoothing will fallback to `Chartist.Smoothing.none`.
   *
   * All smoothing functions within Chartist are factory functions that accept an options parameter. The cardinal interpolation function accepts one configuration parameter `tension`, between 0 and 1, which controls the smoothing intensity.
   *
   * @example
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [[1, 2, 8, 1, 7]]
   * }, {
   *   lineSmooth: Chartist.Interpolation.cardinal({
   *     tension: 1,
   *     fillHoles: false
   *   })
   * });
   *
   * @memberof Chartist.Interpolation
   * @param {Object} options The options of the cardinal factory function.
   * @return {Function}
   */
  Chartist.Interpolation.cardinal = function(options) {
    var defaultOptions = {
      tension: 1,
      fillHoles: false
    };

    options = Chartist.extend({}, defaultOptions, options);

    var t = Math.min(1, Math.max(0, options.tension)),
      c = 1 - t;

    // This function will help us to split pathCoordinates and valueData into segments that also contain pathCoordinates
    // and valueData. This way the existing functions can be reused and the segment paths can be joined afterwards.
    // This functionality is necessary to treat "holes" in the line charts
    function splitIntoSegments(pathCoordinates, valueData) {
      var segments = [];
      var hole = true;

      for(var i = 0; i < pathCoordinates.length; i += 2) {
        // If this value is a "hole" we set the hole flag
        if(valueData[i / 2].value === undefined) {
          if(!options.fillHoles) {
            hole = true;
          }
        } else {
          // If it's a valid value we need to check if we're coming out of a hole and create a new empty segment
          if(hole) {
            segments.push({
              pathCoordinates: [],
              valueData: []
            });
            // As we have a valid value now, we are not in a "hole" anymore
            hole = false;
          }

          // Add to the segment pathCoordinates and valueData
          segments[segments.length - 1].pathCoordinates.push(pathCoordinates[i], pathCoordinates[i + 1]);
          segments[segments.length - 1].valueData.push(valueData[i / 2]);
        }
      }

      return segments;
    }

    return function cardinal(pathCoordinates, valueData) {
      // First we try to split the coordinates into segments
      // This is necessary to treat "holes" in line charts
      var segments = splitIntoSegments(pathCoordinates, valueData);

      // If the split resulted in more that one segment we need to interpolate each segment individually and join them
      // afterwards together into a single path.
      if(segments.length > 1) {
        var paths = [];
        // For each segment we will recurse the cardinal function
        segments.forEach(function(segment) {
          paths.push(cardinal(segment.pathCoordinates, segment.valueData));
        });
        // Join the segment path data into a single path and return
        return Chartist.Svg.Path.join(paths);
      } else {
        // If there was only one segment we can proceed regularly by using pathCoordinates and valueData from the first
        // segment
        pathCoordinates = segments[0].pathCoordinates;
        valueData = segments[0].valueData;

        // If less than two points we need to fallback to no smoothing
        if(pathCoordinates.length <= 4) {
          return Chartist.Interpolation.none()(pathCoordinates, valueData);
        }

        var path = new Chartist.Svg.Path().move(pathCoordinates[0], pathCoordinates[1], false, valueData[0]),
          z;

        for (var i = 0, iLen = pathCoordinates.length; iLen - 2 * !z > i; i += 2) {
          var p = [
            {x: +pathCoordinates[i - 2], y: +pathCoordinates[i - 1]},
            {x: +pathCoordinates[i], y: +pathCoordinates[i + 1]},
            {x: +pathCoordinates[i + 2], y: +pathCoordinates[i + 3]},
            {x: +pathCoordinates[i + 4], y: +pathCoordinates[i + 5]}
          ];
          if (z) {
            if (!i) {
              p[0] = {x: +pathCoordinates[iLen - 2], y: +pathCoordinates[iLen - 1]};
            } else if (iLen - 4 === i) {
              p[3] = {x: +pathCoordinates[0], y: +pathCoordinates[1]};
            } else if (iLen - 2 === i) {
              p[2] = {x: +pathCoordinates[0], y: +pathCoordinates[1]};
              p[3] = {x: +pathCoordinates[2], y: +pathCoordinates[3]};
            }
          } else {
            if (iLen - 4 === i) {
              p[3] = p[2];
            } else if (!i) {
              p[0] = {x: +pathCoordinates[i], y: +pathCoordinates[i + 1]};
            }
          }

          path.curve(
            (t * (-p[0].x + 6 * p[1].x + p[2].x) / 6) + (c * p[2].x),
            (t * (-p[0].y + 6 * p[1].y + p[2].y) / 6) + (c * p[2].y),
            (t * (p[1].x + 6 * p[2].x - p[3].x) / 6) + (c * p[2].x),
            (t * (p[1].y + 6 * p[2].y - p[3].y) / 6) + (c * p[2].y),
            p[2].x,
            p[2].y,
            false,
            valueData[(i + 2) / 2]
          );
        }

        return path;
      }
    };
  };

  /**
   * Step interpolation will cause the line chart to move in steps rather than diagonal or smoothed lines. This interpolation will create additional points that will also be drawn when the `showPoint` option is enabled.
   *
   * All smoothing functions within Chartist are factory functions that accept an options parameter. The step interpolation function accepts one configuration parameter `postpone`, that can be `true` or `false`. The default value is `true` and will cause the step to occur where the value actually changes. If a different behaviour is needed where the step is shifted to the left and happens before the actual value, this option can be set to `false`.
   *
   * @example
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [[1, 2, 8, 1, 7]]
   * }, {
   *   lineSmooth: Chartist.Interpolation.step({
   *     postpone: true,
   *     fillHoles: false
   *   })
   * });
   *
   * @memberof Chartist.Interpolation
   * @param options
   * @returns {Function}
   */
  Chartist.Interpolation.step = function(options) {
    var defaultOptions = {
      postpone: true,
      fillHoles: false
    };

    options = Chartist.extend({}, defaultOptions, options);

    return function step(pathCoordinates, valueData) {
      var path = new Chartist.Svg.Path();

      var prevX, prevY, prevData;

      for (var i = 0; i < pathCoordinates.length; i += 2) {
        var currX = pathCoordinates[i];
        var currY = pathCoordinates[i + 1];
        var currData = valueData[i / 2];

        // If the current point is also not a hole we can draw the step lines
        if(currData.value !== undefined) {
          if(prevData === undefined) {
            path.move(currX, currY, false, currData);
          } else {
            if(options.postpone) {
              // If postponed we should draw the step line with the value of the previous value
              path.line(currX, prevY, false, prevData);
            } else {
              // If not postponed we should draw the step line with the value of the current value
              path.line(prevX, currY, false, currData);
            }
            // Line to the actual point (this should only be a Y-Axis movement
            path.line(currX, currY, false, currData);
          }

          prevX = currX;
          prevY = currY;
          prevData = currData;
        } else if(!options.fillHoles) {
          prevX = prevY = prevData = undefined;
        }
      }

      return path;
    };
  };

}(window, document, Chartist));
;/**
 * A very basic event module that helps to generate and catch events.
 *
 * @module Chartist.Event
 */
/* global Chartist */
(function (window, document, Chartist) {
  'use strict';

  Chartist.EventEmitter = function () {
    var handlers = [];

    /**
     * Add an event handler for a specific event
     *
     * @memberof Chartist.Event
     * @param {String} event The event name
     * @param {Function} handler A event handler function
     */
    function addEventHandler(event, handler) {
      handlers[event] = handlers[event] || [];
      handlers[event].push(handler);
    }

    /**
     * Remove an event handler of a specific event name or remove all event handlers for a specific event.
     *
     * @memberof Chartist.Event
     * @param {String} event The event name where a specific or all handlers should be removed
     * @param {Function} [handler] An optional event handler function. If specified only this specific handler will be removed and otherwise all handlers are removed.
     */
    function removeEventHandler(event, handler) {
      // Only do something if there are event handlers with this name existing
      if(handlers[event]) {
        // If handler is set we will look for a specific handler and only remove this
        if(handler) {
          handlers[event].splice(handlers[event].indexOf(handler), 1);
          if(handlers[event].length === 0) {
            delete handlers[event];
          }
        } else {
          // If no handler is specified we remove all handlers for this event
          delete handlers[event];
        }
      }
    }

    /**
     * Use this function to emit an event. All handlers that are listening for this event will be triggered with the data parameter.
     *
     * @memberof Chartist.Event
     * @param {String} event The event name that should be triggered
     * @param {*} data Arbitrary data that will be passed to the event handler callback functions
     */
    function emit(event, data) {
      // Only do something if there are event handlers with this name existing
      if(handlers[event]) {
        handlers[event].forEach(function(handler) {
          handler(data);
        });
      }

      // Emit event to star event handlers
      if(handlers['*']) {
        handlers['*'].forEach(function(starHandler) {
          starHandler(event, data);
        });
      }
    }

    return {
      addEventHandler: addEventHandler,
      removeEventHandler: removeEventHandler,
      emit: emit
    };
  };

}(window, document, Chartist));
;/**
 * This module provides some basic prototype inheritance utilities.
 *
 * @module Chartist.Class
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  function listToArray(list) {
    var arr = [];
    if (list.length) {
      for (var i = 0; i < list.length; i++) {
        arr.push(list[i]);
      }
    }
    return arr;
  }

  /**
   * Method to extend from current prototype.
   *
   * @memberof Chartist.Class
   * @param {Object} properties The object that serves as definition for the prototype that gets created for the new class. This object should always contain a constructor property that is the desired constructor for the newly created class.
   * @param {Object} [superProtoOverride] By default extens will use the current class prototype or Chartist.class. With this parameter you can specify any super prototype that will be used.
   * @return {Function} Constructor function of the new class
   *
   * @example
   * var Fruit = Class.extend({
     * color: undefined,
     *   sugar: undefined,
     *
     *   constructor: function(color, sugar) {
     *     this.color = color;
     *     this.sugar = sugar;
     *   },
     *
     *   eat: function() {
     *     this.sugar = 0;
     *     return this;
     *   }
     * });
   *
   * var Banana = Fruit.extend({
     *   length: undefined,
     *
     *   constructor: function(length, sugar) {
     *     Banana.super.constructor.call(this, 'Yellow', sugar);
     *     this.length = length;
     *   }
     * });
   *
   * var banana = new Banana(20, 40);
   * console.log('banana instanceof Fruit', banana instanceof Fruit);
   * console.log('Fruit is prototype of banana', Fruit.prototype.isPrototypeOf(banana));
   * console.log('bananas prototype is Fruit', Object.getPrototypeOf(banana) === Fruit.prototype);
   * console.log(banana.sugar);
   * console.log(banana.eat().sugar);
   * console.log(banana.color);
   */
  function extend(properties, superProtoOverride) {
    var superProto = superProtoOverride || this.prototype || Chartist.Class;
    var proto = Object.create(superProto);

    Chartist.Class.cloneDefinitions(proto, properties);

    var constr = function() {
      var fn = proto.constructor || function () {},
        instance;

      // If this is linked to the Chartist namespace the constructor was not called with new
      // To provide a fallback we will instantiate here and return the instance
      instance = this === Chartist ? Object.create(proto) : this;
      fn.apply(instance, Array.prototype.slice.call(arguments, 0));

      // If this constructor was not called with new we need to return the instance
      // This will not harm when the constructor has been called with new as the returned value is ignored
      return instance;
    };

    constr.prototype = proto;
    constr.super = superProto;
    constr.extend = this.extend;

    return constr;
  }

  // Variable argument list clones args > 0 into args[0] and retruns modified args[0]
  function cloneDefinitions() {
    var args = listToArray(arguments);
    var target = args[0];

    args.splice(1, args.length - 1).forEach(function (source) {
      Object.getOwnPropertyNames(source).forEach(function (propName) {
        // If this property already exist in target we delete it first
        delete target[propName];
        // Define the property with the descriptor from source
        Object.defineProperty(target, propName,
          Object.getOwnPropertyDescriptor(source, propName));
      });
    });

    return target;
  }

  Chartist.Class = {
    extend: extend,
    cloneDefinitions: cloneDefinitions
  };

}(window, document, Chartist));
;/**
 * Base for all chart types. The methods in Chartist.Base are inherited to all chart types.
 *
 * @module Chartist.Base
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  // TODO: Currently we need to re-draw the chart on window resize. This is usually very bad and will affect performance.
  // This is done because we can't work with relative coordinates when drawing the chart because SVG Path does not
  // work with relative positions yet. We need to check if we can do a viewBox hack to switch to percentage.
  // See http://mozilla.6506.n7.nabble.com/Specyfing-paths-with-percentages-unit-td247474.html
  // Update: can be done using the above method tested here: http://codepen.io/gionkunz/pen/KDvLj
  // The problem is with the label offsets that can't be converted into percentage and affecting the chart container
  /**
   * Updates the chart which currently does a full reconstruction of the SVG DOM
   *
   * @param {Object} [data] Optional data you'd like to set for the chart before it will update. If not specified the update method will use the data that is already configured with the chart.
   * @param {Object} [options] Optional options you'd like to add to the previous options for the chart before it will update. If not specified the update method will use the options that have been already configured with the chart.
   * @param {Boolean} [override] If set to true, the passed options will be used to extend the options that have been configured already. Otherwise the chart default options will be used as the base
   * @memberof Chartist.Base
   */
  function update(data, options, override) {
    if(data) {
      this.data = data;
      // Event for data transformation that allows to manipulate the data before it gets rendered in the charts
      this.eventEmitter.emit('data', {
        type: 'update',
        data: this.data
      });
    }

    if(options) {
      this.options = Chartist.extend({}, override ? this.options : this.defaultOptions, options);

      // If chartist was not initialized yet, we just set the options and leave the rest to the initialization
      // Otherwise we re-create the optionsProvider at this point
      if(!this.initializeTimeoutId) {
        this.optionsProvider.removeMediaQueryListeners();
        this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter);
      }
    }

    // Only re-created the chart if it has been initialized yet
    if(!this.initializeTimeoutId) {
      this.createChart(this.optionsProvider.getCurrentOptions());
    }

    // Return a reference to the chart object to chain up calls
    return this;
  }

  /**
   * This method can be called on the API object of each chart and will un-register all event listeners that were added to other components. This currently includes a window.resize listener as well as media query listeners if any responsive options have been provided. Use this function if you need to destroy and recreate Chartist charts dynamically.
   *
   * @memberof Chartist.Base
   */
  function detach() {
    // Only detach if initialization already occurred on this chart. If this chart still hasn't initialized (therefore
    // the initializationTimeoutId is still a valid timeout reference, we will clear the timeout
    if(!this.initializeTimeoutId) {
      window.removeEventListener('resize', this.resizeListener);
      this.optionsProvider.removeMediaQueryListeners();
    } else {
      window.clearTimeout(this.initializeTimeoutId);
    }

    return this;
  }

  /**
   * Use this function to register event handlers. The handler callbacks are synchronous and will run in the main thread rather than the event loop.
   *
   * @memberof Chartist.Base
   * @param {String} event Name of the event. Check the examples for supported events.
   * @param {Function} handler The handler function that will be called when an event with the given name was emitted. This function will receive a data argument which contains event data. See the example for more details.
   */
  function on(event, handler) {
    this.eventEmitter.addEventHandler(event, handler);
    return this;
  }

  /**
   * Use this function to un-register event handlers. If the handler function parameter is omitted all handlers for the given event will be un-registered.
   *
   * @memberof Chartist.Base
   * @param {String} event Name of the event for which a handler should be removed
   * @param {Function} [handler] The handler function that that was previously used to register a new event handler. This handler will be removed from the event handler list. If this parameter is omitted then all event handlers for the given event are removed from the list.
   */
  function off(event, handler) {
    this.eventEmitter.removeEventHandler(event, handler);
    return this;
  }

  function initialize() {
    // Add window resize listener that re-creates the chart
    window.addEventListener('resize', this.resizeListener);

    // Obtain current options based on matching media queries (if responsive options are given)
    // This will also register a listener that is re-creating the chart based on media changes
    this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter);
    // Register options change listener that will trigger a chart update
    this.eventEmitter.addEventHandler('optionsChanged', function() {
      this.update();
    }.bind(this));

    // Before the first chart creation we need to register us with all plugins that are configured
    // Initialize all relevant plugins with our chart object and the plugin options specified in the config
    if(this.options.plugins) {
      this.options.plugins.forEach(function(plugin) {
        if(plugin instanceof Array) {
          plugin[0](this, plugin[1]);
        } else {
          plugin(this);
        }
      }.bind(this));
    }

    // Event for data transformation that allows to manipulate the data before it gets rendered in the charts
    this.eventEmitter.emit('data', {
      type: 'initial',
      data: this.data
    });

    // Create the first chart
    this.createChart(this.optionsProvider.getCurrentOptions());

    // As chart is initialized from the event loop now we can reset our timeout reference
    // This is important if the chart gets initialized on the same element twice
    this.initializeTimeoutId = undefined;
  }

  /**
   * Constructor of chart base class.
   *
   * @param query
   * @param data
   * @param defaultOptions
   * @param options
   * @param responsiveOptions
   * @constructor
   */
  function Base(query, data, defaultOptions, options, responsiveOptions) {
    this.container = Chartist.querySelector(query);
    this.data = data;
    this.defaultOptions = defaultOptions;
    this.options = options;
    this.responsiveOptions = responsiveOptions;
    this.eventEmitter = Chartist.EventEmitter();
    this.supportsForeignObject = Chartist.Svg.isSupported('Extensibility');
    this.supportsAnimations = Chartist.Svg.isSupported('AnimationEventsAttribute');
    this.resizeListener = function resizeListener(){
      this.update();
    }.bind(this);

    if(this.container) {
      // If chartist was already initialized in this container we are detaching all event listeners first
      if(this.container.__chartist__) {
        this.container.__chartist__.detach();
      }

      this.container.__chartist__ = this;
    }

    // Using event loop for first draw to make it possible to register event listeners in the same call stack where
    // the chart was created.
    this.initializeTimeoutId = setTimeout(initialize.bind(this), 0);
  }

  // Creating the chart base class
  Chartist.Base = Chartist.Class.extend({
    constructor: Base,
    optionsProvider: undefined,
    container: undefined,
    svg: undefined,
    eventEmitter: undefined,
    createChart: function() {
      throw new Error('Base chart type can\'t be instantiated!');
    },
    update: update,
    detach: detach,
    on: on,
    off: off,
    version: Chartist.version,
    supportsForeignObject: false
  });

}(window, document, Chartist));
;/**
 * Chartist SVG module for simple SVG DOM abstraction
 *
 * @module Chartist.Svg
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  var svgNs = 'http://www.w3.org/2000/svg',
    xmlNs = 'http://www.w3.org/2000/xmlns/',
    xhtmlNs = 'http://www.w3.org/1999/xhtml';

  Chartist.xmlNs = {
    qualifiedName: 'xmlns:ct',
    prefix: 'ct',
    uri: 'http://gionkunz.github.com/chartist-js/ct'
  };

  /**
   * Chartist.Svg creates a new SVG object wrapper with a starting element. You can use the wrapper to fluently create sub-elements and modify them.
   *
   * @memberof Chartist.Svg
   * @constructor
   * @param {String|Element} name The name of the SVG element to create or an SVG dom element which should be wrapped into Chartist.Svg
   * @param {Object} attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
   * @param {String} className This class or class list will be added to the SVG element
   * @param {Object} parent The parent SVG wrapper object where this newly created wrapper and it's element will be attached to as child
   * @param {Boolean} insertFirst If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
   */
  function Svg(name, attributes, className, parent, insertFirst) {
    // If Svg is getting called with an SVG element we just return the wrapper
    if(name instanceof Element) {
      this._node = name;
    } else {
      this._node = document.createElementNS(svgNs, name);

      // If this is an SVG element created then custom namespace
      if(name === 'svg') {
        this._node.setAttributeNS(xmlNs, Chartist.xmlNs.qualifiedName, Chartist.xmlNs.uri);
      }
    }

    if(attributes) {
      this.attr(attributes);
    }

    if(className) {
      this.addClass(className);
    }

    if(parent) {
      if (insertFirst && parent._node.firstChild) {
        parent._node.insertBefore(this._node, parent._node.firstChild);
      } else {
        parent._node.appendChild(this._node);
      }
    }
  }

  /**
   * Set attributes on the current SVG element of the wrapper you're currently working on.
   *
   * @memberof Chartist.Svg
   * @param {Object|String} attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added. If this parameter is a String then the function is used as a getter and will return the attribute value.
   * @param {String} ns If specified, the attributes will be set as namespace attributes with ns as prefix.
   * @return {Object|String} The current wrapper object will be returned so it can be used for chaining or the attribute value if used as getter function.
   */
  function attr(attributes, ns) {
    if(typeof attributes === 'string') {
      if(ns) {
        return this._node.getAttributeNS(ns, attributes);
      } else {
        return this._node.getAttribute(attributes);
      }
    }

    Object.keys(attributes).forEach(function(key) {
      // If the attribute value is undefined we can skip this one
      if(attributes[key] === undefined) {
        return;
      }

      if(ns) {
        this._node.setAttributeNS(ns, [Chartist.xmlNs.prefix, ':', key].join(''), attributes[key]);
      } else {
        this._node.setAttribute(key, attributes[key]);
      }
    }.bind(this));

    return this;
  }

  /**
   * Create a new SVG element whose wrapper object will be selected for further operations. This way you can also create nested groups easily.
   *
   * @memberof Chartist.Svg
   * @param {String} name The name of the SVG element that should be created as child element of the currently selected element wrapper
   * @param {Object} [attributes] An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
   * @param {String} [className] This class or class list will be added to the SVG element
   * @param {Boolean} [insertFirst] If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
   * @return {Chartist.Svg} Returns a Chartist.Svg wrapper object that can be used to modify the containing SVG data
   */
  function elem(name, attributes, className, insertFirst) {
    return new Chartist.Svg(name, attributes, className, this, insertFirst);
  }

  /**
   * Returns the parent Chartist.SVG wrapper object
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} Returns a Chartist.Svg wrapper around the parent node of the current node. If the parent node is not existing or it's not an SVG node then this function will return null.
   */
  function parent() {
    return this._node.parentNode instanceof SVGElement ? new Chartist.Svg(this._node.parentNode) : null;
  }

  /**
   * This method returns a Chartist.Svg wrapper around the root SVG element of the current tree.
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} The root SVG element wrapped in a Chartist.Svg element
   */
  function root() {
    var node = this._node;
    while(node.nodeName !== 'svg') {
      node = node.parentNode;
    }
    return new Chartist.Svg(node);
  }

  /**
   * Find the first child SVG element of the current element that matches a CSS selector. The returned object is a Chartist.Svg wrapper.
   *
   * @memberof Chartist.Svg
   * @param {String} selector A CSS selector that is used to query for child SVG elements
   * @return {Chartist.Svg} The SVG wrapper for the element found or null if no element was found
   */
  function querySelector(selector) {
    var foundNode = this._node.querySelector(selector);
    return foundNode ? new Chartist.Svg(foundNode) : null;
  }

  /**
   * Find the all child SVG elements of the current element that match a CSS selector. The returned object is a Chartist.Svg.List wrapper.
   *
   * @memberof Chartist.Svg
   * @param {String} selector A CSS selector that is used to query for child SVG elements
   * @return {Chartist.Svg.List} The SVG wrapper list for the element found or null if no element was found
   */
  function querySelectorAll(selector) {
    var foundNodes = this._node.querySelectorAll(selector);
    return foundNodes.length ? new Chartist.Svg.List(foundNodes) : null;
  }

  /**
   * This method creates a foreignObject (see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject) that allows to embed HTML content into a SVG graphic. With the help of foreignObjects you can enable the usage of regular HTML elements inside of SVG where they are subject for SVG positioning and transformation but the Browser will use the HTML rendering capabilities for the containing DOM.
   *
   * @memberof Chartist.Svg
   * @param {Node|String} content The DOM Node, or HTML string that will be converted to a DOM Node, that is then placed into and wrapped by the foreignObject
   * @param {String} [attributes] An object with properties that will be added as attributes to the foreignObject element that is created. Attributes with undefined values will not be added.
   * @param {String} [className] This class or class list will be added to the SVG element
   * @param {Boolean} [insertFirst] Specifies if the foreignObject should be inserted as first child
   * @return {Chartist.Svg} New wrapper object that wraps the foreignObject element
   */
  function foreignObject(content, attributes, className, insertFirst) {
    // If content is string then we convert it to DOM
    // TODO: Handle case where content is not a string nor a DOM Node
    if(typeof content === 'string') {
      var container = document.createElement('div');
      container.innerHTML = content;
      content = container.firstChild;
    }

    // Adding namespace to content element
    content.setAttribute('xmlns', xhtmlNs);

    // Creating the foreignObject without required extension attribute (as described here
    // http://www.w3.org/TR/SVG/extend.html#ForeignObjectElement)
    var fnObj = this.elem('foreignObject', attributes, className, insertFirst);

    // Add content to foreignObjectElement
    fnObj._node.appendChild(content);

    return fnObj;
  }

  /**
   * This method adds a new text element to the current Chartist.Svg wrapper.
   *
   * @memberof Chartist.Svg
   * @param {String} t The text that should be added to the text element that is created
   * @return {Chartist.Svg} The same wrapper object that was used to add the newly created element
   */
  function text(t) {
    this._node.appendChild(document.createTextNode(t));
    return this;
  }

  /**
   * This method will clear all child nodes of the current wrapper object.
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} The same wrapper object that got emptied
   */
  function empty() {
    while (this._node.firstChild) {
      this._node.removeChild(this._node.firstChild);
    }

    return this;
  }

  /**
   * This method will cause the current wrapper to remove itself from its parent wrapper. Use this method if you'd like to get rid of an element in a given DOM structure.
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} The parent wrapper object of the element that got removed
   */
  function remove() {
    this._node.parentNode.removeChild(this._node);
    return this.parent();
  }

  /**
   * This method will replace the element with a new element that can be created outside of the current DOM.
   *
   * @memberof Chartist.Svg
   * @param {Chartist.Svg} newElement The new Chartist.Svg object that will be used to replace the current wrapper object
   * @return {Chartist.Svg} The wrapper of the new element
   */
  function replace(newElement) {
    this._node.parentNode.replaceChild(newElement._node, this._node);
    return newElement;
  }

  /**
   * This method will append an element to the current element as a child.
   *
   * @memberof Chartist.Svg
   * @param {Chartist.Svg} element The Chartist.Svg element that should be added as a child
   * @param {Boolean} [insertFirst] Specifies if the element should be inserted as first child
   * @return {Chartist.Svg} The wrapper of the appended object
   */
  function append(element, insertFirst) {
    if(insertFirst && this._node.firstChild) {
      this._node.insertBefore(element._node, this._node.firstChild);
    } else {
      this._node.appendChild(element._node);
    }

    return this;
  }

  /**
   * Returns an array of class names that are attached to the current wrapper element. This method can not be chained further.
   *
   * @memberof Chartist.Svg
   * @return {Array} A list of classes or an empty array if there are no classes on the current element
   */
  function classes() {
    return this._node.getAttribute('class') ? this._node.getAttribute('class').trim().split(/\s+/) : [];
  }

  /**
   * Adds one or a space separated list of classes to the current element and ensures the classes are only existing once.
   *
   * @memberof Chartist.Svg
   * @param {String} names A white space separated list of class names
   * @return {Chartist.Svg} The wrapper of the current element
   */
  function addClass(names) {
    this._node.setAttribute('class',
      this.classes(this._node)
        .concat(names.trim().split(/\s+/))
        .filter(function(elem, pos, self) {
          return self.indexOf(elem) === pos;
        }).join(' ')
    );

    return this;
  }

  /**
   * Removes one or a space separated list of classes from the current element.
   *
   * @memberof Chartist.Svg
   * @param {String} names A white space separated list of class names
   * @return {Chartist.Svg} The wrapper of the current element
   */
  function removeClass(names) {
    var removedClasses = names.trim().split(/\s+/);

    this._node.setAttribute('class', this.classes(this._node).filter(function(name) {
      return removedClasses.indexOf(name) === -1;
    }).join(' '));

    return this;
  }

  /**
   * Removes all classes from the current element.
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} The wrapper of the current element
   */
  function removeAllClasses() {
    this._node.setAttribute('class', '');

    return this;
  }

  /**
   * "Save" way to get property value from svg BoundingBox.
   * This is a workaround. Firefox throws an NS_ERROR_FAILURE error if getBBox() is called on an invisible node.
   * See [NS_ERROR_FAILURE: Component returned failure code: 0x80004005](http://jsfiddle.net/sym3tri/kWWDK/)
   *
   * @memberof Chartist.Svg
   * @param {SVGElement} node The svg node to
   * @param {String} prop The property to fetch (ex.: height, width, ...)
   * @returns {Number} The value of the given bbox property
   */
  function getBBoxProperty(node, prop) {
    try {
      return node.getBBox()[prop];
    } catch(e) {}

    return 0;
  }

  /**
   * Get element height with fallback to svg BoundingBox or parent container dimensions:
   * See [bugzilla.mozilla.org](https://bugzilla.mozilla.org/show_bug.cgi?id=530985)
   *
   * @memberof Chartist.Svg
   * @return {Number} The elements height in pixels
   */
  function height() {
    return this._node.clientHeight || Math.round(getBBoxProperty(this._node, 'height')) || this._node.parentNode.clientHeight;
  }

  /**
   * Get element width with fallback to svg BoundingBox or parent container dimensions:
   * See [bugzilla.mozilla.org](https://bugzilla.mozilla.org/show_bug.cgi?id=530985)
   *
   * @memberof Chartist.Core
   * @return {Number} The elements width in pixels
   */
  function width() {
    return this._node.clientWidth || Math.round(getBBoxProperty(this._node, 'width')) || this._node.parentNode.clientWidth;
  }

  /**
   * The animate function lets you animate the current element with SMIL animations. You can add animations for multiple attributes at the same time by using an animation definition object. This object should contain SMIL animation attributes. Please refer to http://www.w3.org/TR/SVG/animate.html for a detailed specification about the available animation attributes. Additionally an easing property can be passed in the animation definition object. This can be a string with a name of an easing function in `Chartist.Svg.Easing` or an array with four numbers specifying a cubic Bézier curve.
   * **An animations object could look like this:**
   * ```javascript
   * element.animate({
   *   opacity: {
   *     dur: 1000,
   *     from: 0,
   *     to: 1
   *   },
   *   x1: {
   *     dur: '1000ms',
   *     from: 100,
   *     to: 200,
   *     easing: 'easeOutQuart'
   *   },
   *   y1: {
   *     dur: '2s',
   *     from: 0,
   *     to: 100
   *   }
   * });
   * ```
   * **Automatic unit conversion**
   * For the `dur` and the `begin` animate attribute you can also omit a unit by passing a number. The number will automatically be converted to milli seconds.
   * **Guided mode**
   * The default behavior of SMIL animations with offset using the `begin` attribute is that the attribute will keep it's original value until the animation starts. Mostly this behavior is not desired as you'd like to have your element attributes already initialized with the animation `from` value even before the animation starts. Also if you don't specify `fill="freeze"` on an animate element or if you delete the animation after it's done (which is done in guided mode) the attribute will switch back to the initial value. This behavior is also not desired when performing simple one-time animations. For one-time animations you'd want to trigger animations immediately instead of relative to the document begin time. That's why in guided mode Chartist.Svg will also use the `begin` property to schedule a timeout and manually start the animation after the timeout. If you're using multiple SMIL definition objects for an attribute (in an array), guided mode will be disabled for this attribute, even if you explicitly enabled it.
   * If guided mode is enabled the following behavior is added:
   * - Before the animation starts (even when delayed with `begin`) the animated attribute will be set already to the `from` value of the animation
   * - `begin` is explicitly set to `indefinite` so it can be started manually without relying on document begin time (creation)
   * - The animate element will be forced to use `fill="freeze"`
   * - The animation will be triggered with `beginElement()` in a timeout where `begin` of the definition object is interpreted in milli seconds. If no `begin` was specified the timeout is triggered immediately.
   * - After the animation the element attribute value will be set to the `to` value of the animation
   * - The animate element is deleted from the DOM
   *
   * @memberof Chartist.Svg
   * @param {Object} animations An animations object where the property keys are the attributes you'd like to animate. The properties should be objects again that contain the SMIL animation attributes (usually begin, dur, from, and to). The property begin and dur is auto converted (see Automatic unit conversion). You can also schedule multiple animations for the same attribute by passing an Array of SMIL definition objects. Attributes that contain an array of SMIL definition objects will not be executed in guided mode.
   * @param {Boolean} guided Specify if guided mode should be activated for this animation (see Guided mode). If not otherwise specified, guided mode will be activated.
   * @param {Object} eventEmitter If specified, this event emitter will be notified when an animation starts or ends.
   * @return {Chartist.Svg} The current element where the animation was added
   */
  function animate(animations, guided, eventEmitter) {
    if(guided === undefined) {
      guided = true;
    }

    Object.keys(animations).forEach(function createAnimateForAttributes(attribute) {

      function createAnimate(animationDefinition, guided) {
        var attributeProperties = {},
          animate,
          timeout,
          easing;

        // Check if an easing is specified in the definition object and delete it from the object as it will not
        // be part of the animate element attributes.
        if(animationDefinition.easing) {
          // If already an easing Bézier curve array we take it or we lookup a easing array in the Easing object
          easing = animationDefinition.easing instanceof Array ?
            animationDefinition.easing :
            Chartist.Svg.Easing[animationDefinition.easing];
          delete animationDefinition.easing;
        }

        // If numeric dur or begin was provided we assume milli seconds
        animationDefinition.begin = Chartist.ensureUnit(animationDefinition.begin, 'ms');
        animationDefinition.dur = Chartist.ensureUnit(animationDefinition.dur, 'ms');

        if(easing) {
          animationDefinition.calcMode = 'spline';
          animationDefinition.keySplines = easing.join(' ');
          animationDefinition.keyTimes = '0;1';
        }

        // Adding "fill: freeze" if we are in guided mode and set initial attribute values
        if(guided) {
          animationDefinition.fill = 'freeze';
          // Animated property on our element should already be set to the animation from value in guided mode
          attributeProperties[attribute] = animationDefinition.from;
          this.attr(attributeProperties);

          // In guided mode we also set begin to indefinite so we can trigger the start manually and put the begin
          // which needs to be in ms aside
          timeout = Chartist.quantity(animationDefinition.begin || 0).value;
          animationDefinition.begin = 'indefinite';
        }

        animate = this.elem('animate', Chartist.extend({
          attributeName: attribute
        }, animationDefinition));

        if(guided) {
          // If guided we take the value that was put aside in timeout and trigger the animation manually with a timeout
          setTimeout(function() {
            // If beginElement fails we set the animated attribute to the end position and remove the animate element
            // This happens if the SMIL ElementTimeControl interface is not supported or any other problems occured in
            // the browser. (Currently FF 34 does not support animate elements in foreignObjects)
            try {
              animate._node.beginElement();
            } catch(err) {
              // Set animated attribute to current animated value
              attributeProperties[attribute] = animationDefinition.to;
              this.attr(attributeProperties);
              // Remove the animate element as it's no longer required
              animate.remove();
            }
          }.bind(this), timeout);
        }

        if(eventEmitter) {
          animate._node.addEventListener('beginEvent', function handleBeginEvent() {
            eventEmitter.emit('animationBegin', {
              element: this,
              animate: animate._node,
              params: animationDefinition
            });
          }.bind(this));
        }

        animate._node.addEventListener('endEvent', function handleEndEvent() {
          if(eventEmitter) {
            eventEmitter.emit('animationEnd', {
              element: this,
              animate: animate._node,
              params: animationDefinition
            });
          }

          if(guided) {
            // Set animated attribute to current animated value
            attributeProperties[attribute] = animationDefinition.to;
            this.attr(attributeProperties);
            // Remove the animate element as it's no longer required
            animate.remove();
          }
        }.bind(this));
      }

      // If current attribute is an array of definition objects we create an animate for each and disable guided mode
      if(animations[attribute] instanceof Array) {
        animations[attribute].forEach(function(animationDefinition) {
          createAnimate.bind(this)(animationDefinition, false);
        }.bind(this));
      } else {
        createAnimate.bind(this)(animations[attribute], guided);
      }

    }.bind(this));

    return this;
  }

  Chartist.Svg = Chartist.Class.extend({
    constructor: Svg,
    attr: attr,
    elem: elem,
    parent: parent,
    root: root,
    querySelector: querySelector,
    querySelectorAll: querySelectorAll,
    foreignObject: foreignObject,
    text: text,
    empty: empty,
    remove: remove,
    replace: replace,
    append: append,
    classes: classes,
    addClass: addClass,
    removeClass: removeClass,
    removeAllClasses: removeAllClasses,
    height: height,
    width: width,
    animate: animate
  });

  /**
   * This method checks for support of a given SVG feature like Extensibility, SVG-animation or the like. Check http://www.w3.org/TR/SVG11/feature for a detailed list.
   *
   * @memberof Chartist.Svg
   * @param {String} feature The SVG 1.1 feature that should be checked for support.
   * @return {Boolean} True of false if the feature is supported or not
   */
  Chartist.Svg.isSupported = function(feature) {
    return document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#' + feature, '1.1');
  };

  /**
   * This Object contains some standard easing cubic bezier curves. Then can be used with their name in the `Chartist.Svg.animate`. You can also extend the list and use your own name in the `animate` function. Click the show code button to see the available bezier functions.
   *
   * @memberof Chartist.Svg
   */
  var easingCubicBeziers = {
    easeInSine: [0.47, 0, 0.745, 0.715],
    easeOutSine: [0.39, 0.575, 0.565, 1],
    easeInOutSine: [0.445, 0.05, 0.55, 0.95],
    easeInQuad: [0.55, 0.085, 0.68, 0.53],
    easeOutQuad: [0.25, 0.46, 0.45, 0.94],
    easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
    easeInCubic: [0.55, 0.055, 0.675, 0.19],
    easeOutCubic: [0.215, 0.61, 0.355, 1],
    easeInOutCubic: [0.645, 0.045, 0.355, 1],
    easeInQuart: [0.895, 0.03, 0.685, 0.22],
    easeOutQuart: [0.165, 0.84, 0.44, 1],
    easeInOutQuart: [0.77, 0, 0.175, 1],
    easeInQuint: [0.755, 0.05, 0.855, 0.06],
    easeOutQuint: [0.23, 1, 0.32, 1],
    easeInOutQuint: [0.86, 0, 0.07, 1],
    easeInExpo: [0.95, 0.05, 0.795, 0.035],
    easeOutExpo: [0.19, 1, 0.22, 1],
    easeInOutExpo: [1, 0, 0, 1],
    easeInCirc: [0.6, 0.04, 0.98, 0.335],
    easeOutCirc: [0.075, 0.82, 0.165, 1],
    easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
    easeInBack: [0.6, -0.28, 0.735, 0.045],
    easeOutBack: [0.175, 0.885, 0.32, 1.275],
    easeInOutBack: [0.68, -0.55, 0.265, 1.55]
  };

  Chartist.Svg.Easing = easingCubicBeziers;

  /**
   * This helper class is to wrap multiple `Chartist.Svg` elements into a list where you can call the `Chartist.Svg` functions on all elements in the list with one call. This is helpful when you'd like to perform calls with `Chartist.Svg` on multiple elements.
   * An instance of this class is also returned by `Chartist.Svg.querySelectorAll`.
   *
   * @memberof Chartist.Svg
   * @param {Array<Node>|NodeList} nodeList An Array of SVG DOM nodes or a SVG DOM NodeList (as returned by document.querySelectorAll)
   * @constructor
   */
  function SvgList(nodeList) {
    var list = this;

    this.svgElements = [];
    for(var i = 0; i < nodeList.length; i++) {
      this.svgElements.push(new Chartist.Svg(nodeList[i]));
    }

    // Add delegation methods for Chartist.Svg
    Object.keys(Chartist.Svg.prototype).filter(function(prototypeProperty) {
      return ['constructor',
          'parent',
          'querySelector',
          'querySelectorAll',
          'replace',
          'append',
          'classes',
          'height',
          'width'].indexOf(prototypeProperty) === -1;
    }).forEach(function(prototypeProperty) {
      list[prototypeProperty] = function() {
        var args = Array.prototype.slice.call(arguments, 0);
        list.svgElements.forEach(function(element) {
          Chartist.Svg.prototype[prototypeProperty].apply(element, args);
        });
        return list;
      };
    });
  }

  Chartist.Svg.List = Chartist.Class.extend({
    constructor: SvgList
  });
}(window, document, Chartist));
;/**
 * Chartist SVG path module for SVG path description creation and modification.
 *
 * @module Chartist.Svg.Path
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  /**
   * Contains the descriptors of supported element types in a SVG path. Currently only move, line and curve are supported.
   *
   * @memberof Chartist.Svg.Path
   * @type {Object}
   */
  var elementDescriptions = {
    m: ['x', 'y'],
    l: ['x', 'y'],
    c: ['x1', 'y1', 'x2', 'y2', 'x', 'y'],
    a: ['rx', 'ry', 'xAr', 'lAf', 'sf', 'x', 'y']
  };

  /**
   * Default options for newly created SVG path objects.
   *
   * @memberof Chartist.Svg.Path
   * @type {Object}
   */
  var defaultOptions = {
    // The accuracy in digit count after the decimal point. This will be used to round numbers in the SVG path. If this option is set to false then no rounding will be performed.
    accuracy: 3
  };

  function element(command, params, pathElements, pos, relative, data) {
    var pathElement = Chartist.extend({
      command: relative ? command.toLowerCase() : command.toUpperCase()
    }, params, data ? { data: data } : {} );

    pathElements.splice(pos, 0, pathElement);
  }

  function forEachParam(pathElements, cb) {
    pathElements.forEach(function(pathElement, pathElementIndex) {
      elementDescriptions[pathElement.command.toLowerCase()].forEach(function(paramName, paramIndex) {
        cb(pathElement, paramName, pathElementIndex, paramIndex, pathElements);
      });
    });
  }

  /**
   * Used to construct a new path object.
   *
   * @memberof Chartist.Svg.Path
   * @param {Boolean} close If set to true then this path will be closed when stringified (with a Z at the end)
   * @param {Object} options Options object that overrides the default objects. See default options for more details.
   * @constructor
   */
  function SvgPath(close, options) {
    this.pathElements = [];
    this.pos = 0;
    this.close = close;
    this.options = Chartist.extend({}, defaultOptions, options);
  }

  /**
   * Gets or sets the current position (cursor) inside of the path. You can move around the cursor freely but limited to 0 or the count of existing elements. All modifications with element functions will insert new elements at the position of this cursor.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} [pos] If a number is passed then the cursor is set to this position in the path element array.
   * @return {Chartist.Svg.Path|Number} If the position parameter was passed then the return value will be the path object for easy call chaining. If no position parameter was passed then the current position is returned.
   */
  function position(pos) {
    if(pos !== undefined) {
      this.pos = Math.max(0, Math.min(this.pathElements.length, pos));
      return this;
    } else {
      return this.pos;
    }
  }

  /**
   * Removes elements from the path starting at the current position.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} count Number of path elements that should be removed from the current position.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function remove(count) {
    this.pathElements.splice(this.pos, count);
    return this;
  }

  /**
   * Use this function to add a new move SVG path element.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x The x coordinate for the move element.
   * @param {Number} y The y coordinate for the move element.
   * @param {Boolean} [relative] If set to true the move element will be created with relative coordinates (lowercase letter)
   * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function move(x, y, relative, data) {
    element('M', {
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative, data);
    return this;
  }

  /**
   * Use this function to add a new line SVG path element.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x The x coordinate for the line element.
   * @param {Number} y The y coordinate for the line element.
   * @param {Boolean} [relative] If set to true the line element will be created with relative coordinates (lowercase letter)
   * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function line(x, y, relative, data) {
    element('L', {
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative, data);
    return this;
  }

  /**
   * Use this function to add a new curve SVG path element.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x1 The x coordinate for the first control point of the bezier curve.
   * @param {Number} y1 The y coordinate for the first control point of the bezier curve.
   * @param {Number} x2 The x coordinate for the second control point of the bezier curve.
   * @param {Number} y2 The y coordinate for the second control point of the bezier curve.
   * @param {Number} x The x coordinate for the target point of the curve element.
   * @param {Number} y The y coordinate for the target point of the curve element.
   * @param {Boolean} [relative] If set to true the curve element will be created with relative coordinates (lowercase letter)
   * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function curve(x1, y1, x2, y2, x, y, relative, data) {
    element('C', {
      x1: +x1,
      y1: +y1,
      x2: +x2,
      y2: +y2,
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative, data);
    return this;
  }

  /**
   * Use this function to add a new non-bezier curve SVG path element.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} rx The radius to be used for the x-axis of the arc.
   * @param {Number} ry The radius to be used for the y-axis of the arc.
   * @param {Number} xAr Defines the orientation of the arc
   * @param {Number} lAf Large arc flag
   * @param {Number} sf Sweep flag
   * @param {Number} x The x coordinate for the target point of the curve element.
   * @param {Number} y The y coordinate for the target point of the curve element.
   * @param {Boolean} [relative] If set to true the curve element will be created with relative coordinates (lowercase letter)
   * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function arc(rx, ry, xAr, lAf, sf, x, y, relative, data) {
    element('A', {
      rx: +rx,
      ry: +ry,
      xAr: +xAr,
      lAf: +lAf,
      sf: +sf,
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative, data);
    return this;
  }

  /**
   * Parses an SVG path seen in the d attribute of path elements, and inserts the parsed elements into the existing path object at the current cursor position. Any closing path indicators (Z at the end of the path) will be ignored by the parser as this is provided by the close option in the options of the path object.
   *
   * @memberof Chartist.Svg.Path
   * @param {String} path Any SVG path that contains move (m), line (l) or curve (c) components.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function parse(path) {
    // Parsing the SVG path string into an array of arrays [['M', '10', '10'], ['L', '100', '100']]
    var chunks = path.replace(/([A-Za-z])([0-9])/g, '$1 $2')
      .replace(/([0-9])([A-Za-z])/g, '$1 $2')
      .split(/[\s,]+/)
      .reduce(function(result, element) {
        if(element.match(/[A-Za-z]/)) {
          result.push([]);
        }

        result[result.length - 1].push(element);
        return result;
      }, []);

    // If this is a closed path we remove the Z at the end because this is determined by the close option
    if(chunks[chunks.length - 1][0].toUpperCase() === 'Z') {
      chunks.pop();
    }

    // Using svgPathElementDescriptions to map raw path arrays into objects that contain the command and the parameters
    // For example {command: 'M', x: '10', y: '10'}
    var elements = chunks.map(function(chunk) {
        var command = chunk.shift(),
          description = elementDescriptions[command.toLowerCase()];

        return Chartist.extend({
          command: command
        }, description.reduce(function(result, paramName, index) {
          result[paramName] = +chunk[index];
          return result;
        }, {}));
      });

    // Preparing a splice call with the elements array as var arg params and insert the parsed elements at the current position
    var spliceArgs = [this.pos, 0];
    Array.prototype.push.apply(spliceArgs, elements);
    Array.prototype.splice.apply(this.pathElements, spliceArgs);
    // Increase the internal position by the element count
    this.pos += elements.length;

    return this;
  }

  /**
   * This function renders to current SVG path object into a final SVG string that can be used in the d attribute of SVG path elements. It uses the accuracy option to round big decimals. If the close parameter was set in the constructor of this path object then a path closing Z will be appended to the output string.
   *
   * @memberof Chartist.Svg.Path
   * @return {String}
   */
  function stringify() {
    var accuracyMultiplier = Math.pow(10, this.options.accuracy);

    return this.pathElements.reduce(function(path, pathElement) {
        var params = elementDescriptions[pathElement.command.toLowerCase()].map(function(paramName) {
          return this.options.accuracy ?
            (Math.round(pathElement[paramName] * accuracyMultiplier) / accuracyMultiplier) :
            pathElement[paramName];
        }.bind(this));

        return path + pathElement.command + params.join(',');
      }.bind(this), '') + (this.close ? 'Z' : '');
  }

  /**
   * Scales all elements in the current SVG path object. There is an individual parameter for each coordinate. Scaling will also be done for control points of curves, affecting the given coordinate.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x The number which will be used to scale the x, x1 and x2 of all path elements.
   * @param {Number} y The number which will be used to scale the y, y1 and y2 of all path elements.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function scale(x, y) {
    forEachParam(this.pathElements, function(pathElement, paramName) {
      pathElement[paramName] *= paramName[0] === 'x' ? x : y;
    });
    return this;
  }

  /**
   * Translates all elements in the current SVG path object. The translation is relative and there is an individual parameter for each coordinate. Translation will also be done for control points of curves, affecting the given coordinate.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x The number which will be used to translate the x, x1 and x2 of all path elements.
   * @param {Number} y The number which will be used to translate the y, y1 and y2 of all path elements.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function translate(x, y) {
    forEachParam(this.pathElements, function(pathElement, paramName) {
      pathElement[paramName] += paramName[0] === 'x' ? x : y;
    });
    return this;
  }

  /**
   * This function will run over all existing path elements and then loop over their attributes. The callback function will be called for every path element attribute that exists in the current path.
   * The method signature of the callback function looks like this:
   * ```javascript
   * function(pathElement, paramName, pathElementIndex, paramIndex, pathElements)
   * ```
   * If something else than undefined is returned by the callback function, this value will be used to replace the old value. This allows you to build custom transformations of path objects that can't be achieved using the basic transformation functions scale and translate.
   *
   * @memberof Chartist.Svg.Path
   * @param {Function} transformFnc The callback function for the transformation. Check the signature in the function description.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function transform(transformFnc) {
    forEachParam(this.pathElements, function(pathElement, paramName, pathElementIndex, paramIndex, pathElements) {
      var transformed = transformFnc(pathElement, paramName, pathElementIndex, paramIndex, pathElements);
      if(transformed || transformed === 0) {
        pathElement[paramName] = transformed;
      }
    });
    return this;
  }

  /**
   * This function clones a whole path object with all its properties. This is a deep clone and path element objects will also be cloned.
   *
   * @memberof Chartist.Svg.Path
   * @param {Boolean} [close] Optional option to set the new cloned path to closed. If not specified or false, the original path close option will be used.
   * @return {Chartist.Svg.Path}
   */
  function clone(close) {
    var c = new Chartist.Svg.Path(close || this.close);
    c.pos = this.pos;
    c.pathElements = this.pathElements.slice().map(function cloneElements(pathElement) {
      return Chartist.extend({}, pathElement);
    });
    c.options = Chartist.extend({}, this.options);
    return c;
  }

  /**
   * Split a Svg.Path object by a specific command in the path chain. The path chain will be split and an array of newly created paths objects will be returned. This is useful if you'd like to split an SVG path by it's move commands, for example, in order to isolate chunks of drawings.
   *
   * @memberof Chartist.Svg.Path
   * @param {String} command The command you'd like to use to split the path
   * @return {Array<Chartist.Svg.Path>}
   */
  function splitByCommand(command) {
    var split = [
      new Chartist.Svg.Path()
    ];

    this.pathElements.forEach(function(pathElement) {
      if(pathElement.command === command.toUpperCase() && split[split.length - 1].pathElements.length !== 0) {
        split.push(new Chartist.Svg.Path());
      }

      split[split.length - 1].pathElements.push(pathElement);
    });

    return split;
  }

  /**
   * This static function on `Chartist.Svg.Path` is joining multiple paths together into one paths.
   *
   * @memberof Chartist.Svg.Path
   * @param {Array<Chartist.Svg.Path>} paths A list of paths to be joined together. The order is important.
   * @param {boolean} close If the newly created path should be a closed path
   * @param {Object} options Path options for the newly created path.
   * @return {Chartist.Svg.Path}
   */

  function join(paths, close, options) {
    var joinedPath = new Chartist.Svg.Path(close, options);
    for(var i = 0; i < paths.length; i++) {
      var path = paths[i];
      for(var j = 0; j < path.pathElements.length; j++) {
        joinedPath.pathElements.push(path.pathElements[j]);
      }
    }
    return joinedPath;
  }

  Chartist.Svg.Path = Chartist.Class.extend({
    constructor: SvgPath,
    position: position,
    remove: remove,
    move: move,
    line: line,
    curve: curve,
    arc: arc,
    scale: scale,
    translate: translate,
    transform: transform,
    parse: parse,
    stringify: stringify,
    clone: clone,
    splitByCommand: splitByCommand
  });

  Chartist.Svg.Path.elementDescriptions = elementDescriptions;
  Chartist.Svg.Path.join = join;
}(window, document, Chartist));
;/* global Chartist */
(function (window, document, Chartist) {
  'use strict';

  var axisUnits = {
    x: {
      pos: 'x',
      len: 'width',
      dir: 'horizontal',
      rectStart: 'x1',
      rectEnd: 'x2',
      rectOffset: 'y2'
    },
    y: {
      pos: 'y',
      len: 'height',
      dir: 'vertical',
      rectStart: 'y2',
      rectEnd: 'y1',
      rectOffset: 'x1'
    }
  };

  function Axis(units, chartRect, ticks, options) {
    this.units = units;
    this.counterUnits = units === axisUnits.x ? axisUnits.y : axisUnits.x;
    this.chartRect = chartRect;
    this.axisLength = chartRect[units.rectEnd] - chartRect[units.rectStart];
    this.gridOffset = chartRect[units.rectOffset];
    this.ticks = ticks;
    this.options = options;
  }

  function createGridAndLabels(gridGroup, labelGroup, useForeignObject, chartOptions, eventEmitter) {
    var axisOptions = chartOptions['axis' + this.units.pos.toUpperCase()];
    var projectedValues = this.ticks.map(this.projectValue.bind(this));
    var labelValues = this.ticks.map(axisOptions.labelInterpolationFnc);

    projectedValues.forEach(function(projectedValue, index) {
      var labelOffset = {
        x: 0,
        y: 0
      };

      // TODO: Find better solution for solving this problem
      // Calculate how much space we have available for the label
      var labelLength;
      if(projectedValues[index + 1]) {
        // If we still have one label ahead, we can calculate the distance to the next tick / label
        labelLength = projectedValues[index + 1] - projectedValue;
      } else {
        // If we don't have a label ahead and we have only two labels in total, we just take the remaining distance to
        // on the whole axis length. We limit that to a minimum of 30 pixel, so that labels close to the border will
        // still be visible inside of the chart padding.
        labelLength = Math.max(this.axisLength - projectedValue, 30);
      }

      // Skip grid lines and labels where interpolated label values are falsey (execpt for 0)
      if(!labelValues[index] && labelValues[index] !== 0) {
        return;
      }

      // Transform to global coordinates using the chartRect
      // We also need to set the label offset for the createLabel function
      if(this.units.pos === 'x') {
        projectedValue = this.chartRect.x1 + projectedValue;
        labelOffset.x = chartOptions.axisX.labelOffset.x;

        // If the labels should be positioned in start position (top side for vertical axis) we need to set a
        // different offset as for positioned with end (bottom)
        if(chartOptions.axisX.position === 'start') {
          labelOffset.y = this.chartRect.padding.top + chartOptions.axisX.labelOffset.y + (useForeignObject ? 5 : 20);
        } else {
          labelOffset.y = this.chartRect.y1 + chartOptions.axisX.labelOffset.y + (useForeignObject ? 5 : 20);
        }
      } else {
        projectedValue = this.chartRect.y1 - projectedValue;
        labelOffset.y = chartOptions.axisY.labelOffset.y - (useForeignObject ? labelLength : 0);

        // If the labels should be positioned in start position (left side for horizontal axis) we need to set a
        // different offset as for positioned with end (right side)
        if(chartOptions.axisY.position === 'start') {
          labelOffset.x = useForeignObject ? this.chartRect.padding.left + chartOptions.axisY.labelOffset.x : this.chartRect.x1 - 10;
        } else {
          labelOffset.x = this.chartRect.x2 + chartOptions.axisY.labelOffset.x + 10;
        }
      }

      if(axisOptions.showGrid) {
        Chartist.createGrid(projectedValue, index, this, this.gridOffset, this.chartRect[this.counterUnits.len](), gridGroup, [
          chartOptions.classNames.grid,
          chartOptions.classNames[this.units.dir]
        ], eventEmitter);
      }

      if(axisOptions.showLabel) {
        Chartist.createLabel(projectedValue, labelLength, index, labelValues, this, axisOptions.offset, labelOffset, labelGroup, [
          chartOptions.classNames.label,
          chartOptions.classNames[this.units.dir],
          chartOptions.classNames[axisOptions.position]
        ], useForeignObject, eventEmitter);
      }
    }.bind(this));
  }

  Chartist.Axis = Chartist.Class.extend({
    constructor: Axis,
    createGridAndLabels: createGridAndLabels,
    projectValue: function(value, index, data) {
      throw new Error('Base axis can\'t be instantiated!');
    }
  });

  Chartist.Axis.units = axisUnits;

}(window, document, Chartist));
;/**
 * The auto scale axis uses standard linear scale projection of values along an axis. It uses order of magnitude to find a scale automatically and evaluates the available space in order to find the perfect amount of ticks for your chart.
 * **Options**
 * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
 * ```javascript
 * var options = {
 *   // If high is specified then the axis will display values explicitly up to this value and the computed maximum from the data is ignored
 *   high: 100,
 *   // If low is specified then the axis will display values explicitly down to this value and the computed minimum from the data is ignored
 *   low: 0,
 *   // This option will be used when finding the right scale division settings. The amount of ticks on the scale will be determined so that as many ticks as possible will be displayed, while not violating this minimum required space (in pixel).
 *   scaleMinSpace: 20,
 *   // Can be set to true or false. If set to true, the scale will be generated with whole numbers only.
 *   onlyInteger: true,
 *   // The reference value can be used to make sure that this value will always be on the chart. This is especially useful on bipolar charts where the bipolar center always needs to be part of the chart.
 *   referenceValue: 5
 * };
 * ```
 *
 * @module Chartist.AutoScaleAxis
 */
/* global Chartist */
(function (window, document, Chartist) {
  'use strict';

  function AutoScaleAxis(axisUnit, data, chartRect, options) {
    // Usually we calculate highLow based on the data but this can be overriden by a highLow object in the options
    var highLow = options.highLow || Chartist.getHighLow(data.normalized, options, axisUnit.pos);
    this.bounds = Chartist.getBounds(chartRect[axisUnit.rectEnd] - chartRect[axisUnit.rectStart], highLow, options.scaleMinSpace || 20, options.onlyInteger);
    this.range = {
      min: this.bounds.min,
      max: this.bounds.max
    };

    Chartist.AutoScaleAxis.super.constructor.call(this,
      axisUnit,
      chartRect,
      this.bounds.values,
      options);
  }

  function projectValue(value) {
    return this.axisLength * (+Chartist.getMultiValue(value, this.units.pos) - this.bounds.min) / this.bounds.range;
  }

  Chartist.AutoScaleAxis = Chartist.Axis.extend({
    constructor: AutoScaleAxis,
    projectValue: projectValue
  });

}(window, document, Chartist));
;/**
 * The fixed scale axis uses standard linear projection of values along an axis. It makes use of a divisor option to divide the range provided from the minimum and maximum value or the options high and low that will override the computed minimum and maximum.
 * **Options**
 * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
 * ```javascript
 * var options = {
 *   // If high is specified then the axis will display values explicitly up to this value and the computed maximum from the data is ignored
 *   high: 100,
 *   // If low is specified then the axis will display values explicitly down to this value and the computed minimum from the data is ignored
 *   low: 0,
 *   // If specified then the value range determined from minimum to maximum (or low and high) will be divided by this number and ticks will be generated at those division points. The default divisor is 1.
 *   divisor: 4,
 *   // If ticks is explicitly set, then the axis will not compute the ticks with the divisor, but directly use the data in ticks to determine at what points on the axis a tick need to be generated.
 *   ticks: [1, 10, 20, 30]
 * };
 * ```
 *
 * @module Chartist.FixedScaleAxis
 */
/* global Chartist */
(function (window, document, Chartist) {
  'use strict';

  function FixedScaleAxis(axisUnit, data, chartRect, options) {
    var highLow = options.highLow || Chartist.getHighLow(data.normalized, options, axisUnit.pos);
    this.divisor = options.divisor || 1;
    this.ticks = options.ticks || Chartist.times(this.divisor).map(function(value, index) {
      return highLow.low + (highLow.high - highLow.low) / this.divisor * index;
    }.bind(this));
    this.ticks.sort(function(a, b) {
      return a - b;
    });
    this.range = {
      min: highLow.low,
      max: highLow.high
    };

    Chartist.FixedScaleAxis.super.constructor.call(this,
      axisUnit,
      chartRect,
      this.ticks,
      options);

    this.stepLength = this.axisLength / this.divisor;
  }

  function projectValue(value) {
    return this.axisLength * (+Chartist.getMultiValue(value, this.units.pos) - this.range.min) / (this.range.max - this.range.min);
  }

  Chartist.FixedScaleAxis = Chartist.Axis.extend({
    constructor: FixedScaleAxis,
    projectValue: projectValue
  });

}(window, document, Chartist));
;/**
 * The step axis for step based charts like bar chart or step based line charts. It uses a fixed amount of ticks that will be equally distributed across the whole axis length. The projection is done using the index of the data value rather than the value itself and therefore it's only useful for distribution purpose.
 * **Options**
 * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
 * ```javascript
 * var options = {
 *   // Ticks to be used to distribute across the axis length. As this axis type relies on the index of the value rather than the value, arbitrary data that can be converted to a string can be used as ticks.
 *   ticks: ['One', 'Two', 'Three'],
 *   // If set to true the full width will be used to distribute the values where the last value will be at the maximum of the axis length. If false the spaces between the ticks will be evenly distributed instead.
 *   stretch: true
 * };
 * ```
 *
 * @module Chartist.StepAxis
 */
/* global Chartist */
(function (window, document, Chartist) {
  'use strict';

  function StepAxis(axisUnit, data, chartRect, options) {
    Chartist.StepAxis.super.constructor.call(this,
      axisUnit,
      chartRect,
      options.ticks,
      options);

    this.stepLength = this.axisLength / (options.ticks.length - (options.stretch ? 1 : 0));
  }

  function projectValue(value, index) {
    return this.stepLength * index;
  }

  Chartist.StepAxis = Chartist.Axis.extend({
    constructor: StepAxis,
    projectValue: projectValue
  });

}(window, document, Chartist));
;/**
 * The Chartist line chart can be used to draw Line or Scatter charts. If used in the browser you can access the global `Chartist` namespace where you find the `Line` function as a main entry point.
 *
 * For examples on how to use the line chart please check the examples of the `Chartist.Line` method.
 *
 * @module Chartist.Line
 */
/* global Chartist */
(function(window, document, Chartist){
  'use strict';

  /**
   * Default options in line charts. Expand the code view to see a detailed list of options with comments.
   *
   * @memberof Chartist.Line
   */
  var defaultOptions = {
    // Options for X-Axis
    axisX: {
      // The offset of the labels to the chart area
      offset: 30,
      // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
      position: 'end',
      // Allows you to correct label positioning on this axis by positive or negative x and y offset.
      labelOffset: {
        x: 0,
        y: 0
      },
      // If labels should be shown or not
      showLabel: true,
      // If the axis grid should be drawn or not
      showGrid: true,
      // Interpolation function that allows you to intercept the value from the axis label
      labelInterpolationFnc: Chartist.noop,
      // Set the axis type to be used to project values on this axis. If not defined, Chartist.StepAxis will be used for the X-Axis, where the ticks option will be set to the labels in the data and the stretch option will be set to the global fullWidth option. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
      type: undefined
    },
    // Options for Y-Axis
    axisY: {
      // The offset of the labels to the chart area
      offset: 40,
      // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
      position: 'start',
      // Allows you to correct label positioning on this axis by positive or negative x and y offset.
      labelOffset: {
        x: 0,
        y: 0
      },
      // If labels should be shown or not
      showLabel: true,
      // If the axis grid should be drawn or not
      showGrid: true,
      // Interpolation function that allows you to intercept the value from the axis label
      labelInterpolationFnc: Chartist.noop,
      // Set the axis type to be used to project values on this axis. If not defined, Chartist.AutoScaleAxis will be used for the Y-Axis, where the high and low options will be set to the global high and low options. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
      type: undefined,
      // This value specifies the minimum height in pixel of the scale steps
      scaleMinSpace: 20,
      // Use only integer values (whole numbers) for the scale steps
      onlyInteger: false
    },
    // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
    width: undefined,
    // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
    height: undefined,
    // If the line should be drawn or not
    showLine: true,
    // If dots should be drawn or not
    showPoint: true,
    // If the line chart should draw an area
    showArea: false,
    // The base for the area chart that will be used to close the area shape (is normally 0)
    areaBase: 0,
    // Specify if the lines should be smoothed. This value can be true or false where true will result in smoothing using the default smoothing interpolation function Chartist.Interpolation.cardinal and false results in Chartist.Interpolation.none. You can also choose other smoothing / interpolation functions available in the Chartist.Interpolation module, or write your own interpolation function. Check the examples for a brief description.
    lineSmooth: true,
    // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
    low: undefined,
    // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
    high: undefined,
    // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
    chartPadding: {
      top: 15,
      right: 15,
      bottom: 5,
      left: 10
    },
    // When set to true, the last grid line on the x-axis is not drawn and the chart elements will expand to the full available width of the chart. For the last label to be drawn correctly you might need to add chart padding or offset the last label with a draw event handler.
    fullWidth: false,
    // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
    reverseData: false,
    // Override the class names that get used to generate the SVG structure of the chart
    classNames: {
      chart: 'ct-chart-line',
      label: 'ct-label',
      labelGroup: 'ct-labels',
      series: 'ct-series',
      line: 'ct-line',
      point: 'ct-point',
      area: 'ct-area',
      grid: 'ct-grid',
      gridGroup: 'ct-grids',
      vertical: 'ct-vertical',
      horizontal: 'ct-horizontal',
      start: 'ct-start',
      end: 'ct-end'
    }
  };

  /**
   * Creates a new chart
   *
   */
  function createChart(options) {
    var data = {
      raw: this.data,
      normalized: Chartist.getDataArray(this.data, options.reverseData, true)
    };

    // Create new svg object
    this.svg = Chartist.createSvg(this.container, options.width, options.height, options.classNames.chart);
    // Create groups for labels, grid and series
    var gridGroup = this.svg.elem('g').addClass(options.classNames.gridGroup);
    var seriesGroup = this.svg.elem('g');
    var labelGroup = this.svg.elem('g').addClass(options.classNames.labelGroup);

    var chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);
    var axisX, axisY;

    if(options.axisX.type === undefined) {
      axisX = new Chartist.StepAxis(Chartist.Axis.units.x, data, chartRect, Chartist.extend({}, options.axisX, {
        ticks: data.raw.labels,
        stretch: options.fullWidth
      }));
    } else {
      axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data, chartRect, options.axisX);
    }

    if(options.axisY.type === undefined) {
      axisY = new Chartist.AutoScaleAxis(Chartist.Axis.units.y, data, chartRect, Chartist.extend({}, options.axisY, {
        high: Chartist.isNum(options.high) ? options.high : options.axisY.high,
        low: Chartist.isNum(options.low) ? options.low : options.axisY.low
      }));
    } else {
      axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data, chartRect, options.axisY);
    }

    axisX.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);
    axisY.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);

    // Draw the series
    data.raw.series.forEach(function(series, seriesIndex) {
      var seriesElement = seriesGroup.elem('g');

      // Write attributes to series group element. If series name or meta is undefined the attributes will not be written
      seriesElement.attr({
        'series-name': series.name,
        'meta': Chartist.serialize(series.meta)
      }, Chartist.xmlNs.uri);

      // Use series class from series data or if not set generate one
      seriesElement.addClass([
        options.classNames.series,
        (series.className || options.classNames.series + '-' + Chartist.alphaNumerate(seriesIndex))
      ].join(' '));

      var pathCoordinates = [],
        pathData = [];

      data.normalized[seriesIndex].forEach(function(value, valueIndex) {
        var p = {
          x: chartRect.x1 + axisX.projectValue(value, valueIndex, data.normalized[seriesIndex]),
          y: chartRect.y1 - axisY.projectValue(value, valueIndex, data.normalized[seriesIndex])
        };
        pathCoordinates.push(p.x, p.y);
        pathData.push({
          value: value,
          valueIndex: valueIndex,
          meta: Chartist.getMetaData(series, valueIndex)
        });
      }.bind(this));

      var seriesOptions = {
        lineSmooth: Chartist.getSeriesOption(series, options, 'lineSmooth'),
        showPoint: Chartist.getSeriesOption(series, options, 'showPoint'),
        showLine: Chartist.getSeriesOption(series, options, 'showLine'),
        showArea: Chartist.getSeriesOption(series, options, 'showArea'),
        areaBase: Chartist.getSeriesOption(series, options, 'areaBase')
      };

      var smoothing = typeof seriesOptions.lineSmooth === 'function' ?
        seriesOptions.lineSmooth : (seriesOptions.lineSmooth ? Chartist.Interpolation.cardinal() : Chartist.Interpolation.none());
      // Interpolating path where pathData will be used to annotate each path element so we can trace back the original
      // index, value and meta data
      var path = smoothing(pathCoordinates, pathData);

      // If we should show points we need to create them now to avoid secondary loop
      // Points are drawn from the pathElements returned by the interpolation function
      // Small offset for Firefox to render squares correctly
      if (seriesOptions.showPoint) {

        path.pathElements.forEach(function(pathElement) {
          var point = seriesElement.elem('line', {
            x1: pathElement.x,
            y1: pathElement.y,
            x2: pathElement.x + 0.01,
            y2: pathElement.y
          }, options.classNames.point).attr({
            'value': [pathElement.data.value.x, pathElement.data.value.y].filter(function(v) {
                return v;
              }).join(','),
            'meta': pathElement.data.meta
          }, Chartist.xmlNs.uri);

          this.eventEmitter.emit('draw', {
            type: 'point',
            value: pathElement.data.value,
            index: pathElement.data.valueIndex,
            meta: pathElement.data.meta,
            series: series,
            seriesIndex: seriesIndex,
            axisX: axisX,
            axisY: axisY,
            group: seriesElement,
            element: point,
            x: pathElement.x,
            y: pathElement.y
          });
        }.bind(this));
      }

      if(seriesOptions.showLine) {
        var line = seriesElement.elem('path', {
          d: path.stringify()
        }, options.classNames.line, true);

        this.eventEmitter.emit('draw', {
          type: 'line',
          values: data.normalized[seriesIndex],
          path: path.clone(),
          chartRect: chartRect,
          index: seriesIndex,
          series: series,
          seriesIndex: seriesIndex,
          axisX: axisX,
          axisY: axisY,
          group: seriesElement,
          element: line
        });
      }

      // Area currently only works with axes that support a range!
      if(seriesOptions.showArea && axisY.range) {
        // If areaBase is outside the chart area (< min or > max) we need to set it respectively so that
        // the area is not drawn outside the chart area.
        var areaBase = Math.max(Math.min(seriesOptions.areaBase, axisY.range.max), axisY.range.min);

        // We project the areaBase value into screen coordinates
        var areaBaseProjected = chartRect.y1 - axisY.projectValue(areaBase);

        // In order to form the area we'll first split the path by move commands so we can chunk it up into segments
        path.splitByCommand('M').filter(function onlySolidSegments(pathSegment) {
          // We filter only "solid" segments that contain more than one point. Otherwise there's no need for an area
          return pathSegment.pathElements.length > 1;
        }).map(function convertToArea(solidPathSegments) {
          // Receiving the filtered solid path segments we can now convert those segments into fill areas
          var firstElement = solidPathSegments.pathElements[0];
          var lastElement = solidPathSegments.pathElements[solidPathSegments.pathElements.length - 1];

          // Cloning the solid path segment with closing option and removing the first move command from the clone
          // We then insert a new move that should start at the area base and draw a straight line up or down
          // at the end of the path we add an additional straight line to the projected area base value
          // As the closing option is set our path will be automatically closed
          return solidPathSegments.clone(true)
            .position(0)
            .remove(1)
            .move(firstElement.x, areaBaseProjected)
            .line(firstElement.x, firstElement.y)
            .position(solidPathSegments.pathElements.length + 1)
            .line(lastElement.x, areaBaseProjected);

        }).forEach(function createArea(areaPath) {
          // For each of our newly created area paths, we'll now create path elements by stringifying our path objects
          // and adding the created DOM elements to the correct series group
          var area = seriesElement.elem('path', {
            d: areaPath.stringify()
          }, options.classNames.area, true).attr({
            'values': data.normalized[seriesIndex]
          }, Chartist.xmlNs.uri);

          // Emit an event for each area that was drawn
          this.eventEmitter.emit('draw', {
            type: 'area',
            values: data.normalized[seriesIndex],
            path: areaPath.clone(),
            series: series,
            seriesIndex: seriesIndex,
            axisX: axisX,
            axisY: axisY,
            chartRect: chartRect,
            index: seriesIndex,
            group: seriesElement,
            element: area
          });
        }.bind(this));
      }
    }.bind(this));

    this.eventEmitter.emit('created', {
      bounds: axisY.bounds,
      chartRect: chartRect,
      axisX: axisX,
      axisY: axisY,
      svg: this.svg,
      options: options
    });
  }

  /**
   * This method creates a new line chart.
   *
   * @memberof Chartist.Line
   * @param {String|Node} query A selector query string or directly a DOM element
   * @param {Object} data The data object that needs to consist of a labels and a series array
   * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
   * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
   * @return {Object} An object which exposes the API for the created chart
   *
   * @example
   * // Create a simple line chart
   * var data = {
   *   // A labels array that can contain any sort of values
   *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
   *   // Our series array that contains series objects or in this case series data arrays
   *   series: [
   *     [5, 2, 4, 2, 0]
   *   ]
   * };
   *
   * // As options we currently only set a static size of 300x200 px
   * var options = {
   *   width: '300px',
   *   height: '200px'
   * };
   *
   * // In the global name space Chartist we call the Line function to initialize a line chart. As a first parameter we pass in a selector where we would like to get our chart created. Second parameter is the actual data object and as a third parameter we pass in our options
   * new Chartist.Line('.ct-chart', data, options);
   *
   * @example
   * // Use specific interpolation function with configuration from the Chartist.Interpolation module
   *
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [
   *     [1, 1, 8, 1, 7]
   *   ]
   * }, {
   *   lineSmooth: Chartist.Interpolation.cardinal({
   *     tension: 0.2
   *   })
   * });
   *
   * @example
   * // Create a line chart with responsive options
   *
   * var data = {
   *   // A labels array that can contain any sort of values
   *   labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
   *   // Our series array that contains series objects or in this case series data arrays
   *   series: [
   *     [5, 2, 4, 2, 0]
   *   ]
   * };
   *
   * // In adition to the regular options we specify responsive option overrides that will override the default configutation based on the matching media queries.
   * var responsiveOptions = [
   *   ['screen and (min-width: 641px) and (max-width: 1024px)', {
   *     showPoint: false,
   *     axisX: {
   *       labelInterpolationFnc: function(value) {
   *         // Will return Mon, Tue, Wed etc. on medium screens
   *         return value.slice(0, 3);
   *       }
   *     }
   *   }],
   *   ['screen and (max-width: 640px)', {
   *     showLine: false,
   *     axisX: {
   *       labelInterpolationFnc: function(value) {
   *         // Will return M, T, W etc. on small screens
   *         return value[0];
   *       }
   *     }
   *   }]
   * ];
   *
   * new Chartist.Line('.ct-chart', data, null, responsiveOptions);
   *
   */
  function Line(query, data, options, responsiveOptions) {
    Chartist.Line.super.constructor.call(this,
      query,
      data,
      defaultOptions,
      Chartist.extend({}, defaultOptions, options),
      responsiveOptions);
  }

  // Creating line chart type in Chartist namespace
  Chartist.Line = Chartist.Base.extend({
    constructor: Line,
    createChart: createChart
  });

}(window, document, Chartist));
;/**
 * The bar chart module of Chartist that can be used to draw unipolar or bipolar bar and grouped bar charts.
 *
 * @module Chartist.Bar
 */
/* global Chartist */
(function(window, document, Chartist){
  'use strict';

  /**
   * Default options in bar charts. Expand the code view to see a detailed list of options with comments.
   *
   * @memberof Chartist.Bar
   */
  var defaultOptions = {
    // Options for X-Axis
    axisX: {
      // The offset of the chart drawing area to the border of the container
      offset: 30,
      // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
      position: 'end',
      // Allows you to correct label positioning on this axis by positive or negative x and y offset.
      labelOffset: {
        x: 0,
        y: 0
      },
      // If labels should be shown or not
      showLabel: true,
      // If the axis grid should be drawn or not
      showGrid: true,
      // Interpolation function that allows you to intercept the value from the axis label
      labelInterpolationFnc: Chartist.noop,
      // This value specifies the minimum width in pixel of the scale steps
      scaleMinSpace: 30,
      // Use only integer values (whole numbers) for the scale steps
      onlyInteger: false
    },
    // Options for Y-Axis
    axisY: {
      // The offset of the chart drawing area to the border of the container
      offset: 40,
      // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
      position: 'start',
      // Allows you to correct label positioning on this axis by positive or negative x and y offset.
      labelOffset: {
        x: 0,
        y: 0
      },
      // If labels should be shown or not
      showLabel: true,
      // If the axis grid should be drawn or not
      showGrid: true,
      // Interpolation function that allows you to intercept the value from the axis label
      labelInterpolationFnc: Chartist.noop,
      // This value specifies the minimum height in pixel of the scale steps
      scaleMinSpace: 20,
      // Use only integer values (whole numbers) for the scale steps
      onlyInteger: false
    },
    // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
    width: undefined,
    // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
    height: undefined,
    // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
    high: undefined,
    // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
    low: undefined,
    // Use only integer values (whole numbers) for the scale steps
    onlyInteger: false,
    // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
    chartPadding: {
      top: 15,
      right: 15,
      bottom: 5,
      left: 10
    },
    // Specify the distance in pixel of bars in a group
    seriesBarDistance: 15,
    // If set to true this property will cause the series bars to be stacked. Check the `stackMode` option for further stacking options.
    stackBars: false,
    // If set to 'overlap' this property will force the stacked bars to draw from the zero line.
    // If set to 'accumulate' this property will form a total for each series point. This will also influence the y-axis and the overall bounds of the chart. In stacked mode the seriesBarDistance property will have no effect.
    stackMode: 'accumulate',
    // Inverts the axes of the bar chart in order to draw a horizontal bar chart. Be aware that you also need to invert your axis settings as the Y Axis will now display the labels and the X Axis the values.
    horizontalBars: false,
    // If set to true then each bar will represent a series and the data array is expected to be a one dimensional array of data values rather than a series array of series. This is useful if the bar chart should represent a profile rather than some data over time.
    distributeSeries: false,
    // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
    reverseData: false,
    // Override the class names that get used to generate the SVG structure of the chart
    classNames: {
      chart: 'ct-chart-bar',
      horizontalBars: 'ct-horizontal-bars',
      label: 'ct-label',
      labelGroup: 'ct-labels',
      series: 'ct-series',
      bar: 'ct-bar',
      grid: 'ct-grid',
      gridGroup: 'ct-grids',
      vertical: 'ct-vertical',
      horizontal: 'ct-horizontal',
      start: 'ct-start',
      end: 'ct-end'
    }
  };

  /**
   * Creates a new chart
   *
   */
  function createChart(options) {
    var data = {
      raw: this.data,
      normalized: options.distributeSeries ? Chartist.getDataArray(this.data, options.reverseData, options.horizontalBars ? 'x' : 'y').map(function(value) {
        return [value];
      }) : Chartist.getDataArray(this.data, options.reverseData, options.horizontalBars ? 'x' : 'y')
    };

    var highLow;

    // Create new svg element
    this.svg = Chartist.createSvg(
      this.container,
      options.width,
      options.height,
      options.classNames.chart + (options.horizontalBars ? ' ' + options.classNames.horizontalBars : '')
    );

    // Drawing groups in correct order
    var gridGroup = this.svg.elem('g').addClass(options.classNames.gridGroup);
    var seriesGroup = this.svg.elem('g');
    var labelGroup = this.svg.elem('g').addClass(options.classNames.labelGroup);

    if(options.stackBars) {
      // If stacked bars we need to calculate the high low from stacked values from each series
      var serialSums = Chartist.serialMap(data.normalized, function serialSums() {
        return Array.prototype.slice.call(arguments).map(function(value) {
          return value;
        }).reduce(function(prev, curr) {
          return {
            x: prev.x + curr.x || 0,
            y: prev.y + curr.y || 0
          };
        }, {x: 0, y: 0});
      });

      highLow = Chartist.getHighLow([serialSums], Chartist.extend({}, options, {
        referenceValue: 0
      }), options.horizontalBars ? 'x' : 'y');
    } else {
      highLow = Chartist.getHighLow(data.normalized, Chartist.extend({}, options, {
        referenceValue: 0
      }), options.horizontalBars ? 'x' : 'y');
    }
    // Overrides of high / low from settings
    highLow.high = +options.high || (options.high === 0 ? 0 : highLow.high);
    highLow.low = +options.low || (options.low === 0 ? 0 : highLow.low);

    var chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);

    var valueAxis,
      labelAxisTicks,
      labelAxis,
      axisX,
      axisY;

    // We need to set step count based on some options combinations
    if(options.distributeSeries && options.stackBars) {
      // If distributed series are enabled and bars need to be stacked, we'll only have one bar and therefore should
      // use only the first label for the step axis
      labelAxisTicks = data.raw.labels.slice(0, 1);
    } else {
      // If distributed series are enabled but stacked bars aren't, we should use the series labels
      // If we are drawing a regular bar chart with two dimensional series data, we just use the labels array
      // as the bars are normalized
      labelAxisTicks = data.raw.labels;
    }

    // Set labelAxis and valueAxis based on the horizontalBars setting. This setting will flip the axes if necessary.
    if(options.horizontalBars) {
      if(options.axisX.type === undefined) {
        valueAxis = axisX = new Chartist.AutoScaleAxis(Chartist.Axis.units.x, data, chartRect, Chartist.extend({}, options.axisX, {
          highLow: highLow,
          referenceValue: 0
        }));
      } else {
        valueAxis = axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data, chartRect, Chartist.extend({}, options.axisX, {
          highLow: highLow,
          referenceValue: 0
        }));
      }

      if(options.axisY.type === undefined) {
        labelAxis = axisY = new Chartist.StepAxis(Chartist.Axis.units.y, data, chartRect, {
          ticks: labelAxisTicks
        });
      } else {
        labelAxis = axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data, chartRect, options.axisY);
      }
    } else {
      if(options.axisX.type === undefined) {
        labelAxis = axisX = new Chartist.StepAxis(Chartist.Axis.units.x, data, chartRect, {
          ticks: labelAxisTicks
        });
      } else {
        labelAxis = axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data, chartRect, options.axisX);
      }

      if(options.axisY.type === undefined) {
        valueAxis = axisY = new Chartist.AutoScaleAxis(Chartist.Axis.units.y, data, chartRect, Chartist.extend({}, options.axisY, {
          highLow: highLow,
          referenceValue: 0
        }));
      } else {
        valueAxis = axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data, chartRect, Chartist.extend({}, options.axisY, {
          highLow: highLow,
          referenceValue: 0
        }));
      }
    }

    // Projected 0 point
    var zeroPoint = options.horizontalBars ? (chartRect.x1 + valueAxis.projectValue(0)) : (chartRect.y1 - valueAxis.projectValue(0));
    // Used to track the screen coordinates of stacked bars
    var stackedBarValues = [];

    labelAxis.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);
    valueAxis.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);

    // Draw the series
    data.raw.series.forEach(function(series, seriesIndex) {
      // Calculating bi-polar value of index for seriesOffset. For i = 0..4 biPol will be -1.5, -0.5, 0.5, 1.5 etc.
      var biPol = seriesIndex - (data.raw.series.length - 1) / 2;
      // Half of the period width between vertical grid lines used to position bars
      var periodHalfLength;
      // Current series SVG element
      var seriesElement;

      // We need to set periodHalfLength based on some options combinations
      if(options.distributeSeries && !options.stackBars) {
        // If distributed series are enabled but stacked bars aren't, we need to use the length of the normaizedData array
        // which is the series count and divide by 2
        periodHalfLength = labelAxis.axisLength / data.normalized.length / 2;
      } else if(options.distributeSeries && options.stackBars) {
        // If distributed series and stacked bars are enabled we'll only get one bar so we should just divide the axis
        // length by 2
        periodHalfLength = labelAxis.axisLength / 2;
      } else {
        // On regular bar charts we should just use the series length
        periodHalfLength = labelAxis.axisLength / data.normalized[seriesIndex].length / 2;
      }

      // Adding the series group to the series element
      seriesElement = seriesGroup.elem('g');

      // Write attributes to series group element. If series name or meta is undefined the attributes will not be written
      seriesElement.attr({
        'series-name': series.name,
        'meta': Chartist.serialize(series.meta)
      }, Chartist.xmlNs.uri);

      // Use series class from series data or if not set generate one
      seriesElement.addClass([
        options.classNames.series,
        (series.className || options.classNames.series + '-' + Chartist.alphaNumerate(seriesIndex))
      ].join(' '));

      data.normalized[seriesIndex].forEach(function(value, valueIndex) {
        var projected,
          bar,
          previousStack,
          labelAxisValueIndex;

        // We need to set labelAxisValueIndex based on some options combinations
        if(options.distributeSeries && !options.stackBars) {
          // If distributed series are enabled but stacked bars aren't, we can use the seriesIndex for later projection
          // on the step axis for label positioning
          labelAxisValueIndex = seriesIndex;
        } else if(options.distributeSeries && options.stackBars) {
          // If distributed series and stacked bars are enabled, we will only get one bar and therefore always use
          // 0 for projection on the label step axis
          labelAxisValueIndex = 0;
        } else {
          // On regular bar charts we just use the value index to project on the label step axis
          labelAxisValueIndex = valueIndex;
        }

        // We need to transform coordinates differently based on the chart layout
        if(options.horizontalBars) {
          projected = {
            x: chartRect.x1 + valueAxis.projectValue(value && value.x ? value.x : 0, valueIndex, data.normalized[seriesIndex]),
            y: chartRect.y1 - labelAxis.projectValue(value && value.y ? value.y : 0, labelAxisValueIndex, data.normalized[seriesIndex])
          };
        } else {
          projected = {
            x: chartRect.x1 + labelAxis.projectValue(value && value.x ? value.x : 0, labelAxisValueIndex, data.normalized[seriesIndex]),
            y: chartRect.y1 - valueAxis.projectValue(value && value.y ? value.y : 0, valueIndex, data.normalized[seriesIndex])
          }
        }

        // If the label axis is a step based axis we will offset the bar into the middle of between two steps using
        // the periodHalfLength value. Also we do arrange the different series so that they align up to each other using
        // the seriesBarDistance. If we don't have a step axis, the bar positions can be chosen freely so we should not
        // add any automated positioning.
        if(labelAxis instanceof Chartist.StepAxis) {
          // Offset to center bar between grid lines, but only if the step axis is not stretched
          if(!labelAxis.options.stretch) {
            projected[labelAxis.units.pos] += periodHalfLength * (options.horizontalBars ? -1 : 1);
          }
          // Using bi-polar offset for multiple series if no stacked bars or series distribution is used
          projected[labelAxis.units.pos] += (options.stackBars || options.distributeSeries) ? 0 : biPol * options.seriesBarDistance * (options.horizontalBars ? -1 : 1);
        }

        // Enter value in stacked bar values used to remember previous screen value for stacking up bars
        previousStack = stackedBarValues[valueIndex] || zeroPoint;
        stackedBarValues[valueIndex] = previousStack - (zeroPoint - projected[labelAxis.counterUnits.pos]);

        // Skip if value is undefined
        if(value === undefined) {
          return;
        }

        var positions = {};
        positions[labelAxis.units.pos + '1'] = projected[labelAxis.units.pos];
        positions[labelAxis.units.pos + '2'] = projected[labelAxis.units.pos];

        if(options.stackBars && (options.stackMode === 'accumulate' || !options.stackMode)) {
          // Stack mode: accumulate (default)
          // If bars are stacked we use the stackedBarValues reference and otherwise base all bars off the zero line
          // We want backwards compatibility, so the expected fallback without the 'stackMode' option
          // to be the original behaviour (accumulate)
          positions[labelAxis.counterUnits.pos + '1'] = previousStack;
          positions[labelAxis.counterUnits.pos + '2'] = stackedBarValues[valueIndex];
        } else {
          // Draw from the zero line normally
          // This is also the same code for Stack mode: overlap
          positions[labelAxis.counterUnits.pos + '1'] = zeroPoint;
          positions[labelAxis.counterUnits.pos + '2'] = projected[labelAxis.counterUnits.pos];
        }

        // Limit x and y so that they are within the chart rect
        positions.x1 = Math.min(Math.max(positions.x1, chartRect.x1), chartRect.x2);
        positions.x2 = Math.min(Math.max(positions.x2, chartRect.x1), chartRect.x2);
        positions.y1 = Math.min(Math.max(positions.y1, chartRect.y2), chartRect.y1);
        positions.y2 = Math.min(Math.max(positions.y2, chartRect.y2), chartRect.y1);

        // Create bar element
        bar = seriesElement.elem('line', positions, options.classNames.bar).attr({
          'value': [value.x, value.y].filter(function(v) {
            return v;
          }).join(','),
          'meta': Chartist.getMetaData(series, valueIndex)
        }, Chartist.xmlNs.uri);

        this.eventEmitter.emit('draw', Chartist.extend({
          type: 'bar',
          value: value,
          index: valueIndex,
          meta: Chartist.getMetaData(series, valueIndex),
          series: series,
          seriesIndex: seriesIndex,
          axisX: axisX,
          axisY: axisY,
          chartRect: chartRect,
          group: seriesElement,
          element: bar
        }, positions));
      }.bind(this));
    }.bind(this));

    this.eventEmitter.emit('created', {
      bounds: valueAxis.bounds,
      chartRect: chartRect,
      axisX: axisX,
      axisY: axisY,
      svg: this.svg,
      options: options
    });
  }

  /**
   * This method creates a new bar chart and returns API object that you can use for later changes.
   *
   * @memberof Chartist.Bar
   * @param {String|Node} query A selector query string or directly a DOM element
   * @param {Object} data The data object that needs to consist of a labels and a series array
   * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
   * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
   * @return {Object} An object which exposes the API for the created chart
   *
   * @example
   * // Create a simple bar chart
   * var data = {
   *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
   *   series: [
   *     [5, 2, 4, 2, 0]
   *   ]
   * };
   *
   * // In the global name space Chartist we call the Bar function to initialize a bar chart. As a first parameter we pass in a selector where we would like to get our chart created and as a second parameter we pass our data object.
   * new Chartist.Bar('.ct-chart', data);
   *
   * @example
   * // This example creates a bipolar grouped bar chart where the boundaries are limitted to -10 and 10
   * new Chartist.Bar('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5, 6, 7],
   *   series: [
   *     [1, 3, 2, -5, -3, 1, -6],
   *     [-5, -2, -4, -1, 2, -3, 1]
   *   ]
   * }, {
   *   seriesBarDistance: 12,
   *   low: -10,
   *   high: 10
   * });
   *
   */
  function Bar(query, data, options, responsiveOptions) {
    Chartist.Bar.super.constructor.call(this,
      query,
      data,
      defaultOptions,
      Chartist.extend({}, defaultOptions, options),
      responsiveOptions);
  }

  // Creating bar chart type in Chartist namespace
  Chartist.Bar = Chartist.Base.extend({
    constructor: Bar,
    createChart: createChart
  });

}(window, document, Chartist));
;/**
 * The pie chart module of Chartist that can be used to draw pie, donut or gauge charts
 *
 * @module Chartist.Pie
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  /**
   * Default options in line charts. Expand the code view to see a detailed list of options with comments.
   *
   * @memberof Chartist.Pie
   */
  var defaultOptions = {
    // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
    width: undefined,
    // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
    height: undefined,
    // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
    chartPadding: 5,
    // Override the class names that are used to generate the SVG structure of the chart
    classNames: {
      chartPie: 'ct-chart-pie',
      chartDonut: 'ct-chart-donut',
      series: 'ct-series',
      slicePie: 'ct-slice-pie',
      sliceDonut: 'ct-slice-donut',
      label: 'ct-label'
    },
    // The start angle of the pie chart in degrees where 0 points north. A higher value offsets the start angle clockwise.
    startAngle: 0,
    // An optional total you can specify. By specifying a total value, the sum of the values in the series must be this total in order to draw a full pie. You can use this parameter to draw only parts of a pie or gauge charts.
    total: undefined,
    // If specified the donut CSS classes will be used and strokes will be drawn instead of pie slices.
    donut: false,
    // Specify the donut stroke width, currently done in javascript for convenience. May move to CSS styles in the future.
    // This option can be set as number or string to specify a relative width (i.e. 100 or '30%').
    donutWidth: 60,
    // If a label should be shown or not
    showLabel: true,
    // Label position offset from the standard position which is half distance of the radius. This value can be either positive or negative. Positive values will position the label away from the center.
    labelOffset: 0,
    // This option can be set to 'inside', 'outside' or 'center'. Positioned with 'inside' the labels will be placed on half the distance of the radius to the border of the Pie by respecting the 'labelOffset'. The 'outside' option will place the labels at the border of the pie and 'center' will place the labels in the absolute center point of the chart. The 'center' option only makes sense in conjunction with the 'labelOffset' option.
    labelPosition: 'inside',
    // An interpolation function for the label value
    labelInterpolationFnc: Chartist.noop,
    // Label direction can be 'neutral', 'explode' or 'implode'. The labels anchor will be positioned based on those settings as well as the fact if the labels are on the right or left side of the center of the chart. Usually explode is useful when labels are positioned far away from the center.
    labelDirection: 'neutral',
    // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
    reverseData: false
  };

  /**
   * Determines SVG anchor position based on direction and center parameter
   *
   * @param center
   * @param label
   * @param direction
   * @return {string}
   */
  function determineAnchorPosition(center, label, direction) {
    var toTheRight = label.x > center.x;

    if(toTheRight && direction === 'explode' ||
      !toTheRight && direction === 'implode') {
      return 'start';
    } else if(toTheRight && direction === 'implode' ||
      !toTheRight && direction === 'explode') {
      return 'end';
    } else {
      return 'middle';
    }
  }

  /**
   * Creates the pie chart
   *
   * @param options
   */
  function createChart(options) {
    var seriesGroups = [],
      labelsGroup,
      chartRect,
      radius,
      labelRadius,
      totalDataSum,
      startAngle = options.startAngle,
      dataArray = Chartist.getDataArray(this.data, options.reverseData);

    // Create SVG.js draw
    this.svg = Chartist.createSvg(this.container, options.width, options.height,options.donut ? options.classNames.chartDonut : options.classNames.chartPie);
    // Calculate charting rect
    chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);
    // Get biggest circle radius possible within chartRect
    radius = Math.min(chartRect.width() / 2, chartRect.height() / 2);
    // Calculate total of all series to get reference value or use total reference from optional options
    totalDataSum = options.total || dataArray.reduce(function(previousValue, currentValue) {
      return previousValue + currentValue;
    }, 0);

    var donutWidth = Chartist.quantity(options.donutWidth);
    if (donutWidth.unit === '%') {
      donutWidth.value *= radius / 100;
    }

    // If this is a donut chart we need to adjust our radius to enable strokes to be drawn inside
    // Unfortunately this is not possible with the current SVG Spec
    // See this proposal for more details: http://lists.w3.org/Archives/Public/www-svg/2003Oct/0000.html
    radius -= options.donut ? donutWidth.value / 2  : 0;

    // If labelPosition is set to `outside` or a donut chart is drawn then the label position is at the radius,
    // if regular pie chart it's half of the radius
    if(options.labelPosition === 'outside' || options.donut) {
      labelRadius = radius;
    } else if(options.labelPosition === 'center') {
      // If labelPosition is center we start with 0 and will later wait for the labelOffset
      labelRadius = 0;
    } else {
      // Default option is 'inside' where we use half the radius so the label will be placed in the center of the pie
      // slice
      labelRadius = radius / 2;
    }
    // Add the offset to the labelRadius where a negative offset means closed to the center of the chart
    labelRadius += options.labelOffset;

    // Calculate end angle based on total sum and current data value and offset with padding
    var center = {
      x: chartRect.x1 + chartRect.width() / 2,
      y: chartRect.y2 + chartRect.height() / 2
    };

    // Check if there is only one non-zero value in the series array.
    var hasSingleValInSeries = this.data.series.filter(function(val) {
      return val.hasOwnProperty('value') ? val.value !== 0 : val !== 0;
    }).length === 1;

    //if we need to show labels we create the label group now
    if(options.showLabel) {
      labelsGroup = this.svg.elem('g', null, null, true);
    }

    // Draw the series
    // initialize series groups
    for (var i = 0; i < this.data.series.length; i++) {
      var series = this.data.series[i];
      seriesGroups[i] = this.svg.elem('g', null, null, true);

      // If the series is an object and contains a name or meta data we add a custom attribute
      seriesGroups[i].attr({
        'series-name': series.name
      }, Chartist.xmlNs.uri);

      // Use series class from series data or if not set generate one
      seriesGroups[i].addClass([
        options.classNames.series,
        (series.className || options.classNames.series + '-' + Chartist.alphaNumerate(i))
      ].join(' '));

      var endAngle = startAngle + dataArray[i] / totalDataSum * 360;
      // If we need to draw the arc for all 360 degrees we need to add a hack where we close the circle
      // with Z and use 359.99 degrees
      if(endAngle - startAngle === 360) {
        endAngle -= 0.01;
      }

      var start = Chartist.polarToCartesian(center.x, center.y, radius, startAngle - (i === 0 || hasSingleValInSeries ? 0 : 0.2)),
        end = Chartist.polarToCartesian(center.x, center.y, radius, endAngle);

      // Create a new path element for the pie chart. If this isn't a donut chart we should close the path for a correct stroke
      var path = new Chartist.Svg.Path(!options.donut)
        .move(end.x, end.y)
        .arc(radius, radius, 0, endAngle - startAngle > 180, 0, start.x, start.y);

      // If regular pie chart (no donut) we add a line to the center of the circle for completing the pie
      if(!options.donut) {
        path.line(center.x, center.y);
      }

      // Create the SVG path
      // If this is a donut chart we add the donut class, otherwise just a regular slice
      var pathElement = seriesGroups[i].elem('path', {
        d: path.stringify()
      }, options.donut ? options.classNames.sliceDonut : options.classNames.slicePie);

      // Adding the pie series value to the path
      pathElement.attr({
        'value': dataArray[i],
        'meta': Chartist.serialize(series.meta)
      }, Chartist.xmlNs.uri);

      // If this is a donut, we add the stroke-width as style attribute
      if(options.donut) {
        pathElement.attr({
          'style': 'stroke-width: ' + donutWidth.value + 'px'
        });
      }

      // Fire off draw event
      this.eventEmitter.emit('draw', {
        type: 'slice',
        value: dataArray[i],
        totalDataSum: totalDataSum,
        index: i,
        meta: series.meta,
        series: series,
        group: seriesGroups[i],
        element: pathElement,
        path: path.clone(),
        center: center,
        radius: radius,
        startAngle: startAngle,
        endAngle: endAngle
      });

      // If we need to show labels we need to add the label for this slice now
      if(options.showLabel) {
        // Position at the labelRadius distance from center and between start and end angle
        var labelPosition = Chartist.polarToCartesian(center.x, center.y, labelRadius, startAngle + (endAngle - startAngle) / 2),
          interpolatedValue = options.labelInterpolationFnc(this.data.labels ? this.data.labels[i] : dataArray[i], i);

        if(interpolatedValue || interpolatedValue === 0) {
          var labelElement = labelsGroup.elem('text', {
            dx: labelPosition.x,
            dy: labelPosition.y,
            'text-anchor': determineAnchorPosition(center, labelPosition, options.labelDirection)
          }, options.classNames.label).text('' + interpolatedValue);

          // Fire off draw event
          this.eventEmitter.emit('draw', {
            type: 'label',
            index: i,
            group: labelsGroup,
            element: labelElement,
            text: '' + interpolatedValue,
            x: labelPosition.x,
            y: labelPosition.y
          });
        }
      }

      // Set next startAngle to current endAngle. Use slight offset so there are no transparent hairline issues
      // (except for last slice)
      startAngle = endAngle;
    }

    this.eventEmitter.emit('created', {
      chartRect: chartRect,
      svg: this.svg,
      options: options
    });
  }

  /**
   * This method creates a new pie chart and returns an object that can be used to redraw the chart.
   *
   * @memberof Chartist.Pie
   * @param {String|Node} query A selector query string or directly a DOM element
   * @param {Object} data The data object in the pie chart needs to have a series property with a one dimensional data array. The values will be normalized against each other and don't necessarily need to be in percentage. The series property can also be an array of value objects that contain a value property and a className property to override the CSS class name for the series group.
   * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
   * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
   * @return {Object} An object with a version and an update method to manually redraw the chart
   *
   * @example
   * // Simple pie chart example with four series
   * new Chartist.Pie('.ct-chart', {
   *   series: [10, 2, 4, 3]
   * });
   *
   * @example
   * // Drawing a donut chart
   * new Chartist.Pie('.ct-chart', {
   *   series: [10, 2, 4, 3]
   * }, {
   *   donut: true
   * });
   *
   * @example
   * // Using donut, startAngle and total to draw a gauge chart
   * new Chartist.Pie('.ct-chart', {
   *   series: [20, 10, 30, 40]
   * }, {
   *   donut: true,
   *   donutWidth: 20,
   *   startAngle: 270,
   *   total: 200
   * });
   *
   * @example
   * // Drawing a pie chart with padding and labels that are outside the pie
   * new Chartist.Pie('.ct-chart', {
   *   series: [20, 10, 30, 40]
   * }, {
   *   chartPadding: 30,
   *   labelOffset: 50,
   *   labelDirection: 'explode'
   * });
   *
   * @example
   * // Overriding the class names for individual series as well as a name and meta data.
   * // The name will be written as ct:series-name attribute and the meta data will be serialized and written
   * // to a ct:meta attribute.
   * new Chartist.Pie('.ct-chart', {
   *   series: [{
   *     value: 20,
   *     name: 'Series 1',
   *     className: 'my-custom-class-one',
   *     meta: 'Meta One'
   *   }, {
   *     value: 10,
   *     name: 'Series 2',
   *     className: 'my-custom-class-two',
   *     meta: 'Meta Two'
   *   }, {
   *     value: 70,
   *     name: 'Series 3',
   *     className: 'my-custom-class-three',
   *     meta: 'Meta Three'
   *   }]
   * });
   */
  function Pie(query, data, options, responsiveOptions) {
    Chartist.Pie.super.constructor.call(this,
      query,
      data,
      defaultOptions,
      Chartist.extend({}, defaultOptions, options),
      responsiveOptions);
  }

  // Creating pie chart type in Chartist namespace
  Chartist.Pie = Chartist.Base.extend({
    constructor: Pie,
    createChart: createChart,
    determineAnchorPosition: determineAnchorPosition
  });

}(window, document, Chartist));

return Chartist;

}));


/*D3*/
!function(){function n(n){return n&&(n.ownerDocument||n.document||n).documentElement}function t(n){return n&&(n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView)}function e(n,t){return t>n?-1:n>t?1:n>=t?0:NaN}function r(n){return null===n?NaN:+n}function u(n){return!isNaN(n)}function i(n){return{left:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)<0?r=i+1:u=i}return r},right:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)>0?u=i:r=i+1}return r}}}function a(n){return n.length}function o(n){for(var t=1;n*t%1;)t*=10;return t}function l(n,t){for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}function c(){this._=Object.create(null)}function s(n){return(n+="")===xa||n[0]===ba?ba+n:n}function f(n){return(n+="")[0]===ba?n.slice(1):n}function h(n){return s(n)in this._}function g(n){return(n=s(n))in this._&&delete this._[n]}function p(){var n=[];for(var t in this._)n.push(f(t));return n}function v(){var n=0;for(var t in this._)++n;return n}function d(){for(var n in this._)return!1;return!0}function m(){this._=Object.create(null)}function y(n){return n}function M(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function x(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e=0,r=_a.length;r>e;++e){var u=_a[e]+t;if(u in n)return u}}function b(){}function _(){}function w(n){function t(){for(var t,r=e,u=-1,i=r.length;++u<i;)(t=r[u].on)&&t.apply(this,arguments);return n}var e=[],r=new c;return t.on=function(t,u){var i,a=r.get(t);return arguments.length<2?a&&a.on:(a&&(a.on=null,e=e.slice(0,i=e.indexOf(a)).concat(e.slice(i+1)),r.remove(t)),u&&e.push(r.set(t,{on:u})),n)},t}function S(){oa.event.preventDefault()}function k(){for(var n,t=oa.event;n=t.sourceEvent;)t=n;return t}function N(n){for(var t=new _,e=0,r=arguments.length;++e<r;)t[arguments[e]]=w(t);return t.of=function(e,r){return function(u){try{var i=u.sourceEvent=oa.event;u.target=n,oa.event=u,t[u.type].apply(e,r)}finally{oa.event=i}}},t}function E(n){return Sa(n,Aa),n}function A(n){return"function"==typeof n?n:function(){return ka(n,this)}}function C(n){return"function"==typeof n?n:function(){return Na(n,this)}}function z(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function u(){this.setAttribute(n,t)}function i(){this.setAttributeNS(n.space,n.local,t)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=oa.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?o:a:n.local?i:u}function L(n){return n.trim().replace(/\s+/g," ")}function q(n){return new RegExp("(?:^|\\s+)"+oa.requote(n)+"(?:\\s+|$)","g")}function T(n){return(n+"").trim().split(/^|\s+/)}function R(n,t){function e(){for(var e=-1;++e<u;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<u;)n[e](this,r)}n=T(n).map(D);var u=n.length;return"function"==typeof t?r:e}function D(n){var t=q(n);return function(e,r){if(u=e.classList)return r?u.add(n):u.remove(n);var u=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(u)||e.setAttribute("class",L(u+" "+n))):e.setAttribute("class",L(u.replace(t," ")))}}function P(n,t,e){function r(){this.style.removeProperty(n)}function u(){this.style.setProperty(n,t,e)}function i(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?i:u}function j(n,t){function e(){delete this[n]}function r(){this[n]=t}function u(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?u:r}function U(n){function t(){var t=this.ownerDocument,e=this.namespaceURI;return e?t.createElementNS(e,n):t.createElement(n)}function e(){return this.ownerDocument.createElementNS(n.space,n.local)}return"function"==typeof n?n:(n=oa.ns.qualify(n)).local?e:t}function F(){var n=this.parentNode;n&&n.removeChild(this)}function H(n){return{__data__:n}}function O(n){return function(){return Ea(this,n)}}function I(n){return arguments.length||(n=e),function(t,e){return t&&e?n(t.__data__,e.__data__):!t-!e}}function Y(n,t){for(var e=0,r=n.length;r>e;e++)for(var u,i=n[e],a=0,o=i.length;o>a;a++)(u=i[a])&&t(u,a,e);return n}function Z(n){return Sa(n,za),n}function V(n){var t,e;return function(r,u,i){var a,o=n[i].update,l=o.length;for(i!=e&&(e=i,t=0),u>=t&&(t=u+1);!(a=o[t])&&++t<l;);return a}}function X(n,t,e){function r(){var t=this[a];t&&(this.removeEventListener(n,t,t.$),delete this[a])}function u(){var u=l(t,ca(arguments));r.call(this),this.addEventListener(n,this[a]=u,u.$=e),u._=t}function i(){var t,e=new RegExp("^__on([^.]+)"+oa.requote(n)+"$");for(var r in this)if(t=r.match(e)){var u=this[r];this.removeEventListener(t[1],u,u.$),delete this[r]}}var a="__on"+n,o=n.indexOf("."),l=$;o>0&&(n=n.slice(0,o));var c=La.get(n);return c&&(n=c,l=B),o?t?u:r:t?b:i}function $(n,t){return function(e){var r=oa.event;oa.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{oa.event=r}}}function B(n,t){var e=$(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function W(e){var r=".dragsuppress-"+ ++Ta,u="click"+r,i=oa.select(t(e)).on("touchmove"+r,S).on("dragstart"+r,S).on("selectstart"+r,S);if(null==qa&&(qa="onselectstart"in e?!1:x(e.style,"userSelect")),qa){var a=n(e).style,o=a[qa];a[qa]="none"}return function(n){if(i.on(r,null),qa&&(a[qa]=o),n){var t=function(){i.on(u,null)};i.on(u,function(){S(),t()},!0),setTimeout(t,0)}}}function J(n,e){e.changedTouches&&(e=e.changedTouches[0]);var r=n.ownerSVGElement||n;if(r.createSVGPoint){var u=r.createSVGPoint();if(0>Ra){var i=t(n);if(i.scrollX||i.scrollY){r=oa.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");var a=r[0][0].getScreenCTM();Ra=!(a.f||a.e),r.remove()}}return Ra?(u.x=e.pageX,u.y=e.pageY):(u.x=e.clientX,u.y=e.clientY),u=u.matrixTransform(n.getScreenCTM().inverse()),[u.x,u.y]}var o=n.getBoundingClientRect();return[e.clientX-o.left-n.clientLeft,e.clientY-o.top-n.clientTop]}function G(){return oa.event.changedTouches[0].identifier}function K(n){return n>0?1:0>n?-1:0}function Q(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(t[1]-n[1])*(e[0]-n[0])}function nn(n){return n>1?0:-1>n?ja:Math.acos(n)}function tn(n){return n>1?Ha:-1>n?-Ha:Math.asin(n)}function en(n){return((n=Math.exp(n))-1/n)/2}function rn(n){return((n=Math.exp(n))+1/n)/2}function un(n){return((n=Math.exp(2*n))-1)/(n+1)}function an(n){return(n=Math.sin(n/2))*n}function on(){}function ln(n,t,e){return this instanceof ln?(this.h=+n,this.s=+t,void(this.l=+e)):arguments.length<2?n instanceof ln?new ln(n.h,n.s,n.l):_n(""+n,wn,ln):new ln(n,t,e)}function cn(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?i+(a-i)*n/60:180>n?a:240>n?i+(a-i)*(240-n)/60:i}function u(n){return Math.round(255*r(n))}var i,a;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,a=.5>=e?e*(1+t):e+t-e*t,i=2*e-a,new yn(u(n+120),u(n),u(n-120))}function sn(n,t,e){return this instanceof sn?(this.h=+n,this.c=+t,void(this.l=+e)):arguments.length<2?n instanceof sn?new sn(n.h,n.c,n.l):n instanceof hn?pn(n.l,n.a,n.b):pn((n=Sn((n=oa.rgb(n)).r,n.g,n.b)).l,n.a,n.b):new sn(n,t,e)}function fn(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),new hn(e,Math.cos(n*=Oa)*t,Math.sin(n)*t)}function hn(n,t,e){return this instanceof hn?(this.l=+n,this.a=+t,void(this.b=+e)):arguments.length<2?n instanceof hn?new hn(n.l,n.a,n.b):n instanceof sn?fn(n.h,n.c,n.l):Sn((n=yn(n)).r,n.g,n.b):new hn(n,t,e)}function gn(n,t,e){var r=(n+16)/116,u=r+t/500,i=r-e/200;return u=vn(u)*Ka,r=vn(r)*Qa,i=vn(i)*no,new yn(mn(3.2404542*u-1.5371385*r-.4985314*i),mn(-.969266*u+1.8760108*r+.041556*i),mn(.0556434*u-.2040259*r+1.0572252*i))}function pn(n,t,e){return n>0?new sn(Math.atan2(e,t)*Ia,Math.sqrt(t*t+e*e),n):new sn(NaN,NaN,n)}function vn(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function dn(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function mn(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function yn(n,t,e){return this instanceof yn?(this.r=~~n,this.g=~~t,void(this.b=~~e)):arguments.length<2?n instanceof yn?new yn(n.r,n.g,n.b):_n(""+n,yn,cn):new yn(n,t,e)}function Mn(n){return new yn(n>>16,n>>8&255,255&n)}function xn(n){return Mn(n)+""}function bn(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function _n(n,t,e){var r,u,i,a=0,o=0,l=0;if(r=/([a-z]+)\((.*)\)/.exec(n=n.toLowerCase()))switch(u=r[2].split(","),r[1]){case"hsl":return e(parseFloat(u[0]),parseFloat(u[1])/100,parseFloat(u[2])/100);case"rgb":return t(Nn(u[0]),Nn(u[1]),Nn(u[2]))}return(i=ro.get(n))?t(i.r,i.g,i.b):(null==n||"#"!==n.charAt(0)||isNaN(i=parseInt(n.slice(1),16))||(4===n.length?(a=(3840&i)>>4,a=a>>4|a,o=240&i,o=o>>4|o,l=15&i,l=l<<4|l):7===n.length&&(a=(16711680&i)>>16,o=(65280&i)>>8,l=255&i)),t(a,o,l))}function wn(n,t,e){var r,u,i=Math.min(n/=255,t/=255,e/=255),a=Math.max(n,t,e),o=a-i,l=(a+i)/2;return o?(u=.5>l?o/(a+i):o/(2-a-i),r=n==a?(t-e)/o+(e>t?6:0):t==a?(e-n)/o+2:(n-t)/o+4,r*=60):(r=NaN,u=l>0&&1>l?0:r),new ln(r,u,l)}function Sn(n,t,e){n=kn(n),t=kn(t),e=kn(e);var r=dn((.4124564*n+.3575761*t+.1804375*e)/Ka),u=dn((.2126729*n+.7151522*t+.072175*e)/Qa),i=dn((.0193339*n+.119192*t+.9503041*e)/no);return hn(116*u-16,500*(r-u),200*(u-i))}function kn(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function Nn(n){var t=parseFloat(n);return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function En(n){return"function"==typeof n?n:function(){return n}}function An(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),Cn(t,e,n,r)}}function Cn(n,t,e,r){function u(){var n,t=l.status;if(!t&&Ln(l)||t>=200&&300>t||304===t){try{n=e.call(i,l)}catch(r){return void a.error.call(i,r)}a.load.call(i,n)}else a.error.call(i,l)}var i={},a=oa.dispatch("beforesend","progress","load","error"),o={},l=new XMLHttpRequest,c=null;return!this.XDomainRequest||"withCredentials"in l||!/^(http(s)?:)?\/\//.test(n)||(l=new XDomainRequest),"onload"in l?l.onload=l.onerror=u:l.onreadystatechange=function(){l.readyState>3&&u()},l.onprogress=function(n){var t=oa.event;oa.event=n;try{a.progress.call(i,l)}finally{oa.event=t}},i.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?o[n]:(null==t?delete o[n]:o[n]=t+"",i)},i.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",i):t},i.responseType=function(n){return arguments.length?(c=n,i):c},i.response=function(n){return e=n,i},["get","post"].forEach(function(n){i[n]=function(){return i.send.apply(i,[n].concat(ca(arguments)))}}),i.send=function(e,r,u){if(2===arguments.length&&"function"==typeof r&&(u=r,r=null),l.open(e,n,!0),null==t||"accept"in o||(o.accept=t+",*/*"),l.setRequestHeader)for(var s in o)l.setRequestHeader(s,o[s]);return null!=t&&l.overrideMimeType&&l.overrideMimeType(t),null!=c&&(l.responseType=c),null!=u&&i.on("error",u).on("load",function(n){u(null,n)}),a.beforesend.call(i,l),l.send(null==r?null:r),i},i.abort=function(){return l.abort(),i},oa.rebind(i,a,"on"),null==r?i:i.get(zn(r))}function zn(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function Ln(n){var t=n.responseType;return t&&"text"!==t?n.response:n.responseText}function qn(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now());var u=e+t,i={c:n,t:u,n:null};return io?io.n=i:uo=i,io=i,ao||(oo=clearTimeout(oo),ao=1,lo(Tn)),i}function Tn(){var n=Rn(),t=Dn()-n;t>24?(isFinite(t)&&(clearTimeout(oo),oo=setTimeout(Tn,t)),ao=0):(ao=1,lo(Tn))}function Rn(){for(var n=Date.now(),t=uo;t;)n>=t.t&&t.c(n-t.t)&&(t.c=null),t=t.n;return n}function Dn(){for(var n,t=uo,e=1/0;t;)t.c?(t.t<e&&(e=t.t),t=(n=t).n):t=n?n.n=t.n:uo=t.n;return io=n,e}function Pn(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function jn(n,t){var e=Math.pow(10,3*Ma(8-t));return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function Un(n){var t=n.decimal,e=n.thousands,r=n.grouping,u=n.currency,i=r&&e?function(n,t){for(var u=n.length,i=[],a=0,o=r[0],l=0;u>0&&o>0&&(l+o+1>t&&(o=Math.max(1,t-l)),i.push(n.substring(u-=o,u+o)),!((l+=o+1)>t));)o=r[a=(a+1)%r.length];return i.reverse().join(e)}:y;return function(n){var e=so.exec(n),r=e[1]||" ",a=e[2]||">",o=e[3]||"-",l=e[4]||"",c=e[5],s=+e[6],f=e[7],h=e[8],g=e[9],p=1,v="",d="",m=!1,y=!0;switch(h&&(h=+h.substring(1)),(c||"0"===r&&"="===a)&&(c=r="0",a="="),g){case"n":f=!0,g="g";break;case"%":p=100,d="%",g="f";break;case"p":p=100,d="%",g="r";break;case"b":case"o":case"x":case"X":"#"===l&&(v="0"+g.toLowerCase());case"c":y=!1;case"d":m=!0,h=0;break;case"s":p=-1,g="r"}"$"===l&&(v=u[0],d=u[1]),"r"!=g||h||(g="g"),null!=h&&("g"==g?h=Math.max(1,Math.min(21,h)):("e"==g||"f"==g)&&(h=Math.max(0,Math.min(20,h)))),g=fo.get(g)||Fn;var M=c&&f;return function(n){var e=d;if(m&&n%1)return"";var u=0>n||0===n&&0>1/n?(n=-n,"-"):"-"===o?"":o;if(0>p){var l=oa.formatPrefix(n,h);n=l.scale(n),e=l.symbol+d}else n*=p;n=g(n,h);var x,b,_=n.lastIndexOf(".");if(0>_){var w=y?n.lastIndexOf("e"):-1;0>w?(x=n,b=""):(x=n.substring(0,w),b=n.substring(w))}else x=n.substring(0,_),b=t+n.substring(_+1);!c&&f&&(x=i(x,1/0));var S=v.length+x.length+b.length+(M?0:u.length),k=s>S?new Array(S=s-S+1).join(r):"";return M&&(x=i(k+x,k.length?s-b.length:1/0)),u+=v,n=x+b,("<"===a?u+n+k:">"===a?k+u+n:"^"===a?k.substring(0,S>>=1)+u+n+k.substring(S):u+(M?n:k+n))+e}}}function Fn(n){return n+""}function Hn(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function On(n,t,e){function r(t){var e=n(t),r=i(e,1);return r-t>t-e?e:r}function u(e){return t(e=n(new go(e-1)),1),e}function i(n,e){return t(n=new go(+n),e),n}function a(n,r,i){var a=u(n),o=[];if(i>1)for(;r>a;)e(a)%i||o.push(new Date(+a)),t(a,1);else for(;r>a;)o.push(new Date(+a)),t(a,1);return o}function o(n,t,e){try{go=Hn;var r=new Hn;return r._=n,a(r,t,e)}finally{go=Date}}n.floor=n,n.round=r,n.ceil=u,n.offset=i,n.range=a;var l=n.utc=In(n);return l.floor=l,l.round=In(r),l.ceil=In(u),l.offset=In(i),l.range=o,n}function In(n){return function(t,e){try{go=Hn;var r=new Hn;return r._=t,n(r,e)._}finally{go=Date}}}function Yn(n){function t(n){function t(t){for(var e,u,i,a=[],o=-1,l=0;++o<r;)37===n.charCodeAt(o)&&(a.push(n.slice(l,o)),null!=(u=vo[e=n.charAt(++o)])&&(e=n.charAt(++o)),(i=A[e])&&(e=i(t,null==u?"e"===e?" ":"0":u)),a.push(e),l=o+1);return a.push(n.slice(l,o)),a.join("")}var r=n.length;return t.parse=function(t){var r={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},u=e(r,n,t,0);if(u!=t.length)return null;"p"in r&&(r.H=r.H%12+12*r.p);var i=null!=r.Z&&go!==Hn,a=new(i?Hn:go);return"j"in r?a.setFullYear(r.y,0,r.j):"W"in r||"U"in r?("w"in r||(r.w="W"in r?1:0),a.setFullYear(r.y,0,1),a.setFullYear(r.y,0,"W"in r?(r.w+6)%7+7*r.W-(a.getDay()+5)%7:r.w+7*r.U-(a.getDay()+6)%7)):a.setFullYear(r.y,r.m,r.d),a.setHours(r.H+(r.Z/100|0),r.M+r.Z%100,r.S,r.L),i?a._:a},t.toString=function(){return n},t}function e(n,t,e,r){for(var u,i,a,o=0,l=t.length,c=e.length;l>o;){if(r>=c)return-1;if(u=t.charCodeAt(o++),37===u){if(a=t.charAt(o++),i=C[a in vo?t.charAt(o++):a],!i||(r=i(n,e,r))<0)return-1}else if(u!=e.charCodeAt(r++))return-1}return r}function r(n,t,e){_.lastIndex=0;var r=_.exec(t.slice(e));return r?(n.w=w.get(r[0].toLowerCase()),e+r[0].length):-1}function u(n,t,e){x.lastIndex=0;var r=x.exec(t.slice(e));return r?(n.w=b.get(r[0].toLowerCase()),e+r[0].length):-1}function i(n,t,e){N.lastIndex=0;var r=N.exec(t.slice(e));return r?(n.m=E.get(r[0].toLowerCase()),e+r[0].length):-1}function a(n,t,e){S.lastIndex=0;var r=S.exec(t.slice(e));return r?(n.m=k.get(r[0].toLowerCase()),e+r[0].length):-1}function o(n,t,r){return e(n,A.c.toString(),t,r)}function l(n,t,r){return e(n,A.x.toString(),t,r)}function c(n,t,r){return e(n,A.X.toString(),t,r)}function s(n,t,e){var r=M.get(t.slice(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}var f=n.dateTime,h=n.date,g=n.time,p=n.periods,v=n.days,d=n.shortDays,m=n.months,y=n.shortMonths;t.utc=function(n){function e(n){try{go=Hn;var t=new go;return t._=n,r(t)}finally{go=Date}}var r=t(n);return e.parse=function(n){try{go=Hn;var t=r.parse(n);return t&&t._}finally{go=Date}},e.toString=r.toString,e},t.multi=t.utc.multi=ct;var M=oa.map(),x=Vn(v),b=Xn(v),_=Vn(d),w=Xn(d),S=Vn(m),k=Xn(m),N=Vn(y),E=Xn(y);p.forEach(function(n,t){M.set(n.toLowerCase(),t)});var A={a:function(n){return d[n.getDay()]},A:function(n){return v[n.getDay()]},b:function(n){return y[n.getMonth()]},B:function(n){return m[n.getMonth()]},c:t(f),d:function(n,t){return Zn(n.getDate(),t,2)},e:function(n,t){return Zn(n.getDate(),t,2)},H:function(n,t){return Zn(n.getHours(),t,2)},I:function(n,t){return Zn(n.getHours()%12||12,t,2)},j:function(n,t){return Zn(1+ho.dayOfYear(n),t,3)},L:function(n,t){return Zn(n.getMilliseconds(),t,3)},m:function(n,t){return Zn(n.getMonth()+1,t,2)},M:function(n,t){return Zn(n.getMinutes(),t,2)},p:function(n){return p[+(n.getHours()>=12)]},S:function(n,t){return Zn(n.getSeconds(),t,2)},U:function(n,t){return Zn(ho.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return Zn(ho.mondayOfYear(n),t,2)},x:t(h),X:t(g),y:function(n,t){return Zn(n.getFullYear()%100,t,2)},Y:function(n,t){return Zn(n.getFullYear()%1e4,t,4)},Z:ot,"%":function(){return"%"}},C={a:r,A:u,b:i,B:a,c:o,d:tt,e:tt,H:rt,I:rt,j:et,L:at,m:nt,M:ut,p:s,S:it,U:Bn,w:$n,W:Wn,x:l,X:c,y:Gn,Y:Jn,Z:Kn,"%":lt};return t}function Zn(n,t,e){var r=0>n?"-":"",u=(r?-n:n)+"",i=u.length;return r+(e>i?new Array(e-i+1).join(t)+u:u)}function Vn(n){return new RegExp("^(?:"+n.map(oa.requote).join("|")+")","i")}function Xn(n){for(var t=new c,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function $n(n,t,e){mo.lastIndex=0;var r=mo.exec(t.slice(e,e+1));return r?(n.w=+r[0],e+r[0].length):-1}function Bn(n,t,e){mo.lastIndex=0;var r=mo.exec(t.slice(e));return r?(n.U=+r[0],e+r[0].length):-1}function Wn(n,t,e){mo.lastIndex=0;var r=mo.exec(t.slice(e));return r?(n.W=+r[0],e+r[0].length):-1}function Jn(n,t,e){mo.lastIndex=0;var r=mo.exec(t.slice(e,e+4));return r?(n.y=+r[0],e+r[0].length):-1}function Gn(n,t,e){mo.lastIndex=0;var r=mo.exec(t.slice(e,e+2));return r?(n.y=Qn(+r[0]),e+r[0].length):-1}function Kn(n,t,e){return/^[+-]\d{4}$/.test(t=t.slice(e,e+5))?(n.Z=-t,e+5):-1}function Qn(n){return n+(n>68?1900:2e3)}function nt(n,t,e){mo.lastIndex=0;var r=mo.exec(t.slice(e,e+2));return r?(n.m=r[0]-1,e+r[0].length):-1}function tt(n,t,e){mo.lastIndex=0;var r=mo.exec(t.slice(e,e+2));return r?(n.d=+r[0],e+r[0].length):-1}function et(n,t,e){mo.lastIndex=0;var r=mo.exec(t.slice(e,e+3));return r?(n.j=+r[0],e+r[0].length):-1}function rt(n,t,e){mo.lastIndex=0;var r=mo.exec(t.slice(e,e+2));return r?(n.H=+r[0],e+r[0].length):-1}function ut(n,t,e){mo.lastIndex=0;var r=mo.exec(t.slice(e,e+2));return r?(n.M=+r[0],e+r[0].length):-1}function it(n,t,e){mo.lastIndex=0;var r=mo.exec(t.slice(e,e+2));return r?(n.S=+r[0],e+r[0].length):-1}function at(n,t,e){mo.lastIndex=0;var r=mo.exec(t.slice(e,e+3));return r?(n.L=+r[0],e+r[0].length):-1}function ot(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=Ma(t)/60|0,u=Ma(t)%60;return e+Zn(r,"0",2)+Zn(u,"0",2)}function lt(n,t,e){yo.lastIndex=0;var r=yo.exec(t.slice(e,e+1));return r?e+r[0].length:-1}function ct(n){for(var t=n.length,e=-1;++e<t;)n[e][0]=this(n[e][0]);return function(t){for(var e=0,r=n[e];!r[1](t);)r=n[++e];return r[0](t)}}function st(){}function ft(n,t,e){var r=e.s=n+t,u=r-n,i=r-u;e.t=n-i+(t-u)}function ht(n,t){n&&_o.hasOwnProperty(n.type)&&_o[n.type](n,t)}function gt(n,t,e){var r,u=-1,i=n.length-e;for(t.lineStart();++u<i;)r=n[u],t.point(r[0],r[1],r[2]);t.lineEnd()}function pt(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)gt(n[e],t,1);t.polygonEnd()}function vt(){function n(n,t){n*=Oa,t=t*Oa/2+ja/4;var e=n-r,a=e>=0?1:-1,o=a*e,l=Math.cos(t),c=Math.sin(t),s=i*c,f=u*l+s*Math.cos(o),h=s*a*Math.sin(o);So.add(Math.atan2(h,f)),r=n,u=l,i=c}var t,e,r,u,i;ko.point=function(a,o){ko.point=n,r=(t=a)*Oa,u=Math.cos(o=(e=o)*Oa/2+ja/4),i=Math.sin(o)},ko.lineEnd=function(){n(t,e)}}function dt(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function mt(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function yt(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function Mt(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function xt(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function bt(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function _t(n){return[Math.atan2(n[1],n[0]),tn(n[2])]}function wt(n,t){return Ma(n[0]-t[0])<Da&&Ma(n[1]-t[1])<Da}function St(n,t){n*=Oa;var e=Math.cos(t*=Oa);kt(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function kt(n,t,e){++No,Ao+=(n-Ao)/No,Co+=(t-Co)/No,zo+=(e-zo)/No}function Nt(){function n(n,u){n*=Oa;var i=Math.cos(u*=Oa),a=i*Math.cos(n),o=i*Math.sin(n),l=Math.sin(u),c=Math.atan2(Math.sqrt((c=e*l-r*o)*c+(c=r*a-t*l)*c+(c=t*o-e*a)*c),t*a+e*o+r*l);Eo+=c,Lo+=c*(t+(t=a)),qo+=c*(e+(e=o)),To+=c*(r+(r=l)),kt(t,e,r)}var t,e,r;jo.point=function(u,i){u*=Oa;var a=Math.cos(i*=Oa);t=a*Math.cos(u),e=a*Math.sin(u),r=Math.sin(i),jo.point=n,kt(t,e,r)}}function Et(){jo.point=St}function At(){function n(n,t){n*=Oa;var e=Math.cos(t*=Oa),a=e*Math.cos(n),o=e*Math.sin(n),l=Math.sin(t),c=u*l-i*o,s=i*a-r*l,f=r*o-u*a,h=Math.sqrt(c*c+s*s+f*f),g=r*a+u*o+i*l,p=h&&-nn(g)/h,v=Math.atan2(h,g);Ro+=p*c,Do+=p*s,Po+=p*f,Eo+=v,Lo+=v*(r+(r=a)),qo+=v*(u+(u=o)),To+=v*(i+(i=l)),kt(r,u,i)}var t,e,r,u,i;jo.point=function(a,o){t=a,e=o,jo.point=n,a*=Oa;var l=Math.cos(o*=Oa);r=l*Math.cos(a),u=l*Math.sin(a),i=Math.sin(o),kt(r,u,i)},jo.lineEnd=function(){n(t,e),jo.lineEnd=Et,jo.point=St}}function Ct(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function zt(){return!0}function Lt(n,t,e,r,u){var i=[],a=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(wt(e,r)){u.lineStart();for(var o=0;t>o;++o)u.point((e=n[o])[0],e[1]);return void u.lineEnd()}var l=new Tt(e,n,null,!0),c=new Tt(e,null,l,!1);l.o=c,i.push(l),a.push(c),l=new Tt(r,n,null,!1),c=new Tt(r,null,l,!0),l.o=c,i.push(l),a.push(c)}}),a.sort(t),qt(i),qt(a),i.length){for(var o=0,l=e,c=a.length;c>o;++o)a[o].e=l=!l;for(var s,f,h=i[0];;){for(var g=h,p=!0;g.v;)if((g=g.n)===h)return;s=g.z,u.lineStart();do{if(g.v=g.o.v=!0,g.e){if(p)for(var o=0,c=s.length;c>o;++o)u.point((f=s[o])[0],f[1]);else r(g.x,g.n.x,1,u);g=g.n}else{if(p){s=g.p.z;for(var o=s.length-1;o>=0;--o)u.point((f=s[o])[0],f[1])}else r(g.x,g.p.x,-1,u);g=g.p}g=g.o,s=g.z,p=!p}while(!g.v);u.lineEnd()}}}function qt(n){if(t=n.length){for(var t,e,r=0,u=n[0];++r<t;)u.n=e=n[r],e.p=u,u=e;u.n=e=n[0],e.p=u}}function Tt(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Rt(n,t,e,r){return function(u,i){function a(t,e){var r=u(t,e);n(t=r[0],e=r[1])&&i.point(t,e)}function o(n,t){var e=u(n,t);d.point(e[0],e[1])}function l(){y.point=o,d.lineStart()}function c(){y.point=a,d.lineEnd()}function s(n,t){v.push([n,t]);var e=u(n,t);x.point(e[0],e[1])}function f(){x.lineStart(),v=[]}function h(){s(v[0][0],v[0][1]),x.lineEnd();var n,t=x.clean(),e=M.buffer(),r=e.length;if(v.pop(),p.push(v),v=null,r)if(1&t){n=e[0];var u,r=n.length-1,a=-1;if(r>0){for(b||(i.polygonStart(),b=!0),i.lineStart();++a<r;)i.point((u=n[a])[0],u[1]);i.lineEnd()}}else r>1&&2&t&&e.push(e.pop().concat(e.shift())),g.push(e.filter(Dt))}var g,p,v,d=t(i),m=u.invert(r[0],r[1]),y={point:a,lineStart:l,lineEnd:c,polygonStart:function(){y.point=s,y.lineStart=f,y.lineEnd=h,g=[],p=[]},polygonEnd:function(){y.point=a,y.lineStart=l,y.lineEnd=c,g=oa.merge(g);var n=Ot(m,p);g.length?(b||(i.polygonStart(),b=!0),Lt(g,jt,n,e,i)):n&&(b||(i.polygonStart(),b=!0),i.lineStart(),e(null,null,1,i),i.lineEnd()),b&&(i.polygonEnd(),b=!1),g=p=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}},M=Pt(),x=t(M),b=!1;return y}}function Dt(n){return n.length>1}function Pt(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:b,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function jt(n,t){return((n=n.x)[0]<0?n[1]-Ha-Da:Ha-n[1])-((t=t.x)[0]<0?t[1]-Ha-Da:Ha-t[1])}function Ut(n){var t,e=NaN,r=NaN,u=NaN;return{lineStart:function(){n.lineStart(),t=1},point:function(i,a){var o=i>0?ja:-ja,l=Ma(i-e);Ma(l-ja)<Da?(n.point(e,r=(r+a)/2>0?Ha:-Ha),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(o,r),n.point(i,r),t=0):u!==o&&l>=ja&&(Ma(e-u)<Da&&(e-=u*Da),Ma(i-o)<Da&&(i-=o*Da),r=Ft(e,r,i,a),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(o,r),t=0),n.point(e=i,r=a),u=o},lineEnd:function(){n.lineEnd(),e=r=NaN},clean:function(){return 2-t}}}function Ft(n,t,e,r){var u,i,a=Math.sin(n-e);return Ma(a)>Da?Math.atan((Math.sin(t)*(i=Math.cos(r))*Math.sin(e)-Math.sin(r)*(u=Math.cos(t))*Math.sin(n))/(u*i*a)):(t+r)/2}function Ht(n,t,e,r){var u;if(null==n)u=e*Ha,r.point(-ja,u),r.point(0,u),r.point(ja,u),r.point(ja,0),r.point(ja,-u),r.point(0,-u),r.point(-ja,-u),r.point(-ja,0),r.point(-ja,u);else if(Ma(n[0]-t[0])>Da){var i=n[0]<t[0]?ja:-ja;u=e*i/2,r.point(-i,u),r.point(0,u),r.point(i,u)}else r.point(t[0],t[1])}function Ot(n,t){var e=n[0],r=n[1],u=[Math.sin(e),-Math.cos(e),0],i=0,a=0;So.reset();for(var o=0,l=t.length;l>o;++o){var c=t[o],s=c.length;if(s)for(var f=c[0],h=f[0],g=f[1]/2+ja/4,p=Math.sin(g),v=Math.cos(g),d=1;;){d===s&&(d=0),n=c[d];var m=n[0],y=n[1]/2+ja/4,M=Math.sin(y),x=Math.cos(y),b=m-h,_=b>=0?1:-1,w=_*b,S=w>ja,k=p*M;if(So.add(Math.atan2(k*_*Math.sin(w),v*x+k*Math.cos(w))),i+=S?b+_*Ua:b,S^h>=e^m>=e){var N=yt(dt(f),dt(n));bt(N);var E=yt(u,N);bt(E);var A=(S^b>=0?-1:1)*tn(E[2]);(r>A||r===A&&(N[0]||N[1]))&&(a+=S^b>=0?1:-1)}if(!d++)break;h=m,p=M,v=x,f=n}}return(-Da>i||Da>i&&0>So)^1&a}function It(n){function t(n,t){return Math.cos(n)*Math.cos(t)>i}function e(n){var e,i,l,c,s;return{lineStart:function(){c=l=!1,s=1},point:function(f,h){var g,p=[f,h],v=t(f,h),d=a?v?0:u(f,h):v?u(f+(0>f?ja:-ja),h):0;if(!e&&(c=l=v)&&n.lineStart(),v!==l&&(g=r(e,p),(wt(e,g)||wt(p,g))&&(p[0]+=Da,p[1]+=Da,v=t(p[0],p[1]))),v!==l)s=0,v?(n.lineStart(),g=r(p,e),n.point(g[0],g[1])):(g=r(e,p),n.point(g[0],g[1]),n.lineEnd()),e=g;else if(o&&e&&a^v){var m;d&i||!(m=r(p,e,!0))||(s=0,a?(n.lineStart(),n.point(m[0][0],m[0][1]),n.point(m[1][0],m[1][1]),n.lineEnd()):(n.point(m[1][0],m[1][1]),n.lineEnd(),n.lineStart(),n.point(m[0][0],m[0][1])))}!v||e&&wt(e,p)||n.point(p[0],p[1]),e=p,l=v,i=d},lineEnd:function(){l&&n.lineEnd(),e=null},clean:function(){return s|(c&&l)<<1}}}function r(n,t,e){var r=dt(n),u=dt(t),a=[1,0,0],o=yt(r,u),l=mt(o,o),c=o[0],s=l-c*c;if(!s)return!e&&n;var f=i*l/s,h=-i*c/s,g=yt(a,o),p=xt(a,f),v=xt(o,h);Mt(p,v);var d=g,m=mt(p,d),y=mt(d,d),M=m*m-y*(mt(p,p)-1);if(!(0>M)){var x=Math.sqrt(M),b=xt(d,(-m-x)/y);if(Mt(b,p),b=_t(b),!e)return b;var _,w=n[0],S=t[0],k=n[1],N=t[1];w>S&&(_=w,w=S,S=_);var E=S-w,A=Ma(E-ja)<Da,C=A||Da>E;if(!A&&k>N&&(_=k,k=N,N=_),C?A?k+N>0^b[1]<(Ma(b[0]-w)<Da?k:N):k<=b[1]&&b[1]<=N:E>ja^(w<=b[0]&&b[0]<=S)){var z=xt(d,(-m+x)/y);return Mt(z,p),[b,_t(z)]}}}function u(t,e){var r=a?n:ja-n,u=0;return-r>t?u|=1:t>r&&(u|=2),-r>e?u|=4:e>r&&(u|=8),u}var i=Math.cos(n),a=i>0,o=Ma(i)>Da,l=ve(n,6*Oa);return Rt(t,e,l,a?[0,-n]:[-ja,n-ja])}function Yt(n,t,e,r){return function(u){var i,a=u.a,o=u.b,l=a.x,c=a.y,s=o.x,f=o.y,h=0,g=1,p=s-l,v=f-c;if(i=n-l,p||!(i>0)){if(i/=p,0>p){if(h>i)return;g>i&&(g=i)}else if(p>0){if(i>g)return;i>h&&(h=i)}if(i=e-l,p||!(0>i)){if(i/=p,0>p){if(i>g)return;i>h&&(h=i)}else if(p>0){if(h>i)return;g>i&&(g=i)}if(i=t-c,v||!(i>0)){if(i/=v,0>v){if(h>i)return;g>i&&(g=i)}else if(v>0){if(i>g)return;i>h&&(h=i)}if(i=r-c,v||!(0>i)){if(i/=v,0>v){if(i>g)return;i>h&&(h=i)}else if(v>0){if(h>i)return;g>i&&(g=i)}return h>0&&(u.a={x:l+h*p,y:c+h*v}),1>g&&(u.b={x:l+g*p,y:c+g*v}),u}}}}}}function Zt(n,t,e,r){function u(r,u){return Ma(r[0]-n)<Da?u>0?0:3:Ma(r[0]-e)<Da?u>0?2:1:Ma(r[1]-t)<Da?u>0?1:0:u>0?3:2}function i(n,t){return a(n.x,t.x)}function a(n,t){var e=u(n,1),r=u(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}return function(o){function l(n){for(var t=0,e=d.length,r=n[1],u=0;e>u;++u)for(var i,a=1,o=d[u],l=o.length,c=o[0];l>a;++a)i=o[a],c[1]<=r?i[1]>r&&Q(c,i,n)>0&&++t:i[1]<=r&&Q(c,i,n)<0&&--t,c=i;return 0!==t}function c(i,o,l,c){var s=0,f=0;if(null==i||(s=u(i,l))!==(f=u(o,l))||a(i,o)<0^l>0){do c.point(0===s||3===s?n:e,s>1?r:t);while((s=(s+l+4)%4)!==f)}else c.point(o[0],o[1])}function s(u,i){return u>=n&&e>=u&&i>=t&&r>=i}function f(n,t){s(n,t)&&o.point(n,t)}function h(){C.point=p,d&&d.push(m=[]),S=!0,w=!1,b=_=NaN}function g(){v&&(p(y,M),x&&w&&E.rejoin(),v.push(E.buffer())),C.point=f,w&&o.lineEnd()}function p(n,t){n=Math.max(-Fo,Math.min(Fo,n)),t=Math.max(-Fo,Math.min(Fo,t));var e=s(n,t);if(d&&m.push([n,t]),S)y=n,M=t,x=e,S=!1,e&&(o.lineStart(),o.point(n,t));else if(e&&w)o.point(n,t);else{var r={a:{x:b,y:_},b:{x:n,y:t}};A(r)?(w||(o.lineStart(),o.point(r.a.x,r.a.y)),o.point(r.b.x,r.b.y),e||o.lineEnd(),k=!1):e&&(o.lineStart(),o.point(n,t),k=!1)}b=n,_=t,w=e}var v,d,m,y,M,x,b,_,w,S,k,N=o,E=Pt(),A=Yt(n,t,e,r),C={point:f,lineStart:h,lineEnd:g,polygonStart:function(){o=E,v=[],d=[],k=!0},polygonEnd:function(){o=N,v=oa.merge(v);var t=l([n,r]),e=k&&t,u=v.length;(e||u)&&(o.polygonStart(),e&&(o.lineStart(),c(null,null,1,o),o.lineEnd()),u&&Lt(v,i,t,c,o),o.polygonEnd()),v=d=m=null}};return C}}function Vt(n){var t=0,e=ja/3,r=oe(n),u=r(t,e);return u.parallels=function(n){return arguments.length?r(t=n[0]*ja/180,e=n[1]*ja/180):[t/ja*180,e/ja*180]},u}function Xt(n,t){function e(n,t){var e=Math.sqrt(i-2*u*Math.sin(t))/u;return[e*Math.sin(n*=u),a-e*Math.cos(n)]}var r=Math.sin(n),u=(r+Math.sin(t))/2,i=1+r*(2*u-r),a=Math.sqrt(i)/u;return e.invert=function(n,t){var e=a-t;return[Math.atan2(n,e)/u,tn((i-(n*n+e*e)*u*u)/(2*u))]},e}function $t(){function n(n,t){Oo+=u*n-r*t,r=n,u=t}var t,e,r,u;Xo.point=function(i,a){Xo.point=n,t=r=i,e=u=a},Xo.lineEnd=function(){n(t,e)}}function Bt(n,t){Io>n&&(Io=n),n>Zo&&(Zo=n),Yo>t&&(Yo=t),t>Vo&&(Vo=t)}function Wt(){function n(n,t){a.push("M",n,",",t,i)}function t(n,t){a.push("M",n,",",t),o.point=e}function e(n,t){a.push("L",n,",",t)}function r(){o.point=n}function u(){a.push("Z")}var i=Jt(4.5),a=[],o={point:n,lineStart:function(){o.point=t},lineEnd:r,polygonStart:function(){o.lineEnd=u},polygonEnd:function(){o.lineEnd=r,o.point=n},pointRadius:function(n){return i=Jt(n),o},result:function(){if(a.length){var n=a.join("");return a=[],n}}};return o}function Jt(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function Gt(n,t){Ao+=n,Co+=t,++zo}function Kt(){function n(n,r){var u=n-t,i=r-e,a=Math.sqrt(u*u+i*i);Lo+=a*(t+n)/2,qo+=a*(e+r)/2,To+=a,Gt(t=n,e=r)}var t,e;Bo.point=function(r,u){Bo.point=n,Gt(t=r,e=u)}}function Qt(){Bo.point=Gt}function ne(){function n(n,t){var e=n-r,i=t-u,a=Math.sqrt(e*e+i*i);Lo+=a*(r+n)/2,qo+=a*(u+t)/2,To+=a,a=u*n-r*t,Ro+=a*(r+n),Do+=a*(u+t),Po+=3*a,Gt(r=n,u=t)}var t,e,r,u;Bo.point=function(i,a){Bo.point=n,Gt(t=r=i,e=u=a)},Bo.lineEnd=function(){n(t,e)}}function te(n){function t(t,e){n.moveTo(t+a,e),n.arc(t,e,a,0,Ua)}function e(t,e){n.moveTo(t,e),o.point=r}function r(t,e){n.lineTo(t,e)}function u(){o.point=t}function i(){n.closePath()}var a=4.5,o={point:t,lineStart:function(){o.point=e},lineEnd:u,polygonStart:function(){o.lineEnd=i},polygonEnd:function(){o.lineEnd=u,o.point=t},pointRadius:function(n){return a=n,o},result:b};return o}function ee(n){function t(n){return(o?r:e)(n)}function e(t){return ie(t,function(e,r){e=n(e,r),t.point(e[0],e[1])})}function r(t){function e(e,r){e=n(e,r),t.point(e[0],e[1])}function r(){M=NaN,S.point=i,t.lineStart()}function i(e,r){var i=dt([e,r]),a=n(e,r);u(M,x,y,b,_,w,M=a[0],x=a[1],y=e,b=i[0],_=i[1],w=i[2],o,t),t.point(M,x)}function a(){S.point=e,t.lineEnd()}function l(){r(),S.point=c,S.lineEnd=s}function c(n,t){
i(f=n,h=t),g=M,p=x,v=b,d=_,m=w,S.point=i}function s(){u(M,x,y,b,_,w,g,p,f,v,d,m,o,t),S.lineEnd=a,a()}var f,h,g,p,v,d,m,y,M,x,b,_,w,S={point:e,lineStart:r,lineEnd:a,polygonStart:function(){t.polygonStart(),S.lineStart=l},polygonEnd:function(){t.polygonEnd(),S.lineStart=r}};return S}function u(t,e,r,o,l,c,s,f,h,g,p,v,d,m){var y=s-t,M=f-e,x=y*y+M*M;if(x>4*i&&d--){var b=o+g,_=l+p,w=c+v,S=Math.sqrt(b*b+_*_+w*w),k=Math.asin(w/=S),N=Ma(Ma(w)-1)<Da||Ma(r-h)<Da?(r+h)/2:Math.atan2(_,b),E=n(N,k),A=E[0],C=E[1],z=A-t,L=C-e,q=M*z-y*L;(q*q/x>i||Ma((y*z+M*L)/x-.5)>.3||a>o*g+l*p+c*v)&&(u(t,e,r,o,l,c,A,C,N,b/=S,_/=S,w,d,m),m.point(A,C),u(A,C,N,b,_,w,s,f,h,g,p,v,d,m))}}var i=.5,a=Math.cos(30*Oa),o=16;return t.precision=function(n){return arguments.length?(o=(i=n*n)>0&&16,t):Math.sqrt(i)},t}function re(n){var t=ee(function(t,e){return n([t*Ia,e*Ia])});return function(n){return le(t(n))}}function ue(n){this.stream=n}function ie(n,t){return{point:t,sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}function ae(n){return oe(function(){return n})()}function oe(n){function t(n){return n=o(n[0]*Oa,n[1]*Oa),[n[0]*h+l,c-n[1]*h]}function e(n){return n=o.invert((n[0]-l)/h,(c-n[1])/h),n&&[n[0]*Ia,n[1]*Ia]}function r(){o=Ct(a=fe(m,M,x),i);var n=i(v,d);return l=g-n[0]*h,c=p+n[1]*h,u()}function u(){return s&&(s.valid=!1,s=null),t}var i,a,o,l,c,s,f=ee(function(n,t){return n=i(n,t),[n[0]*h+l,c-n[1]*h]}),h=150,g=480,p=250,v=0,d=0,m=0,M=0,x=0,b=Uo,_=y,w=null,S=null;return t.stream=function(n){return s&&(s.valid=!1),s=le(b(a,f(_(n)))),s.valid=!0,s},t.clipAngle=function(n){return arguments.length?(b=null==n?(w=n,Uo):It((w=+n)*Oa),u()):w},t.clipExtent=function(n){return arguments.length?(S=n,_=n?Zt(n[0][0],n[0][1],n[1][0],n[1][1]):y,u()):S},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(g=+n[0],p=+n[1],r()):[g,p]},t.center=function(n){return arguments.length?(v=n[0]%360*Oa,d=n[1]%360*Oa,r()):[v*Ia,d*Ia]},t.rotate=function(n){return arguments.length?(m=n[0]%360*Oa,M=n[1]%360*Oa,x=n.length>2?n[2]%360*Oa:0,r()):[m*Ia,M*Ia,x*Ia]},oa.rebind(t,f,"precision"),function(){return i=n.apply(this,arguments),t.invert=i.invert&&e,r()}}function le(n){return ie(n,function(t,e){n.point(t*Oa,e*Oa)})}function ce(n,t){return[n,t]}function se(n,t){return[n>ja?n-Ua:-ja>n?n+Ua:n,t]}function fe(n,t,e){return n?t||e?Ct(ge(n),pe(t,e)):ge(n):t||e?pe(t,e):se}function he(n){return function(t,e){return t+=n,[t>ja?t-Ua:-ja>t?t+Ua:t,e]}}function ge(n){var t=he(n);return t.invert=he(-n),t}function pe(n,t){function e(n,t){var e=Math.cos(t),o=Math.cos(n)*e,l=Math.sin(n)*e,c=Math.sin(t),s=c*r+o*u;return[Math.atan2(l*i-s*a,o*r-c*u),tn(s*i+l*a)]}var r=Math.cos(n),u=Math.sin(n),i=Math.cos(t),a=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),o=Math.cos(n)*e,l=Math.sin(n)*e,c=Math.sin(t),s=c*i-l*a;return[Math.atan2(l*i+c*a,o*r+s*u),tn(s*r-o*u)]},e}function ve(n,t){var e=Math.cos(n),r=Math.sin(n);return function(u,i,a,o){var l=a*t;null!=u?(u=de(e,u),i=de(e,i),(a>0?i>u:u>i)&&(u+=a*Ua)):(u=n+a*Ua,i=n-.5*l);for(var c,s=u;a>0?s>i:i>s;s-=l)o.point((c=_t([e,-r*Math.cos(s),-r*Math.sin(s)]))[0],c[1])}}function de(n,t){var e=dt(t);e[0]-=n,bt(e);var r=nn(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-Da)%(2*Math.PI)}function me(n,t,e){var r=oa.range(n,t-Da,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function ye(n,t,e){var r=oa.range(n,t-Da,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function Me(n){return n.source}function xe(n){return n.target}function be(n,t,e,r){var u=Math.cos(t),i=Math.sin(t),a=Math.cos(r),o=Math.sin(r),l=u*Math.cos(n),c=u*Math.sin(n),s=a*Math.cos(e),f=a*Math.sin(e),h=2*Math.asin(Math.sqrt(an(r-t)+u*a*an(e-n))),g=1/Math.sin(h),p=h?function(n){var t=Math.sin(n*=h)*g,e=Math.sin(h-n)*g,r=e*l+t*s,u=e*c+t*f,a=e*i+t*o;return[Math.atan2(u,r)*Ia,Math.atan2(a,Math.sqrt(r*r+u*u))*Ia]}:function(){return[n*Ia,t*Ia]};return p.distance=h,p}function _e(){function n(n,u){var i=Math.sin(u*=Oa),a=Math.cos(u),o=Ma((n*=Oa)-t),l=Math.cos(o);Wo+=Math.atan2(Math.sqrt((o=a*Math.sin(o))*o+(o=r*i-e*a*l)*o),e*i+r*a*l),t=n,e=i,r=a}var t,e,r;Jo.point=function(u,i){t=u*Oa,e=Math.sin(i*=Oa),r=Math.cos(i),Jo.point=n},Jo.lineEnd=function(){Jo.point=Jo.lineEnd=b}}function we(n,t){function e(t,e){var r=Math.cos(t),u=Math.cos(e),i=n(r*u);return[i*u*Math.sin(t),i*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),u=t(r),i=Math.sin(u),a=Math.cos(u);return[Math.atan2(n*i,r*a),Math.asin(r&&e*i/r)]},e}function Se(n,t){function e(n,t){a>0?-Ha+Da>t&&(t=-Ha+Da):t>Ha-Da&&(t=Ha-Da);var e=a/Math.pow(u(t),i);return[e*Math.sin(i*n),a-e*Math.cos(i*n)]}var r=Math.cos(n),u=function(n){return Math.tan(ja/4+n/2)},i=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(u(t)/u(n)),a=r*Math.pow(u(n),i)/i;return i?(e.invert=function(n,t){var e=a-t,r=K(i)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/i,2*Math.atan(Math.pow(a/r,1/i))-Ha]},e):Ne}function ke(n,t){function e(n,t){var e=i-t;return[e*Math.sin(u*n),i-e*Math.cos(u*n)]}var r=Math.cos(n),u=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),i=r/u+n;return Ma(u)<Da?ce:(e.invert=function(n,t){var e=i-t;return[Math.atan2(n,e)/u,i-K(u)*Math.sqrt(n*n+e*e)]},e)}function Ne(n,t){return[n,Math.log(Math.tan(ja/4+t/2))]}function Ee(n){var t,e=ae(n),r=e.scale,u=e.translate,i=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=u.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var a=i.apply(e,arguments);if(a===e){if(t=null==n){var o=ja*r(),l=u();i([[l[0]-o,l[1]-o],[l[0]+o,l[1]+o]])}}else t&&(a=null);return a},e.clipExtent(null)}function Ae(n,t){return[Math.log(Math.tan(ja/4+t/2)),-n]}function Ce(n){return n[0]}function ze(n){return n[1]}function Le(n){for(var t=n.length,e=[0,1],r=2,u=2;t>u;u++){for(;r>1&&Q(n[e[r-2]],n[e[r-1]],n[u])<=0;)--r;e[r++]=u}return e.slice(0,r)}function qe(n,t){return n[0]-t[0]||n[1]-t[1]}function Te(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function Re(n,t,e,r){var u=n[0],i=e[0],a=t[0]-u,o=r[0]-i,l=n[1],c=e[1],s=t[1]-l,f=r[1]-c,h=(o*(l-c)-f*(u-i))/(f*a-o*s);return[u+h*a,l+h*s]}function De(n){var t=n[0],e=n[n.length-1];return!(t[0]-e[0]||t[1]-e[1])}function Pe(){rr(this),this.edge=this.site=this.circle=null}function je(n){var t=ll.pop()||new Pe;return t.site=n,t}function Ue(n){Be(n),il.remove(n),ll.push(n),rr(n)}function Fe(n){var t=n.circle,e=t.x,r=t.cy,u={x:e,y:r},i=n.P,a=n.N,o=[n];Ue(n);for(var l=i;l.circle&&Ma(e-l.circle.x)<Da&&Ma(r-l.circle.cy)<Da;)i=l.P,o.unshift(l),Ue(l),l=i;o.unshift(l),Be(l);for(var c=a;c.circle&&Ma(e-c.circle.x)<Da&&Ma(r-c.circle.cy)<Da;)a=c.N,o.push(c),Ue(c),c=a;o.push(c),Be(c);var s,f=o.length;for(s=1;f>s;++s)c=o[s],l=o[s-1],nr(c.edge,l.site,c.site,u);l=o[0],c=o[f-1],c.edge=Ke(l.site,c.site,null,u),$e(l),$e(c)}function He(n){for(var t,e,r,u,i=n.x,a=n.y,o=il._;o;)if(r=Oe(o,a)-i,r>Da)o=o.L;else{if(u=i-Ie(o,a),!(u>Da)){r>-Da?(t=o.P,e=o):u>-Da?(t=o,e=o.N):t=e=o;break}if(!o.R){t=o;break}o=o.R}var l=je(n);if(il.insert(t,l),t||e){if(t===e)return Be(t),e=je(t.site),il.insert(l,e),l.edge=e.edge=Ke(t.site,l.site),$e(t),void $e(e);if(!e)return void(l.edge=Ke(t.site,l.site));Be(t),Be(e);var c=t.site,s=c.x,f=c.y,h=n.x-s,g=n.y-f,p=e.site,v=p.x-s,d=p.y-f,m=2*(h*d-g*v),y=h*h+g*g,M=v*v+d*d,x={x:(d*y-g*M)/m+s,y:(h*M-v*y)/m+f};nr(e.edge,c,p,x),l.edge=Ke(c,n,null,x),e.edge=Ke(n,p,null,x),$e(t),$e(e)}}function Oe(n,t){var e=n.site,r=e.x,u=e.y,i=u-t;if(!i)return r;var a=n.P;if(!a)return-(1/0);e=a.site;var o=e.x,l=e.y,c=l-t;if(!c)return o;var s=o-r,f=1/i-1/c,h=s/c;return f?(-h+Math.sqrt(h*h-2*f*(s*s/(-2*c)-l+c/2+u-i/2)))/f+r:(r+o)/2}function Ie(n,t){var e=n.N;if(e)return Oe(e,t);var r=n.site;return r.y===t?r.x:1/0}function Ye(n){this.site=n,this.edges=[]}function Ze(n){for(var t,e,r,u,i,a,o,l,c,s,f=n[0][0],h=n[1][0],g=n[0][1],p=n[1][1],v=ul,d=v.length;d--;)if(i=v[d],i&&i.prepare())for(o=i.edges,l=o.length,a=0;l>a;)s=o[a].end(),r=s.x,u=s.y,c=o[++a%l].start(),t=c.x,e=c.y,(Ma(r-t)>Da||Ma(u-e)>Da)&&(o.splice(a,0,new tr(Qe(i.site,s,Ma(r-f)<Da&&p-u>Da?{x:f,y:Ma(t-f)<Da?e:p}:Ma(u-p)<Da&&h-r>Da?{x:Ma(e-p)<Da?t:h,y:p}:Ma(r-h)<Da&&u-g>Da?{x:h,y:Ma(t-h)<Da?e:g}:Ma(u-g)<Da&&r-f>Da?{x:Ma(e-g)<Da?t:f,y:g}:null),i.site,null)),++l)}function Ve(n,t){return t.angle-n.angle}function Xe(){rr(this),this.x=this.y=this.arc=this.site=this.cy=null}function $e(n){var t=n.P,e=n.N;if(t&&e){var r=t.site,u=n.site,i=e.site;if(r!==i){var a=u.x,o=u.y,l=r.x-a,c=r.y-o,s=i.x-a,f=i.y-o,h=2*(l*f-c*s);if(!(h>=-Pa)){var g=l*l+c*c,p=s*s+f*f,v=(f*g-c*p)/h,d=(l*p-s*g)/h,f=d+o,m=cl.pop()||new Xe;m.arc=n,m.site=u,m.x=v+a,m.y=f+Math.sqrt(v*v+d*d),m.cy=f,n.circle=m;for(var y=null,M=ol._;M;)if(m.y<M.y||m.y===M.y&&m.x<=M.x){if(!M.L){y=M.P;break}M=M.L}else{if(!M.R){y=M;break}M=M.R}ol.insert(y,m),y||(al=m)}}}}function Be(n){var t=n.circle;t&&(t.P||(al=t.N),ol.remove(t),cl.push(t),rr(t),n.circle=null)}function We(n){for(var t,e=rl,r=Yt(n[0][0],n[0][1],n[1][0],n[1][1]),u=e.length;u--;)t=e[u],(!Je(t,n)||!r(t)||Ma(t.a.x-t.b.x)<Da&&Ma(t.a.y-t.b.y)<Da)&&(t.a=t.b=null,e.splice(u,1))}function Je(n,t){var e=n.b;if(e)return!0;var r,u,i=n.a,a=t[0][0],o=t[1][0],l=t[0][1],c=t[1][1],s=n.l,f=n.r,h=s.x,g=s.y,p=f.x,v=f.y,d=(h+p)/2,m=(g+v)/2;if(v===g){if(a>d||d>=o)return;if(h>p){if(i){if(i.y>=c)return}else i={x:d,y:l};e={x:d,y:c}}else{if(i){if(i.y<l)return}else i={x:d,y:c};e={x:d,y:l}}}else if(r=(h-p)/(v-g),u=m-r*d,-1>r||r>1)if(h>p){if(i){if(i.y>=c)return}else i={x:(l-u)/r,y:l};e={x:(c-u)/r,y:c}}else{if(i){if(i.y<l)return}else i={x:(c-u)/r,y:c};e={x:(l-u)/r,y:l}}else if(v>g){if(i){if(i.x>=o)return}else i={x:a,y:r*a+u};e={x:o,y:r*o+u}}else{if(i){if(i.x<a)return}else i={x:o,y:r*o+u};e={x:a,y:r*a+u}}return n.a=i,n.b=e,!0}function Ge(n,t){this.l=n,this.r=t,this.a=this.b=null}function Ke(n,t,e,r){var u=new Ge(n,t);return rl.push(u),e&&nr(u,n,t,e),r&&nr(u,t,n,r),ul[n.i].edges.push(new tr(u,n,t)),ul[t.i].edges.push(new tr(u,t,n)),u}function Qe(n,t,e){var r=new Ge(n,null);return r.a=t,r.b=e,rl.push(r),r}function nr(n,t,e,r){n.a||n.b?n.l===e?n.b=r:n.a=r:(n.a=r,n.l=t,n.r=e)}function tr(n,t,e){var r=n.a,u=n.b;this.edge=n,this.site=t,this.angle=e?Math.atan2(e.y-t.y,e.x-t.x):n.l===t?Math.atan2(u.x-r.x,r.y-u.y):Math.atan2(r.x-u.x,u.y-r.y)}function er(){this._=null}function rr(n){n.U=n.C=n.L=n.R=n.P=n.N=null}function ur(n,t){var e=t,r=t.R,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function ir(n,t){var e=t,r=t.L,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function ar(n){for(;n.L;)n=n.L;return n}function or(n,t){var e,r,u,i=n.sort(lr).pop();for(rl=[],ul=new Array(n.length),il=new er,ol=new er;;)if(u=al,i&&(!u||i.y<u.y||i.y===u.y&&i.x<u.x))(i.x!==e||i.y!==r)&&(ul[i.i]=new Ye(i),He(i),e=i.x,r=i.y),i=n.pop();else{if(!u)break;Fe(u.arc)}t&&(We(t),Ze(t));var a={cells:ul,edges:rl};return il=ol=rl=ul=null,a}function lr(n,t){return t.y-n.y||t.x-n.x}function cr(n,t,e){return(n.x-e.x)*(t.y-n.y)-(n.x-t.x)*(e.y-n.y)}function sr(n){return n.x}function fr(n){return n.y}function hr(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function gr(n,t,e,r,u,i){if(!n(t,e,r,u,i)){var a=.5*(e+u),o=.5*(r+i),l=t.nodes;l[0]&&gr(n,l[0],e,r,a,o),l[1]&&gr(n,l[1],a,r,u,o),l[2]&&gr(n,l[2],e,o,a,i),l[3]&&gr(n,l[3],a,o,u,i)}}function pr(n,t,e,r,u,i,a){var o,l=1/0;return function c(n,s,f,h,g){if(!(s>i||f>a||r>h||u>g)){if(p=n.point){var p,v=t-n.x,d=e-n.y,m=v*v+d*d;if(l>m){var y=Math.sqrt(l=m);r=t-y,u=e-y,i=t+y,a=e+y,o=p}}for(var M=n.nodes,x=.5*(s+h),b=.5*(f+g),_=t>=x,w=e>=b,S=w<<1|_,k=S+4;k>S;++S)if(n=M[3&S])switch(3&S){case 0:c(n,s,f,x,b);break;case 1:c(n,x,f,h,b);break;case 2:c(n,s,b,x,g);break;case 3:c(n,x,b,h,g)}}}(n,r,u,i,a),o}function vr(n,t){n=oa.rgb(n),t=oa.rgb(t);var e=n.r,r=n.g,u=n.b,i=t.r-e,a=t.g-r,o=t.b-u;return function(n){return"#"+bn(Math.round(e+i*n))+bn(Math.round(r+a*n))+bn(Math.round(u+o*n))}}function dr(n,t){var e,r={},u={};for(e in n)e in t?r[e]=Mr(n[e],t[e]):u[e]=n[e];for(e in t)e in n||(u[e]=t[e]);return function(n){for(e in r)u[e]=r[e](n);return u}}function mr(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}function yr(n,t){var e,r,u,i=fl.lastIndex=hl.lastIndex=0,a=-1,o=[],l=[];for(n+="",t+="";(e=fl.exec(n))&&(r=hl.exec(t));)(u=r.index)>i&&(u=t.slice(i,u),o[a]?o[a]+=u:o[++a]=u),(e=e[0])===(r=r[0])?o[a]?o[a]+=r:o[++a]=r:(o[++a]=null,l.push({i:a,x:mr(e,r)})),i=hl.lastIndex;return i<t.length&&(u=t.slice(i),o[a]?o[a]+=u:o[++a]=u),o.length<2?l[0]?(t=l[0].x,function(n){return t(n)+""}):function(){return t}:(t=l.length,function(n){for(var e,r=0;t>r;++r)o[(e=l[r]).i]=e.x(n);return o.join("")})}function Mr(n,t){for(var e,r=oa.interpolators.length;--r>=0&&!(e=oa.interpolators[r](n,t)););return e}function xr(n,t){var e,r=[],u=[],i=n.length,a=t.length,o=Math.min(n.length,t.length);for(e=0;o>e;++e)r.push(Mr(n[e],t[e]));for(;i>e;++e)u[e]=n[e];for(;a>e;++e)u[e]=t[e];return function(n){for(e=0;o>e;++e)u[e]=r[e](n);return u}}function br(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function _r(n){return function(t){return 1-n(1-t)}}function wr(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function Sr(n){return n*n}function kr(n){return n*n*n}function Nr(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function Er(n){return function(t){return Math.pow(t,n)}}function Ar(n){return 1-Math.cos(n*Ha)}function Cr(n){return Math.pow(2,10*(n-1))}function zr(n){return 1-Math.sqrt(1-n*n)}function Lr(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/Ua*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,-10*r)*Math.sin((r-e)*Ua/t)}}function qr(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function Tr(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Rr(n,t){n=oa.hcl(n),t=oa.hcl(t);var e=n.h,r=n.c,u=n.l,i=t.h-e,a=t.c-r,o=t.l-u;return isNaN(a)&&(a=0,r=isNaN(r)?t.c:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return fn(e+i*n,r+a*n,u+o*n)+""}}function Dr(n,t){n=oa.hsl(n),t=oa.hsl(t);var e=n.h,r=n.s,u=n.l,i=t.h-e,a=t.s-r,o=t.l-u;return isNaN(a)&&(a=0,r=isNaN(r)?t.s:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return cn(e+i*n,r+a*n,u+o*n)+""}}function Pr(n,t){n=oa.lab(n),t=oa.lab(t);var e=n.l,r=n.a,u=n.b,i=t.l-e,a=t.a-r,o=t.b-u;return function(n){return gn(e+i*n,r+a*n,u+o*n)+""}}function jr(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function Ur(n){var t=[n.a,n.b],e=[n.c,n.d],r=Hr(t),u=Fr(t,e),i=Hr(Or(e,t,-u))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,u*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*Ia,this.translate=[n.e,n.f],this.scale=[r,i],this.skew=i?Math.atan2(u,i)*Ia:0}function Fr(n,t){return n[0]*t[0]+n[1]*t[1]}function Hr(n){var t=Math.sqrt(Fr(n,n));return t&&(n[0]/=t,n[1]/=t),t}function Or(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function Ir(n){return n.length?n.pop()+",":""}function Yr(n,t,e,r){if(n[0]!==t[0]||n[1]!==t[1]){var u=e.push("translate(",null,",",null,")");r.push({i:u-4,x:mr(n[0],t[0])},{i:u-2,x:mr(n[1],t[1])})}else(t[0]||t[1])&&e.push("translate("+t+")")}function Zr(n,t,e,r){n!==t?(n-t>180?t+=360:t-n>180&&(n+=360),r.push({i:e.push(Ir(e)+"rotate(",null,")")-2,x:mr(n,t)})):t&&e.push(Ir(e)+"rotate("+t+")")}function Vr(n,t,e,r){n!==t?r.push({i:e.push(Ir(e)+"skewX(",null,")")-2,x:mr(n,t)}):t&&e.push(Ir(e)+"skewX("+t+")")}function Xr(n,t,e,r){if(n[0]!==t[0]||n[1]!==t[1]){var u=e.push(Ir(e)+"scale(",null,",",null,")");r.push({i:u-4,x:mr(n[0],t[0])},{i:u-2,x:mr(n[1],t[1])})}else(1!==t[0]||1!==t[1])&&e.push(Ir(e)+"scale("+t+")")}function $r(n,t){var e=[],r=[];return n=oa.transform(n),t=oa.transform(t),Yr(n.translate,t.translate,e,r),Zr(n.rotate,t.rotate,e,r),Vr(n.skew,t.skew,e,r),Xr(n.scale,t.scale,e,r),n=t=null,function(n){for(var t,u=-1,i=r.length;++u<i;)e[(t=r[u]).i]=t.x(n);return e.join("")}}function Br(n,t){return t=(t-=n=+n)||1/t,function(e){return(e-n)/t}}function Wr(n,t){return t=(t-=n=+n)||1/t,function(e){return Math.max(0,Math.min(1,(e-n)/t))}}function Jr(n){for(var t=n.source,e=n.target,r=Kr(t,e),u=[t];t!==r;)t=t.parent,u.push(t);for(var i=u.length;e!==r;)u.splice(i,0,e),e=e.parent;return u}function Gr(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function Kr(n,t){if(n===t)return n;for(var e=Gr(n),r=Gr(t),u=e.pop(),i=r.pop(),a=null;u===i;)a=u,u=e.pop(),i=r.pop();return a}function Qr(n){n.fixed|=2}function nu(n){n.fixed&=-7}function tu(n){n.fixed|=4,n.px=n.x,n.py=n.y}function eu(n){n.fixed&=-5}function ru(n,t,e){var r=0,u=0;if(n.charge=0,!n.leaf)for(var i,a=n.nodes,o=a.length,l=-1;++l<o;)i=a[l],null!=i&&(ru(i,t,e),n.charge+=i.charge,r+=i.charge*i.cx,u+=i.charge*i.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var c=t*e[n.point.index];n.charge+=n.pointCharge=c,r+=c*n.point.x,u+=c*n.point.y}n.cx=r/n.charge,n.cy=u/n.charge}function uu(n,t){return oa.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=su,n}function iu(n,t){for(var e=[n];null!=(n=e.pop());)if(t(n),(u=n.children)&&(r=u.length))for(var r,u;--r>=0;)e.push(u[r])}function au(n,t){for(var e=[n],r=[];null!=(n=e.pop());)if(r.push(n),(i=n.children)&&(u=i.length))for(var u,i,a=-1;++a<u;)e.push(i[a]);for(;null!=(n=r.pop());)t(n)}function ou(n){return n.children}function lu(n){return n.value}function cu(n,t){return t.value-n.value}function su(n){return oa.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function fu(n){return n.x}function hu(n){return n.y}function gu(n,t,e){n.y0=t,n.y=e}function pu(n){return oa.range(n.length)}function vu(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function du(n){for(var t,e=1,r=0,u=n[0][1],i=n.length;i>e;++e)(t=n[e][1])>u&&(r=e,u=t);return r}function mu(n){return n.reduce(yu,0)}function yu(n,t){return n+t[1]}function Mu(n,t){return xu(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function xu(n,t){for(var e=-1,r=+n[0],u=(n[1]-r)/t,i=[];++e<=t;)i[e]=u*e+r;return i}function bu(n){return[oa.min(n),oa.max(n)]}function _u(n,t){return n.value-t.value}function wu(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function Su(n,t){n._pack_next=t,t._pack_prev=n}function ku(n,t){var e=t.x-n.x,r=t.y-n.y,u=n.r+t.r;return.999*u*u>e*e+r*r}function Nu(n){function t(n){s=Math.min(n.x-n.r,s),f=Math.max(n.x+n.r,f),h=Math.min(n.y-n.r,h),g=Math.max(n.y+n.r,g)}if((e=n.children)&&(c=e.length)){var e,r,u,i,a,o,l,c,s=1/0,f=-(1/0),h=1/0,g=-(1/0);if(e.forEach(Eu),r=e[0],r.x=-r.r,r.y=0,t(r),c>1&&(u=e[1],u.x=u.r,u.y=0,t(u),c>2))for(i=e[2],zu(r,u,i),t(i),wu(r,i),r._pack_prev=i,wu(i,u),u=r._pack_next,a=3;c>a;a++){zu(r,u,i=e[a]);var p=0,v=1,d=1;for(o=u._pack_next;o!==u;o=o._pack_next,v++)if(ku(o,i)){p=1;break}if(1==p)for(l=r._pack_prev;l!==o._pack_prev&&!ku(l,i);l=l._pack_prev,d++);p?(d>v||v==d&&u.r<r.r?Su(r,u=o):Su(r=l,u),a--):(wu(r,i),u=i,t(i))}var m=(s+f)/2,y=(h+g)/2,M=0;for(a=0;c>a;a++)i=e[a],i.x-=m,i.y-=y,M=Math.max(M,i.r+Math.sqrt(i.x*i.x+i.y*i.y));n.r=M,e.forEach(Au)}}function Eu(n){n._pack_next=n._pack_prev=n}function Au(n){delete n._pack_next,delete n._pack_prev}function Cu(n,t,e,r){var u=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,u)for(var i=-1,a=u.length;++i<a;)Cu(u[i],t,e,r)}function zu(n,t,e){var r=n.r+e.r,u=t.x-n.x,i=t.y-n.y;if(r&&(u||i)){var a=t.r+e.r,o=u*u+i*i;a*=a,r*=r;var l=.5+(r-a)/(2*o),c=Math.sqrt(Math.max(0,2*a*(r+o)-(r-=o)*r-a*a))/(2*o);e.x=n.x+l*u+c*i,e.y=n.y+l*i-c*u}else e.x=n.x+r,e.y=n.y}function Lu(n,t){return n.parent==t.parent?1:2}function qu(n){var t=n.children;return t.length?t[0]:n.t}function Tu(n){var t,e=n.children;return(t=e.length)?e[t-1]:n.t}function Ru(n,t,e){var r=e/(t.i-n.i);t.c-=r,t.s+=e,n.c+=r,t.z+=e,t.m+=e}function Du(n){for(var t,e=0,r=0,u=n.children,i=u.length;--i>=0;)t=u[i],t.z+=e,t.m+=e,e+=t.s+(r+=t.c)}function Pu(n,t,e){return n.a.parent===t.parent?n.a:e}function ju(n){return 1+oa.max(n,function(n){return n.y})}function Uu(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Fu(n){var t=n.children;return t&&t.length?Fu(t[0]):n}function Hu(n){var t,e=n.children;return e&&(t=e.length)?Hu(e[t-1]):n}function Ou(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function Iu(n,t){var e=n.x+t[3],r=n.y+t[0],u=n.dx-t[1]-t[3],i=n.dy-t[0]-t[2];return 0>u&&(e+=u/2,u=0),0>i&&(r+=i/2,i=0),{x:e,y:r,dx:u,dy:i}}function Yu(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function Zu(n){return n.rangeExtent?n.rangeExtent():Yu(n.range())}function Vu(n,t,e,r){var u=e(n[0],n[1]),i=r(t[0],t[1]);return function(n){return i(u(n))}}function Xu(n,t){var e,r=0,u=n.length-1,i=n[r],a=n[u];return i>a&&(e=r,r=u,u=e,e=i,i=a,a=e),n[r]=t.floor(i),n[u]=t.ceil(a),n}function $u(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:wl}function Bu(n,t,e,r){var u=[],i=[],a=0,o=Math.min(n.length,t.length)-1;for(n[o]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++a<=o;)u.push(e(n[a-1],n[a])),i.push(r(t[a-1],t[a]));return function(t){var e=oa.bisect(n,t,1,o)-1;return i[e](u[e](t))}}function Wu(n,t,e,r){function u(){var u=Math.min(n.length,t.length)>2?Bu:Vu,l=r?Wr:Br;return a=u(n,t,l,e),o=u(t,n,l,Mr),i}function i(n){return a(n)}var a,o;return i.invert=function(n){return o(n)},i.domain=function(t){return arguments.length?(n=t.map(Number),u()):n},i.range=function(n){return arguments.length?(t=n,u()):t},i.rangeRound=function(n){return i.range(n).interpolate(jr)},i.clamp=function(n){return arguments.length?(r=n,u()):r},i.interpolate=function(n){return arguments.length?(e=n,u()):e},i.ticks=function(t){return Qu(n,t)},i.tickFormat=function(t,e){return ni(n,t,e)},i.nice=function(t){return Gu(n,t),u()},i.copy=function(){return Wu(n,t,e,r)},u()}function Ju(n,t){return oa.rebind(n,t,"range","rangeRound","interpolate","clamp")}function Gu(n,t){return Xu(n,$u(Ku(n,t)[2])),Xu(n,$u(Ku(n,t)[2])),n}function Ku(n,t){null==t&&(t=10);var e=Yu(n),r=e[1]-e[0],u=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),i=t/r*u;return.15>=i?u*=10:.35>=i?u*=5:.75>=i&&(u*=2),e[0]=Math.ceil(e[0]/u)*u,e[1]=Math.floor(e[1]/u)*u+.5*u,e[2]=u,e}function Qu(n,t){return oa.range.apply(oa,Ku(n,t))}function ni(n,t,e){var r=Ku(n,t);if(e){var u=so.exec(e);if(u.shift(),"s"===u[8]){var i=oa.formatPrefix(Math.max(Ma(r[0]),Ma(r[1])));return u[7]||(u[7]="."+ti(i.scale(r[2]))),u[8]="f",e=oa.format(u.join("")),function(n){return e(i.scale(n))+i.symbol}}u[7]||(u[7]="."+ei(u[8],r)),e=u.join("")}else e=",."+ti(r[2])+"f";return oa.format(e)}function ti(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}function ei(n,t){var e=ti(t[2]);return n in Sl?Math.abs(e-ti(Math.max(Ma(t[0]),Ma(t[1]))))+ +("e"!==n):e-2*("%"===n)}function ri(n,t,e,r){function u(n){return(e?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function i(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function a(t){return n(u(t))}return a.invert=function(t){return i(n.invert(t))},a.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(u)),a):r},a.base=function(e){return arguments.length?(t=+e,n.domain(r.map(u)),a):t},a.nice=function(){var t=Xu(r.map(u),e?Math:Nl);return n.domain(t),r=t.map(i),a},a.ticks=function(){var n=Yu(r),a=[],o=n[0],l=n[1],c=Math.floor(u(o)),s=Math.ceil(u(l)),f=t%1?2:t;if(isFinite(s-c)){if(e){for(;s>c;c++)for(var h=1;f>h;h++)a.push(i(c)*h);a.push(i(c))}else for(a.push(i(c));c++<s;)for(var h=f-1;h>0;h--)a.push(i(c)*h);for(c=0;a[c]<o;c++);for(s=a.length;a[s-1]>l;s--);a=a.slice(c,s)}return a},a.tickFormat=function(n,e){if(!arguments.length)return kl;arguments.length<2?e=kl:"function"!=typeof e&&(e=oa.format(e));var r=Math.max(1,t*n/a.ticks().length);return function(n){var a=n/i(Math.round(u(n)));return t-.5>a*t&&(a*=t),r>=a?e(n):""}},a.copy=function(){return ri(n.copy(),t,e,r)},Ju(a,n)}function ui(n,t,e){function r(t){return n(u(t))}var u=ii(t),i=ii(1/t);return r.invert=function(t){return i(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(u)),r):e},r.ticks=function(n){return Qu(e,n)},r.tickFormat=function(n,t){return ni(e,n,t)},r.nice=function(n){return r.domain(Gu(e,n))},r.exponent=function(a){return arguments.length?(u=ii(t=a),i=ii(1/t),n.domain(e.map(u)),r):t},r.copy=function(){return ui(n.copy(),t,e)},Ju(r,n)}function ii(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function ai(n,t){function e(e){return i[((u.get(e)||("range"===t.t?u.set(e,n.push(e)):NaN))-1)%i.length]}function r(t,e){return oa.range(n.length).map(function(n){return t+e*n})}var u,i,a;return e.domain=function(r){if(!arguments.length)return n;n=[],u=new c;for(var i,a=-1,o=r.length;++a<o;)u.has(i=r[a])||u.set(i,n.push(i));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(i=n,a=0,t={t:"range",a:arguments},e):i},e.rangePoints=function(u,o){arguments.length<2&&(o=0);var l=u[0],c=u[1],s=n.length<2?(l=(l+c)/2,0):(c-l)/(n.length-1+o);return i=r(l+s*o/2,s),a=0,t={t:"rangePoints",a:arguments},e},e.rangeRoundPoints=function(u,o){arguments.length<2&&(o=0);var l=u[0],c=u[1],s=n.length<2?(l=c=Math.round((l+c)/2),0):(c-l)/(n.length-1+o)|0;return i=r(l+Math.round(s*o/2+(c-l-(n.length-1+o)*s)/2),s),a=0,t={t:"rangeRoundPoints",a:arguments},e},e.rangeBands=function(u,o,l){arguments.length<2&&(o=0),arguments.length<3&&(l=o);var c=u[1]<u[0],s=u[c-0],f=u[1-c],h=(f-s)/(n.length-o+2*l);return i=r(s+h*l,h),c&&i.reverse(),a=h*(1-o),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(u,o,l){arguments.length<2&&(o=0),arguments.length<3&&(l=o);var c=u[1]<u[0],s=u[c-0],f=u[1-c],h=Math.floor((f-s)/(n.length-o+2*l));return i=r(s+Math.round((f-s-(n.length-o)*h)/2),h),c&&i.reverse(),a=Math.round(h*(1-o)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return a},e.rangeExtent=function(){return Yu(t.a[0])},e.copy=function(){return ai(n,t)},e.domain(n)}function oi(n,t){function i(){var e=0,r=t.length;for(o=[];++e<r;)o[e-1]=oa.quantile(n,e/r);return a}function a(n){return isNaN(n=+n)?void 0:t[oa.bisect(o,n)]}var o;return a.domain=function(t){return arguments.length?(n=t.map(r).filter(u).sort(e),i()):n},a.range=function(n){return arguments.length?(t=n,i()):t},a.quantiles=function(){return o},a.invertExtent=function(e){return e=t.indexOf(e),0>e?[NaN,NaN]:[e>0?o[e-1]:n[0],e<o.length?o[e]:n[n.length-1]]},a.copy=function(){return oi(n,t)},i()}function li(n,t,e){function r(t){return e[Math.max(0,Math.min(a,Math.floor(i*(t-n))))]}function u(){return i=e.length/(t-n),a=e.length-1,r}var i,a;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],u()):[n,t]},r.range=function(n){return arguments.length?(e=n,u()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=0>t?NaN:t/i+n,[t,t+1/i]},r.copy=function(){return li(n,t,e)},u()}function ci(n,t){function e(e){return e>=e?t[oa.bisect(n,e)]:void 0}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return ci(n,t)},e}function si(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return Qu(n,t)},t.tickFormat=function(t,e){return ni(n,t,e)},t.copy=function(){return si(n)},t}function fi(){return 0}function hi(n){return n.innerRadius}function gi(n){return n.outerRadius}function pi(n){return n.startAngle}function vi(n){return n.endAngle}function di(n){return n&&n.padAngle}function mi(n,t,e,r){return(n-e)*t-(t-r)*n>0?0:1}function yi(n,t,e,r,u){var i=n[0]-t[0],a=n[1]-t[1],o=(u?r:-r)/Math.sqrt(i*i+a*a),l=o*a,c=-o*i,s=n[0]+l,f=n[1]+c,h=t[0]+l,g=t[1]+c,p=(s+h)/2,v=(f+g)/2,d=h-s,m=g-f,y=d*d+m*m,M=e-r,x=s*g-h*f,b=(0>m?-1:1)*Math.sqrt(Math.max(0,M*M*y-x*x)),_=(x*m-d*b)/y,w=(-x*d-m*b)/y,S=(x*m+d*b)/y,k=(-x*d+m*b)/y,N=_-p,E=w-v,A=S-p,C=k-v;return N*N+E*E>A*A+C*C&&(_=S,w=k),[[_-l,w-c],[_*e/M,w*e/M]]}function Mi(n){function t(t){function a(){c.push("M",i(n(s),o))}for(var l,c=[],s=[],f=-1,h=t.length,g=En(e),p=En(r);++f<h;)u.call(this,l=t[f],f)?s.push([+g.call(this,l,f),+p.call(this,l,f)]):s.length&&(a(),s=[]);return s.length&&a(),c.length?c.join(""):null}var e=Ce,r=ze,u=zt,i=xi,a=i.key,o=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(u=n,t):u},t.interpolate=function(n){return arguments.length?(a="function"==typeof n?i=n:(i=ql.get(n)||xi).key,t):a},t.tension=function(n){return arguments.length?(o=n,t):o},t}function xi(n){return n.length>1?n.join("L"):n+"Z"}function bi(n){return n.join("L")+"Z"}function _i(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1]);return e>1&&u.push("H",r[0]),u.join("")}function wi(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("V",(r=n[t])[1],"H",r[0]);return u.join("")}function Si(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r=n[t])[0],"V",r[1]);return u.join("")}function ki(n,t){return n.length<4?xi(n):n[1]+Ai(n.slice(1,-1),Ci(n,t))}function Ni(n,t){return n.length<3?bi(n):n[0]+Ai((n.push(n[0]),n),Ci([n[n.length-2]].concat(n,[n[1]]),t))}function Ei(n,t){return n.length<3?xi(n):n[0]+Ai(n,Ci(n,t))}function Ai(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return xi(n);var e=n.length!=t.length,r="",u=n[0],i=n[1],a=t[0],o=a,l=1;if(e&&(r+="Q"+(i[0]-2*a[0]/3)+","+(i[1]-2*a[1]/3)+","+i[0]+","+i[1],u=n[1],l=2),t.length>1){o=t[1],i=n[l],l++,r+="C"+(u[0]+a[0])+","+(u[1]+a[1])+","+(i[0]-o[0])+","+(i[1]-o[1])+","+i[0]+","+i[1];for(var c=2;c<t.length;c++,l++)i=n[l],o=t[c],r+="S"+(i[0]-o[0])+","+(i[1]-o[1])+","+i[0]+","+i[1]}if(e){var s=n[l];r+="Q"+(i[0]+2*o[0]/3)+","+(i[1]+2*o[1]/3)+","+s[0]+","+s[1]}return r}function Ci(n,t){for(var e,r=[],u=(1-t)/2,i=n[0],a=n[1],o=1,l=n.length;++o<l;)e=i,i=a,a=n[o],r.push([u*(a[0]-e[0]),u*(a[1]-e[1])]);return r}function zi(n){if(n.length<3)return xi(n);var t=1,e=n.length,r=n[0],u=r[0],i=r[1],a=[u,u,u,(r=n[1])[0]],o=[i,i,i,r[1]],l=[u,",",i,"L",Ri(Dl,a),",",Ri(Dl,o)];for(n.push(n[e-1]);++t<=e;)r=n[t],a.shift(),a.push(r[0]),o.shift(),o.push(r[1]),Di(l,a,o);return n.pop(),l.push("L",r),l.join("")}function Li(n){if(n.length<4)return xi(n);for(var t,e=[],r=-1,u=n.length,i=[0],a=[0];++r<3;)t=n[r],i.push(t[0]),a.push(t[1]);for(e.push(Ri(Dl,i)+","+Ri(Dl,a)),--r;++r<u;)t=n[r],i.shift(),i.push(t[0]),a.shift(),a.push(t[1]),Di(e,i,a);return e.join("")}function qi(n){for(var t,e,r=-1,u=n.length,i=u+4,a=[],o=[];++r<4;)e=n[r%u],a.push(e[0]),o.push(e[1]);for(t=[Ri(Dl,a),",",Ri(Dl,o)],--r;++r<i;)e=n[r%u],a.shift(),a.push(e[0]),o.shift(),o.push(e[1]),Di(t,a,o);return t.join("")}function Ti(n,t){var e=n.length-1;if(e)for(var r,u,i=n[0][0],a=n[0][1],o=n[e][0]-i,l=n[e][1]-a,c=-1;++c<=e;)r=n[c],u=c/e,r[0]=t*r[0]+(1-t)*(i+u*o),r[1]=t*r[1]+(1-t)*(a+u*l);return zi(n)}function Ri(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function Di(n,t,e){n.push("C",Ri(Tl,t),",",Ri(Tl,e),",",Ri(Rl,t),",",Ri(Rl,e),",",Ri(Dl,t),",",Ri(Dl,e))}function Pi(n,t){return(t[1]-n[1])/(t[0]-n[0])}function ji(n){for(var t=0,e=n.length-1,r=[],u=n[0],i=n[1],a=r[0]=Pi(u,i);++t<e;)r[t]=(a+(a=Pi(u=i,i=n[t+1])))/2;return r[t]=a,r}function Ui(n){for(var t,e,r,u,i=[],a=ji(n),o=-1,l=n.length-1;++o<l;)t=Pi(n[o],n[o+1]),Ma(t)<Da?a[o]=a[o+1]=0:(e=a[o]/t,r=a[o+1]/t,u=e*e+r*r,u>9&&(u=3*t/Math.sqrt(u),a[o]=u*e,a[o+1]=u*r));for(o=-1;++o<=l;)u=(n[Math.min(l,o+1)][0]-n[Math.max(0,o-1)][0])/(6*(1+a[o]*a[o])),i.push([u||0,a[o]*u||0]);return i}function Fi(n){return n.length<3?xi(n):n[0]+Ai(n,Ui(n))}function Hi(n){for(var t,e,r,u=-1,i=n.length;++u<i;)t=n[u],e=t[0],r=t[1]-Ha,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function Oi(n){function t(t){function l(){v.push("M",o(n(m),f),s,c(n(d.reverse()),f),"Z")}for(var h,g,p,v=[],d=[],m=[],y=-1,M=t.length,x=En(e),b=En(u),_=e===r?function(){
return g}:En(r),w=u===i?function(){return p}:En(i);++y<M;)a.call(this,h=t[y],y)?(d.push([g=+x.call(this,h,y),p=+b.call(this,h,y)]),m.push([+_.call(this,h,y),+w.call(this,h,y)])):d.length&&(l(),d=[],m=[]);return d.length&&l(),v.length?v.join(""):null}var e=Ce,r=Ce,u=0,i=ze,a=zt,o=xi,l=o.key,c=o,s="L",f=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(u=i=n,t):i},t.y0=function(n){return arguments.length?(u=n,t):u},t.y1=function(n){return arguments.length?(i=n,t):i},t.defined=function(n){return arguments.length?(a=n,t):a},t.interpolate=function(n){return arguments.length?(l="function"==typeof n?o=n:(o=ql.get(n)||xi).key,c=o.reverse||o,s=o.closed?"M":"L",t):l},t.tension=function(n){return arguments.length?(f=n,t):f},t}function Ii(n){return n.radius}function Yi(n){return[n.x,n.y]}function Zi(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]-Ha;return[e*Math.cos(r),e*Math.sin(r)]}}function Vi(){return 64}function Xi(){return"circle"}function $i(n){var t=Math.sqrt(n/ja);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function Bi(n){return function(){var t,e,r;(t=this[n])&&(r=t[e=t.active])&&(r.timer.c=null,r.timer.t=NaN,--t.count?delete t[e]:delete this[n],t.active+=.5,r.event&&r.event.interrupt.call(this,this.__data__,r.index))}}function Wi(n,t,e){return Sa(n,Il),n.namespace=t,n.id=e,n}function Ji(n,t,e,r){var u=n.id,i=n.namespace;return Y(n,"function"==typeof e?function(n,a,o){n[i][u].tween.set(t,r(e.call(n,n.__data__,a,o)))}:(e=r(e),function(n){n[i][u].tween.set(t,e)}))}function Gi(n){return null==n&&(n=""),function(){this.textContent=n}}function Ki(n){return null==n?"__transition__":"__transition_"+n+"__"}function Qi(n,t,e,r,u){function i(n){var t=v.delay;return s.t=t+l,n>=t?a(n-t):void(s.c=a)}function a(e){var u=p.active,i=p[u];i&&(i.timer.c=null,i.timer.t=NaN,--p.count,delete p[u],i.event&&i.event.interrupt.call(n,n.__data__,i.index));for(var a in p)if(r>+a){var c=p[a];c.timer.c=null,c.timer.t=NaN,--p.count,delete p[a]}s.c=o,qn(function(){return s.c&&o(e||1)&&(s.c=null,s.t=NaN),1},0,l),p.active=r,v.event&&v.event.start.call(n,n.__data__,t),g=[],v.tween.forEach(function(e,r){(r=r.call(n,n.__data__,t))&&g.push(r)}),h=v.ease,f=v.duration}function o(u){for(var i=u/f,a=h(i),o=g.length;o>0;)g[--o].call(n,a);return i>=1?(v.event&&v.event.end.call(n,n.__data__,t),--p.count?delete p[r]:delete n[e],1):void 0}var l,s,f,h,g,p=n[e]||(n[e]={active:0,count:0}),v=p[r];v||(l=u.time,s=qn(i,0,l),v=p[r]={tween:new c,time:l,timer:s,delay:u.delay,duration:u.duration,ease:u.ease,index:t},u=null,++p.count)}function na(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate("+(isFinite(r)?r:e(n))+",0)"})}function ta(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate(0,"+(isFinite(r)?r:e(n))+")"})}function ea(n){return n.toISOString()}function ra(n,t,e){function r(t){return n(t)}function u(n,e){var r=n[1]-n[0],u=r/e,i=oa.bisect(Gl,u);return i==Gl.length?[t.year,Ku(n.map(function(n){return n/31536e6}),e)[2]]:i?t[u/Gl[i-1]<Gl[i]/u?i-1:i]:[nc,Ku(n,e)[2]]}return r.invert=function(t){return ua(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(ua)},r.nice=function(n,t){function e(e){return!isNaN(e)&&!n.range(e,ua(+e+1),t).length}var i=r.domain(),a=Yu(i),o=null==n?u(a,10):"number"==typeof n&&u(a,n);return o&&(n=o[0],t=o[1]),r.domain(Xu(i,t>1?{floor:function(t){for(;e(t=n.floor(t));)t=ua(t-1);return t},ceil:function(t){for(;e(t=n.ceil(t));)t=ua(+t+1);return t}}:n))},r.ticks=function(n,t){var e=Yu(r.domain()),i=null==n?u(e,10):"number"==typeof n?u(e,n):!n.range&&[{range:n},t];return i&&(n=i[0],t=i[1]),n.range(e[0],ua(+e[1]+1),1>t?1:t)},r.tickFormat=function(){return e},r.copy=function(){return ra(n.copy(),t,e)},Ju(r,n)}function ua(n){return new Date(n)}function ia(n){return JSON.parse(n.responseText)}function aa(n){var t=sa.createRange();return t.selectNode(sa.body),t.createContextualFragment(n.responseText)}var oa={version:"3.5.12"},la=[].slice,ca=function(n){return la.call(n)},sa=this.document;if(sa)try{ca(sa.documentElement.childNodes)[0].nodeType}catch(fa){ca=function(n){for(var t=n.length,e=new Array(t);t--;)e[t]=n[t];return e}}if(Date.now||(Date.now=function(){return+new Date}),sa)try{sa.createElement("DIV").style.setProperty("opacity",0,"")}catch(ha){var ga=this.Element.prototype,pa=ga.setAttribute,va=ga.setAttributeNS,da=this.CSSStyleDeclaration.prototype,ma=da.setProperty;ga.setAttribute=function(n,t){pa.call(this,n,t+"")},ga.setAttributeNS=function(n,t,e){va.call(this,n,t,e+"")},da.setProperty=function(n,t,e){ma.call(this,n,t+"",e)}}oa.ascending=e,oa.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:NaN},oa.min=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i;)if(null!=(r=n[u])&&r>=r){e=r;break}for(;++u<i;)null!=(r=n[u])&&e>r&&(e=r)}else{for(;++u<i;)if(null!=(r=t.call(n,n[u],u))&&r>=r){e=r;break}for(;++u<i;)null!=(r=t.call(n,n[u],u))&&e>r&&(e=r)}return e},oa.max=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i;)if(null!=(r=n[u])&&r>=r){e=r;break}for(;++u<i;)null!=(r=n[u])&&r>e&&(e=r)}else{for(;++u<i;)if(null!=(r=t.call(n,n[u],u))&&r>=r){e=r;break}for(;++u<i;)null!=(r=t.call(n,n[u],u))&&r>e&&(e=r)}return e},oa.extent=function(n,t){var e,r,u,i=-1,a=n.length;if(1===arguments.length){for(;++i<a;)if(null!=(r=n[i])&&r>=r){e=u=r;break}for(;++i<a;)null!=(r=n[i])&&(e>r&&(e=r),r>u&&(u=r))}else{for(;++i<a;)if(null!=(r=t.call(n,n[i],i))&&r>=r){e=u=r;break}for(;++i<a;)null!=(r=t.call(n,n[i],i))&&(e>r&&(e=r),r>u&&(u=r))}return[e,u]},oa.sum=function(n,t){var e,r=0,i=n.length,a=-1;if(1===arguments.length)for(;++a<i;)u(e=+n[a])&&(r+=e);else for(;++a<i;)u(e=+t.call(n,n[a],a))&&(r+=e);return r},oa.mean=function(n,t){var e,i=0,a=n.length,o=-1,l=a;if(1===arguments.length)for(;++o<a;)u(e=r(n[o]))?i+=e:--l;else for(;++o<a;)u(e=r(t.call(n,n[o],o)))?i+=e:--l;return l?i/l:void 0},oa.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),u=+n[r-1],i=e-r;return i?u+i*(n[r]-u):u},oa.median=function(n,t){var i,a=[],o=n.length,l=-1;if(1===arguments.length)for(;++l<o;)u(i=r(n[l]))&&a.push(i);else for(;++l<o;)u(i=r(t.call(n,n[l],l)))&&a.push(i);return a.length?oa.quantile(a.sort(e),.5):void 0},oa.variance=function(n,t){var e,i,a=n.length,o=0,l=0,c=-1,s=0;if(1===arguments.length)for(;++c<a;)u(e=r(n[c]))&&(i=e-o,o+=i/++s,l+=i*(e-o));else for(;++c<a;)u(e=r(t.call(n,n[c],c)))&&(i=e-o,o+=i/++s,l+=i*(e-o));return s>1?l/(s-1):void 0},oa.deviation=function(){var n=oa.variance.apply(this,arguments);return n?Math.sqrt(n):n};var ya=i(e);oa.bisectLeft=ya.left,oa.bisect=oa.bisectRight=ya.right,oa.bisector=function(n){return i(1===n.length?function(t,r){return e(n(t),r)}:n)},oa.shuffle=function(n,t,e){(i=arguments.length)<3&&(e=n.length,2>i&&(t=0));for(var r,u,i=e-t;i;)u=Math.random()*i--|0,r=n[i+t],n[i+t]=n[u+t],n[u+t]=r;return n},oa.permute=function(n,t){for(var e=t.length,r=new Array(e);e--;)r[e]=n[t[e]];return r},oa.pairs=function(n){for(var t,e=0,r=n.length-1,u=n[0],i=new Array(0>r?0:r);r>e;)i[e]=[t=u,u=n[++e]];return i},oa.zip=function(){if(!(r=arguments.length))return[];for(var n=-1,t=oa.min(arguments,a),e=new Array(t);++n<t;)for(var r,u=-1,i=e[n]=new Array(r);++u<r;)i[u]=arguments[u][n];return e},oa.transpose=function(n){return oa.zip.apply(oa,n)},oa.keys=function(n){var t=[];for(var e in n)t.push(e);return t},oa.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},oa.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},oa.merge=function(n){for(var t,e,r,u=n.length,i=-1,a=0;++i<u;)a+=n[i].length;for(e=new Array(a);--u>=0;)for(r=n[u],t=r.length;--t>=0;)e[--a]=r[t];return e};var Ma=Math.abs;oa.range=function(n,t,e){if(arguments.length<3&&(e=1,arguments.length<2&&(t=n,n=0)),(t-n)/e===1/0)throw new Error("infinite range");var r,u=[],i=o(Ma(e)),a=-1;if(n*=i,t*=i,e*=i,0>e)for(;(r=n+e*++a)>t;)u.push(r/i);else for(;(r=n+e*++a)<t;)u.push(r/i);return u},oa.map=function(n,t){var e=new c;if(n instanceof c)n.forEach(function(n,t){e.set(n,t)});else if(Array.isArray(n)){var r,u=-1,i=n.length;if(1===arguments.length)for(;++u<i;)e.set(u,n[u]);else for(;++u<i;)e.set(t.call(n,r=n[u],u),r)}else for(var a in n)e.set(a,n[a]);return e};var xa="__proto__",ba="\x00";l(c,{has:h,get:function(n){return this._[s(n)]},set:function(n,t){return this._[s(n)]=t},remove:g,keys:p,values:function(){var n=[];for(var t in this._)n.push(this._[t]);return n},entries:function(){var n=[];for(var t in this._)n.push({key:f(t),value:this._[t]});return n},size:v,empty:d,forEach:function(n){for(var t in this._)n.call(this,f(t),this._[t])}}),oa.nest=function(){function n(t,a,o){if(o>=i.length)return r?r.call(u,a):e?a.sort(e):a;for(var l,s,f,h,g=-1,p=a.length,v=i[o++],d=new c;++g<p;)(h=d.get(l=v(s=a[g])))?h.push(s):d.set(l,[s]);return t?(s=t(),f=function(e,r){s.set(e,n(t,r,o))}):(s={},f=function(e,r){s[e]=n(t,r,o)}),d.forEach(f),s}function t(n,e){if(e>=i.length)return n;var r=[],u=a[e++];return n.forEach(function(n,u){r.push({key:n,values:t(u,e)})}),u?r.sort(function(n,t){return u(n.key,t.key)}):r}var e,r,u={},i=[],a=[];return u.map=function(t,e){return n(e,t,0)},u.entries=function(e){return t(n(oa.map,e,0),0)},u.key=function(n){return i.push(n),u},u.sortKeys=function(n){return a[i.length-1]=n,u},u.sortValues=function(n){return e=n,u},u.rollup=function(n){return r=n,u},u},oa.set=function(n){var t=new m;if(n)for(var e=0,r=n.length;r>e;++e)t.add(n[e]);return t},l(m,{has:h,add:function(n){return this._[s(n+="")]=!0,n},remove:g,values:p,size:v,empty:d,forEach:function(n){for(var t in this._)n.call(this,f(t))}}),oa.behavior={},oa.rebind=function(n,t){for(var e,r=1,u=arguments.length;++r<u;)n[e=arguments[r]]=M(n,t,t[e]);return n};var _a=["webkit","ms","moz","Moz","o","O"];oa.dispatch=function(){for(var n=new _,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=w(n);return n},_.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.slice(e+1),n=n.slice(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},oa.event=null,oa.requote=function(n){return n.replace(wa,"\\$&")};var wa=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,Sa={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},ka=function(n,t){return t.querySelector(n)},Na=function(n,t){return t.querySelectorAll(n)},Ea=function(n,t){var e=n.matches||n[x(n,"matchesSelector")];return(Ea=function(n,t){return e.call(n,t)})(n,t)};"function"==typeof Sizzle&&(ka=function(n,t){return Sizzle(n,t)[0]||null},Na=Sizzle,Ea=Sizzle.matchesSelector),oa.selection=function(){return oa.select(sa.documentElement)};var Aa=oa.selection.prototype=[];Aa.select=function(n){var t,e,r,u,i=[];n=A(n);for(var a=-1,o=this.length;++a<o;){i.push(t=[]),t.parentNode=(r=this[a]).parentNode;for(var l=-1,c=r.length;++l<c;)(u=r[l])?(t.push(e=n.call(u,u.__data__,l,a)),e&&"__data__"in u&&(e.__data__=u.__data__)):t.push(null)}return E(i)},Aa.selectAll=function(n){var t,e,r=[];n=C(n);for(var u=-1,i=this.length;++u<i;)for(var a=this[u],o=-1,l=a.length;++o<l;)(e=a[o])&&(r.push(t=ca(n.call(e,e.__data__,o,u))),t.parentNode=e);return E(r)};var Ca={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};oa.ns={prefix:Ca,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&"xmlns"!==(e=n.slice(0,t))&&(n=n.slice(t+1)),Ca.hasOwnProperty(e)?{space:Ca[e],local:n}:n}},Aa.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=oa.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(z(t,n[t]));return this}return this.each(z(n,t))},Aa.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=T(n)).length,u=-1;if(t=e.classList){for(;++u<r;)if(!t.contains(n[u]))return!1}else for(t=e.getAttribute("class");++u<r;)if(!q(n[u]).test(t))return!1;return!0}for(t in n)this.each(R(t,n[t]));return this}return this.each(R(n,t))},Aa.style=function(n,e,r){var u=arguments.length;if(3>u){if("string"!=typeof n){2>u&&(e="");for(r in n)this.each(P(r,n[r],e));return this}if(2>u){var i=this.node();return t(i).getComputedStyle(i,null).getPropertyValue(n)}r=""}return this.each(P(n,e,r))},Aa.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(j(t,n[t]));return this}return this.each(j(n,t))},Aa.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},Aa.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},Aa.append=function(n){return n=U(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},Aa.insert=function(n,t){return n=U(n),t=A(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments)||null)})},Aa.remove=function(){return this.each(F)},Aa.data=function(n,t){function e(n,e){var r,u,i,a=n.length,f=e.length,h=Math.min(a,f),g=new Array(f),p=new Array(f),v=new Array(a);if(t){var d,m=new c,y=new Array(a);for(r=-1;++r<a;)(u=n[r])&&(m.has(d=t.call(u,u.__data__,r))?v[r]=u:m.set(d,u),y[r]=d);for(r=-1;++r<f;)(u=m.get(d=t.call(e,i=e[r],r)))?u!==!0&&(g[r]=u,u.__data__=i):p[r]=H(i),m.set(d,!0);for(r=-1;++r<a;)r in y&&m.get(y[r])!==!0&&(v[r]=n[r])}else{for(r=-1;++r<h;)u=n[r],i=e[r],u?(u.__data__=i,g[r]=u):p[r]=H(i);for(;f>r;++r)p[r]=H(e[r]);for(;a>r;++r)v[r]=n[r]}p.update=g,p.parentNode=g.parentNode=v.parentNode=n.parentNode,o.push(p),l.push(g),s.push(v)}var r,u,i=-1,a=this.length;if(!arguments.length){for(n=new Array(a=(r=this[0]).length);++i<a;)(u=r[i])&&(n[i]=u.__data__);return n}var o=Z([]),l=E([]),s=E([]);if("function"==typeof n)for(;++i<a;)e(r=this[i],n.call(r,r.parentNode.__data__,i));else for(;++i<a;)e(r=this[i],n);return l.enter=function(){return o},l.exit=function(){return s},l},Aa.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},Aa.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=O(n));for(var i=0,a=this.length;a>i;i++){u.push(t=[]),t.parentNode=(e=this[i]).parentNode;for(var o=0,l=e.length;l>o;o++)(r=e[o])&&n.call(r,r.__data__,o,i)&&t.push(r)}return E(u)},Aa.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],u=r.length-1,i=r[u];--u>=0;)(e=r[u])&&(i&&i!==e.nextSibling&&i.parentNode.insertBefore(e,i),i=e);return this},Aa.sort=function(n){n=I.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},Aa.each=function(n){return Y(this,function(t,e,r){n.call(t,t.__data__,e,r)})},Aa.call=function(n){var t=ca(arguments);return n.apply(t[0]=this,t),this},Aa.empty=function(){return!this.node()},Aa.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,u=e.length;u>r;r++){var i=e[r];if(i)return i}return null},Aa.size=function(){var n=0;return Y(this,function(){++n}),n};var za=[];oa.selection.enter=Z,oa.selection.enter.prototype=za,za.append=Aa.append,za.empty=Aa.empty,za.node=Aa.node,za.call=Aa.call,za.size=Aa.size,za.select=function(n){for(var t,e,r,u,i,a=[],o=-1,l=this.length;++o<l;){r=(u=this[o]).update,a.push(t=[]),t.parentNode=u.parentNode;for(var c=-1,s=u.length;++c<s;)(i=u[c])?(t.push(r[c]=e=n.call(u.parentNode,i.__data__,c,o)),e.__data__=i.__data__):t.push(null)}return E(a)},za.insert=function(n,t){return arguments.length<2&&(t=V(this)),Aa.insert.call(this,n,t)},oa.select=function(t){var e;return"string"==typeof t?(e=[ka(t,sa)],e.parentNode=sa.documentElement):(e=[t],e.parentNode=n(t)),E([e])},oa.selectAll=function(n){var t;return"string"==typeof n?(t=ca(Na(n,sa)),t.parentNode=sa.documentElement):(t=ca(n),t.parentNode=null),E([t])},Aa.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each(X(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each(X(n,t,e))};var La=oa.map({mouseenter:"mouseover",mouseleave:"mouseout"});sa&&La.forEach(function(n){"on"+n in sa&&La.remove(n)});var qa,Ta=0;oa.mouse=function(n){return J(n,k())};var Ra=this.navigator&&/WebKit/.test(this.navigator.userAgent)?-1:0;oa.touch=function(n,t,e){if(arguments.length<3&&(e=t,t=k().changedTouches),t)for(var r,u=0,i=t.length;i>u;++u)if((r=t[u]).identifier===e)return J(n,r)},oa.behavior.drag=function(){function n(){this.on("mousedown.drag",i).on("touchstart.drag",a)}function e(n,t,e,i,a){return function(){function o(){var n,e,r=t(h,v);r&&(n=r[0]-M[0],e=r[1]-M[1],p|=n|e,M=r,g({type:"drag",x:r[0]+c[0],y:r[1]+c[1],dx:n,dy:e}))}function l(){t(h,v)&&(m.on(i+d,null).on(a+d,null),y(p),g({type:"dragend"}))}var c,s=this,f=oa.event.target,h=s.parentNode,g=r.of(s,arguments),p=0,v=n(),d=".drag"+(null==v?"":"-"+v),m=oa.select(e(f)).on(i+d,o).on(a+d,l),y=W(f),M=t(h,v);u?(c=u.apply(s,arguments),c=[c.x-M[0],c.y-M[1]]):c=[0,0],g({type:"dragstart"})}}var r=N(n,"drag","dragstart","dragend"),u=null,i=e(b,oa.mouse,t,"mousemove","mouseup"),a=e(G,oa.touch,y,"touchmove","touchend");return n.origin=function(t){return arguments.length?(u=t,n):u},oa.rebind(n,r,"on")},oa.touches=function(n,t){return arguments.length<2&&(t=k().touches),t?ca(t).map(function(t){var e=J(n,t);return e.identifier=t.identifier,e}):[]};var Da=1e-6,Pa=Da*Da,ja=Math.PI,Ua=2*ja,Fa=Ua-Da,Ha=ja/2,Oa=ja/180,Ia=180/ja,Ya=Math.SQRT2,Za=2,Va=4;oa.interpolateZoom=function(n,t){var e,r,u=n[0],i=n[1],a=n[2],o=t[0],l=t[1],c=t[2],s=o-u,f=l-i,h=s*s+f*f;if(Pa>h)r=Math.log(c/a)/Ya,e=function(n){return[u+n*s,i+n*f,a*Math.exp(Ya*n*r)]};else{var g=Math.sqrt(h),p=(c*c-a*a+Va*h)/(2*a*Za*g),v=(c*c-a*a-Va*h)/(2*c*Za*g),d=Math.log(Math.sqrt(p*p+1)-p),m=Math.log(Math.sqrt(v*v+1)-v);r=(m-d)/Ya,e=function(n){var t=n*r,e=rn(d),o=a/(Za*g)*(e*un(Ya*t+d)-en(d));return[u+o*s,i+o*f,a*e/rn(Ya*t+d)]}}return e.duration=1e3*r,e},oa.behavior.zoom=function(){function n(n){n.on(L,f).on($a+".zoom",g).on("dblclick.zoom",p).on(R,h)}function e(n){return[(n[0]-k.x)/k.k,(n[1]-k.y)/k.k]}function r(n){return[n[0]*k.k+k.x,n[1]*k.k+k.y]}function u(n){k.k=Math.max(A[0],Math.min(A[1],n))}function i(n,t){t=r(t),k.x+=n[0]-t[0],k.y+=n[1]-t[1]}function a(t,e,r,a){t.__chart__={x:k.x,y:k.y,k:k.k},u(Math.pow(2,a)),i(d=e,r),t=oa.select(t),C>0&&(t=t.transition().duration(C)),t.call(n.event)}function o(){b&&b.domain(x.range().map(function(n){return(n-k.x)/k.k}).map(x.invert)),w&&w.domain(_.range().map(function(n){return(n-k.y)/k.k}).map(_.invert))}function l(n){z++||n({type:"zoomstart"})}function c(n){o(),n({type:"zoom",scale:k.k,translate:[k.x,k.y]})}function s(n){--z||(n({type:"zoomend"}),d=null)}function f(){function n(){o=1,i(oa.mouse(u),h),c(a)}function r(){f.on(q,null).on(T,null),g(o),s(a)}var u=this,a=D.of(u,arguments),o=0,f=oa.select(t(u)).on(q,n).on(T,r),h=e(oa.mouse(u)),g=W(u);Ol.call(u),l(a)}function h(){function n(){var n=oa.touches(p);return g=k.k,n.forEach(function(n){n.identifier in d&&(d[n.identifier]=e(n))}),n}function t(){var t=oa.event.target;oa.select(t).on(x,r).on(b,o),_.push(t);for(var e=oa.event.changedTouches,u=0,i=e.length;i>u;++u)d[e[u].identifier]=null;var l=n(),c=Date.now();if(1===l.length){if(500>c-M){var s=l[0];a(p,s,d[s.identifier],Math.floor(Math.log(k.k)/Math.LN2)+1),S()}M=c}else if(l.length>1){var s=l[0],f=l[1],h=s[0]-f[0],g=s[1]-f[1];m=h*h+g*g}}function r(){var n,t,e,r,a=oa.touches(p);Ol.call(p);for(var o=0,l=a.length;l>o;++o,r=null)if(e=a[o],r=d[e.identifier]){if(t)break;n=e,t=r}if(r){var s=(s=e[0]-n[0])*s+(s=e[1]-n[1])*s,f=m&&Math.sqrt(s/m);n=[(n[0]+e[0])/2,(n[1]+e[1])/2],t=[(t[0]+r[0])/2,(t[1]+r[1])/2],u(f*g)}M=null,i(n,t),c(v)}function o(){if(oa.event.touches.length){for(var t=oa.event.changedTouches,e=0,r=t.length;r>e;++e)delete d[t[e].identifier];for(var u in d)return void n()}oa.selectAll(_).on(y,null),w.on(L,f).on(R,h),N(),s(v)}var g,p=this,v=D.of(p,arguments),d={},m=0,y=".zoom-"+oa.event.changedTouches[0].identifier,x="touchmove"+y,b="touchend"+y,_=[],w=oa.select(p),N=W(p);t(),l(v),w.on(L,null).on(R,t)}function g(){var n=D.of(this,arguments);y?clearTimeout(y):(Ol.call(this),v=e(d=m||oa.mouse(this)),l(n)),y=setTimeout(function(){y=null,s(n)},50),S(),u(Math.pow(2,.002*Xa())*k.k),i(d,v),c(n)}function p(){var n=oa.mouse(this),t=Math.log(k.k)/Math.LN2;a(this,n,e(n),oa.event.shiftKey?Math.ceil(t)-1:Math.floor(t)+1)}var v,d,m,y,M,x,b,_,w,k={x:0,y:0,k:1},E=[960,500],A=Ba,C=250,z=0,L="mousedown.zoom",q="mousemove.zoom",T="mouseup.zoom",R="touchstart.zoom",D=N(n,"zoomstart","zoom","zoomend");return $a||($a="onwheel"in sa?(Xa=function(){return-oa.event.deltaY*(oa.event.deltaMode?120:1)},"wheel"):"onmousewheel"in sa?(Xa=function(){return oa.event.wheelDelta},"mousewheel"):(Xa=function(){return-oa.event.detail},"MozMousePixelScroll")),n.event=function(n){n.each(function(){var n=D.of(this,arguments),t=k;Fl?oa.select(this).transition().each("start.zoom",function(){k=this.__chart__||{x:0,y:0,k:1},l(n)}).tween("zoom:zoom",function(){var e=E[0],r=E[1],u=d?d[0]:e/2,i=d?d[1]:r/2,a=oa.interpolateZoom([(u-k.x)/k.k,(i-k.y)/k.k,e/k.k],[(u-t.x)/t.k,(i-t.y)/t.k,e/t.k]);return function(t){var r=a(t),o=e/r[2];this.__chart__=k={x:u-r[0]*o,y:i-r[1]*o,k:o},c(n)}}).each("interrupt.zoom",function(){s(n)}).each("end.zoom",function(){s(n)}):(this.__chart__=k,l(n),c(n),s(n))})},n.translate=function(t){return arguments.length?(k={x:+t[0],y:+t[1],k:k.k},o(),n):[k.x,k.y]},n.scale=function(t){return arguments.length?(k={x:k.x,y:k.y,k:null},u(+t),o(),n):k.k},n.scaleExtent=function(t){return arguments.length?(A=null==t?Ba:[+t[0],+t[1]],n):A},n.center=function(t){return arguments.length?(m=t&&[+t[0],+t[1]],n):m},n.size=function(t){return arguments.length?(E=t&&[+t[0],+t[1]],n):E},n.duration=function(t){return arguments.length?(C=+t,n):C},n.x=function(t){return arguments.length?(b=t,x=t.copy(),k={x:0,y:0,k:1},n):b},n.y=function(t){return arguments.length?(w=t,_=t.copy(),k={x:0,y:0,k:1},n):w},oa.rebind(n,D,"on")};var Xa,$a,Ba=[0,1/0];oa.color=on,on.prototype.toString=function(){return this.rgb()+""},oa.hsl=ln;var Wa=ln.prototype=new on;Wa.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),new ln(this.h,this.s,this.l/n)},Wa.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new ln(this.h,this.s,n*this.l)},Wa.rgb=function(){return cn(this.h,this.s,this.l)},oa.hcl=sn;var Ja=sn.prototype=new on;Ja.brighter=function(n){return new sn(this.h,this.c,Math.min(100,this.l+Ga*(arguments.length?n:1)))},Ja.darker=function(n){return new sn(this.h,this.c,Math.max(0,this.l-Ga*(arguments.length?n:1)))},Ja.rgb=function(){return fn(this.h,this.c,this.l).rgb()},oa.lab=hn;var Ga=18,Ka=.95047,Qa=1,no=1.08883,to=hn.prototype=new on;to.brighter=function(n){return new hn(Math.min(100,this.l+Ga*(arguments.length?n:1)),this.a,this.b)},to.darker=function(n){return new hn(Math.max(0,this.l-Ga*(arguments.length?n:1)),this.a,this.b)},to.rgb=function(){return gn(this.l,this.a,this.b)},oa.rgb=yn;var eo=yn.prototype=new on;eo.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,u=30;return t||e||r?(t&&u>t&&(t=u),e&&u>e&&(e=u),r&&u>r&&(r=u),new yn(Math.min(255,t/n),Math.min(255,e/n),Math.min(255,r/n))):new yn(u,u,u)},eo.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new yn(n*this.r,n*this.g,n*this.b)},eo.hsl=function(){return wn(this.r,this.g,this.b)},eo.toString=function(){return"#"+bn(this.r)+bn(this.g)+bn(this.b)};var ro=oa.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});ro.forEach(function(n,t){ro.set(n,Mn(t))}),oa.functor=En,oa.xhr=An(y),oa.dsv=function(n,t){function e(n,e,i){arguments.length<3&&(i=e,e=null);var a=Cn(n,t,null==e?r:u(e),i);return a.row=function(n){return arguments.length?a.response(null==(e=n)?r:u(n)):e},a}function r(n){return e.parse(n.responseText)}function u(n){return function(t){return e.parse(t.responseText,n)}}function i(t){return t.map(a).join(n)}function a(n){return o.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var o=new RegExp('["'+n+"\n]"),l=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var u=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(u(n),e)}:u})},e.parseRows=function(n,t){function e(){if(s>=c)return a;if(u)return u=!1,i;var t=s;if(34===n.charCodeAt(t)){for(var e=t;e++<c;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}s=e+2;var r=n.charCodeAt(e+1);return 13===r?(u=!0,10===n.charCodeAt(e+2)&&++s):10===r&&(u=!0),n.slice(t+1,e).replace(/""/g,'"')}for(;c>s;){var r=n.charCodeAt(s++),o=1;if(10===r)u=!0;else if(13===r)u=!0,10===n.charCodeAt(s)&&(++s,++o);else if(r!==l)continue;return n.slice(t,s-o)}return n.slice(t)}for(var r,u,i={},a={},o=[],c=n.length,s=0,f=0;(r=e())!==a;){for(var h=[];r!==i&&r!==a;)h.push(r),r=e();t&&null==(h=t(h,f++))||o.push(h)}return o},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new m,u=[];return t.forEach(function(n){for(var t in n)r.has(t)||u.push(r.add(t))}),[u.map(a).join(n)].concat(t.map(function(t){return u.map(function(n){return a(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(i).join("\n")},e},oa.csv=oa.dsv(",","text/csv"),oa.tsv=oa.dsv("	","text/tab-separated-values");var uo,io,ao,oo,lo=this[x(this,"requestAnimationFrame")]||function(n){setTimeout(n,17)};oa.timer=function(){qn.apply(this,arguments)},oa.timer.flush=function(){Rn(),Dn()},oa.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)};var co=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"].map(jn);oa.formatPrefix=function(n,t){var e=0;return(n=+n)&&(0>n&&(n*=-1),t&&(n=oa.round(n,Pn(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((e-1)/3)))),co[8+e/3]};var so=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,fo=oa.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=oa.round(n,Pn(n,t))).toFixed(Math.max(0,Math.min(20,Pn(n*(1+1e-15),t))))}}),ho=oa.time={},go=Date;Hn.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){po.setUTCDate.apply(this._,arguments)},setDay:function(){po.setUTCDay.apply(this._,arguments)},setFullYear:function(){po.setUTCFullYear.apply(this._,arguments)},setHours:function(){po.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){po.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){po.setUTCMinutes.apply(this._,arguments)},setMonth:function(){po.setUTCMonth.apply(this._,arguments)},setSeconds:function(){po.setUTCSeconds.apply(this._,arguments)},setTime:function(){po.setTime.apply(this._,arguments)}};var po=Date.prototype;ho.year=On(function(n){return n=ho.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),ho.years=ho.year.range,ho.years.utc=ho.year.utc.range,ho.day=On(function(n){var t=new go(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),ho.days=ho.day.range,ho.days.utc=ho.day.utc.range,ho.dayOfYear=function(n){var t=ho.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(n,t){t=7-t;var e=ho[n]=On(function(n){return(n=ho.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=ho.year(n).getDay();return Math.floor((ho.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});ho[n+"s"]=e.range,ho[n+"s"].utc=e.utc.range,ho[n+"OfYear"]=function(n){var e=ho.year(n).getDay();return Math.floor((ho.dayOfYear(n)+(e+t)%7)/7)}}),ho.week=ho.sunday,ho.weeks=ho.sunday.range,ho.weeks.utc=ho.sunday.utc.range,ho.weekOfYear=ho.sundayOfYear;var vo={"-":"",_:" ",0:"0"},mo=/^\s*\d+/,yo=/^%/;oa.locale=function(n){return{numberFormat:Un(n),timeFormat:Yn(n)}};var Mo=oa.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});oa.format=Mo.numberFormat,oa.geo={},st.prototype={s:0,t:0,add:function(n){ft(n,this.t,xo),ft(xo.s,this.s,this),this.s?this.t+=xo.t:this.s=xo.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var xo=new st;oa.geo.stream=function(n,t){n&&bo.hasOwnProperty(n.type)?bo[n.type](n,t):ht(n,t)};var bo={Feature:function(n,t){ht(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,u=e.length;++r<u;)ht(e[r].geometry,t)}},_o={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){gt(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)gt(e[r],t,0)},Polygon:function(n,t){pt(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)pt(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,u=e.length;++r<u;)ht(e[r],t)}};oa.geo.area=function(n){return wo=0,oa.geo.stream(n,ko),wo};var wo,So=new st,ko={sphere:function(){wo+=4*ja},point:b,lineStart:b,lineEnd:b,polygonStart:function(){So.reset(),ko.lineStart=vt},polygonEnd:function(){var n=2*So;wo+=0>n?4*ja+n:n,ko.lineStart=ko.lineEnd=ko.point=b}};oa.geo.bounds=function(){function n(n,t){M.push(x=[s=n,h=n]),f>t&&(f=t),t>g&&(g=t)}function t(t,e){var r=dt([t*Oa,e*Oa]);if(m){var u=yt(m,r),i=[u[1],-u[0],0],a=yt(i,u);bt(a),a=_t(a);var l=t-p,c=l>0?1:-1,v=a[0]*Ia*c,d=Ma(l)>180;if(d^(v>c*p&&c*t>v)){var y=a[1]*Ia;y>g&&(g=y)}else if(v=(v+360)%360-180,d^(v>c*p&&c*t>v)){var y=-a[1]*Ia;f>y&&(f=y)}else f>e&&(f=e),e>g&&(g=e);d?p>t?o(s,t)>o(s,h)&&(h=t):o(t,h)>o(s,h)&&(s=t):h>=s?(s>t&&(s=t),t>h&&(h=t)):t>p?o(s,t)>o(s,h)&&(h=t):o(t,h)>o(s,h)&&(s=t)}else n(t,e);m=r,p=t}function e(){b.point=t}function r(){x[0]=s,x[1]=h,b.point=n,m=null}function u(n,e){if(m){var r=n-p;y+=Ma(r)>180?r+(r>0?360:-360):r}else v=n,d=e;ko.point(n,e),t(n,e)}function i(){ko.lineStart()}function a(){u(v,d),ko.lineEnd(),Ma(y)>Da&&(s=-(h=180)),x[0]=s,x[1]=h,m=null}function o(n,t){return(t-=n)<0?t+360:t}function l(n,t){return n[0]-t[0]}function c(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var s,f,h,g,p,v,d,m,y,M,x,b={point:n,lineStart:e,lineEnd:r,polygonStart:function(){b.point=u,b.lineStart=i,b.lineEnd=a,y=0,ko.polygonStart()},polygonEnd:function(){ko.polygonEnd(),b.point=n,b.lineStart=e,b.lineEnd=r,0>So?(s=-(h=180),f=-(g=90)):y>Da?g=90:-Da>y&&(f=-90),x[0]=s,x[1]=h}};return function(n){g=h=-(s=f=1/0),M=[],oa.geo.stream(n,b);var t=M.length;if(t){M.sort(l);for(var e,r=1,u=M[0],i=[u];t>r;++r)e=M[r],c(e[0],u)||c(e[1],u)?(o(u[0],e[1])>o(u[0],u[1])&&(u[1]=e[1]),o(e[0],u[1])>o(u[0],u[1])&&(u[0]=e[0])):i.push(u=e);for(var a,e,p=-(1/0),t=i.length-1,r=0,u=i[t];t>=r;u=e,++r)e=i[r],(a=o(u[1],e[0]))>p&&(p=a,s=e[0],h=u[1])}return M=x=null,s===1/0||f===1/0?[[NaN,NaN],[NaN,NaN]]:[[s,f],[h,g]]}}(),oa.geo.centroid=function(n){No=Eo=Ao=Co=zo=Lo=qo=To=Ro=Do=Po=0,oa.geo.stream(n,jo);var t=Ro,e=Do,r=Po,u=t*t+e*e+r*r;return Pa>u&&(t=Lo,e=qo,r=To,Da>Eo&&(t=Ao,e=Co,r=zo),u=t*t+e*e+r*r,Pa>u)?[NaN,NaN]:[Math.atan2(e,t)*Ia,tn(r/Math.sqrt(u))*Ia]};var No,Eo,Ao,Co,zo,Lo,qo,To,Ro,Do,Po,jo={sphere:b,point:St,lineStart:Nt,lineEnd:Et,polygonStart:function(){jo.lineStart=At},polygonEnd:function(){jo.lineStart=Nt}},Uo=Rt(zt,Ut,Ht,[-ja,-ja/2]),Fo=1e9;oa.geo.clipExtent=function(){var n,t,e,r,u,i,a={stream:function(n){return u&&(u.valid=!1),u=i(n),u.valid=!0,u},extent:function(o){return arguments.length?(i=Zt(n=+o[0][0],t=+o[0][1],e=+o[1][0],r=+o[1][1]),u&&(u.valid=!1,u=null),a):[[n,t],[e,r]]}};return a.extent([[0,0],[960,500]])},(oa.geo.conicEqualArea=function(){return Vt(Xt)}).raw=Xt,oa.geo.albers=function(){return oa.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},oa.geo.albersUsa=function(){function n(n){var i=n[0],a=n[1];return t=null,e(i,a),t||(r(i,a),t)||u(i,a),t}var t,e,r,u,i=oa.geo.albers(),a=oa.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),o=oa.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),l={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=i.scale(),e=i.translate(),r=(n[0]-e[0])/t,u=(n[1]-e[1])/t;return(u>=.12&&.234>u&&r>=-.425&&-.214>r?a:u>=.166&&.234>u&&r>=-.214&&-.115>r?o:i).invert(n)},n.stream=function(n){var t=i.stream(n),e=a.stream(n),r=o.stream(n);return{point:function(n,u){t.point(n,u),e.point(n,u),r.point(n,u)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(i.precision(t),a.precision(t),o.precision(t),n):i.precision()},n.scale=function(t){return arguments.length?(i.scale(t),a.scale(.35*t),o.scale(t),n.translate(i.translate())):i.scale()},n.translate=function(t){if(!arguments.length)return i.translate();var c=i.scale(),s=+t[0],f=+t[1];return e=i.translate(t).clipExtent([[s-.455*c,f-.238*c],[s+.455*c,f+.238*c]]).stream(l).point,r=a.translate([s-.307*c,f+.201*c]).clipExtent([[s-.425*c+Da,f+.12*c+Da],[s-.214*c-Da,f+.234*c-Da]]).stream(l).point,u=o.translate([s-.205*c,f+.212*c]).clipExtent([[s-.214*c+Da,f+.166*c+Da],[s-.115*c-Da,f+.234*c-Da]]).stream(l).point,n},n.scale(1070)};var Ho,Oo,Io,Yo,Zo,Vo,Xo={point:b,lineStart:b,lineEnd:b,polygonStart:function(){Oo=0,Xo.lineStart=$t},polygonEnd:function(){Xo.lineStart=Xo.lineEnd=Xo.point=b,Ho+=Ma(Oo/2)}},$o={point:Bt,lineStart:b,lineEnd:b,polygonStart:b,polygonEnd:b},Bo={point:Gt,lineStart:Kt,lineEnd:Qt,polygonStart:function(){Bo.lineStart=ne},polygonEnd:function(){Bo.point=Gt,Bo.lineStart=Kt,Bo.lineEnd=Qt}};oa.geo.path=function(){function n(n){return n&&("function"==typeof o&&i.pointRadius(+o.apply(this,arguments)),a&&a.valid||(a=u(i)),oa.geo.stream(n,a)),i.result()}function t(){return a=null,n}var e,r,u,i,a,o=4.5;return n.area=function(n){return Ho=0,oa.geo.stream(n,u(Xo)),Ho},n.centroid=function(n){return Ao=Co=zo=Lo=qo=To=Ro=Do=Po=0,oa.geo.stream(n,u(Bo)),Po?[Ro/Po,Do/Po]:To?[Lo/To,qo/To]:zo?[Ao/zo,Co/zo]:[NaN,NaN]},n.bounds=function(n){return Zo=Vo=-(Io=Yo=1/0),oa.geo.stream(n,u($o)),[[Io,Yo],[Zo,Vo]]},n.projection=function(n){return arguments.length?(u=(e=n)?n.stream||re(n):y,t()):e},n.context=function(n){return arguments.length?(i=null==(r=n)?new Wt:new te(n),"function"!=typeof o&&i.pointRadius(o),t()):r},n.pointRadius=function(t){return arguments.length?(o="function"==typeof t?t:(i.pointRadius(+t),+t),n):o},n.projection(oa.geo.albersUsa()).context(null)},oa.geo.transform=function(n){return{stream:function(t){var e=new ue(t);for(var r in n)e[r]=n[r];return e}}},ue.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},oa.geo.projection=ae,oa.geo.projectionMutator=oe,(oa.geo.equirectangular=function(){return ae(ce)}).raw=ce.invert=ce,oa.geo.rotation=function(n){function t(t){return t=n(t[0]*Oa,t[1]*Oa),t[0]*=Ia,t[1]*=Ia,t}return n=fe(n[0]%360*Oa,n[1]*Oa,n.length>2?n[2]*Oa:0),t.invert=function(t){return t=n.invert(t[0]*Oa,t[1]*Oa),t[0]*=Ia,t[1]*=Ia,t},t},se.invert=ce,oa.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=fe(-n[0]*Oa,-n[1]*Oa,0).invert,u=[];return e(null,null,1,{point:function(n,e){u.push(n=t(n,e)),n[0]*=Ia,n[1]*=Ia}}),{type:"Polygon",coordinates:[u]}}var t,e,r=[0,0],u=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=ve((t=+r)*Oa,u*Oa),n):t},n.precision=function(r){return arguments.length?(e=ve(t*Oa,(u=+r)*Oa),n):u},n.angle(90)},oa.geo.distance=function(n,t){var e,r=(t[0]-n[0])*Oa,u=n[1]*Oa,i=t[1]*Oa,a=Math.sin(r),o=Math.cos(r),l=Math.sin(u),c=Math.cos(u),s=Math.sin(i),f=Math.cos(i);return Math.atan2(Math.sqrt((e=f*a)*e+(e=c*s-l*f*o)*e),l*s+c*f*o)},oa.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return oa.range(Math.ceil(i/d)*d,u,d).map(h).concat(oa.range(Math.ceil(c/m)*m,l,m).map(g)).concat(oa.range(Math.ceil(r/p)*p,e,p).filter(function(n){return Ma(n%d)>Da}).map(s)).concat(oa.range(Math.ceil(o/v)*v,a,v).filter(function(n){return Ma(n%m)>Da}).map(f))}var e,r,u,i,a,o,l,c,s,f,h,g,p=10,v=p,d=90,m=360,y=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(i).concat(g(l).slice(1),h(u).reverse().slice(1),g(c).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(i=+t[0][0],u=+t[1][0],c=+t[0][1],l=+t[1][1],i>u&&(t=i,i=u,u=t),c>l&&(t=c,c=l,l=t),n.precision(y)):[[i,c],[u,l]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],o=+t[0][1],a=+t[1][1],r>e&&(t=r,r=e,e=t),o>a&&(t=o,o=a,a=t),n.precision(y)):[[r,o],[e,a]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(d=+t[0],m=+t[1],n):[d,m]},n.minorStep=function(t){return arguments.length?(p=+t[0],v=+t[1],n):[p,v]},n.precision=function(t){return arguments.length?(y=+t,s=me(o,a,90),f=ye(r,e,y),h=me(c,l,90),g=ye(i,u,y),n):y},n.majorExtent([[-180,-90+Da],[180,90-Da]]).minorExtent([[-180,-80-Da],[180,80+Da]])},oa.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||u.apply(this,arguments)]}}var t,e,r=Me,u=xe;return n.distance=function(){return oa.geo.distance(t||r.apply(this,arguments),e||u.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(u=t,e="function"==typeof t?null:t,n):u},n.precision=function(){return arguments.length?n:0},n},oa.geo.interpolate=function(n,t){return be(n[0]*Oa,n[1]*Oa,t[0]*Oa,t[1]*Oa)},oa.geo.length=function(n){return Wo=0,oa.geo.stream(n,Jo),Wo};var Wo,Jo={sphere:b,point:b,lineStart:_e,lineEnd:b,polygonStart:b,polygonEnd:b},Go=we(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(oa.geo.azimuthalEqualArea=function(){return ae(Go)}).raw=Go;var Ko=we(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},y);(oa.geo.azimuthalEquidistant=function(){return ae(Ko)}).raw=Ko,(oa.geo.conicConformal=function(){return Vt(Se)}).raw=Se,(oa.geo.conicEquidistant=function(){return Vt(ke)}).raw=ke;var Qo=we(function(n){return 1/n},Math.atan);(oa.geo.gnomonic=function(){return ae(Qo)}).raw=Qo,Ne.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-Ha]},(oa.geo.mercator=function(){return Ee(Ne)}).raw=Ne;var nl=we(function(){return 1},Math.asin);(oa.geo.orthographic=function(){return ae(nl)}).raw=nl;var tl=we(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(oa.geo.stereographic=function(){return ae(tl)}).raw=tl,Ae.invert=function(n,t){return[-t,2*Math.atan(Math.exp(n))-Ha]},(oa.geo.transverseMercator=function(){var n=Ee(Ae),t=n.center,e=n.rotate;return n.center=function(n){return n?t([-n[1],n[0]]):(n=t(),[n[1],-n[0]])},n.rotate=function(n){return n?e([n[0],n[1],n.length>2?n[2]+90:90]):(n=e(),[n[0],n[1],n[2]-90])},e([0,0,90])}).raw=Ae,oa.geom={},oa.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,u=En(e),i=En(r),a=n.length,o=[],l=[];for(t=0;a>t;t++)o.push([+u.call(this,n[t],t),+i.call(this,n[t],t),t]);for(o.sort(qe),t=0;a>t;t++)l.push([o[t][0],-o[t][1]]);var c=Le(o),s=Le(l),f=s[0]===c[0],h=s[s.length-1]===c[c.length-1],g=[];for(t=c.length-1;t>=0;--t)g.push(n[o[c[t]][2]]);for(t=+f;t<s.length-h;++t)g.push(n[o[s[t]][2]]);return g}var e=Ce,r=ze;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},oa.geom.polygon=function(n){return Sa(n,el),n};var el=oa.geom.polygon.prototype=[];el.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],u=0;++t<e;)n=r,r=this[t],u+=n[1]*r[0]-n[0]*r[1];return.5*u},el.centroid=function(n){var t,e,r=-1,u=this.length,i=0,a=0,o=this[u-1];for(arguments.length||(n=-1/(6*this.area()));++r<u;)t=o,o=this[r],e=t[0]*o[1]-o[0]*t[1],i+=(t[0]+o[0])*e,a+=(t[1]+o[1])*e;return[i*n,a*n]},el.clip=function(n){for(var t,e,r,u,i,a,o=De(n),l=-1,c=this.length-De(this),s=this[c-1];++l<c;){for(t=n.slice(),n.length=0,u=this[l],i=t[(r=t.length-o)-1],e=-1;++e<r;)a=t[e],Te(a,s,u)?(Te(i,s,u)||n.push(Re(i,a,s,u)),n.push(a)):Te(i,s,u)&&n.push(Re(i,a,s,u)),i=a;o&&n.push(n[0]),s=u}return n};var rl,ul,il,al,ol,ll=[],cl=[];Ye.prototype.prepare=function(){for(var n,t=this.edges,e=t.length;e--;)n=t[e].edge,n.b&&n.a||t.splice(e,1);return t.sort(Ve),t.length},tr.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},er.prototype={insert:function(n,t){var e,r,u;if(n){if(t.P=n,t.N=n.N,n.N&&(n.N.P=t),n.N=t,n.R){for(n=n.R;n.L;)n=n.L;n.L=t}else n.R=t;e=n}else this._?(n=ar(this._),t.P=null,t.N=n,n.P=n.L=t,e=n):(t.P=t.N=null,this._=t,e=null);for(t.L=t.R=null,t.U=e,t.C=!0,n=t;e&&e.C;)r=e.U,e===r.L?(u=r.R,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.R&&(ur(this,e),n=e,e=n.U),e.C=!1,r.C=!0,ir(this,r))):(u=r.L,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.L&&(ir(this,e),n=e,e=n.U),e.C=!1,r.C=!0,ur(this,r))),e=n.U;this._.C=!1},remove:function(n){n.N&&(n.N.P=n.P),n.P&&(n.P.N=n.N),n.N=n.P=null;var t,e,r,u=n.U,i=n.L,a=n.R;if(e=i?a?ar(a):i:a,u?u.L===n?u.L=e:u.R=e:this._=e,i&&a?(r=e.C,e.C=n.C,e.L=i,i.U=e,e!==a?(u=e.U,e.U=n.U,n=e.R,u.L=n,e.R=a,a.U=e):(e.U=u,u=e,n=e.R)):(r=n.C,n=e),n&&(n.U=u),!r){if(n&&n.C)return void(n.C=!1);do{if(n===this._)break;if(n===u.L){if(t=u.R,t.C&&(t.C=!1,u.C=!0,ur(this,u),t=u.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,ir(this,t),t=u.R),t.C=u.C,u.C=t.R.C=!1,ur(this,u),n=this._;break}}else if(t=u.L,t.C&&(t.C=!1,u.C=!0,ir(this,u),t=u.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,ur(this,t),t=u.L),t.C=u.C,u.C=t.L.C=!1,ir(this,u),n=this._;break}t.C=!0,n=u,u=u.U}while(!n.C);n&&(n.C=!1)}}},oa.geom.voronoi=function(n){function t(n){var t=new Array(n.length),r=o[0][0],u=o[0][1],i=o[1][0],a=o[1][1];return or(e(n),o).cells.forEach(function(e,o){var l=e.edges,c=e.site,s=t[o]=l.length?l.map(function(n){var t=n.start();return[t.x,t.y]}):c.x>=r&&c.x<=i&&c.y>=u&&c.y<=a?[[r,a],[i,a],[i,u],[r,u]]:[];s.point=n[o]}),t}function e(n){return n.map(function(n,t){return{x:Math.round(i(n,t)/Da)*Da,y:Math.round(a(n,t)/Da)*Da,i:t}})}var r=Ce,u=ze,i=r,a=u,o=sl;return n?t(n):(t.links=function(n){return or(e(n)).edges.filter(function(n){return n.l&&n.r}).map(function(t){return{source:n[t.l.i],target:n[t.r.i]}})},t.triangles=function(n){var t=[];return or(e(n)).cells.forEach(function(e,r){for(var u,i,a=e.site,o=e.edges.sort(Ve),l=-1,c=o.length,s=o[c-1].edge,f=s.l===a?s.r:s.l;++l<c;)u=s,i=f,s=o[l].edge,f=s.l===a?s.r:s.l,r<i.i&&r<f.i&&cr(a,i,f)<0&&t.push([n[r],n[i.i],n[f.i]])}),t},t.x=function(n){return arguments.length?(i=En(r=n),t):r},t.y=function(n){return arguments.length?(a=En(u=n),t):u},t.clipExtent=function(n){return arguments.length?(o=null==n?sl:n,t):o===sl?null:o},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):o===sl?null:o&&o[1]},t)};var sl=[[-1e6,-1e6],[1e6,1e6]];oa.geom.delaunay=function(n){return oa.geom.voronoi().triangles(n)},oa.geom.quadtree=function(n,t,e,r,u){function i(n){function i(n,t,e,r,u,i,a,o){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var l=n.x,s=n.y;if(null!=l)if(Ma(l-e)+Ma(s-r)<.01)c(n,t,e,r,u,i,a,o);else{var f=n.point;n.x=n.y=n.point=null,c(n,f,l,s,u,i,a,o),c(n,t,e,r,u,i,a,o)}else n.x=e,n.y=r,n.point=t}else c(n,t,e,r,u,i,a,o)}function c(n,t,e,r,u,a,o,l){var c=.5*(u+o),s=.5*(a+l),f=e>=c,h=r>=s,g=h<<1|f;n.leaf=!1,n=n.nodes[g]||(n.nodes[g]=hr()),f?u=c:o=c,h?a=s:l=s,i(n,t,e,r,u,a,o,l)}var s,f,h,g,p,v,d,m,y,M=En(o),x=En(l);if(null!=t)v=t,d=e,m=r,y=u;else if(m=y=-(v=d=1/0),f=[],h=[],p=n.length,a)for(g=0;p>g;++g)s=n[g],s.x<v&&(v=s.x),s.y<d&&(d=s.y),s.x>m&&(m=s.x),s.y>y&&(y=s.y),f.push(s.x),h.push(s.y);else for(g=0;p>g;++g){var b=+M(s=n[g],g),_=+x(s,g);v>b&&(v=b),d>_&&(d=_),b>m&&(m=b),_>y&&(y=_),f.push(b),h.push(_)}var w=m-v,S=y-d;w>S?y=d+w:m=v+S;var k=hr();if(k.add=function(n){i(k,n,+M(n,++g),+x(n,g),v,d,m,y)},k.visit=function(n){gr(n,k,v,d,m,y)},k.find=function(n){return pr(k,n[0],n[1],v,d,m,y)},g=-1,null==t){for(;++g<p;)i(k,n[g],f[g],h[g],v,d,m,y);--g}else n.forEach(k.add);return f=h=n=s=null,k}var a,o=Ce,l=ze;return(a=arguments.length)?(o=sr,l=fr,3===a&&(u=e,r=t,e=t=0),i(n)):(i.x=function(n){return arguments.length?(o=n,i):o},i.y=function(n){return arguments.length?(l=n,i):l},i.extent=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],u=+n[1][1]),i):null==t?null:[[t,e],[r,u]]},i.size=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=e=0,r=+n[0],u=+n[1]),i):null==t?null:[r-t,u-e]},i)},oa.interpolateRgb=vr,oa.interpolateObject=dr,oa.interpolateNumber=mr,oa.interpolateString=yr;var fl=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,hl=new RegExp(fl.source,"g");oa.interpolate=Mr,oa.interpolators=[function(n,t){var e=typeof t;return("string"===e?ro.has(t.toLowerCase())||/^(#|rgb\(|hsl\()/i.test(t)?vr:yr:t instanceof on?vr:Array.isArray(t)?xr:"object"===e&&isNaN(t)?dr:mr)(n,t)}],oa.interpolateArray=xr;var gl=function(){return y},pl=oa.map({linear:gl,poly:Er,quad:function(){return Sr},cubic:function(){return kr},sin:function(){return Ar},exp:function(){return Cr},circle:function(){return zr},elastic:Lr,back:qr,bounce:function(){return Tr}}),vl=oa.map({"in":y,out:_r,"in-out":wr,"out-in":function(n){return wr(_r(n))}});oa.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.slice(0,t):n,r=t>=0?n.slice(t+1):"in";return e=pl.get(e)||gl,r=vl.get(r)||y,br(r(e.apply(null,la.call(arguments,1))))},oa.interpolateHcl=Rr,oa.interpolateHsl=Dr,oa.interpolateLab=Pr,oa.interpolateRound=jr,oa.transform=function(n){var t=sa.createElementNS(oa.ns.prefix.svg,"g");return(oa.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new Ur(e?e.matrix:dl)})(n)},Ur.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var dl={a:1,b:0,c:0,d:1,e:0,f:0};oa.interpolateTransform=$r,oa.layout={},oa.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(Jr(n[e]));return t}},oa.layout.chord=function(){function n(){var n,c,f,h,g,p={},v=[],d=oa.range(i),m=[];for(e=[],r=[],n=0,h=-1;++h<i;){for(c=0,g=-1;++g<i;)c+=u[h][g];v.push(c),m.push(oa.range(i)),n+=c}for(a&&d.sort(function(n,t){return a(v[n],v[t])}),o&&m.forEach(function(n,t){n.sort(function(n,e){return o(u[t][n],u[t][e])})}),n=(Ua-s*i)/n,c=0,h=-1;++h<i;){for(f=c,g=-1;++g<i;){var y=d[h],M=m[y][g],x=u[y][M],b=c,_=c+=x*n;p[y+"-"+M]={index:y,subindex:M,startAngle:b,endAngle:_,value:x}}r[y]={index:y,startAngle:f,endAngle:c,value:v[y]},c+=s}for(h=-1;++h<i;)for(g=h-1;++g<i;){var w=p[h+"-"+g],S=p[g+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}l&&t()}function t(){e.sort(function(n,t){return l((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,u,i,a,o,l,c={},s=0;return c.matrix=function(n){return arguments.length?(i=(u=n)&&u.length,e=r=null,c):u},c.padding=function(n){return arguments.length?(s=n,e=r=null,c):s},c.sortGroups=function(n){return arguments.length?(a=n,e=r=null,c):a},c.sortSubgroups=function(n){return arguments.length?(o=n,e=null,c):o},c.sortChords=function(n){return arguments.length?(l=n,e&&t(),c):l},c.chords=function(){return e||n(),e},c.groups=function(){return r||n(),r},c},oa.layout.force=function(){function n(n){return function(t,e,r,u){if(t.point!==n){var i=t.cx-n.x,a=t.cy-n.y,o=u-e,l=i*i+a*a;if(l>o*o/m){if(v>l){var c=t.charge/l;n.px-=i*c,n.py-=a*c}return!0}if(t.point&&l&&v>l){var c=t.pointCharge/l;n.px-=i*c,n.py-=a*c}}return!t.charge}}function t(n){n.px=oa.event.x,n.py=oa.event.y,l.resume()}var e,r,u,i,a,o,l={},c=oa.dispatch("start","tick","end"),s=[1,1],f=.9,h=ml,g=yl,p=-30,v=Ml,d=.1,m=.64,M=[],x=[];return l.tick=function(){if((u*=.99)<.005)return e=null,c.end({type:"end",alpha:u=0}),!0;var t,r,l,h,g,v,m,y,b,_=M.length,w=x.length;for(r=0;w>r;++r)l=x[r],h=l.source,g=l.target,y=g.x-h.x,b=g.y-h.y,(v=y*y+b*b)&&(v=u*a[r]*((v=Math.sqrt(v))-i[r])/v,y*=v,b*=v,g.x-=y*(m=h.weight+g.weight?h.weight/(h.weight+g.weight):.5),g.y-=b*m,h.x+=y*(m=1-m),h.y+=b*m);if((m=u*d)&&(y=s[0]/2,b=s[1]/2,r=-1,m))for(;++r<_;)l=M[r],l.x+=(y-l.x)*m,l.y+=(b-l.y)*m;if(p)for(ru(t=oa.geom.quadtree(M),u,o),r=-1;++r<_;)(l=M[r]).fixed||t.visit(n(l));for(r=-1;++r<_;)l=M[r],l.fixed?(l.x=l.px,l.y=l.py):(l.x-=(l.px-(l.px=l.x))*f,l.y-=(l.py-(l.py=l.y))*f);c.tick({type:"tick",alpha:u})},l.nodes=function(n){return arguments.length?(M=n,l):M},l.links=function(n){return arguments.length?(x=n,l):x},l.size=function(n){return arguments.length?(s=n,l):s},l.linkDistance=function(n){return arguments.length?(h="function"==typeof n?n:+n,l):h},l.distance=l.linkDistance,l.linkStrength=function(n){return arguments.length?(g="function"==typeof n?n:+n,l):g},l.friction=function(n){return arguments.length?(f=+n,l):f},l.charge=function(n){return arguments.length?(p="function"==typeof n?n:+n,l):p},l.chargeDistance=function(n){return arguments.length?(v=n*n,l):Math.sqrt(v)},l.gravity=function(n){return arguments.length?(d=+n,l):d},l.theta=function(n){return arguments.length?(m=n*n,l):Math.sqrt(m)},l.alpha=function(n){return arguments.length?(n=+n,u?n>0?u=n:(e.c=null,e.t=NaN,e=null,c.end({type:"end",alpha:u=0})):n>0&&(c.start({type:"start",alpha:u=n}),e=qn(l.tick)),l):u},l.start=function(){function n(n,r){if(!e){for(e=new Array(u),l=0;u>l;++l)e[l]=[];for(l=0;c>l;++l){var i=x[l];e[i.source.index].push(i.target),e[i.target.index].push(i.source)}}for(var a,o=e[t],l=-1,s=o.length;++l<s;)if(!isNaN(a=o[l][n]))return a;return Math.random()*r}var t,e,r,u=M.length,c=x.length,f=s[0],v=s[1];for(t=0;u>t;++t)(r=M[t]).index=t,r.weight=0;for(t=0;c>t;++t)r=x[t],"number"==typeof r.source&&(r.source=M[r.source]),"number"==typeof r.target&&(r.target=M[r.target]),++r.source.weight,++r.target.weight;for(t=0;u>t;++t)r=M[t],isNaN(r.x)&&(r.x=n("x",f)),isNaN(r.y)&&(r.y=n("y",v)),isNaN(r.px)&&(r.px=r.x),isNaN(r.py)&&(r.py=r.y);if(i=[],"function"==typeof h)for(t=0;c>t;++t)i[t]=+h.call(this,x[t],t);else for(t=0;c>t;++t)i[t]=h;if(a=[],"function"==typeof g)for(t=0;c>t;++t)a[t]=+g.call(this,x[t],t);else for(t=0;c>t;++t)a[t]=g;if(o=[],"function"==typeof p)for(t=0;u>t;++t)o[t]=+p.call(this,M[t],t);else for(t=0;u>t;++t)o[t]=p;return l.resume()},l.resume=function(){return l.alpha(.1)},l.stop=function(){return l.alpha(0)},l.drag=function(){return r||(r=oa.behavior.drag().origin(y).on("dragstart.force",Qr).on("drag.force",t).on("dragend.force",nu)),arguments.length?void this.on("mouseover.force",tu).on("mouseout.force",eu).call(r):r},oa.rebind(l,c,"on")};var ml=20,yl=1,Ml=1/0;oa.layout.hierarchy=function(){function n(u){var i,a=[u],o=[];for(u.depth=0;null!=(i=a.pop());)if(o.push(i),(c=e.call(n,i,i.depth))&&(l=c.length)){for(var l,c,s;--l>=0;)a.push(s=c[l]),s.parent=i,s.depth=i.depth+1;r&&(i.value=0),i.children=c}else r&&(i.value=+r.call(n,i,i.depth)||0),delete i.children;return au(u,function(n){var e,u;t&&(e=n.children)&&e.sort(t),r&&(u=n.parent)&&(u.value+=n.value)}),o}var t=cu,e=ou,r=lu;return n.sort=function(e){return arguments.length?(t=e,n):t},n.children=function(t){return arguments.length?(e=t,n):e},n.value=function(t){return arguments.length?(r=t,n):r},n.revalue=function(t){return r&&(iu(t,function(n){n.children&&(n.value=0)}),au(t,function(t){var e;t.children||(t.value=+r.call(n,t,t.depth)||0),(e=t.parent)&&(e.value+=t.value)})),t},n},oa.layout.partition=function(){function n(t,e,r,u){var i=t.children;if(t.x=e,t.y=t.depth*u,t.dx=r,t.dy=u,i&&(a=i.length)){var a,o,l,c=-1;for(r=t.value?r/t.value:0;++c<a;)n(o=i[c],e,l=o.value*r,u),e+=l}}function t(n){var e=n.children,r=0;if(e&&(u=e.length))for(var u,i=-1;++i<u;)r=Math.max(r,t(e[i]));return 1+r}function e(e,i){var a=r.call(this,e,i);return n(a[0],0,u[0],u[1]/t(a[0])),a}var r=oa.layout.hierarchy(),u=[1,1];return e.size=function(n){return arguments.length?(u=n,e):u},uu(e,r)},oa.layout.pie=function(){function n(a){var o,l=a.length,c=a.map(function(e,r){return+t.call(n,e,r)}),s=+("function"==typeof r?r.apply(this,arguments):r),f=("function"==typeof u?u.apply(this,arguments):u)-s,h=Math.min(Math.abs(f)/l,+("function"==typeof i?i.apply(this,arguments):i)),g=h*(0>f?-1:1),p=oa.sum(c),v=p?(f-l*g)/p:0,d=oa.range(l),m=[];return null!=e&&d.sort(e===xl?function(n,t){return c[t]-c[n]}:function(n,t){return e(a[n],a[t])}),d.forEach(function(n){m[n]={data:a[n],value:o=c[n],startAngle:s,endAngle:s+=o*v+g,padAngle:h}}),m}var t=Number,e=xl,r=0,u=Ua,i=0;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(u=t,n):u},n.padAngle=function(t){return arguments.length?(i=t,n):i},n};var xl={};oa.layout.stack=function(){function n(o,l){if(!(h=o.length))return o;var c=o.map(function(e,r){return t.call(n,e,r)}),s=c.map(function(t){return t.map(function(t,e){return[i.call(n,t,e),a.call(n,t,e)]})}),f=e.call(n,s,l);c=oa.permute(c,f),s=oa.permute(s,f);var h,g,p,v,d=r.call(n,s,l),m=c[0].length;for(p=0;m>p;++p)for(u.call(n,c[0][p],v=d[p],s[0][p][1]),g=1;h>g;++g)u.call(n,c[g][p],v+=s[g-1][p][1],s[g][p][1]);return o}var t=y,e=pu,r=vu,u=gu,i=fu,a=hu;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:bl.get(t)||pu,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:_l.get(t)||vu,n):r},n.x=function(t){return arguments.length?(i=t,n):i},n.y=function(t){return arguments.length?(a=t,n):a},n.out=function(t){return arguments.length?(u=t,n):u},n};var bl=oa.map({"inside-out":function(n){var t,e,r=n.length,u=n.map(du),i=n.map(mu),a=oa.range(r).sort(function(n,t){return u[n]-u[t]}),o=0,l=0,c=[],s=[];for(t=0;r>t;++t)e=a[t],l>o?(o+=i[e],c.push(e)):(l+=i[e],s.push(e));return s.reverse().concat(c)},reverse:function(n){return oa.range(n.length).reverse()},"default":pu}),_l=oa.map({silhouette:function(n){var t,e,r,u=n.length,i=n[0].length,a=[],o=0,l=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];r>o&&(o=r),a.push(r)}for(e=0;i>e;++e)l[e]=(o-a[e])/2;return l},wiggle:function(n){var t,e,r,u,i,a,o,l,c,s=n.length,f=n[0],h=f.length,g=[];for(g[0]=l=c=0,e=1;h>e;++e){for(t=0,u=0;s>t;++t)u+=n[t][e][1];for(t=0,i=0,o=f[e][0]-f[e-1][0];s>t;++t){for(r=0,a=(n[t][e][1]-n[t][e-1][1])/(2*o);t>r;++r)a+=(n[r][e][1]-n[r][e-1][1])/o;i+=a*n[t][e][1]}g[e]=l-=u?i/u*o:0,c>l&&(c=l)}for(e=0;h>e;++e)g[e]-=c;return g},expand:function(n){var t,e,r,u=n.length,i=n[0].length,a=1/u,o=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];if(r)for(t=0;u>t;t++)n[t][e][1]/=r;else for(t=0;u>t;t++)n[t][e][1]=a}for(e=0;i>e;++e)o[e]=0;return o},zero:vu});oa.layout.histogram=function(){function n(n,i){for(var a,o,l=[],c=n.map(e,this),s=r.call(this,c,i),f=u.call(this,s,c,i),i=-1,h=c.length,g=f.length-1,p=t?1:1/h;++i<g;)a=l[i]=[],a.dx=f[i+1]-(a.x=f[i]),a.y=0;if(g>0)for(i=-1;++i<h;)o=c[i],o>=s[0]&&o<=s[1]&&(a=l[oa.bisect(f,o,1,g)-1],a.y+=p,a.push(n[i]));return l}var t=!0,e=Number,r=bu,u=Mu;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=En(t),n):r},n.bins=function(t){return arguments.length?(u="number"==typeof t?function(n){return xu(n,t)}:En(t),n):u},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},oa.layout.pack=function(){function n(n,i){var a=e.call(this,n,i),o=a[0],l=u[0],c=u[1],s=null==t?Math.sqrt:"function"==typeof t?t:function(){return t};if(o.x=o.y=0,au(o,function(n){n.r=+s(n.value)}),au(o,Nu),r){var f=r*(t?1:Math.max(2*o.r/l,2*o.r/c))/2;au(o,function(n){n.r+=f}),au(o,Nu),au(o,function(n){n.r-=f})}return Cu(o,l/2,c/2,t?1:1/Math.max(2*o.r/l,2*o.r/c)),a}var t,e=oa.layout.hierarchy().sort(_u),r=0,u=[1,1];return n.size=function(t){return arguments.length?(u=t,n):u},n.radius=function(e){return arguments.length?(t=null==e||"function"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},uu(n,e)},oa.layout.tree=function(){function n(n,u){var s=a.call(this,n,u),f=s[0],h=t(f);if(au(h,e),h.parent.m=-h.z,iu(h,r),c)iu(f,i);else{var g=f,p=f,v=f;iu(f,function(n){n.x<g.x&&(g=n),n.x>p.x&&(p=n),n.depth>v.depth&&(v=n)});var d=o(g,p)/2-g.x,m=l[0]/(p.x+o(p,g)/2+d),y=l[1]/(v.depth||1);iu(f,function(n){n.x=(n.x+d)*m,n.y=n.depth*y})}return s}function t(n){for(var t,e={A:null,children:[n]},r=[e];null!=(t=r.pop());)for(var u,i=t.children,a=0,o=i.length;o>a;++a)r.push((i[a]=u={_:i[a],parent:t,children:(u=i[a].children)&&u.slice()||[],A:null,a:null,z:0,m:0,c:0,s:0,t:null,i:a}).a=u);return e.children[0]}function e(n){var t=n.children,e=n.parent.children,r=n.i?e[n.i-1]:null;if(t.length){Du(n);var i=(t[0].z+t[t.length-1].z)/2;r?(n.z=r.z+o(n._,r._),n.m=n.z-i):n.z=i}else r&&(n.z=r.z+o(n._,r._));n.parent.A=u(n,r,n.parent.A||e[0])}function r(n){n._.x=n.z+n.parent.m,n.m+=n.parent.m}function u(n,t,e){if(t){for(var r,u=n,i=n,a=t,l=u.parent.children[0],c=u.m,s=i.m,f=a.m,h=l.m;a=Tu(a),u=qu(u),a&&u;)l=qu(l),i=Tu(i),i.a=n,r=a.z+f-u.z-c+o(a._,u._),r>0&&(Ru(Pu(a,n,e),n,r),c+=r,s+=r),f+=a.m,c+=u.m,h+=l.m,s+=i.m;a&&!Tu(i)&&(i.t=a,i.m+=f-s),u&&!qu(l)&&(l.t=u,l.m+=c-h,e=n)}return e}function i(n){n.x*=l[0],n.y=n.depth*l[1]}var a=oa.layout.hierarchy().sort(null).value(null),o=Lu,l=[1,1],c=null;return n.separation=function(t){return arguments.length?(o=t,n):o},n.size=function(t){return arguments.length?(c=null==(l=t)?i:null,n):c?null:l},n.nodeSize=function(t){return arguments.length?(c=null==(l=t)?null:i,n):c?l:null},uu(n,a)},oa.layout.cluster=function(){function n(n,i){var a,o=t.call(this,n,i),l=o[0],c=0;au(l,function(n){var t=n.children;t&&t.length?(n.x=Uu(t),n.y=ju(t)):(n.x=a?c+=e(n,a):0,n.y=0,a=n)});var s=Fu(l),f=Hu(l),h=s.x-e(s,f)/2,g=f.x+e(f,s)/2;return au(l,u?function(n){n.x=(n.x-l.x)*r[0],n.y=(l.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(g-h)*r[0],n.y=(1-(l.y?n.y/l.y:1))*r[1]}),o}var t=oa.layout.hierarchy().sort(null).value(null),e=Lu,r=[1,1],u=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(u=null==(r=t),n):u?null:r},n.nodeSize=function(t){return arguments.length?(u=null!=(r=t),n):u?r:null},uu(n,t)},oa.layout.treemap=function(){function n(n,t){for(var e,r,u=-1,i=n.length;++u<i;)r=(e=n[u]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var i=e.children;if(i&&i.length){var a,o,l,c=f(e),s=[],h=i.slice(),p=1/0,v="slice"===g?c.dx:"dice"===g?c.dy:"slice-dice"===g?1&e.depth?c.dy:c.dx:Math.min(c.dx,c.dy);for(n(h,c.dx*c.dy/e.value),s.area=0;(l=h.length)>0;)s.push(a=h[l-1]),s.area+=a.area,"squarify"!==g||(o=r(s,v))<=p?(h.pop(),p=o):(s.area-=s.pop().area,u(s,v,c,!1),v=Math.min(c.dx,c.dy),s.length=s.area=0,p=1/0);s.length&&(u(s,v,c,!0),s.length=s.area=0),i.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var i,a=f(t),o=r.slice(),l=[];for(n(o,a.dx*a.dy/t.value),l.area=0;i=o.pop();)l.push(i),l.area+=i.area,null!=i.z&&(u(l,i.z?a.dx:a.dy,a,!o.length),l.length=l.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,u=0,i=1/0,a=-1,o=n.length;++a<o;)(e=n[a].area)&&(i>e&&(i=e),e>u&&(u=e));return r*=r,t*=t,r?Math.max(t*u*p/r,r/(t*i*p)):1/0}function u(n,t,e,r){var u,i=-1,a=n.length,o=e.x,c=e.y,s=t?l(n.area/t):0;
if(t==e.dx){for((r||s>e.dy)&&(s=e.dy);++i<a;)u=n[i],u.x=o,u.y=c,u.dy=s,o+=u.dx=Math.min(e.x+e.dx-o,s?l(u.area/s):0);u.z=!0,u.dx+=e.x+e.dx-o,e.y+=s,e.dy-=s}else{for((r||s>e.dx)&&(s=e.dx);++i<a;)u=n[i],u.x=o,u.y=c,u.dx=s,c+=u.dy=Math.min(e.y+e.dy-c,s?l(u.area/s):0);u.z=!1,u.dy+=e.y+e.dy-c,e.x+=s,e.dx-=s}}function i(r){var u=a||o(r),i=u[0];return i.x=i.y=0,i.value?(i.dx=c[0],i.dy=c[1]):i.dx=i.dy=0,a&&o.revalue(i),n([i],i.dx*i.dy/i.value),(a?e:t)(i),h&&(a=u),u}var a,o=oa.layout.hierarchy(),l=Math.round,c=[1,1],s=null,f=Ou,h=!1,g="squarify",p=.5*(1+Math.sqrt(5));return i.size=function(n){return arguments.length?(c=n,i):c},i.padding=function(n){function t(t){var e=n.call(i,t,t.depth);return null==e?Ou(t):Iu(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return Iu(t,n)}if(!arguments.length)return s;var r;return f=null==(s=n)?Ou:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,i},i.round=function(n){return arguments.length?(l=n?Math.round:Number,i):l!=Number},i.sticky=function(n){return arguments.length?(h=n,a=null,i):h},i.ratio=function(n){return arguments.length?(p=n,i):p},i.mode=function(n){return arguments.length?(g=n+"",i):g},uu(i,o)},oa.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,u;do e=2*Math.random()-1,r=2*Math.random()-1,u=e*e+r*r;while(!u||u>1);return n+t*e*Math.sqrt(-2*Math.log(u)/u)}},logNormal:function(){var n=oa.random.normal.apply(oa,arguments);return function(){return Math.exp(n())}},bates:function(n){var t=oa.random.irwinHall(n);return function(){return t()/n}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t}}},oa.scale={};var wl={floor:y,ceil:y};oa.scale.linear=function(){return Wu([0,1],[0,1],Mr,!1)};var Sl={s:1,g:1,p:1,r:1,e:1};oa.scale.log=function(){return ri(oa.scale.linear().domain([0,1]),10,!0,[1,10])};var kl=oa.format(".0e"),Nl={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};oa.scale.pow=function(){return ui(oa.scale.linear(),1,[0,1])},oa.scale.sqrt=function(){return oa.scale.pow().exponent(.5)},oa.scale.ordinal=function(){return ai([],{t:"range",a:[[]]})},oa.scale.category10=function(){return oa.scale.ordinal().range(El)},oa.scale.category20=function(){return oa.scale.ordinal().range(Al)},oa.scale.category20b=function(){return oa.scale.ordinal().range(Cl)},oa.scale.category20c=function(){return oa.scale.ordinal().range(zl)};var El=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(xn),Al=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(xn),Cl=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(xn),zl=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(xn);oa.scale.quantile=function(){return oi([],[])},oa.scale.quantize=function(){return li(0,1,[0,1])},oa.scale.threshold=function(){return ci([.5],[0,1])},oa.scale.identity=function(){return si([0,1])},oa.svg={},oa.svg.arc=function(){function n(){var n=Math.max(0,+e.apply(this,arguments)),c=Math.max(0,+r.apply(this,arguments)),s=a.apply(this,arguments)-Ha,f=o.apply(this,arguments)-Ha,h=Math.abs(f-s),g=s>f?0:1;if(n>c&&(p=c,c=n,n=p),h>=Fa)return t(c,g)+(n?t(n,1-g):"")+"Z";var p,v,d,m,y,M,x,b,_,w,S,k,N=0,E=0,A=[];if((m=(+l.apply(this,arguments)||0)/2)&&(d=i===Ll?Math.sqrt(n*n+c*c):+i.apply(this,arguments),g||(E*=-1),c&&(E=tn(d/c*Math.sin(m))),n&&(N=tn(d/n*Math.sin(m)))),c){y=c*Math.cos(s+E),M=c*Math.sin(s+E),x=c*Math.cos(f-E),b=c*Math.sin(f-E);var C=Math.abs(f-s-2*E)<=ja?0:1;if(E&&mi(y,M,x,b)===g^C){var z=(s+f)/2;y=c*Math.cos(z),M=c*Math.sin(z),x=b=null}}else y=M=0;if(n){_=n*Math.cos(f-N),w=n*Math.sin(f-N),S=n*Math.cos(s+N),k=n*Math.sin(s+N);var L=Math.abs(s-f+2*N)<=ja?0:1;if(N&&mi(_,w,S,k)===1-g^L){var q=(s+f)/2;_=n*Math.cos(q),w=n*Math.sin(q),S=k=null}}else _=w=0;if(h>Da&&(p=Math.min(Math.abs(c-n)/2,+u.apply(this,arguments)))>.001){v=c>n^g?0:1;var T=p,R=p;if(ja>h){var D=null==S?[_,w]:null==x?[y,M]:Re([y,M],[S,k],[x,b],[_,w]),P=y-D[0],j=M-D[1],U=x-D[0],F=b-D[1],H=1/Math.sin(Math.acos((P*U+j*F)/(Math.sqrt(P*P+j*j)*Math.sqrt(U*U+F*F)))/2),O=Math.sqrt(D[0]*D[0]+D[1]*D[1]);R=Math.min(p,(n-O)/(H-1)),T=Math.min(p,(c-O)/(H+1))}if(null!=x){var I=yi(null==S?[_,w]:[S,k],[y,M],c,T,g),Y=yi([x,b],[_,w],c,T,g);p===T?A.push("M",I[0],"A",T,",",T," 0 0,",v," ",I[1],"A",c,",",c," 0 ",1-g^mi(I[1][0],I[1][1],Y[1][0],Y[1][1]),",",g," ",Y[1],"A",T,",",T," 0 0,",v," ",Y[0]):A.push("M",I[0],"A",T,",",T," 0 1,",v," ",Y[0])}else A.push("M",y,",",M);if(null!=S){var Z=yi([y,M],[S,k],n,-R,g),V=yi([_,w],null==x?[y,M]:[x,b],n,-R,g);p===R?A.push("L",V[0],"A",R,",",R," 0 0,",v," ",V[1],"A",n,",",n," 0 ",g^mi(V[1][0],V[1][1],Z[1][0],Z[1][1]),",",1-g," ",Z[1],"A",R,",",R," 0 0,",v," ",Z[0]):A.push("L",V[0],"A",R,",",R," 0 0,",v," ",Z[0])}else A.push("L",_,",",w)}else A.push("M",y,",",M),null!=x&&A.push("A",c,",",c," 0 ",C,",",g," ",x,",",b),A.push("L",_,",",w),null!=S&&A.push("A",n,",",n," 0 ",L,",",1-g," ",S,",",k);return A.push("Z"),A.join("")}function t(n,t){return"M0,"+n+"A"+n+","+n+" 0 1,"+t+" 0,"+-n+"A"+n+","+n+" 0 1,"+t+" 0,"+n}var e=hi,r=gi,u=fi,i=Ll,a=pi,o=vi,l=di;return n.innerRadius=function(t){return arguments.length?(e=En(t),n):e},n.outerRadius=function(t){return arguments.length?(r=En(t),n):r},n.cornerRadius=function(t){return arguments.length?(u=En(t),n):u},n.padRadius=function(t){return arguments.length?(i=t==Ll?Ll:En(t),n):i},n.startAngle=function(t){return arguments.length?(a=En(t),n):a},n.endAngle=function(t){return arguments.length?(o=En(t),n):o},n.padAngle=function(t){return arguments.length?(l=En(t),n):l},n.centroid=function(){var n=(+e.apply(this,arguments)+ +r.apply(this,arguments))/2,t=(+a.apply(this,arguments)+ +o.apply(this,arguments))/2-Ha;return[Math.cos(t)*n,Math.sin(t)*n]},n};var Ll="auto";oa.svg.line=function(){return Mi(y)};var ql=oa.map({linear:xi,"linear-closed":bi,step:_i,"step-before":wi,"step-after":Si,basis:zi,"basis-open":Li,"basis-closed":qi,bundle:Ti,cardinal:Ei,"cardinal-open":ki,"cardinal-closed":Ni,monotone:Fi});ql.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var Tl=[0,2/3,1/3,0],Rl=[0,1/3,2/3,0],Dl=[0,1/6,2/3,1/6];oa.svg.line.radial=function(){var n=Mi(Hi);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},wi.reverse=Si,Si.reverse=wi,oa.svg.area=function(){return Oi(y)},oa.svg.area.radial=function(){var n=Oi(Hi);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},oa.svg.chord=function(){function n(n,o){var l=t(this,i,n,o),c=t(this,a,n,o);return"M"+l.p0+r(l.r,l.p1,l.a1-l.a0)+(e(l,c)?u(l.r,l.p1,l.r,l.p0):u(l.r,l.p1,c.r,c.p0)+r(c.r,c.p1,c.a1-c.a0)+u(c.r,c.p1,l.r,l.p0))+"Z"}function t(n,t,e,r){var u=t.call(n,e,r),i=o.call(n,u,r),a=l.call(n,u,r)-Ha,s=c.call(n,u,r)-Ha;return{r:i,a0:a,a1:s,p0:[i*Math.cos(a),i*Math.sin(a)],p1:[i*Math.cos(s),i*Math.sin(s)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>ja)+",1 "+t}function u(n,t,e,r){return"Q 0,0 "+r}var i=Me,a=xe,o=Ii,l=pi,c=vi;return n.radius=function(t){return arguments.length?(o=En(t),n):o},n.source=function(t){return arguments.length?(i=En(t),n):i},n.target=function(t){return arguments.length?(a=En(t),n):a},n.startAngle=function(t){return arguments.length?(l=En(t),n):l},n.endAngle=function(t){return arguments.length?(c=En(t),n):c},n},oa.svg.diagonal=function(){function n(n,u){var i=t.call(this,n,u),a=e.call(this,n,u),o=(i.y+a.y)/2,l=[i,{x:i.x,y:o},{x:a.x,y:o},a];return l=l.map(r),"M"+l[0]+"C"+l[1]+" "+l[2]+" "+l[3]}var t=Me,e=xe,r=Yi;return n.source=function(e){return arguments.length?(t=En(e),n):t},n.target=function(t){return arguments.length?(e=En(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},oa.svg.diagonal.radial=function(){var n=oa.svg.diagonal(),t=Yi,e=n.projection;return n.projection=function(n){return arguments.length?e(Zi(t=n)):t},n},oa.svg.symbol=function(){function n(n,r){return(Pl.get(t.call(this,n,r))||$i)(e.call(this,n,r))}var t=Xi,e=Vi;return n.type=function(e){return arguments.length?(t=En(e),n):t},n.size=function(t){return arguments.length?(e=En(t),n):e},n};var Pl=oa.map({circle:$i,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*Ul)),e=t*Ul;return"M0,"+-t+"L"+e+",0 0,"+t+" "+-e+",0Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/jl),e=t*jl/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/jl),e=t*jl/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});oa.svg.symbolTypes=Pl.keys();var jl=Math.sqrt(3),Ul=Math.tan(30*Oa);Aa.transition=function(n){for(var t,e,r=Fl||++Yl,u=Ki(n),i=[],a=Hl||{time:Date.now(),ease:Nr,delay:0,duration:250},o=-1,l=this.length;++o<l;){i.push(t=[]);for(var c=this[o],s=-1,f=c.length;++s<f;)(e=c[s])&&Qi(e,s,u,r,a),t.push(e)}return Wi(i,u,r)},Aa.interrupt=function(n){return this.each(null==n?Ol:Bi(Ki(n)))};var Fl,Hl,Ol=Bi(Ki()),Il=[],Yl=0;Il.call=Aa.call,Il.empty=Aa.empty,Il.node=Aa.node,Il.size=Aa.size,oa.transition=function(n,t){return n&&n.transition?Fl?n.transition(t):n:oa.selection().transition(n)},oa.transition.prototype=Il,Il.select=function(n){var t,e,r,u=this.id,i=this.namespace,a=[];n=A(n);for(var o=-1,l=this.length;++o<l;){a.push(t=[]);for(var c=this[o],s=-1,f=c.length;++s<f;)(r=c[s])&&(e=n.call(r,r.__data__,s,o))?("__data__"in r&&(e.__data__=r.__data__),Qi(e,s,i,u,r[i][u]),t.push(e)):t.push(null)}return Wi(a,i,u)},Il.selectAll=function(n){var t,e,r,u,i,a=this.id,o=this.namespace,l=[];n=C(n);for(var c=-1,s=this.length;++c<s;)for(var f=this[c],h=-1,g=f.length;++h<g;)if(r=f[h]){i=r[o][a],e=n.call(r,r.__data__,h,c),l.push(t=[]);for(var p=-1,v=e.length;++p<v;)(u=e[p])&&Qi(u,p,o,a,i),t.push(u)}return Wi(l,o,a)},Il.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=O(n));for(var i=0,a=this.length;a>i;i++){u.push(t=[]);for(var e=this[i],o=0,l=e.length;l>o;o++)(r=e[o])&&n.call(r,r.__data__,o,i)&&t.push(r)}return Wi(u,this.namespace,this.id)},Il.tween=function(n,t){var e=this.id,r=this.namespace;return arguments.length<2?this.node()[r][e].tween.get(n):Y(this,null==t?function(t){t[r][e].tween.remove(n)}:function(u){u[r][e].tween.set(n,t)})},Il.attr=function(n,t){function e(){this.removeAttribute(o)}function r(){this.removeAttributeNS(o.space,o.local)}function u(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(o);return e!==n&&(t=a(e,n),function(n){this.setAttribute(o,t(n))})})}function i(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(o.space,o.local);return e!==n&&(t=a(e,n),function(n){this.setAttributeNS(o.space,o.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var a="transform"==n?$r:Mr,o=oa.ns.qualify(n);return Ji(this,"attr."+n,t,o.local?i:u)},Il.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(u));return r&&function(n){this.setAttribute(u,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(u.space,u.local));return r&&function(n){this.setAttributeNS(u.space,u.local,r(n))}}var u=oa.ns.qualify(n);return this.tween("attr."+n,u.local?r:e)},Il.style=function(n,e,r){function u(){this.style.removeProperty(n)}function i(e){return null==e?u:(e+="",function(){var u,i=t(this).getComputedStyle(this,null).getPropertyValue(n);return i!==e&&(u=Mr(i,e),function(t){this.style.setProperty(n,u(t),r)})})}var a=arguments.length;if(3>a){if("string"!=typeof n){2>a&&(e="");for(r in n)this.style(r,n[r],e);return this}r=""}return Ji(this,"style."+n,e,i)},Il.styleTween=function(n,e,r){function u(u,i){var a=e.call(this,u,i,t(this).getComputedStyle(this,null).getPropertyValue(n));return a&&function(t){this.style.setProperty(n,a(t),r)}}return arguments.length<3&&(r=""),this.tween("style."+n,u)},Il.text=function(n){return Ji(this,"text",n,Gi)},Il.remove=function(){var n=this.namespace;return this.each("end.transition",function(){var t;this[n].count<2&&(t=this.parentNode)&&t.removeChild(this)})},Il.ease=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].ease:("function"!=typeof n&&(n=oa.ease.apply(oa,arguments)),Y(this,function(r){r[e][t].ease=n}))},Il.delay=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].delay:Y(this,"function"==typeof n?function(r,u,i){r[e][t].delay=+n.call(r,r.__data__,u,i)}:(n=+n,function(r){r[e][t].delay=n}))},Il.duration=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].duration:Y(this,"function"==typeof n?function(r,u,i){r[e][t].duration=Math.max(1,n.call(r,r.__data__,u,i))}:(n=Math.max(1,n),function(r){r[e][t].duration=n}))},Il.each=function(n,t){var e=this.id,r=this.namespace;if(arguments.length<2){var u=Hl,i=Fl;try{Fl=e,Y(this,function(t,u,i){Hl=t[r][e],n.call(t,t.__data__,u,i)})}finally{Hl=u,Fl=i}}else Y(this,function(u){var i=u[r][e];(i.event||(i.event=oa.dispatch("start","end","interrupt"))).on(n,t)});return this},Il.transition=function(){for(var n,t,e,r,u=this.id,i=++Yl,a=this.namespace,o=[],l=0,c=this.length;c>l;l++){o.push(n=[]);for(var t=this[l],s=0,f=t.length;f>s;s++)(e=t[s])&&(r=e[a][u],Qi(e,s,a,i,{time:r.time,ease:r.ease,delay:r.delay+r.duration,duration:r.duration})),n.push(e)}return Wi(o,a,i)},oa.svg.axis=function(){function n(n){n.each(function(){var n,c=oa.select(this),s=this.__chart__||e,f=this.__chart__=e.copy(),h=null==l?f.ticks?f.ticks.apply(f,o):f.domain():l,g=null==t?f.tickFormat?f.tickFormat.apply(f,o):y:t,p=c.selectAll(".tick").data(h,f),v=p.enter().insert("g",".domain").attr("class","tick").style("opacity",Da),d=oa.transition(p.exit()).style("opacity",Da).remove(),m=oa.transition(p.order()).style("opacity",1),M=Math.max(u,0)+a,x=Zu(f),b=c.selectAll(".domain").data([0]),_=(b.enter().append("path").attr("class","domain"),oa.transition(b));v.append("line"),v.append("text");var w,S,k,N,E=v.select("line"),A=m.select("line"),C=p.select("text").text(g),z=v.select("text"),L=m.select("text"),q="top"===r||"left"===r?-1:1;if("bottom"===r||"top"===r?(n=na,w="x",k="y",S="x2",N="y2",C.attr("dy",0>q?"0em":".71em").style("text-anchor","middle"),_.attr("d","M"+x[0]+","+q*i+"V0H"+x[1]+"V"+q*i)):(n=ta,w="y",k="x",S="y2",N="x2",C.attr("dy",".32em").style("text-anchor",0>q?"end":"start"),_.attr("d","M"+q*i+","+x[0]+"H0V"+x[1]+"H"+q*i)),E.attr(N,q*u),z.attr(k,q*M),A.attr(S,0).attr(N,q*u),L.attr(w,0).attr(k,q*M),f.rangeBand){var T=f,R=T.rangeBand()/2;s=f=function(n){return T(n)+R}}else s.rangeBand?s=f:d.call(n,f,s);v.call(n,s,f),m.call(n,f,f)})}var t,e=oa.scale.linear(),r=Zl,u=6,i=6,a=3,o=[10],l=null;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in Vl?t+"":Zl,n):r},n.ticks=function(){return arguments.length?(o=ca(arguments),n):o},n.tickValues=function(t){return arguments.length?(l=t,n):l},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t){var e=arguments.length;return e?(u=+t,i=+arguments[e-1],n):u},n.innerTickSize=function(t){return arguments.length?(u=+t,n):u},n.outerTickSize=function(t){return arguments.length?(i=+t,n):i},n.tickPadding=function(t){return arguments.length?(a=+t,n):a},n.tickSubdivide=function(){return arguments.length&&n},n};var Zl="bottom",Vl={top:1,right:1,bottom:1,left:1};oa.svg.brush=function(){function n(t){t.each(function(){var t=oa.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",i).on("touchstart.brush",i),a=t.selectAll(".background").data([0]);a.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),t.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move");var o=t.selectAll(".resize").data(v,y);o.exit().remove(),o.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return Xl[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),o.style("display",n.empty()?"none":null);var l,f=oa.transition(t),h=oa.transition(a);c&&(l=Zu(c),h.attr("x",l[0]).attr("width",l[1]-l[0]),r(f)),s&&(l=Zu(s),h.attr("y",l[0]).attr("height",l[1]-l[0]),u(f)),e(f)})}function e(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+f[+/e$/.test(n)]+","+h[+/^s/.test(n)]+")"})}function r(n){n.select(".extent").attr("x",f[0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",f[1]-f[0])}function u(n){n.select(".extent").attr("y",h[0]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",h[1]-h[0])}function i(){function i(){32==oa.event.keyCode&&(C||(M=null,L[0]-=f[1],L[1]-=h[1],C=2),S())}function v(){32==oa.event.keyCode&&2==C&&(L[0]+=f[1],L[1]+=h[1],C=0,S())}function d(){var n=oa.mouse(b),t=!1;x&&(n[0]+=x[0],n[1]+=x[1]),C||(oa.event.altKey?(M||(M=[(f[0]+f[1])/2,(h[0]+h[1])/2]),L[0]=f[+(n[0]<M[0])],L[1]=h[+(n[1]<M[1])]):M=null),E&&m(n,c,0)&&(r(k),t=!0),A&&m(n,s,1)&&(u(k),t=!0),t&&(e(k),w({type:"brush",mode:C?"move":"resize"}))}function m(n,t,e){var r,u,i=Zu(t),l=i[0],c=i[1],s=L[e],v=e?h:f,d=v[1]-v[0];return C&&(l-=s,c-=d+s),r=(e?p:g)?Math.max(l,Math.min(c,n[e])):n[e],C?u=(r+=s)+d:(M&&(s=Math.max(l,Math.min(c,2*M[e]-r))),r>s?(u=r,r=s):u=s),v[0]!=r||v[1]!=u?(e?o=null:a=null,v[0]=r,v[1]=u,!0):void 0}function y(){d(),k.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),oa.select("body").style("cursor",null),q.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),z(),w({type:"brushend"})}var M,x,b=this,_=oa.select(oa.event.target),w=l.of(b,arguments),k=oa.select(b),N=_.datum(),E=!/^(n|s)$/.test(N)&&c,A=!/^(e|w)$/.test(N)&&s,C=_.classed("extent"),z=W(b),L=oa.mouse(b),q=oa.select(t(b)).on("keydown.brush",i).on("keyup.brush",v);if(oa.event.changedTouches?q.on("touchmove.brush",d).on("touchend.brush",y):q.on("mousemove.brush",d).on("mouseup.brush",y),k.interrupt().selectAll("*").interrupt(),C)L[0]=f[0]-L[0],L[1]=h[0]-L[1];else if(N){var T=+/w$/.test(N),R=+/^n/.test(N);x=[f[1-T]-L[0],h[1-R]-L[1]],L[0]=f[T],L[1]=h[R]}else oa.event.altKey&&(M=L.slice());k.style("pointer-events","none").selectAll(".resize").style("display",null),oa.select("body").style("cursor",_.style("cursor")),w({type:"brushstart"}),d()}var a,o,l=N(n,"brushstart","brush","brushend"),c=null,s=null,f=[0,0],h=[0,0],g=!0,p=!0,v=$l[0];return n.event=function(n){n.each(function(){var n=l.of(this,arguments),t={x:f,y:h,i:a,j:o},e=this.__chart__||t;this.__chart__=t,Fl?oa.select(this).transition().each("start.brush",function(){a=e.i,o=e.j,f=e.x,h=e.y,n({type:"brushstart"})}).tween("brush:brush",function(){var e=xr(f,t.x),r=xr(h,t.y);return a=o=null,function(u){f=t.x=e(u),h=t.y=r(u),n({type:"brush",mode:"resize"})}}).each("end.brush",function(){a=t.i,o=t.j,n({type:"brush",mode:"resize"}),n({type:"brushend"})}):(n({type:"brushstart"}),n({type:"brush",mode:"resize"}),n({type:"brushend"}))})},n.x=function(t){return arguments.length?(c=t,v=$l[!c<<1|!s],n):c},n.y=function(t){return arguments.length?(s=t,v=$l[!c<<1|!s],n):s},n.clamp=function(t){return arguments.length?(c&&s?(g=!!t[0],p=!!t[1]):c?g=!!t:s&&(p=!!t),n):c&&s?[g,p]:c?g:s?p:null},n.extent=function(t){var e,r,u,i,l;return arguments.length?(c&&(e=t[0],r=t[1],s&&(e=e[0],r=r[0]),a=[e,r],c.invert&&(e=c(e),r=c(r)),e>r&&(l=e,e=r,r=l),(e!=f[0]||r!=f[1])&&(f=[e,r])),s&&(u=t[0],i=t[1],c&&(u=u[1],i=i[1]),o=[u,i],s.invert&&(u=s(u),i=s(i)),u>i&&(l=u,u=i,i=l),(u!=h[0]||i!=h[1])&&(h=[u,i])),n):(c&&(a?(e=a[0],r=a[1]):(e=f[0],r=f[1],c.invert&&(e=c.invert(e),r=c.invert(r)),e>r&&(l=e,e=r,r=l))),s&&(o?(u=o[0],i=o[1]):(u=h[0],i=h[1],s.invert&&(u=s.invert(u),i=s.invert(i)),u>i&&(l=u,u=i,i=l))),c&&s?[[e,u],[r,i]]:c?[e,r]:s&&[u,i])},n.clear=function(){return n.empty()||(f=[0,0],h=[0,0],a=o=null),n},n.empty=function(){return!!c&&f[0]==f[1]||!!s&&h[0]==h[1]},oa.rebind(n,l,"on")};var Xl={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},$l=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],Bl=ho.format=Mo.timeFormat,Wl=Bl.utc,Jl=Wl("%Y-%m-%dT%H:%M:%S.%LZ");Bl.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?ea:Jl,ea.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},ea.toString=Jl.toString,ho.second=On(function(n){return new go(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),ho.seconds=ho.second.range,ho.seconds.utc=ho.second.utc.range,ho.minute=On(function(n){return new go(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),ho.minutes=ho.minute.range,ho.minutes.utc=ho.minute.utc.range,ho.hour=On(function(n){var t=n.getTimezoneOffset()/60;return new go(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),ho.hours=ho.hour.range,ho.hours.utc=ho.hour.utc.range,ho.month=On(function(n){return n=ho.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),ho.months=ho.month.range,ho.months.utc=ho.month.utc.range;var Gl=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],Kl=[[ho.second,1],[ho.second,5],[ho.second,15],[ho.second,30],[ho.minute,1],[ho.minute,5],[ho.minute,15],[ho.minute,30],[ho.hour,1],[ho.hour,3],[ho.hour,6],[ho.hour,12],[ho.day,1],[ho.day,2],[ho.week,1],[ho.month,1],[ho.month,3],[ho.year,1]],Ql=Bl.multi([[".%L",function(n){return n.getMilliseconds()}],[":%S",function(n){return n.getSeconds()}],["%I:%M",function(n){return n.getMinutes()}],["%I %p",function(n){return n.getHours()}],["%a %d",function(n){return n.getDay()&&1!=n.getDate()}],["%b %d",function(n){return 1!=n.getDate()}],["%B",function(n){return n.getMonth()}],["%Y",zt]]),nc={range:function(n,t,e){return oa.range(Math.ceil(n/e)*e,+t,e).map(ua)},floor:y,ceil:y};Kl.year=ho.year,ho.scale=function(){return ra(oa.scale.linear(),Kl,Ql)};var tc=Kl.map(function(n){return[n[0].utc,n[1]]}),ec=Wl.multi([[".%L",function(n){return n.getUTCMilliseconds()}],[":%S",function(n){return n.getUTCSeconds()}],["%I:%M",function(n){return n.getUTCMinutes()}],["%I %p",function(n){return n.getUTCHours()}],["%a %d",function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],["%b %d",function(n){return 1!=n.getUTCDate()}],["%B",function(n){return n.getUTCMonth()}],["%Y",zt]]);tc.year=ho.year.utc,ho.scale.utc=function(){return ra(oa.scale.linear(),tc,ec)},oa.text=An(function(n){return n.responseText}),oa.json=function(n,t){return Cn(n,"application/json",ia,t)},oa.html=function(n,t){return Cn(n,"text/html",aa,t)},oa.xml=An(function(n){return n.responseXML}),"function"==typeof define&&define.amd?(this.d3=oa,define(oa)):"object"==typeof module&&module.exports?module.exports=oa:this.d3=oa}();

/*C3*/
!function(a){"use strict";function b(a){this.owner=a}function c(a,b){if(Object.create)b.prototype=Object.create(a.prototype);else{var c=function(){};c.prototype=a.prototype,b.prototype=new c}return b.prototype.constructor=b,b}function d(a){var b=this.internal=new e(this);b.loadConfig(a),b.init(),function c(a,b,d){Object.keys(a).forEach(function(e){b[e]=a[e].bind(d),Object.keys(a[e]).length>0&&c(a[e],b[e],d)})}(h,this,this)}function e(b){var c=this;c.d3=a.d3?a.d3:"undefined"!=typeof require?require("d3"):void 0,c.api=b,c.config=c.getDefaultConfig(),c.data={},c.cache={},c.axes={}}function f(a){b.call(this,a)}function g(a,b){function c(a,b){a.attr("transform",function(a){return"translate("+Math.ceil(b(a)+u)+", 0)"})}function d(a,b){a.attr("transform",function(a){return"translate(0,"+Math.ceil(b(a))+")"})}function e(a){var b=a[0],c=a[a.length-1];return c>b?[b,c]:[c,b]}function f(a){var b,c,d=[];if(a.ticks)return a.ticks.apply(a,n);for(c=a.domain(),b=Math.ceil(c[0]);b<c[1];b++)d.push(b);return d.length>0&&d[0]>0&&d.unshift(d[0]-(d[1]-d[0])),d}function g(){var a,c=p.copy();return b.isCategory&&(a=p.domain(),c.domain([a[0],a[1]-1])),c}function h(a){var b=m?m(a):a;return"undefined"!=typeof b?b:""}function i(a){if(z)return z;var b={h:11.5,w:5.5};return a.select("text").text(h).each(function(a){var c=this.getBoundingClientRect(),d=h(a),e=c.height,f=d?c.width/d.length:void 0;e&&f&&(b.h=e,b.w=f)}).text(""),z=b,b}function j(c){return b.withoutTransition?c:a.transition(c)}function k(m){m.each(function(){function m(a,c){function d(a,b){f=void 0;for(var h=1;h<b.length;h++)if(" "===b.charAt(h)&&(f=h),e=b.substr(0,h+1),g=U.w*e.length,g>c)return d(a.concat(b.substr(0,f?f:h)),b.slice(f?f+1:h));return a.concat(b)}var e,f,g,i=h(a),j=[];return"[object Array]"===Object.prototype.toString.call(i)?i:((!c||0>=c)&&(c=X?95:b.isCategory?Math.ceil(F(G[1])-F(G[0]))-12:110),d(j,i+""))}function n(a,b){var c=U.h;return 0===b&&(c="left"===q||"right"===q?-((V[a.index]-1)*(U.h/2)-3):".71em"),c}function v(a){var b=p(a)+(o?0:u);return L[0]<b&&b<L[1]?r:0}function w(a){return a?a>0?"start":"end":"middle"}function x(a){return a?"rotate("+a+")":""}function y(a){return a?8*Math.sin(Math.PI*(a/180)):0}function z(a){return a?11.5-2.5*(a/15)*(a>0?1:-1):W}var A,B,C,D=k.g=a.select(this),E=this.__chart__||p,F=this.__chart__=g(),G=t?t:f(F),H=D.selectAll(".tick").data(G,F),I=H.enter().insert("g",".domain").attr("class","tick").style("opacity",1e-6),J=H.exit().remove(),K=j(H).style("opacity",1),L=p.rangeExtent?p.rangeExtent():e(p.range()),M=D.selectAll(".domain").data([0]),N=(M.enter().append("path").attr("class","domain"),j(M));I.append("line"),I.append("text");var O=I.select("line"),P=K.select("line"),Q=I.select("text"),R=K.select("text");b.isCategory?(u=Math.ceil((F(1)-F(0))/2),B=o?0:u,C=o?u:0):u=B=0;var S,T,U=i(D.select(".tick")),V=[],W=Math.max(r,0)+s,X="left"===q||"right"===q;S=H.select("text"),T=S.selectAll("tspan").data(function(a,c){var d=b.tickMultiline?m(a,b.tickWidth):[].concat(h(a));return V[c]=d.length,d.map(function(a){return{index:c,splitted:a}})}),T.enter().append("tspan"),T.exit().remove(),T.text(function(a){return a.splitted});var Y=b.tickTextRotate;switch(q){case"bottom":A=c,O.attr("y2",r),Q.attr("y",W),P.attr("x1",B).attr("x2",B).attr("y2",v),R.attr("x",0).attr("y",z(Y)).style("text-anchor",w(Y)).attr("transform",x(Y)),T.attr("x",0).attr("dy",n).attr("dx",y(Y)),N.attr("d","M"+L[0]+","+l+"V0H"+L[1]+"V"+l);break;case"top":A=c,O.attr("y2",-r),Q.attr("y",-W),P.attr("x2",0).attr("y2",-r),R.attr("x",0).attr("y",-W),S.style("text-anchor","middle"),T.attr("x",0).attr("dy","0em"),N.attr("d","M"+L[0]+","+-l+"V0H"+L[1]+"V"+-l);break;case"left":A=d,O.attr("x2",-r),Q.attr("x",-W),P.attr("x2",-r).attr("y1",C).attr("y2",C),R.attr("x",-W).attr("y",u),S.style("text-anchor","end"),T.attr("x",-W).attr("dy",n),N.attr("d","M"+-l+","+L[0]+"H0V"+L[1]+"H"+-l);break;case"right":A=d,O.attr("x2",r),Q.attr("x",W),P.attr("x2",r).attr("y2",0),R.attr("x",W).attr("y",0),S.style("text-anchor","start"),T.attr("x",W).attr("dy",n),N.attr("d","M"+l+","+L[0]+"H0V"+L[1]+"H"+l)}if(F.rangeBand){var Z=F,$=Z.rangeBand()/2;E=F=function(a){return Z(a)+$}}else E.rangeBand?E=F:J.call(A,F);I.call(A,E),K.call(A,F)})}var l,m,n,o,p=a.scale.linear(),q="bottom",r=6,s=3,t=null,u=0,v=!0;return b=b||{},l=b.withOuterTick?6:0,k.scale=function(a){return arguments.length?(p=a,k):p},k.orient=function(a){return arguments.length?(q=a in{top:1,right:1,bottom:1,left:1}?a+"":"bottom",k):q},k.tickFormat=function(a){return arguments.length?(m=a,k):m},k.tickCentered=function(a){return arguments.length?(o=a,k):o},k.tickOffset=function(){return u},k.tickInterval=function(){var a,c;return b.isCategory?a=2*u:(c=k.g.select("path.domain").node().getTotalLength()-2*l,a=c/k.g.selectAll("line").size()),1/0===a?0:a},k.ticks=function(){return arguments.length?(n=arguments,k):n},k.tickCulling=function(a){return arguments.length?(v=a,k):v},k.tickValues=function(a){if("function"==typeof a)t=function(){return a(p.domain())};else{if(!arguments.length)return t;t=a}return k},k}var h,i,j,k={version:"0.4.10"};k.generate=function(a){return new d(a)},k.chart={fn:d.prototype,internal:{fn:e.prototype,axis:{fn:f.prototype}}},h=k.chart.fn,i=k.chart.internal.fn,j=k.chart.internal.axis.fn,i.init=function(){var a=this,b=a.config;if(a.initParams(),b.data_url)a.convertUrlToData(b.data_url,b.data_mimeType,b.data_keys,a.initWithData);else if(b.data_json)a.initWithData(a.convertJsonToData(b.data_json,b.data_keys));else if(b.data_rows)a.initWithData(a.convertRowsToData(b.data_rows));else{if(!b.data_columns)throw Error("url or json or rows or columns is required.");a.initWithData(a.convertColumnsToData(b.data_columns))}},i.initParams=function(){var a=this,b=a.d3,c=a.config;a.clipId="c3-"+ +new Date+"-clip",a.clipIdForXAxis=a.clipId+"-xaxis",a.clipIdForYAxis=a.clipId+"-yaxis",a.clipIdForGrid=a.clipId+"-grid",a.clipIdForSubchart=a.clipId+"-subchart",a.clipPath=a.getClipPath(a.clipId),a.clipPathForXAxis=a.getClipPath(a.clipIdForXAxis),a.clipPathForYAxis=a.getClipPath(a.clipIdForYAxis),a.clipPathForGrid=a.getClipPath(a.clipIdForGrid),a.clipPathForSubchart=a.getClipPath(a.clipIdForSubchart),a.dragStart=null,a.dragging=!1,a.flowing=!1,a.cancelClick=!1,a.mouseover=!1,a.transiting=!1,a.color=a.generateColor(),a.levelColor=a.generateLevelColor(),a.dataTimeFormat=c.data_xLocaltime?b.time.format:b.time.format.utc,a.axisTimeFormat=c.axis_x_localtime?b.time.format:b.time.format.utc,a.defaultAxisTimeFormat=a.axisTimeFormat.multi([[".%L",function(a){return a.getMilliseconds()}],[":%S",function(a){return a.getSeconds()}],["%I:%M",function(a){return a.getMinutes()}],["%I %p",function(a){return a.getHours()}],["%-m/%-d",function(a){return a.getDay()&&1!==a.getDate()}],["%-m/%-d",function(a){return 1!==a.getDate()}],["%-m/%-d",function(a){return a.getMonth()}],["%Y/%-m/%-d",function(){return!0}]]),a.hiddenTargetIds=[],a.hiddenLegendIds=[],a.focusedTargetIds=[],a.defocusedTargetIds=[],a.xOrient=c.axis_rotated?"left":"bottom",a.yOrient=c.axis_rotated?c.axis_y_inner?"top":"bottom":c.axis_y_inner?"right":"left",a.y2Orient=c.axis_rotated?c.axis_y2_inner?"bottom":"top":c.axis_y2_inner?"left":"right",a.subXOrient=c.axis_rotated?"left":"bottom",a.isLegendRight="right"===c.legend_position,a.isLegendInset="inset"===c.legend_position,a.isLegendTop="top-left"===c.legend_inset_anchor||"top-right"===c.legend_inset_anchor,a.isLegendLeft="top-left"===c.legend_inset_anchor||"bottom-left"===c.legend_inset_anchor,a.legendStep=0,a.legendItemWidth=0,a.legendItemHeight=0,a.currentMaxTickWidths={x:0,y:0,y2:0},a.rotated_padding_left=30,a.rotated_padding_right=c.axis_rotated&&!c.axis_x_show?0:30,a.rotated_padding_top=5,a.withoutFadeIn={},a.intervalForObserveInserted=void 0,a.axes.subx=b.selectAll([])},i.initChartElements=function(){this.initBar&&this.initBar(),this.initLine&&this.initLine(),this.initArc&&this.initArc(),this.initGauge&&this.initGauge(),this.initText&&this.initText()},i.initWithData=function(b){var c,d,e=this,g=e.d3,h=e.config,i=!0;e.axis=new f(e),e.initPie&&e.initPie(),e.initBrush&&e.initBrush(),e.initZoom&&e.initZoom(),e.selectChart=h.bindto?"function"==typeof h.bindto.node?h.bindto:g.select(h.bindto):g.selectAll([]),e.selectChart.empty()&&(e.selectChart=g.select(document.createElement("div")).style("opacity",0),e.observeInserted(e.selectChart),i=!1),e.selectChart.html("").classed("c3",!0),e.data.xs={},e.data.targets=e.convertDataToTargets(b),h.data_filter&&(e.data.targets=e.data.targets.filter(h.data_filter)),h.data_hide&&e.addHiddenTargetIds(h.data_hide===!0?e.mapToIds(e.data.targets):h.data_hide),h.legend_hide&&e.addHiddenLegendIds(h.legend_hide===!0?e.mapToIds(e.data.targets):h.legend_hide),e.hasType("gauge")&&(h.legend_show=!1),e.updateSizes(),e.updateScales(),e.x.domain(g.extent(e.getXDomain(e.data.targets))),e.y.domain(e.getYDomain(e.data.targets,"y")),e.y2.domain(e.getYDomain(e.data.targets,"y2")),e.subX.domain(e.x.domain()),e.subY.domain(e.y.domain()),e.subY2.domain(e.y2.domain()),e.orgXDomain=e.x.domain(),e.brush&&e.brush.scale(e.subX),h.zoom_enabled&&e.zoom.scale(e.x),e.svg=e.selectChart.append("svg").style("overflow","hidden").on("mouseenter",function(){return h.onmouseover.call(e)}).on("mouseleave",function(){return h.onmouseout.call(e)}),c=e.svg.append("defs"),e.clipChart=e.appendClip(c,e.clipId),e.clipXAxis=e.appendClip(c,e.clipIdForXAxis),e.clipYAxis=e.appendClip(c,e.clipIdForYAxis),e.clipGrid=e.appendClip(c,e.clipIdForGrid),e.clipSubchart=e.appendClip(c,e.clipIdForSubchart),e.updateSvgSize(),d=e.main=e.svg.append("g").attr("transform",e.getTranslate("main")),e.initSubchart&&e.initSubchart(),e.initTooltip&&e.initTooltip(),e.initLegend&&e.initLegend(),d.append("text").attr("class",l.text+" "+l.empty).attr("text-anchor","middle").attr("dominant-baseline","middle"),e.initRegion(),e.initGrid(),d.append("g").attr("clip-path",e.clipPath).attr("class",l.chart),h.grid_lines_front&&e.initGridLines(),e.initEventRect(),e.initChartElements(),d.insert("rect",h.zoom_privileged?null:"g."+l.regions).attr("class",l.zoomRect).attr("width",e.width).attr("height",e.height).style("opacity",0).on("dblclick.zoom",null),h.axis_x_extent&&e.brush.extent(e.getDefaultExtent()),e.axis.init(),e.updateTargets(e.data.targets),i&&(e.updateDimension(),e.config.oninit.call(e),e.redraw({withTransition:!1,withTransform:!0,withUpdateXDomain:!0,withUpdateOrgXDomain:!0,withTransitionForAxis:!1})),null==a.onresize&&(a.onresize=e.generateResize()),a.onresize.add&&(a.onresize.add(function(){h.onresize.call(e)}),a.onresize.add(function(){e.api.flush()}),a.onresize.add(function(){h.onresized.call(e)})),e.api.element=e.selectChart.node()},i.smoothLines=function(a,b){var c=this;"grid"===b&&a.each(function(){var a=c.d3.select(this),b=a.attr("x1"),d=a.attr("x2"),e=a.attr("y1"),f=a.attr("y2");a.attr({x1:Math.ceil(b),x2:Math.ceil(d),y1:Math.ceil(e),y2:Math.ceil(f)})})},i.updateSizes=function(){var a=this,b=a.config,c=a.legend?a.getLegendHeight():0,d=a.legend?a.getLegendWidth():0,e=a.isLegendRight||a.isLegendInset?0:c,f=a.hasArcType(),g=b.axis_rotated||f?0:a.getHorizontalAxisHeight("x"),h=b.subchart_show&&!f?b.subchart_size_height+g:0;a.currentWidth=a.getCurrentWidth(),a.currentHeight=a.getCurrentHeight(),a.margin=b.axis_rotated?{top:a.getHorizontalAxisHeight("y2")+a.getCurrentPaddingTop(),right:f?0:a.getCurrentPaddingRight(),bottom:a.getHorizontalAxisHeight("y")+e+a.getCurrentPaddingBottom(),left:h+(f?0:a.getCurrentPaddingLeft())}:{top:4+a.getCurrentPaddingTop(),right:f?0:a.getCurrentPaddingRight(),bottom:g+h+e+a.getCurrentPaddingBottom(),left:f?0:a.getCurrentPaddingLeft()},a.margin2=b.axis_rotated?{top:a.margin.top,right:0/0,bottom:20+e,left:a.rotated_padding_left}:{top:a.currentHeight-h-e,right:0/0,bottom:g+e,left:a.margin.left},a.margin3={top:0,right:0/0,bottom:0,left:0},a.updateSizeForLegend&&a.updateSizeForLegend(c,d),a.width=a.currentWidth-a.margin.left-a.margin.right,a.height=a.currentHeight-a.margin.top-a.margin.bottom,a.width<0&&(a.width=0),a.height<0&&(a.height=0),a.width2=b.axis_rotated?a.margin.left-a.rotated_padding_left-a.rotated_padding_right:a.width,a.height2=b.axis_rotated?a.height:a.currentHeight-a.margin2.top-a.margin2.bottom,a.width2<0&&(a.width2=0),a.height2<0&&(a.height2=0),a.arcWidth=a.width-(a.isLegendRight?d+10:0),a.arcHeight=a.height-(a.isLegendRight?0:10),a.hasType("gauge")&&(a.arcHeight+=a.height-a.getGaugeLabelHeight()),a.updateRadius&&a.updateRadius(),a.isLegendRight&&f&&(a.margin3.left=a.arcWidth/2+1.1*a.radiusExpanded)},i.updateTargets=function(a){var b=this;b.updateTargetsForText(a),b.updateTargetsForBar(a),b.updateTargetsForLine(a),b.hasArcType()&&b.updateTargetsForArc&&b.updateTargetsForArc(a),b.updateTargetsForSubchart&&b.updateTargetsForSubchart(a),b.showTargets()},i.showTargets=function(){var a=this;a.svg.selectAll("."+l.target).filter(function(b){return a.isTargetToShow(b.id)}).transition().duration(a.config.transition_duration).style("opacity",1)},i.redraw=function(a,b){var c,d,e,f,g,h,i,j,k,m,n,o,p,q,r,s,t,u,v,x,y,z,A,B,C,D,E,F,G,H=this,I=H.main,J=H.d3,K=H.config,L=H.getShapeIndices(H.isAreaType),M=H.getShapeIndices(H.isBarType),N=H.getShapeIndices(H.isLineType),O=H.hasArcType(),P=H.filterTargetsToShow(H.data.targets),Q=H.xv.bind(H);if(a=a||{},c=w(a,"withY",!0),d=w(a,"withSubchart",!0),e=w(a,"withTransition",!0),h=w(a,"withTransform",!1),i=w(a,"withUpdateXDomain",!1),j=w(a,"withUpdateOrgXDomain",!1),k=w(a,"withTrimXDomain",!0),p=w(a,"withUpdateXAxis",i),m=w(a,"withLegend",!1),n=w(a,"withEventRect",!0),o=w(a,"withDimension",!0),f=w(a,"withTransitionForExit",e),g=w(a,"withTransitionForAxis",e),v=e?K.transition_duration:0,x=f?v:0,y=g?v:0,b=b||H.axis.generateTransitions(y),m&&K.legend_show?H.updateLegend(H.mapToIds(H.data.targets),a,b):o&&H.updateDimension(!0),H.isCategorized()&&0===P.length&&H.x.domain([0,H.axes.x.selectAll(".tick").size()]),P.length?(H.updateXDomain(P,i,j,k),K.axis_x_tick_values||(B=H.axis.updateXAxisTickValues(P))):(H.xAxis.tickValues([]),H.subXAxis.tickValues([])),K.zoom_rescale&&!a.flow&&(E=H.x.orgDomain()),H.y.domain(H.getYDomain(P,"y",E)),H.y2.domain(H.getYDomain(P,"y2",E)),!K.axis_y_tick_values&&K.axis_y_tick_count&&H.yAxis.tickValues(H.axis.generateTickValues(H.y.domain(),K.axis_y_tick_count)),!K.axis_y2_tick_values&&K.axis_y2_tick_count&&H.y2Axis.tickValues(H.axis.generateTickValues(H.y2.domain(),K.axis_y2_tick_count)),H.axis.redraw(b,O),H.axis.updateLabels(e),(i||p)&&P.length)if(K.axis_x_tick_culling&&B){for(C=1;C<B.length;C++)if(B.length/C<K.axis_x_tick_culling_max){D=C;break}H.svg.selectAll("."+l.axisX+" .tick text").each(function(a){var b=B.indexOf(a);b>=0&&J.select(this).style("display",b%D?"none":"block")})}else H.svg.selectAll("."+l.axisX+" .tick text").style("display","block");q=H.generateDrawArea?H.generateDrawArea(L,!1):void 0,r=H.generateDrawBar?H.generateDrawBar(M):void 0,s=H.generateDrawLine?H.generateDrawLine(N,!1):void 0,t=H.generateXYForText(L,M,N,!0),u=H.generateXYForText(L,M,N,!1),c&&(H.subY.domain(H.getYDomain(P,"y")),H.subY2.domain(H.getYDomain(P,"y2"))),H.tooltip.style("display","none"),H.updateXgridFocus(),I.select("text."+l.text+"."+l.empty).attr("x",H.width/2).attr("y",H.height/2).text(K.data_empty_label_text).transition().style("opacity",P.length?0:1),H.updateGrid(v),H.updateRegion(v),H.updateBar(x),H.updateLine(x),H.updateArea(x),H.updateCircle(),H.hasDataLabel()&&H.updateText(x),H.redrawArc&&H.redrawArc(v,x,h),H.redrawSubchart&&H.redrawSubchart(d,b,v,x,L,M,N),I.selectAll("."+l.selectedCircles).filter(H.isBarType.bind(H)).selectAll("circle").remove(),K.interaction_enabled&&!a.flow&&n&&(H.redrawEventRect(),H.updateZoom&&H.updateZoom()),H.updateCircleY(),F=(H.config.axis_rotated?H.circleY:H.circleX).bind(H),G=(H.config.axis_rotated?H.circleX:H.circleY).bind(H),a.flow&&(A=H.generateFlow({targets:P,flow:a.flow,duration:a.flow.duration,drawBar:r,drawLine:s,drawArea:q,cx:F,cy:G,xv:Q,xForText:t,yForText:u})),(v||A)&&H.isTabVisible()?J.transition().duration(v).each(function(){var b=[];[H.redrawBar(r,!0),H.redrawLine(s,!0),H.redrawArea(q,!0),H.redrawCircle(F,G,!0),H.redrawText(t,u,a.flow,!0),H.redrawRegion(!0),H.redrawGrid(!0)].forEach(function(a){a.forEach(function(a){b.push(a)})}),z=H.generateWait(),b.forEach(function(a){z.add(a)})}).call(z,function(){A&&A(),K.onrendered&&K.onrendered.call(H)}):(H.redrawBar(r),H.redrawLine(s),H.redrawArea(q),H.redrawCircle(F,G),H.redrawText(t,u,a.flow),H.redrawRegion(),H.redrawGrid(),K.onrendered&&K.onrendered.call(H)),H.mapToIds(H.data.targets).forEach(function(a){H.withoutFadeIn[a]=!0})},i.updateAndRedraw=function(a){var b,c=this,d=c.config;a=a||{},a.withTransition=w(a,"withTransition",!0),a.withTransform=w(a,"withTransform",!1),a.withLegend=w(a,"withLegend",!1),a.withUpdateXDomain=!0,a.withUpdateOrgXDomain=!0,a.withTransitionForExit=!1,a.withTransitionForTransform=w(a,"withTransitionForTransform",a.withTransition),c.updateSizes(),a.withLegend&&d.legend_show||(b=c.axis.generateTransitions(a.withTransitionForAxis?d.transition_duration:0),c.updateScales(),c.updateSvgSize(),c.transformAll(a.withTransitionForTransform,b)),c.redraw(a,b)},i.redrawWithoutRescale=function(){this.redraw({withY:!1,withSubchart:!1,withEventRect:!1,withTransitionForAxis:!1})},i.isTimeSeries=function(){return"timeseries"===this.config.axis_x_type},i.isCategorized=function(){return this.config.axis_x_type.indexOf("categor")>=0},i.isCustomX=function(){var a=this,b=a.config;return!a.isTimeSeries()&&(b.data_x||v(b.data_xs))},i.isTimeSeriesY=function(){return"timeseries"===this.config.axis_y_type},i.getTranslate=function(a){var b,c,d=this,e=d.config;return"main"===a?(b=s(d.margin.left),c=s(d.margin.top)):"context"===a?(b=s(d.margin2.left),c=s(d.margin2.top)):"legend"===a?(b=d.margin3.left,c=d.margin3.top):"x"===a?(b=0,c=e.axis_rotated?0:d.height):"y"===a?(b=0,c=e.axis_rotated?d.height:0):"y2"===a?(b=e.axis_rotated?0:d.width,c=e.axis_rotated?1:0):"subx"===a?(b=0,c=e.axis_rotated?0:d.height2):"arc"===a&&(b=d.arcWidth/2,c=d.arcHeight/2),"translate("+b+","+c+")"},i.initialOpacity=function(a){return null!==a.value&&this.withoutFadeIn[a.id]?1:0},i.initialOpacityForCircle=function(a){return null!==a.value&&this.withoutFadeIn[a.id]?this.opacityForCircle(a):0},i.opacityForCircle=function(a){var b=this.config.point_show?1:0;return m(a.value)?this.isScatterType(a)?.5:b:0},i.opacityForText=function(){return this.hasDataLabel()?1:0},i.xx=function(a){return a?this.x(a.x):null},i.xv=function(a){var b=this,c=a.value;return b.isTimeSeries()?c=b.parseDate(a.value):b.isCategorized()&&"string"==typeof a.value&&(c=b.config.axis_x_categories.indexOf(a.value)),Math.ceil(b.x(c))},i.yv=function(a){var b=this,c=a.axis&&"y2"===a.axis?b.y2:b.y;return Math.ceil(c(a.value))},i.subxx=function(a){return a?this.subX(a.x):null},i.transformMain=function(a,b){var c,d,e,f=this;b&&b.axisX?c=b.axisX:(c=f.main.select("."+l.axisX),a&&(c=c.transition())),b&&b.axisY?d=b.axisY:(d=f.main.select("."+l.axisY),a&&(d=d.transition())),b&&b.axisY2?e=b.axisY2:(e=f.main.select("."+l.axisY2),a&&(e=e.transition())),(a?f.main.transition():f.main).attr("transform",f.getTranslate("main")),c.attr("transform",f.getTranslate("x")),d.attr("transform",f.getTranslate("y")),e.attr("transform",f.getTranslate("y2")),f.main.select("."+l.chartArcs).attr("transform",f.getTranslate("arc"))},i.transformAll=function(a,b){var c=this;c.transformMain(a,b),c.config.subchart_show&&c.transformContext(a,b),c.legend&&c.transformLegend(a)},i.updateSvgSize=function(){var a=this,b=a.svg.select(".c3-brush .background");a.svg.attr("width",a.currentWidth).attr("height",a.currentHeight),a.svg.selectAll(["#"+a.clipId,"#"+a.clipIdForGrid]).select("rect").attr("width",a.width).attr("height",a.height),a.svg.select("#"+a.clipIdForXAxis).select("rect").attr("x",a.getXAxisClipX.bind(a)).attr("y",a.getXAxisClipY.bind(a)).attr("width",a.getXAxisClipWidth.bind(a)).attr("height",a.getXAxisClipHeight.bind(a)),a.svg.select("#"+a.clipIdForYAxis).select("rect").attr("x",a.getYAxisClipX.bind(a)).attr("y",a.getYAxisClipY.bind(a)).attr("width",a.getYAxisClipWidth.bind(a)).attr("height",a.getYAxisClipHeight.bind(a)),a.svg.select("#"+a.clipIdForSubchart).select("rect").attr("width",a.width).attr("height",b.size()?b.attr("height"):0),a.svg.select("."+l.zoomRect).attr("width",a.width).attr("height",a.height),a.selectChart.style("max-height",a.currentHeight+"px")},i.updateDimension=function(a){var b=this;a||(b.config.axis_rotated?(b.axes.x.call(b.xAxis),b.axes.subx.call(b.subXAxis)):(b.axes.y.call(b.yAxis),b.axes.y2.call(b.y2Axis))),b.updateSizes(),b.updateScales(),b.updateSvgSize(),b.transformAll(!1)},i.observeInserted=function(b){var c,d=this;return"undefined"==typeof MutationObserver?void a.console.error("MutationObserver not defined."):(c=new MutationObserver(function(e){e.forEach(function(e){"childList"===e.type&&e.previousSibling&&(c.disconnect(),d.intervalForObserveInserted=a.setInterval(function(){b.node().parentNode&&(a.clearInterval(d.intervalForObserveInserted),d.updateDimension(),d.config.oninit.call(d),d.redraw({withTransform:!0,withUpdateXDomain:!0,withUpdateOrgXDomain:!0,withTransition:!1,withTransitionForTransform:!1,withLegend:!0}),b.transition().style("opacity",1))},10))})}),void c.observe(b.node(),{attributes:!0,childList:!0,characterData:!0}))},i.generateResize=function(){function a(){b.forEach(function(a){a()})}var b=[];return a.add=function(a){b.push(a)},a},i.endall=function(a,b){var c=0;a.each(function(){++c}).each("end",function(){--c||b.apply(this,arguments)})},i.generateWait=function(){var a=[],b=function(b,c){var d=setInterval(function(){var b=0;a.forEach(function(a){if(a.empty())return void(b+=1);try{a.transition()}catch(c){b+=1}}),b===a.length&&(clearInterval(d),c&&c())},10)};return b.add=function(b){a.push(b)},b},i.parseDate=function(b){var c,d=this;return b instanceof Date?c=b:"string"==typeof b?c=d.dataTimeFormat(d.config.data_xFormat).parse(b):"number"!=typeof b&&isNaN(b)||(c=new Date(+b)),(!c||isNaN(+c))&&a.console.error("Failed to parse x '"+b+"' to Date object"),c},i.isTabVisible=function(){var a;return"undefined"!=typeof document.hidden?a="hidden":"undefined"!=typeof document.mozHidden?a="mozHidden":"undefined"!=typeof document.msHidden?a="msHidden":"undefined"!=typeof document.webkitHidden&&(a="webkitHidden"),document[a]?!1:!0},i.getDefaultConfig=function(){var a={bindto:"#chart",size_width:void 0,size_height:void 0,padding_left:void 0,padding_right:void 0,padding_top:void 0,padding_bottom:void 0,zoom_enabled:!1,zoom_extent:void 0,zoom_privileged:!1,zoom_rescale:!1,zoom_onzoom:function(){},zoom_onzoomstart:function(){},zoom_onzoomend:function(){},interaction_enabled:!0,onmouseover:function(){},onmouseout:function(){},onresize:function(){},onresized:function(){},oninit:function(){},onrendered:function(){},transition_duration:350,data_x:void 0,data_xs:{},data_xFormat:"%Y-%m-%d",data_xLocaltime:!0,data_xSort:!0,data_idConverter:function(a){return a},data_names:{},data_classes:{},data_groups:[],data_axes:{},data_type:void 0,data_types:{},data_labels:{},data_order:"desc",data_regions:{},data_color:void 0,data_colors:{},data_hide:!1,data_filter:void 0,data_selection_enabled:!1,data_selection_grouped:!1,data_selection_isselectable:function(){return!0},data_selection_multiple:!0,data_selection_draggable:!1,data_onclick:function(){},data_onmouseover:function(){},data_onmouseout:function(){},data_onselected:function(){},data_onunselected:function(){},data_url:void 0,data_json:void 0,data_rows:void 0,data_columns:void 0,data_mimeType:void 0,data_keys:void 0,data_empty_label_text:"",subchart_show:!1,subchart_size_height:60,subchart_onbrush:function(){},color_pattern:[],color_threshold:{},legend_show:!0,legend_hide:!1,legend_position:"bottom",legend_inset_anchor:"top-left",legend_inset_x:10,legend_inset_y:0,legend_inset_step:void 0,legend_item_onclick:void 0,legend_item_onmouseover:void 0,legend_item_onmouseout:void 0,legend_equally:!1,axis_rotated:!1,axis_x_show:!0,axis_x_type:"indexed",axis_x_localtime:!0,axis_x_categories:[],axis_x_tick_centered:!1,axis_x_tick_format:void 0,axis_x_tick_culling:{},axis_x_tick_culling_max:10,axis_x_tick_count:void 0,axis_x_tick_fit:!0,axis_x_tick_values:null,axis_x_tick_rotate:0,axis_x_tick_outer:!0,axis_x_tick_multiline:!0,axis_x_tick_width:null,axis_x_max:void 0,axis_x_min:void 0,axis_x_padding:{},axis_x_height:void 0,axis_x_extent:void 0,axis_x_label:{},axis_y_show:!0,axis_y_type:void 0,axis_y_max:void 0,axis_y_min:void 0,axis_y_inverted:!1,axis_y_center:void 0,axis_y_inner:void 0,axis_y_label:{},axis_y_tick_format:void 0,axis_y_tick_outer:!0,axis_y_tick_values:null,axis_y_tick_count:void 0,axis_y_tick_time_value:void 0,axis_y_tick_time_interval:void 0,axis_y_padding:{},axis_y_default:void 0,axis_y2_show:!1,axis_y2_max:void 0,axis_y2_min:void 0,axis_y2_inverted:!1,axis_y2_center:void 0,axis_y2_inner:void 0,axis_y2_label:{},axis_y2_tick_format:void 0,axis_y2_tick_outer:!0,axis_y2_tick_values:null,axis_y2_tick_count:void 0,axis_y2_padding:{},axis_y2_default:void 0,grid_x_show:!1,grid_x_type:"tick",grid_x_lines:[],grid_y_show:!1,grid_y_lines:[],grid_y_ticks:10,grid_focus_show:!0,grid_lines_front:!0,point_show:!0,point_r:2.5,point_focus_expand_enabled:!0,point_focus_expand_r:void 0,point_select_r:void 0,line_connectNull:!1,line_step_type:"step",bar_width:void 0,bar_width_ratio:.6,bar_width_max:void 0,bar_zerobased:!0,area_zerobased:!0,pie_label_show:!0,pie_label_format:void 0,pie_label_threshold:.05,pie_expand:!0,gauge_label_show:!0,gauge_label_format:void 0,gauge_expand:!0,gauge_min:0,gauge_max:100,gauge_units:void 0,gauge_width:void 0,donut_label_show:!0,donut_label_format:void 0,donut_label_threshold:.05,donut_width:void 0,donut_expand:!0,donut_title:"",regions:[],tooltip_show:!0,tooltip_grouped:!0,tooltip_format_title:void 0,tooltip_format_name:void 0,tooltip_format_value:void 0,tooltip_position:void 0,tooltip_contents:function(a,b,c,d){return this.getTooltipContent?this.getTooltipContent(a,b,c,d):""},tooltip_init_show:!1,tooltip_init_x:0,tooltip_init_position:{top:"0px",left:"50px"}};return Object.keys(this.additionalConfig).forEach(function(b){a[b]=this.additionalConfig[b]},this),a},i.additionalConfig={},i.loadConfig=function(a){function b(){var a=d.shift();return a&&c&&"object"==typeof c&&a in c?(c=c[a],b()):a?void 0:c}var c,d,e,f=this.config;Object.keys(f).forEach(function(g){c=a,d=g.split("_"),e=b(),q(e)&&(f[g]=e)})},i.getScale=function(a,b,c){return(c?this.d3.time.scale():this.d3.scale.linear()).range([a,b])},i.getX=function(a,b,c,d){var e,f=this,g=f.getScale(a,b,f.isTimeSeries()),h=c?g.domain(c):g;f.isCategorized()?(d=d||function(){return 0},g=function(a,b){var c=h(a)+d(a);return b?c:Math.ceil(c)}):g=function(a,b){var c=h(a);return b?c:Math.ceil(c)};for(e in h)g[e]=h[e];return g.orgDomain=function(){return h.domain()},f.isCategorized()&&(g.domain=function(a){return arguments.length?(h.domain(a),g):(a=this.orgDomain(),[a[0],a[1]+1])}),g},i.getY=function(a,b,c){var d=this.getScale(a,b,this.isTimeSeriesY());return c&&d.domain(c),d},i.getYScale=function(a){return"y2"===this.axis.getId(a)?this.y2:this.y},i.getSubYScale=function(a){return"y2"===this.axis.getId(a)?this.subY2:this.subY},i.updateScales=function(){var a=this,b=a.config,c=!a.x;a.xMin=b.axis_rotated?1:0,a.xMax=b.axis_rotated?a.height:a.width,a.yMin=b.axis_rotated?0:a.height,a.yMax=b.axis_rotated?a.width:1,a.subXMin=a.xMin,a.subXMax=a.xMax,a.subYMin=b.axis_rotated?0:a.height2,a.subYMax=b.axis_rotated?a.width2:1,a.x=a.getX(a.xMin,a.xMax,c?void 0:a.x.orgDomain(),function(){return a.xAxis.tickOffset()}),a.y=a.getY(a.yMin,a.yMax,c?b.axis_y_default:a.y.domain()),a.y2=a.getY(a.yMin,a.yMax,c?b.axis_y2_default:a.y2.domain()),a.subX=a.getX(a.xMin,a.xMax,a.orgXDomain,function(b){return b%1?0:a.subXAxis.tickOffset()}),a.subY=a.getY(a.subYMin,a.subYMax,c?b.axis_y_default:a.subY.domain()),a.subY2=a.getY(a.subYMin,a.subYMax,c?b.axis_y2_default:a.subY2.domain()),a.xAxisTickFormat=a.axis.getXAxisTickFormat(),a.xAxisTickValues=a.axis.getXAxisTickValues(),a.yAxisTickValues=a.axis.getYAxisTickValues(),a.y2AxisTickValues=a.axis.getY2AxisTickValues(),a.xAxis=a.axis.getXAxis(a.x,a.xOrient,a.xAxisTickFormat,a.xAxisTickValues,b.axis_x_tick_outer),a.subXAxis=a.axis.getXAxis(a.subX,a.subXOrient,a.xAxisTickFormat,a.xAxisTickValues,b.axis_x_tick_outer),a.yAxis=a.axis.getYAxis(a.y,a.yOrient,b.axis_y_tick_format,a.yAxisTickValues,b.axis_y_tick_outer),a.y2Axis=a.axis.getYAxis(a.y2,a.y2Orient,b.axis_y2_tick_format,a.y2AxisTickValues,b.axis_y2_tick_outer),c||(a.brush&&a.brush.scale(a.subX),b.zoom_enabled&&a.zoom.scale(a.x)),a.updateArc&&a.updateArc()},i.getYDomainMin=function(a){var b,c,d,e,f,g,h=this,i=h.config,j=h.mapToIds(a),k=h.getValuesAsIdKeyed(a);if(i.data_groups.length>0)for(g=h.hasNegativeValueInTargets(a),b=0;b<i.data_groups.length;b++)if(e=i.data_groups[b].filter(function(a){return j.indexOf(a)>=0}),0!==e.length)for(d=e[0],g&&k[d]&&k[d].forEach(function(a,b){k[d][b]=0>a?a:0}),c=1;c<e.length;c++)f=e[c],k[f]&&k[f].forEach(function(a,b){h.axis.getId(f)!==h.axis.getId(d)||!k[d]||g&&+a>0||(k[d][b]+=+a)});return h.d3.min(Object.keys(k).map(function(a){return h.d3.min(k[a])}))},i.getYDomainMax=function(a){var b,c,d,e,f,g,h=this,i=h.config,j=h.mapToIds(a),k=h.getValuesAsIdKeyed(a);if(i.data_groups.length>0)for(g=h.hasPositiveValueInTargets(a),b=0;b<i.data_groups.length;b++)if(e=i.data_groups[b].filter(function(a){return j.indexOf(a)>=0}),0!==e.length)for(d=e[0],g&&k[d]&&k[d].forEach(function(a,b){k[d][b]=a>0?a:0}),c=1;c<e.length;c++)f=e[c],k[f]&&k[f].forEach(function(a,b){h.axis.getId(f)!==h.axis.getId(d)||!k[d]||g&&0>+a||(k[d][b]+=+a)});return h.d3.max(Object.keys(k).map(function(a){return h.d3.max(k[a])}))},i.getYDomain=function(a,b,c){var d,e,f,g,h,i,j,k,l,n,o,p=this,q=p.config,r=a.filter(function(a){return p.axis.getId(a.id)===b}),s=c?p.filterByXDomain(r,c):r,u="y2"===b?q.axis_y2_min:q.axis_y_min,w="y2"===b?q.axis_y2_max:q.axis_y_max,x=p.getYDomainMin(s),y=p.getYDomainMax(s),z="y2"===b?q.axis_y2_center:q.axis_y_center,A=p.hasType("bar",s)&&q.bar_zerobased||p.hasType("area",s)&&q.area_zerobased,B="y2"===b?q.axis_y2_inverted:q.axis_y_inverted,C=p.hasDataLabel()&&q.axis_rotated,D=p.hasDataLabel()&&!q.axis_rotated;return x=m(u)?u:m(w)?w>x?x:w-10:x,y=m(w)?w:m(u)?y>u?y:u+10:y,0===s.length?"y2"===b?p.y2.domain():p.y.domain():(isNaN(x)&&(x=0),isNaN(y)&&(y=x),x===y&&(0>x?y=0:x=0),n=x>=0&&y>=0,o=0>=x&&0>=y,(m(u)&&n||m(w)&&o)&&(A=!1),A&&(n&&(x=0),o&&(y=0)),e=Math.abs(y-x),f=g=h=.1*e,"undefined"!=typeof z&&(i=Math.max(Math.abs(x),Math.abs(y)),y=z+i,x=z-i),C?(j=p.getDataLabelLength(x,y,"width"),k=t(p.y.range()),l=[j[0]/k,j[1]/k],g+=e*(l[1]/(1-l[0]-l[1])),h+=e*(l[0]/(1-l[0]-l[1]))):D&&(j=p.getDataLabelLength(x,y,"height"),g+=p.axis.convertPixelsToAxisPadding(j[1],e),h+=p.axis.convertPixelsToAxisPadding(j[0],e)),"y"===b&&v(q.axis_y_padding)&&(g=p.axis.getPadding(q.axis_y_padding,"top",g,e),h=p.axis.getPadding(q.axis_y_padding,"bottom",h,e)),"y2"===b&&v(q.axis_y2_padding)&&(g=p.axis.getPadding(q.axis_y2_padding,"top",g,e),h=p.axis.getPadding(q.axis_y2_padding,"bottom",h,e)),A&&(n&&(h=x),o&&(g=-y)),d=[x-h,y+g],B?d.reverse():d)},i.getXDomainMin=function(a){var b=this,c=b.config;return q(c.axis_x_min)?b.isTimeSeries()?this.parseDate(c.axis_x_min):c.axis_x_min:b.d3.min(a,function(a){return b.d3.min(a.values,function(a){return a.x})})},i.getXDomainMax=function(a){var b=this,c=b.config;return q(c.axis_x_max)?b.isTimeSeries()?this.parseDate(c.axis_x_max):c.axis_x_max:b.d3.max(a,function(a){return b.d3.max(a.values,function(a){return a.x})})},i.getXDomainPadding=function(a){var b,c,d,e,f=this,g=f.config,h=a[1]-a[0];return f.isCategorized()?c=0:f.hasType("bar")?(b=f.getMaxDataCount(),c=b>1?h/(b-1)/2:.5):c=.01*h,"object"==typeof g.axis_x_padding&&v(g.axis_x_padding)?(d=m(g.axis_x_padding.left)?g.axis_x_padding.left:c,e=m(g.axis_x_padding.right)?g.axis_x_padding.right:c):d=e="number"==typeof g.axis_x_padding?g.axis_x_padding:c,{left:d,right:e}},i.getXDomain=function(a){var b=this,c=[b.getXDomainMin(a),b.getXDomainMax(a)],d=c[0],e=c[1],f=b.getXDomainPadding(c),g=0,h=0;
return d-e!==0||b.isCategorized()||(b.isTimeSeries()?(d=new Date(.5*d.getTime()),e=new Date(1.5*e.getTime())):(d=0===d?1:.5*d,e=0===e?-1:1.5*e)),(d||0===d)&&(g=b.isTimeSeries()?new Date(d.getTime()-f.left):d-f.left),(e||0===e)&&(h=b.isTimeSeries()?new Date(e.getTime()+f.right):e+f.right),[g,h]},i.updateXDomain=function(a,b,c,d,e){var f=this,g=f.config;return c&&(f.x.domain(e?e:f.d3.extent(f.getXDomain(a))),f.orgXDomain=f.x.domain(),g.zoom_enabled&&f.zoom.scale(f.x).updateScaleExtent(),f.subX.domain(f.x.domain()),f.brush&&f.brush.scale(f.subX)),b&&(f.x.domain(e?e:!f.brush||f.brush.empty()?f.orgXDomain:f.brush.extent()),g.zoom_enabled&&f.zoom.scale(f.x).updateScaleExtent()),d&&f.x.domain(f.trimXDomain(f.x.orgDomain())),f.x.domain()},i.trimXDomain=function(a){var b=this;return a[0]<=b.orgXDomain[0]&&(a[1]=+a[1]+(b.orgXDomain[0]-a[0]),a[0]=b.orgXDomain[0]),b.orgXDomain[1]<=a[1]&&(a[0]=+a[0]-(a[1]-b.orgXDomain[1]),a[1]=b.orgXDomain[1]),a},i.isX=function(a){var b=this,c=b.config;return c.data_x&&a===c.data_x||v(c.data_xs)&&x(c.data_xs,a)},i.isNotX=function(a){return!this.isX(a)},i.getXKey=function(a){var b=this,c=b.config;return c.data_x?c.data_x:v(c.data_xs)?c.data_xs[a]:null},i.getXValuesOfXKey=function(a,b){var c,d=this,e=b&&v(b)?d.mapToIds(b):[];return e.forEach(function(b){d.getXKey(b)===a&&(c=d.data.xs[b])}),c},i.getIndexByX=function(a){var b=this,c=b.filterByX(b.data.targets,a);return c.length?c[0].index:null},i.getXValue=function(a,b){var c=this;return a in c.data.xs&&c.data.xs[a]&&m(c.data.xs[a][b])?c.data.xs[a][b]:b},i.getOtherTargetXs=function(){var a=this,b=Object.keys(a.data.xs);return b.length?a.data.xs[b[0]]:null},i.getOtherTargetX=function(a){var b=this.getOtherTargetXs();return b&&a<b.length?b[a]:null},i.addXs=function(a){var b=this;Object.keys(a).forEach(function(c){b.config.data_xs[c]=a[c]})},i.hasMultipleX=function(a){return this.d3.set(Object.keys(a).map(function(b){return a[b]})).size()>1},i.isMultipleX=function(){return v(this.config.data_xs)||!this.config.data_xSort||this.hasType("scatter")},i.addName=function(a){var b,c=this;return a&&(b=c.config.data_names[a.id],a.name=b?b:a.id),a},i.getValueOnIndex=function(a,b){var c=a.filter(function(a){return a.index===b});return c.length?c[0]:null},i.updateTargetX=function(a,b){var c=this;a.forEach(function(a){a.values.forEach(function(d,e){d.x=c.generateTargetX(b[e],a.id,e)}),c.data.xs[a.id]=b})},i.updateTargetXs=function(a,b){var c=this;a.forEach(function(a){b[a.id]&&c.updateTargetX([a],b[a.id])})},i.generateTargetX=function(a,b,c){var d,e=this;return d=e.isTimeSeries()?e.parseDate(a?a:e.getXValue(b,c)):e.isCustomX()&&!e.isCategorized()?m(a)?+a:e.getXValue(b,c):c},i.cloneTarget=function(a){return{id:a.id,id_org:a.id_org,values:a.values.map(function(a){return{x:a.x,value:a.value,id:a.id}})}},i.updateXs=function(){var a=this;a.data.targets.length&&(a.xs=[],a.data.targets[0].values.forEach(function(b){a.xs[b.index]=b.x}))},i.getPrevX=function(a){var b=this.xs[a-1];return"undefined"!=typeof b?b:null},i.getNextX=function(a){var b=this.xs[a+1];return"undefined"!=typeof b?b:null},i.getMaxDataCount=function(){var a=this;return a.d3.max(a.data.targets,function(a){return a.values.length})},i.getMaxDataCountTarget=function(a){var b,c=a.length,d=0;return c>1?a.forEach(function(a){a.values.length>d&&(b=a,d=a.values.length)}):b=c?a[0]:null,b},i.getEdgeX=function(a){var b=this;return a.length?[b.d3.min(a,function(a){return a.values[0].x}),b.d3.max(a,function(a){return a.values[a.values.length-1].x})]:[0,0]},i.mapToIds=function(a){return a.map(function(a){return a.id})},i.mapToTargetIds=function(a){var b=this;return a?o(a)?[a]:a:b.mapToIds(b.data.targets)},i.hasTarget=function(a,b){var c,d=this.mapToIds(a);for(c=0;c<d.length;c++)if(d[c]===b)return!0;return!1},i.isTargetToShow=function(a){return this.hiddenTargetIds.indexOf(a)<0},i.isLegendToShow=function(a){return this.hiddenLegendIds.indexOf(a)<0},i.filterTargetsToShow=function(a){var b=this;return a.filter(function(a){return b.isTargetToShow(a.id)})},i.mapTargetsToUniqueXs=function(a){var b=this,c=b.d3.set(b.d3.merge(a.map(function(a){return a.values.map(function(a){return+a.x})}))).values();return c.map(b.isTimeSeries()?function(a){return new Date(+a)}:function(a){return+a})},i.addHiddenTargetIds=function(a){this.hiddenTargetIds=this.hiddenTargetIds.concat(a)},i.removeHiddenTargetIds=function(a){this.hiddenTargetIds=this.hiddenTargetIds.filter(function(b){return a.indexOf(b)<0})},i.addHiddenLegendIds=function(a){this.hiddenLegendIds=this.hiddenLegendIds.concat(a)},i.removeHiddenLegendIds=function(a){this.hiddenLegendIds=this.hiddenLegendIds.filter(function(b){return a.indexOf(b)<0})},i.getValuesAsIdKeyed=function(a){var b={};return a.forEach(function(a){b[a.id]=[],a.values.forEach(function(c){b[a.id].push(c.value)})}),b},i.checkValueInTargets=function(a,b){var c,d,e,f=Object.keys(a);for(c=0;c<f.length;c++)for(e=a[f[c]].values,d=0;d<e.length;d++)if(b(e[d].value))return!0;return!1},i.hasNegativeValueInTargets=function(a){return this.checkValueInTargets(a,function(a){return 0>a})},i.hasPositiveValueInTargets=function(a){return this.checkValueInTargets(a,function(a){return a>0})},i.isOrderDesc=function(){var a=this.config;return"string"==typeof a.data_order&&"desc"===a.data_order.toLowerCase()},i.isOrderAsc=function(){var a=this.config;return"string"==typeof a.data_order&&"asc"===a.data_order.toLowerCase()},i.orderTargets=function(a){var b=this,c=b.config,d=b.isOrderAsc(),e=b.isOrderDesc();return d||e?a.sort(function(a,b){var c=function(a,b){return a+Math.abs(b.value)},e=a.values.reduce(c,0),f=b.values.reduce(c,0);return d?f-e:e-f}):n(c.data_order)&&a.sort(c.data_order),a},i.filterByX=function(a,b){return this.d3.merge(a.map(function(a){return a.values})).filter(function(a){return a.x-b===0})},i.filterRemoveNull=function(a){return a.filter(function(a){return m(a.value)})},i.filterByXDomain=function(a,b){return a.map(function(a){return{id:a.id,id_org:a.id_org,values:a.values.filter(function(a){return b[0]<=a.x&&a.x<=b[1]})}})},i.hasDataLabel=function(){var a=this.config;return"boolean"==typeof a.data_labels&&a.data_labels?!0:"object"==typeof a.data_labels&&v(a.data_labels)?!0:!1},i.getDataLabelLength=function(a,b,c){var d=this,e=[0,0],f=1.3;return d.selectChart.select("svg").selectAll(".dummy").data([a,b]).enter().append("text").text(function(a){return d.dataLabelFormat(a.id)(a)}).each(function(a,b){e[b]=this.getBoundingClientRect()[c]*f}).remove(),e},i.isNoneArc=function(a){return this.hasTarget(this.data.targets,a.id)},i.isArc=function(a){return"data"in a&&this.hasTarget(this.data.targets,a.data.id)},i.findSameXOfValues=function(a,b){var c,d=a[b].x,e=[];for(c=b-1;c>=0&&d===a[c].x;c--)e.push(a[c]);for(c=b;c<a.length&&d===a[c].x;c++)e.push(a[c]);return e},i.findClosestFromTargets=function(a,b){var c,d=this;return c=a.map(function(a){return d.findClosest(a.values,b)}),d.findClosest(c,b)},i.findClosest=function(a,b){var c,d=this,e=100;return a.filter(function(a){return a&&d.isBarType(a.id)}).forEach(function(a){var b=d.main.select("."+l.bars+d.getTargetSelectorSuffix(a.id)+" ."+l.bar+"-"+a.index).node();!c&&d.isWithinBar(b)&&(c=a)}),a.filter(function(a){return a&&!d.isBarType(a.id)}).forEach(function(a){var f=d.dist(a,b);e>f&&(e=f,c=a)}),c},i.dist=function(a,b){var c=this,d=c.config,e=d.axis_rotated?1:0,f=d.axis_rotated?0:1,g=c.circleY(a,a.index),h=c.x(a.x);return Math.pow(h-b[e],2)+Math.pow(g-b[f],2)},i.convertValuesToStep=function(a){var b,c=[].concat(a);if(!this.isCategorized())return a;for(b=a.length+1;b>0;b--)c[b]=c[b-1];return c[0]={x:c[0].x-1,value:c[0].value,id:c[0].id},c[a.length+1]={x:c[a.length].x+1,value:c[a.length].value,id:c[a.length].id},c},i.updateDataAttributes=function(a,b){var c=this,d=c.config,e=d["data_"+a];return"undefined"==typeof b?e:(Object.keys(b).forEach(function(a){e[a]=b[a]}),c.redraw({withLegend:!0}),e)},i.convertUrlToData=function(a,b,c,d){var e=this,f=b?b:"csv";e.d3.xhr(a,function(a,b){var g;if(!b)throw new Error(a.responseURL+" "+a.status+" ("+a.statusText+")");g="json"===f?e.convertJsonToData(JSON.parse(b.response),c):"tsv"===f?e.convertTsvToData(b.response):e.convertCsvToData(b.response),d.call(e,g)})},i.convertXsvToData=function(a,b){var c,d=b.parseRows(a);return 1===d.length?(c=[{}],d[0].forEach(function(a){c[0][a]=null})):c=b.parse(a),c},i.convertCsvToData=function(a){return this.convertXsvToData(a,this.d3.csv)},i.convertTsvToData=function(a){return this.convertXsvToData(a,this.d3.tsv)},i.convertJsonToData=function(a,b){var c,d,e=this,f=[];return b?(b.x?(c=b.value.concat(b.x),e.config.data_x=b.x):c=b.value,f.push(c),a.forEach(function(a){var b=[];c.forEach(function(c){var d=p(a[c])?null:a[c];b.push(d)}),f.push(b)}),d=e.convertRowsToData(f)):(Object.keys(a).forEach(function(b){f.push([b].concat(a[b]))}),d=e.convertColumnsToData(f)),d},i.convertRowsToData=function(a){var b,c,d=a[0],e={},f=[];for(b=1;b<a.length;b++){for(e={},c=0;c<a[b].length;c++){if(p(a[b][c]))throw new Error("Source data is missing a component at ("+b+","+c+")!");e[d[c]]=a[b][c]}f.push(e)}return f},i.convertColumnsToData=function(a){var b,c,d,e=[];for(b=0;b<a.length;b++)for(d=a[b][0],c=1;c<a[b].length;c++){if(p(e[c-1])&&(e[c-1]={}),p(a[b][c]))throw new Error("Source data is missing a component at ("+b+","+c+")!");e[c-1][d]=a[b][c]}return e},i.convertDataToTargets=function(a,b){var c,d=this,e=d.config,f=d.d3.keys(a[0]).filter(d.isNotX,d),g=d.d3.keys(a[0]).filter(d.isX,d);return f.forEach(function(c){var f=d.getXKey(c);d.isCustomX()||d.isTimeSeries()?g.indexOf(f)>=0?d.data.xs[c]=(b&&d.data.xs[c]?d.data.xs[c]:[]).concat(a.map(function(a){return a[f]}).filter(m).map(function(a,b){return d.generateTargetX(a,c,b)})):e.data_x?d.data.xs[c]=d.getOtherTargetXs():v(e.data_xs)&&(d.data.xs[c]=d.getXValuesOfXKey(f,d.data.targets)):d.data.xs[c]=a.map(function(a,b){return b})}),f.forEach(function(a){if(!d.data.xs[a])throw new Error('x is not defined for id = "'+a+'".')}),c=f.map(function(b,c){var f=e.data_idConverter(b);return{id:f,id_org:b,values:a.map(function(a,g){var h=d.getXKey(b),i=a[h],j=d.generateTargetX(i,b,g);return d.isCustomX()&&d.isCategorized()&&0===c&&i&&(0===g&&(e.axis_x_categories=[]),e.axis_x_categories.push(i)),(p(a[b])||d.data.xs[b].length<=g)&&(j=void 0),{x:j,value:null===a[b]||isNaN(a[b])?null:+a[b],id:f}}).filter(function(a){return q(a.x)})}}),c.forEach(function(a){var b;e.data_xSort&&(a.values=a.values.sort(function(a,b){var c=a.x||0===a.x?a.x:1/0,d=b.x||0===b.x?b.x:1/0;return c-d})),b=0,a.values.forEach(function(a){a.index=b++}),d.data.xs[a.id].sort(function(a,b){return a-b})}),e.data_type&&d.setTargetType(d.mapToIds(c).filter(function(a){return!(a in e.data_types)}),e.data_type),c.forEach(function(a){d.addCache(a.id_org,a)}),c},i.load=function(a,b){var c=this;a&&(b.filter&&(a=a.filter(b.filter)),(b.type||b.types)&&a.forEach(function(a){var d=b.types&&b.types[a.id]?b.types[a.id]:b.type;c.setTargetType(a.id,d)}),c.data.targets.forEach(function(b){for(var c=0;c<a.length;c++)if(b.id===a[c].id){b.values=a[c].values,a.splice(c,1);break}}),c.data.targets=c.data.targets.concat(a)),c.updateTargets(c.data.targets),c.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0}),b.done&&b.done()},i.loadFromArgs=function(a){var b=this;a.data?b.load(b.convertDataToTargets(a.data),a):a.url?b.convertUrlToData(a.url,a.mimeType,a.keys,function(c){b.load(b.convertDataToTargets(c),a)}):a.json?b.load(b.convertDataToTargets(b.convertJsonToData(a.json,a.keys)),a):a.rows?b.load(b.convertDataToTargets(b.convertRowsToData(a.rows)),a):a.columns?b.load(b.convertDataToTargets(b.convertColumnsToData(a.columns)),a):b.load(null,a)},i.unload=function(a,b){var c=this;return b||(b=function(){}),a=a.filter(function(a){return c.hasTarget(c.data.targets,a)}),a&&0!==a.length?(c.svg.selectAll(a.map(function(a){return c.selectorTarget(a)})).transition().style("opacity",0).remove().call(c.endall,b),void a.forEach(function(a){c.withoutFadeIn[a]=!1,c.legend&&c.legend.selectAll("."+l.legendItem+c.getTargetSelectorSuffix(a)).remove(),c.data.targets=c.data.targets.filter(function(b){return b.id!==a})})):void b()},i.categoryName=function(a){var b=this.config;return a<b.axis_x_categories.length?b.axis_x_categories[a]:a},i.initEventRect=function(){var a=this;a.main.select("."+l.chart).append("g").attr("class",l.eventRects).style("fill-opacity",0)},i.redrawEventRect=function(){var a,b,c=this,d=c.config,e=c.isMultipleX(),f=c.main.select("."+l.eventRects).style("cursor",d.zoom_enabled?d.axis_rotated?"ns-resize":"ew-resize":null).classed(l.eventRectsMultiple,e).classed(l.eventRectsSingle,!e);f.selectAll("."+l.eventRect).remove(),c.eventRect=f.selectAll("."+l.eventRect),e?(a=c.eventRect.data([0]),c.generateEventRectsForMultipleXs(a.enter()),c.updateEventRect(a)):(b=c.getMaxDataCountTarget(c.data.targets),f.datum(b?b.values:[]),c.eventRect=f.selectAll("."+l.eventRect),a=c.eventRect.data(function(a){return a}),c.generateEventRectsForSingleX(a.enter()),c.updateEventRect(a),a.exit().remove())},i.updateEventRect=function(a){var b,c,d,e,f,g,h=this,i=h.config;a=a||h.eventRect.data(function(a){return a}),h.isMultipleX()?(b=0,c=0,d=h.width,e=h.height):(!h.isCustomX()&&!h.isTimeSeries()||h.isCategorized()?(f=h.getEventRectWidth(),g=function(a){return h.x(a.x)-f/2}):(h.updateXs(),f=function(a){var b=h.getPrevX(a.index),c=h.getNextX(a.index);return null===b&&null===c?i.axis_rotated?h.height:h.width:(null===b&&(b=h.x.domain()[0]),null===c&&(c=h.x.domain()[1]),Math.max(0,(h.x(c)-h.x(b))/2))},g=function(a){var b=h.getPrevX(a.index),c=h.getNextX(a.index),d=h.data.xs[a.id][a.index];return null===b&&null===c?0:(null===b&&(b=h.x.domain()[0]),(h.x(d)+h.x(b))/2)}),b=i.axis_rotated?0:g,c=i.axis_rotated?g:0,d=i.axis_rotated?h.width:f,e=i.axis_rotated?f:h.height),a.attr("class",h.classEvent.bind(h)).attr("x",b).attr("y",c).attr("width",d).attr("height",e)},i.generateEventRectsForSingleX=function(a){var b=this,c=b.d3,d=b.config;a.append("rect").attr("class",b.classEvent.bind(b)).style("cursor",d.data_selection_enabled&&d.data_selection_grouped?"pointer":null).on("mouseover",function(a){var c=a.index;b.dragging||b.flowing||b.hasArcType()||(d.point_focus_expand_enabled&&b.expandCircles(c,null,!0),b.expandBars(c,null,!0),b.main.selectAll("."+l.shape+"-"+c).each(function(a){d.data_onmouseover.call(b.api,a)}))}).on("mouseout",function(a){var c=a.index;b.config&&(b.hasArcType()||(b.hideXGridFocus(),b.hideTooltip(),b.unexpandCircles(),b.unexpandBars(),b.main.selectAll("."+l.shape+"-"+c).each(function(a){d.data_onmouseout.call(b.api,a)})))}).on("mousemove",function(a){var e,f=a.index,g=b.svg.select("."+l.eventRect+"-"+f);b.dragging||b.flowing||b.hasArcType()||(b.isStepType(a)&&"step-after"===b.config.line_step_type&&c.mouse(this)[0]<b.x(b.getXValue(a.id,f))&&(f-=1),e=b.filterTargetsToShow(b.data.targets).map(function(a){return b.addName(b.getValueOnIndex(a.values,f))}),d.tooltip_grouped&&(b.showTooltip(e,this),b.showXGridFocus(e)),(!d.tooltip_grouped||d.data_selection_enabled&&!d.data_selection_grouped)&&b.main.selectAll("."+l.shape+"-"+f).each(function(){c.select(this).classed(l.EXPANDED,!0),d.data_selection_enabled&&g.style("cursor",d.data_selection_grouped?"pointer":null),d.tooltip_grouped||(b.hideXGridFocus(),b.hideTooltip(),d.data_selection_grouped||(b.unexpandCircles(f),b.unexpandBars(f)))}).filter(function(a){return b.isWithinShape(this,a)}).each(function(a){d.data_selection_enabled&&(d.data_selection_grouped||d.data_selection_isselectable(a))&&g.style("cursor","pointer"),d.tooltip_grouped||(b.showTooltip([a],this),b.showXGridFocus([a]),d.point_focus_expand_enabled&&b.expandCircles(f,a.id,!0),b.expandBars(f,a.id,!0))}))}).on("click",function(a){var e=a.index;if(!b.hasArcType()&&b.toggleShape){if(b.cancelClick)return void(b.cancelClick=!1);b.isStepType(a)&&"step-after"===d.line_step_type&&c.mouse(this)[0]<b.x(b.getXValue(a.id,e))&&(e-=1),b.main.selectAll("."+l.shape+"-"+e).each(function(a){(d.data_selection_grouped||b.isWithinShape(this,a))&&(b.toggleShape(this,a,e),b.config.data_onclick.call(b.api,a,this))})}}).call(d.data_selection_draggable&&b.drag?c.behavior.drag().origin(Object).on("drag",function(){b.drag(c.mouse(this))}).on("dragstart",function(){b.dragstart(c.mouse(this))}).on("dragend",function(){b.dragend()}):function(){})},i.generateEventRectsForMultipleXs=function(a){function b(){c.svg.select("."+l.eventRect).style("cursor",null),c.hideXGridFocus(),c.hideTooltip(),c.unexpandCircles(),c.unexpandBars()}var c=this,d=c.d3,e=c.config;a.append("rect").attr("x",0).attr("y",0).attr("width",c.width).attr("height",c.height).attr("class",l.eventRect).on("mouseout",function(){c.config&&(c.hasArcType()||b())}).on("mousemove",function(){var a,f,g,h,i=c.filterTargetsToShow(c.data.targets);if(!c.dragging&&!c.hasArcType(i)){if(a=d.mouse(this),f=c.findClosestFromTargets(i,a),!c.mouseover||f&&f.id===c.mouseover.id||(e.data_onmouseout.call(c.api,c.mouseover),c.mouseover=void 0),!f)return void b();g=c.isScatterType(f)||!e.tooltip_grouped?[f]:c.filterByX(i,f.x),h=g.map(function(a){return c.addName(a)}),c.showTooltip(h,this),e.point_focus_expand_enabled&&c.expandCircles(f.index,f.id,!0),c.expandBars(f.index,f.id,!0),c.showXGridFocus(h),(c.isBarType(f.id)||c.dist(f,a)<100)&&(c.svg.select("."+l.eventRect).style("cursor","pointer"),c.mouseover||(e.data_onmouseover.call(c.api,f),c.mouseover=f))}}).on("click",function(){var a,b,f=c.filterTargetsToShow(c.data.targets);c.hasArcType(f)||(a=d.mouse(this),b=c.findClosestFromTargets(f,a),b&&(c.isBarType(b.id)||c.dist(b,a)<100)&&c.main.selectAll("."+l.shapes+c.getTargetSelectorSuffix(b.id)).selectAll("."+l.shape+"-"+b.index).each(function(){(e.data_selection_grouped||c.isWithinShape(this,b))&&(c.toggleShape(this,b,b.index),c.config.data_onclick.call(c.api,b,this))}))}).call(e.data_selection_draggable&&c.drag?d.behavior.drag().origin(Object).on("drag",function(){c.drag(d.mouse(this))}).on("dragstart",function(){c.dragstart(d.mouse(this))}).on("dragend",function(){c.dragend()}):function(){})},i.dispatchEvent=function(b,c,d){var e=this,f="."+l.eventRect+(e.isMultipleX()?"":"-"+c),g=e.main.select(f).node(),h=g.getBoundingClientRect(),i=h.left+(d?d[0]:0),j=h.top+(d?d[1]:0),k=document.createEvent("MouseEvents");k.initMouseEvent(b,!0,!0,a,0,i,j,i,j,!1,!1,!1,!1,0,null),g.dispatchEvent(k)},i.getCurrentWidth=function(){var a=this,b=a.config;return b.size_width?b.size_width:a.getParentWidth()},i.getCurrentHeight=function(){var a=this,b=a.config,c=b.size_height?b.size_height:a.getParentHeight();return c>0?c:320/(a.hasType("gauge")?2:1)},i.getCurrentPaddingTop=function(){var a=this.config;return m(a.padding_top)?a.padding_top:0},i.getCurrentPaddingBottom=function(){var a=this.config;return m(a.padding_bottom)?a.padding_bottom:0},i.getCurrentPaddingLeft=function(a){var b=this,c=b.config;return m(c.padding_left)?c.padding_left:c.axis_rotated?c.axis_x_show?Math.max(r(b.getAxisWidthByAxisId("x",a)),40):1:!c.axis_y_show||c.axis_y_inner?b.axis.getYAxisLabelPosition().isOuter?30:1:r(b.getAxisWidthByAxisId("y",a))},i.getCurrentPaddingRight=function(){var a=this,b=a.config,c=10,d=a.isLegendRight?a.getLegendWidth()+20:0;return m(b.padding_right)?b.padding_right+1:b.axis_rotated?c+d:!b.axis_y2_show||b.axis_y2_inner?2+d+(a.axis.getY2AxisLabelPosition().isOuter?20:0):r(a.getAxisWidthByAxisId("y2"))+d},i.getParentRectValue=function(a){for(var b,c=this.selectChart.node();c&&"BODY"!==c.tagName;){try{b=c.getBoundingClientRect()[a]}catch(d){"width"===a&&(b=c.offsetWidth)}if(b)break;c=c.parentNode}return b},i.getParentWidth=function(){return this.getParentRectValue("width")},i.getParentHeight=function(){var a=this.selectChart.style("height");return a.indexOf("px")>0?+a.replace("px",""):0},i.getSvgLeft=function(a){var b=this,c=b.config,d=c.axis_rotated||!c.axis_rotated&&!c.axis_y_inner,e=c.axis_rotated?l.axisX:l.axisY,f=b.main.select("."+e).node(),g=f&&d?f.getBoundingClientRect():{right:0},h=b.selectChart.node().getBoundingClientRect(),i=b.hasArcType(),j=g.right-h.left-(i?0:b.getCurrentPaddingLeft(a));return j>0?j:0},i.getAxisWidthByAxisId=function(a,b){var c=this,d=c.axis.getLabelPositionById(a);return c.axis.getMaxTickWidth(a,b)+(d.isInner?20:40)},i.getHorizontalAxisHeight=function(a){var b=this,c=b.config,d=30;return"x"!==a||c.axis_x_show?"x"===a&&c.axis_x_height?c.axis_x_height:"y"!==a||c.axis_y_show?"y2"!==a||c.axis_y2_show?("x"===a&&!c.axis_rotated&&c.axis_x_tick_rotate&&(d=30+b.axis.getMaxTickWidth(a)*Math.cos(Math.PI*(90-c.axis_x_tick_rotate)/180)),d+(b.axis.getLabelPositionById(a).isInner?0:10)+("y2"===a?-10:0)):b.rotated_padding_top:!c.legend_show||b.isLegendRight||b.isLegendInset?1:10:8},i.getEventRectWidth=function(){return Math.max(0,this.xAxis.tickInterval())},i.getShapeIndices=function(a){var b,c,d=this,e=d.config,f={},g=0;return d.filterTargetsToShow(d.data.targets.filter(a,d)).forEach(function(a){for(b=0;b<e.data_groups.length;b++)if(!(e.data_groups[b].indexOf(a.id)<0))for(c=0;c<e.data_groups[b].length;c++)if(e.data_groups[b][c]in f){f[a.id]=f[e.data_groups[b][c]];break}p(f[a.id])&&(f[a.id]=g++)}),f.__max__=g-1,f},i.getShapeX=function(a,b,c,d){var e=this,f=d?e.subX:e.x;return function(d){var e=d.id in c?c[d.id]:0;return d.x||0===d.x?f(d.x)-a*(b/2-e):0}},i.getShapeY=function(a){var b=this;return function(c){var d=a?b.getSubYScale(c.id):b.getYScale(c.id);return d(c.value)}},i.getShapeOffset=function(a,b,c){var d=this,e=d.orderTargets(d.filterTargetsToShow(d.data.targets.filter(a,d))),f=e.map(function(a){return a.id});return function(a,g){var h=c?d.getSubYScale(a.id):d.getYScale(a.id),i=h(0),j=i;return e.forEach(function(c){var e=d.isStepType(a)?d.convertValuesToStep(c.values):c.values;c.id!==a.id&&b[c.id]===b[a.id]&&f.indexOf(c.id)<f.indexOf(a.id)&&e[g].value*a.value>=0&&(j+=h(e[g].value)-i)}),j}},i.isWithinShape=function(a,b){var c,d=this,e=d.d3.select(a);return d.isTargetToShow(b.id)?"circle"===a.nodeName?c=d.isStepType(b)?d.isWithinStep(a,d.getYScale(b.id)(b.value)):d.isWithinCircle(a,1.5*d.pointSelectR(b)):"path"===a.nodeName&&(c=e.classed(l.bar)?d.isWithinBar(a):!0):c=!1,c},i.getInterpolate=function(a){var b=this;return b.isSplineType(a)?"cardinal":b.isStepType(a)?b.config.line_step_type:"linear"},i.initLine=function(){var a=this;a.main.select("."+l.chart).append("g").attr("class",l.chartLines)},i.updateTargetsForLine=function(a){var b,c,d=this,e=d.config,f=d.classChartLine.bind(d),g=d.classLines.bind(d),h=d.classAreas.bind(d),i=d.classCircles.bind(d),j=d.classFocus.bind(d);b=d.main.select("."+l.chartLines).selectAll("."+l.chartLine).data(a).attr("class",function(a){return f(a)+j(a)}),c=b.enter().append("g").attr("class",f).style("opacity",0).style("pointer-events","none"),c.append("g").attr("class",g),c.append("g").attr("class",h),c.append("g").attr("class",function(a){return d.generateClass(l.selectedCircles,a.id)}),c.append("g").attr("class",i).style("cursor",function(a){return e.data_selection_isselectable(a)?"pointer":null}),a.forEach(function(a){d.main.selectAll("."+l.selectedCircles+d.getTargetSelectorSuffix(a.id)).selectAll("."+l.selectedCircle).each(function(b){b.value=a.values[b.index].value})})},i.updateLine=function(a){var b=this;b.mainLine=b.main.selectAll("."+l.lines).selectAll("."+l.line).data(b.lineData.bind(b)),b.mainLine.enter().append("path").attr("class",b.classLine.bind(b)).style("stroke",b.color),b.mainLine.style("opacity",b.initialOpacity.bind(b)).style("shape-rendering",function(a){return b.isStepType(a)?"crispEdges":""}).attr("transform",null),b.mainLine.exit().transition().duration(a).style("opacity",0).remove()},i.redrawLine=function(a,b){return[(b?this.mainLine.transition():this.mainLine).attr("d",a).style("stroke",this.color).style("opacity",1)]},i.generateDrawLine=function(a,b){var c=this,d=c.config,e=c.d3.svg.line(),f=c.generateGetLinePoints(a,b),g=b?c.getSubYScale:c.getYScale,h=function(a){return(b?c.subxx:c.xx).call(c,a)},i=function(a,b){return d.data_groups.length>0?f(a,b)[0][1]:g.call(c,a.id)(a.value)};return e=d.axis_rotated?e.x(i).y(h):e.x(h).y(i),d.line_connectNull||(e=e.defined(function(a){return null!=a.value})),function(a){var f,h=d.line_connectNull?c.filterRemoveNull(a.values):a.values,i=b?c.x:c.subX,j=g.call(c,a.id),k=0,l=0;return c.isLineType(a)?d.data_regions[a.id]?f=c.lineWithRegions(h,i,j,d.data_regions[a.id]):(c.isStepType(a)&&(h=c.convertValuesToStep(h)),f=e.interpolate(c.getInterpolate(a))(h)):(h[0]&&(k=i(h[0].x),l=j(h[0].value)),f=d.axis_rotated?"M "+l+" "+k:"M "+k+" "+l),f?f:"M 0 0"}},i.generateGetLinePoints=function(a,b){var c=this,d=c.config,e=a.__max__+1,f=c.getShapeX(0,e,a,!!b),g=c.getShapeY(!!b),h=c.getShapeOffset(c.isLineType,a,!!b),i=b?c.getSubYScale:c.getYScale;return function(a,b){var e=i.call(c,a.id)(0),j=h(a,b)||e,k=f(a),l=g(a);return d.axis_rotated&&(0<a.value&&e>l||a.value<0&&l>e)&&(l=e),[[k,l-(e-j)],[k,l-(e-j)],[k,l-(e-j)],[k,l-(e-j)]]}},i.lineWithRegions=function(a,b,c,d){function e(a,b){var c;for(c=0;c<b.length;c++)if(b[c].start<a&&a<=b[c].end)return!0;return!1}function f(a){return"M"+a[0][0]+" "+a[0][1]+" "+a[1][0]+" "+a[1][1]}var g,h,i,j,k,l,m,n,o,r,s,t,u=this,v=u.config,w=-1,x="M",y=u.isCategorized()?.5:0,z=[];if(q(d))for(g=0;g<d.length;g++)z[g]={},z[g].start=p(d[g].start)?a[0].x:u.isTimeSeries()?u.parseDate(d[g].start):d[g].start,z[g].end=p(d[g].end)?a[a.length-1].x:u.isTimeSeries()?u.parseDate(d[g].end):d[g].end;for(s=v.axis_rotated?function(a){return c(a.value)}:function(a){return b(a.x)},t=v.axis_rotated?function(a){return b(a.x)}:function(a){return c(a.value)},i=u.isTimeSeries()?function(a,d,e,g){var h,i=a.x.getTime(),j=d.x-a.x,l=new Date(i+j*e),m=new Date(i+j*(e+g));return h=v.axis_rotated?[[c(k(e)),b(l)],[c(k(e+g)),b(m)]]:[[b(l),c(k(e))],[b(m),c(k(e+g))]],f(h)}:function(a,d,e,g){var h;return h=v.axis_rotated?[[c(k(e),!0),b(j(e))],[c(k(e+g),!0),b(j(e+g))]]:[[b(j(e),!0),c(k(e))],[b(j(e+g),!0),c(k(e+g))]],f(h)},g=0;g<a.length;g++){if(p(z)||!e(a[g].x,z))x+=" "+s(a[g])+" "+t(a[g]);else for(j=u.getScale(a[g-1].x+y,a[g].x+y,u.isTimeSeries()),k=u.getScale(a[g-1].value,a[g].value),l=b(a[g].x)-b(a[g-1].x),m=c(a[g].value)-c(a[g-1].value),n=Math.sqrt(Math.pow(l,2)+Math.pow(m,2)),o=2/n,r=2*o,h=o;1>=h;h+=r)x+=i(a[g-1],a[g],h,o);w=a[g].x}return x},i.updateArea=function(a){var b=this,c=b.d3;b.mainArea=b.main.selectAll("."+l.areas).selectAll("."+l.area).data(b.lineData.bind(b)),b.mainArea.enter().append("path").attr("class",b.classArea.bind(b)).style("fill",b.color).style("opacity",function(){return b.orgAreaOpacity=+c.select(this).style("opacity"),0}),b.mainArea.style("opacity",b.orgAreaOpacity),b.mainArea.exit().transition().duration(a).style("opacity",0).remove()},i.redrawArea=function(a,b){return[(b?this.mainArea.transition():this.mainArea).attr("d",a).style("fill",this.color).style("opacity",this.orgAreaOpacity)]},i.generateDrawArea=function(a,b){var c=this,d=c.config,e=c.d3.svg.area(),f=c.generateGetAreaPoints(a,b),g=b?c.getSubYScale:c.getYScale,h=function(a){return(b?c.subxx:c.xx).call(c,a)},i=function(a,b){return d.data_groups.length>0?f(a,b)[0][1]:g.call(c,a.id)(c.getAreaBaseValue(a.id))},j=function(a,b){return d.data_groups.length>0?f(a,b)[1][1]:g.call(c,a.id)(a.value)};return e=d.axis_rotated?e.x0(i).x1(j).y(h):e.x(h).y0(i).y1(j),d.line_connectNull||(e=e.defined(function(a){return null!==a.value})),function(a){var b,f=d.line_connectNull?c.filterRemoveNull(a.values):a.values,g=0,h=0;return c.isAreaType(a)?(c.isStepType(a)&&(f=c.convertValuesToStep(f)),b=e.interpolate(c.getInterpolate(a))(f)):(f[0]&&(g=c.x(f[0].x),h=c.getYScale(a.id)(f[0].value)),b=d.axis_rotated?"M "+h+" "+g:"M "+g+" "+h),b?b:"M 0 0"}},i.getAreaBaseValue=function(){return 0},i.generateGetAreaPoints=function(a,b){var c=this,d=c.config,e=a.__max__+1,f=c.getShapeX(0,e,a,!!b),g=c.getShapeY(!!b),h=c.getShapeOffset(c.isAreaType,a,!!b),i=b?c.getSubYScale:c.getYScale;return function(a,b){var e=i.call(c,a.id)(0),j=h(a,b)||e,k=f(a),l=g(a);return d.axis_rotated&&(0<a.value&&e>l||a.value<0&&l>e)&&(l=e),[[k,j],[k,l-(e-j)],[k,l-(e-j)],[k,j]]}},i.updateCircle=function(){var a=this;a.mainCircle=a.main.selectAll("."+l.circles).selectAll("."+l.circle).data(a.lineOrScatterData.bind(a)),a.mainCircle.enter().append("circle").attr("class",a.classCircle.bind(a)).attr("r",a.pointR.bind(a)).style("fill",a.color),a.mainCircle.style("opacity",a.initialOpacityForCircle.bind(a)),a.mainCircle.exit().remove()},i.redrawCircle=function(a,b,c){var d=this.main.selectAll("."+l.selectedCircle);return[(c?this.mainCircle.transition():this.mainCircle).style("opacity",this.opacityForCircle.bind(this)).style("fill",this.color).attr("cx",a).attr("cy",b),(c?d.transition():d).attr("cx",a).attr("cy",b)]},i.circleX=function(a){return a.x||0===a.x?this.x(a.x):null},i.updateCircleY=function(){var a,b,c=this;c.config.data_groups.length>0?(a=c.getShapeIndices(c.isLineType),b=c.generateGetLinePoints(a),c.circleY=function(a,c){return b(a,c)[0][1]}):c.circleY=function(a){return c.getYScale(a.id)(a.value)}},i.getCircles=function(a,b){var c=this;return(b?c.main.selectAll("."+l.circles+c.getTargetSelectorSuffix(b)):c.main).selectAll("."+l.circle+(m(a)?"-"+a:""))},i.expandCircles=function(a,b,c){var d=this,e=d.pointExpandedR.bind(d);c&&d.unexpandCircles(),d.getCircles(a,b).classed(l.EXPANDED,!0).attr("r",e)},i.unexpandCircles=function(a){var b=this,c=b.pointR.bind(b);b.getCircles(a).filter(function(){return b.d3.select(this).classed(l.EXPANDED)}).classed(l.EXPANDED,!1).attr("r",c)},i.pointR=function(a){var b=this,c=b.config;return b.isStepType(a)?0:n(c.point_r)?c.point_r(a):c.point_r},i.pointExpandedR=function(a){var b=this,c=b.config;return c.point_focus_expand_enabled?c.point_focus_expand_r?c.point_focus_expand_r:1.75*b.pointR(a):b.pointR(a)},i.pointSelectR=function(a){var b=this,c=b.config;return c.point_select_r?c.point_select_r:4*b.pointR(a)},i.isWithinCircle=function(a,b){var c=this.d3,d=c.mouse(a),e=c.select(a),f=+e.attr("cx"),g=+e.attr("cy");return Math.sqrt(Math.pow(f-d[0],2)+Math.pow(g-d[1],2))<b},i.isWithinStep=function(a,b){return Math.abs(b-this.d3.mouse(a)[1])<30},i.initBar=function(){var a=this;a.main.select("."+l.chart).append("g").attr("class",l.chartBars)},i.updateTargetsForBar=function(a){var b,c,d=this,e=d.config,f=d.classChartBar.bind(d),g=d.classBars.bind(d),h=d.classFocus.bind(d);b=d.main.select("."+l.chartBars).selectAll("."+l.chartBar).data(a).attr("class",function(a){return f(a)+h(a)}),c=b.enter().append("g").attr("class",f).style("opacity",0).style("pointer-events","none"),c.append("g").attr("class",g).style("cursor",function(a){return e.data_selection_isselectable(a)?"pointer":null})},i.updateBar=function(a){var b=this,c=b.barData.bind(b),d=b.classBar.bind(b),e=b.initialOpacity.bind(b),f=function(a){return b.color(a.id)};b.mainBar=b.main.selectAll("."+l.bars).selectAll("."+l.bar).data(c),b.mainBar.enter().append("path").attr("class",d).style("stroke",f).style("fill",f),b.mainBar.style("opacity",e),b.mainBar.exit().transition().duration(a).style("opacity",0).remove()},i.redrawBar=function(a,b){return[(b?this.mainBar.transition():this.mainBar).attr("d",a).style("fill",this.color).style("opacity",1)]},i.getBarW=function(a,b){var c=this,d=c.config,e="number"==typeof d.bar_width?d.bar_width:b?a.tickInterval()*d.bar_width_ratio/b:0;return d.bar_width_max&&e>d.bar_width_max?d.bar_width_max:e},i.getBars=function(a,b){var c=this;return(b?c.main.selectAll("."+l.bars+c.getTargetSelectorSuffix(b)):c.main).selectAll("."+l.bar+(m(a)?"-"+a:""))},i.expandBars=function(a,b,c){var d=this;c&&d.unexpandBars(),d.getBars(a,b).classed(l.EXPANDED,!0)},i.unexpandBars=function(a){var b=this;b.getBars(a).classed(l.EXPANDED,!1)},i.generateDrawBar=function(a,b){var c=this,d=c.config,e=c.generateGetBarPoints(a,b);return function(a,b){var c=e(a,b),f=d.axis_rotated?1:0,g=d.axis_rotated?0:1,h="M "+c[0][f]+","+c[0][g]+" L"+c[1][f]+","+c[1][g]+" L"+c[2][f]+","+c[2][g]+" L"+c[3][f]+","+c[3][g]+" z";return h}},i.generateGetBarPoints=function(a,b){var c=this,d=b?c.subXAxis:c.xAxis,e=a.__max__+1,f=c.getBarW(d,e),g=c.getShapeX(f,e,a,!!b),h=c.getShapeY(!!b),i=c.getShapeOffset(c.isBarType,a,!!b),j=b?c.getSubYScale:c.getYScale;
return function(a,b){var d=j.call(c,a.id)(0),e=i(a,b)||d,k=g(a),l=h(a);return c.config.axis_rotated&&(0<a.value&&d>l||a.value<0&&l>d)&&(l=d),[[k,e],[k,l-(d-e)],[k+f,l-(d-e)],[k+f,e]]}},i.isWithinBar=function(a){var b=this.d3.mouse(a),c=a.getBoundingClientRect(),d=a.pathSegList.getItem(0),e=a.pathSegList.getItem(1),f=Math.min(d.x,e.x),g=Math.min(d.y,e.y),h=c.width,i=c.height,j=2,k=f-j,l=f+h+j,m=g+i+j,n=g-j;return k<b[0]&&b[0]<l&&n<b[1]&&b[1]<m},i.initText=function(){var a=this;a.main.select("."+l.chart).append("g").attr("class",l.chartTexts),a.mainText=a.d3.selectAll([])},i.updateTargetsForText=function(a){var b,c,d=this,e=d.classChartText.bind(d),f=d.classTexts.bind(d),g=d.classFocus.bind(d);b=d.main.select("."+l.chartTexts).selectAll("."+l.chartText).data(a).attr("class",function(a){return e(a)+g(a)}),c=b.enter().append("g").attr("class",e).style("opacity",0).style("pointer-events","none"),c.append("g").attr("class",f)},i.updateText=function(a){var b=this,c=b.config,d=b.barOrLineData.bind(b),e=b.classText.bind(b);b.mainText=b.main.selectAll("."+l.texts).selectAll("."+l.text).data(d),b.mainText.enter().append("text").attr("class",e).attr("text-anchor",function(a){return c.axis_rotated?a.value<0?"end":"start":"middle"}).style("stroke","none").style("fill",function(a){return b.color(a)}).style("fill-opacity",0),b.mainText.text(function(a,c,d){return b.dataLabelFormat(a.id)(a.value,a.id,c,d)}),b.mainText.exit().transition().duration(a).style("fill-opacity",0).remove()},i.redrawText=function(a,b,c,d){return[(d?this.mainText.transition():this.mainText).attr("x",a).attr("y",b).style("fill",this.color).style("fill-opacity",c?0:this.opacityForText.bind(this))]},i.getTextRect=function(a,b){var c,d=this.d3.select("body").append("div").classed("c3",!0),e=d.append("svg").style("visibility","hidden").style("position","fixed").style("top",0).style("left",0);return e.selectAll(".dummy").data([a]).enter().append("text").classed(b?b:"",!0).text(a).each(function(){c=this.getBoundingClientRect()}),d.remove(),c},i.generateXYForText=function(a,b,c,d){var e=this,f=e.generateGetAreaPoints(a,!1),g=e.generateGetBarPoints(b,!1),h=e.generateGetLinePoints(c,!1),i=d?e.getXForText:e.getYForText;return function(a,b){var c=e.isAreaType(a)?f:e.isBarType(a)?g:h;return i.call(e,c(a,b),a,this)}},i.getXForText=function(a,b,c){var d,e,f=this,g=c.getBoundingClientRect();return f.config.axis_rotated?(e=f.isBarType(b)?4:6,d=a[2][1]+e*(b.value<0?-1:1)):d=f.hasType("bar")?(a[2][0]+a[0][0])/2:a[0][0],null===b.value&&(d>f.width?d=f.width-g.width:0>d&&(d=4)),d},i.getYForText=function(a,b,c){var d,e=this,f=c.getBoundingClientRect();return e.config.axis_rotated?d=(a[0][0]+a[2][0]+.6*f.height)/2:(d=a[2][1],b.value<0?(d+=f.height,e.isBarType(b)&&e.isSafari()?d-=3:!e.isBarType(b)&&e.isChrome()&&(d+=3)):d+=e.isBarType(b)?-3:-6),null!==b.value||e.config.axis_rotated||(d<f.height?d=f.height:d>this.height&&(d=this.height-4)),d},i.setTargetType=function(a,b){var c=this,d=c.config;c.mapToTargetIds(a).forEach(function(a){c.withoutFadeIn[a]=b===d.data_types[a],d.data_types[a]=b}),a||(d.data_type=b)},i.hasType=function(a,b){var c=this,d=c.config.data_types,e=!1;return b=b||c.data.targets,b&&b.length?b.forEach(function(b){var c=d[b.id];(c&&c.indexOf(a)>=0||!c&&"line"===a)&&(e=!0)}):Object.keys(d).length?Object.keys(d).forEach(function(b){d[b]===a&&(e=!0)}):e=c.config.data_type===a,e},i.hasArcType=function(a){return this.hasType("pie",a)||this.hasType("donut",a)||this.hasType("gauge",a)},i.isLineType=function(a){var b=this.config,c=o(a)?a:a.id;return!b.data_types[c]||["line","spline","area","area-spline","step","area-step"].indexOf(b.data_types[c])>=0},i.isStepType=function(a){var b=o(a)?a:a.id;return["step","area-step"].indexOf(this.config.data_types[b])>=0},i.isSplineType=function(a){var b=o(a)?a:a.id;return["spline","area-spline"].indexOf(this.config.data_types[b])>=0},i.isAreaType=function(a){var b=o(a)?a:a.id;return["area","area-spline","area-step"].indexOf(this.config.data_types[b])>=0},i.isBarType=function(a){var b=o(a)?a:a.id;return"bar"===this.config.data_types[b]},i.isScatterType=function(a){var b=o(a)?a:a.id;return"scatter"===this.config.data_types[b]},i.isPieType=function(a){var b=o(a)?a:a.id;return"pie"===this.config.data_types[b]},i.isGaugeType=function(a){var b=o(a)?a:a.id;return"gauge"===this.config.data_types[b]},i.isDonutType=function(a){var b=o(a)?a:a.id;return"donut"===this.config.data_types[b]},i.isArcType=function(a){return this.isPieType(a)||this.isDonutType(a)||this.isGaugeType(a)},i.lineData=function(a){return this.isLineType(a)?[a]:[]},i.arcData=function(a){return this.isArcType(a.data)?[a]:[]},i.barData=function(a){return this.isBarType(a)?a.values:[]},i.lineOrScatterData=function(a){return this.isLineType(a)||this.isScatterType(a)?a.values:[]},i.barOrLineData=function(a){return this.isBarType(a)||this.isLineType(a)?a.values:[]},i.initGrid=function(){var a=this,b=a.config,c=a.d3;a.grid=a.main.append("g").attr("clip-path",a.clipPathForGrid).attr("class",l.grid),b.grid_x_show&&a.grid.append("g").attr("class",l.xgrids),b.grid_y_show&&a.grid.append("g").attr("class",l.ygrids),b.grid_focus_show&&a.grid.append("g").attr("class",l.xgridFocus).append("line").attr("class",l.xgridFocus),a.xgrid=c.selectAll([]),b.grid_lines_front||a.initGridLines()},i.initGridLines=function(){var a=this,b=a.d3;a.gridLines=a.main.append("g").attr("clip-path",a.clipPathForGrid).attr("class",l.grid+" "+l.gridLines),a.gridLines.append("g").attr("class",l.xgridLines),a.gridLines.append("g").attr("class",l.ygridLines),a.xgridLines=b.selectAll([])},i.updateXGrid=function(a){var b=this,c=b.config,d=b.d3,e=b.generateGridData(c.grid_x_type,b.x),f=b.isCategorized()?b.xAxis.tickOffset():0;b.xgridAttr=c.axis_rotated?{x1:0,x2:b.width,y1:function(a){return b.x(a)-f},y2:function(a){return b.x(a)-f}}:{x1:function(a){return b.x(a)+f},x2:function(a){return b.x(a)+f},y1:0,y2:b.height},b.xgrid=b.main.select("."+l.xgrids).selectAll("."+l.xgrid).data(e),b.xgrid.enter().append("line").attr("class",l.xgrid),a||b.xgrid.attr(b.xgridAttr).style("opacity",function(){return+d.select(this).attr(c.axis_rotated?"y1":"x1")===(c.axis_rotated?b.height:0)?0:1}),b.xgrid.exit().remove()},i.updateYGrid=function(){var a=this,b=a.config,c=a.yAxis.tickValues()||a.y.ticks(b.grid_y_ticks);a.ygrid=a.main.select("."+l.ygrids).selectAll("."+l.ygrid).data(c),a.ygrid.enter().append("line").attr("class",l.ygrid),a.ygrid.attr("x1",b.axis_rotated?a.y:0).attr("x2",b.axis_rotated?a.y:a.width).attr("y1",b.axis_rotated?0:a.y).attr("y2",b.axis_rotated?a.height:a.y),a.ygrid.exit().remove(),a.smoothLines(a.ygrid,"grid")},i.gridTextAnchor=function(a){return a.position?a.position:"end"},i.gridTextDx=function(a){return"start"===a.position?4:"middle"===a.position?0:-4},i.xGridTextX=function(a){return"start"===a.position?-this.height:"middle"===a.position?-this.height/2:0},i.yGridTextX=function(a){return"start"===a.position?0:"middle"===a.position?this.width/2:this.width},i.updateGrid=function(a){var b,c,d,e=this,f=e.main,g=e.config;e.grid.style("visibility",e.hasArcType()?"hidden":"visible"),f.select("line."+l.xgridFocus).style("visibility","hidden"),g.grid_x_show&&e.updateXGrid(),e.xgridLines=f.select("."+l.xgridLines).selectAll("."+l.xgridLine).data(g.grid_x_lines),b=e.xgridLines.enter().append("g").attr("class",function(a){return l.xgridLine+(a["class"]?" "+a["class"]:"")}),b.append("line").style("opacity",0),b.append("text").attr("text-anchor",e.gridTextAnchor).attr("transform",g.axis_rotated?"":"rotate(-90)").attr("dx",e.gridTextDx).attr("dy",-5).style("opacity",0),e.xgridLines.exit().transition().duration(a).style("opacity",0).remove(),g.grid_y_show&&e.updateYGrid(),e.ygridLines=f.select("."+l.ygridLines).selectAll("."+l.ygridLine).data(g.grid_y_lines),c=e.ygridLines.enter().append("g").attr("class",function(a){return l.ygridLine+(a["class"]?" "+a["class"]:"")}),c.append("line").style("opacity",0),c.append("text").attr("text-anchor",e.gridTextAnchor).attr("transform",g.axis_rotated?"rotate(-90)":"").attr("dx",e.gridTextDx).attr("dy",-5).style("opacity",0),d=e.yv.bind(e),e.ygridLines.select("line").transition().duration(a).attr("x1",g.axis_rotated?d:0).attr("x2",g.axis_rotated?d:e.width).attr("y1",g.axis_rotated?0:d).attr("y2",g.axis_rotated?e.height:d).style("opacity",1),e.ygridLines.select("text").transition().duration(a).attr("x",g.axis_rotated?e.xGridTextX.bind(e):e.yGridTextX.bind(e)).attr("y",d).text(function(a){return a.text}).style("opacity",1),e.ygridLines.exit().transition().duration(a).style("opacity",0).remove()},i.redrawGrid=function(a){var b=this,c=b.config,d=b.xv.bind(b),e=b.xgridLines.select("line"),f=b.xgridLines.select("text");return[(a?e.transition():e).attr("x1",c.axis_rotated?0:d).attr("x2",c.axis_rotated?b.width:d).attr("y1",c.axis_rotated?d:0).attr("y2",c.axis_rotated?d:b.height).style("opacity",1),(a?f.transition():f).attr("x",c.axis_rotated?b.yGridTextX.bind(b):b.xGridTextX.bind(b)).attr("y",d).text(function(a){return a.text}).style("opacity",1)]},i.showXGridFocus=function(a){var b=this,c=b.config,d=a.filter(function(a){return a&&m(a.value)}),e=b.main.selectAll("line."+l.xgridFocus),f=b.xx.bind(b);c.tooltip_show&&(b.hasType("scatter")||b.hasArcType()||(e.style("visibility","visible").data([d[0]]).attr(c.axis_rotated?"y1":"x1",f).attr(c.axis_rotated?"y2":"x2",f),b.smoothLines(e,"grid")))},i.hideXGridFocus=function(){this.main.select("line."+l.xgridFocus).style("visibility","hidden")},i.updateXgridFocus=function(){var a=this,b=a.config;a.main.select("line."+l.xgridFocus).attr("x1",b.axis_rotated?0:-10).attr("x2",b.axis_rotated?a.width:-10).attr("y1",b.axis_rotated?-10:0).attr("y2",b.axis_rotated?-10:a.height)},i.generateGridData=function(a,b){var c,d,e,f,g=this,h=[],i=g.main.select("."+l.axisX).selectAll(".tick").size();if("year"===a)for(c=g.getXDomain(),d=c[0].getFullYear(),e=c[1].getFullYear(),f=d;e>=f;f++)h.push(new Date(f+"-01-01 00:00:00"));else h=b.ticks(10),h.length>i&&(h=h.filter(function(a){return(""+a).indexOf(".")<0}));return h},i.getGridFilterToRemove=function(a){return a?function(b){var c=!1;return[].concat(a).forEach(function(a){("value"in a&&b.value===a.value||"class"in a&&b["class"]===a["class"])&&(c=!0)}),c}:function(){return!0}},i.removeGridLines=function(a,b){var c=this,d=c.config,e=c.getGridFilterToRemove(a),f=function(a){return!e(a)},g=b?l.xgridLines:l.ygridLines,h=b?l.xgridLine:l.ygridLine;c.main.select("."+g).selectAll("."+h).filter(e).transition().duration(d.transition_duration).style("opacity",0).remove(),b?d.grid_x_lines=d.grid_x_lines.filter(f):d.grid_y_lines=d.grid_y_lines.filter(f)},i.initTooltip=function(){var a,b=this,c=b.config;if(b.tooltip=b.selectChart.style("position","relative").append("div").attr("class",l.tooltipContainer).style("position","absolute").style("pointer-events","none").style("display","none"),c.tooltip_init_show){if(b.isTimeSeries()&&o(c.tooltip_init_x)){for(c.tooltip_init_x=b.parseDate(c.tooltip_init_x),a=0;a<b.data.targets[0].values.length&&b.data.targets[0].values[a].x-c.tooltip_init_x!==0;a++);c.tooltip_init_x=a}b.tooltip.html(c.tooltip_contents.call(b,b.data.targets.map(function(a){return b.addName(a.values[c.tooltip_init_x])}),b.axis.getXAxisTickFormat(),b.getYFormat(b.hasArcType()),b.color)),b.tooltip.style("top",c.tooltip_init_position.top).style("left",c.tooltip_init_position.left).style("display","block")}},i.getTooltipContent=function(a,b,c,d){var e,f,g,h,i,j,k=this,m=k.config,n=m.tooltip_format_title||b,o=m.tooltip_format_name||function(a){return a},p=m.tooltip_format_value||c;for(f=0;f<a.length;f++)a[f]&&(a[f].value||0===a[f].value)&&(e||(g=n?n(a[f].x):a[f].x,e="<table class='"+l.tooltip+"'>"+(g||0===g?"<tr><th colspan='2'>"+g+"</th></tr>":"")),h=p(a[f].value,a[f].ratio,a[f].id,a[f].index),void 0!==h&&(i=o(a[f].name,a[f].ratio,a[f].id,a[f].index),j=k.levelColor?k.levelColor(a[f].value):d(a[f].id),e+="<tr class='"+l.tooltipName+"-"+a[f].id+"'>",e+="<td class='name'><span style='background-color:"+j+"'></span>"+i+"</td>",e+="<td class='value'>"+h+"</td>",e+="</tr>"));return e+"</table>"},i.tooltipPosition=function(a,b,c,d){var e,f,g,h,i,j=this,k=j.config,l=j.d3,m=j.hasArcType(),n=l.mouse(d);return m?(f=(j.width-(j.isLegendRight?j.getLegendWidth():0))/2+n[0],h=j.height/2+n[1]+20):(e=j.getSvgLeft(!0),k.axis_rotated?(f=e+n[0]+100,g=f+b,i=j.currentWidth-j.getCurrentPaddingRight(),h=j.x(a[0].x)+20):(f=e+j.getCurrentPaddingLeft(!0)+j.x(a[0].x)+20,g=f+b,i=e+j.currentWidth-j.getCurrentPaddingRight(),h=n[1]+15),g>i&&(f-=g-i+20),h+c>j.currentHeight&&(h-=c+30)),0>h&&(h=0),{top:h,left:f}},i.showTooltip=function(a,b){var c,d,e,f=this,g=f.config,h=f.hasArcType(),j=a.filter(function(a){return a&&m(a.value)}),k=g.tooltip_position||i.tooltipPosition;0!==j.length&&g.tooltip_show&&(f.tooltip.html(g.tooltip_contents.call(f,a,f.axis.getXAxisTickFormat(),f.getYFormat(h),f.color)).style("display","block"),c=f.tooltip.property("offsetWidth"),d=f.tooltip.property("offsetHeight"),e=k.call(this,j,c,d,b),f.tooltip.style("top",e.top+"px").style("left",e.left+"px"))},i.hideTooltip=function(){this.tooltip.style("display","none")},i.initLegend=function(){var a=this;return a.legendItemTextBox={},a.legendHasRendered=!1,a.legend=a.svg.append("g").attr("transform",a.getTranslate("legend")),a.config.legend_show?void a.updateLegendWithDefaults():(a.legend.style("visibility","hidden"),void(a.hiddenLegendIds=a.mapToIds(a.data.targets)))},i.updateLegendWithDefaults=function(){var a=this;a.updateLegend(a.mapToIds(a.data.targets),{withTransform:!1,withTransitionForTransform:!1,withTransition:!1})},i.updateSizeForLegend=function(a,b){var c=this,d=c.config,e={top:c.isLegendTop?c.getCurrentPaddingTop()+d.legend_inset_y+5.5:c.currentHeight-a-c.getCurrentPaddingBottom()-d.legend_inset_y,left:c.isLegendLeft?c.getCurrentPaddingLeft()+d.legend_inset_x+.5:c.currentWidth-b-c.getCurrentPaddingRight()-d.legend_inset_x+.5};c.margin3={top:c.isLegendRight?0:c.isLegendInset?e.top:c.currentHeight-a,right:0/0,bottom:0,left:c.isLegendRight?c.currentWidth-b:c.isLegendInset?e.left:0}},i.transformLegend=function(a){var b=this;(a?b.legend.transition():b.legend).attr("transform",b.getTranslate("legend"))},i.updateLegendStep=function(a){this.legendStep=a},i.updateLegendItemWidth=function(a){this.legendItemWidth=a},i.updateLegendItemHeight=function(a){this.legendItemHeight=a},i.getLegendWidth=function(){var a=this;return a.config.legend_show?a.isLegendRight||a.isLegendInset?a.legendItemWidth*(a.legendStep+1):a.currentWidth:0},i.getLegendHeight=function(){var a=this,b=0;return a.config.legend_show&&(b=a.isLegendRight?a.currentHeight:Math.max(20,a.legendItemHeight)*(a.legendStep+1)),b},i.opacityForLegend=function(a){return a.classed(l.legendItemHidden)?null:1},i.opacityForUnfocusedLegend=function(a){return a.classed(l.legendItemHidden)?null:.3},i.toggleFocusLegend=function(a,b){var c=this;a=c.mapToTargetIds(a),c.legend.selectAll("."+l.legendItem).filter(function(b){return a.indexOf(b)>=0}).classed(l.legendItemFocused,b).transition().duration(100).style("opacity",function(){var a=b?c.opacityForLegend:c.opacityForUnfocusedLegend;return a.call(c,c.d3.select(this))})},i.revertLegend=function(){var a=this,b=a.d3;a.legend.selectAll("."+l.legendItem).classed(l.legendItemFocused,!1).transition().duration(100).style("opacity",function(){return a.opacityForLegend(b.select(this))})},i.showLegend=function(a){var b=this,c=b.config;c.legend_show||(c.legend_show=!0,b.legend.style("visibility","visible"),b.legendHasRendered||b.updateLegendWithDefaults()),b.removeHiddenLegendIds(a),b.legend.selectAll(b.selectorLegends(a)).style("visibility","visible").transition().style("opacity",function(){return b.opacityForLegend(b.d3.select(this))})},i.hideLegend=function(a){var b=this,c=b.config;c.legend_show&&u(a)&&(c.legend_show=!1,b.legend.style("visibility","hidden")),b.addHiddenLegendIds(a),b.legend.selectAll(b.selectorLegends(a)).style("opacity",0).style("visibility","hidden")},i.clearLegendItemTextBoxCache=function(){this.legendItemTextBox={}},i.updateLegend=function(a,b,c){function d(a,b){return u.legendItemTextBox[b]||(u.legendItemTextBox[b]=u.getTextRect(a.textContent,l.legendItem)),u.legendItemTextBox[b]}function e(b,c,e){function f(a,b){b||(g=(o-D-n)/2,B>g&&(g=(o-n)/2,D=0,J++)),I[a]=J,H[J]=u.isLegendInset?10:g,E[a]=D,D+=n}var g,h,i=0===e,j=e===a.length-1,k=d(b,c),l=k.width+C+(!j||u.isLegendRight||u.isLegendInset?y:0),m=k.height+x,n=u.isLegendRight||u.isLegendInset?m:l,o=u.isLegendRight||u.isLegendInset?u.getLegendHeight():u.getLegendWidth();return i&&(D=0,J=0,z=0,A=0),v.legend_show&&!u.isLegendToShow(c)?void(F[c]=G[c]=I[c]=E[c]=0):(F[c]=l,G[c]=m,(!z||l>=z)&&(z=l),(!A||m>=A)&&(A=m),h=u.isLegendRight||u.isLegendInset?A:z,void(v.legend_equally?(Object.keys(F).forEach(function(a){F[a]=z}),Object.keys(G).forEach(function(a){G[a]=A}),g=(o-h*a.length)/2,B>g?(D=0,J=0,a.forEach(function(a){f(a)})):f(c,!0)):f(c)))}var f,g,h,i,j,k,m,n,o,p,r,s,t,u=this,v=u.config,x=4,y=10,z=0,A=0,B=10,C=15,D=0,E={},F={},G={},H=[0],I={},J=0;b=b||{},n=w(b,"withTransition",!0),o=w(b,"withTransitionForTransform",!0),u.isLegendInset&&(J=v.legend_inset_step?v.legend_inset_step:a.length,u.updateLegendStep(J)),u.isLegendRight?(f=function(a){return z*I[a]},i=function(a){return H[I[a]]+E[a]}):u.isLegendInset?(f=function(a){return z*I[a]+10},i=function(a){return H[I[a]]+E[a]}):(f=function(a){return H[I[a]]+E[a]},i=function(a){return A*I[a]}),g=function(a,b){return f(a,b)+14},j=function(a,b){return i(a,b)+9},h=function(a,b){return f(a,b)},k=function(a,b){return i(a,b)-5},m=u.legend.selectAll("."+l.legendItem).data(a).enter().append("g").attr("class",function(a){return u.generateClass(l.legendItem,a)}).style("visibility",function(a){return u.isLegendToShow(a)?"visible":"hidden"}).style("cursor","pointer").on("click",function(a){v.legend_item_onclick?v.legend_item_onclick.call(u,a):u.d3.event.altKey?(u.api.hide(),u.api.show(a)):(u.api.toggle(a),u.isTargetToShow(a)?u.api.focus(a):u.api.revert())}).on("mouseover",function(a){u.d3.select(this).classed(l.legendItemFocused,!0),!u.transiting&&u.isTargetToShow(a)&&u.api.focus(a),v.legend_item_onmouseover&&v.legend_item_onmouseover.call(u,a)}).on("mouseout",function(a){u.d3.select(this).classed(l.legendItemFocused,!1),u.api.revert(),v.legend_item_onmouseout&&v.legend_item_onmouseout.call(u,a)}),m.append("text").text(function(a){return q(v.data_names[a])?v.data_names[a]:a}).each(function(a,b){e(this,a,b)}).style("pointer-events","none").attr("x",u.isLegendRight||u.isLegendInset?g:-200).attr("y",u.isLegendRight||u.isLegendInset?-200:j),m.append("rect").attr("class",l.legendItemEvent).style("fill-opacity",0).attr("x",u.isLegendRight||u.isLegendInset?h:-200).attr("y",u.isLegendRight||u.isLegendInset?-200:k),m.append("rect").attr("class",l.legendItemTile).style("pointer-events","none").style("fill",u.color).attr("x",u.isLegendRight||u.isLegendInset?g:-200).attr("y",u.isLegendRight||u.isLegendInset?-200:i).attr("width",10).attr("height",10),t=u.legend.select("."+l.legendBackground+" rect"),u.isLegendInset&&z>0&&0===t.size()&&(t=u.legend.insert("g","."+l.legendItem).attr("class",l.legendBackground).append("rect")),p=u.legend.selectAll("text").data(a).text(function(a){return q(v.data_names[a])?v.data_names[a]:a}).each(function(a,b){e(this,a,b)}),(n?p.transition():p).attr("x",g).attr("y",j),r=u.legend.selectAll("rect."+l.legendItemEvent).data(a),(n?r.transition():r).attr("width",function(a){return F[a]}).attr("height",function(a){return G[a]}).attr("x",h).attr("y",k),s=u.legend.selectAll("rect."+l.legendItemTile).data(a),(n?s.transition():s).style("fill",u.color).attr("x",f).attr("y",i),t&&(n?t.transition():t).attr("height",u.getLegendHeight()-12).attr("width",z*(J+1)+10),u.legend.selectAll("."+l.legendItem).classed(l.legendItemHidden,function(a){return!u.isTargetToShow(a)}),u.updateLegendItemWidth(z),u.updateLegendItemHeight(A),u.updateLegendStep(J),u.updateSizes(),u.updateScales(),u.updateSvgSize(),u.transformAll(o,c),u.legendHasRendered=!0},c(b,f),f.prototype.init=function(){var a=this.owner,b=a.config,c=a.main;a.axes.x=c.append("g").attr("class",l.axis+" "+l.axisX).attr("clip-path",a.clipPathForXAxis).attr("transform",a.getTranslate("x")).style("visibility",b.axis_x_show?"visible":"hidden"),a.axes.x.append("text").attr("class",l.axisXLabel).attr("transform",b.axis_rotated?"rotate(-90)":"").style("text-anchor",this.textAnchorForXAxisLabel.bind(this)),a.axes.y=c.append("g").attr("class",l.axis+" "+l.axisY).attr("clip-path",b.axis_y_inner?"":a.clipPathForYAxis).attr("transform",a.getTranslate("y")).style("visibility",b.axis_y_show?"visible":"hidden"),a.axes.y.append("text").attr("class",l.axisYLabel).attr("transform",b.axis_rotated?"":"rotate(-90)").style("text-anchor",this.textAnchorForYAxisLabel.bind(this)),a.axes.y2=c.append("g").attr("class",l.axis+" "+l.axisY2).attr("transform",a.getTranslate("y2")).style("visibility",b.axis_y2_show?"visible":"hidden"),a.axes.y2.append("text").attr("class",l.axisY2Label).attr("transform",b.axis_rotated?"":"rotate(-90)").style("text-anchor",this.textAnchorForY2AxisLabel.bind(this))},f.prototype.getXAxis=function(a,b,c,d,e,f,h){var i=this.owner,j=i.config,k={isCategory:i.isCategorized(),withOuterTick:e,tickMultiline:j.axis_x_tick_multiline,tickWidth:j.axis_x_tick_width,tickTextRotate:h?0:j.axis_x_tick_rotate,withoutTransition:f},l=g(i.d3,k).scale(a).orient(b);return i.isTimeSeries()&&d&&(d=d.map(function(a){return i.parseDate(a)})),l.tickFormat(c).tickValues(d),i.isCategorized()&&(l.tickCentered(j.axis_x_tick_centered),u(j.axis_x_tick_culling)&&(j.axis_x_tick_culling=!1)),l},f.prototype.updateXAxisTickValues=function(a,b){var c,d=this.owner,e=d.config;return(e.axis_x_tick_fit||e.axis_x_tick_count)&&(c=this.generateTickValues(d.mapTargetsToUniqueXs(a),e.axis_x_tick_count,d.isTimeSeries())),b?b.tickValues(c):(d.xAxis.tickValues(c),d.subXAxis.tickValues(c)),c},f.prototype.getYAxis=function(a,b,c,d,e,f){var h={withOuterTick:e,withoutTransition:f},i=this.owner,j=i.d3,k=i.config,l=g(j,h).scale(a).orient(b).tickFormat(c);return i.isTimeSeriesY()?l.ticks(j.time[k.axis_y_tick_time_value],k.axis_y_tick_time_interval):l.tickValues(d),l},f.prototype.getId=function(a){var b=this.owner.config;return a in b.data_axes?b.data_axes[a]:"y"},f.prototype.getXAxisTickFormat=function(){var a=this.owner,b=a.config,c=a.isTimeSeries()?a.defaultAxisTimeFormat:a.isCategorized()?a.categoryName:function(a){return 0>a?a.toFixed(0):a};return b.axis_x_tick_format&&(n(b.axis_x_tick_format)?c=b.axis_x_tick_format:a.isTimeSeries()&&(c=function(c){return c?a.axisTimeFormat(b.axis_x_tick_format)(c):""})),n(c)?function(b){return c.call(a,b)}:c},f.prototype.getTickValues=function(a,b){return a?a:b?b.tickValues():void 0},f.prototype.getXAxisTickValues=function(){return this.getTickValues(this.owner.config.axis_x_tick_values,this.owner.xAxis)},f.prototype.getYAxisTickValues=function(){return this.getTickValues(this.owner.config.axis_y_tick_values,this.owner.yAxis)},f.prototype.getY2AxisTickValues=function(){return this.getTickValues(this.owner.config.axis_y2_tick_values,this.owner.y2Axis)},f.prototype.getLabelOptionByAxisId=function(a){var b,c=this.owner,d=c.config;return"y"===a?b=d.axis_y_label:"y2"===a?b=d.axis_y2_label:"x"===a&&(b=d.axis_x_label),b},f.prototype.getLabelText=function(a){var b=this.getLabelOptionByAxisId(a);return o(b)?b:b?b.text:null},f.prototype.setLabelText=function(a,b){var c=this.owner,d=c.config,e=this.getLabelOptionByAxisId(a);o(e)?"y"===a?d.axis_y_label=b:"y2"===a?d.axis_y2_label=b:"x"===a&&(d.axis_x_label=b):e&&(e.text=b)},f.prototype.getLabelPosition=function(a,b){var c=this.getLabelOptionByAxisId(a),d=c&&"object"==typeof c&&c.position?c.position:b;return{isInner:d.indexOf("inner")>=0,isOuter:d.indexOf("outer")>=0,isLeft:d.indexOf("left")>=0,isCenter:d.indexOf("center")>=0,isRight:d.indexOf("right")>=0,isTop:d.indexOf("top")>=0,isMiddle:d.indexOf("middle")>=0,isBottom:d.indexOf("bottom")>=0}},f.prototype.getXAxisLabelPosition=function(){return this.getLabelPosition("x",this.owner.config.axis_rotated?"inner-top":"inner-right")},f.prototype.getYAxisLabelPosition=function(){return this.getLabelPosition("y",this.owner.config.axis_rotated?"inner-right":"inner-top")},f.prototype.getY2AxisLabelPosition=function(){return this.getLabelPosition("y2",this.owner.config.axis_rotated?"inner-right":"inner-top")},f.prototype.getLabelPositionById=function(a){return"y2"===a?this.getY2AxisLabelPosition():"y"===a?this.getYAxisLabelPosition():this.getXAxisLabelPosition()},f.prototype.textForXAxisLabel=function(){return this.getLabelText("x")},f.prototype.textForYAxisLabel=function(){return this.getLabelText("y")},f.prototype.textForY2AxisLabel=function(){return this.getLabelText("y2")},f.prototype.xForAxisLabel=function(a,b){var c=this.owner;return a?b.isLeft?0:b.isCenter?c.width/2:c.width:b.isBottom?-c.height:b.isMiddle?-c.height/2:0},f.prototype.dxForAxisLabel=function(a,b){return a?b.isLeft?"0.5em":b.isRight?"-0.5em":"0":b.isTop?"-0.5em":b.isBottom?"0.5em":"0"},f.prototype.textAnchorForAxisLabel=function(a,b){return a?b.isLeft?"start":b.isCenter?"middle":"end":b.isBottom?"start":b.isMiddle?"middle":"end"},f.prototype.xForXAxisLabel=function(){return this.xForAxisLabel(!this.owner.config.axis_rotated,this.getXAxisLabelPosition())},f.prototype.xForYAxisLabel=function(){return this.xForAxisLabel(this.owner.config.axis_rotated,this.getYAxisLabelPosition())},f.prototype.xForY2AxisLabel=function(){return this.xForAxisLabel(this.owner.config.axis_rotated,this.getY2AxisLabelPosition())},f.prototype.dxForXAxisLabel=function(){return this.dxForAxisLabel(!this.owner.config.axis_rotated,this.getXAxisLabelPosition())},f.prototype.dxForYAxisLabel=function(){return this.dxForAxisLabel(this.owner.config.axis_rotated,this.getYAxisLabelPosition())},f.prototype.dxForY2AxisLabel=function(){return this.dxForAxisLabel(this.owner.config.axis_rotated,this.getY2AxisLabelPosition())},f.prototype.dyForXAxisLabel=function(){var a=this.owner,b=a.config,c=this.getXAxisLabelPosition();return b.axis_rotated?c.isInner?"1.2em":-25-this.getMaxTickWidth("x"):c.isInner?"-0.5em":b.axis_x_height?b.axis_x_height-10:"3em"},f.prototype.dyForYAxisLabel=function(){var a=this.owner,b=this.getYAxisLabelPosition();return a.config.axis_rotated?b.isInner?"-0.5em":"3em":b.isInner?"1.2em":-10-(a.config.axis_y_inner?0:this.getMaxTickWidth("y")+10)},f.prototype.dyForY2AxisLabel=function(){var a=this.owner,b=this.getY2AxisLabelPosition();return a.config.axis_rotated?b.isInner?"1.2em":"-2.2em":b.isInner?"-0.5em":15+(a.config.axis_y2_inner?0:this.getMaxTickWidth("y2")+15)},f.prototype.textAnchorForXAxisLabel=function(){var a=this.owner;return this.textAnchorForAxisLabel(!a.config.axis_rotated,this.getXAxisLabelPosition())},f.prototype.textAnchorForYAxisLabel=function(){var a=this.owner;return this.textAnchorForAxisLabel(a.config.axis_rotated,this.getYAxisLabelPosition())},f.prototype.textAnchorForY2AxisLabel=function(){var a=this.owner;return this.textAnchorForAxisLabel(a.config.axis_rotated,this.getY2AxisLabelPosition())},f.prototype.getMaxTickWidth=function(a,b){var c,d,e,f,g,h=this.owner,i=h.config,j=0;return b&&h.currentMaxTickWidths[a]?h.currentMaxTickWidths[a]:(h.svg&&(c=h.filterTargetsToShow(h.data.targets),"y"===a?(d=h.y.copy().domain(h.getYDomain(c,"y")),e=this.getYAxis(d,h.yOrient,i.axis_y_tick_format,h.yAxisTickValues,!1,!0)):"y2"===a?(d=h.y2.copy().domain(h.getYDomain(c,"y2")),e=this.getYAxis(d,h.y2Orient,i.axis_y2_tick_format,h.y2AxisTickValues,!1,!0)):(d=h.x.copy().domain(h.getXDomain(c)),e=this.getXAxis(d,h.xOrient,h.xAxisTickFormat,h.xAxisTickValues,!1,!0,!0),this.updateXAxisTickValues(c,e)),f=h.d3.select("body").append("div").classed("c3",!0),g=f.append("svg").style("visibility","hidden").style("position","fixed").style("top",0).style("left",0),g.append("g").call(e).each(function(){h.d3.select(this).selectAll("text").each(function(){var a=this.getBoundingClientRect();j<a.width&&(j=a.width)}),f.remove()})),h.currentMaxTickWidths[a]=0>=j?h.currentMaxTickWidths[a]:j,h.currentMaxTickWidths[a])},f.prototype.updateLabels=function(a){var b=this.owner,c=b.main.select("."+l.axisX+" ."+l.axisXLabel),d=b.main.select("."+l.axisY+" ."+l.axisYLabel),e=b.main.select("."+l.axisY2+" ."+l.axisY2Label);(a?c.transition():c).attr("x",this.xForXAxisLabel.bind(this)).attr("dx",this.dxForXAxisLabel.bind(this)).attr("dy",this.dyForXAxisLabel.bind(this)).text(this.textForXAxisLabel.bind(this)),(a?d.transition():d).attr("x",this.xForYAxisLabel.bind(this)).attr("dx",this.dxForYAxisLabel.bind(this)).attr("dy",this.dyForYAxisLabel.bind(this)).text(this.textForYAxisLabel.bind(this)),(a?e.transition():e).attr("x",this.xForY2AxisLabel.bind(this)).attr("dx",this.dxForY2AxisLabel.bind(this)).attr("dy",this.dyForY2AxisLabel.bind(this)).text(this.textForY2AxisLabel.bind(this))},f.prototype.getPadding=function(a,b,c,d){return m(a[b])?"ratio"===a.unit?a[b]*d:this.convertPixelsToAxisPadding(a[b],d):c},f.prototype.convertPixelsToAxisPadding=function(a,b){var c=this.owner,d=c.config.axis_rotated?c.width:c.height;return b*(a/d)},f.prototype.generateTickValues=function(a,b,c){var d,e,f,g,h,i,j,k=a;if(b)if(d=n(b)?b():b,1===d)k=[a[0]];else if(2===d)k=[a[0],a[a.length-1]];else if(d>2){for(g=d-2,e=a[0],f=a[a.length-1],h=(f-e)/(g+1),k=[e],i=0;g>i;i++)j=+e+h*(i+1),k.push(c?new Date(j):j);k.push(f)}return c||(k=k.sort(function(a,b){return a-b})),k},f.prototype.generateTransitions=function(a){var b=this.owner,c=b.axes;return{axisX:a?c.x.transition().duration(a):c.x,axisY:a?c.y.transition().duration(a):c.y,axisY2:a?c.y2.transition().duration(a):c.y2,axisSubX:a?c.subx.transition().duration(a):c.subx}},f.prototype.redraw=function(a,b){var c=this.owner;c.axes.x.style("opacity",b?0:1),c.axes.y.style("opacity",b?0:1),c.axes.y2.style("opacity",b?0:1),c.axes.subx.style("opacity",b?0:1),a.axisX.call(c.xAxis),a.axisY.call(c.yAxis),a.axisY2.call(c.y2Axis),a.axisSubX.call(c.subXAxis)},i.getClipPath=function(b){var c=a.navigator.appVersion.toLowerCase().indexOf("msie 9.")>=0;return"url("+(c?"":document.URL.split("#")[0])+"#"+b+")"},i.appendClip=function(a,b){return a.append("clipPath").attr("id",b).append("rect")},i.getAxisClipX=function(a){var b=Math.max(30,this.margin.left);return a?-(1+b):-(b-1)},i.getAxisClipY=function(a){return a?-20:-this.margin.top},i.getXAxisClipX=function(){var a=this;return a.getAxisClipX(!a.config.axis_rotated)},i.getXAxisClipY=function(){var a=this;return a.getAxisClipY(!a.config.axis_rotated)},i.getYAxisClipX=function(){var a=this;return a.config.axis_y_inner?-1:a.getAxisClipX(a.config.axis_rotated)},i.getYAxisClipY=function(){var a=this;return a.getAxisClipY(a.config.axis_rotated)},i.getAxisClipWidth=function(a){var b=this,c=Math.max(30,b.margin.left),d=Math.max(30,b.margin.right);return a?b.width+2+c+d:b.margin.left+20},i.getAxisClipHeight=function(a){return(a?this.margin.bottom:this.margin.top+this.height)+20},i.getXAxisClipWidth=function(){var a=this;return a.getAxisClipWidth(!a.config.axis_rotated)},i.getXAxisClipHeight=function(){var a=this;return a.getAxisClipHeight(!a.config.axis_rotated)},i.getYAxisClipWidth=function(){var a=this;return a.getAxisClipWidth(a.config.axis_rotated)+(a.config.axis_y_inner?20:0)},i.getYAxisClipHeight=function(){var a=this;return a.getAxisClipHeight(a.config.axis_rotated)},i.initPie=function(){var a=this,b=a.d3,c=a.config;a.pie=b.layout.pie().value(function(a){return a.values.reduce(function(a,b){return a+b.value},0)}),c.data_order||a.pie.sort(null)},i.updateRadius=function(){var a=this,b=a.config,c=b.gauge_width||b.donut_width;a.radiusExpanded=Math.min(a.arcWidth,a.arcHeight)/2,a.radius=.95*a.radiusExpanded,a.innerRadiusRatio=c?(a.radius-c)/a.radius:.6,a.innerRadius=a.hasType("donut")||a.hasType("gauge")?a.radius*a.innerRadiusRatio:0},i.updateArc=function(){var a=this;a.svgArc=a.getSvgArc(),a.svgArcExpanded=a.getSvgArcExpanded(),a.svgArcExpandedSub=a.getSvgArcExpanded(.98)},i.updateAngle=function(a){var b,c,d=this,e=d.config,f=!1,g=0,h=e.gauge_min,i=e.gauge_max;
return d.pie(d.filterTargetsToShow(d.data.targets)).forEach(function(b){f||b.data.id!==a.data.id||(f=!0,a=b,a.index=g),g++}),isNaN(a.startAngle)&&(a.startAngle=0),isNaN(a.endAngle)&&(a.endAngle=a.startAngle),d.isGaugeType(a.data)&&(b=Math.PI/(i-h),c=a.value<h?0:a.value<i?a.value-h:i-h,a.startAngle=-1*(Math.PI/2),a.endAngle=a.startAngle+b*c),f?a:null},i.getSvgArc=function(){var a=this,b=a.d3.svg.arc().outerRadius(a.radius).innerRadius(a.innerRadius),c=function(c,d){var e;return d?b(c):(e=a.updateAngle(c),e?b(e):"M 0 0")};return c.centroid=b.centroid,c},i.getSvgArcExpanded=function(a){var b=this,c=b.d3.svg.arc().outerRadius(b.radiusExpanded*(a?a:1)).innerRadius(b.innerRadius);return function(a){var d=b.updateAngle(a);return d?c(d):"M 0 0"}},i.getArc=function(a,b,c){return c||this.isArcType(a.data)?this.svgArc(a,b):"M 0 0"},i.transformForArcLabel=function(a){var b,c,d,e,f,g=this,h=g.updateAngle(a),i="";return h&&!g.hasType("gauge")&&(b=this.svgArc.centroid(h),c=isNaN(b[0])?0:b[0],d=isNaN(b[1])?0:b[1],e=Math.sqrt(c*c+d*d),f=g.radius&&e?(36/g.radius>.375?1.175-36/g.radius:.8)*g.radius/e:0,i="translate("+c*f+","+d*f+")"),i},i.getArcRatio=function(a){var b=this,c=b.hasType("gauge")?Math.PI:2*Math.PI;return a?(a.endAngle-a.startAngle)/c:null},i.convertToArcData=function(a){return this.addName({id:a.data.id,value:a.value,ratio:this.getArcRatio(a),index:a.index})},i.textForArcLabel=function(a){var b,c,d,e,f,g=this;return g.shouldShowArcLabel()?(b=g.updateAngle(a),c=b?b.value:null,d=g.getArcRatio(b),e=a.data.id,g.hasType("gauge")||g.meetsArcLabelThreshold(d)?(f=g.getArcLabelFormat(),f?f(c,d,e):g.defaultArcValueFormat(c,d)):""):""},i.expandArc=function(b){var c,d=this;return d.transiting?void(c=a.setInterval(function(){d.transiting||(a.clearInterval(c),d.legend.selectAll(".c3-legend-item-focused").size()>0&&d.expandArc(b))},10)):(b=d.mapToTargetIds(b),void d.svg.selectAll(d.selectorTargets(b,"."+l.chartArc)).each(function(a){d.shouldExpand(a.data.id)&&d.d3.select(this).selectAll("path").transition().duration(50).attr("d",d.svgArcExpanded).transition().duration(100).attr("d",d.svgArcExpandedSub).each(function(a){d.isDonutType(a.data)})}))},i.unexpandArc=function(a){var b=this;b.transiting||(a=b.mapToTargetIds(a),b.svg.selectAll(b.selectorTargets(a,"."+l.chartArc)).selectAll("path").transition().duration(50).attr("d",b.svgArc),b.svg.selectAll("."+l.arc).style("opacity",1))},i.shouldExpand=function(a){var b=this,c=b.config;return b.isDonutType(a)&&c.donut_expand||b.isGaugeType(a)&&c.gauge_expand||b.isPieType(a)&&c.pie_expand},i.shouldShowArcLabel=function(){var a=this,b=a.config,c=!0;return a.hasType("donut")?c=b.donut_label_show:a.hasType("pie")&&(c=b.pie_label_show),c},i.meetsArcLabelThreshold=function(a){var b=this,c=b.config,d=b.hasType("donut")?c.donut_label_threshold:c.pie_label_threshold;return a>=d},i.getArcLabelFormat=function(){var a=this,b=a.config,c=b.pie_label_format;return a.hasType("gauge")?c=b.gauge_label_format:a.hasType("donut")&&(c=b.donut_label_format),c},i.getArcTitle=function(){var a=this;return a.hasType("donut")?a.config.donut_title:""},i.updateTargetsForArc=function(a){var b,c,d=this,e=d.main,f=d.classChartArc.bind(d),g=d.classArcs.bind(d),h=d.classFocus.bind(d);b=e.select("."+l.chartArcs).selectAll("."+l.chartArc).data(d.pie(a)).attr("class",function(a){return f(a)+h(a.data)}),c=b.enter().append("g").attr("class",f),c.append("g").attr("class",g),c.append("text").attr("dy",d.hasType("gauge")?"-.1em":".35em").style("opacity",0).style("text-anchor","middle").style("pointer-events","none")},i.initArc=function(){var a=this;a.arcs=a.main.select("."+l.chart).append("g").attr("class",l.chartArcs).attr("transform",a.getTranslate("arc")),a.arcs.append("text").attr("class",l.chartArcsTitle).style("text-anchor","middle").text(a.getArcTitle())},i.redrawArc=function(a,b,c){var d,e=this,f=e.d3,g=e.config,h=e.main;d=h.selectAll("."+l.arcs).selectAll("."+l.arc).data(e.arcData.bind(e)),d.enter().append("path").attr("class",e.classArc.bind(e)).style("fill",function(a){return e.color(a.data)}).style("cursor",function(a){return g.interaction_enabled&&g.data_selection_isselectable(a)?"pointer":null}).style("opacity",0).each(function(a){e.isGaugeType(a.data)&&(a.startAngle=a.endAngle=-1*(Math.PI/2)),this._current=a}),d.attr("transform",function(a){return!e.isGaugeType(a.data)&&c?"scale(0)":""}).style("opacity",function(a){return a===this._current?0:1}).on("mouseover",g.interaction_enabled?function(a){var b,c;e.transiting||(b=e.updateAngle(a),c=e.convertToArcData(b),e.expandArc(b.data.id),e.api.focus(b.data.id),e.toggleFocusLegend(b.data.id,!0),e.config.data_onmouseover(c,this))}:null).on("mousemove",g.interaction_enabled?function(a){var b=e.updateAngle(a),c=e.convertToArcData(b),d=[c];e.showTooltip(d,this)}:null).on("mouseout",g.interaction_enabled?function(a){var b,c;e.transiting||(b=e.updateAngle(a),c=e.convertToArcData(b),e.unexpandArc(b.data.id),e.api.revert(),e.revertLegend(),e.hideTooltip(),e.config.data_onmouseout(c,this))}:null).on("click",g.interaction_enabled?function(a,b){var c=e.updateAngle(a),d=e.convertToArcData(c);e.toggleShape&&e.toggleShape(this,d,b),e.config.data_onclick.call(e.api,d,this)}:null).each(function(){e.transiting=!0}).transition().duration(a).attrTween("d",function(a){var b,c=e.updateAngle(a);return c?(isNaN(this._current.startAngle)&&(this._current.startAngle=0),isNaN(this._current.endAngle)&&(this._current.endAngle=this._current.startAngle),b=f.interpolate(this._current,c),this._current=b(0),function(c){var d=b(c);return d.data=a.data,e.getArc(d,!0)}):function(){return"M 0 0"}}).attr("transform",c?"scale(1)":"").style("fill",function(a){return e.levelColor?e.levelColor(a.data.values[0].value):e.color(a.data.id)}).style("opacity",1).call(e.endall,function(){e.transiting=!1}),d.exit().transition().duration(b).style("opacity",0).remove(),h.selectAll("."+l.chartArc).select("text").style("opacity",0).attr("class",function(a){return e.isGaugeType(a.data)?l.gaugeValue:""}).text(e.textForArcLabel.bind(e)).attr("transform",e.transformForArcLabel.bind(e)).style("font-size",function(a){return e.isGaugeType(a.data)?Math.round(e.radius/5)+"px":""}).transition().duration(a).style("opacity",function(a){return e.isTargetToShow(a.data.id)&&e.isArcType(a.data)?1:0}),h.select("."+l.chartArcsTitle).style("opacity",e.hasType("donut")||e.hasType("gauge")?1:0),e.hasType("gauge")&&(e.arcs.select("."+l.chartArcsBackground).attr("d",function(){var a={data:[{value:g.gauge_max}],startAngle:-1*(Math.PI/2),endAngle:Math.PI/2};return e.getArc(a,!0,!0)}),e.arcs.select("."+l.chartArcsGaugeUnit).attr("dy",".75em").text(g.gauge_label_show?g.gauge_units:""),e.arcs.select("."+l.chartArcsGaugeMin).attr("dx",-1*(e.innerRadius+(e.radius-e.innerRadius)/2)+"px").attr("dy","1.2em").text(g.gauge_label_show?g.gauge_min:""),e.arcs.select("."+l.chartArcsGaugeMax).attr("dx",e.innerRadius+(e.radius-e.innerRadius)/2+"px").attr("dy","1.2em").text(g.gauge_label_show?g.gauge_max:""))},i.initGauge=function(){var a=this.arcs;this.hasType("gauge")&&(a.append("path").attr("class",l.chartArcsBackground),a.append("text").attr("class",l.chartArcsGaugeUnit).style("text-anchor","middle").style("pointer-events","none"),a.append("text").attr("class",l.chartArcsGaugeMin).style("text-anchor","middle").style("pointer-events","none"),a.append("text").attr("class",l.chartArcsGaugeMax).style("text-anchor","middle").style("pointer-events","none"))},i.getGaugeLabelHeight=function(){return this.config.gauge_label_show?20:0},i.initRegion=function(){var a=this;a.region=a.main.append("g").attr("clip-path",a.clipPath).attr("class",l.regions)},i.updateRegion=function(a){var b=this,c=b.config;b.region.style("visibility",b.hasArcType()?"hidden":"visible"),b.mainRegion=b.main.select("."+l.regions).selectAll("."+l.region).data(c.regions),b.mainRegion.enter().append("g").attr("class",b.classRegion.bind(b)).append("rect").style("fill-opacity",0),b.mainRegion.exit().transition().duration(a).style("opacity",0).remove()},i.redrawRegion=function(a){var b=this,c=b.mainRegion.selectAll("rect"),d=b.regionX.bind(b),e=b.regionY.bind(b),f=b.regionWidth.bind(b),g=b.regionHeight.bind(b);return[(a?c.transition():c).attr("x",d).attr("y",e).attr("width",f).attr("height",g).style("fill-opacity",function(a){return m(a.opacity)?a.opacity:.1})]},i.regionX=function(a){var b,c=this,d=c.config,e="y"===a.axis?c.y:c.y2;return b="y"===a.axis||"y2"===a.axis?d.axis_rotated&&"start"in a?e(a.start):0:d.axis_rotated?0:"start"in a?c.x(c.isTimeSeries()?c.parseDate(a.start):a.start):0},i.regionY=function(a){var b,c=this,d=c.config,e="y"===a.axis?c.y:c.y2;return b="y"===a.axis||"y2"===a.axis?d.axis_rotated?0:"end"in a?e(a.end):0:d.axis_rotated&&"start"in a?c.x(c.isTimeSeries()?c.parseDate(a.start):a.start):0},i.regionWidth=function(a){var b,c=this,d=c.config,e=c.regionX(a),f="y"===a.axis?c.y:c.y2;return b="y"===a.axis||"y2"===a.axis?d.axis_rotated&&"end"in a?f(a.end):c.width:d.axis_rotated?c.width:"end"in a?c.x(c.isTimeSeries()?c.parseDate(a.end):a.end):c.width,e>b?0:b-e},i.regionHeight=function(a){var b,c=this,d=c.config,e=this.regionY(a),f="y"===a.axis?c.y:c.y2;return b="y"===a.axis||"y2"===a.axis?d.axis_rotated?c.height:"start"in a?f(a.start):c.height:d.axis_rotated&&"end"in a?c.x(c.isTimeSeries()?c.parseDate(a.end):a.end):c.height,e>b?0:b-e},i.isRegionOnX=function(a){return!a.axis||"x"===a.axis},i.drag=function(a){var b,c,d,e,f,g,h,i,j=this,k=j.config,m=j.main,n=j.d3;j.hasArcType()||k.data_selection_enabled&&(!k.zoom_enabled||j.zoom.altDomain)&&k.data_selection_multiple&&(b=j.dragStart[0],c=j.dragStart[1],d=a[0],e=a[1],f=Math.min(b,d),g=Math.max(b,d),h=k.data_selection_grouped?j.margin.top:Math.min(c,e),i=k.data_selection_grouped?j.height:Math.max(c,e),m.select("."+l.dragarea).attr("x",f).attr("y",h).attr("width",g-f).attr("height",i-h),m.selectAll("."+l.shapes).selectAll("."+l.shape).filter(function(a){return k.data_selection_isselectable(a)}).each(function(a,b){var c,d,e,k,m,o,p=n.select(this),q=p.classed(l.SELECTED),r=p.classed(l.INCLUDED),s=!1;if(p.classed(l.circle))c=1*p.attr("cx"),d=1*p.attr("cy"),m=j.togglePoint,s=c>f&&g>c&&d>h&&i>d;else{if(!p.classed(l.bar))return;o=y(this),c=o.x,d=o.y,e=o.width,k=o.height,m=j.togglePath,s=!(c>g||f>c+e||d>i||h>d+k)}s^r&&(p.classed(l.INCLUDED,!r),p.classed(l.SELECTED,!q),m.call(j,!q,p,a,b))}))},i.dragstart=function(a){var b=this,c=b.config;b.hasArcType()||c.data_selection_enabled&&(b.dragStart=a,b.main.select("."+l.chart).append("rect").attr("class",l.dragarea).style("opacity",.1),b.dragging=!0)},i.dragend=function(){var a=this,b=a.config;a.hasArcType()||b.data_selection_enabled&&(a.main.select("."+l.dragarea).transition().duration(100).style("opacity",0).remove(),a.main.selectAll("."+l.shape).classed(l.INCLUDED,!1),a.dragging=!1)},i.selectPoint=function(a,b,c){var d=this,e=d.config,f=(e.axis_rotated?d.circleY:d.circleX).bind(d),g=(e.axis_rotated?d.circleX:d.circleY).bind(d),h=d.pointSelectR.bind(d);e.data_onselected.call(d.api,b,a.node()),d.main.select("."+l.selectedCircles+d.getTargetSelectorSuffix(b.id)).selectAll("."+l.selectedCircle+"-"+c).data([b]).enter().append("circle").attr("class",function(){return d.generateClass(l.selectedCircle,c)}).attr("cx",f).attr("cy",g).attr("stroke",function(){return d.color(b)}).attr("r",function(a){return 1.4*d.pointSelectR(a)}).transition().duration(100).attr("r",h)},i.unselectPoint=function(a,b,c){var d=this;d.config.data_onunselected(b,a.node()),d.main.select("."+l.selectedCircles+d.getTargetSelectorSuffix(b.id)).selectAll("."+l.selectedCircle+"-"+c).transition().duration(100).attr("r",0).remove()},i.togglePoint=function(a,b,c,d){a?this.selectPoint(b,c,d):this.unselectPoint(b,c,d)},i.selectPath=function(a,b){var c=this;c.config.data_onselected.call(c,b,a.node()),a.transition().duration(100).style("fill",function(){return c.d3.rgb(c.color(b)).brighter(.75)})},i.unselectPath=function(a,b){var c=this;c.config.data_onunselected.call(c,b,a.node()),a.transition().duration(100).style("fill",function(){return c.color(b)})},i.togglePath=function(a,b,c,d){a?this.selectPath(b,c,d):this.unselectPath(b,c,d)},i.getToggle=function(a,b){var c,d=this;return"circle"===a.nodeName?c=d.isStepType(b)?function(){}:d.togglePoint:"path"===a.nodeName&&(c=d.togglePath),c},i.toggleShape=function(a,b,c){var d=this,e=d.d3,f=d.config,g=e.select(a),h=g.classed(l.SELECTED),i=d.getToggle(a,b).bind(d);f.data_selection_enabled&&f.data_selection_isselectable(b)&&(f.data_selection_multiple||d.main.selectAll("."+l.shapes+(f.data_selection_grouped?d.getTargetSelectorSuffix(b.id):"")).selectAll("."+l.shape).each(function(a,b){var c=e.select(this);c.classed(l.SELECTED)&&i(!1,c.classed(l.SELECTED,!1),a,b)}),g.classed(l.SELECTED,!h),i(!h,g,b,c))},i.initBrush=function(){var a=this,b=a.d3;a.brush=b.svg.brush().on("brush",function(){a.redrawForBrush()}),a.brush.update=function(){return a.context&&a.context.select("."+l.brush).call(this),this},a.brush.scale=function(b){return a.config.axis_rotated?this.y(b):this.x(b)}},i.initSubchart=function(){var a=this,b=a.config,c=a.context=a.svg.append("g").attr("transform",a.getTranslate("context"));c.style("visibility",b.subchart_show?"visible":"hidden"),c.append("g").attr("clip-path",a.clipPathForSubchart).attr("class",l.chart),c.select("."+l.chart).append("g").attr("class",l.chartBars),c.select("."+l.chart).append("g").attr("class",l.chartLines),c.append("g").attr("clip-path",a.clipPath).attr("class",l.brush).call(a.brush),a.axes.subx=c.append("g").attr("class",l.axisX).attr("transform",a.getTranslate("subx")).attr("clip-path",b.axis_rotated?"":a.clipPathForXAxis)},i.updateTargetsForSubchart=function(a){var b,c,d,e,f=this,g=f.context,h=f.config,i=f.classChartBar.bind(f),j=f.classBars.bind(f),k=f.classChartLine.bind(f),m=f.classLines.bind(f),n=f.classAreas.bind(f);h.subchart_show&&(e=g.select("."+l.chartBars).selectAll("."+l.chartBar).data(a).attr("class",i),d=e.enter().append("g").style("opacity",0).attr("class",i),d.append("g").attr("class",j),c=g.select("."+l.chartLines).selectAll("."+l.chartLine).data(a).attr("class",k),b=c.enter().append("g").style("opacity",0).attr("class",k),b.append("g").attr("class",m),b.append("g").attr("class",n),g.selectAll("."+l.brush+" rect").attr(h.axis_rotated?"width":"height",h.axis_rotated?f.width2:f.height2))},i.updateBarForSubchart=function(a){var b=this;b.contextBar=b.context.selectAll("."+l.bars).selectAll("."+l.bar).data(b.barData.bind(b)),b.contextBar.enter().append("path").attr("class",b.classBar.bind(b)).style("stroke","none").style("fill",b.color),b.contextBar.style("opacity",b.initialOpacity.bind(b)),b.contextBar.exit().transition().duration(a).style("opacity",0).remove()},i.redrawBarForSubchart=function(a,b,c){(b?this.contextBar.transition().duration(c):this.contextBar).attr("d",a).style("opacity",1)},i.updateLineForSubchart=function(a){var b=this;b.contextLine=b.context.selectAll("."+l.lines).selectAll("."+l.line).data(b.lineData.bind(b)),b.contextLine.enter().append("path").attr("class",b.classLine.bind(b)).style("stroke",b.color),b.contextLine.style("opacity",b.initialOpacity.bind(b)),b.contextLine.exit().transition().duration(a).style("opacity",0).remove()},i.redrawLineForSubchart=function(a,b,c){(b?this.contextLine.transition().duration(c):this.contextLine).attr("d",a).style("opacity",1)},i.updateAreaForSubchart=function(a){var b=this,c=b.d3;b.contextArea=b.context.selectAll("."+l.areas).selectAll("."+l.area).data(b.lineData.bind(b)),b.contextArea.enter().append("path").attr("class",b.classArea.bind(b)).style("fill",b.color).style("opacity",function(){return b.orgAreaOpacity=+c.select(this).style("opacity"),0}),b.contextArea.style("opacity",0),b.contextArea.exit().transition().duration(a).style("opacity",0).remove()},i.redrawAreaForSubchart=function(a,b,c){(b?this.contextArea.transition().duration(c):this.contextArea).attr("d",a).style("fill",this.color).style("opacity",this.orgAreaOpacity)},i.redrawSubchart=function(a,b,c,d,e,f,g){var h,i,j,k=this,l=k.d3,m=k.config;k.context.style("visibility",m.subchart_show?"visible":"hidden"),m.subchart_show&&(l.event&&"zoom"===l.event.type&&k.brush.extent(k.x.orgDomain()).update(),a&&(k.brush.empty()||k.brush.extent(k.x.orgDomain()).update(),h=k.generateDrawArea(e,!0),i=k.generateDrawBar(f,!0),j=k.generateDrawLine(g,!0),k.updateBarForSubchart(c),k.updateLineForSubchart(c),k.updateAreaForSubchart(c),k.redrawBarForSubchart(i,c,c),k.redrawLineForSubchart(j,c,c),k.redrawAreaForSubchart(h,c,c)))},i.redrawForBrush=function(){var a=this,b=a.x;a.redraw({withTransition:!1,withY:a.config.zoom_rescale,withSubchart:!1,withUpdateXDomain:!0,withDimension:!1}),a.config.subchart_onbrush.call(a.api,b.orgDomain())},i.transformContext=function(a,b){var c,d=this;b&&b.axisSubX?c=b.axisSubX:(c=d.context.select("."+l.axisX),a&&(c=c.transition())),d.context.attr("transform",d.getTranslate("context")),c.attr("transform",d.getTranslate("subx"))},i.getDefaultExtent=function(){var a=this,b=a.config,c=n(b.axis_x_extent)?b.axis_x_extent(a.getXDomain(a.data.targets)):b.axis_x_extent;return a.isTimeSeries()&&(c=[a.parseDate(c[0]),a.parseDate(c[1])]),c},i.initZoom=function(){var a,b=this,c=b.d3,d=b.config;b.zoom=c.behavior.zoom().on("zoomstart",function(){a=c.event.sourceEvent,b.zoom.altDomain=c.event.sourceEvent.altKey?b.x.orgDomain():null,d.zoom_onzoomstart.call(b.api,c.event.sourceEvent)}).on("zoom",function(){b.redrawForZoom.call(b)}).on("zoomend",function(){var e=c.event.sourceEvent;e&&a.clientX===e.clientX&&a.clientY===e.clientY||(b.redrawEventRect(),b.updateZoom(),d.zoom_onzoomend.call(b.api,b.x.orgDomain()))}),b.zoom.scale=function(a){return d.axis_rotated?this.y(a):this.x(a)},b.zoom.orgScaleExtent=function(){var a=d.zoom_extent?d.zoom_extent:[1,10];return[a[0],Math.max(b.getMaxDataCount()/a[1],a[1])]},b.zoom.updateScaleExtent=function(){var a=t(b.x.orgDomain())/t(b.orgXDomain),c=this.orgScaleExtent();return this.scaleExtent([c[0]*a,c[1]*a]),this}},i.updateZoom=function(){var a=this,b=a.config.zoom_enabled?a.zoom:function(){};a.main.select("."+l.zoomRect).call(b).on("dblclick.zoom",null),a.main.selectAll("."+l.eventRect).call(b).on("dblclick.zoom",null)},i.redrawForZoom=function(){var a=this,b=a.d3,c=a.config,d=a.zoom,e=a.x;if(c.zoom_enabled&&0!==a.filterTargetsToShow(a.data.targets).length){if("mousemove"===b.event.sourceEvent.type&&d.altDomain)return e.domain(d.altDomain),void d.scale(e).updateScaleExtent();a.isCategorized()&&e.orgDomain()[0]===a.orgXDomain[0]&&e.domain([a.orgXDomain[0]-1e-10,e.orgDomain()[1]]),a.redraw({withTransition:!1,withY:c.zoom_rescale,withSubchart:!1,withEventRect:!1,withDimension:!1}),"mousemove"===b.event.sourceEvent.type&&(a.cancelClick=!0),c.zoom_onzoom.call(a.api,e.orgDomain())}},i.generateColor=function(){var a=this,b=a.config,c=a.d3,d=b.data_colors,e=v(b.color_pattern)?b.color_pattern:c.scale.category10().range(),f=b.data_color,g=[];return function(a){var b,c=a.id||a.data&&a.data.id||a;return d[c]instanceof Function?b=d[c](a):d[c]?b=d[c]:(g.indexOf(c)<0&&g.push(c),b=e[g.indexOf(c)%e.length],d[c]=b),f instanceof Function?f(b,a):b}},i.generateLevelColor=function(){var a=this,b=a.config,c=b.color_pattern,d=b.color_threshold,e="value"===d.unit,f=d.values&&d.values.length?d.values:[],g=d.max||100;return v(b.color_threshold)?function(a){var b,d,h=c[c.length-1];for(b=0;b<f.length;b++)if(d=e?a:100*a/g,d<f[b]){h=c[b];break}return h}:null},i.getYFormat=function(a){var b=this,c=a&&!b.hasType("gauge")?b.defaultArcValueFormat:b.yFormat,d=a&&!b.hasType("gauge")?b.defaultArcValueFormat:b.y2Format;return function(a,e,f){var g="y2"===b.axis.getId(f)?d:c;return g.call(b,a,e)}},i.yFormat=function(a){var b=this,c=b.config,d=c.axis_y_tick_format?c.axis_y_tick_format:b.defaultValueFormat;return d(a)},i.y2Format=function(a){var b=this,c=b.config,d=c.axis_y2_tick_format?c.axis_y2_tick_format:b.defaultValueFormat;return d(a)},i.defaultValueFormat=function(a){return m(a)?+a:""},i.defaultArcValueFormat=function(a,b){return(100*b).toFixed(1)+"%"},i.dataLabelFormat=function(a){var b,c=this,d=c.config.data_labels,e=function(a){return m(a)?+a:""};return b="function"==typeof d.format?d.format:"object"==typeof d.format?d.format[a]?d.format[a]===!0?e:d.format[a]:function(){return""}:e},i.hasCaches=function(a){for(var b=0;b<a.length;b++)if(!(a[b]in this.cache))return!1;return!0},i.addCache=function(a,b){this.cache[a]=this.cloneTarget(b)},i.getCaches=function(a){var b,c=[];for(b=0;b<a.length;b++)a[b]in this.cache&&c.push(this.cloneTarget(this.cache[a[b]]));return c};var l=i.CLASS={target:"c3-target",chart:"c3-chart",chartLine:"c3-chart-line",chartLines:"c3-chart-lines",chartBar:"c3-chart-bar",chartBars:"c3-chart-bars",chartText:"c3-chart-text",chartTexts:"c3-chart-texts",chartArc:"c3-chart-arc",chartArcs:"c3-chart-arcs",chartArcsTitle:"c3-chart-arcs-title",chartArcsBackground:"c3-chart-arcs-background",chartArcsGaugeUnit:"c3-chart-arcs-gauge-unit",chartArcsGaugeMax:"c3-chart-arcs-gauge-max",chartArcsGaugeMin:"c3-chart-arcs-gauge-min",selectedCircle:"c3-selected-circle",selectedCircles:"c3-selected-circles",eventRect:"c3-event-rect",eventRects:"c3-event-rects",eventRectsSingle:"c3-event-rects-single",eventRectsMultiple:"c3-event-rects-multiple",zoomRect:"c3-zoom-rect",brush:"c3-brush",focused:"c3-focused",defocused:"c3-defocused",region:"c3-region",regions:"c3-regions",tooltipContainer:"c3-tooltip-container",tooltip:"c3-tooltip",tooltipName:"c3-tooltip-name",shape:"c3-shape",shapes:"c3-shapes",line:"c3-line",lines:"c3-lines",bar:"c3-bar",bars:"c3-bars",circle:"c3-circle",circles:"c3-circles",arc:"c3-arc",arcs:"c3-arcs",area:"c3-area",areas:"c3-areas",empty:"c3-empty",text:"c3-text",texts:"c3-texts",gaugeValue:"c3-gauge-value",grid:"c3-grid",gridLines:"c3-grid-lines",xgrid:"c3-xgrid",xgrids:"c3-xgrids",xgridLine:"c3-xgrid-line",xgridLines:"c3-xgrid-lines",xgridFocus:"c3-xgrid-focus",ygrid:"c3-ygrid",ygrids:"c3-ygrids",ygridLine:"c3-ygrid-line",ygridLines:"c3-ygrid-lines",axis:"c3-axis",axisX:"c3-axis-x",axisXLabel:"c3-axis-x-label",axisY:"c3-axis-y",axisYLabel:"c3-axis-y-label",axisY2:"c3-axis-y2",axisY2Label:"c3-axis-y2-label",legendBackground:"c3-legend-background",legendItem:"c3-legend-item",legendItemEvent:"c3-legend-item-event",legendItemTile:"c3-legend-item-tile",legendItemHidden:"c3-legend-item-hidden",legendItemFocused:"c3-legend-item-focused",dragarea:"c3-dragarea",EXPANDED:"_expanded_",SELECTED:"_selected_",INCLUDED:"_included_"};i.generateClass=function(a,b){return" "+a+" "+a+this.getTargetSelectorSuffix(b)},i.classText=function(a){return this.generateClass(l.text,a.index)},i.classTexts=function(a){return this.generateClass(l.texts,a.id)},i.classShape=function(a){return this.generateClass(l.shape,a.index)},i.classShapes=function(a){return this.generateClass(l.shapes,a.id)},i.classLine=function(a){return this.classShape(a)+this.generateClass(l.line,a.id)},i.classLines=function(a){return this.classShapes(a)+this.generateClass(l.lines,a.id)},i.classCircle=function(a){return this.classShape(a)+this.generateClass(l.circle,a.index)},i.classCircles=function(a){return this.classShapes(a)+this.generateClass(l.circles,a.id)},i.classBar=function(a){return this.classShape(a)+this.generateClass(l.bar,a.index)},i.classBars=function(a){return this.classShapes(a)+this.generateClass(l.bars,a.id)},i.classArc=function(a){return this.classShape(a.data)+this.generateClass(l.arc,a.data.id)},i.classArcs=function(a){return this.classShapes(a.data)+this.generateClass(l.arcs,a.data.id)},i.classArea=function(a){return this.classShape(a)+this.generateClass(l.area,a.id)},i.classAreas=function(a){return this.classShapes(a)+this.generateClass(l.areas,a.id)},i.classRegion=function(a,b){return this.generateClass(l.region,b)+" "+("class"in a?a["class"]:"")},i.classEvent=function(a){return this.generateClass(l.eventRect,a.index)},i.classTarget=function(a){var b=this,c=b.config.data_classes[a],d="";return c&&(d=" "+l.target+"-"+c),b.generateClass(l.target,a)+d},i.classFocus=function(a){return this.classFocused(a)+this.classDefocused(a)},i.classFocused=function(a){return" "+(this.focusedTargetIds.indexOf(a.id)>=0?l.focused:"")},i.classDefocused=function(a){return" "+(this.defocusedTargetIds.indexOf(a.id)>=0?l.defocused:"")},i.classChartText=function(a){return l.chartText+this.classTarget(a.id)},i.classChartLine=function(a){return l.chartLine+this.classTarget(a.id)},i.classChartBar=function(a){return l.chartBar+this.classTarget(a.id)},i.classChartArc=function(a){return l.chartArc+this.classTarget(a.data.id)},i.getTargetSelectorSuffix=function(a){return a||0===a?("-"+a).replace(/[\s?!@#$%^&*()_=+,.<>'":;\[\]\/|~`{}\\]/g,"-"):""},i.selectorTarget=function(a,b){return(b||"")+"."+l.target+this.getTargetSelectorSuffix(a)},i.selectorTargets=function(a,b){var c=this;return a=a||[],a.length?a.map(function(a){return c.selectorTarget(a,b)}):null},i.selectorLegend=function(a){return"."+l.legendItem+this.getTargetSelectorSuffix(a)},i.selectorLegends=function(a){var b=this;return a&&a.length?a.map(function(a){return b.selectorLegend(a)}):null};var m=i.isValue=function(a){return a||0===a},n=i.isFunction=function(a){return"function"==typeof a},o=i.isString=function(a){return"string"==typeof a},p=i.isUndefined=function(a){return"undefined"==typeof a},q=i.isDefined=function(a){return"undefined"!=typeof a},r=i.ceil10=function(a){return 10*Math.ceil(a/10)},s=i.asHalfPixel=function(a){return Math.ceil(a)+.5},t=i.diffDomain=function(a){return a[1]-a[0]},u=i.isEmpty=function(a){return!a||o(a)&&0===a.length||"object"==typeof a&&0===Object.keys(a).length},v=i.notEmpty=function(a){return Object.keys(a).length>0},w=i.getOption=function(a,b,c){return q(a[b])?a[b]:c},x=i.hasValue=function(a,b){var c=!1;return Object.keys(a).forEach(function(d){a[d]===b&&(c=!0)}),c},y=i.getPathBox=function(a){var b=a.getBoundingClientRect(),c=[a.pathSegList.getItem(0),a.pathSegList.getItem(1)],d=c[0].x,e=Math.min(c[0].y,c[1].y);return{x:d,y:e,width:b.width,height:b.height}};h.focus=function(a){var b,c=this.internal;a=c.mapToTargetIds(a),b=c.svg.selectAll(c.selectorTargets(a.filter(c.isTargetToShow,c))),this.revert(),this.defocus(),b.classed(l.focused,!0).classed(l.defocused,!1),c.hasArcType()&&c.expandArc(a),c.toggleFocusLegend(a,!0),c.focusedTargetIds=a,c.defocusedTargetIds=c.defocusedTargetIds.filter(function(b){return a.indexOf(b)<0})},h.defocus=function(a){var b,c=this.internal;a=c.mapToTargetIds(a),b=c.svg.selectAll(c.selectorTargets(a.filter(c.isTargetToShow,c))),b.classed(l.focused,!1).classed(l.defocused,!0),c.hasArcType()&&c.unexpandArc(a),c.toggleFocusLegend(a,!1),c.focusedTargetIds=c.focusedTargetIds.filter(function(b){return a.indexOf(b)<0}),c.defocusedTargetIds=a},h.revert=function(a){var b,c=this.internal;a=c.mapToTargetIds(a),b=c.svg.selectAll(c.selectorTargets(a)),b.classed(l.focused,!1).classed(l.defocused,!1),c.hasArcType()&&c.unexpandArc(a),c.config.legend_show&&(c.showLegend(a.filter(c.isLegendToShow.bind(c))),c.legend.selectAll(c.selectorLegends(a)).filter(function(){return c.d3.select(this).classed(l.legendItemFocused)}).classed(l.legendItemFocused,!1)),c.focusedTargetIds=[],c.defocusedTargetIds=[]},h.show=function(a,b){var c,d=this.internal;a=d.mapToTargetIds(a),b=b||{},d.removeHiddenTargetIds(a),c=d.svg.selectAll(d.selectorTargets(a)),c.transition().style("opacity",1,"important").call(d.endall,function(){c.style("opacity",null).style("opacity",1)}),b.withLegend&&d.showLegend(a),d.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0})},h.hide=function(a,b){var c,d=this.internal;a=d.mapToTargetIds(a),b=b||{},d.addHiddenTargetIds(a),c=d.svg.selectAll(d.selectorTargets(a)),c.transition().style("opacity",0,"important").call(d.endall,function(){c.style("opacity",null).style("opacity",0)}),b.withLegend&&d.hideLegend(a),d.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0})},h.toggle=function(a,b){var c=this,d=this.internal;d.mapToTargetIds(a).forEach(function(a){d.isTargetToShow(a)?c.hide(a,b):c.show(a,b)})},h.zoom=function(a){var b=this.internal;return a&&(b.isTimeSeries()&&(a=a.map(function(a){return b.parseDate(a)})),b.brush.extent(a),b.redraw({withUpdateXDomain:!0,withY:b.config.zoom_rescale}),b.config.zoom_onzoom.call(this,b.x.orgDomain())),b.brush.extent()},h.zoom.enable=function(a){var b=this.internal;b.config.zoom_enabled=a,b.updateAndRedraw()},h.unzoom=function(){var a=this.internal;a.brush.clear().update(),a.redraw({withUpdateXDomain:!0})},h.load=function(a){var b=this.internal,c=b.config;return a.xs&&b.addXs(a.xs),"classes"in a&&Object.keys(a.classes).forEach(function(b){c.data_classes[b]=a.classes[b]}),"categories"in a&&b.isCategorized()&&(c.axis_x_categories=a.categories),"axes"in a&&Object.keys(a.axes).forEach(function(b){c.data_axes[b]=a.axes[b]}),"colors"in a&&Object.keys(a.colors).forEach(function(b){c.data_colors[b]=a.colors[b]}),"cacheIds"in a&&b.hasCaches(a.cacheIds)?void b.load(b.getCaches(a.cacheIds),a.done):void("unload"in a?b.unload(b.mapToTargetIds("boolean"==typeof a.unload&&a.unload?null:a.unload),function(){b.loadFromArgs(a)}):b.loadFromArgs(a))},h.unload=function(a){var b=this.internal;a=a||{},a instanceof Array?a={ids:a}:"string"==typeof a&&(a={ids:[a]}),b.unload(b.mapToTargetIds(a.ids),function(){b.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0}),a.done&&a.done()})},h.flow=function(a){var b,c,d,e,f,g,h,i,j=this.internal,k=[],l=j.getMaxDataCount(),n=0,o=0;if(a.json)c=j.convertJsonToData(a.json,a.keys);else if(a.rows)c=j.convertRowsToData(a.rows);else{if(!a.columns)return;c=j.convertColumnsToData(a.columns)}b=j.convertDataToTargets(c,!0),j.data.targets.forEach(function(a){var c,d,e=!1;for(c=0;c<b.length;c++)if(a.id===b[c].id){for(e=!0,a.values[a.values.length-1]&&(o=a.values[a.values.length-1].index+1),n=b[c].values.length,d=0;n>d;d++)b[c].values[d].index=o+d,j.isTimeSeries()||(b[c].values[d].x=o+d);a.values=a.values.concat(b[c].values),b.splice(c,1);break}e||k.push(a.id)}),j.data.targets.forEach(function(a){var b,c;for(b=0;b<k.length;b++)if(a.id===k[b])for(o=a.values[a.values.length-1].index+1,c=0;n>c;c++)a.values.push({id:a.id,index:o+c,x:j.isTimeSeries()?j.getOtherTargetX(o+c):o+c,value:null})}),j.data.targets.length&&b.forEach(function(a){var b,c=[];for(b=j.data.targets[0].values[0].index;o>b;b++)c.push({id:a.id,index:b,x:j.isTimeSeries()?j.getOtherTargetX(b):b,value:null});a.values.forEach(function(a){a.index+=o,j.isTimeSeries()||(a.x+=o)}),a.values=c.concat(a.values)}),j.data.targets=j.data.targets.concat(b),d=j.getMaxDataCount(),f=j.data.targets[0],g=f.values[0],q(a.to)?(n=0,i=j.isTimeSeries()?j.parseDate(a.to):a.to,f.values.forEach(function(a){a.x<i&&n++})):q(a.length)&&(n=a.length),l?1===l&&j.isTimeSeries()&&(h=(f.values[f.values.length-1].x-g.x)/2,e=[new Date(+g.x-h),new Date(+g.x+h)],j.updateXDomain(null,!0,!0,!1,e)):(h=j.isTimeSeries()?f.values.length>1?f.values[f.values.length-1].x-g.x:g.x-j.getXDomain(j.data.targets)[0]:1,e=[g.x-h,g.x],j.updateXDomain(null,!0,!0,!1,e)),j.updateTargets(j.data.targets),j.redraw({flow:{index:g.index,length:n,duration:m(a.duration)?a.duration:j.config.transition_duration,done:a.done,orgDataCount:l},withLegend:!0,withTransition:l>1,withTrimXDomain:!1,withUpdateXAxis:!0})},i.generateFlow=function(a){var b=this,c=b.config,d=b.d3;return function(){var e,f,g,h=a.targets,i=a.flow,j=a.drawBar,k=a.drawLine,m=a.drawArea,n=a.cx,o=a.cy,p=a.xv,q=a.xForText,r=a.yForText,s=a.duration,u=1,v=i.index,w=i.length,x=b.getValueOnIndex(b.data.targets[0].values,v),y=b.getValueOnIndex(b.data.targets[0].values,v+w),z=b.x.domain(),A=i.duration||s,B=i.done||function(){},C=b.generateWait(),D=b.xgrid||d.selectAll([]),E=b.xgridLines||d.selectAll([]),F=b.mainRegion||d.selectAll([]),G=b.mainText||d.selectAll([]),H=b.mainBar||d.selectAll([]),I=b.mainLine||d.selectAll([]),J=b.mainArea||d.selectAll([]),K=b.mainCircle||d.selectAll([]);b.flowing=!0,b.data.targets.forEach(function(a){a.values.splice(0,w)}),g=b.updateXDomain(h,!0,!0),b.updateXGrid&&b.updateXGrid(!0),i.orgDataCount?e=1===i.orgDataCount||x.x===y.x?b.x(z[0])-b.x(g[0]):b.isTimeSeries()?b.x(z[0])-b.x(g[0]):b.x(x.x)-b.x(y.x):1!==b.data.targets[0].values.length?e=b.x(z[0])-b.x(g[0]):b.isTimeSeries()?(x=b.getValueOnIndex(b.data.targets[0].values,0),y=b.getValueOnIndex(b.data.targets[0].values,b.data.targets[0].values.length-1),e=b.x(x.x)-b.x(y.x)):e=t(g)/2,u=t(z)/t(g),f="translate("+e+",0) scale("+u+",1)",b.hideXGridFocus(),b.hideTooltip(),d.transition().ease("linear").duration(A).each(function(){C.add(b.axes.x.transition().call(b.xAxis)),C.add(H.transition().attr("transform",f)),C.add(I.transition().attr("transform",f)),C.add(J.transition().attr("transform",f)),C.add(K.transition().attr("transform",f)),C.add(G.transition().attr("transform",f)),C.add(F.filter(b.isRegionOnX).transition().attr("transform",f)),C.add(D.transition().attr("transform",f)),C.add(E.transition().attr("transform",f))
}).call(C,function(){var a,d=[],e=[],f=[];if(w){for(a=0;w>a;a++)d.push("."+l.shape+"-"+(v+a)),e.push("."+l.text+"-"+(v+a)),f.push("."+l.eventRect+"-"+(v+a));b.svg.selectAll("."+l.shapes).selectAll(d).remove(),b.svg.selectAll("."+l.texts).selectAll(e).remove(),b.svg.selectAll("."+l.eventRects).selectAll(f).remove(),b.svg.select("."+l.xgrid).remove()}D.attr("transform",null).attr(b.xgridAttr),E.attr("transform",null),E.select("line").attr("x1",c.axis_rotated?0:p).attr("x2",c.axis_rotated?b.width:p),E.select("text").attr("x",c.axis_rotated?b.width:0).attr("y",p),H.attr("transform",null).attr("d",j),I.attr("transform",null).attr("d",k),J.attr("transform",null).attr("d",m),K.attr("transform",null).attr("cx",n).attr("cy",o),G.attr("transform",null).attr("x",q).attr("y",r).style("fill-opacity",b.opacityForText.bind(b)),F.attr("transform",null),F.select("rect").filter(b.isRegionOnX).attr("x",b.regionX.bind(b)).attr("width",b.regionWidth.bind(b)),c.interaction_enabled&&b.redrawEventRect(),B(),b.flowing=!1})}},h.selected=function(a){var b=this.internal,c=b.d3;return c.merge(b.main.selectAll("."+l.shapes+b.getTargetSelectorSuffix(a)).selectAll("."+l.shape).filter(function(){return c.select(this).classed(l.SELECTED)}).map(function(a){return a.map(function(a){var b=a.__data__;return b.data?b.data:b})}))},h.select=function(a,b,c){var d=this.internal,e=d.d3,f=d.config;f.data_selection_enabled&&d.main.selectAll("."+l.shapes).selectAll("."+l.shape).each(function(g,h){var i=e.select(this),j=g.data?g.data.id:g.id,k=d.getToggle(this,g).bind(d),m=f.data_selection_grouped||!a||a.indexOf(j)>=0,n=!b||b.indexOf(h)>=0,o=i.classed(l.SELECTED);i.classed(l.line)||i.classed(l.area)||(m&&n?f.data_selection_isselectable(g)&&!o&&k(!0,i.classed(l.SELECTED,!0),g,h):q(c)&&c&&o&&k(!1,i.classed(l.SELECTED,!1),g,h))})},h.unselect=function(a,b){var c=this.internal,d=c.d3,e=c.config;e.data_selection_enabled&&c.main.selectAll("."+l.shapes).selectAll("."+l.shape).each(function(f,g){var h=d.select(this),i=f.data?f.data.id:f.id,j=c.getToggle(this,f).bind(c),k=e.data_selection_grouped||!a||a.indexOf(i)>=0,m=!b||b.indexOf(g)>=0,n=h.classed(l.SELECTED);h.classed(l.line)||h.classed(l.area)||k&&m&&e.data_selection_isselectable(f)&&n&&j(!1,h.classed(l.SELECTED,!1),f,g)})},h.transform=function(a,b){var c=this.internal,d=["pie","donut"].indexOf(a)>=0?{withTransform:!0}:null;c.transformTo(b,a,d)},i.transformTo=function(a,b,c){var d=this,e=!d.hasArcType(),f=c||{withTransitionForAxis:e};f.withTransitionForTransform=!1,d.transiting=!1,d.setTargetType(a,b),d.updateTargets(d.data.targets),d.updateAndRedraw(f)},h.groups=function(a){var b=this.internal,c=b.config;return p(a)?c.data_groups:(c.data_groups=a,b.redraw(),c.data_groups)},h.xgrids=function(a){var b=this.internal,c=b.config;return a?(c.grid_x_lines=a,b.redrawWithoutRescale(),c.grid_x_lines):c.grid_x_lines},h.xgrids.add=function(a){var b=this.internal;return this.xgrids(b.config.grid_x_lines.concat(a?a:[]))},h.xgrids.remove=function(a){var b=this.internal;b.removeGridLines(a,!0)},h.ygrids=function(a){var b=this.internal,c=b.config;return a?(c.grid_y_lines=a,b.redrawWithoutRescale(),c.grid_y_lines):c.grid_y_lines},h.ygrids.add=function(a){var b=this.internal;return this.ygrids(b.config.grid_y_lines.concat(a?a:[]))},h.ygrids.remove=function(a){var b=this.internal;b.removeGridLines(a,!1)},h.regions=function(a){var b=this.internal,c=b.config;return a?(c.regions=a,b.redrawWithoutRescale(),c.regions):c.regions},h.regions.add=function(a){var b=this.internal,c=b.config;return a?(c.regions=c.regions.concat(a),b.redrawWithoutRescale(),c.regions):c.regions},h.regions.remove=function(a){var b,c,d,e=this.internal,f=e.config;return a=a||{},b=e.getOption(a,"duration",f.transition_duration),c=e.getOption(a,"classes",[l.region]),d=e.main.select("."+l.regions).selectAll(c.map(function(a){return"."+a})),(b?d.transition().duration(b):d).style("opacity",0).remove(),f.regions=f.regions.filter(function(a){var b=!1;return a["class"]?(a["class"].split(" ").forEach(function(a){c.indexOf(a)>=0&&(b=!0)}),!b):!0}),f.regions},h.data=function(a){var b=this.internal.data.targets;return"undefined"==typeof a?b:b.filter(function(b){return[].concat(a).indexOf(b.id)>=0})},h.data.shown=function(a){return this.internal.filterTargetsToShow(this.data(a))},h.data.values=function(a){var b,c=null;return a&&(b=this.data(a),c=b[0]?b[0].values.map(function(a){return a.value}):null),c},h.data.names=function(a){return this.internal.clearLegendItemTextBoxCache(),this.internal.updateDataAttributes("names",a)},h.data.colors=function(a){return this.internal.updateDataAttributes("colors",a)},h.data.axes=function(a){return this.internal.updateDataAttributes("axes",a)},h.category=function(a,b){var c=this.internal,d=c.config;return arguments.length>1&&(d.axis_x_categories[a]=b,c.redraw()),d.axis_x_categories[a]},h.categories=function(a){var b=this.internal,c=b.config;return arguments.length?(c.axis_x_categories=a,b.redraw(),c.axis_x_categories):c.axis_x_categories},h.color=function(a){var b=this.internal;return b.color(a)},h.x=function(a){var b=this.internal;return arguments.length&&(b.updateTargetX(b.data.targets,a),b.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0})),b.data.xs},h.xs=function(a){var b=this.internal;return arguments.length&&(b.updateTargetXs(b.data.targets,a),b.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0})),b.data.xs},h.axis=function(){},h.axis.labels=function(a){var b=this.internal;arguments.length&&(Object.keys(a).forEach(function(c){b.axis.setLabelText(c,a[c])}),b.axis.updateLabels())},h.axis.max=function(a){var b=this.internal,c=b.config;return arguments.length?("object"==typeof a?(m(a.x)&&(c.axis_x_max=a.x),m(a.y)&&(c.axis_y_max=a.y),m(a.y2)&&(c.axis_y2_max=a.y2)):c.axis_y_max=c.axis_y2_max=a,void b.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0})):{x:c.axis_x_max,y:c.axis_y_max,y2:c.axis_y2_max}},h.axis.min=function(a){var b=this.internal,c=b.config;return arguments.length?("object"==typeof a?(m(a.x)&&(c.axis_x_min=a.x),m(a.y)&&(c.axis_y_min=a.y),m(a.y2)&&(c.axis_y2_min=a.y2)):c.axis_y_min=c.axis_y2_min=a,void b.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0})):{x:c.axis_x_min,y:c.axis_y_min,y2:c.axis_y2_min}},h.axis.range=function(a){return arguments.length?(q(a.max)&&this.axis.max(a.max),void(q(a.min)&&this.axis.min(a.min))):{max:this.axis.max(),min:this.axis.min()}},h.legend=function(){},h.legend.show=function(a){var b=this.internal;b.showLegend(b.mapToTargetIds(a)),b.updateAndRedraw({withLegend:!0})},h.legend.hide=function(a){var b=this.internal;b.hideLegend(b.mapToTargetIds(a)),b.updateAndRedraw({withLegend:!0})},h.resize=function(a){var b=this.internal,c=b.config;c.size_width=a?a.width:null,c.size_height=a?a.height:null,this.flush()},h.flush=function(){var a=this.internal;a.updateAndRedraw({withLegend:!0,withTransition:!1,withTransitionForTransform:!1})},h.destroy=function(){var b=this.internal;return a.clearInterval(b.intervalForObserveInserted),a.onresize=null,b.selectChart.classed("c3",!1).html(""),Object.keys(b).forEach(function(a){b[a]=null}),null},h.tooltip=function(){},h.tooltip.show=function(a){var b,c,d=this.internal;a.mouse&&(c=a.mouse),a.data?d.isMultipleX()?(c=[d.x(a.data.x),d.getYScale(a.data.id)(a.data.value)],b=null):b=m(a.data.index)?a.data.index:d.getIndexByX(a.data.x):"undefined"!=typeof a.x?b=d.getIndexByX(a.x):"undefined"!=typeof a.index&&(b=a.index),d.dispatchEvent("mouseover",b,c),d.dispatchEvent("mousemove",b,c)},h.tooltip.hide=function(){this.internal.dispatchEvent("mouseout",0)};var z;i.isSafari=function(){var b=a.navigator.userAgent;return b.indexOf("Safari")>=0&&b.indexOf("Chrome")<0},i.isChrome=function(){var b=a.navigator.userAgent;return b.indexOf("Chrome")>=0},Function.prototype.bind||(Function.prototype.bind=function(a){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var b=Array.prototype.slice.call(arguments,1),c=this,d=function(){},e=function(){return c.apply(this instanceof d?this:a,b.concat(Array.prototype.slice.call(arguments)))};return d.prototype=this.prototype,e.prototype=new d,e}),"function"==typeof define&&define.amd?define("c3",["d3"],k):"undefined"!=typeof exports&&"undefined"!=typeof module?module.exports=k:a.c3=k}(window);

/* nvd3 version 1.8.1 (https://github.com/novus/nvd3) 2015-06-15 */
!function(){var a={};a.dev=!1,a.tooltip=a.tooltip||{},a.utils=a.utils||{},a.models=a.models||{},a.charts={},a.logs={},a.dom={},a.dispatch=d3.dispatch("render_start","render_end"),Function.prototype.bind||(Function.prototype.bind=function(a){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var b=Array.prototype.slice.call(arguments,1),c=this,d=function(){},e=function(){return c.apply(this instanceof d&&a?this:a,b.concat(Array.prototype.slice.call(arguments)))};return d.prototype=this.prototype,e.prototype=new d,e}),a.dev&&(a.dispatch.on("render_start",function(){a.logs.startTime=+new Date}),a.dispatch.on("render_end",function(){a.logs.endTime=+new Date,a.logs.totalTime=a.logs.endTime-a.logs.startTime,a.log("total",a.logs.totalTime)})),a.log=function(){if(a.dev&&window.console&&console.log&&console.log.apply)console.log.apply(console,arguments);else if(a.dev&&window.console&&"function"==typeof console.log&&Function.prototype.bind){var b=Function.prototype.bind.call(console.log,console);b.apply(console,arguments)}return arguments[arguments.length-1]},a.deprecated=function(a,b){console&&console.warn&&console.warn("nvd3 warning: `"+a+"` has been deprecated. ",b||"")},a.render=function(b){b=b||1,a.render.active=!0,a.dispatch.render_start();var c=function(){for(var d,e,f=0;b>f&&(e=a.render.queue[f]);f++)d=e.generate(),typeof e.callback==typeof Function&&e.callback(d);a.render.queue.splice(0,f),a.render.queue.length?setTimeout(c):(a.dispatch.render_end(),a.render.active=!1)};setTimeout(c)},a.render.active=!1,a.render.queue=[],a.addGraph=function(b){typeof arguments[0]==typeof Function&&(b={generate:arguments[0],callback:arguments[1]}),a.render.queue.push(b),a.render.active||a.render()},"undefined"!=typeof module&&"undefined"!=typeof exports&&(module.exports=a),"undefined"!=typeof window&&(window.nv=a),a.dom.write=function(a){return void 0!==window.fastdom?fastdom.write(a):a()},a.dom.read=function(a){return void 0!==window.fastdom?fastdom.read(a):a()},a.interactiveGuideline=function(){"use strict";function b(l){l.each(function(l){function m(){var a=d3.mouse(this),d=a[0],e=a[1],i=!0,j=!1;if(k&&(d=d3.event.offsetX,e=d3.event.offsetY,"svg"!==d3.event.target.tagName&&(i=!1),d3.event.target.className.baseVal.match("nv-legend")&&(j=!0)),i&&(d-=f.left,e-=f.top),0>d||0>e||d>o||e>p||d3.event.relatedTarget&&void 0===d3.event.relatedTarget.ownerSVGElement||j){if(k&&d3.event.relatedTarget&&void 0===d3.event.relatedTarget.ownerSVGElement&&(void 0===d3.event.relatedTarget.className||d3.event.relatedTarget.className.match(c.nvPointerEventsClass)))return;return h.elementMouseout({mouseX:d,mouseY:e}),b.renderGuideLine(null),void c.hidden(!0)}c.hidden(!1);var l=g.invert(d);h.elementMousemove({mouseX:d,mouseY:e,pointXValue:l}),"dblclick"===d3.event.type&&h.elementDblclick({mouseX:d,mouseY:e,pointXValue:l}),"click"===d3.event.type&&h.elementClick({mouseX:d,mouseY:e,pointXValue:l})}var n=d3.select(this),o=d||960,p=e||400,q=n.selectAll("g.nv-wrap.nv-interactiveLineLayer").data([l]),r=q.enter().append("g").attr("class"," nv-wrap nv-interactiveLineLayer");r.append("g").attr("class","nv-interactiveGuideLine"),j&&(j.on("touchmove",m).on("mousemove",m,!0).on("mouseout",m,!0).on("dblclick",m).on("click",m),b.guideLine=null,b.renderGuideLine=function(c){i&&(b.guideLine&&b.guideLine.attr("x1")===c||a.dom.write(function(){var b=q.select(".nv-interactiveGuideLine").selectAll("line").data(null!=c?[a.utils.NaNtoZero(c)]:[],String);b.enter().append("line").attr("class","nv-guideline").attr("x1",function(a){return a}).attr("x2",function(a){return a}).attr("y1",p).attr("y2",0),b.exit().remove()}))})})}var c=a.models.tooltip();c.duration(0).hideDelay(0)._isInteractiveLayer(!0).hidden(!1);var d=null,e=null,f={left:0,top:0},g=d3.scale.linear(),h=d3.dispatch("elementMousemove","elementMouseout","elementClick","elementDblclick"),i=!0,j=null,k="ActiveXObject"in window;return b.dispatch=h,b.tooltip=c,b.margin=function(a){return arguments.length?(f.top="undefined"!=typeof a.top?a.top:f.top,f.left="undefined"!=typeof a.left?a.left:f.left,b):f},b.width=function(a){return arguments.length?(d=a,b):d},b.height=function(a){return arguments.length?(e=a,b):e},b.xScale=function(a){return arguments.length?(g=a,b):g},b.showGuideLine=function(a){return arguments.length?(i=a,b):i},b.svgContainer=function(a){return arguments.length?(j=a,b):j},b},a.interactiveBisect=function(a,b,c){"use strict";if(!(a instanceof Array))return null;var d;d="function"!=typeof c?function(a){return a.x}:c;var e=function(a,b){return d(a)-b},f=d3.bisector(e).left,g=d3.max([0,f(a,b)-1]),h=d(a[g]);if("undefined"==typeof h&&(h=g),h===b)return g;var i=d3.min([g+1,a.length-1]),j=d(a[i]);return"undefined"==typeof j&&(j=i),Math.abs(j-b)>=Math.abs(h-b)?g:i},a.nearestValueIndex=function(a,b,c){"use strict";var d=1/0,e=null;return a.forEach(function(a,f){var g=Math.abs(b-a);null!=a&&d>=g&&c>g&&(d=g,e=f)}),e},function(){"use strict";a.models.tooltip=function(){function b(){if(k){var a=d3.select(k);"svg"!==a.node().tagName&&(a=a.select("svg"));var b=a.node()?a.attr("viewBox"):null;if(b){b=b.split(" ");var c=parseInt(a.style("width"),10)/b[2];p.left=p.left*c,p.top=p.top*c}}}function c(){if(!n){var a;a=k?k:document.body,n=d3.select(a).append("div").attr("class","nvtooltip "+(j?j:"xy-tooltip")).attr("id",v),n.style("top",0).style("left",0),n.style("opacity",0),n.selectAll("div, table, td, tr").classed(w,!0),n.classed(w,!0),o=n.node()}}function d(){if(r&&B(e)){b();var f=p.left,g=null!==i?i:p.top;return a.dom.write(function(){c();var b=A(e);b&&(o.innerHTML=b),k&&u?a.dom.read(function(){var a=k.getElementsByTagName("svg")[0],b={left:0,top:0};if(a){var c=a.getBoundingClientRect(),d=k.getBoundingClientRect(),e=c.top;if(0>e){var i=k.getBoundingClientRect();e=Math.abs(e)>i.height?0:e}b.top=Math.abs(e-d.top),b.left=Math.abs(c.left-d.left)}f+=k.offsetLeft+b.left-2*k.scrollLeft,g+=k.offsetTop+b.top-2*k.scrollTop,h&&h>0&&(g=Math.floor(g/h)*h),C([f,g])}):C([f,g])}),d}}var e=null,f="w",g=25,h=0,i=null,j=null,k=null,l=!0,m=400,n=null,o=null,p={left:null,top:null},q={left:0,top:0},r=!0,s=100,t=!0,u=!1,v="nvtooltip-"+Math.floor(1e5*Math.random()),w="nv-pointer-events-none",x=function(a){return a},y=function(a){return a},z=function(a){return a},A=function(a){if(null===a)return"";var b=d3.select(document.createElement("table"));if(t){var c=b.selectAll("thead").data([a]).enter().append("thead");c.append("tr").append("td").attr("colspan",3).append("strong").classed("x-value",!0).html(y(a.value))}var d=b.selectAll("tbody").data([a]).enter().append("tbody"),e=d.selectAll("tr").data(function(a){return a.series}).enter().append("tr").classed("highlight",function(a){return a.highlight});e.append("td").classed("legend-color-guide",!0).append("div").style("background-color",function(a){return a.color}),e.append("td").classed("key",!0).html(function(a,b){return z(a.key,b)}),e.append("td").classed("value",!0).html(function(a,b){return x(a.value,b)}),e.selectAll("td").each(function(a){if(a.highlight){var b=d3.scale.linear().domain([0,1]).range(["#fff",a.color]),c=.6;d3.select(this).style("border-bottom-color",b(c)).style("border-top-color",b(c))}});var f=b.node().outerHTML;return void 0!==a.footer&&(f+="<div class='footer'>"+a.footer+"</div>"),f},B=function(a){if(a&&a.series){if(a.series instanceof Array)return!!a.series.length;if(a.series instanceof Object)return a.series=[a.series],!0}return!1},C=function(b){o&&a.dom.read(function(){var c,d,e=parseInt(o.offsetHeight,10),h=parseInt(o.offsetWidth,10),i=a.utils.windowSize().width,j=a.utils.windowSize().height,k=window.pageYOffset,p=window.pageXOffset;j=window.innerWidth>=document.body.scrollWidth?j:j-16,i=window.innerHeight>=document.body.scrollHeight?i:i-16;var r,t,u=function(a){var b=d;do isNaN(a.offsetTop)||(b+=a.offsetTop),a=a.offsetParent;while(a);return b},v=function(a){var b=c;do isNaN(a.offsetLeft)||(b+=a.offsetLeft),a=a.offsetParent;while(a);return b};switch(f){case"e":c=b[0]-h-g,d=b[1]-e/2,r=v(o),t=u(o),p>r&&(c=b[0]+g>p?b[0]+g:p-r+c),k>t&&(d=k-t+d),t+e>k+j&&(d=k+j-t+d-e);break;case"w":c=b[0]+g,d=b[1]-e/2,r=v(o),t=u(o),r+h>i&&(c=b[0]-h-g),k>t&&(d=k+5),t+e>k+j&&(d=k+j-t+d-e);break;case"n":c=b[0]-h/2-5,d=b[1]+g,r=v(o),t=u(o),p>r&&(c=p+5),r+h>i&&(c=c-h/2+5),t+e>k+j&&(d=k+j-t+d-e);break;case"s":c=b[0]-h/2,d=b[1]-e-g,r=v(o),t=u(o),p>r&&(c=p+5),r+h>i&&(c=c-h/2+5),k>t&&(d=k);break;case"none":c=b[0],d=b[1]-g,r=v(o),t=u(o)}c-=q.left,d-=q.top;var w=o.getBoundingClientRect(),k=window.pageYOffset||document.documentElement.scrollTop,p=window.pageXOffset||document.documentElement.scrollLeft,x="translate("+(w.left+p)+"px, "+(w.top+k)+"px)",y="translate("+c+"px, "+d+"px)",z=d3.interpolateString(x,y),A=n.style("opacity")<.1;l?n.transition().delay(m).duration(0).style("opacity",0):n.interrupt().transition().duration(A?0:s).styleTween("transform",function(){return z},"important").style("-webkit-transform",y).style("opacity",1)})};return d.nvPointerEventsClass=w,d.options=a.utils.optionsFunc.bind(d),d._options=Object.create({},{duration:{get:function(){return s},set:function(a){s=a}},gravity:{get:function(){return f},set:function(a){f=a}},distance:{get:function(){return g},set:function(a){g=a}},snapDistance:{get:function(){return h},set:function(a){h=a}},classes:{get:function(){return j},set:function(a){j=a}},chartContainer:{get:function(){return k},set:function(a){k=a}},fixedTop:{get:function(){return i},set:function(a){i=a}},enabled:{get:function(){return r},set:function(a){r=a}},hideDelay:{get:function(){return m},set:function(a){m=a}},contentGenerator:{get:function(){return A},set:function(a){A=a}},valueFormatter:{get:function(){return x},set:function(a){x=a}},headerFormatter:{get:function(){return y},set:function(a){y=a}},keyFormatter:{get:function(){return z},set:function(a){z=a}},headerEnabled:{get:function(){return t},set:function(a){t=a}},_isInteractiveLayer:{get:function(){return u},set:function(a){u=!!a}},position:{get:function(){return p},set:function(a){p.left=void 0!==a.left?a.left:p.left,p.top=void 0!==a.top?a.top:p.top}},offset:{get:function(){return q},set:function(a){q.left=void 0!==a.left?a.left:q.left,q.top=void 0!==a.top?a.top:q.top}},hidden:{get:function(){return l},set:function(a){l!=a&&(l=!!a,d())}},data:{get:function(){return e},set:function(a){a.point&&(a.value=a.point.x,a.series=a.series||{},a.series.value=a.point.y,a.series.color=a.point.color||a.series.color),e=a}},tooltipElem:{get:function(){return o},set:function(){}},id:{get:function(){return v},set:function(){}}}),a.utils.initOptions(d),d}}(),a.utils.windowSize=function(){var a={width:640,height:480};return window.innerWidth&&window.innerHeight?(a.width=window.innerWidth,a.height=window.innerHeight,a):"CSS1Compat"==document.compatMode&&document.documentElement&&document.documentElement.offsetWidth?(a.width=document.documentElement.offsetWidth,a.height=document.documentElement.offsetHeight,a):document.body&&document.body.offsetWidth?(a.width=document.body.offsetWidth,a.height=document.body.offsetHeight,a):a},a.utils.windowResize=function(b){return window.addEventListener?window.addEventListener("resize",b):a.log("ERROR: Failed to bind to window.resize with: ",b),{callback:b,clear:function(){window.removeEventListener("resize",b)}}},a.utils.getColor=function(b){if(void 0===b)return a.utils.defaultColor();if(Array.isArray(b)){var c=d3.scale.ordinal().range(b);return function(a,b){var d=void 0===b?a:b;return a.color||c(d)}}return b},a.utils.defaultColor=function(){return a.utils.getColor(d3.scale.category20().range())},a.utils.customTheme=function(a,b,c){b=b||function(a){return a.key},c=c||d3.scale.category20().range();var d=c.length;return function(e){var f=b(e);return"function"==typeof a[f]?a[f]():void 0!==a[f]?a[f]:(d||(d=c.length),d-=1,c[d])}},a.utils.pjax=function(b,c){var d=function(d){d3.html(d,function(d){var e=d3.select(c).node();e.parentNode.replaceChild(d3.select(d).select(c).node(),e),a.utils.pjax(b,c)})};d3.selectAll(b).on("click",function(){history.pushState(this.href,this.textContent,this.href),d(this.href),d3.event.preventDefault()}),d3.select(window).on("popstate",function(){d3.event.state&&d(d3.event.state)})},a.utils.calcApproxTextWidth=function(a){if("function"==typeof a.style&&"function"==typeof a.text){var b=parseInt(a.style("font-size").replace("px",""),10),c=a.text().length;return c*b*.5}return 0},a.utils.NaNtoZero=function(a){return"number"!=typeof a||isNaN(a)||null===a||1/0===a||a===-1/0?0:a},d3.selection.prototype.watchTransition=function(a){var b=[this].concat([].slice.call(arguments,1));return a.transition.apply(a,b)},a.utils.renderWatch=function(b,c){if(!(this instanceof a.utils.renderWatch))return new a.utils.renderWatch(b,c);var d=void 0!==c?c:250,e=[],f=this;this.models=function(a){return a=[].slice.call(arguments,0),a.forEach(function(a){a.__rendered=!1,function(a){a.dispatch.on("renderEnd",function(){a.__rendered=!0,f.renderEnd("model")})}(a),e.indexOf(a)<0&&e.push(a)}),this},this.reset=function(a){void 0!==a&&(d=a),e=[]},this.transition=function(a,b,c){if(b=arguments.length>1?[].slice.call(arguments,1):[],c=b.length>1?b.pop():void 0!==d?d:250,a.__rendered=!1,e.indexOf(a)<0&&e.push(a),0===c)return a.__rendered=!0,a.delay=function(){return this},a.duration=function(){return this},a;a.__rendered=0===a.length?!0:a.every(function(a){return!a.length})?!0:!1;var g=0;return a.transition().duration(c).each(function(){++g}).each("end",function(){0===--g&&(a.__rendered=!0,f.renderEnd.apply(this,b))})},this.renderEnd=function(){e.every(function(a){return a.__rendered})&&(e.forEach(function(a){a.__rendered=!1}),b.renderEnd.apply(this,arguments))}},a.utils.deepExtend=function(b){var c=arguments.length>1?[].slice.call(arguments,1):[];c.forEach(function(c){for(var d in c){var e=b[d]instanceof Array,f="object"==typeof b[d],g="object"==typeof c[d];f&&!e&&g?a.utils.deepExtend(b[d],c[d]):b[d]=c[d]}})},a.utils.state=function(){if(!(this instanceof a.utils.state))return new a.utils.state;var b={},c=function(){},d=function(){return{}},e=null,f=null;this.dispatch=d3.dispatch("change","set"),this.dispatch.on("set",function(a){c(a,!0)}),this.getter=function(a){return d=a,this},this.setter=function(a,b){return b||(b=function(){}),c=function(c,d){a(c),d&&b()},this},this.init=function(b){e=e||{},a.utils.deepExtend(e,b)};var g=function(){var a=d();if(JSON.stringify(a)===JSON.stringify(b))return!1;for(var c in a)void 0===b[c]&&(b[c]={}),b[c]=a[c],f=!0;return!0};this.update=function(){e&&(c(e,!1),e=null),g.call(this)&&this.dispatch.change(b)}},a.utils.optionsFunc=function(a){return a&&d3.map(a).forEach(function(a,b){"function"==typeof this[a]&&this[a](b)}.bind(this)),this},a.utils.calcTicksX=function(b,c){var d=1,e=0;for(e;e<c.length;e+=1){var f=c[e]&&c[e].values?c[e].values.length:0;d=f>d?f:d}return a.log("Requested number of ticks: ",b),a.log("Calculated max values to be: ",d),b=b>d?b=d-1:b,b=1>b?1:b,b=Math.floor(b),a.log("Calculating tick count as: ",b),b},a.utils.calcTicksY=function(b,c){return a.utils.calcTicksX(b,c)},a.utils.initOption=function(a,b){a._calls&&a._calls[b]?a[b]=a._calls[b]:(a[b]=function(c){return arguments.length?(a._overrides[b]=!0,a._options[b]=c,a):a._options[b]},a["_"+b]=function(c){return arguments.length?(a._overrides[b]||(a._options[b]=c),a):a._options[b]})},a.utils.initOptions=function(b){b._overrides=b._overrides||{};var c=Object.getOwnPropertyNames(b._options||{}),d=Object.getOwnPropertyNames(b._calls||{});c=c.concat(d);for(var e in c)a.utils.initOption(b,c[e])},a.utils.inheritOptionsD3=function(a,b,c){a._d3options=c.concat(a._d3options||[]),c.unshift(b),c.unshift(a),d3.rebind.apply(this,c)},a.utils.arrayUnique=function(a){return a.sort().filter(function(b,c){return!c||b!=a[c-1]})},a.utils.symbolMap=d3.map(),a.utils.symbol=function(){function b(b,e){var f=c.call(this,b,e),g=d.call(this,b,e);return-1!==d3.svg.symbolTypes.indexOf(f)?d3.svg.symbol().type(f).size(g)():a.utils.symbolMap.get(f)(g)}var c,d=64;return b.type=function(a){return arguments.length?(c=d3.functor(a),b):c},b.size=function(a){return arguments.length?(d=d3.functor(a),b):d},b},a.utils.inheritOptions=function(b,c){var d=Object.getOwnPropertyNames(c._options||{}),e=Object.getOwnPropertyNames(c._calls||{}),f=c._inherited||[],g=c._d3options||[],h=d.concat(e).concat(f).concat(g);h.unshift(c),h.unshift(b),d3.rebind.apply(this,h),b._inherited=a.utils.arrayUnique(d.concat(e).concat(f).concat(d).concat(b._inherited||[])),b._d3options=a.utils.arrayUnique(g.concat(b._d3options||[]))},a.utils.initSVG=function(a){a.classed({"nvd3-svg":!0})},a.utils.sanitizeHeight=function(a,b){return a||parseInt(b.style("height"),10)||400},a.utils.sanitizeWidth=function(a,b){return a||parseInt(b.style("width"),10)||960},a.utils.availableHeight=function(b,c,d){return a.utils.sanitizeHeight(b,c)-d.top-d.bottom},a.utils.availableWidth=function(b,c,d){return a.utils.sanitizeWidth(b,c)-d.left-d.right},a.utils.noData=function(b,c){var d=b.options(),e=d.margin(),f=d.noData(),g=null==f?["No Data Available."]:[f],h=a.utils.availableHeight(d.height(),c,e),i=a.utils.availableWidth(d.width(),c,e),j=e.left+i/2,k=e.top+h/2;c.selectAll("g").remove();var l=c.selectAll(".nv-noData").data(g);l.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),l.attr("x",j).attr("y",k).text(function(a){return a})},a.models.axis=function(){"use strict";function b(g){return s.reset(),g.each(function(b){var g=d3.select(this);a.utils.initSVG(g);var p=g.selectAll("g.nv-wrap.nv-axis").data([b]),q=p.enter().append("g").attr("class","nvd3 nv-wrap nv-axis"),t=(q.append("g"),p.select("g"));null!==n?c.ticks(n):("top"==c.orient()||"bottom"==c.orient())&&c.ticks(Math.abs(d.range()[1]-d.range()[0])/100),t.watchTransition(s,"axis").call(c),r=r||c.scale();var u=c.tickFormat();null==u&&(u=r.tickFormat());var v=t.selectAll("text.nv-axislabel").data([h||null]);v.exit().remove();var w,x,y;switch(c.orient()){case"top":v.enter().append("text").attr("class","nv-axislabel"),y=d.range().length<2?0:2===d.range().length?d.range()[1]:d.range()[d.range().length-1]+(d.range()[1]-d.range()[0]),v.attr("text-anchor","middle").attr("y",0).attr("x",y/2),i&&(x=p.selectAll("g.nv-axisMaxMin").data(d.domain()),x.enter().append("g").attr("class",function(a,b){return["nv-axisMaxMin","nv-axisMaxMin-x",0==b?"nv-axisMin-x":"nv-axisMax-x"].join(" ")}).append("text"),x.exit().remove(),x.attr("transform",function(b){return"translate("+a.utils.NaNtoZero(d(b))+",0)"}).select("text").attr("dy","-0.5em").attr("y",-c.tickPadding()).attr("text-anchor","middle").text(function(a){var b=u(a);return(""+b).match("NaN")?"":b}),x.watchTransition(s,"min-max top").attr("transform",function(b,c){return"translate("+a.utils.NaNtoZero(d.range()[c])+",0)"}));break;case"bottom":w=o+36;var z=30,A=0,B=t.selectAll("g").select("text"),C="";if(j%360){B.each(function(){var a=this.getBoundingClientRect(),b=a.width;A=a.height,b>z&&(z=b)}),C="rotate("+j+" 0,"+(A/2+c.tickPadding())+")";var D=Math.abs(Math.sin(j*Math.PI/180));w=(D?D*z:z)+30,B.attr("transform",C).style("text-anchor",j%360>0?"start":"end")}v.enter().append("text").attr("class","nv-axislabel"),y=d.range().length<2?0:2===d.range().length?d.range()[1]:d.range()[d.range().length-1]+(d.range()[1]-d.range()[0]),v.attr("text-anchor","middle").attr("y",w).attr("x",y/2),i&&(x=p.selectAll("g.nv-axisMaxMin").data([d.domain()[0],d.domain()[d.domain().length-1]]),x.enter().append("g").attr("class",function(a,b){return["nv-axisMaxMin","nv-axisMaxMin-x",0==b?"nv-axisMin-x":"nv-axisMax-x"].join(" ")}).append("text"),x.exit().remove(),x.attr("transform",function(b){return"translate("+a.utils.NaNtoZero(d(b)+(m?d.rangeBand()/2:0))+",0)"}).select("text").attr("dy",".71em").attr("y",c.tickPadding()).attr("transform",C).style("text-anchor",j?j%360>0?"start":"end":"middle").text(function(a){var b=u(a);return(""+b).match("NaN")?"":b}),x.watchTransition(s,"min-max bottom").attr("transform",function(b){return"translate("+a.utils.NaNtoZero(d(b)+(m?d.rangeBand()/2:0))+",0)"})),l&&B.attr("transform",function(a,b){return"translate(0,"+(b%2==0?"0":"12")+")"});break;case"right":v.enter().append("text").attr("class","nv-axislabel"),v.style("text-anchor",k?"middle":"begin").attr("transform",k?"rotate(90)":"").attr("y",k?-Math.max(e.right,f)+12:-10).attr("x",k?d3.max(d.range())/2:c.tickPadding()),i&&(x=p.selectAll("g.nv-axisMaxMin").data(d.domain()),x.enter().append("g").attr("class",function(a,b){return["nv-axisMaxMin","nv-axisMaxMin-y",0==b?"nv-axisMin-y":"nv-axisMax-y"].join(" ")}).append("text").style("opacity",0),x.exit().remove(),x.attr("transform",function(b){return"translate(0,"+a.utils.NaNtoZero(d(b))+")"}).select("text").attr("dy",".32em").attr("y",0).attr("x",c.tickPadding()).style("text-anchor","start").text(function(a){var b=u(a);return(""+b).match("NaN")?"":b}),x.watchTransition(s,"min-max right").attr("transform",function(b,c){return"translate(0,"+a.utils.NaNtoZero(d.range()[c])+")"}).select("text").style("opacity",1));break;case"left":v.enter().append("text").attr("class","nv-axislabel"),v.style("text-anchor",k?"middle":"end").attr("transform",k?"rotate(-90)":"").attr("y",k?-Math.max(e.left,f)+25-(o||0):-10).attr("x",k?-d3.max(d.range())/2:-c.tickPadding()),i&&(x=p.selectAll("g.nv-axisMaxMin").data(d.domain()),x.enter().append("g").attr("class",function(a,b){return["nv-axisMaxMin","nv-axisMaxMin-y",0==b?"nv-axisMin-y":"nv-axisMax-y"].join(" ")}).append("text").style("opacity",0),x.exit().remove(),x.attr("transform",function(b){return"translate(0,"+a.utils.NaNtoZero(r(b))+")"}).select("text").attr("dy",".32em").attr("y",0).attr("x",-c.tickPadding()).attr("text-anchor","end").text(function(a){var b=u(a);return(""+b).match("NaN")?"":b}),x.watchTransition(s,"min-max right").attr("transform",function(b,c){return"translate(0,"+a.utils.NaNtoZero(d.range()[c])+")"}).select("text").style("opacity",1))}if(v.text(function(a){return a}),!i||"left"!==c.orient()&&"right"!==c.orient()||(t.selectAll("g").each(function(a){d3.select(this).select("text").attr("opacity",1),(d(a)<d.range()[1]+10||d(a)>d.range()[0]-10)&&((a>1e-10||-1e-10>a)&&d3.select(this).attr("opacity",0),d3.select(this).select("text").attr("opacity",0))}),d.domain()[0]==d.domain()[1]&&0==d.domain()[0]&&p.selectAll("g.nv-axisMaxMin").style("opacity",function(a,b){return b?0:1})),i&&("top"===c.orient()||"bottom"===c.orient())){var E=[];p.selectAll("g.nv-axisMaxMin").each(function(a,b){try{E.push(b?d(a)-this.getBoundingClientRect().width-4:d(a)+this.getBoundingClientRect().width+4)}catch(c){E.push(b?d(a)-4:d(a)+4)}}),t.selectAll("g").each(function(a){(d(a)<E[0]||d(a)>E[1])&&(a>1e-10||-1e-10>a?d3.select(this).remove():d3.select(this).select("text").remove())})}t.selectAll(".tick").filter(function(a){return!parseFloat(Math.round(1e5*a)/1e6)&&void 0!==a}).classed("zero",!0),r=d.copy()}),s.renderEnd("axis immediate"),b}var c=d3.svg.axis(),d=d3.scale.linear(),e={top:0,right:0,bottom:0,left:0},f=75,g=60,h=null,i=!0,j=0,k=!0,l=!1,m=!1,n=null,o=0,p=250,q=d3.dispatch("renderEnd");c.scale(d).orient("bottom").tickFormat(function(a){return a});var r,s=a.utils.renderWatch(q,p);return b.axis=c,b.dispatch=q,b.options=a.utils.optionsFunc.bind(b),b._options=Object.create({},{axisLabelDistance:{get:function(){return o},set:function(a){o=a}},staggerLabels:{get:function(){return l},set:function(a){l=a}},rotateLabels:{get:function(){return j},set:function(a){j=a}},rotateYLabel:{get:function(){return k},set:function(a){k=a}},showMaxMin:{get:function(){return i},set:function(a){i=a}},axisLabel:{get:function(){return h},set:function(a){h=a}},height:{get:function(){return g},set:function(a){g=a}},ticks:{get:function(){return n},set:function(a){n=a}},width:{get:function(){return f},set:function(a){f=a}},margin:{get:function(){return e},set:function(a){e.top=void 0!==a.top?a.top:e.top,e.right=void 0!==a.right?a.right:e.right,e.bottom=void 0!==a.bottom?a.bottom:e.bottom,e.left=void 0!==a.left?a.left:e.left}},duration:{get:function(){return p},set:function(a){p=a,s.reset(p)}},scale:{get:function(){return d},set:function(e){d=e,c.scale(d),m="function"==typeof d.rangeBands,a.utils.inheritOptionsD3(b,d,["domain","range","rangeBand","rangeBands"])}}}),a.utils.initOptions(b),a.utils.inheritOptionsD3(b,c,["orient","tickValues","tickSubdivide","tickSize","tickPadding","tickFormat"]),a.utils.inheritOptionsD3(b,d,["domain","range","rangeBand","rangeBands"]),b},a.models.boxPlot=function(){"use strict";function b(l){return v.reset(),l.each(function(b){var l=j-i.left-i.right,p=k-i.top-i.bottom;r=d3.select(this),a.utils.initSVG(r),m.domain(c||b.map(function(a,b){return o(a,b)})).rangeBands(e||[0,l],.1);var w=[];if(!d){var x=d3.min(b.map(function(a){var b=[];return b.push(a.values.Q1),a.values.hasOwnProperty("whisker_low")&&null!==a.values.whisker_low&&b.push(a.values.whisker_low),a.values.hasOwnProperty("outliers")&&null!==a.values.outliers&&(b=b.concat(a.values.outliers)),d3.min(b)})),y=d3.max(b.map(function(a){var b=[];return b.push(a.values.Q3),a.values.hasOwnProperty("whisker_high")&&null!==a.values.whisker_high&&b.push(a.values.whisker_high),a.values.hasOwnProperty("outliers")&&null!==a.values.outliers&&(b=b.concat(a.values.outliers)),d3.max(b)}));w=[x,y]}n.domain(d||w),n.range(f||[p,0]),g=g||m,h=h||n.copy().range([n(0),n(0)]);{var z=r.selectAll("g.nv-wrap").data([b]);z.enter().append("g").attr("class","nvd3 nv-wrap")}z.attr("transform","translate("+i.left+","+i.top+")");var A=z.selectAll(".nv-boxplot").data(function(a){return a}),B=A.enter().append("g").style("stroke-opacity",1e-6).style("fill-opacity",1e-6);A.attr("class","nv-boxplot").attr("transform",function(a,b){return"translate("+(m(o(a,b))+.05*m.rangeBand())+", 0)"}).classed("hover",function(a){return a.hover}),A.watchTransition(v,"nv-boxplot: boxplots").style("stroke-opacity",1).style("fill-opacity",.75).delay(function(a,c){return c*t/b.length}).attr("transform",function(a,b){return"translate("+(m(o(a,b))+.05*m.rangeBand())+", 0)"}),A.exit().remove(),B.each(function(a,b){var c=d3.select(this);["low","high"].forEach(function(d){a.values.hasOwnProperty("whisker_"+d)&&null!==a.values["whisker_"+d]&&(c.append("line").style("stroke",a.color?a.color:q(a,b)).attr("class","nv-boxplot-whisker nv-boxplot-"+d),c.append("line").style("stroke",a.color?a.color:q(a,b)).attr("class","nv-boxplot-tick nv-boxplot-"+d))})});var C=A.selectAll(".nv-boxplot-outlier").data(function(a){return a.values.hasOwnProperty("outliers")&&null!==a.values.outliers?a.values.outliers:[]});C.enter().append("circle").style("fill",function(a,b,c){return q(a,c)}).style("stroke",function(a,b,c){return q(a,c)}).on("mouseover",function(a,b,c){d3.select(this).classed("hover",!0),s.elementMouseover({series:{key:a,color:q(a,c)},e:d3.event})}).on("mouseout",function(a,b,c){d3.select(this).classed("hover",!1),s.elementMouseout({series:{key:a,color:q(a,c)},e:d3.event})}).on("mousemove",function(){s.elementMousemove({e:d3.event})}),C.attr("class","nv-boxplot-outlier"),C.watchTransition(v,"nv-boxplot: nv-boxplot-outlier").attr("cx",.45*m.rangeBand()).attr("cy",function(a){return n(a)}).attr("r","3"),C.exit().remove();var D=function(){return null===u?.9*m.rangeBand():Math.min(75,.9*m.rangeBand())},E=function(){return.45*m.rangeBand()-D()/2},F=function(){return.45*m.rangeBand()+D()/2};["low","high"].forEach(function(a){var b="low"===a?"Q1":"Q3";A.select("line.nv-boxplot-whisker.nv-boxplot-"+a).watchTransition(v,"nv-boxplot: boxplots").attr("x1",.45*m.rangeBand()).attr("y1",function(b){return n(b.values["whisker_"+a])}).attr("x2",.45*m.rangeBand()).attr("y2",function(a){return n(a.values[b])}),A.select("line.nv-boxplot-tick.nv-boxplot-"+a).watchTransition(v,"nv-boxplot: boxplots").attr("x1",E).attr("y1",function(b){return n(b.values["whisker_"+a])}).attr("x2",F).attr("y2",function(b){return n(b.values["whisker_"+a])})}),["low","high"].forEach(function(a){B.selectAll(".nv-boxplot-"+a).on("mouseover",function(b,c,d){d3.select(this).classed("hover",!0),s.elementMouseover({series:{key:b.values["whisker_"+a],color:q(b,d)},e:d3.event})}).on("mouseout",function(b,c,d){d3.select(this).classed("hover",!1),s.elementMouseout({series:{key:b.values["whisker_"+a],color:q(b,d)},e:d3.event})}).on("mousemove",function(){s.elementMousemove({e:d3.event})})}),B.append("rect").attr("class","nv-boxplot-box").on("mouseover",function(a,b){d3.select(this).classed("hover",!0),s.elementMouseover({key:a.label,value:a.label,series:[{key:"Q3",value:a.values.Q3,color:a.color||q(a,b)},{key:"Q2",value:a.values.Q2,color:a.color||q(a,b)},{key:"Q1",value:a.values.Q1,color:a.color||q(a,b)}],data:a,index:b,e:d3.event})}).on("mouseout",function(a,b){d3.select(this).classed("hover",!1),s.elementMouseout({key:a.label,value:a.label,series:[{key:"Q3",value:a.values.Q3,color:a.color||q(a,b)},{key:"Q2",value:a.values.Q2,color:a.color||q(a,b)},{key:"Q1",value:a.values.Q1,color:a.color||q(a,b)}],data:a,index:b,e:d3.event})}).on("mousemove",function(){s.elementMousemove({e:d3.event})}),A.select("rect.nv-boxplot-box").watchTransition(v,"nv-boxplot: boxes").attr("y",function(a){return n(a.values.Q3)}).attr("width",D).attr("x",E).attr("height",function(a){return Math.abs(n(a.values.Q3)-n(a.values.Q1))||1}).style("fill",function(a,b){return a.color||q(a,b)}).style("stroke",function(a,b){return a.color||q(a,b)}),B.append("line").attr("class","nv-boxplot-median"),A.select("line.nv-boxplot-median").watchTransition(v,"nv-boxplot: boxplots line").attr("x1",E).attr("y1",function(a){return n(a.values.Q2)}).attr("x2",F).attr("y2",function(a){return n(a.values.Q2)}),g=m.copy(),h=n.copy()}),v.renderEnd("nv-boxplot immediate"),b}var c,d,e,f,g,h,i={top:0,right:0,bottom:0,left:0},j=960,k=500,l=Math.floor(1e4*Math.random()),m=d3.scale.ordinal(),n=d3.scale.linear(),o=function(a){return a.x},p=function(a){return a.y},q=a.utils.defaultColor(),r=null,s=d3.dispatch("elementMouseover","elementMouseout","elementMousemove","renderEnd"),t=250,u=null,v=a.utils.renderWatch(s,t);return b.dispatch=s,b.options=a.utils.optionsFunc.bind(b),b._options=Object.create({},{width:{get:function(){return j},set:function(a){j=a}},height:{get:function(){return k},set:function(a){k=a}},maxBoxWidth:{get:function(){return u},set:function(a){u=a}},x:{get:function(){return o},set:function(a){o=a}},y:{get:function(){return p},set:function(a){p=a}},xScale:{get:function(){return m},set:function(a){m=a}},yScale:{get:function(){return n},set:function(a){n=a}},xDomain:{get:function(){return c},set:function(a){c=a}},yDomain:{get:function(){return d},set:function(a){d=a}},xRange:{get:function(){return e},set:function(a){e=a}},yRange:{get:function(){return f},set:function(a){f=a}},id:{get:function(){return l},set:function(a){l=a}},margin:{get:function(){return i},set:function(a){i.top=void 0!==a.top?a.top:i.top,i.right=void 0!==a.right?a.right:i.right,i.bottom=void 0!==a.bottom?a.bottom:i.bottom,i.left=void 0!==a.left?a.left:i.left}},color:{get:function(){return q},set:function(b){q=a.utils.getColor(b)}},duration:{get:function(){return t},set:function(a){t=a,v.reset(t)}}}),a.utils.initOptions(b),b},a.models.boxPlotChart=function(){"use strict";function b(k){return t.reset(),t.models(e),l&&t.models(f),m&&t.models(g),k.each(function(k){var p=d3.select(this);a.utils.initSVG(p);var t=(i||parseInt(p.style("width"))||960)-h.left-h.right,u=(j||parseInt(p.style("height"))||400)-h.top-h.bottom;if(b.update=function(){r.beforeUpdate(),p.transition().duration(s).call(b)},b.container=this,!(k&&k.length&&k.filter(function(a){return a.values.hasOwnProperty("Q1")&&a.values.hasOwnProperty("Q2")&&a.values.hasOwnProperty("Q3")}).length)){var v=p.selectAll(".nv-noData").data([q]);return v.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),v.attr("x",h.left+t/2).attr("y",h.top+u/2).text(function(a){return a}),b}p.selectAll(".nv-noData").remove(),c=e.xScale(),d=e.yScale().clamp(!0);var w=p.selectAll("g.nv-wrap.nv-boxPlotWithAxes").data([k]),x=w.enter().append("g").attr("class","nvd3 nv-wrap nv-boxPlotWithAxes").append("g"),y=x.append("defs"),z=w.select("g");
x.append("g").attr("class","nv-x nv-axis"),x.append("g").attr("class","nv-y nv-axis").append("g").attr("class","nv-zeroLine").append("line"),x.append("g").attr("class","nv-barsWrap"),z.attr("transform","translate("+h.left+","+h.top+")"),n&&z.select(".nv-y.nv-axis").attr("transform","translate("+t+",0)"),e.width(t).height(u);var A=z.select(".nv-barsWrap").datum(k.filter(function(a){return!a.disabled}));if(A.transition().call(e),y.append("clipPath").attr("id","nv-x-label-clip-"+e.id()).append("rect"),z.select("#nv-x-label-clip-"+e.id()+" rect").attr("width",c.rangeBand()*(o?2:1)).attr("height",16).attr("x",-c.rangeBand()/(o?1:2)),l){f.scale(c).ticks(a.utils.calcTicksX(t/100,k)).tickSize(-u,0),z.select(".nv-x.nv-axis").attr("transform","translate(0,"+d.range()[0]+")"),z.select(".nv-x.nv-axis").call(f);var B=z.select(".nv-x.nv-axis").selectAll("g");o&&B.selectAll("text").attr("transform",function(a,b,c){return"translate(0,"+(c%2==0?"5":"17")+")"})}m&&(g.scale(d).ticks(Math.floor(u/36)).tickSize(-t,0),z.select(".nv-y.nv-axis").call(g)),z.select(".nv-zeroLine line").attr("x1",0).attr("x2",t).attr("y1",d(0)).attr("y2",d(0))}),t.renderEnd("nv-boxplot chart immediate"),b}var c,d,e=a.models.boxPlot(),f=a.models.axis(),g=a.models.axis(),h={top:15,right:10,bottom:50,left:60},i=null,j=null,k=a.utils.getColor(),l=!0,m=!0,n=!1,o=!1,p=a.models.tooltip(),q="No Data Available.",r=d3.dispatch("tooltipShow","tooltipHide","beforeUpdate","renderEnd"),s=250;f.orient("bottom").showMaxMin(!1).tickFormat(function(a){return a}),g.orient(n?"right":"left").tickFormat(d3.format(",.1f")),p.duration(0);var t=a.utils.renderWatch(r,s);return e.dispatch.on("elementMouseover.tooltip",function(a){p.data(a).hidden(!1)}),e.dispatch.on("elementMouseout.tooltip",function(a){p.data(a).hidden(!0)}),e.dispatch.on("elementMousemove.tooltip",function(){p.position({top:d3.event.pageY,left:d3.event.pageX})()}),b.dispatch=r,b.boxplot=e,b.xAxis=f,b.yAxis=g,b.tooltip=p,b.options=a.utils.optionsFunc.bind(b),b._options=Object.create({},{width:{get:function(){return i},set:function(a){i=a}},height:{get:function(){return j},set:function(a){j=a}},staggerLabels:{get:function(){return o},set:function(a){o=a}},showXAxis:{get:function(){return l},set:function(a){l=a}},showYAxis:{get:function(){return m},set:function(a){m=a}},tooltips:{get:function(){return tooltips},set:function(a){tooltips=a}},tooltipContent:{get:function(){return p},set:function(a){p=a}},noData:{get:function(){return q},set:function(a){q=a}},margin:{get:function(){return h},set:function(a){h.top=void 0!==a.top?a.top:h.top,h.right=void 0!==a.right?a.right:h.right,h.bottom=void 0!==a.bottom?a.bottom:h.bottom,h.left=void 0!==a.left?a.left:h.left}},duration:{get:function(){return s},set:function(a){s=a,t.reset(s),e.duration(s),f.duration(s),g.duration(s)}},color:{get:function(){return k},set:function(b){k=a.utils.getColor(b),e.color(k)}},rightAlignYAxis:{get:function(){return n},set:function(a){n=a,g.orient(a?"right":"left")}}}),a.utils.inheritOptions(b,e),a.utils.initOptions(b),b},a.models.bullet=function(){"use strict";function b(d){return d.each(function(b,d){var p=m-c.left-c.right,s=n-c.top-c.bottom;o=d3.select(this),a.utils.initSVG(o);{var t=f.call(this,b,d).slice().sort(d3.descending),u=g.call(this,b,d).slice().sort(d3.descending),v=h.call(this,b,d).slice().sort(d3.descending),w=i.call(this,b,d).slice(),x=j.call(this,b,d).slice(),y=k.call(this,b,d).slice(),z=d3.scale.linear().domain(d3.extent(d3.merge([l,t]))).range(e?[p,0]:[0,p]);this.__chart__||d3.scale.linear().domain([0,1/0]).range(z.range())}this.__chart__=z;var A=d3.min(t),B=d3.max(t),C=t[1],D=o.selectAll("g.nv-wrap.nv-bullet").data([b]),E=D.enter().append("g").attr("class","nvd3 nv-wrap nv-bullet"),F=E.append("g"),G=D.select("g");F.append("rect").attr("class","nv-range nv-rangeMax"),F.append("rect").attr("class","nv-range nv-rangeAvg"),F.append("rect").attr("class","nv-range nv-rangeMin"),F.append("rect").attr("class","nv-measure"),D.attr("transform","translate("+c.left+","+c.top+")");var H=function(a){return Math.abs(z(a)-z(0))},I=function(a){return z(0>a?a:0)};G.select("rect.nv-rangeMax").attr("height",s).attr("width",H(B>0?B:A)).attr("x",I(B>0?B:A)).datum(B>0?B:A),G.select("rect.nv-rangeAvg").attr("height",s).attr("width",H(C)).attr("x",I(C)).datum(C),G.select("rect.nv-rangeMin").attr("height",s).attr("width",H(B)).attr("x",I(B)).attr("width",H(B>0?A:B)).attr("x",I(B>0?A:B)).datum(B>0?A:B),G.select("rect.nv-measure").style("fill",q).attr("height",s/3).attr("y",s/3).attr("width",0>v?z(0)-z(v[0]):z(v[0])-z(0)).attr("x",I(v)).on("mouseover",function(){r.elementMouseover({value:v[0],label:y[0]||"Current",color:d3.select(this).style("fill")})}).on("mousemove",function(){r.elementMousemove({value:v[0],label:y[0]||"Current",color:d3.select(this).style("fill")})}).on("mouseout",function(){r.elementMouseout({value:v[0],label:y[0]||"Current",color:d3.select(this).style("fill")})});var J=s/6,K=u.map(function(a,b){return{value:a,label:x[b]}});F.selectAll("path.nv-markerTriangle").data(K).enter().append("path").attr("class","nv-markerTriangle").attr("transform",function(a){return"translate("+z(a.value)+","+s/2+")"}).attr("d","M0,"+J+"L"+J+","+-J+" "+-J+","+-J+"Z").on("mouseover",function(a){r.elementMouseover({value:a.value,label:a.label||"Previous",color:d3.select(this).style("fill"),pos:[z(a.value),s/2]})}).on("mousemove",function(a){r.elementMousemove({value:a.value,label:a.label||"Previous",color:d3.select(this).style("fill")})}).on("mouseout",function(a){r.elementMouseout({value:a.value,label:a.label||"Previous",color:d3.select(this).style("fill")})}),D.selectAll(".nv-range").on("mouseover",function(a,b){var c=w[b]||(b?1==b?"Mean":"Minimum":"Maximum");r.elementMouseover({value:a,label:c,color:d3.select(this).style("fill")})}).on("mousemove",function(){r.elementMousemove({value:v[0],label:y[0]||"Previous",color:d3.select(this).style("fill")})}).on("mouseout",function(a,b){var c=w[b]||(b?1==b?"Mean":"Minimum":"Maximum");r.elementMouseout({value:a,label:c,color:d3.select(this).style("fill")})})}),b}var c={top:0,right:0,bottom:0,left:0},d="left",e=!1,f=function(a){return a.ranges},g=function(a){return a.markers?a.markers:[0]},h=function(a){return a.measures},i=function(a){return a.rangeLabels?a.rangeLabels:[]},j=function(a){return a.markerLabels?a.markerLabels:[]},k=function(a){return a.measureLabels?a.measureLabels:[]},l=[0],m=380,n=30,o=null,p=null,q=a.utils.getColor(["#1f77b4"]),r=d3.dispatch("elementMouseover","elementMouseout","elementMousemove");return b.dispatch=r,b.options=a.utils.optionsFunc.bind(b),b._options=Object.create({},{ranges:{get:function(){return f},set:function(a){f=a}},markers:{get:function(){return g},set:function(a){g=a}},measures:{get:function(){return h},set:function(a){h=a}},forceX:{get:function(){return l},set:function(a){l=a}},width:{get:function(){return m},set:function(a){m=a}},height:{get:function(){return n},set:function(a){n=a}},tickFormat:{get:function(){return p},set:function(a){p=a}},margin:{get:function(){return c},set:function(a){c.top=void 0!==a.top?a.top:c.top,c.right=void 0!==a.right?a.right:c.right,c.bottom=void 0!==a.bottom?a.bottom:c.bottom,c.left=void 0!==a.left?a.left:c.left}},orient:{get:function(){return d},set:function(a){d=a,e="right"==d||"bottom"==d}},color:{get:function(){return q},set:function(b){q=a.utils.getColor(b)}}}),a.utils.initOptions(b),b},a.models.bulletChart=function(){"use strict";function b(d){return d.each(function(e,o){var p=d3.select(this);a.utils.initSVG(p);var q=a.utils.availableWidth(k,p,g),r=l-g.top-g.bottom;if(b.update=function(){b(d)},b.container=this,!e||!h.call(this,e,o))return a.utils.noData(b,p),b;p.selectAll(".nv-noData").remove();var s=h.call(this,e,o).slice().sort(d3.descending),t=i.call(this,e,o).slice().sort(d3.descending),u=j.call(this,e,o).slice().sort(d3.descending),v=p.selectAll("g.nv-wrap.nv-bulletChart").data([e]),w=v.enter().append("g").attr("class","nvd3 nv-wrap nv-bulletChart"),x=w.append("g"),y=v.select("g");x.append("g").attr("class","nv-bulletWrap"),x.append("g").attr("class","nv-titles"),v.attr("transform","translate("+g.left+","+g.top+")");var z=d3.scale.linear().domain([0,Math.max(s[0],t[0],u[0])]).range(f?[q,0]:[0,q]),A=this.__chart__||d3.scale.linear().domain([0,1/0]).range(z.range());this.__chart__=z;var B=x.select(".nv-titles").append("g").attr("text-anchor","end").attr("transform","translate(-6,"+(l-g.top-g.bottom)/2+")");B.append("text").attr("class","nv-title").text(function(a){return a.title}),B.append("text").attr("class","nv-subtitle").attr("dy","1em").text(function(a){return a.subtitle}),c.width(q).height(r);var C=y.select(".nv-bulletWrap");d3.transition(C).call(c);var D=m||z.tickFormat(q/100),E=y.selectAll("g.nv-tick").data(z.ticks(n?n:q/50),function(a){return this.textContent||D(a)}),F=E.enter().append("g").attr("class","nv-tick").attr("transform",function(a){return"translate("+A(a)+",0)"}).style("opacity",1e-6);F.append("line").attr("y1",r).attr("y2",7*r/6),F.append("text").attr("text-anchor","middle").attr("dy","1em").attr("y",7*r/6).text(D);var G=d3.transition(E).attr("transform",function(a){return"translate("+z(a)+",0)"}).style("opacity",1);G.select("line").attr("y1",r).attr("y2",7*r/6),G.select("text").attr("y",7*r/6),d3.transition(E.exit()).attr("transform",function(a){return"translate("+z(a)+",0)"}).style("opacity",1e-6).remove()}),d3.timer.flush(),b}var c=a.models.bullet(),d=a.models.tooltip(),e="left",f=!1,g={top:5,right:40,bottom:20,left:120},h=function(a){return a.ranges},i=function(a){return a.markers?a.markers:[0]},j=function(a){return a.measures},k=null,l=55,m=null,n=null,o=null,p=d3.dispatch("tooltipShow","tooltipHide");return d.duration(0).headerEnabled(!1),c.dispatch.on("elementMouseover.tooltip",function(a){a.series={key:a.label,value:a.value,color:a.color},d.data(a).hidden(!1)}),c.dispatch.on("elementMouseout.tooltip",function(){d.hidden(!0)}),c.dispatch.on("elementMousemove.tooltip",function(){d.position({top:d3.event.pageY,left:d3.event.pageX})()}),b.bullet=c,b.dispatch=p,b.tooltip=d,b.options=a.utils.optionsFunc.bind(b),b._options=Object.create({},{ranges:{get:function(){return h},set:function(a){h=a}},markers:{get:function(){return i},set:function(a){i=a}},measures:{get:function(){return j},set:function(a){j=a}},width:{get:function(){return k},set:function(a){k=a}},height:{get:function(){return l},set:function(a){l=a}},tickFormat:{get:function(){return m},set:function(a){m=a}},ticks:{get:function(){return n},set:function(a){n=a}},noData:{get:function(){return o},set:function(a){o=a}},tooltips:{get:function(){return d.enabled()},set:function(b){a.deprecated("tooltips","use chart.tooltip.enabled() instead"),d.enabled(!!b)}},tooltipContent:{get:function(){return d.contentGenerator()},set:function(b){a.deprecated("tooltipContent","use chart.tooltip.contentGenerator() instead"),d.contentGenerator(b)}},margin:{get:function(){return g},set:function(a){g.top=void 0!==a.top?a.top:g.top,g.right=void 0!==a.right?a.right:g.right,g.bottom=void 0!==a.bottom?a.bottom:g.bottom,g.left=void 0!==a.left?a.left:g.left}},orient:{get:function(){return e},set:function(a){e=a,f="right"==e||"bottom"==e}}}),a.utils.inheritOptions(b,c),a.utils.initOptions(b),b},a.models.candlestickBar=function(){"use strict";function b(x){return x.each(function(b){c=d3.select(this);var x=a.utils.availableWidth(i,c,h),y=a.utils.availableHeight(j,c,h);a.utils.initSVG(c);var A=x/b[0].values.length*.45;l.domain(d||d3.extent(b[0].values.map(n).concat(t))),l.range(v?f||[.5*x/b[0].values.length,x*(b[0].values.length-.5)/b[0].values.length]:f||[5+A/2,x-A/2-5]),m.domain(e||[d3.min(b[0].values.map(s).concat(u)),d3.max(b[0].values.map(r).concat(u))]).range(g||[y,0]),l.domain()[0]===l.domain()[1]&&l.domain(l.domain()[0]?[l.domain()[0]-.01*l.domain()[0],l.domain()[1]+.01*l.domain()[1]]:[-1,1]),m.domain()[0]===m.domain()[1]&&m.domain(m.domain()[0]?[m.domain()[0]+.01*m.domain()[0],m.domain()[1]-.01*m.domain()[1]]:[-1,1]);var B=d3.select(this).selectAll("g.nv-wrap.nv-candlestickBar").data([b[0].values]),C=B.enter().append("g").attr("class","nvd3 nv-wrap nv-candlestickBar"),D=C.append("defs"),E=C.append("g"),F=B.select("g");E.append("g").attr("class","nv-ticks"),B.attr("transform","translate("+h.left+","+h.top+")"),c.on("click",function(a,b){z.chartClick({data:a,index:b,pos:d3.event,id:k})}),D.append("clipPath").attr("id","nv-chart-clip-path-"+k).append("rect"),B.select("#nv-chart-clip-path-"+k+" rect").attr("width",x).attr("height",y),F.attr("clip-path",w?"url(#nv-chart-clip-path-"+k+")":"");var G=B.select(".nv-ticks").selectAll(".nv-tick").data(function(a){return a});G.exit().remove();{var H=G.enter().append("g").attr("class",function(a,b,c){return(p(a,b)>q(a,b)?"nv-tick negative":"nv-tick positive")+" nv-tick-"+c+"-"+b});H.append("line").attr("class","nv-candlestick-lines").attr("transform",function(a,b){return"translate("+l(n(a,b))+",0)"}).attr("x1",0).attr("y1",function(a,b){return m(r(a,b))}).attr("x2",0).attr("y2",function(a,b){return m(s(a,b))}),H.append("rect").attr("class","nv-candlestick-rects nv-bars").attr("transform",function(a,b){return"translate("+(l(n(a,b))-A/2)+","+(m(o(a,b))-(p(a,b)>q(a,b)?m(q(a,b))-m(p(a,b)):0))+")"}).attr("x",0).attr("y",0).attr("width",A).attr("height",function(a,b){var c=p(a,b),d=q(a,b);return c>d?m(d)-m(c):m(c)-m(d)})}c.selectAll(".nv-candlestick-lines").transition().attr("transform",function(a,b){return"translate("+l(n(a,b))+",0)"}).attr("x1",0).attr("y1",function(a,b){return m(r(a,b))}).attr("x2",0).attr("y2",function(a,b){return m(s(a,b))}),c.selectAll(".nv-candlestick-rects").transition().attr("transform",function(a,b){return"translate("+(l(n(a,b))-A/2)+","+(m(o(a,b))-(p(a,b)>q(a,b)?m(q(a,b))-m(p(a,b)):0))+")"}).attr("x",0).attr("y",0).attr("width",A).attr("height",function(a,b){var c=p(a,b),d=q(a,b);return c>d?m(d)-m(c):m(c)-m(d)})}),b}var c,d,e,f,g,h={top:0,right:0,bottom:0,left:0},i=null,j=null,k=Math.floor(1e4*Math.random()),l=d3.scale.linear(),m=d3.scale.linear(),n=function(a){return a.x},o=function(a){return a.y},p=function(a){return a.open},q=function(a){return a.close},r=function(a){return a.high},s=function(a){return a.low},t=[],u=[],v=!1,w=!0,x=a.utils.defaultColor(),y=!1,z=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState","renderEnd","chartClick","elementClick","elementDblClick","elementMouseover","elementMouseout","elementMousemove");return b.highlightPoint=function(a,d){b.clearHighlights(),c.select(".nv-candlestickBar .nv-tick-0-"+a).classed("hover",d)},b.clearHighlights=function(){c.select(".nv-candlestickBar .nv-tick.hover").classed("hover",!1)},b.dispatch=z,b.options=a.utils.optionsFunc.bind(b),b._options=Object.create({},{width:{get:function(){return i},set:function(a){i=a}},height:{get:function(){return j},set:function(a){j=a}},xScale:{get:function(){return l},set:function(a){l=a}},yScale:{get:function(){return m},set:function(a){m=a}},xDomain:{get:function(){return d},set:function(a){d=a}},yDomain:{get:function(){return e},set:function(a){e=a}},xRange:{get:function(){return f},set:function(a){f=a}},yRange:{get:function(){return g},set:function(a){g=a}},forceX:{get:function(){return t},set:function(a){t=a}},forceY:{get:function(){return u},set:function(a){u=a}},padData:{get:function(){return v},set:function(a){v=a}},clipEdge:{get:function(){return w},set:function(a){w=a}},id:{get:function(){return k},set:function(a){k=a}},interactive:{get:function(){return y},set:function(a){y=a}},x:{get:function(){return n},set:function(a){n=a}},y:{get:function(){return o},set:function(a){o=a}},open:{get:function(){return p()},set:function(a){p=a}},close:{get:function(){return q()},set:function(a){q=a}},high:{get:function(){return r},set:function(a){r=a}},low:{get:function(){return s},set:function(a){s=a}},margin:{get:function(){return h},set:function(a){h.top=void 0!=a.top?a.top:h.top,h.right=void 0!=a.right?a.right:h.right,h.bottom=void 0!=a.bottom?a.bottom:h.bottom,h.left=void 0!=a.left?a.left:h.left}},color:{get:function(){return x},set:function(b){x=a.utils.getColor(b)}}}),a.utils.initOptions(b),b},a.models.cumulativeLineChart=function(){"use strict";function b(l){return H.reset(),H.models(f),r&&H.models(g),s&&H.models(h),l.each(function(l){function A(){d3.select(b.container).style("cursor","ew-resize")}function E(){G.x=d3.event.x,G.i=Math.round(F.invert(G.x)),K()}function H(){d3.select(b.container).style("cursor","auto"),y.index=G.i,C.stateChange(y)}function K(){bb.data([G]);var a=b.duration();b.duration(0),b.update(),b.duration(a)}var L=d3.select(this);a.utils.initSVG(L),L.classed("nv-chart-"+x,!0);var M=this,N=a.utils.availableWidth(o,L,m),O=a.utils.availableHeight(p,L,m);if(b.update=function(){0===D?L.call(b):L.transition().duration(D).call(b)},b.container=this,y.setter(J(l),b.update).getter(I(l)).update(),y.disabled=l.map(function(a){return!!a.disabled}),!z){var P;z={};for(P in y)z[P]=y[P]instanceof Array?y[P].slice(0):y[P]}var Q=d3.behavior.drag().on("dragstart",A).on("drag",E).on("dragend",H);if(!(l&&l.length&&l.filter(function(a){return a.values.length}).length))return a.utils.noData(b,L),b;if(L.selectAll(".nv-noData").remove(),d=f.xScale(),e=f.yScale(),w)f.yDomain(null);else{var R=l.filter(function(a){return!a.disabled}).map(function(a){var b=d3.extent(a.values,f.y());return b[0]<-.95&&(b[0]=-.95),[(b[0]-b[1])/(1+b[1]),(b[1]-b[0])/(1+b[0])]}),S=[d3.min(R,function(a){return a[0]}),d3.max(R,function(a){return a[1]})];f.yDomain(S)}F.domain([0,l[0].values.length-1]).range([0,N]).clamp(!0);var l=c(G.i,l),T=v?"none":"all",U=L.selectAll("g.nv-wrap.nv-cumulativeLine").data([l]),V=U.enter().append("g").attr("class","nvd3 nv-wrap nv-cumulativeLine").append("g"),W=U.select("g");if(V.append("g").attr("class","nv-interactive"),V.append("g").attr("class","nv-x nv-axis").style("pointer-events","none"),V.append("g").attr("class","nv-y nv-axis"),V.append("g").attr("class","nv-background"),V.append("g").attr("class","nv-linesWrap").style("pointer-events",T),V.append("g").attr("class","nv-avgLinesWrap").style("pointer-events","none"),V.append("g").attr("class","nv-legendWrap"),V.append("g").attr("class","nv-controlsWrap"),q&&(i.width(N),W.select(".nv-legendWrap").datum(l).call(i),m.top!=i.height()&&(m.top=i.height(),O=a.utils.availableHeight(p,L,m)),W.select(".nv-legendWrap").attr("transform","translate(0,"+-m.top+")")),u){var X=[{key:"Re-scale y-axis",disabled:!w}];j.width(140).color(["#444","#444","#444"]).rightAlign(!1).margin({top:5,right:0,bottom:5,left:20}),W.select(".nv-controlsWrap").datum(X).attr("transform","translate(0,"+-m.top+")").call(j)}U.attr("transform","translate("+m.left+","+m.top+")"),t&&W.select(".nv-y.nv-axis").attr("transform","translate("+N+",0)");var Y=l.filter(function(a){return a.tempDisabled});U.select(".tempDisabled").remove(),Y.length&&U.append("text").attr("class","tempDisabled").attr("x",N/2).attr("y","-.71em").style("text-anchor","end").text(Y.map(function(a){return a.key}).join(", ")+" values cannot be calculated for this time period."),v&&(k.width(N).height(O).margin({left:m.left,top:m.top}).svgContainer(L).xScale(d),U.select(".nv-interactive").call(k)),V.select(".nv-background").append("rect"),W.select(".nv-background rect").attr("width",N).attr("height",O),f.y(function(a){return a.display.y}).width(N).height(O).color(l.map(function(a,b){return a.color||n(a,b)}).filter(function(a,b){return!l[b].disabled&&!l[b].tempDisabled}));var Z=W.select(".nv-linesWrap").datum(l.filter(function(a){return!a.disabled&&!a.tempDisabled}));Z.call(f),l.forEach(function(a,b){a.seriesIndex=b});var $=l.filter(function(a){return!a.disabled&&!!B(a)}),_=W.select(".nv-avgLinesWrap").selectAll("line").data($,function(a){return a.key}),ab=function(a){var b=e(B(a));return 0>b?0:b>O?O:b};_.enter().append("line").style("stroke-width",2).style("stroke-dasharray","10,10").style("stroke",function(a){return f.color()(a,a.seriesIndex)}).attr("x1",0).attr("x2",N).attr("y1",ab).attr("y2",ab),_.style("stroke-opacity",function(a){var b=e(B(a));return 0>b||b>O?0:1}).attr("x1",0).attr("x2",N).attr("y1",ab).attr("y2",ab),_.exit().remove();var bb=Z.selectAll(".nv-indexLine").data([G]);bb.enter().append("rect").attr("class","nv-indexLine").attr("width",3).attr("x",-2).attr("fill","red").attr("fill-opacity",.5).style("pointer-events","all").call(Q),bb.attr("transform",function(a){return"translate("+F(a.i)+",0)"}).attr("height",O),r&&(g.scale(d)._ticks(a.utils.calcTicksX(N/70,l)).tickSize(-O,0),W.select(".nv-x.nv-axis").attr("transform","translate(0,"+e.range()[0]+")"),W.select(".nv-x.nv-axis").call(g)),s&&(h.scale(e)._ticks(a.utils.calcTicksY(O/36,l)).tickSize(-N,0),W.select(".nv-y.nv-axis").call(h)),W.select(".nv-background rect").on("click",function(){G.x=d3.mouse(this)[0],G.i=Math.round(F.invert(G.x)),y.index=G.i,C.stateChange(y),K()}),f.dispatch.on("elementClick",function(a){G.i=a.pointIndex,G.x=F(G.i),y.index=G.i,C.stateChange(y),K()}),j.dispatch.on("legendClick",function(a){a.disabled=!a.disabled,w=!a.disabled,y.rescaleY=w,C.stateChange(y),b.update()}),i.dispatch.on("stateChange",function(a){for(var c in a)y[c]=a[c];C.stateChange(y),b.update()}),k.dispatch.on("elementMousemove",function(c){f.clearHighlights();var d,e,i,j=[];if(l.filter(function(a,b){return a.seriesIndex=b,!a.disabled}).forEach(function(g,h){e=a.interactiveBisect(g.values,c.pointXValue,b.x()),f.highlightPoint(h,e,!0);var k=g.values[e];"undefined"!=typeof k&&("undefined"==typeof d&&(d=k),"undefined"==typeof i&&(i=b.xScale()(b.x()(k,e))),j.push({key:g.key,value:b.y()(k,e),color:n(g,g.seriesIndex)}))}),j.length>2){var o=b.yScale().invert(c.mouseY),p=Math.abs(b.yScale().domain()[0]-b.yScale().domain()[1]),q=.03*p,r=a.nearestValueIndex(j.map(function(a){return a.value}),o,q);null!==r&&(j[r].highlight=!0)}var s=g.tickFormat()(b.x()(d,e),e);k.tooltip.position({left:i+m.left,top:c.mouseY+m.top}).chartContainer(M.parentNode).valueFormatter(function(a){return h.tickFormat()(a)}).data({value:s,series:j})(),k.renderGuideLine(i)}),k.dispatch.on("elementMouseout",function(){f.clearHighlights()}),C.on("changeState",function(a){"undefined"!=typeof a.disabled&&(l.forEach(function(b,c){b.disabled=a.disabled[c]}),y.disabled=a.disabled),"undefined"!=typeof a.index&&(G.i=a.index,G.x=F(G.i),y.index=a.index,bb.data([G])),"undefined"!=typeof a.rescaleY&&(w=a.rescaleY),b.update()})}),H.renderEnd("cumulativeLineChart immediate"),b}function c(a,b){return K||(K=f.y()),b.map(function(b){if(!b.values)return b;var c=b.values[a];if(null==c)return b;var d=K(c,a);return-.95>d&&!E?(b.tempDisabled=!0,b):(b.tempDisabled=!1,b.values=b.values.map(function(a,b){return a.display={y:(K(a,b)-d)/(1+d)},a}),b)})}var d,e,f=a.models.line(),g=a.models.axis(),h=a.models.axis(),i=a.models.legend(),j=a.models.legend(),k=a.interactiveGuideline(),l=a.models.tooltip(),m={top:30,right:30,bottom:50,left:60},n=a.utils.defaultColor(),o=null,p=null,q=!0,r=!0,s=!0,t=!1,u=!0,v=!1,w=!0,x=f.id(),y=a.utils.state(),z=null,A=null,B=function(a){return a.average},C=d3.dispatch("stateChange","changeState","renderEnd"),D=250,E=!1;y.index=0,y.rescaleY=w,g.orient("bottom").tickPadding(7),h.orient(t?"right":"left"),l.valueFormatter(function(a,b){return h.tickFormat()(a,b)}).headerFormatter(function(a,b){return g.tickFormat()(a,b)}),j.updateState(!1);var F=d3.scale.linear(),G={i:0,x:0},H=a.utils.renderWatch(C,D),I=function(a){return function(){return{active:a.map(function(a){return!a.disabled}),index:G.i,rescaleY:w}}},J=function(a){return function(b){void 0!==b.index&&(G.i=b.index),void 0!==b.rescaleY&&(w=b.rescaleY),void 0!==b.active&&a.forEach(function(a,c){a.disabled=!b.active[c]})}};f.dispatch.on("elementMouseover.tooltip",function(a){var c={x:b.x()(a.point),y:b.y()(a.point),color:a.point.color};a.point=c,l.data(a).position(a.pos).hidden(!1)}),f.dispatch.on("elementMouseout.tooltip",function(){l.hidden(!0)});var K=null;return b.dispatch=C,b.lines=f,b.legend=i,b.controls=j,b.xAxis=g,b.yAxis=h,b.interactiveLayer=k,b.state=y,b.tooltip=l,b.options=a.utils.optionsFunc.bind(b),b._options=Object.create({},{width:{get:function(){return o},set:function(a){o=a}},height:{get:function(){return p},set:function(a){p=a}},rescaleY:{get:function(){return w},set:function(a){w=a}},showControls:{get:function(){return u},set:function(a){u=a}},showLegend:{get:function(){return q},set:function(a){q=a}},average:{get:function(){return B},set:function(a){B=a}},defaultState:{get:function(){return z},set:function(a){z=a}},noData:{get:function(){return A},set:function(a){A=a}},showXAxis:{get:function(){return r},set:function(a){r=a}},showYAxis:{get:function(){return s},set:function(a){s=a}},noErrorCheck:{get:function(){return E},set:function(a){E=a}},tooltips:{get:function(){return l.enabled()},set:function(b){a.deprecated("tooltips","use chart.tooltip.enabled() instead"),l.enabled(!!b)}},tooltipContent:{get:function(){return l.contentGenerator()},set:function(b){a.deprecated("tooltipContent","use chart.tooltip.contentGenerator() instead"),l.contentGenerator(b)}},margin:{get:function(){return m},set:function(a){m.top=void 0!==a.top?a.top:m.top,m.right=void 0!==a.right?a.right:m.right,m.bottom=void 0!==a.bottom?a.bottom:m.bottom,m.left=void 0!==a.left?a.left:m.left}},color:{get:function(){return n},set:function(b){n=a.utils.getColor(b),i.color(n)}},useInteractiveGuideline:{get:function(){return v},set:function(a){v=a,a===!0&&(b.interactive(!1),b.useVoronoi(!1))}},rightAlignYAxis:{get:function(){return t},set:function(a){t=a,h.orient(a?"right":"left")}},duration:{get:function(){return D},set:function(a){D=a,f.duration(D),g.duration(D),h.duration(D),H.reset(D)}}}),a.utils.inheritOptions(b,f),a.utils.initOptions(b),b},a.models.discreteBar=function(){"use strict";function b(m){return y.reset(),m.each(function(b){var m=k-j.left-j.right,x=l-j.top-j.bottom;c=d3.select(this),a.utils.initSVG(c),b.forEach(function(a,b){a.values.forEach(function(a){a.series=b})});var z=d&&e?[]:b.map(function(a){return a.values.map(function(a,b){return{x:p(a,b),y:q(a,b),y0:a.y0}})});n.domain(d||d3.merge(z).map(function(a){return a.x})).rangeBands(f||[0,m],.1),o.domain(e||d3.extent(d3.merge(z).map(function(a){return a.y}).concat(r))),o.range(t?g||[x-(o.domain()[0]<0?12:0),o.domain()[1]>0?12:0]:g||[x,0]),h=h||n,i=i||o.copy().range([o(0),o(0)]);{var A=c.selectAll("g.nv-wrap.nv-discretebar").data([b]),B=A.enter().append("g").attr("class","nvd3 nv-wrap nv-discretebar"),C=B.append("g");A.select("g")}C.append("g").attr("class","nv-groups"),A.attr("transform","translate("+j.left+","+j.top+")");var D=A.select(".nv-groups").selectAll(".nv-group").data(function(a){return a},function(a){return a.key});D.enter().append("g").style("stroke-opacity",1e-6).style("fill-opacity",1e-6),D.exit().watchTransition(y,"discreteBar: exit groups").style("stroke-opacity",1e-6).style("fill-opacity",1e-6).remove(),D.attr("class",function(a,b){return"nv-group nv-series-"+b}).classed("hover",function(a){return a.hover}),D.watchTransition(y,"discreteBar: groups").style("stroke-opacity",1).style("fill-opacity",.75);var E=D.selectAll("g.nv-bar").data(function(a){return a.values});E.exit().remove();var F=E.enter().append("g").attr("transform",function(a,b){return"translate("+(n(p(a,b))+.05*n.rangeBand())+", "+o(0)+")"}).on("mouseover",function(a,b){d3.select(this).classed("hover",!0),v.elementMouseover({data:a,index:b,color:d3.select(this).style("fill")})}).on("mouseout",function(a,b){d3.select(this).classed("hover",!1),v.elementMouseout({data:a,index:b,color:d3.select(this).style("fill")})}).on("mousemove",function(a,b){v.elementMousemove({data:a,index:b,color:d3.select(this).style("fill")})}).on("click",function(a,b){v.elementClick({data:a,index:b,color:d3.select(this).style("fill")}),d3.event.stopPropagation()}).on("dblclick",function(a,b){v.elementDblClick({data:a,index:b,color:d3.select(this).style("fill")}),d3.event.stopPropagation()});F.append("rect").attr("height",0).attr("width",.9*n.rangeBand()/b.length),t?(F.append("text").attr("text-anchor","middle"),E.select("text").text(function(a,b){return u(q(a,b))}).watchTransition(y,"discreteBar: bars text").attr("x",.9*n.rangeBand()/2).attr("y",function(a,b){return q(a,b)<0?o(q(a,b))-o(0)+12:-4})):E.selectAll("text").remove(),E.attr("class",function(a,b){return q(a,b)<0?"nv-bar negative":"nv-bar positive"}).style("fill",function(a,b){return a.color||s(a,b)}).style("stroke",function(a,b){return a.color||s(a,b)}).select("rect").attr("class",w).watchTransition(y,"discreteBar: bars rect").attr("width",.9*n.rangeBand()/b.length),E.watchTransition(y,"discreteBar: bars").attr("transform",function(a,b){var c=n(p(a,b))+.05*n.rangeBand(),d=q(a,b)<0?o(0):o(0)-o(q(a,b))<1?o(0)-1:o(q(a,b));return"translate("+c+", "+d+")"}).select("rect").attr("height",function(a,b){return Math.max(Math.abs(o(q(a,b))-o(e&&e[0]||0))||1)}),h=n.copy(),i=o.copy()}),y.renderEnd("discreteBar immediate"),b}var c,d,e,f,g,h,i,j={top:0,right:0,bottom:0,left:0},k=960,l=500,m=Math.floor(1e4*Math.random()),n=d3.scale.ordinal(),o=d3.scale.linear(),p=function(a){return a.x},q=function(a){return a.y},r=[0],s=a.utils.defaultColor(),t=!1,u=d3.format(",.2f"),v=d3.dispatch("chartClick","elementClick","elementDblClick","elementMouseover","elementMouseout","elementMousemove","renderEnd"),w="discreteBar",x=250,y=a.utils.renderWatch(v,x);return b.dispatch=v,b.options=a.utils.optionsFunc.bind(b),b._options=Object.create({},{width:{get:function(){return k},set:function(a){k=a}},height:{get:function(){return l},set:function(a){l=a}},forceY:{get:function(){return r},set:function(a){r=a}},showValues:{get:function(){return t},set:function(a){t=a}},x:{get:function(){return p},set:function(a){p=a}},y:{get:function(){return q},set:function(a){q=a}},xScale:{get:function(){return n},set:function(a){n=a}},yScale:{get:function(){return o},set:function(a){o=a}},xDomain:{get:function(){return d},set:function(a){d=a}},yDomain:{get:function(){return e},set:function(a){e=a}},xRange:{get:function(){return f},set:function(a){f=a}},yRange:{get:function(){return g},set:function(a){g=a}},valueFormat:{get:function(){return u},set:function(a){u=a}},id:{get:function(){return m},set:function(a){m=a}},rectClass:{get:function(){return w},set:function(a){w=a}},margin:{get:function(){return j},set:function(a){j.top=void 0!==a.top?a.top:j.top,j.right=void 0!==a.right?a.right:j.right,j.bottom=void 0!==a.bottom?a.bottom:j.bottom,j.left=void 0!==a.left?a.left:j.left}},color:{get:function(){return s},set:function(b){s=a.utils.getColor(b)}},duration:{get:function(){return x},set:function(a){x=a,y.reset(x)}}}),a.utils.initOptions(b),b},a.models.discreteBarChart=function(){"use strict";function b(h){return t.reset(),t.models(e),m&&t.models(f),n&&t.models(g),h.each(function(h){var l=d3.select(this);a.utils.initSVG(l);var q=a.utils.availableWidth(j,l,i),t=a.utils.availableHeight(k,l,i);if(b.update=function(){r.beforeUpdate(),l.transition().duration(s).call(b)},b.container=this,!(h&&h.length&&h.filter(function(a){return a.values.length}).length))return a.utils.noData(b,l),b;l.selectAll(".nv-noData").remove(),c=e.xScale(),d=e.yScale().clamp(!0);var u=l.selectAll("g.nv-wrap.nv-discreteBarWithAxes").data([h]),v=u.enter().append("g").attr("class","nvd3 nv-wrap nv-discreteBarWithAxes").append("g"),w=v.append("defs"),x=u.select("g");v.append("g").attr("class","nv-x nv-axis"),v.append("g").attr("class","nv-y nv-axis").append("g").attr("class","nv-zeroLine").append("line"),v.append("g").attr("class","nv-barsWrap"),x.attr("transform","translate("+i.left+","+i.top+")"),o&&x.select(".nv-y.nv-axis").attr("transform","translate("+q+",0)"),e.width(q).height(t);var y=x.select(".nv-barsWrap").datum(h.filter(function(a){return!a.disabled}));if(y.transition().call(e),w.append("clipPath").attr("id","nv-x-label-clip-"+e.id()).append("rect"),x.select("#nv-x-label-clip-"+e.id()+" rect").attr("width",c.rangeBand()*(p?2:1)).attr("height",16).attr("x",-c.rangeBand()/(p?1:2)),m){f.scale(c)._ticks(a.utils.calcTicksX(q/100,h)).tickSize(-t,0),x.select(".nv-x.nv-axis").attr("transform","translate(0,"+(d.range()[0]+(e.showValues()&&d.domain()[0]<0?16:0))+")"),x.select(".nv-x.nv-axis").call(f);
var z=x.select(".nv-x.nv-axis").selectAll("g");p&&z.selectAll("text").attr("transform",function(a,b,c){return"translate(0,"+(c%2==0?"5":"17")+")"})}n&&(g.scale(d)._ticks(a.utils.calcTicksY(t/36,h)).tickSize(-q,0),x.select(".nv-y.nv-axis").call(g)),x.select(".nv-zeroLine line").attr("x1",0).attr("x2",q).attr("y1",d(0)).attr("y2",d(0))}),t.renderEnd("discreteBar chart immediate"),b}var c,d,e=a.models.discreteBar(),f=a.models.axis(),g=a.models.axis(),h=a.models.tooltip(),i={top:15,right:10,bottom:50,left:60},j=null,k=null,l=a.utils.getColor(),m=!0,n=!0,o=!1,p=!1,q=null,r=d3.dispatch("beforeUpdate","renderEnd"),s=250;f.orient("bottom").showMaxMin(!1).tickFormat(function(a){return a}),g.orient(o?"right":"left").tickFormat(d3.format(",.1f")),h.duration(0).headerEnabled(!1).valueFormatter(function(a,b){return g.tickFormat()(a,b)}).keyFormatter(function(a,b){return f.tickFormat()(a,b)});var t=a.utils.renderWatch(r,s);return e.dispatch.on("elementMouseover.tooltip",function(a){a.series={key:b.x()(a.data),value:b.y()(a.data),color:a.color},h.data(a).hidden(!1)}),e.dispatch.on("elementMouseout.tooltip",function(){h.hidden(!0)}),e.dispatch.on("elementMousemove.tooltip",function(){h.position({top:d3.event.pageY,left:d3.event.pageX})()}),b.dispatch=r,b.discretebar=e,b.xAxis=f,b.yAxis=g,b.tooltip=h,b.options=a.utils.optionsFunc.bind(b),b._options=Object.create({},{width:{get:function(){return j},set:function(a){j=a}},height:{get:function(){return k},set:function(a){k=a}},staggerLabels:{get:function(){return p},set:function(a){p=a}},showXAxis:{get:function(){return m},set:function(a){m=a}},showYAxis:{get:function(){return n},set:function(a){n=a}},noData:{get:function(){return q},set:function(a){q=a}},tooltips:{get:function(){return h.enabled()},set:function(b){a.deprecated("tooltips","use chart.tooltip.enabled() instead"),h.enabled(!!b)}},tooltipContent:{get:function(){return h.contentGenerator()},set:function(b){a.deprecated("tooltipContent","use chart.tooltip.contentGenerator() instead"),h.contentGenerator(b)}},margin:{get:function(){return i},set:function(a){i.top=void 0!==a.top?a.top:i.top,i.right=void 0!==a.right?a.right:i.right,i.bottom=void 0!==a.bottom?a.bottom:i.bottom,i.left=void 0!==a.left?a.left:i.left}},duration:{get:function(){return s},set:function(a){s=a,t.reset(s),e.duration(s),f.duration(s),g.duration(s)}},color:{get:function(){return l},set:function(b){l=a.utils.getColor(b),e.color(l)}},rightAlignYAxis:{get:function(){return o},set:function(a){o=a,g.orient(a?"right":"left")}}}),a.utils.inheritOptions(b,e),a.utils.initOptions(b),b},a.models.distribution=function(){"use strict";function b(k){return m.reset(),k.each(function(b){var k=(e-("x"===g?d.left+d.right:d.top+d.bottom),"x"==g?"y":"x"),l=d3.select(this);a.utils.initSVG(l),c=c||j;var n=l.selectAll("g.nv-distribution").data([b]),o=n.enter().append("g").attr("class","nvd3 nv-distribution"),p=(o.append("g"),n.select("g"));n.attr("transform","translate("+d.left+","+d.top+")");var q=p.selectAll("g.nv-dist").data(function(a){return a},function(a){return a.key});q.enter().append("g"),q.attr("class",function(a,b){return"nv-dist nv-series-"+b}).style("stroke",function(a,b){return i(a,b)});var r=q.selectAll("line.nv-dist"+g).data(function(a){return a.values});r.enter().append("line").attr(g+"1",function(a,b){return c(h(a,b))}).attr(g+"2",function(a,b){return c(h(a,b))}),m.transition(q.exit().selectAll("line.nv-dist"+g),"dist exit").attr(g+"1",function(a,b){return j(h(a,b))}).attr(g+"2",function(a,b){return j(h(a,b))}).style("stroke-opacity",0).remove(),r.attr("class",function(a,b){return"nv-dist"+g+" nv-dist"+g+"-"+b}).attr(k+"1",0).attr(k+"2",f),m.transition(r,"dist").attr(g+"1",function(a,b){return j(h(a,b))}).attr(g+"2",function(a,b){return j(h(a,b))}),c=j.copy()}),m.renderEnd("distribution immediate"),b}var c,d={top:0,right:0,bottom:0,left:0},e=400,f=8,g="x",h=function(a){return a[g]},i=a.utils.defaultColor(),j=d3.scale.linear(),k=250,l=d3.dispatch("renderEnd"),m=a.utils.renderWatch(l,k);return b.options=a.utils.optionsFunc.bind(b),b.dispatch=l,b.margin=function(a){return arguments.length?(d.top="undefined"!=typeof a.top?a.top:d.top,d.right="undefined"!=typeof a.right?a.right:d.right,d.bottom="undefined"!=typeof a.bottom?a.bottom:d.bottom,d.left="undefined"!=typeof a.left?a.left:d.left,b):d},b.width=function(a){return arguments.length?(e=a,b):e},b.axis=function(a){return arguments.length?(g=a,b):g},b.size=function(a){return arguments.length?(f=a,b):f},b.getData=function(a){return arguments.length?(h=d3.functor(a),b):h},b.scale=function(a){return arguments.length?(j=a,b):j},b.color=function(c){return arguments.length?(i=a.utils.getColor(c),b):i},b.duration=function(a){return arguments.length?(k=a,m.reset(k),b):k},b},a.models.furiousLegend=function(){"use strict";function b(p){function q(a,b){return"furious"!=o?"#000":m?a.disengaged?g(a,b):"#fff":m?void 0:a.disabled?g(a,b):"#fff"}function r(a,b){return m&&"furious"==o?a.disengaged?"#fff":g(a,b):a.disabled?"#fff":g(a,b)}return p.each(function(b){var p=d-c.left-c.right,s=d3.select(this);a.utils.initSVG(s);var t=s.selectAll("g.nv-legend").data([b]),u=(t.enter().append("g").attr("class","nvd3 nv-legend").append("g"),t.select("g"));t.attr("transform","translate("+c.left+","+c.top+")");var v,w=u.selectAll(".nv-series").data(function(a){return"furious"!=o?a:a.filter(function(a){return m?!0:!a.disengaged})}),x=w.enter().append("g").attr("class","nv-series");if("classic"==o)x.append("circle").style("stroke-width",2).attr("class","nv-legend-symbol").attr("r",5),v=w.select("circle");else if("furious"==o){x.append("rect").style("stroke-width",2).attr("class","nv-legend-symbol").attr("rx",3).attr("ry",3),v=w.select("rect"),x.append("g").attr("class","nv-check-box").property("innerHTML",'<path d="M0.5,5 L22.5,5 L22.5,26.5 L0.5,26.5 L0.5,5 Z" class="nv-box"></path><path d="M5.5,12.8618467 L11.9185089,19.2803556 L31,0.198864511" class="nv-check"></path>').attr("transform","translate(-10,-8)scale(0.5)");var y=w.select(".nv-check-box");y.each(function(a,b){d3.select(this).selectAll("path").attr("stroke",q(a,b))})}x.append("text").attr("text-anchor","start").attr("class","nv-legend-text").attr("dy",".32em").attr("dx","8");var z=w.select("text.nv-legend-text");w.on("mouseover",function(a,b){n.legendMouseover(a,b)}).on("mouseout",function(a,b){n.legendMouseout(a,b)}).on("click",function(a,b){n.legendClick(a,b);var c=w.data();if(k){if("classic"==o)l?(c.forEach(function(a){a.disabled=!0}),a.disabled=!1):(a.disabled=!a.disabled,c.every(function(a){return a.disabled})&&c.forEach(function(a){a.disabled=!1}));else if("furious"==o)if(m)a.disengaged=!a.disengaged,a.userDisabled=void 0==a.userDisabled?!!a.disabled:a.userDisabled,a.disabled=a.disengaged||a.userDisabled;else if(!m){a.disabled=!a.disabled,a.userDisabled=a.disabled;var d=c.filter(function(a){return!a.disengaged});d.every(function(a){return a.userDisabled})&&c.forEach(function(a){a.disabled=a.userDisabled=!1})}n.stateChange({disabled:c.map(function(a){return!!a.disabled}),disengaged:c.map(function(a){return!!a.disengaged})})}}).on("dblclick",function(a,b){if(("furious"!=o||!m)&&(n.legendDblclick(a,b),k)){var c=w.data();c.forEach(function(a){a.disabled=!0,"furious"==o&&(a.userDisabled=a.disabled)}),a.disabled=!1,"furious"==o&&(a.userDisabled=a.disabled),n.stateChange({disabled:c.map(function(a){return!!a.disabled})})}}),w.classed("nv-disabled",function(a){return a.userDisabled}),w.exit().remove(),z.attr("fill",q).text(f);var A;switch(o){case"furious":A=23;break;case"classic":A=20}if(h){var B=[];w.each(function(){var b,c=d3.select(this).select("text");try{if(b=c.node().getComputedTextLength(),0>=b)throw Error()}catch(d){b=a.utils.calcApproxTextWidth(c)}B.push(b+i)});for(var C=0,D=0,E=[];p>D&&C<B.length;)E[C]=B[C],D+=B[C++];for(0===C&&(C=1);D>p&&C>1;){E=[],C--;for(var F=0;F<B.length;F++)B[F]>(E[F%C]||0)&&(E[F%C]=B[F]);D=E.reduce(function(a,b){return a+b})}for(var G=[],H=0,I=0;C>H;H++)G[H]=I,I+=E[H];w.attr("transform",function(a,b){return"translate("+G[b%C]+","+(5+Math.floor(b/C)*A)+")"}),j?u.attr("transform","translate("+(d-c.right-D)+","+c.top+")"):u.attr("transform","translate(0,"+c.top+")"),e=c.top+c.bottom+Math.ceil(B.length/C)*A}else{var J,K=5,L=5,M=0;w.attr("transform",function(){var a=d3.select(this).select("text").node().getComputedTextLength()+i;return J=L,d<c.left+c.right+J+a&&(L=J=5,K+=A),L+=a,L>M&&(M=L),"translate("+J+","+K+")"}),u.attr("transform","translate("+(d-c.right-M)+","+c.top+")"),e=c.top+c.bottom+K+15}"furious"==o&&v.attr("width",function(a,b){return z[0][b].getComputedTextLength()+27}).attr("height",18).attr("y",-9).attr("x",-15),v.style("fill",r).style("stroke",function(a,b){return a.color||g(a,b)})}),b}var c={top:5,right:0,bottom:5,left:0},d=400,e=20,f=function(a){return a.key},g=a.utils.getColor(),h=!0,i=28,j=!0,k=!0,l=!1,m=!1,n=d3.dispatch("legendClick","legendDblclick","legendMouseover","legendMouseout","stateChange"),o="classic";return b.dispatch=n,b.options=a.utils.optionsFunc.bind(b),b._options=Object.create({},{width:{get:function(){return d},set:function(a){d=a}},height:{get:function(){return e},set:function(a){e=a}},key:{get:function(){return f},set:function(a){f=a}},align:{get:function(){return h},set:function(a){h=a}},rightAlign:{get:function(){return j},set:function(a){j=a}},padding:{get:function(){return i},set:function(a){i=a}},updateState:{get:function(){return k},set:function(a){k=a}},radioButtonMode:{get:function(){return l},set:function(a){l=a}},expanded:{get:function(){return m},set:function(a){m=a}},vers:{get:function(){return o},set:function(a){o=a}},margin:{get:function(){return c},set:function(a){c.top=void 0!==a.top?a.top:c.top,c.right=void 0!==a.right?a.right:c.right,c.bottom=void 0!==a.bottom?a.bottom:c.bottom,c.left=void 0!==a.left?a.left:c.left}},color:{get:function(){return g},set:function(b){g=a.utils.getColor(b)}}}),a.utils.initOptions(b),b},a.models.historicalBar=function(){"use strict";function b(x){return x.each(function(b){w.reset(),k=d3.select(this);var x=a.utils.availableWidth(h,k,g),y=a.utils.availableHeight(i,k,g);a.utils.initSVG(k),l.domain(c||d3.extent(b[0].values.map(n).concat(p))),l.range(r?e||[.5*x/b[0].values.length,x*(b[0].values.length-.5)/b[0].values.length]:e||[0,x]),m.domain(d||d3.extent(b[0].values.map(o).concat(q))).range(f||[y,0]),l.domain()[0]===l.domain()[1]&&l.domain(l.domain()[0]?[l.domain()[0]-.01*l.domain()[0],l.domain()[1]+.01*l.domain()[1]]:[-1,1]),m.domain()[0]===m.domain()[1]&&m.domain(m.domain()[0]?[m.domain()[0]+.01*m.domain()[0],m.domain()[1]-.01*m.domain()[1]]:[-1,1]);var z=k.selectAll("g.nv-wrap.nv-historicalBar-"+j).data([b[0].values]),A=z.enter().append("g").attr("class","nvd3 nv-wrap nv-historicalBar-"+j),B=A.append("defs"),C=A.append("g"),D=z.select("g");C.append("g").attr("class","nv-bars"),z.attr("transform","translate("+g.left+","+g.top+")"),k.on("click",function(a,b){u.chartClick({data:a,index:b,pos:d3.event,id:j})}),B.append("clipPath").attr("id","nv-chart-clip-path-"+j).append("rect"),z.select("#nv-chart-clip-path-"+j+" rect").attr("width",x).attr("height",y),D.attr("clip-path",s?"url(#nv-chart-clip-path-"+j+")":"");var E=z.select(".nv-bars").selectAll(".nv-bar").data(function(a){return a},function(a,b){return n(a,b)});E.exit().remove(),E.enter().append("rect").attr("x",0).attr("y",function(b,c){return a.utils.NaNtoZero(m(Math.max(0,o(b,c))))}).attr("height",function(b,c){return a.utils.NaNtoZero(Math.abs(m(o(b,c))-m(0)))}).attr("transform",function(a,c){return"translate("+(l(n(a,c))-x/b[0].values.length*.45)+",0)"}).on("mouseover",function(a,b){v&&(d3.select(this).classed("hover",!0),u.elementMouseover({data:a,index:b,color:d3.select(this).style("fill")}))}).on("mouseout",function(a,b){v&&(d3.select(this).classed("hover",!1),u.elementMouseout({data:a,index:b,color:d3.select(this).style("fill")}))}).on("mousemove",function(a,b){v&&u.elementMousemove({data:a,index:b,color:d3.select(this).style("fill")})}).on("click",function(a,b){v&&(u.elementClick({data:a,index:b,color:d3.select(this).style("fill")}),d3.event.stopPropagation())}).on("dblclick",function(a,b){v&&(u.elementDblClick({data:a,index:b,color:d3.select(this).style("fill")}),d3.event.stopPropagation())}),E.attr("fill",function(a,b){return t(a,b)}).attr("class",function(a,b,c){return(o(a,b)<0?"nv-bar negative":"nv-bar positive")+" nv-bar-"+c+"-"+b}).watchTransition(w,"bars").attr("transform",function(a,c){return"translate("+(l(n(a,c))-x/b[0].values.length*.45)+",0)"}).attr("width",x/b[0].values.length*.9),E.watchTransition(w,"bars").attr("y",function(b,c){var d=o(b,c)<0?m(0):m(0)-m(o(b,c))<1?m(0)-1:m(o(b,c));return a.utils.NaNtoZero(d)}).attr("height",function(b,c){return a.utils.NaNtoZero(Math.max(Math.abs(m(o(b,c))-m(0)),1))})}),w.renderEnd("historicalBar immediate"),b}var c,d,e,f,g={top:0,right:0,bottom:0,left:0},h=null,i=null,j=Math.floor(1e4*Math.random()),k=null,l=d3.scale.linear(),m=d3.scale.linear(),n=function(a){return a.x},o=function(a){return a.y},p=[],q=[0],r=!1,s=!0,t=a.utils.defaultColor(),u=d3.dispatch("chartClick","elementClick","elementDblClick","elementMouseover","elementMouseout","elementMousemove","renderEnd"),v=!0,w=a.utils.renderWatch(u,0);return b.highlightPoint=function(a,b){k.select(".nv-bars .nv-bar-0-"+a).classed("hover",b)},b.clearHighlights=function(){k.select(".nv-bars .nv-bar.hover").classed("hover",!1)},b.dispatch=u,b.options=a.utils.optionsFunc.bind(b),b._options=Object.create({},{width:{get:function(){return h},set:function(a){h=a}},height:{get:function(){return i},set:function(a){i=a}},forceX:{get:function(){return p},set:function(a){p=a}},forceY:{get:function(){return q},set:function(a){q=a}},padData:{get:function(){return r},set:function(a){r=a}},x:{get:function(){return n},set:function(a){n=a}},y:{get:function(){return o},set:function(a){o=a}},xScale:{get:function(){return l},set:function(a){l=a}},yScale:{get:function(){return m},set:function(a){m=a}},xDomain:{get:function(){return c},set:function(a){c=a}},yDomain:{get:function(){return d},set:function(a){d=a}},xRange:{get:function(){return e},set:function(a){e=a}},yRange:{get:function(){return f},set:function(a){f=a}},clipEdge:{get:function(){return s},set:function(a){s=a}},id:{get:function(){return j},set:function(a){j=a}},interactive:{get:function(){return v},set:function(a){v=a}},margin:{get:function(){return g},set:function(a){g.top=void 0!==a.top?a.top:g.top,g.right=void 0!==a.right?a.right:g.right,g.bottom=void 0!==a.bottom?a.bottom:g.bottom,g.left=void 0!==a.left?a.left:g.left}},color:{get:function(){return t},set:function(b){t=a.utils.getColor(b)}}}),a.utils.initOptions(b),b},a.models.historicalBarChart=function(b){"use strict";function c(b){return b.each(function(k){z.reset(),z.models(f),q&&z.models(g),r&&z.models(h);var w=d3.select(this),A=this;a.utils.initSVG(w);var B=a.utils.availableWidth(n,w,l),C=a.utils.availableHeight(o,w,l);if(c.update=function(){w.transition().duration(y).call(c)},c.container=this,u.disabled=k.map(function(a){return!!a.disabled}),!v){var D;v={};for(D in u)v[D]=u[D]instanceof Array?u[D].slice(0):u[D]}if(!(k&&k.length&&k.filter(function(a){return a.values.length}).length))return a.utils.noData(c,w),c;w.selectAll(".nv-noData").remove(),d=f.xScale(),e=f.yScale();var E=w.selectAll("g.nv-wrap.nv-historicalBarChart").data([k]),F=E.enter().append("g").attr("class","nvd3 nv-wrap nv-historicalBarChart").append("g"),G=E.select("g");F.append("g").attr("class","nv-x nv-axis"),F.append("g").attr("class","nv-y nv-axis"),F.append("g").attr("class","nv-barsWrap"),F.append("g").attr("class","nv-legendWrap"),F.append("g").attr("class","nv-interactive"),p&&(i.width(B),G.select(".nv-legendWrap").datum(k).call(i),l.top!=i.height()&&(l.top=i.height(),C=a.utils.availableHeight(o,w,l)),E.select(".nv-legendWrap").attr("transform","translate(0,"+-l.top+")")),E.attr("transform","translate("+l.left+","+l.top+")"),s&&G.select(".nv-y.nv-axis").attr("transform","translate("+B+",0)"),t&&(j.width(B).height(C).margin({left:l.left,top:l.top}).svgContainer(w).xScale(d),E.select(".nv-interactive").call(j)),f.width(B).height(C).color(k.map(function(a,b){return a.color||m(a,b)}).filter(function(a,b){return!k[b].disabled}));var H=G.select(".nv-barsWrap").datum(k.filter(function(a){return!a.disabled}));H.transition().call(f),q&&(g.scale(d)._ticks(a.utils.calcTicksX(B/100,k)).tickSize(-C,0),G.select(".nv-x.nv-axis").attr("transform","translate(0,"+e.range()[0]+")"),G.select(".nv-x.nv-axis").transition().call(g)),r&&(h.scale(e)._ticks(a.utils.calcTicksY(C/36,k)).tickSize(-B,0),G.select(".nv-y.nv-axis").transition().call(h)),j.dispatch.on("elementMousemove",function(b){f.clearHighlights();var d,e,i,n=[];k.filter(function(a,b){return a.seriesIndex=b,!a.disabled}).forEach(function(g){e=a.interactiveBisect(g.values,b.pointXValue,c.x()),f.highlightPoint(e,!0);var h=g.values[e];void 0!==h&&(void 0===d&&(d=h),void 0===i&&(i=c.xScale()(c.x()(h,e))),n.push({key:g.key,value:c.y()(h,e),color:m(g,g.seriesIndex),data:g.values[e]}))});var o=g.tickFormat()(c.x()(d,e));j.tooltip.position({left:i+l.left,top:b.mouseY+l.top}).chartContainer(A.parentNode).valueFormatter(function(a){return h.tickFormat()(a)}).data({value:o,index:e,series:n})(),j.renderGuideLine(i)}),j.dispatch.on("elementMouseout",function(){x.tooltipHide(),f.clearHighlights()}),i.dispatch.on("legendClick",function(a){a.disabled=!a.disabled,k.filter(function(a){return!a.disabled}).length||k.map(function(a){return a.disabled=!1,E.selectAll(".nv-series").classed("disabled",!1),a}),u.disabled=k.map(function(a){return!!a.disabled}),x.stateChange(u),b.transition().call(c)}),i.dispatch.on("legendDblclick",function(a){k.forEach(function(a){a.disabled=!0}),a.disabled=!1,u.disabled=k.map(function(a){return!!a.disabled}),x.stateChange(u),c.update()}),x.on("changeState",function(a){"undefined"!=typeof a.disabled&&(k.forEach(function(b,c){b.disabled=a.disabled[c]}),u.disabled=a.disabled),c.update()})}),z.renderEnd("historicalBarChart immediate"),c}var d,e,f=b||a.models.historicalBar(),g=a.models.axis(),h=a.models.axis(),i=a.models.legend(),j=a.interactiveGuideline(),k=a.models.tooltip(),l={top:30,right:90,bottom:50,left:90},m=a.utils.defaultColor(),n=null,o=null,p=!1,q=!0,r=!0,s=!1,t=!1,u={},v=null,w=null,x=d3.dispatch("tooltipHide","stateChange","changeState","renderEnd"),y=250;g.orient("bottom").tickPadding(7),h.orient(s?"right":"left"),k.duration(0).headerEnabled(!1).valueFormatter(function(a,b){return h.tickFormat()(a,b)}).headerFormatter(function(a,b){return g.tickFormat()(a,b)});var z=a.utils.renderWatch(x,0);return f.dispatch.on("elementMouseover.tooltip",function(a){a.series={key:c.x()(a.data),value:c.y()(a.data),color:a.color},k.data(a).hidden(!1)}),f.dispatch.on("elementMouseout.tooltip",function(){k.hidden(!0)}),f.dispatch.on("elementMousemove.tooltip",function(){k.position({top:d3.event.pageY,left:d3.event.pageX})()}),c.dispatch=x,c.bars=f,c.legend=i,c.xAxis=g,c.yAxis=h,c.interactiveLayer=j,c.tooltip=k,c.options=a.utils.optionsFunc.bind(c),c._options=Object.create({},{width:{get:function(){return n},set:function(a){n=a}},height:{get:function(){return o},set:function(a){o=a}},showLegend:{get:function(){return p},set:function(a){p=a}},showXAxis:{get:function(){return q},set:function(a){q=a}},showYAxis:{get:function(){return r},set:function(a){r=a}},defaultState:{get:function(){return v},set:function(a){v=a}},noData:{get:function(){return w},set:function(a){w=a}},tooltips:{get:function(){return k.enabled()},set:function(b){a.deprecated("tooltips","use chart.tooltip.enabled() instead"),k.enabled(!!b)}},tooltipContent:{get:function(){return k.contentGenerator()},set:function(b){a.deprecated("tooltipContent","use chart.tooltip.contentGenerator() instead"),k.contentGenerator(b)}},margin:{get:function(){return l},set:function(a){l.top=void 0!==a.top?a.top:l.top,l.right=void 0!==a.right?a.right:l.right,l.bottom=void 0!==a.bottom?a.bottom:l.bottom,l.left=void 0!==a.left?a.left:l.left}},color:{get:function(){return m},set:function(b){m=a.utils.getColor(b),i.color(m),f.color(m)}},duration:{get:function(){return y},set:function(a){y=a,z.reset(y),h.duration(y),g.duration(y)}},rightAlignYAxis:{get:function(){return s},set:function(a){s=a,h.orient(a?"right":"left")}},useInteractiveGuideline:{get:function(){return t},set:function(a){t=a,a===!0&&c.interactive(!1)}}}),a.utils.inheritOptions(c,f),a.utils.initOptions(c),c},a.models.ohlcBarChart=function(){var b=a.models.historicalBarChart(a.models.ohlcBar());return b.useInteractiveGuideline(!0),b.interactiveLayer.tooltip.contentGenerator(function(a){var c=a.series[0].data,d=c.open<c.close?"2ca02c":"d62728";return'<h3 style="color: #'+d+'">'+a.value+"</h3><table><tr><td>open:</td><td>"+b.yAxis.tickFormat()(c.open)+"</td></tr><tr><td>close:</td><td>"+b.yAxis.tickFormat()(c.close)+"</td></tr><tr><td>high</td><td>"+b.yAxis.tickFormat()(c.high)+"</td></tr><tr><td>low:</td><td>"+b.yAxis.tickFormat()(c.low)+"</td></tr></table>"}),b},a.models.candlestickBarChart=function(){var b=a.models.historicalBarChart(a.models.candlestickBar());return b.useInteractiveGuideline(!0),b.interactiveLayer.tooltip.contentGenerator(function(a){var c=a.series[0].data,d=c.open<c.close?"2ca02c":"d62728";return'<h3 style="color: #'+d+'">'+a.value+"</h3><table><tr><td>open:</td><td>"+b.yAxis.tickFormat()(c.open)+"</td></tr><tr><td>close:</td><td>"+b.yAxis.tickFormat()(c.close)+"</td></tr><tr><td>high</td><td>"+b.yAxis.tickFormat()(c.high)+"</td></tr><tr><td>low:</td><td>"+b.yAxis.tickFormat()(c.low)+"</td></tr></table>"}),b},a.models.legend=function(){"use strict";function b(p){function q(a,b){return"furious"!=o?"#000":m?a.disengaged?"#000":"#fff":m?void 0:(a.color||(a.color=g(a,b)),a.disabled?a.color:"#fff")}function r(a,b){return m&&"furious"==o&&a.disengaged?"#eee":a.color||g(a,b)}function s(a){return m&&"furious"==o?1:a.disabled?0:1}return p.each(function(b){var g=d-c.left-c.right,p=d3.select(this);a.utils.initSVG(p);var t=p.selectAll("g.nv-legend").data([b]),u=t.enter().append("g").attr("class","nvd3 nv-legend").append("g"),v=t.select("g");t.attr("transform","translate("+c.left+","+c.top+")");var w,x,y=v.selectAll(".nv-series").data(function(a){return"furious"!=o?a:a.filter(function(a){return m?!0:!a.disengaged})}),z=y.enter().append("g").attr("class","nv-series");switch(o){case"furious":x=23;break;case"classic":x=20}if("classic"==o)z.append("circle").style("stroke-width",2).attr("class","nv-legend-symbol").attr("r",5),w=y.select("circle");else if("furious"==o){z.append("rect").style("stroke-width",2).attr("class","nv-legend-symbol").attr("rx",3).attr("ry",3),w=y.select(".nv-legend-symbol"),z.append("g").attr("class","nv-check-box").property("innerHTML",'<path d="M0.5,5 L22.5,5 L22.5,26.5 L0.5,26.5 L0.5,5 Z" class="nv-box"></path><path d="M5.5,12.8618467 L11.9185089,19.2803556 L31,0.198864511" class="nv-check"></path>').attr("transform","translate(-10,-8)scale(0.5)");var A=y.select(".nv-check-box");A.each(function(a,b){d3.select(this).selectAll("path").attr("stroke",q(a,b))})}z.append("text").attr("text-anchor","start").attr("class","nv-legend-text").attr("dy",".32em").attr("dx","8");var B=y.select("text.nv-legend-text");y.on("mouseover",function(a,b){n.legendMouseover(a,b)}).on("mouseout",function(a,b){n.legendMouseout(a,b)}).on("click",function(a,b){n.legendClick(a,b);var c=y.data();if(k){if("classic"==o)l?(c.forEach(function(a){a.disabled=!0}),a.disabled=!1):(a.disabled=!a.disabled,c.every(function(a){return a.disabled})&&c.forEach(function(a){a.disabled=!1}));else if("furious"==o)if(m)a.disengaged=!a.disengaged,a.userDisabled=void 0==a.userDisabled?!!a.disabled:a.userDisabled,a.disabled=a.disengaged||a.userDisabled;else if(!m){a.disabled=!a.disabled,a.userDisabled=a.disabled;var d=c.filter(function(a){return!a.disengaged});d.every(function(a){return a.userDisabled})&&c.forEach(function(a){a.disabled=a.userDisabled=!1})}n.stateChange({disabled:c.map(function(a){return!!a.disabled}),disengaged:c.map(function(a){return!!a.disengaged})})}}).on("dblclick",function(a,b){if(("furious"!=o||!m)&&(n.legendDblclick(a,b),k)){var c=y.data();c.forEach(function(a){a.disabled=!0,"furious"==o&&(a.userDisabled=a.disabled)}),a.disabled=!1,"furious"==o&&(a.userDisabled=a.disabled),n.stateChange({disabled:c.map(function(a){return!!a.disabled})})}}),y.classed("nv-disabled",function(a){return a.userDisabled}),y.exit().remove(),B.attr("fill",q).text(f);var C=0;if(h){var D=[];y.each(function(){var b,c=d3.select(this).select("text");try{if(b=c.node().getComputedTextLength(),0>=b)throw Error()}catch(d){b=a.utils.calcApproxTextWidth(c)}D.push(b+i)});var E=0,F=[];for(C=0;g>C&&E<D.length;)F[E]=D[E],C+=D[E++];for(0===E&&(E=1);C>g&&E>1;){F=[],E--;for(var G=0;G<D.length;G++)D[G]>(F[G%E]||0)&&(F[G%E]=D[G]);C=F.reduce(function(a,b){return a+b})}for(var H=[],I=0,J=0;E>I;I++)H[I]=J,J+=F[I];y.attr("transform",function(a,b){return"translate("+H[b%E]+","+(5+Math.floor(b/E)*x)+")"}),j?v.attr("transform","translate("+(d-c.right-C)+","+c.top+")"):v.attr("transform","translate(0,"+c.top+")"),e=c.top+c.bottom+Math.ceil(D.length/E)*x}else{var K,L=5,M=5,N=0;y.attr("transform",function(){var a=d3.select(this).select("text").node().getComputedTextLength()+i;return K=M,d<c.left+c.right+K+a&&(M=K=5,L+=x),M+=a,M>N&&(N=M),K+N>C&&(C=K+N),"translate("+K+","+L+")"}),v.attr("transform","translate("+(d-c.right-N)+","+c.top+")"),e=c.top+c.bottom+L+15}if("furious"==o){w.attr("width",function(a,b){return B[0][b].getComputedTextLength()+27}).attr("height",18).attr("y",-9).attr("x",-15),u.insert("rect",":first-child").attr("class","nv-legend-bg").attr("fill","#eee").attr("opacity",0);var O=v.select(".nv-legend-bg");O.transition().duration(300).attr("x",-x).attr("width",C+x-12).attr("height",e+10).attr("y",-c.top-10).attr("opacity",m?1:0)}w.style("fill",r).style("fill-opacity",s).style("stroke",r)}),b}var c={top:5,right:0,bottom:5,left:0},d=400,e=20,f=function(a){return a.key},g=a.utils.getColor(),h=!0,i=32,j=!0,k=!0,l=!1,m=!1,n=d3.dispatch("legendClick","legendDblclick","legendMouseover","legendMouseout","stateChange"),o="classic";return b.dispatch=n,b.options=a.utils.optionsFunc.bind(b),b._options=Object.create({},{width:{get:function(){return d},set:function(a){d=a}},height:{get:function(){return e},set:function(a){e=a}},key:{get:function(){return f},set:function(a){f=a}},align:{get:function(){return h},set:function(a){h=a}},rightAlign:{get:function(){return j},set:function(a){j=a}},padding:{get:function(){return i},set:function(a){i=a}},updateState:{get:function(){return k},set:function(a){k=a}},radioButtonMode:{get:function(){return l},set:function(a){l=a}},expanded:{get:function(){return m},set:function(a){m=a}},vers:{get:function(){return o},set:function(a){o=a}},margin:{get:function(){return c},set:function(a){c.top=void 0!==a.top?a.top:c.top,c.right=void 0!==a.right?a.right:c.right,c.bottom=void 0!==a.bottom?a.bottom:c.bottom,c.left=void 0!==a.left?a.left:c.left}},color:{get:function(){return g},set:function(b){g=a.utils.getColor(b)}}}),a.utils.initOptions(b),b},a.models.line=function(){"use strict";function b(r){return v.reset(),v.models(e),r.each(function(b){i=d3.select(this);var r=a.utils.availableWidth(g,i,f),s=a.utils.availableHeight(h,i,f);a.utils.initSVG(i),c=e.xScale(),d=e.yScale(),t=t||c,u=u||d;var w=i.selectAll("g.nv-wrap.nv-line").data([b]),x=w.enter().append("g").attr("class","nvd3 nv-wrap nv-line"),y=x.append("defs"),z=x.append("g"),A=w.select("g");z.append("g").attr("class","nv-groups"),z.append("g").attr("class","nv-scatterWrap"),w.attr("transform","translate("+f.left+","+f.top+")"),e.width(r).height(s);var B=w.select(".nv-scatterWrap");B.call(e),y.append("clipPath").attr("id","nv-edge-clip-"+e.id()).append("rect"),w.select("#nv-edge-clip-"+e.id()+" rect").attr("width",r).attr("height",s>0?s:0),A.attr("clip-path",p?"url(#nv-edge-clip-"+e.id()+")":""),B.attr("clip-path",p?"url(#nv-edge-clip-"+e.id()+")":"");var C=w.select(".nv-groups").selectAll(".nv-group").data(function(a){return a},function(a){return a.key});C.enter().append("g").style("stroke-opacity",1e-6).style("stroke-width",function(a){return a.strokeWidth||j}).style("fill-opacity",1e-6),C.exit().remove(),C.attr("class",function(a,b){return(a.classed||"")+" nv-group nv-series-"+b}).classed("hover",function(a){return a.hover}).style("fill",function(a,b){return k(a,b)}).style("stroke",function(a,b){return k(a,b)}),C.watchTransition(v,"line: groups").style("stroke-opacity",1).style("fill-opacity",function(a){return a.fillOpacity||.5});var D=C.selectAll("path.nv-area").data(function(a){return o(a)?[a]:[]});D.enter().append("path").attr("class","nv-area").attr("d",function(b){return d3.svg.area().interpolate(q).defined(n).x(function(b,c){return a.utils.NaNtoZero(t(l(b,c)))}).y0(function(b,c){return a.utils.NaNtoZero(u(m(b,c)))}).y1(function(){return u(d.domain()[0]<=0?d.domain()[1]>=0?0:d.domain()[1]:d.domain()[0])}).apply(this,[b.values])}),C.exit().selectAll("path.nv-area").remove(),D.watchTransition(v,"line: areaPaths").attr("d",function(b){return d3.svg.area().interpolate(q).defined(n).x(function(b,d){return a.utils.NaNtoZero(c(l(b,d)))}).y0(function(b,c){return a.utils.NaNtoZero(d(m(b,c)))}).y1(function(){return d(d.domain()[0]<=0?d.domain()[1]>=0?0:d.domain()[1]:d.domain()[0])}).apply(this,[b.values])});var E=C.selectAll("path.nv-line").data(function(a){return[a.values]});E.enter().append("path").attr("class","nv-line").attr("d",d3.svg.line().interpolate(q).defined(n).x(function(b,c){return a.utils.NaNtoZero(t(l(b,c)))}).y(function(b,c){return a.utils.NaNtoZero(u(m(b,c)))})),E.watchTransition(v,"line: linePaths").attr("d",d3.svg.line().interpolate(q).defined(n).x(function(b,d){return a.utils.NaNtoZero(c(l(b,d)))}).y(function(b,c){return a.utils.NaNtoZero(d(m(b,c)))})),t=c.copy(),u=d.copy()}),v.renderEnd("line immediate"),b}var c,d,e=a.models.scatter(),f={top:0,right:0,bottom:0,left:0},g=960,h=500,i=null,j=1.5,k=a.utils.defaultColor(),l=function(a){return a.x},m=function(a){return a.y},n=function(a,b){return!isNaN(m(a,b))&&null!==m(a,b)},o=function(a){return a.area},p=!1,q="linear",r=250,s=d3.dispatch("elementClick","elementMouseover","elementMouseout","renderEnd");e.pointSize(16).pointDomain([16,256]);var t,u,v=a.utils.renderWatch(s,r);return b.dispatch=s,b.scatter=e,e.dispatch.on("elementClick",function(){s.elementClick.apply(this,arguments)}),e.dispatch.on("elementMouseover",function(){s.elementMouseover.apply(this,arguments)}),e.dispatch.on("elementMouseout",function(){s.elementMouseout.apply(this,arguments)}),b.options=a.utils.optionsFunc.bind(b),b._options=Object.create({},{width:{get:function(){return g},set:function(a){g=a}},height:{get:function(){return h},set:function(a){h=a}},defined:{get:function(){return n},set:function(a){n=a}},interpolate:{get:function(){return q},set:function(a){q=a}},clipEdge:{get:function(){return p},set:function(a){p=a}},margin:{get:function(){return f},set:function(a){f.top=void 0!==a.top?a.top:f.top,f.right=void 0!==a.right?a.right:f.right,f.bottom=void 0!==a.bottom?a.bottom:f.bottom,f.left=void 0!==a.left?a.left:f.left}},duration:{get:function(){return r},set:function(a){r=a,v.reset(r),e.duration(r)}},isArea:{get:function(){return o},set:function(a){o=d3.functor(a)}},x:{get:function(){return l},set:function(a){l=a,e.x(a)}},y:{get:function(){return m},set:function(a){m=a,e.y(a)}},color:{get:function(){return k},set:function(b){k=a.utils.getColor(b),e.color(k)}}}),a.utils.inheritOptions(b,e),a.utils.initOptions(b),b},a.models.lineChart=function(){"use strict";function b(j){return y.reset(),y.models(e),p&&y.models(f),q&&y.models(g),j.each(function(j){var v=d3.select(this),y=this;a.utils.initSVG(v);var B=a.utils.availableWidth(m,v,k),C=a.utils.availableHeight(n,v,k);if(b.update=function(){0===x?v.call(b):v.transition().duration(x).call(b)},b.container=this,t.setter(A(j),b.update).getter(z(j)).update(),t.disabled=j.map(function(a){return!!a.disabled}),!u){var D;u={};for(D in t)u[D]=t[D]instanceof Array?t[D].slice(0):t[D]
}if(!(j&&j.length&&j.filter(function(a){return a.values.length}).length))return a.utils.noData(b,v),b;v.selectAll(".nv-noData").remove(),c=e.xScale(),d=e.yScale();var E=v.selectAll("g.nv-wrap.nv-lineChart").data([j]),F=E.enter().append("g").attr("class","nvd3 nv-wrap nv-lineChart").append("g"),G=E.select("g");F.append("rect").style("opacity",0),F.append("g").attr("class","nv-x nv-axis"),F.append("g").attr("class","nv-y nv-axis"),F.append("g").attr("class","nv-linesWrap"),F.append("g").attr("class","nv-legendWrap"),F.append("g").attr("class","nv-interactive"),G.select("rect").attr("width",B).attr("height",C>0?C:0),o&&(h.width(B),G.select(".nv-legendWrap").datum(j).call(h),k.top!=h.height()&&(k.top=h.height(),C=a.utils.availableHeight(n,v,k)),E.select(".nv-legendWrap").attr("transform","translate(0,"+-k.top+")")),E.attr("transform","translate("+k.left+","+k.top+")"),r&&G.select(".nv-y.nv-axis").attr("transform","translate("+B+",0)"),s&&(i.width(B).height(C).margin({left:k.left,top:k.top}).svgContainer(v).xScale(c),E.select(".nv-interactive").call(i)),e.width(B).height(C).color(j.map(function(a,b){return a.color||l(a,b)}).filter(function(a,b){return!j[b].disabled}));var H=G.select(".nv-linesWrap").datum(j.filter(function(a){return!a.disabled}));H.call(e),p&&(f.scale(c)._ticks(a.utils.calcTicksX(B/100,j)).tickSize(-C,0),G.select(".nv-x.nv-axis").attr("transform","translate(0,"+d.range()[0]+")"),G.select(".nv-x.nv-axis").call(f)),q&&(g.scale(d)._ticks(a.utils.calcTicksY(C/36,j)).tickSize(-B,0),G.select(".nv-y.nv-axis").call(g)),h.dispatch.on("stateChange",function(a){for(var c in a)t[c]=a[c];w.stateChange(t),b.update()}),i.dispatch.on("elementMousemove",function(c){e.clearHighlights();var d,h,m,n=[];if(j.filter(function(a,b){return a.seriesIndex=b,!a.disabled}).forEach(function(f,g){h=a.interactiveBisect(f.values,c.pointXValue,b.x());var i=f.values[h],j=b.y()(i,h);null!=j&&e.highlightPoint(g,h,!0),void 0!==i&&(void 0===d&&(d=i),void 0===m&&(m=b.xScale()(b.x()(i,h))),n.push({key:f.key,value:j,color:l(f,f.seriesIndex)}))}),n.length>2){var o=b.yScale().invert(c.mouseY),p=Math.abs(b.yScale().domain()[0]-b.yScale().domain()[1]),q=.03*p,r=a.nearestValueIndex(n.map(function(a){return a.value}),o,q);null!==r&&(n[r].highlight=!0)}var s=f.tickFormat()(b.x()(d,h));i.tooltip.position({left:c.mouseX+k.left,top:c.mouseY+k.top}).chartContainer(y.parentNode).valueFormatter(function(a){return null==a?"N/A":g.tickFormat()(a)}).data({value:s,index:h,series:n})(),i.renderGuideLine(m)}),i.dispatch.on("elementClick",function(c){var d,f=[];j.filter(function(a,b){return a.seriesIndex=b,!a.disabled}).forEach(function(e){var g=a.interactiveBisect(e.values,c.pointXValue,b.x()),h=e.values[g];if("undefined"!=typeof h){"undefined"==typeof d&&(d=b.xScale()(b.x()(h,g)));var i=b.yScale()(b.y()(h,g));f.push({point:h,pointIndex:g,pos:[d,i],seriesIndex:e.seriesIndex,series:e})}}),e.dispatch.elementClick(f)}),i.dispatch.on("elementMouseout",function(){e.clearHighlights()}),w.on("changeState",function(a){"undefined"!=typeof a.disabled&&j.length===a.disabled.length&&(j.forEach(function(b,c){b.disabled=a.disabled[c]}),t.disabled=a.disabled),b.update()})}),y.renderEnd("lineChart immediate"),b}var c,d,e=a.models.line(),f=a.models.axis(),g=a.models.axis(),h=a.models.legend(),i=a.interactiveGuideline(),j=a.models.tooltip(),k={top:30,right:20,bottom:50,left:60},l=a.utils.defaultColor(),m=null,n=null,o=!0,p=!0,q=!0,r=!1,s=!1,t=a.utils.state(),u=null,v=null,w=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState","renderEnd"),x=250;f.orient("bottom").tickPadding(7),g.orient(r?"right":"left"),j.valueFormatter(function(a,b){return g.tickFormat()(a,b)}).headerFormatter(function(a,b){return f.tickFormat()(a,b)});var y=a.utils.renderWatch(w,x),z=function(a){return function(){return{active:a.map(function(a){return!a.disabled})}}},A=function(a){return function(b){void 0!==b.active&&a.forEach(function(a,c){a.disabled=!b.active[c]})}};return e.dispatch.on("elementMouseover.tooltip",function(a){j.data(a).position(a.pos).hidden(!1)}),e.dispatch.on("elementMouseout.tooltip",function(){j.hidden(!0)}),b.dispatch=w,b.lines=e,b.legend=h,b.xAxis=f,b.yAxis=g,b.interactiveLayer=i,b.tooltip=j,b.dispatch=w,b.options=a.utils.optionsFunc.bind(b),b._options=Object.create({},{width:{get:function(){return m},set:function(a){m=a}},height:{get:function(){return n},set:function(a){n=a}},showLegend:{get:function(){return o},set:function(a){o=a}},showXAxis:{get:function(){return p},set:function(a){p=a}},showYAxis:{get:function(){return q},set:function(a){q=a}},defaultState:{get:function(){return u},set:function(a){u=a}},noData:{get:function(){return v},set:function(a){v=a}},tooltips:{get:function(){return j.enabled()},set:function(b){a.deprecated("tooltips","use chart.tooltip.enabled() instead"),j.enabled(!!b)}},tooltipContent:{get:function(){return j.contentGenerator()},set:function(b){a.deprecated("tooltipContent","use chart.tooltip.contentGenerator() instead"),j.contentGenerator(b)}},margin:{get:function(){return k},set:function(a){k.top=void 0!==a.top?a.top:k.top,k.right=void 0!==a.right?a.right:k.right,k.bottom=void 0!==a.bottom?a.bottom:k.bottom,k.left=void 0!==a.left?a.left:k.left}},duration:{get:function(){return x},set:function(a){x=a,y.reset(x),e.duration(x),f.duration(x),g.duration(x)}},color:{get:function(){return l},set:function(b){l=a.utils.getColor(b),h.color(l),e.color(l)}},rightAlignYAxis:{get:function(){return r},set:function(a){r=a,g.orient(r?"right":"left")}},useInteractiveGuideline:{get:function(){return s},set:function(a){s=a,s&&(e.interactive(!1),e.useVoronoi(!1))}}}),a.utils.inheritOptions(b,e),a.utils.initOptions(b),b},a.models.linePlusBarChart=function(){"use strict";function b(v){return v.each(function(v){function J(a){var b=+("e"==a),c=b?1:-1,d=X/3;return"M"+.5*c+","+d+"A6,6 0 0 "+b+" "+6.5*c+","+(d+6)+"V"+(2*d-6)+"A6,6 0 0 "+b+" "+.5*c+","+2*d+"ZM"+2.5*c+","+(d+8)+"V"+(2*d-8)+"M"+4.5*c+","+(d+8)+"V"+(2*d-8)}function S(){u.empty()||u.extent(I),kb.data([u.empty()?e.domain():I]).each(function(a){var b=e(a[0])-e.range()[0],c=e.range()[1]-e(a[1]);d3.select(this).select(".left").attr("width",0>b?0:b),d3.select(this).select(".right").attr("x",e(a[1])).attr("width",0>c?0:c)})}function T(){I=u.empty()?null:u.extent(),c=u.empty()?e.domain():u.extent(),K.brush({extent:c,brush:u}),S(),l.width(V).height(W).color(v.map(function(a,b){return a.color||C(a,b)}).filter(function(a,b){return!v[b].disabled&&v[b].bar})),j.width(V).height(W).color(v.map(function(a,b){return a.color||C(a,b)}).filter(function(a,b){return!v[b].disabled&&!v[b].bar}));var b=db.select(".nv-focus .nv-barsWrap").datum(Z.length?Z.map(function(a){return{key:a.key,values:a.values.filter(function(a,b){return l.x()(a,b)>=c[0]&&l.x()(a,b)<=c[1]})}}):[{values:[]}]),h=db.select(".nv-focus .nv-linesWrap").datum($[0].disabled?[{values:[]}]:$.map(function(a){return{area:a.area,fillOpacity:a.fillOpacity,key:a.key,values:a.values.filter(function(a,b){return j.x()(a,b)>=c[0]&&j.x()(a,b)<=c[1]})}}));d=Z.length?l.xScale():j.xScale(),n.scale(d)._ticks(a.utils.calcTicksX(V/100,v)).tickSize(-W,0),n.domain([Math.ceil(c[0]),Math.floor(c[1])]),db.select(".nv-x.nv-axis").transition().duration(L).call(n),b.transition().duration(L).call(l),h.transition().duration(L).call(j),db.select(".nv-focus .nv-x.nv-axis").attr("transform","translate(0,"+f.range()[0]+")"),p.scale(f)._ticks(a.utils.calcTicksY(W/36,v)).tickSize(-V,0),q.scale(g)._ticks(a.utils.calcTicksY(W/36,v)).tickSize(Z.length?0:-V,0),db.select(".nv-focus .nv-y1.nv-axis").style("opacity",Z.length?1:0),db.select(".nv-focus .nv-y2.nv-axis").style("opacity",$.length&&!$[0].disabled?1:0).attr("transform","translate("+d.range()[1]+",0)"),db.select(".nv-focus .nv-y1.nv-axis").transition().duration(L).call(p),db.select(".nv-focus .nv-y2.nv-axis").transition().duration(L).call(q)}var U=d3.select(this);a.utils.initSVG(U);var V=a.utils.availableWidth(y,U,w),W=a.utils.availableHeight(z,U,w)-(E?H:0),X=H-x.top-x.bottom;if(b.update=function(){U.transition().duration(L).call(b)},b.container=this,M.setter(R(v),b.update).getter(Q(v)).update(),M.disabled=v.map(function(a){return!!a.disabled}),!N){var Y;N={};for(Y in M)N[Y]=M[Y]instanceof Array?M[Y].slice(0):M[Y]}if(!(v&&v.length&&v.filter(function(a){return a.values.length}).length))return a.utils.noData(b,U),b;U.selectAll(".nv-noData").remove();var Z=v.filter(function(a){return!a.disabled&&a.bar}),$=v.filter(function(a){return!a.bar});d=l.xScale(),e=o.scale(),f=l.yScale(),g=j.yScale(),h=m.yScale(),i=k.yScale();var _=v.filter(function(a){return!a.disabled&&a.bar}).map(function(a){return a.values.map(function(a,b){return{x:A(a,b),y:B(a,b)}})}),ab=v.filter(function(a){return!a.disabled&&!a.bar}).map(function(a){return a.values.map(function(a,b){return{x:A(a,b),y:B(a,b)}})});d.range([0,V]),e.domain(d3.extent(d3.merge(_.concat(ab)),function(a){return a.x})).range([0,V]);var bb=U.selectAll("g.nv-wrap.nv-linePlusBar").data([v]),cb=bb.enter().append("g").attr("class","nvd3 nv-wrap nv-linePlusBar").append("g"),db=bb.select("g");cb.append("g").attr("class","nv-legendWrap");var eb=cb.append("g").attr("class","nv-focus");eb.append("g").attr("class","nv-x nv-axis"),eb.append("g").attr("class","nv-y1 nv-axis"),eb.append("g").attr("class","nv-y2 nv-axis"),eb.append("g").attr("class","nv-barsWrap"),eb.append("g").attr("class","nv-linesWrap");var fb=cb.append("g").attr("class","nv-context");if(fb.append("g").attr("class","nv-x nv-axis"),fb.append("g").attr("class","nv-y1 nv-axis"),fb.append("g").attr("class","nv-y2 nv-axis"),fb.append("g").attr("class","nv-barsWrap"),fb.append("g").attr("class","nv-linesWrap"),fb.append("g").attr("class","nv-brushBackground"),fb.append("g").attr("class","nv-x nv-brush"),D){var gb=t.align()?V/2:V,hb=t.align()?gb:0;t.width(gb),db.select(".nv-legendWrap").datum(v.map(function(a){return a.originalKey=void 0===a.originalKey?a.key:a.originalKey,a.key=a.originalKey+(a.bar?O:P),a})).call(t),w.top!=t.height()&&(w.top=t.height(),W=a.utils.availableHeight(z,U,w)-H),db.select(".nv-legendWrap").attr("transform","translate("+hb+","+-w.top+")")}bb.attr("transform","translate("+w.left+","+w.top+")"),db.select(".nv-context").style("display",E?"initial":"none"),m.width(V).height(X).color(v.map(function(a,b){return a.color||C(a,b)}).filter(function(a,b){return!v[b].disabled&&v[b].bar})),k.width(V).height(X).color(v.map(function(a,b){return a.color||C(a,b)}).filter(function(a,b){return!v[b].disabled&&!v[b].bar}));var ib=db.select(".nv-context .nv-barsWrap").datum(Z.length?Z:[{values:[]}]),jb=db.select(".nv-context .nv-linesWrap").datum($[0].disabled?[{values:[]}]:$);db.select(".nv-context").attr("transform","translate(0,"+(W+w.bottom+x.top)+")"),ib.transition().call(m),jb.transition().call(k),G&&(o._ticks(a.utils.calcTicksX(V/100,v)).tickSize(-X,0),db.select(".nv-context .nv-x.nv-axis").attr("transform","translate(0,"+h.range()[0]+")"),db.select(".nv-context .nv-x.nv-axis").transition().call(o)),F&&(r.scale(h)._ticks(X/36).tickSize(-V,0),s.scale(i)._ticks(X/36).tickSize(Z.length?0:-V,0),db.select(".nv-context .nv-y3.nv-axis").style("opacity",Z.length?1:0).attr("transform","translate(0,"+e.range()[0]+")"),db.select(".nv-context .nv-y2.nv-axis").style("opacity",$.length?1:0).attr("transform","translate("+e.range()[1]+",0)"),db.select(".nv-context .nv-y1.nv-axis").transition().call(r),db.select(".nv-context .nv-y2.nv-axis").transition().call(s)),u.x(e).on("brush",T),I&&u.extent(I);var kb=db.select(".nv-brushBackground").selectAll("g").data([I||u.extent()]),lb=kb.enter().append("g");lb.append("rect").attr("class","left").attr("x",0).attr("y",0).attr("height",X),lb.append("rect").attr("class","right").attr("x",0).attr("y",0).attr("height",X);var mb=db.select(".nv-x.nv-brush").call(u);mb.selectAll("rect").attr("height",X),mb.selectAll(".resize").append("path").attr("d",J),t.dispatch.on("stateChange",function(a){for(var c in a)M[c]=a[c];K.stateChange(M),b.update()}),K.on("changeState",function(a){"undefined"!=typeof a.disabled&&(v.forEach(function(b,c){b.disabled=a.disabled[c]}),M.disabled=a.disabled),b.update()}),T()}),b}var c,d,e,f,g,h,i,j=a.models.line(),k=a.models.line(),l=a.models.historicalBar(),m=a.models.historicalBar(),n=a.models.axis(),o=a.models.axis(),p=a.models.axis(),q=a.models.axis(),r=a.models.axis(),s=a.models.axis(),t=a.models.legend(),u=d3.svg.brush(),v=a.models.tooltip(),w={top:30,right:30,bottom:30,left:60},x={top:0,right:30,bottom:20,left:60},y=null,z=null,A=function(a){return a.x},B=function(a){return a.y},C=a.utils.defaultColor(),D=!0,E=!0,F=!1,G=!0,H=50,I=null,J=null,K=d3.dispatch("brush","stateChange","changeState"),L=0,M=a.utils.state(),N=null,O=" (left axis)",P=" (right axis)";j.clipEdge(!0),k.interactive(!1),n.orient("bottom").tickPadding(5),p.orient("left"),q.orient("right"),o.orient("bottom").tickPadding(5),r.orient("left"),s.orient("right"),v.headerEnabled(!0).headerFormatter(function(a,b){return n.tickFormat()(a,b)});var Q=function(a){return function(){return{active:a.map(function(a){return!a.disabled})}}},R=function(a){return function(b){void 0!==b.active&&a.forEach(function(a,c){a.disabled=!b.active[c]})}};return j.dispatch.on("elementMouseover.tooltip",function(a){v.duration(100).valueFormatter(function(a,b){return q.tickFormat()(a,b)}).data(a).position(a.pos).hidden(!1)}),j.dispatch.on("elementMouseout.tooltip",function(){v.hidden(!0)}),l.dispatch.on("elementMouseover.tooltip",function(a){a.value=b.x()(a.data),a.series={value:b.y()(a.data),color:a.color},v.duration(0).valueFormatter(function(a,b){return p.tickFormat()(a,b)}).data(a).hidden(!1)}),l.dispatch.on("elementMouseout.tooltip",function(){v.hidden(!0)}),l.dispatch.on("elementMousemove.tooltip",function(){v.position({top:d3.event.pageY,left:d3.event.pageX})()}),b.dispatch=K,b.legend=t,b.lines=j,b.lines2=k,b.bars=l,b.bars2=m,b.xAxis=n,b.x2Axis=o,b.y1Axis=p,b.y2Axis=q,b.y3Axis=r,b.y4Axis=s,b.tooltip=v,b.options=a.utils.optionsFunc.bind(b),b._options=Object.create({},{width:{get:function(){return y},set:function(a){y=a}},height:{get:function(){return z},set:function(a){z=a}},showLegend:{get:function(){return D},set:function(a){D=a}},brushExtent:{get:function(){return I},set:function(a){I=a}},noData:{get:function(){return J},set:function(a){J=a}},focusEnable:{get:function(){return E},set:function(a){E=a}},focusHeight:{get:function(){return H},set:function(a){H=a}},focusShowAxisX:{get:function(){return G},set:function(a){G=a}},focusShowAxisY:{get:function(){return F},set:function(a){F=a}},legendLeftAxisHint:{get:function(){return O},set:function(a){O=a}},legendRightAxisHint:{get:function(){return P},set:function(a){P=a}},tooltips:{get:function(){return v.enabled()},set:function(b){a.deprecated("tooltips","use chart.tooltip.enabled() instead"),v.enabled(!!b)}},tooltipContent:{get:function(){return v.contentGenerator()},set:function(b){a.deprecated("tooltipContent","use chart.tooltip.contentGenerator() instead"),v.contentGenerator(b)}},margin:{get:function(){return w},set:function(a){w.top=void 0!==a.top?a.top:w.top,w.right=void 0!==a.right?a.right:w.right,w.bottom=void 0!==a.bottom?a.bottom:w.bottom,w.left=void 0!==a.left?a.left:w.left}},duration:{get:function(){return L},set:function(a){L=a}},color:{get:function(){return C},set:function(b){C=a.utils.getColor(b),t.color(C)}},x:{get:function(){return A},set:function(a){A=a,j.x(a),k.x(a),l.x(a),m.x(a)}},y:{get:function(){return B},set:function(a){B=a,j.y(a),k.y(a),l.y(a),m.y(a)}}}),a.utils.inheritOptions(b,j),a.utils.initOptions(b),b},a.models.lineWithFocusChart=function(){"use strict";function b(o){return o.each(function(o){function z(a){var b=+("e"==a),c=b?1:-1,d=M/3;return"M"+.5*c+","+d+"A6,6 0 0 "+b+" "+6.5*c+","+(d+6)+"V"+(2*d-6)+"A6,6 0 0 "+b+" "+.5*c+","+2*d+"ZM"+2.5*c+","+(d+8)+"V"+(2*d-8)+"M"+4.5*c+","+(d+8)+"V"+(2*d-8)}function G(){n.empty()||n.extent(y),U.data([n.empty()?e.domain():y]).each(function(a){var b=e(a[0])-c.range()[0],d=K-e(a[1]);d3.select(this).select(".left").attr("width",0>b?0:b),d3.select(this).select(".right").attr("x",e(a[1])).attr("width",0>d?0:d)})}function H(){y=n.empty()?null:n.extent();var a=n.empty()?e.domain():n.extent();if(!(Math.abs(a[0]-a[1])<=1)){A.brush({extent:a,brush:n}),G();var b=Q.select(".nv-focus .nv-linesWrap").datum(o.filter(function(a){return!a.disabled}).map(function(b){return{key:b.key,area:b.area,values:b.values.filter(function(b,c){return g.x()(b,c)>=a[0]&&g.x()(b,c)<=a[1]})}}));b.transition().duration(B).call(g),Q.select(".nv-focus .nv-x.nv-axis").transition().duration(B).call(i),Q.select(".nv-focus .nv-y.nv-axis").transition().duration(B).call(j)}}var I=d3.select(this),J=this;a.utils.initSVG(I);var K=a.utils.availableWidth(t,I,q),L=a.utils.availableHeight(u,I,q)-v,M=v-r.top-r.bottom;if(b.update=function(){I.transition().duration(B).call(b)},b.container=this,C.setter(F(o),b.update).getter(E(o)).update(),C.disabled=o.map(function(a){return!!a.disabled}),!D){var N;D={};for(N in C)D[N]=C[N]instanceof Array?C[N].slice(0):C[N]}if(!(o&&o.length&&o.filter(function(a){return a.values.length}).length))return a.utils.noData(b,I),b;I.selectAll(".nv-noData").remove(),c=g.xScale(),d=g.yScale(),e=h.xScale(),f=h.yScale();var O=I.selectAll("g.nv-wrap.nv-lineWithFocusChart").data([o]),P=O.enter().append("g").attr("class","nvd3 nv-wrap nv-lineWithFocusChart").append("g"),Q=O.select("g");P.append("g").attr("class","nv-legendWrap");var R=P.append("g").attr("class","nv-focus");R.append("g").attr("class","nv-x nv-axis"),R.append("g").attr("class","nv-y nv-axis"),R.append("g").attr("class","nv-linesWrap"),R.append("g").attr("class","nv-interactive");var S=P.append("g").attr("class","nv-context");S.append("g").attr("class","nv-x nv-axis"),S.append("g").attr("class","nv-y nv-axis"),S.append("g").attr("class","nv-linesWrap"),S.append("g").attr("class","nv-brushBackground"),S.append("g").attr("class","nv-x nv-brush"),x&&(m.width(K),Q.select(".nv-legendWrap").datum(o).call(m),q.top!=m.height()&&(q.top=m.height(),L=a.utils.availableHeight(u,I,q)-v),Q.select(".nv-legendWrap").attr("transform","translate(0,"+-q.top+")")),O.attr("transform","translate("+q.left+","+q.top+")"),w&&(p.width(K).height(L).margin({left:q.left,top:q.top}).svgContainer(I).xScale(c),O.select(".nv-interactive").call(p)),g.width(K).height(L).color(o.map(function(a,b){return a.color||s(a,b)}).filter(function(a,b){return!o[b].disabled})),h.defined(g.defined()).width(K).height(M).color(o.map(function(a,b){return a.color||s(a,b)}).filter(function(a,b){return!o[b].disabled})),Q.select(".nv-context").attr("transform","translate(0,"+(L+q.bottom+r.top)+")");var T=Q.select(".nv-context .nv-linesWrap").datum(o.filter(function(a){return!a.disabled}));d3.transition(T).call(h),i.scale(c)._ticks(a.utils.calcTicksX(K/100,o)).tickSize(-L,0),j.scale(d)._ticks(a.utils.calcTicksY(L/36,o)).tickSize(-K,0),Q.select(".nv-focus .nv-x.nv-axis").attr("transform","translate(0,"+L+")"),n.x(e).on("brush",function(){H()}),y&&n.extent(y);var U=Q.select(".nv-brushBackground").selectAll("g").data([y||n.extent()]),V=U.enter().append("g");V.append("rect").attr("class","left").attr("x",0).attr("y",0).attr("height",M),V.append("rect").attr("class","right").attr("x",0).attr("y",0).attr("height",M);var W=Q.select(".nv-x.nv-brush").call(n);W.selectAll("rect").attr("height",M),W.selectAll(".resize").append("path").attr("d",z),H(),k.scale(e)._ticks(a.utils.calcTicksX(K/100,o)).tickSize(-M,0),Q.select(".nv-context .nv-x.nv-axis").attr("transform","translate(0,"+f.range()[0]+")"),d3.transition(Q.select(".nv-context .nv-x.nv-axis")).call(k),l.scale(f)._ticks(a.utils.calcTicksY(M/36,o)).tickSize(-K,0),d3.transition(Q.select(".nv-context .nv-y.nv-axis")).call(l),Q.select(".nv-context .nv-x.nv-axis").attr("transform","translate(0,"+f.range()[0]+")"),m.dispatch.on("stateChange",function(a){for(var c in a)C[c]=a[c];A.stateChange(C),b.update()}),p.dispatch.on("elementMousemove",function(c){g.clearHighlights();var d,f,h,k=[];if(o.filter(function(a,b){return a.seriesIndex=b,!a.disabled}).forEach(function(i,j){var l=n.empty()?e.domain():n.extent(),m=i.values.filter(function(a,b){return g.x()(a,b)>=l[0]&&g.x()(a,b)<=l[1]});f=a.interactiveBisect(m,c.pointXValue,g.x());var o=m[f],p=b.y()(o,f);null!=p&&g.highlightPoint(j,f,!0),void 0!==o&&(void 0===d&&(d=o),void 0===h&&(h=b.xScale()(b.x()(o,f))),k.push({key:i.key,value:b.y()(o,f),color:s(i,i.seriesIndex)}))}),k.length>2){var l=b.yScale().invert(c.mouseY),m=Math.abs(b.yScale().domain()[0]-b.yScale().domain()[1]),r=.03*m,t=a.nearestValueIndex(k.map(function(a){return a.value}),l,r);null!==t&&(k[t].highlight=!0)}var u=i.tickFormat()(b.x()(d,f));p.tooltip.position({left:c.mouseX+q.left,top:c.mouseY+q.top}).chartContainer(J.parentNode).valueFormatter(function(a){return null==a?"N/A":j.tickFormat()(a)}).data({value:u,index:f,series:k})(),p.renderGuideLine(h)}),p.dispatch.on("elementMouseout",function(){g.clearHighlights()}),A.on("changeState",function(a){"undefined"!=typeof a.disabled&&o.forEach(function(b,c){b.disabled=a.disabled[c]}),b.update()})}),b}var c,d,e,f,g=a.models.line(),h=a.models.line(),i=a.models.axis(),j=a.models.axis(),k=a.models.axis(),l=a.models.axis(),m=a.models.legend(),n=d3.svg.brush(),o=a.models.tooltip(),p=a.interactiveGuideline(),q={top:30,right:30,bottom:30,left:60},r={top:0,right:30,bottom:20,left:60},s=a.utils.defaultColor(),t=null,u=null,v=50,w=!1,x=!0,y=null,z=null,A=d3.dispatch("brush","stateChange","changeState"),B=250,C=a.utils.state(),D=null;g.clipEdge(!0).duration(0),h.interactive(!1),i.orient("bottom").tickPadding(5),j.orient("left"),k.orient("bottom").tickPadding(5),l.orient("left"),o.valueFormatter(function(a,b){return j.tickFormat()(a,b)}).headerFormatter(function(a,b){return i.tickFormat()(a,b)});var E=function(a){return function(){return{active:a.map(function(a){return!a.disabled})}}},F=function(a){return function(b){void 0!==b.active&&a.forEach(function(a,c){a.disabled=!b.active[c]})}};return g.dispatch.on("elementMouseover.tooltip",function(a){o.data(a).position(a.pos).hidden(!1)}),g.dispatch.on("elementMouseout.tooltip",function(){o.hidden(!0)}),b.dispatch=A,b.legend=m,b.lines=g,b.lines2=h,b.xAxis=i,b.yAxis=j,b.x2Axis=k,b.y2Axis=l,b.interactiveLayer=p,b.tooltip=o,b.options=a.utils.optionsFunc.bind(b),b._options=Object.create({},{width:{get:function(){return t},set:function(a){t=a}},height:{get:function(){return u},set:function(a){u=a}},focusHeight:{get:function(){return v},set:function(a){v=a}},showLegend:{get:function(){return x},set:function(a){x=a}},brushExtent:{get:function(){return y},set:function(a){y=a}},defaultState:{get:function(){return D},set:function(a){D=a}},noData:{get:function(){return z},set:function(a){z=a}},tooltips:{get:function(){return o.enabled()},set:function(b){a.deprecated("tooltips","use chart.tooltip.enabled() instead"),o.enabled(!!b)}},tooltipContent:{get:function(){return o.contentGenerator()},set:function(b){a.deprecated("tooltipContent","use chart.tooltip.contentGenerator() instead"),o.contentGenerator(b)}},margin:{get:function(){return q},set:function(a){q.top=void 0!==a.top?a.top:q.top,q.right=void 0!==a.right?a.right:q.right,q.bottom=void 0!==a.bottom?a.bottom:q.bottom,q.left=void 0!==a.left?a.left:q.left}},color:{get:function(){return s},set:function(b){s=a.utils.getColor(b),m.color(s)}},interpolate:{get:function(){return g.interpolate()},set:function(a){g.interpolate(a),h.interpolate(a)}},xTickFormat:{get:function(){return i.tickFormat()},set:function(a){i.tickFormat(a),k.tickFormat(a)}},yTickFormat:{get:function(){return j.tickFormat()},set:function(a){j.tickFormat(a),l.tickFormat(a)}},duration:{get:function(){return B},set:function(a){B=a,j.duration(B),l.duration(B),i.duration(B),k.duration(B)}},x:{get:function(){return g.x()},set:function(a){g.x(a),h.x(a)}},y:{get:function(){return g.y()},set:function(a){g.y(a),h.y(a)}},useInteractiveGuideline:{get:function(){return w},set:function(a){w=a,w&&(g.interactive(!1),g.useVoronoi(!1))}}}),a.utils.inheritOptions(b,g),a.utils.initOptions(b),b},a.models.multiBar=function(){"use strict";function b(E){return C.reset(),E.each(function(b){var E=k-j.left-j.right,F=l-j.top-j.bottom;p=d3.select(this),a.utils.initSVG(p);var G=0;if(x&&b.length&&(x=[{values:b[0].values.map(function(a){return{x:a.x,y:0,series:a.series,size:.01}})}]),u){var H=d3.layout.stack().offset(v).values(function(a){return a.values}).y(r)(!b.length&&x?x:b);H.forEach(function(a,c){a.nonStackable?(b[c].nonStackableSeries=G++,H[c]=b[c]):c>0&&H[c-1].nonStackable&&H[c].values.map(function(a,b){a.y0-=H[c-1].values[b].y,a.y1=a.y0+a.y})}),b=H}b.forEach(function(a,b){a.values.forEach(function(c){c.series=b,c.key=a.key})}),u&&b[0].values.map(function(a,c){var d=0,e=0;b.map(function(a,f){if(!b[f].nonStackable){var g=a.values[c];g.size=Math.abs(g.y),g.y<0?(g.y1=e,e-=g.size):(g.y1=g.size+d,d+=g.size)}})});var I=d&&e?[]:b.map(function(a,b){return a.values.map(function(a,c){return{x:q(a,c),y:r(a,c),y0:a.y0,y1:a.y1,idx:b}})});m.domain(d||d3.merge(I).map(function(a){return a.x})).rangeBands(f||[0,E],A),n.domain(e||d3.extent(d3.merge(I).map(function(a){var c=a.y;return u&&!b[a.idx].nonStackable&&(c=a.y>0?a.y1:a.y1+a.y),c}).concat(s))).range(g||[F,0]),m.domain()[0]===m.domain()[1]&&m.domain(m.domain()[0]?[m.domain()[0]-.01*m.domain()[0],m.domain()[1]+.01*m.domain()[1]]:[-1,1]),n.domain()[0]===n.domain()[1]&&n.domain(n.domain()[0]?[n.domain()[0]+.01*n.domain()[0],n.domain()[1]-.01*n.domain()[1]]:[-1,1]),h=h||m,i=i||n;var J=p.selectAll("g.nv-wrap.nv-multibar").data([b]),K=J.enter().append("g").attr("class","nvd3 nv-wrap nv-multibar"),L=K.append("defs"),M=K.append("g"),N=J.select("g");M.append("g").attr("class","nv-groups"),J.attr("transform","translate("+j.left+","+j.top+")"),L.append("clipPath").attr("id","nv-edge-clip-"+o).append("rect"),J.select("#nv-edge-clip-"+o+" rect").attr("width",E).attr("height",F),N.attr("clip-path",t?"url(#nv-edge-clip-"+o+")":"");var O=J.select(".nv-groups").selectAll(".nv-group").data(function(a){return a},function(a,b){return b});O.enter().append("g").style("stroke-opacity",1e-6).style("fill-opacity",1e-6);var P=C.transition(O.exit().selectAll("rect.nv-bar"),"multibarExit",Math.min(100,z)).attr("y",function(a){var c=i(0)||0;return u&&b[a.series]&&!b[a.series].nonStackable&&(c=i(a.y0)),c}).attr("height",0).remove();P.delay&&P.delay(function(a,b){var c=b*(z/(D+1))-b;return c}),O.attr("class",function(a,b){return"nv-group nv-series-"+b}).classed("hover",function(a){return a.hover}).style("fill",function(a,b){return w(a,b)}).style("stroke",function(a,b){return w(a,b)}),O.style("stroke-opacity",1).style("fill-opacity",.75);var Q=O.selectAll("rect.nv-bar").data(function(a){return x&&!b.length?x.values:a.values});Q.exit().remove();Q.enter().append("rect").attr("class",function(a,b){return r(a,b)<0?"nv-bar negative":"nv-bar positive"}).attr("x",function(a,c,d){return u&&!b[d].nonStackable?0:d*m.rangeBand()/b.length}).attr("y",function(a,c,d){return i(u&&!b[d].nonStackable?a.y0:0)||0}).attr("height",0).attr("width",function(a,c,d){return m.rangeBand()/(u&&!b[d].nonStackable?1:b.length)}).attr("transform",function(a,b){return"translate("+m(q(a,b))+",0)"});Q.style("fill",function(a,b,c){return w(a,c,b)}).style("stroke",function(a,b,c){return w(a,c,b)}).on("mouseover",function(a,b){d3.select(this).classed("hover",!0),B.elementMouseover({data:a,index:b,color:d3.select(this).style("fill")})}).on("mouseout",function(a,b){d3.select(this).classed("hover",!1),B.elementMouseout({data:a,index:b,color:d3.select(this).style("fill")})}).on("mousemove",function(a,b){B.elementMousemove({data:a,index:b,color:d3.select(this).style("fill")})}).on("click",function(a,b){B.elementClick({data:a,index:b,color:d3.select(this).style("fill")}),d3.event.stopPropagation()}).on("dblclick",function(a,b){B.elementDblClick({data:a,index:b,color:d3.select(this).style("fill")}),d3.event.stopPropagation()}),Q.attr("class",function(a,b){return r(a,b)<0?"nv-bar negative":"nv-bar positive"}).attr("transform",function(a,b){return"translate("+m(q(a,b))+",0)"}),y&&(c||(c=b.map(function(){return!0})),Q.style("fill",function(a,b,d){return d3.rgb(y(a,b)).darker(c.map(function(a,b){return b}).filter(function(a,b){return!c[b]})[d]).toString()}).style("stroke",function(a,b,d){return d3.rgb(y(a,b)).darker(c.map(function(a,b){return b}).filter(function(a,b){return!c[b]})[d]).toString()}));var R=Q.watchTransition(C,"multibar",Math.min(250,z)).delay(function(a,c){return c*z/b[0].values.length});u?R.attr("y",function(a,c,d){var e=0;return e=b[d].nonStackable?r(a,c)<0?n(0):n(0)-n(r(a,c))<-1?n(0)-1:n(r(a,c))||0:n(a.y1)}).attr("height",function(a,c,d){return b[d].nonStackable?Math.max(Math.abs(n(r(a,c))-n(0)),1)||0:Math.max(Math.abs(n(a.y+a.y0)-n(a.y0)),1)}).attr("x",function(a,c,d){var e=0;return b[d].nonStackable&&(e=a.series*m.rangeBand()/b.length,b.length!==G&&(e=b[d].nonStackableSeries*m.rangeBand()/(2*G))),e}).attr("width",function(a,c,d){if(b[d].nonStackable){var e=m.rangeBand()/G;return b.length!==G&&(e=m.rangeBand()/(2*G)),e}return m.rangeBand()}):R.attr("x",function(a){return a.series*m.rangeBand()/b.length}).attr("width",m.rangeBand()/b.length).attr("y",function(a,b){return r(a,b)<0?n(0):n(0)-n(r(a,b))<1?n(0)-1:n(r(a,b))||0}).attr("height",function(a,b){return Math.max(Math.abs(n(r(a,b))-n(0)),1)||0}),h=m.copy(),i=n.copy(),b[0]&&b[0].values&&(D=b[0].values.length)}),C.renderEnd("multibar immediate"),b}var c,d,e,f,g,h,i,j={top:0,right:0,bottom:0,left:0},k=960,l=500,m=d3.scale.ordinal(),n=d3.scale.linear(),o=Math.floor(1e4*Math.random()),p=null,q=function(a){return a.x},r=function(a){return a.y},s=[0],t=!0,u=!1,v="zero",w=a.utils.defaultColor(),x=!1,y=null,z=500,A=.1,B=d3.dispatch("chartClick","elementClick","elementDblClick","elementMouseover","elementMouseout","elementMousemove","renderEnd"),C=a.utils.renderWatch(B,z),D=0;return b.dispatch=B,b.options=a.utils.optionsFunc.bind(b),b._options=Object.create({},{width:{get:function(){return k},set:function(a){k=a}},height:{get:function(){return l},set:function(a){l=a}},x:{get:function(){return q},set:function(a){q=a}},y:{get:function(){return r},set:function(a){r=a}},xScale:{get:function(){return m},set:function(a){m=a}},yScale:{get:function(){return n},set:function(a){n=a}},xDomain:{get:function(){return d},set:function(a){d=a}},yDomain:{get:function(){return e},set:function(a){e=a}},xRange:{get:function(){return f},set:function(a){f=a}},yRange:{get:function(){return g},set:function(a){g=a}},forceY:{get:function(){return s},set:function(a){s=a}},stacked:{get:function(){return u},set:function(a){u=a}},stackOffset:{get:function(){return v},set:function(a){v=a}},clipEdge:{get:function(){return t},set:function(a){t=a}},disabled:{get:function(){return c},set:function(a){c=a}},id:{get:function(){return o},set:function(a){o=a}},hideable:{get:function(){return x},set:function(a){x=a}},groupSpacing:{get:function(){return A},set:function(a){A=a}},margin:{get:function(){return j},set:function(a){j.top=void 0!==a.top?a.top:j.top,j.right=void 0!==a.right?a.right:j.right,j.bottom=void 0!==a.bottom?a.bottom:j.bottom,j.left=void 0!==a.left?a.left:j.left}},duration:{get:function(){return z},set:function(a){z=a,C.reset(z)}},color:{get:function(){return w},set:function(b){w=a.utils.getColor(b)}},barColor:{get:function(){return y},set:function(b){y=b?a.utils.getColor(b):null}}}),a.utils.initOptions(b),b},a.models.multiBarChart=function(){"use strict";function b(j){return D.reset(),D.models(e),r&&D.models(f),s&&D.models(g),j.each(function(j){var z=d3.select(this);a.utils.initSVG(z);var D=a.utils.availableWidth(l,z,k),H=a.utils.availableHeight(m,z,k);if(b.update=function(){0===C?z.call(b):z.transition().duration(C).call(b)},b.container=this,x.setter(G(j),b.update).getter(F(j)).update(),x.disabled=j.map(function(a){return!!a.disabled}),!y){var I;y={};for(I in x)y[I]=x[I]instanceof Array?x[I].slice(0):x[I]}if(!(j&&j.length&&j.filter(function(a){return a.values.length}).length))return a.utils.noData(b,z),b;z.selectAll(".nv-noData").remove(),c=e.xScale(),d=e.yScale();
var J=z.selectAll("g.nv-wrap.nv-multiBarWithLegend").data([j]),K=J.enter().append("g").attr("class","nvd3 nv-wrap nv-multiBarWithLegend").append("g"),L=J.select("g");if(K.append("g").attr("class","nv-x nv-axis"),K.append("g").attr("class","nv-y nv-axis"),K.append("g").attr("class","nv-barsWrap"),K.append("g").attr("class","nv-legendWrap"),K.append("g").attr("class","nv-controlsWrap"),q&&(h.width(D-B()),L.select(".nv-legendWrap").datum(j).call(h),k.top!=h.height()&&(k.top=h.height(),H=a.utils.availableHeight(m,z,k)),L.select(".nv-legendWrap").attr("transform","translate("+B()+","+-k.top+")")),o){var M=[{key:p.grouped||"Grouped",disabled:e.stacked()},{key:p.stacked||"Stacked",disabled:!e.stacked()}];i.width(B()).color(["#444","#444","#444"]),L.select(".nv-controlsWrap").datum(M).attr("transform","translate(0,"+-k.top+")").call(i)}J.attr("transform","translate("+k.left+","+k.top+")"),t&&L.select(".nv-y.nv-axis").attr("transform","translate("+D+",0)"),e.disabled(j.map(function(a){return a.disabled})).width(D).height(H).color(j.map(function(a,b){return a.color||n(a,b)}).filter(function(a,b){return!j[b].disabled}));var N=L.select(".nv-barsWrap").datum(j.filter(function(a){return!a.disabled}));if(N.call(e),r){f.scale(c)._ticks(a.utils.calcTicksX(D/100,j)).tickSize(-H,0),L.select(".nv-x.nv-axis").attr("transform","translate(0,"+d.range()[0]+")"),L.select(".nv-x.nv-axis").call(f);var O=L.select(".nv-x.nv-axis > g").selectAll("g");if(O.selectAll("line, text").style("opacity",1),v){var P=function(a,b){return"translate("+a+","+b+")"},Q=5,R=17;O.selectAll("text").attr("transform",function(a,b,c){return P(0,c%2==0?Q:R)});var S=d3.selectAll(".nv-x.nv-axis .nv-wrap g g text")[0].length;L.selectAll(".nv-x.nv-axis .nv-axisMaxMin text").attr("transform",function(a,b){return P(0,0===b||S%2!==0?R:Q)})}u&&O.filter(function(a,b){return b%Math.ceil(j[0].values.length/(D/100))!==0}).selectAll("text, line").style("opacity",0),w&&O.selectAll(".tick text").attr("transform","rotate("+w+" 0,0)").style("text-anchor",w>0?"start":"end"),L.select(".nv-x.nv-axis").selectAll("g.nv-axisMaxMin text").style("opacity",1)}s&&(g.scale(d)._ticks(a.utils.calcTicksY(H/36,j)).tickSize(-D,0),L.select(".nv-y.nv-axis").call(g)),h.dispatch.on("stateChange",function(a){for(var c in a)x[c]=a[c];A.stateChange(x),b.update()}),i.dispatch.on("legendClick",function(a){if(a.disabled){switch(M=M.map(function(a){return a.disabled=!0,a}),a.disabled=!1,a.key){case"Grouped":case p.grouped:e.stacked(!1);break;case"Stacked":case p.stacked:e.stacked(!0)}x.stacked=e.stacked(),A.stateChange(x),b.update()}}),A.on("changeState",function(a){"undefined"!=typeof a.disabled&&(j.forEach(function(b,c){b.disabled=a.disabled[c]}),x.disabled=a.disabled),"undefined"!=typeof a.stacked&&(e.stacked(a.stacked),x.stacked=a.stacked,E=a.stacked),b.update()})}),D.renderEnd("multibarchart immediate"),b}var c,d,e=a.models.multiBar(),f=a.models.axis(),g=a.models.axis(),h=a.models.legend(),i=a.models.legend(),j=a.models.tooltip(),k={top:30,right:20,bottom:50,left:60},l=null,m=null,n=a.utils.defaultColor(),o=!0,p={},q=!0,r=!0,s=!0,t=!1,u=!0,v=!1,w=0,x=a.utils.state(),y=null,z=null,A=d3.dispatch("stateChange","changeState","renderEnd"),B=function(){return o?180:0},C=250;x.stacked=!1,e.stacked(!1),f.orient("bottom").tickPadding(7).showMaxMin(!1).tickFormat(function(a){return a}),g.orient(t?"right":"left").tickFormat(d3.format(",.1f")),j.duration(0).valueFormatter(function(a,b){return g.tickFormat()(a,b)}).headerFormatter(function(a,b){return f.tickFormat()(a,b)}),i.updateState(!1);var D=a.utils.renderWatch(A),E=!1,F=function(a){return function(){return{active:a.map(function(a){return!a.disabled}),stacked:E}}},G=function(a){return function(b){void 0!==b.stacked&&(E=b.stacked),void 0!==b.active&&a.forEach(function(a,c){a.disabled=!b.active[c]})}};return e.dispatch.on("elementMouseover.tooltip",function(a){a.value=b.x()(a.data),a.series={key:a.data.key,value:b.y()(a.data),color:a.color},j.data(a).hidden(!1)}),e.dispatch.on("elementMouseout.tooltip",function(){j.hidden(!0)}),e.dispatch.on("elementMousemove.tooltip",function(){j.position({top:d3.event.pageY,left:d3.event.pageX})()}),b.dispatch=A,b.multibar=e,b.legend=h,b.controls=i,b.xAxis=f,b.yAxis=g,b.state=x,b.tooltip=j,b.options=a.utils.optionsFunc.bind(b),b._options=Object.create({},{width:{get:function(){return l},set:function(a){l=a}},height:{get:function(){return m},set:function(a){m=a}},showLegend:{get:function(){return q},set:function(a){q=a}},showControls:{get:function(){return o},set:function(a){o=a}},controlLabels:{get:function(){return p},set:function(a){p=a}},showXAxis:{get:function(){return r},set:function(a){r=a}},showYAxis:{get:function(){return s},set:function(a){s=a}},defaultState:{get:function(){return y},set:function(a){y=a}},noData:{get:function(){return z},set:function(a){z=a}},reduceXTicks:{get:function(){return u},set:function(a){u=a}},rotateLabels:{get:function(){return w},set:function(a){w=a}},staggerLabels:{get:function(){return v},set:function(a){v=a}},tooltips:{get:function(){return j.enabled()},set:function(b){a.deprecated("tooltips","use chart.tooltip.enabled() instead"),j.enabled(!!b)}},tooltipContent:{get:function(){return j.contentGenerator()},set:function(b){a.deprecated("tooltipContent","use chart.tooltip.contentGenerator() instead"),j.contentGenerator(b)}},margin:{get:function(){return k},set:function(a){k.top=void 0!==a.top?a.top:k.top,k.right=void 0!==a.right?a.right:k.right,k.bottom=void 0!==a.bottom?a.bottom:k.bottom,k.left=void 0!==a.left?a.left:k.left}},duration:{get:function(){return C},set:function(a){C=a,e.duration(C),f.duration(C),g.duration(C),D.reset(C)}},color:{get:function(){return n},set:function(b){n=a.utils.getColor(b),h.color(n)}},rightAlignYAxis:{get:function(){return t},set:function(a){t=a,g.orient(t?"right":"left")}},barColor:{get:function(){return e.barColor},set:function(a){e.barColor(a),h.color(function(a,b){return d3.rgb("#ccc").darker(1.5*b).toString()})}}}),a.utils.inheritOptions(b,e),a.utils.initOptions(b),b},a.models.multiBarHorizontal=function(){"use strict";function b(m){return E.reset(),m.each(function(b){var m=k-j.left-j.right,C=l-j.top-j.bottom;n=d3.select(this),a.utils.initSVG(n),w&&(b=d3.layout.stack().offset("zero").values(function(a){return a.values}).y(r)(b)),b.forEach(function(a,b){a.values.forEach(function(c){c.series=b,c.key=a.key})}),w&&b[0].values.map(function(a,c){var d=0,e=0;b.map(function(a){var b=a.values[c];b.size=Math.abs(b.y),b.y<0?(b.y1=e-b.size,e-=b.size):(b.y1=d,d+=b.size)})});var F=d&&e?[]:b.map(function(a){return a.values.map(function(a,b){return{x:q(a,b),y:r(a,b),y0:a.y0,y1:a.y1}})});o.domain(d||d3.merge(F).map(function(a){return a.x})).rangeBands(f||[0,C],A),p.domain(e||d3.extent(d3.merge(F).map(function(a){return w?a.y>0?a.y1+a.y:a.y1:a.y}).concat(t))),p.range(x&&!w?g||[p.domain()[0]<0?z:0,m-(p.domain()[1]>0?z:0)]:g||[0,m]),h=h||o,i=i||d3.scale.linear().domain(p.domain()).range([p(0),p(0)]);{var G=d3.select(this).selectAll("g.nv-wrap.nv-multibarHorizontal").data([b]),H=G.enter().append("g").attr("class","nvd3 nv-wrap nv-multibarHorizontal"),I=(H.append("defs"),H.append("g"));G.select("g")}I.append("g").attr("class","nv-groups"),G.attr("transform","translate("+j.left+","+j.top+")");var J=G.select(".nv-groups").selectAll(".nv-group").data(function(a){return a},function(a,b){return b});J.enter().append("g").style("stroke-opacity",1e-6).style("fill-opacity",1e-6),J.exit().watchTransition(E,"multibarhorizontal: exit groups").style("stroke-opacity",1e-6).style("fill-opacity",1e-6).remove(),J.attr("class",function(a,b){return"nv-group nv-series-"+b}).classed("hover",function(a){return a.hover}).style("fill",function(a,b){return u(a,b)}).style("stroke",function(a,b){return u(a,b)}),J.watchTransition(E,"multibarhorizontal: groups").style("stroke-opacity",1).style("fill-opacity",.75);var K=J.selectAll("g.nv-bar").data(function(a){return a.values});K.exit().remove();var L=K.enter().append("g").attr("transform",function(a,c,d){return"translate("+i(w?a.y0:0)+","+(w?0:d*o.rangeBand()/b.length+o(q(a,c)))+")"});L.append("rect").attr("width",0).attr("height",o.rangeBand()/(w?1:b.length)),K.on("mouseover",function(a,b){d3.select(this).classed("hover",!0),D.elementMouseover({data:a,index:b,color:d3.select(this).style("fill")})}).on("mouseout",function(a,b){d3.select(this).classed("hover",!1),D.elementMouseout({data:a,index:b,color:d3.select(this).style("fill")})}).on("mouseout",function(a,b){D.elementMouseout({data:a,index:b,color:d3.select(this).style("fill")})}).on("mousemove",function(a,b){D.elementMousemove({data:a,index:b,color:d3.select(this).style("fill")})}).on("click",function(a,b){D.elementClick({data:a,index:b,color:d3.select(this).style("fill")}),d3.event.stopPropagation()}).on("dblclick",function(a,b){D.elementDblClick({data:a,index:b,color:d3.select(this).style("fill")}),d3.event.stopPropagation()}),s(b[0],0)&&(L.append("polyline"),K.select("polyline").attr("fill","none").attr("points",function(a,c){var d=s(a,c),e=.8*o.rangeBand()/(2*(w?1:b.length));d=d.length?d:[-Math.abs(d),Math.abs(d)],d=d.map(function(a){return p(a)-p(0)});var f=[[d[0],-e],[d[0],e],[d[0],0],[d[1],0],[d[1],-e],[d[1],e]];return f.map(function(a){return a.join(",")}).join(" ")}).attr("transform",function(a,c){var d=o.rangeBand()/(2*(w?1:b.length));return"translate("+(r(a,c)<0?0:p(r(a,c))-p(0))+", "+d+")"})),L.append("text"),x&&!w?(K.select("text").attr("text-anchor",function(a,b){return r(a,b)<0?"end":"start"}).attr("y",o.rangeBand()/(2*b.length)).attr("dy",".32em").text(function(a,b){var c=B(r(a,b)),d=s(a,b);return void 0===d?c:d.length?c+"+"+B(Math.abs(d[1]))+"-"+B(Math.abs(d[0])):c+"±"+B(Math.abs(d))}),K.watchTransition(E,"multibarhorizontal: bars").select("text").attr("x",function(a,b){return r(a,b)<0?-4:p(r(a,b))-p(0)+4})):K.selectAll("text").text(""),y&&!w?(L.append("text").classed("nv-bar-label",!0),K.select("text.nv-bar-label").attr("text-anchor",function(a,b){return r(a,b)<0?"start":"end"}).attr("y",o.rangeBand()/(2*b.length)).attr("dy",".32em").text(function(a,b){return q(a,b)}),K.watchTransition(E,"multibarhorizontal: bars").select("text.nv-bar-label").attr("x",function(a,b){return r(a,b)<0?p(0)-p(r(a,b))+4:-4})):K.selectAll("text.nv-bar-label").text(""),K.attr("class",function(a,b){return r(a,b)<0?"nv-bar negative":"nv-bar positive"}),v&&(c||(c=b.map(function(){return!0})),K.style("fill",function(a,b,d){return d3.rgb(v(a,b)).darker(c.map(function(a,b){return b}).filter(function(a,b){return!c[b]})[d]).toString()}).style("stroke",function(a,b,d){return d3.rgb(v(a,b)).darker(c.map(function(a,b){return b}).filter(function(a,b){return!c[b]})[d]).toString()})),w?K.watchTransition(E,"multibarhorizontal: bars").attr("transform",function(a,b){return"translate("+p(a.y1)+","+o(q(a,b))+")"}).select("rect").attr("width",function(a,b){return Math.abs(p(r(a,b)+a.y0)-p(a.y0))}).attr("height",o.rangeBand()):K.watchTransition(E,"multibarhorizontal: bars").attr("transform",function(a,c){return"translate("+p(r(a,c)<0?r(a,c):0)+","+(a.series*o.rangeBand()/b.length+o(q(a,c)))+")"}).select("rect").attr("height",o.rangeBand()/b.length).attr("width",function(a,b){return Math.max(Math.abs(p(r(a,b))-p(0)),1)}),h=o.copy(),i=p.copy()}),E.renderEnd("multibarHorizontal immediate"),b}var c,d,e,f,g,h,i,j={top:0,right:0,bottom:0,left:0},k=960,l=500,m=Math.floor(1e4*Math.random()),n=null,o=d3.scale.ordinal(),p=d3.scale.linear(),q=function(a){return a.x},r=function(a){return a.y},s=function(a){return a.yErr},t=[0],u=a.utils.defaultColor(),v=null,w=!1,x=!1,y=!1,z=60,A=.1,B=d3.format(",.2f"),C=250,D=d3.dispatch("chartClick","elementClick","elementDblClick","elementMouseover","elementMouseout","elementMousemove","renderEnd"),E=a.utils.renderWatch(D,C);return b.dispatch=D,b.options=a.utils.optionsFunc.bind(b),b._options=Object.create({},{width:{get:function(){return k},set:function(a){k=a}},height:{get:function(){return l},set:function(a){l=a}},x:{get:function(){return q},set:function(a){q=a}},y:{get:function(){return r},set:function(a){r=a}},yErr:{get:function(){return s},set:function(a){s=a}},xScale:{get:function(){return o},set:function(a){o=a}},yScale:{get:function(){return p},set:function(a){p=a}},xDomain:{get:function(){return d},set:function(a){d=a}},yDomain:{get:function(){return e},set:function(a){e=a}},xRange:{get:function(){return f},set:function(a){f=a}},yRange:{get:function(){return g},set:function(a){g=a}},forceY:{get:function(){return t},set:function(a){t=a}},stacked:{get:function(){return w},set:function(a){w=a}},showValues:{get:function(){return x},set:function(a){x=a}},disabled:{get:function(){return c},set:function(a){c=a}},id:{get:function(){return m},set:function(a){m=a}},valueFormat:{get:function(){return B},set:function(a){B=a}},valuePadding:{get:function(){return z},set:function(a){z=a}},groupSpacing:{get:function(){return A},set:function(a){A=a}},margin:{get:function(){return j},set:function(a){j.top=void 0!==a.top?a.top:j.top,j.right=void 0!==a.right?a.right:j.right,j.bottom=void 0!==a.bottom?a.bottom:j.bottom,j.left=void 0!==a.left?a.left:j.left}},duration:{get:function(){return C},set:function(a){C=a,E.reset(C)}},color:{get:function(){return u},set:function(b){u=a.utils.getColor(b)}},barColor:{get:function(){return v},set:function(b){v=b?a.utils.getColor(b):null}}}),a.utils.initOptions(b),b},a.models.multiBarHorizontalChart=function(){"use strict";function b(j){return C.reset(),C.models(e),r&&C.models(f),s&&C.models(g),j.each(function(j){var w=d3.select(this);a.utils.initSVG(w);var C=a.utils.availableWidth(l,w,k),D=a.utils.availableHeight(m,w,k);if(b.update=function(){w.transition().duration(z).call(b)},b.container=this,t=e.stacked(),u.setter(B(j),b.update).getter(A(j)).update(),u.disabled=j.map(function(a){return!!a.disabled}),!v){var E;v={};for(E in u)v[E]=u[E]instanceof Array?u[E].slice(0):u[E]}if(!(j&&j.length&&j.filter(function(a){return a.values.length}).length))return a.utils.noData(b,w),b;w.selectAll(".nv-noData").remove(),c=e.xScale(),d=e.yScale();var F=w.selectAll("g.nv-wrap.nv-multiBarHorizontalChart").data([j]),G=F.enter().append("g").attr("class","nvd3 nv-wrap nv-multiBarHorizontalChart").append("g"),H=F.select("g");if(G.append("g").attr("class","nv-x nv-axis"),G.append("g").attr("class","nv-y nv-axis").append("g").attr("class","nv-zeroLine").append("line"),G.append("g").attr("class","nv-barsWrap"),G.append("g").attr("class","nv-legendWrap"),G.append("g").attr("class","nv-controlsWrap"),q&&(h.width(C-y()),H.select(".nv-legendWrap").datum(j).call(h),k.top!=h.height()&&(k.top=h.height(),D=a.utils.availableHeight(m,w,k)),H.select(".nv-legendWrap").attr("transform","translate("+y()+","+-k.top+")")),o){var I=[{key:p.grouped||"Grouped",disabled:e.stacked()},{key:p.stacked||"Stacked",disabled:!e.stacked()}];i.width(y()).color(["#444","#444","#444"]),H.select(".nv-controlsWrap").datum(I).attr("transform","translate(0,"+-k.top+")").call(i)}F.attr("transform","translate("+k.left+","+k.top+")"),e.disabled(j.map(function(a){return a.disabled})).width(C).height(D).color(j.map(function(a,b){return a.color||n(a,b)}).filter(function(a,b){return!j[b].disabled}));var J=H.select(".nv-barsWrap").datum(j.filter(function(a){return!a.disabled}));if(J.transition().call(e),r){f.scale(c)._ticks(a.utils.calcTicksY(D/24,j)).tickSize(-C,0),H.select(".nv-x.nv-axis").call(f);var K=H.select(".nv-x.nv-axis").selectAll("g");K.selectAll("line, text")}s&&(g.scale(d)._ticks(a.utils.calcTicksX(C/100,j)).tickSize(-D,0),H.select(".nv-y.nv-axis").attr("transform","translate(0,"+D+")"),H.select(".nv-y.nv-axis").call(g)),H.select(".nv-zeroLine line").attr("x1",d(0)).attr("x2",d(0)).attr("y1",0).attr("y2",-D),h.dispatch.on("stateChange",function(a){for(var c in a)u[c]=a[c];x.stateChange(u),b.update()}),i.dispatch.on("legendClick",function(a){if(a.disabled){switch(I=I.map(function(a){return a.disabled=!0,a}),a.disabled=!1,a.key){case"Grouped":e.stacked(!1);break;case"Stacked":e.stacked(!0)}u.stacked=e.stacked(),x.stateChange(u),t=e.stacked(),b.update()}}),x.on("changeState",function(a){"undefined"!=typeof a.disabled&&(j.forEach(function(b,c){b.disabled=a.disabled[c]}),u.disabled=a.disabled),"undefined"!=typeof a.stacked&&(e.stacked(a.stacked),u.stacked=a.stacked,t=a.stacked),b.update()})}),C.renderEnd("multibar horizontal chart immediate"),b}var c,d,e=a.models.multiBarHorizontal(),f=a.models.axis(),g=a.models.axis(),h=a.models.legend().height(30),i=a.models.legend().height(30),j=a.models.tooltip(),k={top:30,right:20,bottom:50,left:60},l=null,m=null,n=a.utils.defaultColor(),o=!0,p={},q=!0,r=!0,s=!0,t=!1,u=a.utils.state(),v=null,w=null,x=d3.dispatch("stateChange","changeState","renderEnd"),y=function(){return o?180:0},z=250;u.stacked=!1,e.stacked(t),f.orient("left").tickPadding(5).showMaxMin(!1).tickFormat(function(a){return a}),g.orient("bottom").tickFormat(d3.format(",.1f")),j.duration(0).valueFormatter(function(a,b){return g.tickFormat()(a,b)}).headerFormatter(function(a,b){return f.tickFormat()(a,b)}),i.updateState(!1);var A=function(a){return function(){return{active:a.map(function(a){return!a.disabled}),stacked:t}}},B=function(a){return function(b){void 0!==b.stacked&&(t=b.stacked),void 0!==b.active&&a.forEach(function(a,c){a.disabled=!b.active[c]})}},C=a.utils.renderWatch(x,z);return e.dispatch.on("elementMouseover.tooltip",function(a){a.value=b.x()(a.data),a.series={key:a.data.key,value:b.y()(a.data),color:a.color},j.data(a).hidden(!1)}),e.dispatch.on("elementMouseout.tooltip",function(){j.hidden(!0)}),e.dispatch.on("elementMousemove.tooltip",function(){j.position({top:d3.event.pageY,left:d3.event.pageX})()}),b.dispatch=x,b.multibar=e,b.legend=h,b.controls=i,b.xAxis=f,b.yAxis=g,b.state=u,b.tooltip=j,b.options=a.utils.optionsFunc.bind(b),b._options=Object.create({},{width:{get:function(){return l},set:function(a){l=a}},height:{get:function(){return m},set:function(a){m=a}},showLegend:{get:function(){return q},set:function(a){q=a}},showControls:{get:function(){return o},set:function(a){o=a}},controlLabels:{get:function(){return p},set:function(a){p=a}},showXAxis:{get:function(){return r},set:function(a){r=a}},showYAxis:{get:function(){return s},set:function(a){s=a}},defaultState:{get:function(){return v},set:function(a){v=a}},noData:{get:function(){return w},set:function(a){w=a}},tooltips:{get:function(){return j.enabled()},set:function(b){a.deprecated("tooltips","use chart.tooltip.enabled() instead"),j.enabled(!!b)}},tooltipContent:{get:function(){return j.contentGenerator()},set:function(b){a.deprecated("tooltipContent","use chart.tooltip.contentGenerator() instead"),j.contentGenerator(b)}},margin:{get:function(){return k},set:function(a){k.top=void 0!==a.top?a.top:k.top,k.right=void 0!==a.right?a.right:k.right,k.bottom=void 0!==a.bottom?a.bottom:k.bottom,k.left=void 0!==a.left?a.left:k.left}},duration:{get:function(){return z},set:function(a){z=a,C.reset(z),e.duration(z),f.duration(z),g.duration(z)}},color:{get:function(){return n},set:function(b){n=a.utils.getColor(b),h.color(n)}},barColor:{get:function(){return e.barColor},set:function(a){e.barColor(a),h.color(function(a,b){return d3.rgb("#ccc").darker(1.5*b).toString()})}}}),a.utils.inheritOptions(b,e),a.utils.initOptions(b),b},a.models.multiChart=function(){"use strict";function b(j){return j.each(function(j){function k(a){var b=2===j[a.seriesIndex].yAxis?z:y;a.value=a.point.x,a.series={value:a.point.y,color:a.point.color},B.duration(100).valueFormatter(function(a,c){return b.tickFormat()(a,c)}).data(a).position(a.pos).hidden(!1)}function l(a){var b=2===j[a.seriesIndex].yAxis?z:y;a.point.x=v.x()(a.point),a.point.y=v.y()(a.point),B.duration(100).valueFormatter(function(a,c){return b.tickFormat()(a,c)}).data(a).position(a.pos).hidden(!1)}function n(a){var b=2===j[a.data.series].yAxis?z:y;a.value=t.x()(a.data),a.series={value:t.y()(a.data),color:a.color},B.duration(0).valueFormatter(function(a,c){return b.tickFormat()(a,c)}).data(a).hidden(!1)}var C=d3.select(this);a.utils.initSVG(C),b.update=function(){C.transition().call(b)},b.container=this;var D=a.utils.availableWidth(g,C,e),E=a.utils.availableHeight(h,C,e),F=j.filter(function(a){return"line"==a.type&&1==a.yAxis}),G=j.filter(function(a){return"line"==a.type&&2==a.yAxis}),H=j.filter(function(a){return"bar"==a.type&&1==a.yAxis}),I=j.filter(function(a){return"bar"==a.type&&2==a.yAxis}),J=j.filter(function(a){return"area"==a.type&&1==a.yAxis}),K=j.filter(function(a){return"area"==a.type&&2==a.yAxis});if(!(j&&j.length&&j.filter(function(a){return a.values.length}).length))return a.utils.noData(b,C),b;C.selectAll(".nv-noData").remove();var L=j.filter(function(a){return!a.disabled&&1==a.yAxis}).map(function(a){return a.values.map(function(a){return{x:a.x,y:a.y}})}),M=j.filter(function(a){return!a.disabled&&2==a.yAxis}).map(function(a){return a.values.map(function(a){return{x:a.x,y:a.y}})});o.domain(d3.extent(d3.merge(L.concat(M)),function(a){return a.x})).range([0,D]);var N=C.selectAll("g.wrap.multiChart").data([j]),O=N.enter().append("g").attr("class","wrap nvd3 multiChart").append("g");O.append("g").attr("class","nv-x nv-axis"),O.append("g").attr("class","nv-y1 nv-axis"),O.append("g").attr("class","nv-y2 nv-axis"),O.append("g").attr("class","lines1Wrap"),O.append("g").attr("class","lines2Wrap"),O.append("g").attr("class","bars1Wrap"),O.append("g").attr("class","bars2Wrap"),O.append("g").attr("class","stack1Wrap"),O.append("g").attr("class","stack2Wrap"),O.append("g").attr("class","legendWrap");var P=N.select("g"),Q=j.map(function(a,b){return j[b].color||f(a,b)});if(i){var R=A.align()?D/2:D,S=A.align()?R:0;A.width(R),A.color(Q),P.select(".legendWrap").datum(j.map(function(a){return a.originalKey=void 0===a.originalKey?a.key:a.originalKey,a.key=a.originalKey+(1==a.yAxis?"":" (right axis)"),a})).call(A),e.top!=A.height()&&(e.top=A.height(),E=a.utils.availableHeight(h,C,e)),P.select(".legendWrap").attr("transform","translate("+S+","+-e.top+")")}r.width(D).height(E).interpolate(m).color(Q.filter(function(a,b){return!j[b].disabled&&1==j[b].yAxis&&"line"==j[b].type})),s.width(D).height(E).interpolate(m).color(Q.filter(function(a,b){return!j[b].disabled&&2==j[b].yAxis&&"line"==j[b].type})),t.width(D).height(E).color(Q.filter(function(a,b){return!j[b].disabled&&1==j[b].yAxis&&"bar"==j[b].type})),u.width(D).height(E).color(Q.filter(function(a,b){return!j[b].disabled&&2==j[b].yAxis&&"bar"==j[b].type})),v.width(D).height(E).color(Q.filter(function(a,b){return!j[b].disabled&&1==j[b].yAxis&&"area"==j[b].type})),w.width(D).height(E).color(Q.filter(function(a,b){return!j[b].disabled&&2==j[b].yAxis&&"area"==j[b].type})),P.attr("transform","translate("+e.left+","+e.top+")");var T=P.select(".lines1Wrap").datum(F.filter(function(a){return!a.disabled})),U=P.select(".bars1Wrap").datum(H.filter(function(a){return!a.disabled})),V=P.select(".stack1Wrap").datum(J.filter(function(a){return!a.disabled})),W=P.select(".lines2Wrap").datum(G.filter(function(a){return!a.disabled})),X=P.select(".bars2Wrap").datum(I.filter(function(a){return!a.disabled})),Y=P.select(".stack2Wrap").datum(K.filter(function(a){return!a.disabled})),Z=J.length?J.map(function(a){return a.values}).reduce(function(a,b){return a.map(function(a,c){return{x:a.x,y:a.y+b[c].y}})}).concat([{x:0,y:0}]):[],$=K.length?K.map(function(a){return a.values}).reduce(function(a,b){return a.map(function(a,c){return{x:a.x,y:a.y+b[c].y}})}).concat([{x:0,y:0}]):[];p.domain(c||d3.extent(d3.merge(L).concat(Z),function(a){return a.y})).range([0,E]),q.domain(d||d3.extent(d3.merge(M).concat($),function(a){return a.y})).range([0,E]),r.yDomain(p.domain()),t.yDomain(p.domain()),v.yDomain(p.domain()),s.yDomain(q.domain()),u.yDomain(q.domain()),w.yDomain(q.domain()),J.length&&d3.transition(V).call(v),K.length&&d3.transition(Y).call(w),H.length&&d3.transition(U).call(t),I.length&&d3.transition(X).call(u),F.length&&d3.transition(T).call(r),G.length&&d3.transition(W).call(s),x._ticks(a.utils.calcTicksX(D/100,j)).tickSize(-E,0),P.select(".nv-x.nv-axis").attr("transform","translate(0,"+E+")"),d3.transition(P.select(".nv-x.nv-axis")).call(x),y._ticks(a.utils.calcTicksY(E/36,j)).tickSize(-D,0),d3.transition(P.select(".nv-y1.nv-axis")).call(y),z._ticks(a.utils.calcTicksY(E/36,j)).tickSize(-D,0),d3.transition(P.select(".nv-y2.nv-axis")).call(z),P.select(".nv-y1.nv-axis").classed("nv-disabled",L.length?!1:!0).attr("transform","translate("+o.range()[0]+",0)"),P.select(".nv-y2.nv-axis").classed("nv-disabled",M.length?!1:!0).attr("transform","translate("+o.range()[1]+",0)"),A.dispatch.on("stateChange",function(){b.update()}),r.dispatch.on("elementMouseover.tooltip",k),s.dispatch.on("elementMouseover.tooltip",k),r.dispatch.on("elementMouseout.tooltip",function(){B.hidden(!0)}),s.dispatch.on("elementMouseout.tooltip",function(){B.hidden(!0)}),v.dispatch.on("elementMouseover.tooltip",l),w.dispatch.on("elementMouseover.tooltip",l),v.dispatch.on("elementMouseout.tooltip",function(){B.hidden(!0)}),w.dispatch.on("elementMouseout.tooltip",function(){B.hidden(!0)}),t.dispatch.on("elementMouseover.tooltip",n),u.dispatch.on("elementMouseover.tooltip",n),t.dispatch.on("elementMouseout.tooltip",function(){B.hidden(!0)}),u.dispatch.on("elementMouseout.tooltip",function(){B.hidden(!0)}),t.dispatch.on("elementMousemove.tooltip",function(){B.position({top:d3.event.pageY,left:d3.event.pageX})()}),u.dispatch.on("elementMousemove.tooltip",function(){B.position({top:d3.event.pageY,left:d3.event.pageX})()})}),b}var c,d,e={top:30,right:20,bottom:50,left:60},f=a.utils.defaultColor(),g=null,h=null,i=!0,j=null,k=function(a){return a.x},l=function(a){return a.y},m="monotone",n=!0,o=d3.scale.linear(),p=d3.scale.linear(),q=d3.scale.linear(),r=a.models.line().yScale(p),s=a.models.line().yScale(q),t=a.models.multiBar().stacked(!1).yScale(p),u=a.models.multiBar().stacked(!1).yScale(q),v=a.models.stackedArea().yScale(p),w=a.models.stackedArea().yScale(q),x=a.models.axis().scale(o).orient("bottom").tickPadding(5),y=a.models.axis().scale(p).orient("left"),z=a.models.axis().scale(q).orient("right"),A=a.models.legend().height(30),B=a.models.tooltip(),C=d3.dispatch();return b.dispatch=C,b.lines1=r,b.lines2=s,b.bars1=t,b.bars2=u,b.stack1=v,b.stack2=w,b.xAxis=x,b.yAxis1=y,b.yAxis2=z,b.tooltip=B,b.options=a.utils.optionsFunc.bind(b),b._options=Object.create({},{width:{get:function(){return g},set:function(a){g=a}},height:{get:function(){return h},set:function(a){h=a}},showLegend:{get:function(){return i},set:function(a){i=a}},yDomain1:{get:function(){return c},set:function(a){c=a}},yDomain2:{get:function(){return d},set:function(a){d=a}},noData:{get:function(){return j},set:function(a){j=a}},interpolate:{get:function(){return m},set:function(a){m=a}},tooltips:{get:function(){return B.enabled()},set:function(b){a.deprecated("tooltips","use chart.tooltip.enabled() instead"),B.enabled(!!b)}},tooltipContent:{get:function(){return B.contentGenerator()},set:function(b){a.deprecated("tooltipContent","use chart.tooltip.contentGenerator() instead"),B.contentGenerator(b)}},margin:{get:function(){return e},set:function(a){e.top=void 0!==a.top?a.top:e.top,e.right=void 0!==a.right?a.right:e.right,e.bottom=void 0!==a.bottom?a.bottom:e.bottom,e.left=void 0!==a.left?a.left:e.left}},color:{get:function(){return f},set:function(b){f=a.utils.getColor(b)}},x:{get:function(){return k},set:function(a){k=a,r.x(a),s.x(a),t.x(a),u.x(a),v.x(a),w.x(a)}},y:{get:function(){return l},set:function(a){l=a,r.y(a),s.y(a),v.y(a),w.y(a),t.y(a),u.y(a)}},useVoronoi:{get:function(){return n},set:function(a){n=a,r.useVoronoi(a),s.useVoronoi(a),v.useVoronoi(a),w.useVoronoi(a)}}}),a.utils.initOptions(b),b},a.models.ohlcBar=function(){"use strict";function b(y){return y.each(function(b){k=d3.select(this);var y=a.utils.availableWidth(h,k,g),A=a.utils.availableHeight(i,k,g);a.utils.initSVG(k);var B=y/b[0].values.length*.9;l.domain(c||d3.extent(b[0].values.map(n).concat(t))),l.range(v?e||[.5*y/b[0].values.length,y*(b[0].values.length-.5)/b[0].values.length]:e||[5+B/2,y-B/2-5]),m.domain(d||[d3.min(b[0].values.map(s).concat(u)),d3.max(b[0].values.map(r).concat(u))]).range(f||[A,0]),l.domain()[0]===l.domain()[1]&&l.domain(l.domain()[0]?[l.domain()[0]-.01*l.domain()[0],l.domain()[1]+.01*l.domain()[1]]:[-1,1]),m.domain()[0]===m.domain()[1]&&m.domain(m.domain()[0]?[m.domain()[0]+.01*m.domain()[0],m.domain()[1]-.01*m.domain()[1]]:[-1,1]);var C=d3.select(this).selectAll("g.nv-wrap.nv-ohlcBar").data([b[0].values]),D=C.enter().append("g").attr("class","nvd3 nv-wrap nv-ohlcBar"),E=D.append("defs"),F=D.append("g"),G=C.select("g");F.append("g").attr("class","nv-ticks"),C.attr("transform","translate("+g.left+","+g.top+")"),k.on("click",function(a,b){z.chartClick({data:a,index:b,pos:d3.event,id:j})}),E.append("clipPath").attr("id","nv-chart-clip-path-"+j).append("rect"),C.select("#nv-chart-clip-path-"+j+" rect").attr("width",y).attr("height",A),G.attr("clip-path",w?"url(#nv-chart-clip-path-"+j+")":"");var H=C.select(".nv-ticks").selectAll(".nv-tick").data(function(a){return a});H.exit().remove(),H.enter().append("path").attr("class",function(a,b,c){return(p(a,b)>q(a,b)?"nv-tick negative":"nv-tick positive")+" nv-tick-"+c+"-"+b}).attr("d",function(a,b){return"m0,0l0,"+(m(p(a,b))-m(r(a,b)))+"l"+-B/2+",0l"+B/2+",0l0,"+(m(s(a,b))-m(p(a,b)))+"l0,"+(m(q(a,b))-m(s(a,b)))+"l"+B/2+",0l"+-B/2+",0z"}).attr("transform",function(a,b){return"translate("+l(n(a,b))+","+m(r(a,b))+")"}).attr("fill",function(){return x[0]}).attr("stroke",function(){return x[0]}).attr("x",0).attr("y",function(a,b){return m(Math.max(0,o(a,b)))}).attr("height",function(a,b){return Math.abs(m(o(a,b))-m(0))}),H.attr("class",function(a,b,c){return(p(a,b)>q(a,b)?"nv-tick negative":"nv-tick positive")+" nv-tick-"+c+"-"+b}),d3.transition(H).attr("transform",function(a,b){return"translate("+l(n(a,b))+","+m(r(a,b))+")"}).attr("d",function(a,c){var d=y/b[0].values.length*.9;return"m0,0l0,"+(m(p(a,c))-m(r(a,c)))+"l"+-d/2+",0l"+d/2+",0l0,"+(m(s(a,c))-m(p(a,c)))+"l0,"+(m(q(a,c))-m(s(a,c)))+"l"+d/2+",0l"+-d/2+",0z"})}),b}var c,d,e,f,g={top:0,right:0,bottom:0,left:0},h=null,i=null,j=Math.floor(1e4*Math.random()),k=null,l=d3.scale.linear(),m=d3.scale.linear(),n=function(a){return a.x},o=function(a){return a.y},p=function(a){return a.open},q=function(a){return a.close},r=function(a){return a.high},s=function(a){return a.low},t=[],u=[],v=!1,w=!0,x=a.utils.defaultColor(),y=!1,z=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState","renderEnd","chartClick","elementClick","elementDblClick","elementMouseover","elementMouseout","elementMousemove");return b.highlightPoint=function(a,c){b.clearHighlights(),k.select(".nv-ohlcBar .nv-tick-0-"+a).classed("hover",c)},b.clearHighlights=function(){k.select(".nv-ohlcBar .nv-tick.hover").classed("hover",!1)},b.dispatch=z,b.options=a.utils.optionsFunc.bind(b),b._options=Object.create({},{width:{get:function(){return h},set:function(a){h=a}},height:{get:function(){return i},set:function(a){i=a}},xScale:{get:function(){return l},set:function(a){l=a}},yScale:{get:function(){return m},set:function(a){m=a}},xDomain:{get:function(){return c},set:function(a){c=a}},yDomain:{get:function(){return d},set:function(a){d=a}},xRange:{get:function(){return e},set:function(a){e=a}},yRange:{get:function(){return f},set:function(a){f=a}},forceX:{get:function(){return t},set:function(a){t=a}},forceY:{get:function(){return u},set:function(a){u=a}},padData:{get:function(){return v},set:function(a){v=a}},clipEdge:{get:function(){return w},set:function(a){w=a}},id:{get:function(){return j},set:function(a){j=a}},interactive:{get:function(){return y},set:function(a){y=a}},x:{get:function(){return n},set:function(a){n=a}},y:{get:function(){return o},set:function(a){o=a}},open:{get:function(){return p()},set:function(a){p=a}},close:{get:function(){return q()},set:function(a){q=a}},high:{get:function(){return r},set:function(a){r=a}},low:{get:function(){return s},set:function(a){s=a}},margin:{get:function(){return g},set:function(a){g.top=void 0!=a.top?a.top:g.top,g.right=void 0!=a.right?a.right:g.right,g.bottom=void 0!=a.bottom?a.bottom:g.bottom,g.left=void 0!=a.left?a.left:g.left
}},color:{get:function(){return x},set:function(b){x=a.utils.getColor(b)}}}),a.utils.initOptions(b),b},a.models.parallelCoordinates=function(){"use strict";function b(p){return p.each(function(b){function p(a){return F(h.map(function(b){if(isNaN(a[b])||isNaN(parseFloat(a[b]))){var c=g[b].domain(),d=g[b].range(),e=c[0]-(c[1]-c[0])/9;if(J.indexOf(b)<0){var h=d3.scale.linear().domain([e,c[1]]).range([x-12,d[1]]);g[b].brush.y(h),J.push(b)}return[f(b),g[b](e)]}return J.length>0?(D.style("display","inline"),E.style("display","inline")):(D.style("display","none"),E.style("display","none")),[f(b),g[b](a[b])]}))}function q(){var a=h.filter(function(a){return!g[a].brush.empty()}),b=a.map(function(a){return g[a].brush.extent()});k=[],a.forEach(function(a,c){k[c]={dimension:a,extent:b[c]}}),l=[],M.style("display",function(c){var d=a.every(function(a,d){return isNaN(c[a])&&b[d][0]==g[a].brush.y().domain()[0]?!0:b[d][0]<=c[a]&&c[a]<=b[d][1]});return d&&l.push(c),d?null:"none"}),o.brush({filters:k,active:l})}function r(a){m[a]=this.parentNode.__origin__=f(a),L.attr("visibility","hidden")}function s(a){m[a]=Math.min(w,Math.max(0,this.parentNode.__origin__+=d3.event.x)),M.attr("d",p),h.sort(function(a,b){return u(a)-u(b)}),f.domain(h),N.attr("transform",function(a){return"translate("+u(a)+")"})}function t(a){delete this.parentNode.__origin__,delete m[a],d3.select(this.parentNode).attr("transform","translate("+f(a)+")"),M.attr("d",p),L.attr("d",p).attr("visibility",null)}function u(a){var b=m[a];return null==b?f(a):b}var v=d3.select(this),w=a.utils.availableWidth(d,v,c),x=a.utils.availableHeight(e,v,c);a.utils.initSVG(v),l=b,f.rangePoints([0,w],1).domain(h);var y={};h.forEach(function(a){var c=d3.extent(b,function(b){return+b[a]});return y[a]=!1,void 0===c[0]&&(y[a]=!0,c[0]=0,c[1]=0),c[0]===c[1]&&(c[0]=c[0]-1,c[1]=c[1]+1),g[a]=d3.scale.linear().domain(c).range([.9*(x-12),0]),g[a].brush=d3.svg.brush().y(g[a]).on("brush",q),"name"!=a});var z=v.selectAll("g.nv-wrap.nv-parallelCoordinates").data([b]),A=z.enter().append("g").attr("class","nvd3 nv-wrap nv-parallelCoordinates"),B=A.append("g"),C=z.select("g");B.append("g").attr("class","nv-parallelCoordinates background"),B.append("g").attr("class","nv-parallelCoordinates foreground"),B.append("g").attr("class","nv-parallelCoordinates missingValuesline"),z.attr("transform","translate("+c.left+","+c.top+")");var D,E,F=d3.svg.line().interpolate("cardinal").tension(n),G=d3.svg.axis().orient("left"),H=d3.behavior.drag().on("dragstart",r).on("drag",s).on("dragend",t),I=f.range()[1]-f.range()[0],J=[],K=[0+I/2,x-12,w-I/2,x-12];D=z.select(".missingValuesline").selectAll("line").data([K]),D.enter().append("line"),D.exit().remove(),D.attr("x1",function(a){return a[0]}).attr("y1",function(a){return a[1]}).attr("x2",function(a){return a[2]}).attr("y2",function(a){return a[3]}),E=z.select(".missingValuesline").selectAll("text").data(["undefined values"]),E.append("text").data(["undefined values"]),E.enter().append("text"),E.exit().remove(),E.attr("y",x).attr("x",w-92-I/2).text(function(a){return a});var L=z.select(".background").selectAll("path").data(b);L.enter().append("path"),L.exit().remove(),L.attr("d",p);var M=z.select(".foreground").selectAll("path").data(b);M.enter().append("path"),M.exit().remove(),M.attr("d",p).attr("stroke",j),M.on("mouseover",function(a,b){d3.select(this).classed("hover",!0),o.elementMouseover({label:a.name,data:a.data,index:b,pos:[d3.mouse(this.parentNode)[0],d3.mouse(this.parentNode)[1]]})}),M.on("mouseout",function(a,b){d3.select(this).classed("hover",!1),o.elementMouseout({label:a.name,data:a.data,index:b})});var N=C.selectAll(".dimension").data(h),O=N.enter().append("g").attr("class","nv-parallelCoordinates dimension");O.append("g").attr("class","nv-parallelCoordinates nv-axis"),O.append("g").attr("class","nv-parallelCoordinates-brush"),O.append("text").attr("class","nv-parallelCoordinates nv-label"),N.attr("transform",function(a){return"translate("+f(a)+",0)"}),N.exit().remove(),N.select(".nv-label").style("cursor","move").attr("dy","-1em").attr("text-anchor","middle").text(String).on("mouseover",function(a){o.elementMouseover({dim:a,pos:[d3.mouse(this.parentNode.parentNode)[0],d3.mouse(this.parentNode.parentNode)[1]]})}).on("mouseout",function(a){o.elementMouseout({dim:a})}).call(H),N.select(".nv-axis").each(function(a,b){d3.select(this).call(G.scale(g[a]).tickFormat(d3.format(i[b])))}),N.select(".nv-parallelCoordinates-brush").each(function(a){d3.select(this).call(g[a].brush)}).selectAll("rect").attr("x",-8).attr("width",16)}),b}var c={top:30,right:0,bottom:10,left:0},d=null,e=null,f=d3.scale.ordinal(),g={},h=[],i=[],j=a.utils.defaultColor(),k=[],l=[],m=[],n=1,o=d3.dispatch("brush","elementMouseover","elementMouseout");return b.dispatch=o,b.options=a.utils.optionsFunc.bind(b),b._options=Object.create({},{width:{get:function(){return d},set:function(a){d=a}},height:{get:function(){return e},set:function(a){e=a}},dimensionNames:{get:function(){return h},set:function(a){h=a}},dimensionFormats:{get:function(){return i},set:function(a){i=a}},lineTension:{get:function(){return n},set:function(a){n=a}},dimensions:{get:function(){return h},set:function(b){a.deprecated("dimensions","use dimensionNames instead"),h=b}},margin:{get:function(){return c},set:function(a){c.top=void 0!==a.top?a.top:c.top,c.right=void 0!==a.right?a.right:c.right,c.bottom=void 0!==a.bottom?a.bottom:c.bottom,c.left=void 0!==a.left?a.left:c.left}},color:{get:function(){return j},set:function(b){j=a.utils.getColor(b)}}}),a.utils.initOptions(b),b},a.models.pie=function(){"use strict";function b(E){return D.reset(),E.each(function(b){function E(a,b){a.endAngle=isNaN(a.endAngle)?0:a.endAngle,a.startAngle=isNaN(a.startAngle)?0:a.startAngle,p||(a.innerRadius=0);var c=d3.interpolate(this._current,a);return this._current=c(0),function(a){return B[b](c(a))}}var F=d-c.left-c.right,G=e-c.top-c.bottom,H=Math.min(F,G)/2,I=[],J=[];if(i=d3.select(this),0===z.length)for(var K=H-H/5,L=y*H,M=0;M<b[0].length;M++)I.push(K),J.push(L);else I=z.map(function(a){return(a.outer-a.outer/5)*H}),J=z.map(function(a){return(a.inner-a.inner/5)*H}),y=d3.min(z.map(function(a){return a.inner-a.inner/5}));a.utils.initSVG(i);var N=i.selectAll(".nv-wrap.nv-pie").data(b),O=N.enter().append("g").attr("class","nvd3 nv-wrap nv-pie nv-chart-"+h),P=O.append("g"),Q=N.select("g"),R=P.append("g").attr("class","nv-pie");P.append("g").attr("class","nv-pieLabels"),N.attr("transform","translate("+c.left+","+c.top+")"),Q.select(".nv-pie").attr("transform","translate("+F/2+","+G/2+")"),Q.select(".nv-pieLabels").attr("transform","translate("+F/2+","+G/2+")"),i.on("click",function(a,b){A.chartClick({data:a,index:b,pos:d3.event,id:h})}),B=[],C=[];for(var M=0;M<b[0].length;M++){var S=d3.svg.arc().outerRadius(I[M]),T=d3.svg.arc().outerRadius(I[M]+5);u!==!1&&(S.startAngle(u),T.startAngle(u)),w!==!1&&(S.endAngle(w),T.endAngle(w)),p&&(S.innerRadius(J[M]),T.innerRadius(J[M])),S.cornerRadius&&x&&(S.cornerRadius(x),T.cornerRadius(x)),B.push(S),C.push(T)}var U=d3.layout.pie().sort(null).value(function(a){return a.disabled?0:g(a)});U.padAngle&&v&&U.padAngle(v),p&&q&&(R.append("text").attr("class","nv-pie-title"),N.select(".nv-pie-title").style("text-anchor","middle").text(function(){return q}).style("font-size",Math.min(F,G)*y*2/(q.length+2)+"px").attr("dy","0.35em").attr("transform",function(){return"translate(0, "+s+")"}));var V=N.select(".nv-pie").selectAll(".nv-slice").data(U),W=N.select(".nv-pieLabels").selectAll(".nv-label").data(U);V.exit().remove(),W.exit().remove();var X=V.enter().append("g");X.attr("class","nv-slice"),X.on("mouseover",function(a,b){d3.select(this).classed("hover",!0),r&&d3.select(this).select("path").transition().duration(70).attr("d",C[b]),A.elementMouseover({data:a.data,index:b,color:d3.select(this).style("fill")})}),X.on("mouseout",function(a,b){d3.select(this).classed("hover",!1),r&&d3.select(this).select("path").transition().duration(50).attr("d",B[b]),A.elementMouseout({data:a.data,index:b})}),X.on("mousemove",function(a,b){A.elementMousemove({data:a.data,index:b})}),X.on("click",function(a,b){A.elementClick({data:a.data,index:b,color:d3.select(this).style("fill")})}),X.on("dblclick",function(a,b){A.elementDblClick({data:a.data,index:b,color:d3.select(this).style("fill")})}),V.attr("fill",function(a,b){return j(a.data,b)}),V.attr("stroke",function(a,b){return j(a.data,b)});X.append("path").each(function(a){this._current=a});if(V.select("path").transition().attr("d",function(a,b){return B[b](a)}).attrTween("d",E),l){for(var Y=[],M=0;M<b[0].length;M++)Y.push(B[M]),m?p&&(Y[M]=d3.svg.arc().outerRadius(B[M].outerRadius()),u!==!1&&Y[M].startAngle(u),w!==!1&&Y[M].endAngle(w)):p||Y[M].innerRadius(0);W.enter().append("g").classed("nv-label",!0).each(function(a){var b=d3.select(this);b.attr("transform",function(a,b){if(t){a.outerRadius=I[b]+10,a.innerRadius=I[b]+15;var c=(a.startAngle+a.endAngle)/2*(180/Math.PI);return(a.startAngle+a.endAngle)/2<Math.PI?c-=90:c+=90,"translate("+Y[b].centroid(a)+") rotate("+c+")"}return a.outerRadius=H+10,a.innerRadius=H+15,"translate("+Y[b].centroid(a)+")"}),b.append("rect").style("stroke","#fff").style("fill","#fff").attr("rx",3).attr("ry",3),b.append("text").style("text-anchor",t?(a.startAngle+a.endAngle)/2<Math.PI?"start":"end":"middle").style("fill","#000")});var Z={},$=14,_=140,ab=function(a){return Math.floor(a[0]/_)*_+","+Math.floor(a[1]/$)*$};W.watchTransition(D,"pie labels").attr("transform",function(a,b){if(t){a.outerRadius=I[b]+10,a.innerRadius=I[b]+15;var c=(a.startAngle+a.endAngle)/2*(180/Math.PI);return(a.startAngle+a.endAngle)/2<Math.PI?c-=90:c+=90,"translate("+Y[b].centroid(a)+") rotate("+c+")"}a.outerRadius=H+10,a.innerRadius=H+15;var d=Y[b].centroid(a);if(a.value){var e=ab(d);Z[e]&&(d[1]-=$),Z[ab(d)]=!0}return"translate("+d+")"}),W.select(".nv-label text").style("text-anchor",function(a){return t?(a.startAngle+a.endAngle)/2<Math.PI?"start":"end":"middle"}).text(function(a,b){var c=(a.endAngle-a.startAngle)/(2*Math.PI),d="";if(!a.value||o>c)return"";if("function"==typeof n)d=n(a,b,{key:f(a.data),value:g(a.data),percent:k(c)});else switch(n){case"key":d=f(a.data);break;case"value":d=k(g(a.data));break;case"percent":d=d3.format("%")(c)}return d})}}),D.renderEnd("pie immediate"),b}var c={top:0,right:0,bottom:0,left:0},d=500,e=500,f=function(a){return a.x},g=function(a){return a.y},h=Math.floor(1e4*Math.random()),i=null,j=a.utils.defaultColor(),k=d3.format(",.2f"),l=!0,m=!1,n="key",o=.02,p=!1,q=!1,r=!0,s=0,t=!1,u=!1,v=!1,w=!1,x=0,y=.5,z=[],A=d3.dispatch("chartClick","elementClick","elementDblClick","elementMouseover","elementMouseout","elementMousemove","renderEnd"),B=[],C=[],D=a.utils.renderWatch(A);return b.dispatch=A,b.options=a.utils.optionsFunc.bind(b),b._options=Object.create({},{arcsRadius:{get:function(){return z},set:function(a){z=a}},width:{get:function(){return d},set:function(a){d=a}},height:{get:function(){return e},set:function(a){e=a}},showLabels:{get:function(){return l},set:function(a){l=a}},title:{get:function(){return q},set:function(a){q=a}},titleOffset:{get:function(){return s},set:function(a){s=a}},labelThreshold:{get:function(){return o},set:function(a){o=a}},valueFormat:{get:function(){return k},set:function(a){k=a}},x:{get:function(){return f},set:function(a){f=a}},id:{get:function(){return h},set:function(a){h=a}},endAngle:{get:function(){return w},set:function(a){w=a}},startAngle:{get:function(){return u},set:function(a){u=a}},padAngle:{get:function(){return v},set:function(a){v=a}},cornerRadius:{get:function(){return x},set:function(a){x=a}},donutRatio:{get:function(){return y},set:function(a){y=a}},labelsOutside:{get:function(){return m},set:function(a){m=a}},labelSunbeamLayout:{get:function(){return t},set:function(a){t=a}},donut:{get:function(){return p},set:function(a){p=a}},growOnHover:{get:function(){return r},set:function(a){r=a}},pieLabelsOutside:{get:function(){return m},set:function(b){m=b,a.deprecated("pieLabelsOutside","use labelsOutside instead")}},donutLabelsOutside:{get:function(){return m},set:function(b){m=b,a.deprecated("donutLabelsOutside","use labelsOutside instead")}},labelFormat:{get:function(){return k},set:function(b){k=b,a.deprecated("labelFormat","use valueFormat instead")}},margin:{get:function(){return c},set:function(a){c.top="undefined"!=typeof a.top?a.top:c.top,c.right="undefined"!=typeof a.right?a.right:c.right,c.bottom="undefined"!=typeof a.bottom?a.bottom:c.bottom,c.left="undefined"!=typeof a.left?a.left:c.left}},y:{get:function(){return g},set:function(a){g=d3.functor(a)}},color:{get:function(){return j},set:function(b){j=a.utils.getColor(b)}},labelType:{get:function(){return n},set:function(a){n=a||"key"}}}),a.utils.initOptions(b),b},a.models.pieChart=function(){"use strict";function b(e){return q.reset(),q.models(c),e.each(function(e){var k=d3.select(this);a.utils.initSVG(k);var n=a.utils.availableWidth(g,k,f),o=a.utils.availableHeight(h,k,f);if(b.update=function(){k.transition().call(b)},b.container=this,l.setter(s(e),b.update).getter(r(e)).update(),l.disabled=e.map(function(a){return!!a.disabled}),!m){var q;m={};for(q in l)m[q]=l[q]instanceof Array?l[q].slice(0):l[q]}if(!e||!e.length)return a.utils.noData(b,k),b;k.selectAll(".nv-noData").remove();var t=k.selectAll("g.nv-wrap.nv-pieChart").data([e]),u=t.enter().append("g").attr("class","nvd3 nv-wrap nv-pieChart").append("g"),v=t.select("g");if(u.append("g").attr("class","nv-pieWrap"),u.append("g").attr("class","nv-legendWrap"),i)if("top"===j)d.width(n).key(c.x()),t.select(".nv-legendWrap").datum(e).call(d),f.top!=d.height()&&(f.top=d.height(),o=a.utils.availableHeight(h,k,f)),t.select(".nv-legendWrap").attr("transform","translate(0,"+-f.top+")");else if("right"===j){var w=a.models.legend().width();w>n/2&&(w=n/2),d.height(o).key(c.x()),d.width(w),n-=d.width(),t.select(".nv-legendWrap").datum(e).call(d).attr("transform","translate("+n+",0)")}t.attr("transform","translate("+f.left+","+f.top+")"),c.width(n).height(o);var x=v.select(".nv-pieWrap").datum([e]);d3.transition(x).call(c),d.dispatch.on("stateChange",function(a){for(var c in a)l[c]=a[c];p.stateChange(l),b.update()}),p.on("changeState",function(a){"undefined"!=typeof a.disabled&&(e.forEach(function(b,c){b.disabled=a.disabled[c]}),l.disabled=a.disabled),b.update()})}),q.renderEnd("pieChart immediate"),b}var c=a.models.pie(),d=a.models.legend(),e=a.models.tooltip(),f={top:30,right:20,bottom:20,left:20},g=null,h=null,i=!0,j="top",k=a.utils.defaultColor(),l=a.utils.state(),m=null,n=null,o=250,p=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState","renderEnd");e.headerEnabled(!1).duration(0).valueFormatter(function(a,b){return c.valueFormat()(a,b)});var q=a.utils.renderWatch(p),r=function(a){return function(){return{active:a.map(function(a){return!a.disabled})}}},s=function(a){return function(b){void 0!==b.active&&a.forEach(function(a,c){a.disabled=!b.active[c]})}};return c.dispatch.on("elementMouseover.tooltip",function(a){a.series={key:b.x()(a.data),value:b.y()(a.data),color:a.color},e.data(a).hidden(!1)}),c.dispatch.on("elementMouseout.tooltip",function(){e.hidden(!0)}),c.dispatch.on("elementMousemove.tooltip",function(){e.position({top:d3.event.pageY,left:d3.event.pageX})()}),b.legend=d,b.dispatch=p,b.pie=c,b.tooltip=e,b.options=a.utils.optionsFunc.bind(b),b._options=Object.create({},{noData:{get:function(){return n},set:function(a){n=a}},showLegend:{get:function(){return i},set:function(a){i=a}},legendPosition:{get:function(){return j},set:function(a){j=a}},defaultState:{get:function(){return m},set:function(a){m=a}},tooltips:{get:function(){return e.enabled()},set:function(b){a.deprecated("tooltips","use chart.tooltip.enabled() instead"),e.enabled(!!b)}},tooltipContent:{get:function(){return e.contentGenerator()},set:function(b){a.deprecated("tooltipContent","use chart.tooltip.contentGenerator() instead"),e.contentGenerator(b)}},color:{get:function(){return k},set:function(a){k=a,d.color(k),c.color(k)}},duration:{get:function(){return o},set:function(a){o=a,q.reset(o)}},margin:{get:function(){return f},set:function(a){f.top=void 0!==a.top?a.top:f.top,f.right=void 0!==a.right?a.right:f.right,f.bottom=void 0!==a.bottom?a.bottom:f.bottom,f.left=void 0!==a.left?a.left:f.left}}}),a.utils.inheritOptions(b,c),a.utils.initOptions(b),b},a.models.scatter=function(){"use strict";function b(N){return P.reset(),N.each(function(b){function N(){if(O=!1,!w)return!1;if(M===!0){var a=d3.merge(b.map(function(a,b){return a.values.map(function(a,c){var d=p(a,c),e=q(a,c);return[m(d)+1e-4*Math.random(),n(e)+1e-4*Math.random(),b,c,a]}).filter(function(a,b){return x(a[4],b)})}));if(0==a.length)return!1;a.length<3&&(a.push([m.range()[0]-20,n.range()[0]-20,null,null]),a.push([m.range()[1]+20,n.range()[1]+20,null,null]),a.push([m.range()[0]-20,n.range()[0]+20,null,null]),a.push([m.range()[1]+20,n.range()[1]-20,null,null]));var c=d3.geom.polygon([[-10,-10],[-10,i+10],[h+10,i+10],[h+10,-10]]),d=d3.geom.voronoi(a).map(function(b,d){return{data:c.clip(b),series:a[d][2],point:a[d][3]}});U.select(".nv-point-paths").selectAll("path").remove();var e=U.select(".nv-point-paths").selectAll("path").data(d),f=e.enter().append("svg:path").attr("d",function(a){return a&&a.data&&0!==a.data.length?"M"+a.data.join(",")+"Z":"M 0 0"}).attr("id",function(a,b){return"nv-path-"+b}).attr("clip-path",function(a,b){return"url(#nv-clip-"+b+")"});C&&f.style("fill",d3.rgb(230,230,230)).style("fill-opacity",.4).style("stroke-opacity",1).style("stroke",d3.rgb(200,200,200)),B&&(U.select(".nv-point-clips").selectAll("clipPath").remove(),U.select(".nv-point-clips").selectAll("clipPath").data(a).enter().append("svg:clipPath").attr("id",function(a,b){return"nv-clip-"+b}).append("svg:circle").attr("cx",function(a){return a[0]}).attr("cy",function(a){return a[1]}).attr("r",D));var k=function(a,c){if(O)return 0;var d=b[a.series];if(void 0!==d){var e=d.values[a.point];e.color=j(d,a.series),e.x=p(e),e.y=q(e);var f=l.node().getBoundingClientRect(),h=window.pageYOffset||document.documentElement.scrollTop,i=window.pageXOffset||document.documentElement.scrollLeft,k={left:m(p(e,a.point))+f.left+i+g.left+10,top:n(q(e,a.point))+f.top+h+g.top+10};c({point:e,series:d,pos:k,seriesIndex:a.series,pointIndex:a.point})}};e.on("click",function(a){k(a,L.elementClick)}).on("dblclick",function(a){k(a,L.elementDblClick)}).on("mouseover",function(a){k(a,L.elementMouseover)}).on("mouseout",function(a){k(a,L.elementMouseout)})}else U.select(".nv-groups").selectAll(".nv-group").selectAll(".nv-point").on("click",function(a,c){if(O||!b[a.series])return 0;var d=b[a.series],e=d.values[c];L.elementClick({point:e,series:d,pos:[m(p(e,c))+g.left,n(q(e,c))+g.top],seriesIndex:a.series,pointIndex:c})}).on("dblclick",function(a,c){if(O||!b[a.series])return 0;var d=b[a.series],e=d.values[c];L.elementDblClick({point:e,series:d,pos:[m(p(e,c))+g.left,n(q(e,c))+g.top],seriesIndex:a.series,pointIndex:c})}).on("mouseover",function(a,c){if(O||!b[a.series])return 0;var d=b[a.series],e=d.values[c];L.elementMouseover({point:e,series:d,pos:[m(p(e,c))+g.left,n(q(e,c))+g.top],seriesIndex:a.series,pointIndex:c,color:j(a,c)})}).on("mouseout",function(a,c){if(O||!b[a.series])return 0;var d=b[a.series],e=d.values[c];L.elementMouseout({point:e,series:d,seriesIndex:a.series,pointIndex:c,color:j(a,c)})})}l=d3.select(this);var R=a.utils.availableWidth(h,l,g),S=a.utils.availableHeight(i,l,g);a.utils.initSVG(l),b.forEach(function(a,b){a.values.forEach(function(a){a.series=b})});var T=E&&F&&I?[]:d3.merge(b.map(function(a){return a.values.map(function(a,b){return{x:p(a,b),y:q(a,b),size:r(a,b)}})}));m.domain(E||d3.extent(T.map(function(a){return a.x}).concat(t))),m.range(y&&b[0]?G||[(R*z+R)/(2*b[0].values.length),R-R*(1+z)/(2*b[0].values.length)]:G||[0,R]),n.domain(F||d3.extent(T.map(function(a){return a.y}).concat(u))).range(H||[S,0]),o.domain(I||d3.extent(T.map(function(a){return a.size}).concat(v))).range(J||Q),K=m.domain()[0]===m.domain()[1]||n.domain()[0]===n.domain()[1],m.domain()[0]===m.domain()[1]&&m.domain(m.domain()[0]?[m.domain()[0]-.01*m.domain()[0],m.domain()[1]+.01*m.domain()[1]]:[-1,1]),n.domain()[0]===n.domain()[1]&&n.domain(n.domain()[0]?[n.domain()[0]-.01*n.domain()[0],n.domain()[1]+.01*n.domain()[1]]:[-1,1]),isNaN(m.domain()[0])&&m.domain([-1,1]),isNaN(n.domain()[0])&&n.domain([-1,1]),c=c||m,d=d||n,e=e||o;var U=l.selectAll("g.nv-wrap.nv-scatter").data([b]),V=U.enter().append("g").attr("class","nvd3 nv-wrap nv-scatter nv-chart-"+k),W=V.append("defs"),X=V.append("g"),Y=U.select("g");U.classed("nv-single-point",K),X.append("g").attr("class","nv-groups"),X.append("g").attr("class","nv-point-paths"),V.append("g").attr("class","nv-point-clips"),U.attr("transform","translate("+g.left+","+g.top+")"),W.append("clipPath").attr("id","nv-edge-clip-"+k).append("rect"),U.select("#nv-edge-clip-"+k+" rect").attr("width",R).attr("height",S>0?S:0),Y.attr("clip-path",A?"url(#nv-edge-clip-"+k+")":""),O=!0;var Z=U.select(".nv-groups").selectAll(".nv-group").data(function(a){return a},function(a){return a.key});Z.enter().append("g").style("stroke-opacity",1e-6).style("fill-opacity",1e-6),Z.exit().remove(),Z.attr("class",function(a,b){return"nv-group nv-series-"+b}).classed("hover",function(a){return a.hover}),Z.watchTransition(P,"scatter: groups").style("fill",function(a,b){return j(a,b)}).style("stroke",function(a,b){return j(a,b)}).style("stroke-opacity",1).style("fill-opacity",.5);var $=Z.selectAll("path.nv-point").data(function(a){return a.values.map(function(a,b){return[a,b]}).filter(function(a,b){return x(a[0],b)})});$.enter().append("path").style("fill",function(a){return a.color}).style("stroke",function(a){return a.color}).attr("transform",function(a){return"translate("+c(p(a[0],a[1]))+","+d(q(a[0],a[1]))+")"}).attr("d",a.utils.symbol().type(function(a){return s(a[0])}).size(function(a){return o(r(a[0],a[1]))})),$.exit().remove(),Z.exit().selectAll("path.nv-point").watchTransition(P,"scatter exit").attr("transform",function(a){return"translate("+m(p(a[0],a[1]))+","+n(q(a[0],a[1]))+")"}).remove(),$.each(function(a){d3.select(this).classed("nv-point",!0).classed("nv-point-"+a[1],!0).classed("nv-noninteractive",!w).classed("hover",!1)}),$.watchTransition(P,"scatter points").attr("transform",function(a){return"translate("+m(p(a[0],a[1]))+","+n(q(a[0],a[1]))+")"}).attr("d",a.utils.symbol().type(function(a){return s(a[0])}).size(function(a){return o(r(a[0],a[1]))})),clearTimeout(f),f=setTimeout(N,300),c=m.copy(),d=n.copy(),e=o.copy()}),P.renderEnd("scatter immediate"),b}var c,d,e,f,g={top:0,right:0,bottom:0,left:0},h=null,i=null,j=a.utils.defaultColor(),k=Math.floor(1e5*Math.random()),l=null,m=d3.scale.linear(),n=d3.scale.linear(),o=d3.scale.linear(),p=function(a){return a.x},q=function(a){return a.y},r=function(a){return a.size||1},s=function(a){return a.shape||"circle"},t=[],u=[],v=[],w=!0,x=function(a){return!a.notActive},y=!1,z=.1,A=!1,B=!0,C=!1,D=function(){return 25},E=null,F=null,G=null,H=null,I=null,J=null,K=!1,L=d3.dispatch("elementClick","elementDblClick","elementMouseover","elementMouseout","renderEnd"),M=!0,N=250,O=!1,P=a.utils.renderWatch(L,N),Q=[16,256];return b.dispatch=L,b.options=a.utils.optionsFunc.bind(b),b._calls=new function(){this.clearHighlights=function(){return a.dom.write(function(){l.selectAll(".nv-point.hover").classed("hover",!1)}),null},this.highlightPoint=function(b,c,d){a.dom.write(function(){l.select(" .nv-series-"+b+" .nv-point-"+c).classed("hover",d)})}},L.on("elementMouseover.point",function(a){w&&b._calls.highlightPoint(a.seriesIndex,a.pointIndex,!0)}),L.on("elementMouseout.point",function(a){w&&b._calls.highlightPoint(a.seriesIndex,a.pointIndex,!1)}),b._options=Object.create({},{width:{get:function(){return h},set:function(a){h=a}},height:{get:function(){return i},set:function(a){i=a}},xScale:{get:function(){return m},set:function(a){m=a}},yScale:{get:function(){return n},set:function(a){n=a}},pointScale:{get:function(){return o},set:function(a){o=a}},xDomain:{get:function(){return E},set:function(a){E=a}},yDomain:{get:function(){return F},set:function(a){F=a}},pointDomain:{get:function(){return I},set:function(a){I=a}},xRange:{get:function(){return G},set:function(a){G=a}},yRange:{get:function(){return H},set:function(a){H=a}},pointRange:{get:function(){return J},set:function(a){J=a}},forceX:{get:function(){return t},set:function(a){t=a}},forceY:{get:function(){return u},set:function(a){u=a}},forcePoint:{get:function(){return v},set:function(a){v=a}},interactive:{get:function(){return w},set:function(a){w=a}},pointActive:{get:function(){return x},set:function(a){x=a}},padDataOuter:{get:function(){return z},set:function(a){z=a}},padData:{get:function(){return y},set:function(a){y=a}},clipEdge:{get:function(){return A},set:function(a){A=a}},clipVoronoi:{get:function(){return B},set:function(a){B=a}},clipRadius:{get:function(){return D},set:function(a){D=a}},showVoronoi:{get:function(){return C},set:function(a){C=a}},id:{get:function(){return k},set:function(a){k=a}},x:{get:function(){return p},set:function(a){p=d3.functor(a)}},y:{get:function(){return q},set:function(a){q=d3.functor(a)}},pointSize:{get:function(){return r},set:function(a){r=d3.functor(a)}},pointShape:{get:function(){return s},set:function(a){s=d3.functor(a)}},margin:{get:function(){return g},set:function(a){g.top=void 0!==a.top?a.top:g.top,g.right=void 0!==a.right?a.right:g.right,g.bottom=void 0!==a.bottom?a.bottom:g.bottom,g.left=void 0!==a.left?a.left:g.left}},duration:{get:function(){return N},set:function(a){N=a,P.reset(N)}},color:{get:function(){return j},set:function(b){j=a.utils.getColor(b)}},useVoronoi:{get:function(){return M},set:function(a){M=a,M===!1&&(B=!1)}}}),a.utils.initOptions(b),b},a.models.scatterChart=function(){"use strict";function b(z){return D.reset(),D.models(c),t&&D.models(d),u&&D.models(e),q&&D.models(g),r&&D.models(h),z.each(function(z){m=d3.select(this),a.utils.initSVG(m);var G=a.utils.availableWidth(k,m,j),H=a.utils.availableHeight(l,m,j);if(b.update=function(){0===A?m.call(b):m.transition().duration(A).call(b)},b.container=this,w.setter(F(z),b.update).getter(E(z)).update(),w.disabled=z.map(function(a){return!!a.disabled}),!x){var I;x={};for(I in w)x[I]=w[I]instanceof Array?w[I].slice(0):w[I]}if(!(z&&z.length&&z.filter(function(a){return a.values.length}).length))return a.utils.noData(b,m),D.renderEnd("scatter immediate"),b;m.selectAll(".nv-noData").remove(),o=c.xScale(),p=c.yScale();var J=m.selectAll("g.nv-wrap.nv-scatterChart").data([z]),K=J.enter().append("g").attr("class","nvd3 nv-wrap nv-scatterChart nv-chart-"+c.id()),L=K.append("g"),M=J.select("g");if(L.append("rect").attr("class","nvd3 nv-background").style("pointer-events","none"),L.append("g").attr("class","nv-x nv-axis"),L.append("g").attr("class","nv-y nv-axis"),L.append("g").attr("class","nv-scatterWrap"),L.append("g").attr("class","nv-regressionLinesWrap"),L.append("g").attr("class","nv-distWrap"),L.append("g").attr("class","nv-legendWrap"),v&&M.select(".nv-y.nv-axis").attr("transform","translate("+G+",0)"),s){var N=G;f.width(N),J.select(".nv-legendWrap").datum(z).call(f),j.top!=f.height()&&(j.top=f.height(),H=a.utils.availableHeight(l,m,j)),J.select(".nv-legendWrap").attr("transform","translate(0,"+-j.top+")")}J.attr("transform","translate("+j.left+","+j.top+")"),c.width(G).height(H).color(z.map(function(a,b){return a.color=a.color||n(a,b),a.color}).filter(function(a,b){return!z[b].disabled})),J.select(".nv-scatterWrap").datum(z.filter(function(a){return!a.disabled})).call(c),J.select(".nv-regressionLinesWrap").attr("clip-path","url(#nv-edge-clip-"+c.id()+")");var O=J.select(".nv-regressionLinesWrap").selectAll(".nv-regLines").data(function(a){return a});O.enter().append("g").attr("class","nv-regLines");var P=O.selectAll(".nv-regLine").data(function(a){return[a]});P.enter().append("line").attr("class","nv-regLine").style("stroke-opacity",0),P.filter(function(a){return a.intercept&&a.slope}).watchTransition(D,"scatterPlusLineChart: regline").attr("x1",o.range()[0]).attr("x2",o.range()[1]).attr("y1",function(a){return p(o.domain()[0]*a.slope+a.intercept)}).attr("y2",function(a){return p(o.domain()[1]*a.slope+a.intercept)}).style("stroke",function(a,b,c){return n(a,c)}).style("stroke-opacity",function(a){return a.disabled||"undefined"==typeof a.slope||"undefined"==typeof a.intercept?0:1}),t&&(d.scale(o)._ticks(a.utils.calcTicksX(G/100,z)).tickSize(-H,0),M.select(".nv-x.nv-axis").attr("transform","translate(0,"+p.range()[0]+")").call(d)),u&&(e.scale(p)._ticks(a.utils.calcTicksY(H/36,z)).tickSize(-G,0),M.select(".nv-y.nv-axis").call(e)),q&&(g.getData(c.x()).scale(o).width(G).color(z.map(function(a,b){return a.color||n(a,b)}).filter(function(a,b){return!z[b].disabled})),L.select(".nv-distWrap").append("g").attr("class","nv-distributionX"),M.select(".nv-distributionX").attr("transform","translate(0,"+p.range()[0]+")").datum(z.filter(function(a){return!a.disabled})).call(g)),r&&(h.getData(c.y()).scale(p).width(H).color(z.map(function(a,b){return a.color||n(a,b)}).filter(function(a,b){return!z[b].disabled})),L.select(".nv-distWrap").append("g").attr("class","nv-distributionY"),M.select(".nv-distributionY").attr("transform","translate("+(v?G:-h.size())+",0)").datum(z.filter(function(a){return!a.disabled})).call(h)),f.dispatch.on("stateChange",function(a){for(var c in a)w[c]=a[c];y.stateChange(w),b.update()}),y.on("changeState",function(a){"undefined"!=typeof a.disabled&&(z.forEach(function(b,c){b.disabled=a.disabled[c]}),w.disabled=a.disabled),b.update()}),c.dispatch.on("elementMouseout.tooltip",function(a){i.hidden(!0),m.select(".nv-chart-"+c.id()+" .nv-series-"+a.seriesIndex+" .nv-distx-"+a.pointIndex).attr("y1",0),m.select(".nv-chart-"+c.id()+" .nv-series-"+a.seriesIndex+" .nv-disty-"+a.pointIndex).attr("x2",h.size())}),c.dispatch.on("elementMouseover.tooltip",function(a){m.select(".nv-series-"+a.seriesIndex+" .nv-distx-"+a.pointIndex).attr("y1",a.pos.top-H-j.top),m.select(".nv-series-"+a.seriesIndex+" .nv-disty-"+a.pointIndex).attr("x2",a.pos.left+g.size()-j.left),i.position(a.pos).data(a).hidden(!1)}),B=o.copy(),C=p.copy()}),D.renderEnd("scatter with line immediate"),b}var c=a.models.scatter(),d=a.models.axis(),e=a.models.axis(),f=a.models.legend(),g=a.models.distribution(),h=a.models.distribution(),i=a.models.tooltip(),j={top:30,right:20,bottom:50,left:75},k=null,l=null,m=null,n=a.utils.defaultColor(),o=c.xScale(),p=c.yScale(),q=!1,r=!1,s=!0,t=!0,u=!0,v=!1,w=a.utils.state(),x=null,y=d3.dispatch("stateChange","changeState","renderEnd"),z=null,A=250;c.xScale(o).yScale(p),d.orient("bottom").tickPadding(10),e.orient(v?"right":"left").tickPadding(10),g.axis("x"),h.axis("y"),i.headerFormatter(function(a,b){return d.tickFormat()(a,b)}).valueFormatter(function(a,b){return e.tickFormat()(a,b)});var B,C,D=a.utils.renderWatch(y,A),E=function(a){return function(){return{active:a.map(function(a){return!a.disabled})}}},F=function(a){return function(b){void 0!==b.active&&a.forEach(function(a,c){a.disabled=!b.active[c]})}};return b.dispatch=y,b.scatter=c,b.legend=f,b.xAxis=d,b.yAxis=e,b.distX=g,b.distY=h,b.tooltip=i,b.options=a.utils.optionsFunc.bind(b),b._options=Object.create({},{width:{get:function(){return k},set:function(a){k=a}},height:{get:function(){return l},set:function(a){l=a}},container:{get:function(){return m},set:function(a){m=a}},showDistX:{get:function(){return q},set:function(a){q=a}},showDistY:{get:function(){return r},set:function(a){r=a}},showLegend:{get:function(){return s},set:function(a){s=a}},showXAxis:{get:function(){return t},set:function(a){t=a}},showYAxis:{get:function(){return u},set:function(a){u=a}},defaultState:{get:function(){return x},set:function(a){x=a}},noData:{get:function(){return z},set:function(a){z=a}},duration:{get:function(){return A},set:function(a){A=a}},tooltips:{get:function(){return i.enabled()},set:function(b){a.deprecated("tooltips","use chart.tooltip.enabled() instead"),i.enabled(!!b)
}},tooltipContent:{get:function(){return i.contentGenerator()},set:function(b){a.deprecated("tooltipContent","use chart.tooltip.contentGenerator() instead"),i.contentGenerator(b)}},tooltipXContent:{get:function(){return i.contentGenerator()},set:function(){a.deprecated("tooltipContent","This option is removed, put values into main tooltip.")}},tooltipYContent:{get:function(){return i.contentGenerator()},set:function(){a.deprecated("tooltipContent","This option is removed, put values into main tooltip.")}},margin:{get:function(){return j},set:function(a){j.top=void 0!==a.top?a.top:j.top,j.right=void 0!==a.right?a.right:j.right,j.bottom=void 0!==a.bottom?a.bottom:j.bottom,j.left=void 0!==a.left?a.left:j.left}},rightAlignYAxis:{get:function(){return v},set:function(a){v=a,e.orient(a?"right":"left")}},color:{get:function(){return n},set:function(b){n=a.utils.getColor(b),f.color(n),g.color(n),h.color(n)}}}),a.utils.inheritOptions(b,c),a.utils.initOptions(b),b},a.models.sparkline=function(){"use strict";function b(k){return k.each(function(b){var k=h-g.left-g.right,q=i-g.top-g.bottom;j=d3.select(this),a.utils.initSVG(j),l.domain(c||d3.extent(b,n)).range(e||[0,k]),m.domain(d||d3.extent(b,o)).range(f||[q,0]);{var r=j.selectAll("g.nv-wrap.nv-sparkline").data([b]),s=r.enter().append("g").attr("class","nvd3 nv-wrap nv-sparkline");s.append("g"),r.select("g")}r.attr("transform","translate("+g.left+","+g.top+")");var t=r.selectAll("path").data(function(a){return[a]});t.enter().append("path"),t.exit().remove(),t.style("stroke",function(a,b){return a.color||p(a,b)}).attr("d",d3.svg.line().x(function(a,b){return l(n(a,b))}).y(function(a,b){return m(o(a,b))}));var u=r.selectAll("circle.nv-point").data(function(a){function b(b){if(-1!=b){var c=a[b];return c.pointIndex=b,c}return null}var c=a.map(function(a,b){return o(a,b)}),d=b(c.lastIndexOf(m.domain()[1])),e=b(c.indexOf(m.domain()[0])),f=b(c.length-1);return[e,d,f].filter(function(a){return null!=a})});u.enter().append("circle"),u.exit().remove(),u.attr("cx",function(a){return l(n(a,a.pointIndex))}).attr("cy",function(a){return m(o(a,a.pointIndex))}).attr("r",2).attr("class",function(a){return n(a,a.pointIndex)==l.domain()[1]?"nv-point nv-currentValue":o(a,a.pointIndex)==m.domain()[0]?"nv-point nv-minValue":"nv-point nv-maxValue"})}),b}var c,d,e,f,g={top:2,right:0,bottom:2,left:0},h=400,i=32,j=null,k=!0,l=d3.scale.linear(),m=d3.scale.linear(),n=function(a){return a.x},o=function(a){return a.y},p=a.utils.getColor(["#000"]);return b.options=a.utils.optionsFunc.bind(b),b._options=Object.create({},{width:{get:function(){return h},set:function(a){h=a}},height:{get:function(){return i},set:function(a){i=a}},xDomain:{get:function(){return c},set:function(a){c=a}},yDomain:{get:function(){return d},set:function(a){d=a}},xRange:{get:function(){return e},set:function(a){e=a}},yRange:{get:function(){return f},set:function(a){f=a}},xScale:{get:function(){return l},set:function(a){l=a}},yScale:{get:function(){return m},set:function(a){m=a}},animate:{get:function(){return k},set:function(a){k=a}},x:{get:function(){return n},set:function(a){n=d3.functor(a)}},y:{get:function(){return o},set:function(a){o=d3.functor(a)}},margin:{get:function(){return g},set:function(a){g.top=void 0!==a.top?a.top:g.top,g.right=void 0!==a.right?a.right:g.right,g.bottom=void 0!==a.bottom?a.bottom:g.bottom,g.left=void 0!==a.left?a.left:g.left}},color:{get:function(){return p},set:function(b){p=a.utils.getColor(b)}}}),a.utils.initOptions(b),b},a.models.sparklinePlus=function(){"use strict";function b(p){return p.each(function(p){function q(){if(!j){var a=z.selectAll(".nv-hoverValue").data(i),b=a.enter().append("g").attr("class","nv-hoverValue").style("stroke-opacity",0).style("fill-opacity",0);a.exit().transition().duration(250).style("stroke-opacity",0).style("fill-opacity",0).remove(),a.attr("transform",function(a){return"translate("+c(e.x()(p[a],a))+",0)"}).transition().duration(250).style("stroke-opacity",1).style("fill-opacity",1),i.length&&(b.append("line").attr("x1",0).attr("y1",-f.top).attr("x2",0).attr("y2",u),b.append("text").attr("class","nv-xValue").attr("x",-6).attr("y",-f.top).attr("text-anchor","end").attr("dy",".9em"),z.select(".nv-hoverValue .nv-xValue").text(k(e.x()(p[i[0]],i[0]))),b.append("text").attr("class","nv-yValue").attr("x",6).attr("y",-f.top).attr("text-anchor","start").attr("dy",".9em"),z.select(".nv-hoverValue .nv-yValue").text(l(e.y()(p[i[0]],i[0]))))}}function r(){function a(a,b){for(var c=Math.abs(e.x()(a[0],0)-b),d=0,f=0;f<a.length;f++)Math.abs(e.x()(a[f],f)-b)<c&&(c=Math.abs(e.x()(a[f],f)-b),d=f);return d}if(!j){var b=d3.mouse(this)[0]-f.left;i=[a(p,Math.round(c.invert(b)))],q()}}var s=d3.select(this);a.utils.initSVG(s);var t=a.utils.availableWidth(g,s,f),u=a.utils.availableHeight(h,s,f);if(b.update=function(){s.call(b)},b.container=this,!p||!p.length)return a.utils.noData(b,s),b;s.selectAll(".nv-noData").remove();var v=e.y()(p[p.length-1],p.length-1);c=e.xScale(),d=e.yScale();var w=s.selectAll("g.nv-wrap.nv-sparklineplus").data([p]),x=w.enter().append("g").attr("class","nvd3 nv-wrap nv-sparklineplus"),y=x.append("g"),z=w.select("g");y.append("g").attr("class","nv-sparklineWrap"),y.append("g").attr("class","nv-valueWrap"),y.append("g").attr("class","nv-hoverArea"),w.attr("transform","translate("+f.left+","+f.top+")");var A=z.select(".nv-sparklineWrap");if(e.width(t).height(u),A.call(e),m){var B=z.select(".nv-valueWrap"),C=B.selectAll(".nv-currentValue").data([v]);C.enter().append("text").attr("class","nv-currentValue").attr("dx",o?-8:8).attr("dy",".9em").style("text-anchor",o?"end":"start"),C.attr("x",t+(o?f.right:0)).attr("y",n?function(a){return d(a)}:0).style("fill",e.color()(p[p.length-1],p.length-1)).text(l(v))}y.select(".nv-hoverArea").append("rect").on("mousemove",r).on("click",function(){j=!j}).on("mouseout",function(){i=[],q()}),z.select(".nv-hoverArea rect").attr("transform",function(){return"translate("+-f.left+","+-f.top+")"}).attr("width",t+f.left+f.right).attr("height",u+f.top)}),b}var c,d,e=a.models.sparkline(),f={top:15,right:100,bottom:10,left:50},g=null,h=null,i=[],j=!1,k=d3.format(",r"),l=d3.format(",.2f"),m=!0,n=!0,o=!1,p=null;return b.sparkline=e,b.options=a.utils.optionsFunc.bind(b),b._options=Object.create({},{width:{get:function(){return g},set:function(a){g=a}},height:{get:function(){return h},set:function(a){h=a}},xTickFormat:{get:function(){return k},set:function(a){k=a}},yTickFormat:{get:function(){return l},set:function(a){l=a}},showLastValue:{get:function(){return m},set:function(a){m=a}},alignValue:{get:function(){return n},set:function(a){n=a}},rightAlignValue:{get:function(){return o},set:function(a){o=a}},noData:{get:function(){return p},set:function(a){p=a}},margin:{get:function(){return f},set:function(a){f.top=void 0!==a.top?a.top:f.top,f.right=void 0!==a.right?a.right:f.right,f.bottom=void 0!==a.bottom?a.bottom:f.bottom,f.left=void 0!==a.left?a.left:f.left}}}),a.utils.inheritOptions(b,e),a.utils.initOptions(b),b},a.models.stackedArea=function(){"use strict";function b(m){return u.reset(),u.models(r),m.each(function(m){var s=f-e.left-e.right,v=g-e.top-e.bottom;j=d3.select(this),a.utils.initSVG(j),c=r.xScale(),d=r.yScale();var w=m;m.forEach(function(a,b){a.seriesIndex=b,a.values=a.values.map(function(a,c){return a.index=c,a.seriesIndex=b,a})});var x=m.filter(function(a){return!a.disabled});m=d3.layout.stack().order(o).offset(n).values(function(a){return a.values}).x(k).y(l).out(function(a,b,c){a.display={y:c,y0:b}})(x);var y=j.selectAll("g.nv-wrap.nv-stackedarea").data([m]),z=y.enter().append("g").attr("class","nvd3 nv-wrap nv-stackedarea"),A=z.append("defs"),B=z.append("g"),C=y.select("g");B.append("g").attr("class","nv-areaWrap"),B.append("g").attr("class","nv-scatterWrap"),y.attr("transform","translate("+e.left+","+e.top+")"),0==r.forceY().length&&r.forceY().push(0),r.width(s).height(v).x(k).y(function(a){return a.display.y+a.display.y0}).forceY([0]).color(m.map(function(a){return a.color||h(a,a.seriesIndex)}));var D=C.select(".nv-scatterWrap").datum(m);D.call(r),A.append("clipPath").attr("id","nv-edge-clip-"+i).append("rect"),y.select("#nv-edge-clip-"+i+" rect").attr("width",s).attr("height",v),C.attr("clip-path",q?"url(#nv-edge-clip-"+i+")":"");var E=d3.svg.area().x(function(a,b){return c(k(a,b))}).y0(function(a){return d(a.display.y0)}).y1(function(a){return d(a.display.y+a.display.y0)}).interpolate(p),F=d3.svg.area().x(function(a,b){return c(k(a,b))}).y0(function(a){return d(a.display.y0)}).y1(function(a){return d(a.display.y0)}),G=C.select(".nv-areaWrap").selectAll("path.nv-area").data(function(a){return a});G.enter().append("path").attr("class",function(a,b){return"nv-area nv-area-"+b}).attr("d",function(a){return F(a.values,a.seriesIndex)}).on("mouseover",function(a){d3.select(this).classed("hover",!0),t.areaMouseover({point:a,series:a.key,pos:[d3.event.pageX,d3.event.pageY],seriesIndex:a.seriesIndex})}).on("mouseout",function(a){d3.select(this).classed("hover",!1),t.areaMouseout({point:a,series:a.key,pos:[d3.event.pageX,d3.event.pageY],seriesIndex:a.seriesIndex})}).on("click",function(a){d3.select(this).classed("hover",!1),t.areaClick({point:a,series:a.key,pos:[d3.event.pageX,d3.event.pageY],seriesIndex:a.seriesIndex})}),G.exit().remove(),G.style("fill",function(a){return a.color||h(a,a.seriesIndex)}).style("stroke",function(a){return a.color||h(a,a.seriesIndex)}),G.watchTransition(u,"stackedArea path").attr("d",function(a,b){return E(a.values,b)}),r.dispatch.on("elementMouseover.area",function(a){C.select(".nv-chart-"+i+" .nv-area-"+a.seriesIndex).classed("hover",!0)}),r.dispatch.on("elementMouseout.area",function(a){C.select(".nv-chart-"+i+" .nv-area-"+a.seriesIndex).classed("hover",!1)}),b.d3_stackedOffset_stackPercent=function(a){var b,c,d,e=a.length,f=a[0].length,g=[];for(c=0;f>c;++c){for(b=0,d=0;b<w.length;b++)d+=l(w[b].values[c]);if(d)for(b=0;e>b;b++)a[b][c][1]/=d;else for(b=0;e>b;b++)a[b][c][1]=0}for(c=0;f>c;++c)g[c]=0;return g}}),u.renderEnd("stackedArea immediate"),b}var c,d,e={top:0,right:0,bottom:0,left:0},f=960,g=500,h=a.utils.defaultColor(),i=Math.floor(1e5*Math.random()),j=null,k=function(a){return a.x},l=function(a){return a.y},m="stack",n="zero",o="default",p="linear",q=!1,r=a.models.scatter(),s=250,t=d3.dispatch("areaClick","areaMouseover","areaMouseout","renderEnd","elementClick","elementMouseover","elementMouseout");r.pointSize(2.2).pointDomain([2.2,2.2]);var u=a.utils.renderWatch(t,s);return b.dispatch=t,b.scatter=r,r.dispatch.on("elementClick",function(){t.elementClick.apply(this,arguments)}),r.dispatch.on("elementMouseover",function(){t.elementMouseover.apply(this,arguments)}),r.dispatch.on("elementMouseout",function(){t.elementMouseout.apply(this,arguments)}),b.interpolate=function(a){return arguments.length?(p=a,b):p},b.duration=function(a){return arguments.length?(s=a,u.reset(s),r.duration(s),b):s},b.dispatch=t,b.scatter=r,b.options=a.utils.optionsFunc.bind(b),b._options=Object.create({},{width:{get:function(){return f},set:function(a){f=a}},height:{get:function(){return g},set:function(a){g=a}},clipEdge:{get:function(){return q},set:function(a){q=a}},offset:{get:function(){return n},set:function(a){n=a}},order:{get:function(){return o},set:function(a){o=a}},interpolate:{get:function(){return p},set:function(a){p=a}},x:{get:function(){return k},set:function(a){k=d3.functor(a)}},y:{get:function(){return l},set:function(a){l=d3.functor(a)}},margin:{get:function(){return e},set:function(a){e.top=void 0!==a.top?a.top:e.top,e.right=void 0!==a.right?a.right:e.right,e.bottom=void 0!==a.bottom?a.bottom:e.bottom,e.left=void 0!==a.left?a.left:e.left}},color:{get:function(){return h},set:function(b){h=a.utils.getColor(b)}},style:{get:function(){return m},set:function(a){switch(m=a){case"stack":b.offset("zero"),b.order("default");break;case"stream":b.offset("wiggle"),b.order("inside-out");break;case"stream-center":b.offset("silhouette"),b.order("inside-out");break;case"expand":b.offset("expand"),b.order("default");break;case"stack_percent":b.offset(b.d3_stackedOffset_stackPercent),b.order("default")}}},duration:{get:function(){return s},set:function(a){s=a,u.reset(s),r.duration(s)}}}),a.utils.inheritOptions(b,r),a.utils.initOptions(b),b},a.models.stackedAreaChart=function(){"use strict";function b(k){return F.reset(),F.models(e),r&&F.models(f),s&&F.models(g),k.each(function(k){var x=d3.select(this),F=this;a.utils.initSVG(x);var K=a.utils.availableWidth(m,x,l),L=a.utils.availableHeight(n,x,l);if(b.update=function(){x.transition().duration(C).call(b)},b.container=this,v.setter(I(k),b.update).getter(H(k)).update(),v.disabled=k.map(function(a){return!!a.disabled}),!w){var M;w={};for(M in v)w[M]=v[M]instanceof Array?v[M].slice(0):v[M]}if(!(k&&k.length&&k.filter(function(a){return a.values.length}).length))return a.utils.noData(b,x),b;x.selectAll(".nv-noData").remove(),c=e.xScale(),d=e.yScale();var N=x.selectAll("g.nv-wrap.nv-stackedAreaChart").data([k]),O=N.enter().append("g").attr("class","nvd3 nv-wrap nv-stackedAreaChart").append("g"),P=N.select("g");if(O.append("rect").style("opacity",0),O.append("g").attr("class","nv-x nv-axis"),O.append("g").attr("class","nv-y nv-axis"),O.append("g").attr("class","nv-stackedWrap"),O.append("g").attr("class","nv-legendWrap"),O.append("g").attr("class","nv-controlsWrap"),O.append("g").attr("class","nv-interactive"),P.select("rect").attr("width",K).attr("height",L),q){var Q=p?K-z:K;h.width(Q),P.select(".nv-legendWrap").datum(k).call(h),l.top!=h.height()&&(l.top=h.height(),L=a.utils.availableHeight(n,x,l)),P.select(".nv-legendWrap").attr("transform","translate("+(K-Q)+","+-l.top+")")}if(p){var R=[{key:B.stacked||"Stacked",metaKey:"Stacked",disabled:"stack"!=e.style(),style:"stack"},{key:B.stream||"Stream",metaKey:"Stream",disabled:"stream"!=e.style(),style:"stream"},{key:B.expanded||"Expanded",metaKey:"Expanded",disabled:"expand"!=e.style(),style:"expand"},{key:B.stack_percent||"Stack %",metaKey:"Stack_Percent",disabled:"stack_percent"!=e.style(),style:"stack_percent"}];z=A.length/3*260,R=R.filter(function(a){return-1!==A.indexOf(a.metaKey)}),i.width(z).color(["#444","#444","#444"]),P.select(".nv-controlsWrap").datum(R).call(i),l.top!=Math.max(i.height(),h.height())&&(l.top=Math.max(i.height(),h.height()),L=a.utils.availableHeight(n,x,l)),P.select(".nv-controlsWrap").attr("transform","translate(0,"+-l.top+")")}N.attr("transform","translate("+l.left+","+l.top+")"),t&&P.select(".nv-y.nv-axis").attr("transform","translate("+K+",0)"),u&&(j.width(K).height(L).margin({left:l.left,top:l.top}).svgContainer(x).xScale(c),N.select(".nv-interactive").call(j)),e.width(K).height(L);var S=P.select(".nv-stackedWrap").datum(k);if(S.transition().call(e),r&&(f.scale(c)._ticks(a.utils.calcTicksX(K/100,k)).tickSize(-L,0),P.select(".nv-x.nv-axis").attr("transform","translate(0,"+L+")"),P.select(".nv-x.nv-axis").transition().duration(0).call(f)),s){var T;if(T="wiggle"===e.offset()?0:a.utils.calcTicksY(L/36,k),g.scale(d)._ticks(T).tickSize(-K,0),"expand"===e.style()||"stack_percent"===e.style()){var U=g.tickFormat();D&&U===J||(D=U),g.tickFormat(J)}else D&&(g.tickFormat(D),D=null);P.select(".nv-y.nv-axis").transition().duration(0).call(g)}e.dispatch.on("areaClick.toggle",function(a){k.forEach(1===k.filter(function(a){return!a.disabled}).length?function(a){a.disabled=!1}:function(b,c){b.disabled=c!=a.seriesIndex}),v.disabled=k.map(function(a){return!!a.disabled}),y.stateChange(v),b.update()}),h.dispatch.on("stateChange",function(a){for(var c in a)v[c]=a[c];y.stateChange(v),b.update()}),i.dispatch.on("legendClick",function(a){a.disabled&&(R=R.map(function(a){return a.disabled=!0,a}),a.disabled=!1,e.style(a.style),v.style=e.style(),y.stateChange(v),b.update())}),j.dispatch.on("elementMousemove",function(c){e.clearHighlights();var d,g,h,i=[];if(k.filter(function(a,b){return a.seriesIndex=b,!a.disabled}).forEach(function(f,j){g=a.interactiveBisect(f.values,c.pointXValue,b.x());var k=f.values[g],l=b.y()(k,g);if(null!=l&&e.highlightPoint(j,g,!0),"undefined"!=typeof k){"undefined"==typeof d&&(d=k),"undefined"==typeof h&&(h=b.xScale()(b.x()(k,g)));var m="expand"==e.style()?k.display.y:b.y()(k,g);i.push({key:f.key,value:m,color:o(f,f.seriesIndex),stackedValue:k.display})}}),i.reverse(),i.length>2){var m=b.yScale().invert(c.mouseY),n=null;i.forEach(function(a,b){m=Math.abs(m);var c=Math.abs(a.stackedValue.y0),d=Math.abs(a.stackedValue.y);return m>=c&&d+c>=m?void(n=b):void 0}),null!=n&&(i[n].highlight=!0)}var p=f.tickFormat()(b.x()(d,g)),q=j.tooltip.valueFormatter();"expand"===e.style()||"stack_percent"===e.style()?(E||(E=q),q=d3.format(".1%")):E&&(q=E,E=null),j.tooltip.position({left:h+l.left,top:c.mouseY+l.top}).chartContainer(F.parentNode).valueFormatter(q).data({value:p,series:i})(),j.renderGuideLine(h)}),j.dispatch.on("elementMouseout",function(){e.clearHighlights()}),y.on("changeState",function(a){"undefined"!=typeof a.disabled&&k.length===a.disabled.length&&(k.forEach(function(b,c){b.disabled=a.disabled[c]}),v.disabled=a.disabled),"undefined"!=typeof a.style&&(e.style(a.style),G=a.style),b.update()})}),F.renderEnd("stacked Area chart immediate"),b}var c,d,e=a.models.stackedArea(),f=a.models.axis(),g=a.models.axis(),h=a.models.legend(),i=a.models.legend(),j=a.interactiveGuideline(),k=a.models.tooltip(),l={top:30,right:25,bottom:50,left:60},m=null,n=null,o=a.utils.defaultColor(),p=!0,q=!0,r=!0,s=!0,t=!1,u=!1,v=a.utils.state(),w=null,x=null,y=d3.dispatch("stateChange","changeState","renderEnd"),z=250,A=["Stacked","Stream","Expanded"],B={},C=250;v.style=e.style(),f.orient("bottom").tickPadding(7),g.orient(t?"right":"left"),k.headerFormatter(function(a,b){return f.tickFormat()(a,b)}).valueFormatter(function(a,b){return g.tickFormat()(a,b)}),j.tooltip.headerFormatter(function(a,b){return f.tickFormat()(a,b)}).valueFormatter(function(a,b){return g.tickFormat()(a,b)});var D=null,E=null;i.updateState(!1);var F=a.utils.renderWatch(y),G=e.style(),H=function(a){return function(){return{active:a.map(function(a){return!a.disabled}),style:e.style()}}},I=function(a){return function(b){void 0!==b.style&&(G=b.style),void 0!==b.active&&a.forEach(function(a,c){a.disabled=!b.active[c]})}},J=d3.format("%");return e.dispatch.on("elementMouseover.tooltip",function(a){a.point.x=e.x()(a.point),a.point.y=e.y()(a.point),k.data(a).position(a.pos).hidden(!1)}),e.dispatch.on("elementMouseout.tooltip",function(){k.hidden(!0)}),b.dispatch=y,b.stacked=e,b.legend=h,b.controls=i,b.xAxis=f,b.yAxis=g,b.interactiveLayer=j,b.tooltip=k,b.dispatch=y,b.options=a.utils.optionsFunc.bind(b),b._options=Object.create({},{width:{get:function(){return m},set:function(a){m=a}},height:{get:function(){return n},set:function(a){n=a}},showLegend:{get:function(){return q},set:function(a){q=a}},showXAxis:{get:function(){return r},set:function(a){r=a}},showYAxis:{get:function(){return s},set:function(a){s=a}},defaultState:{get:function(){return w},set:function(a){w=a}},noData:{get:function(){return x},set:function(a){x=a}},showControls:{get:function(){return p},set:function(a){p=a}},controlLabels:{get:function(){return B},set:function(a){B=a}},controlOptions:{get:function(){return A},set:function(a){A=a}},tooltips:{get:function(){return k.enabled()},set:function(b){a.deprecated("tooltips","use chart.tooltip.enabled() instead"),k.enabled(!!b)}},tooltipContent:{get:function(){return k.contentGenerator()},set:function(b){a.deprecated("tooltipContent","use chart.tooltip.contentGenerator() instead"),k.contentGenerator(b)}},margin:{get:function(){return l},set:function(a){l.top=void 0!==a.top?a.top:l.top,l.right=void 0!==a.right?a.right:l.right,l.bottom=void 0!==a.bottom?a.bottom:l.bottom,l.left=void 0!==a.left?a.left:l.left}},duration:{get:function(){return C},set:function(a){C=a,F.reset(C),e.duration(C),f.duration(C),g.duration(C)}},color:{get:function(){return o},set:function(b){o=a.utils.getColor(b),h.color(o),e.color(o)}},rightAlignYAxis:{get:function(){return t},set:function(a){t=a,g.orient(t?"right":"left")}},useInteractiveGuideline:{get:function(){return u},set:function(a){u=!!a,b.interactive(!a),b.useVoronoi(!a),e.scatter.interactive(!a)}}}),a.utils.inheritOptions(b,e),a.utils.initOptions(b),b},a.models.sunburst=function(){"use strict";function b(u){return t.reset(),u.each(function(b){function t(a){a.x0=a.x,a.dx0=a.dx}function u(a){var b=d3.interpolate(p.domain(),[a.x,a.x+a.dx]),c=d3.interpolate(q.domain(),[a.y,1]),d=d3.interpolate(q.range(),[a.y?20:0,y]);return function(a,e){return e?function(){return s(a)}:function(e){return p.domain(b(e)),q.domain(c(e)).range(d(e)),s(a)}}}l=d3.select(this);var v,w=a.utils.availableWidth(g,l,f),x=a.utils.availableHeight(h,l,f),y=Math.min(w,x)/2;a.utils.initSVG(l);var z=l.selectAll(".nv-wrap.nv-sunburst").data(b),A=z.enter().append("g").attr("class","nvd3 nv-wrap nv-sunburst nv-chart-"+k),B=A.selectAll("nv-sunburst");z.attr("transform","translate("+w/2+","+x/2+")"),l.on("click",function(a,b){o.chartClick({data:a,index:b,pos:d3.event,id:k})}),q.range([0,y]),c=c||b,e=b[0],r.value(j[i]||j.count),v=B.data(r.nodes).enter().append("path").attr("d",s).style("fill",function(a){return m((a.children?a:a.parent).name)}).style("stroke","#FFF").on("click",function(a){d!==c&&c!==a&&(d=c),c=a,v.transition().duration(n).attrTween("d",u(a))}).each(t).on("dblclick",function(a){d.parent==a&&v.transition().duration(n).attrTween("d",u(e))}).each(t).on("mouseover",function(a){d3.select(this).classed("hover",!0).style("opacity",.8),o.elementMouseover({data:a,color:d3.select(this).style("fill")})}).on("mouseout",function(a){d3.select(this).classed("hover",!1).style("opacity",1),o.elementMouseout({data:a})}).on("mousemove",function(a){o.elementMousemove({data:a})})}),t.renderEnd("sunburst immediate"),b}var c,d,e,f={top:0,right:0,bottom:0,left:0},g=null,h=null,i="count",j={count:function(){return 1},size:function(a){return a.size}},k=Math.floor(1e4*Math.random()),l=null,m=a.utils.defaultColor(),n=500,o=d3.dispatch("chartClick","elementClick","elementDblClick","elementMousemove","elementMouseover","elementMouseout","renderEnd"),p=d3.scale.linear().range([0,2*Math.PI]),q=d3.scale.sqrt(),r=d3.layout.partition().sort(null).value(function(){return 1}),s=d3.svg.arc().startAngle(function(a){return Math.max(0,Math.min(2*Math.PI,p(a.x)))}).endAngle(function(a){return Math.max(0,Math.min(2*Math.PI,p(a.x+a.dx)))}).innerRadius(function(a){return Math.max(0,q(a.y))}).outerRadius(function(a){return Math.max(0,q(a.y+a.dy))}),t=a.utils.renderWatch(o);return b.dispatch=o,b.options=a.utils.optionsFunc.bind(b),b._options=Object.create({},{width:{get:function(){return g},set:function(a){g=a}},height:{get:function(){return h},set:function(a){h=a}},mode:{get:function(){return i},set:function(a){i=a}},id:{get:function(){return k},set:function(a){k=a}},duration:{get:function(){return n},set:function(a){n=a}},margin:{get:function(){return f},set:function(a){f.top=void 0!=a.top?a.top:f.top,f.right=void 0!=a.right?a.right:f.right,f.bottom=void 0!=a.bottom?a.bottom:f.bottom,f.left=void 0!=a.left?a.left:f.left}},color:{get:function(){return m},set:function(b){m=a.utils.getColor(b)}}}),a.utils.initOptions(b),b},a.models.sunburstChart=function(){"use strict";function b(d){return m.reset(),m.models(c),d.each(function(d){var h=d3.select(this);a.utils.initSVG(h);var i=a.utils.availableWidth(f,h,e),j=a.utils.availableHeight(g,h,e);if(b.update=function(){0===k?h.call(b):h.transition().duration(k).call(b)},b.container=this,!d||!d.length)return a.utils.noData(b,h),b;h.selectAll(".nv-noData").remove();var l=h.selectAll("g.nv-wrap.nv-sunburstChart").data(d),m=l.enter().append("g").attr("class","nvd3 nv-wrap nv-sunburstChart").append("g"),n=l.select("g");m.append("g").attr("class","nv-sunburstWrap"),l.attr("transform","translate("+e.left+","+e.top+")"),c.width(i).height(j);var o=n.select(".nv-sunburstWrap").datum(d);d3.transition(o).call(c)}),m.renderEnd("sunburstChart immediate"),b}var c=a.models.sunburst(),d=a.models.tooltip(),e={top:30,right:20,bottom:20,left:20},f=null,g=null,h=a.utils.defaultColor(),i=(Math.round(1e5*Math.random()),null),j=null,k=250,l=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState","renderEnd"),m=a.utils.renderWatch(l);return d.headerEnabled(!1).duration(0).valueFormatter(function(a){return a}),c.dispatch.on("elementMouseover.tooltip",function(a){a.series={key:a.data.name,value:a.data.size,color:a.color},d.data(a).hidden(!1)}),c.dispatch.on("elementMouseout.tooltip",function(){d.hidden(!0)}),c.dispatch.on("elementMousemove.tooltip",function(){d.position({top:d3.event.pageY,left:d3.event.pageX})()}),b.dispatch=l,b.sunburst=c,b.tooltip=d,b.options=a.utils.optionsFunc.bind(b),b._options=Object.create({},{noData:{get:function(){return j},set:function(a){j=a}},defaultState:{get:function(){return i},set:function(a){i=a}},color:{get:function(){return h},set:function(a){h=a,c.color(h)}},duration:{get:function(){return k},set:function(a){k=a,m.reset(k),c.duration(k)}},margin:{get:function(){return e},set:function(a){e.top=void 0!==a.top?a.top:e.top,e.right=void 0!==a.right?a.right:e.right,e.bottom=void 0!==a.bottom?a.bottom:e.bottom,e.left=void 0!==a.left?a.left:e.left}}}),a.utils.inheritOptions(b,c),a.utils.initOptions(b),b},a.version="1.8.1"}();


