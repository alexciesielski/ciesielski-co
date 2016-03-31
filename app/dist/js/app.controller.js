(function() {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.$inject = ['$window', '$firebaseArray', '$translate', '$timeout'];
    function AppController($window, $firebaseArray, $translate, $timeout) {
        var vm = this;
        vm.submitForm = submitForm;
        vm.changeLanguage = changeLanguage;
        vm.langActive = 'pl';

        var messagesRef = new $window.Firebase("https://ciesielski-co.firebaseio.com/messages/");
        var modal = 

        init();

        ////////////////

        function changeLanguage(langKey) {
            $translate.use(langKey).then(function(langKey) {
                vm.langActive = langKey;
            }, function(langKey) {
                // Error changing language
            });
        }

        function submitForm(name, email, message) {
            showLoadingModal();
            pushMessage(name, email, message);
        }
        
        function hideLoadingModal() {
            vm.loading = false;
            $("#modalLoading").css("display", "none");
        }
        
        function showLoadingModal() {
            vm.loading = true;
            $("#modalLoading").css("display", "block");
        }

        function pushMessage(name, email, message) {
            var messages = $firebaseArray(messagesRef);
            messages.$add({
                name: name,
                email: email,
                message: message,
                //timestamp: new Date()
                timestamp: Firebase.ServerValue.TIMESTAMP
            })
                /*.then(submitFormSuccess)
                .catch(submitFormError);*/
                .then( $timeout(submitFormSuccess, 1000))
                .catch( $timeout(submitFormError, 1000));
        }

        function submitFormSuccess() {
            vm.success = true;
            hideLoadingModal();
        }

        function submitFormError(error) {
            vm.error = true;
            hideLoadingModal();
        }

        function init() {
            vm.name = '';
            vm.email = '';
            vm.message = '';

            vm.success = false;
            vm.error = false;
            vm.loading = false;

            $window.loadingScreen.finish();
            
            // Typed h1 header  
            $("#typed").typed({
                strings: ["FULL-STACK DEVELOPER", "BACK-END DEVELOPER", "FRONT-END DEVELOPER", "MOBILE DEVELOPER"],
                // typing speed
                typeSpeed: 50,
                // time before typing starts
                startDelay: 500,
                // backspacing speed
                backSpeed: 0,
                // time before backspacing
                backDelay: 1000,
                // loop
                loop: true,
                // false = infinite
                loopCount: false,
                // show cursor
                showCursor: true,
                // character for cursor
                cursorChar: "|",
                // either html or text
                contentType: 'html'
            });

            // jQuery for page scrolling feature - requires jQuery Easing plugin
            $('a.page-scroll').bind('click', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: ($($anchor.attr('href')).offset().top - 50)
                }, 1250, 'easeInOutExpo');
                event.preventDefault();
            });

            // Highlight the top nav as scrolling occurs
            $('body').scrollspy({
                target: '.navbar-fixed-top',
                offset: 51
            });

            // Closes the Responsive Menu on Menu Item Click
            $('.navbar-collapse ul li a').click(function() {
                $('.navbar-toggle:visible').click();
            });

            // Fit Text Plugin for Main Header
            $("h1").fitText(
                1.2, {
                    minFontSize: '35px',
                    maxFontSize: '65px'
                }
            );

            // Offset for Main Navigation
            $('#mainNav').affix({
                offset: {
                    top: 100
                }
            });

            // Initialize WOW.js Scrolling Animations
            new WOW().init();
        }
    }
})();