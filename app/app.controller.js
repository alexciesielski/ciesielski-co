(function() {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.$inject = ['$window', '$firebaseArray', '$firebaseAuth'];
    function AppController($window, $firebaseArray, $firebaseAuth) {
        var vm = this;

        vm.submitForm = submitForm;
        vm.authObj = null;

        var ref = new $window.Firebase("https://ciesielski-co.firebaseio.com/");
        var messagesRef = ref.child('messages');

        init();

        ////////////////

        function submitForm(name, email, message) {
            vm.loading = true;

            // Login
            //if (vm.authObj) {
                // Already logged in
                pushMessage(name, email, message);
            //} else {
                // Login first, then push message
             //   vm.authObj = $firebaseAuth(ref).$authAnonymously()
             //       .then(pushMessage(name, email, message))
             //       .catch(submitFormError);
           // }
        }

        function pushMessage(name, email, message) {
            // Push message
            var messages = $firebaseArray(messagesRef);
            messages.$add({
                name: name,
                email: email,
                message: message,
                createdAt: new Date(),
                //userData: vm.authObj
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
            vm.success = false;
            vm.loading = false;
        }
    }
})();