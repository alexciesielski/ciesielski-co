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
            WROCLAW: 'Wrocław',
            WARSZAWA: 'Warszawa',
            CAPGEMINI_DESCRIPTION: '<strong>Software Engineer</strong><br />Utrzymywanie kodu / naprawa bugów<br />Administracja bazy danych<br />3rd level support',
            PENTEGY_DESCRIPTION: '<strong>Junior Developer</strong><br /> Praca nad wielowątkowym modułem dla <a target="_blank" href=\"http://www.mz.gov.pl/system-ochrony-zdrowia/panstwowe-ratownictwo-medyczne/organizacja-systemu-panstwowe-ratownictwo-medyczne/system-wspomagania-dowodzenia-prm\">Systemu Wspomagania Dowodzenia dla Państwowego Ratownictwa Medycznego</a>, którego celem jest przetwarzanie i zapisywanie pakietów otrzymywanych z karetek, zawierających informacje o położeniu, prędkości, włączonych światłach etc.',
            ACI_DESCRIPTION: '<strong>Analityk IT</strong><br />Przygotowywanie dokumentów projektowych oraz specyfikacji technicznych',
            BILANS: 'Bilans (Kancelaria podatkowa), Warszawa',
            BILANS_DESCRIPTION: '<strong>Administrator IT / Web Developer</strong><ul><li><a target="_blank" href=\"http://bilans.eu\">www.bilans.eu</a></li><li><a target="_blank" href=\"http://wszystkodlafirmy.pl\">www.wszystkodlafirmy.pl</a></li><li><a target="_blank" href=\"http://gbadwokaci.pl\">www.gbadwokaci.pl</a></li></ul>',
            PJATK: 'Polsko-Japonśka Akademia Technik Komputerowych, Warszawa',
            WBS: 'Polsko-Niemiecka Szkoła Spotkań i Dialogu im. Willy\'ego Brandta, Warszawa',
            IT_ENGINEER: 'Inżynier Informatyki<br/>(specjalizacja <i>Mobilne Urządzenia</i>)',
            MATURA: 'Matura polsko-niemiecka',
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

        });

        // englische Sprache
        $translateProvider.translations('de', {
                
        });

        $translateProvider.preferredLanguage('pl');
    }

    function runFunction($rootScope, $location) {
        angular.element(document).ready(function() {
            //
        });
    }

})();