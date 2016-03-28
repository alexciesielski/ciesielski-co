(function() {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.$inject = ['$window', '$firebaseArray', '$translate'];
    function AppController($window, $firebaseArray, $translate) {
        var vm = this;
        vm.submitForm = submitForm;
        vm.changeLanguage = changeLanguage;
        vm.langActive = 'pl';

        var messagesRef = new $window.Firebase("https://ciesielski-co.firebaseio.com/messages/");

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
            vm.loading = true;
            pushMessage(name, email, message);
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
                .then(submitFormSuccess)
                .catch(submitFormError);
        }

        function submitFormSuccess() {
            init();
            vm.success = true;
        }

        function submitFormError(error) {
            vm.error = true;
            vm.loading = false;
        }

        function init() {
            vm.name = '';
            vm.email = '';
            vm.message = '';

            vm.success = false;
            vm.error = false;
            vm.loading = false;
        }
    }
})();