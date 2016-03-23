(function() {
	'use strict';

	angular.module('app', [

		// 3rd party modules
		'ngRoute',
		'firebase',
	])
		.config(configFunction)
		.run(runFunction);

	function configFunction($routeProvider) {
		$routeProvider.otherwise({ redirectTo: '/' });

		// I18N
		/*
		$translateProvider.translations('pl', {
			NAVIGATION: 'Nawigacja',
			TECHNOLOGIES: 'Technologie',
			KONTAKT: 'Kontakt',
			HI_MYNAMEIS: 'Nazywam się',
			ABOUTME: 'Jestem full-stack developerem specjalizującym się w najnowszych technologiach.',
			ABOUTME_2: 'Specjalizuję sie w aplikacjach mobilnych i webowych.',
			ABOUTME_3: 'Stwórzmy razem aplikację jutra!',
			DATABASES: 'Bazy danych',
			WILL_TO_LEARN: 'Chęć do nauki',
			NONSTOP_SELFDEVELOPMENT: 'Nieustanny rozwój osobisty',
			AND_INTEREST_IN_TECHNOLOGIES: 'i zainteresowanie najnowszymi technologiami',
			CV_1: 'Urodziłem się w 1990 r. w Niemczech. Dwanaście lat później przeprowadziłem się z rodziną do Warszawy, gdzie zdałem maturę  Niemiecko-Polskiej Szkole im. Willyego Brandta',
			CV_2: 'Następnie skończylem studia inżynierskie na Polsko-Japońskiej Wyższej Szkole Technik Komputerowych ze specjalizacją \'Mobilne Urządzenia\'.',
			PROJECT_HISTORY: 'HISTORIA PROJEKTÓW',
			WHEN: 'Kiedy',
			WHERE: 'Gdzie',
			WHAT: 'Co',
		});

		$translateProvider.translations('de', {
			APP_HEADLINE: 'Großartige AngularJS App',
			TECHNOLOGIES: 'Zur Startseite',
			NAV_ABOUT: 'Über',
			APP_TEXT: 'Irgendein Text über eine großartige AngularJS App.'
		});

		// englische Sprache
		$translateProvider.translations('en', {
			APP_HEADLINE: 'Awesome AngularJS App',
			TECHNOLOGIES: 'Start',
			NAV_ABOUT: 'About',
			APP_TEXT: 'Some text about the awesome AngularJS app.'
		});
		$translateProvider.preferredLanguage('pl');*/
	}

	function runFunction($rootScope, $location) {
		angular.element(document).ready(function() {
			//
		});
	}

})();