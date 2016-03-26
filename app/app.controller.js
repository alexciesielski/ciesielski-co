(function() {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.$inject = ['$window', '$firebaseArray'];
    function AppController($window, $firebaseArray) {
        var vm = this;
        vm.submitForm = submitForm;

        var messagesRef = new $window.Firebase("https://ciesielski-co.firebaseio.com/messages/");

        init();

        ////////////////

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
                createdAt: new Date()
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
            console.error("Error: " + error);
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