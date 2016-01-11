(function ()
{
    'use strict';

    angular
        .module('app.quick-panel', [])
        .config(config);

    /** @ngInject */
    function config()
    {
        //$translatePartialLoaderProvider.addPart('app/quick-panel');
    }
})();

(function ()
{
    'use strict';

    angular
        .module('app.quick-panel')
        .controller('QuickPanelController', QuickPanelController);

    /** @ngInject */
    function QuickPanelController(api)
    {
        var vm = this;

        // Data
        vm.date = new Date();
        vm.settings = {
            notify: true,
            cloud : false,
            retro : true
        };

        api.quickPanel.activities.get({}, function (response)
        {
            vm.activities = response.data;
        });

        api.quickPanel.events.get({}, function (response)
        {
            vm.events = response.data;
        });

        api.quickPanel.notes.get({}, function (response)
        {
            vm.notes = response.data;
        });

        // Methods

        //////////
    }

})();

(function ()
{
    'use strict';

    angular
        .module('app.quick-panel')
        .controller('ChatTabController', ChatTabController);

    /** @ngInject */
    function ChatTabController(api, $timeout)
    {
        var vm = this;

        // Data
        vm.chat = {};
        vm.chatActive = false;
        vm.replyMessage = '';

        api.quickPanel.contacts.get({}, function (response)
        {
            vm.contacts = response.data;
        });

        // Methods
        vm.toggleChat = toggleChat;
        vm.reply = reply;

        //////////

        function toggleChat(contact)
        {
            vm.chatActive = !vm.chatActive;

            if ( vm.chatActive )
            {
                vm.replyMessage = '';
                vm.chat.contact = contact;
                scrollToBottomOfChat(0);
            }
        }

        function reply()
        {
            if ( vm.replyMessage === '' )
            {
                return;
            }

            if ( !vm.chat.contact.dialog )
            {
                vm.chat.contact.dialog = [];
            }

            vm.chat.contact.dialog.push({
                who    : 'user',
                message: vm.replyMessage,
                time   : 'Just now'
            });

            vm.replyMessage = '';

            scrollToBottomOfChat(400);
        }

        function scrollToBottomOfChat(speed)
        {
            var chatDialog = angular.element('#chat-dialog');

            $timeout(function ()
            {
                chatDialog.animate({
                    scrollTop: chatDialog[0].scrollHeight
                }, speed);
            }, 0);

        }
    }

})();


(function ()
{
    'use strict';

    angular
        .module('app.toolbar', [])
        .config(config);

    /** @ngInject */
    function config()
    {
        //$translatePartialLoaderProvider.addPart('app/toolbar');
    }
})();

(function ()
{
    'use strict';

    angular
        .module('app.toolbar')
        .controller('ToolbarController', ToolbarController);

    /** @ngInject */
    function ToolbarController($rootScope, $mdSidenav, $mdToast)
    {
        var vm = this;

        // Data
        vm.bodyEl = angular.element('body');
        $rootScope.global = {
            search: ''
        };
        vm.userStatusOptions = [
            {
                'title': 'Online',
                'icon' : 'icon-checkbox-marked-circle',
                'color': '#4CAF50'
            },
            {
                'title': 'Away',
                'icon' : 'icon-clock',
                'color': '#FFC107'
            },
            {
                'title': 'Do not Disturb',
                'icon' : 'icon-minus-circle',
                'color': '#F44336'
            },
            {
                'title': 'Invisible',
                'icon' : 'icon-checkbox-blank-circle-outline',
                'color': '#BDBDBD'
            },
            {
                'title': 'Offline',
                'icon' : 'icon-checkbox-blank-circle-outline',
                'color': '#616161'
            }
        ];
        vm.languages = [
            {
                'title'      : 'English',
                'translation': 'TOOLBAR.ENGLISH',
                'code'       : 'en',
                'flag'       : 'gb'
            },
            {
                'title'      : 'Spanish',
                'translation': 'TOOLBAR.SPANISH',
                'code'       : 'es',
                'flag'       : 'es'
            },
            {
                'title'      : 'Turkish',
                'translation': 'TOOLBAR.TURKISH',
                'code'       : 'tr',
                'flag'       : 'tr'
            }
        ];

        // Methods
        vm.toggleSidenav = toggleSidenav;
        vm.logout = logout;
        vm.changeLanguage = changeLanguage;
        vm.setUserStatus = setUserStatus;
        vm.toggleHorizontalMobileMenu = toggleHorizontalMobileMenu;

        //////////

        vm.userStatus = vm.userStatusOptions[0];
        vm.selectedLanguage = vm.languages[0];

        /**
         * Toggle sidenav
         *
         * @param sidenavId
         */
        function toggleSidenav(sidenavId)
        {
            $mdSidenav(sidenavId).toggle();
        }

        /**
         * Sets User Status
         * @param status
         */
        function setUserStatus(status)
        {
            vm.userStatus = status;
        }

        /**
         * Logout Function
         */
        function logout()
        {

        }

        /**
         * Change Language
         */
        function changeLanguage(lang)
        {
            vm.selectedLanguage = lang;

            // Show temporary message if user selects a language other than English
            if ( lang.code !== 'en' )
            {
                var message = 'Fuse supports translations through angular-translate module, but currently we do not have any translations other than English language. If you want to help us, send us a message through ThemeForest profile page.';

                $mdToast.show({
                    template : '<md-toast id="language-message" layout="column" layout-align="center start"><div class="md-toast-content">' + message + '</div></md-toast>',
                    hideDelay: 7000,
                    position : 'top right',
                    parent   : '#content'
                });

                return;
            }

            //Change the language
            //$translate.use(lang.code);
        }

        /**
         * Toggle horizontal mobile menu
         */
        function toggleHorizontalMobileMenu()
        {
            vm.bodyEl.toggleClass('ms-navigation-horizontal-mobile-menu-active');
        }
    }

})();

(function ()
{
    'use strict';

    angular
        .module('app.navigation', [])
        .config(config);

    /** @ngInject */
    function config()
    {
        //$translatePartialLoaderProvider.addPart('app/navigation');
    }

})();

(function ()
{
    'use strict';

    angular
        .module('app.navigation')
        .controller('NavigationController', NavigationController);

    /** @ngInject */
    function NavigationController($scope)
    {
        var vm = this;

        // Data
        vm.bodyEl = angular.element('body');
        vm.folded = false;
        vm.msScrollOptions = {
            suppressScrollX: true
        };

        // Methods
        vm.toggleMsNavigationFolded = toggleMsNavigationFolded;

        //////////

        /**
         * Toggle folded status
         */
        function toggleMsNavigationFolded()
        {
            vm.folded = !vm.folded;
        }

        // Close the mobile menu on $stateChangeSuccess
        $scope.$on('$stateChangeSuccess', function ()
        {
            vm.bodyEl.removeClass('ms-navigation-horizontal-mobile-menu-active')
        })
    }

})();

