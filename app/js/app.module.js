(function() {
    'use strict';

    angular.module('app', [

        // 3rd party modules
        'ngRoute',
        'firebase',
        'pascalprecht.translate',
        'ngMessages',
        'ngSanitize'
    ])
        .config(configFunction)
        .run(runFunction);

    function configFunction($routeProvider, $translateProvider) {
        $routeProvider.otherwise({ redirectTo: '/' });
        $translateProvider.useSanitizeValueStrategy('sanitize');

        // I18N
        $translateProvider.translations('pl', {
            NAVIGATION: 'Nawigacja',
            TECHNOLOGIES: 'Technologie',
            CONTACT: 'Kontakt',
            HI_MYNAMEIS: 'Nazywam się',
            ABOUTME: 'Jestem full-stack developerem specjalizującym się w najnowszych technologiach.',
            ABOUTME_2: 'Specjalizuję sie w aplikacjach mobilnych i webowych.',
            ABOUTME_3: 'Stwórzmy razem aplikację jutra!',
            LEARN_MORE: 'Dowiedz się więcej',
            DATABASES: 'Bazy danych',
            WILL_TO_LEARN: 'Chęć do nauki',
            NONSTOP_SELFDEVELOPMENT: 'Nieustanny rozwój osobisty',
            AND_INTEREST_IN_TECHNOLOGIES: 'i zainteresowanie najnowszymi technologiami',
            CV_1: 'Urodziłem się w 1990 r. w Niemczech. Dwanaście lat później przeprowadziłem się z rodziną do Warszawy, gdzie zdałem maturę  Niemiecko-Polskiej Szkole im. Willyego Brandta.',
            CV_2: 'Następnie skończylem studia inżynierskie na <strong>Polsko-Japońskiej Wyższej Szkole Technik Komputerowych</strong> ze specjalizacją \'<i>Mobilne Urządzenia<i>\'.',
            PROJECTS: 'Historia Projektów',
            EDUCATION: 'Historia Edukacji',
            WHEN: 'Kiedy',
            WHERE: 'Gdzie',
            WHAT: 'Co',
            IT_ANALYST: 'Analityk IT',
            READY_TO_HIRE_ME: 'Jesteś gotowy by mnie zatrudnić do swojego następnego projektu? To świetnie!',
            USE_THE_CONTACT_FORM: 'Skorzystaj z formularza kontaktowego, a ja się odezwę jak najszybciej.',
            NAME_SURNAME: 'Imię i nazwisko',
            EMAIL: 'Mail',
            MESSAGE: 'Wiadomość',
            SEND: 'Wyślij',
            MESSAGE_SENT: 'Wiadomość została wysłana!',
            ERROR: 'Wystąpił błąd!<br/>Proszę wysłać wiadomość na adres \'alexander@ciesielski.co\'.',
            
            NAME_TOO_SHORT: 'Wpisane imię i nazwisko są za krótkie.',
            NAME_TOO_LONG: 'Wpisane imię i nazwisko są za długie.',
            NAME_REQUIRED: 'Proszę wpisać imię i nazwisko.',
            
            EMAIL_REQUIRED: 'Proszę wpisać adres mailowy.',
            EMAIL_INVALID: 'Podany adres mailowy jest nieprawidłowy.',
            
            MESSAGE_TOO_SHORT: 'Wpisana wiadomość jest za krótka.',
            MESSAGE_TOO_LONG: 'Wpisana wiadomość jest za długa.',
            MESSAGE_REQUIRED: 'Wiadomość nie może być pusta.',
        });

        $translateProvider.translations('gb', {
            NAVIGATION: 'Navigation',
            TECHNOLOGIES: 'Technologies',
            CONTACT: 'Contact',
            HI_MYNAMEIS: 'My name is',
            ABOUTME: 'I am a full-stack developer interested in all the newest technologies.',
            ABOUTME_2: 'I specialize in mobile, web and hybrid apps.',
            ABOUTME_3: 'Let\'s create the app of tomorrow. (cheesy, I know)',
            LEARN_MORE: 'Learn more',
            DATABASES: 'Databases',
            WILL_TO_LEARN: 'Will to learn',
            NONSTOP_SELFDEVELOPMENT: 'Non-stop self-development',
            AND_INTEREST_IN_TECHNOLOGIES: 'and interest in newest technologies',
            CV_1: 'Urodziłem się w 1990 r. w Niemczech. Dwanaście lat później przeprowadziłem się z rodziną do Warszawy, gdzie zdałem maturę  Niemiecko-Polskiej Szkole im. Willyego Brandta.',
            CV_2: 'Następnie skończylem studia inżynierskie na <strong>Polsko-Japońskiej Wyższej Szkole Technik Komputerowych</strong> ze specjalizacją \'<i>Mobilne Urządzenia<i>\'.',
            PROJECTS: 'Projects',
            EDUCATION: 'Education',
            WHEN: 'When',
            WHERE: 'Where',
            WHAT: 'What',
            IT_ANALYST: 'IT Analyst',
            READY_TO_HIRE_ME: 'Are you ready to hire me for your next project? Awesome!',
            USE_THE_CONTACT_FORM: 'Use the contact form below and I will reply ASAP.',
            NAME_SURNAME: 'Name & Surname',
            EMAIL: 'Email',
            MESSAGE: 'Message',
            SEND: 'Send',
            MESSAGE_SENT: 'Message sent!',
            ERROR: 'There was an error sending your message, try my email address.',

        });

        // englische Sprache
        $translateProvider.translations('de', {
            APP_HEADLINE: 'Awesome AngularJS App',
            TECHNOLOGIES: 'Start',
            NAV_ABOUT: 'About',
            APP_TEXT: 'Some text about the awesome AngularJS app.'
        });

        $translateProvider.preferredLanguage('pl');
    }

    function runFunction($rootScope, $location) {
        angular.element(document).ready(function() {
            //
        });
    }

})();