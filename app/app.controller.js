(function() {
	'use strict';

	angular
		.module('app')
		.controller('AppController', AppController);

	AppController.$inject = ['$window', '$firebaseArray', '$firebaseAuth'];
	function AppController($window, $firebaseArray, $firebaseAuth) {
		var vm = this;

		vm.sendMessage = sendMessage;

		vm.buttonText = "Wyślij2";

		vm.authObj = null;

		init();

		////////////////

		function sendMessage(name, email, message) {
			vm.loading = true;

			var ref = new $window.Firebase("https://ciesielski-co.firebaseio.com/");
			var messagesRef = ref.child('messages');

			// Login
			vm.authObj = $firebaseAuth(ref).$authAnonymously().then(function(authData) {
				console.log("Logged in: " + authData.uid);

				// Logged in
				var messages = $firebaseArray(messagesRef);

				// Push message
				messages.$add({
					name: name,
					email: email,
					message: message,
					createdAt: new Date(),
					userData: authData
				}).then(function(successData) {
					init();
					vm.success = true;
					console.log(successData);
				}).catch(function(error) {
					vm.error = true;
					console.error(error);
				});

			}).catch(function(error) {
				vm.error = true;
				console.error("Authentication failed:", error);
			});
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