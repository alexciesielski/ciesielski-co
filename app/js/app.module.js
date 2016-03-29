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
            HI_MYNAMEIS: 'Cześć, nazywam się',
            ABOUTME: 'Jestem full-stack developerem specjalizującym się w najnowszych technologiach.',
            ABOUTME_2: 'Specjalizuję sie w aplikacjach mobilnych i webowych.',
            ABOUTME_3: '',
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
            NAVIGATION: 'Navigation',
            TECHNOLOGIES: 'Technologies',
            CONTACT: 'Contact',
            HI_MYNAMEIS: 'Hi, my name is',
            ABOUTME: 'I am a full-stack developer interested in the newest web technologies.',
            ABOUTME_2: 'I specialize in web, mobile and hybrid apps.',
            ABOUTME_3: '',
            LEARN_MORE: 'Learn more',
            DATABASES: 'Databases',
            WILL_TO_LEARN: 'Will to learn',
            NONSTOP_SELFDEVELOPMENT: 'Nonstop Self-Development',
            AND_INTEREST_IN_TECHNOLOGIES: 'and interest in newest technologies',

            CV_1: 'Urodziłem się w 1990 r. w Niemczech. Dwanaście lat później przeprowadziłem się z rodziną do Warszawy, gdzie zdałem maturę  Niemiecko-Polskiej Szkole im. Willyego Brandta.',
            CV_2: 'Następnie skończylem studia inżynierskie na <strong>Polsko-Japońskiej Wyższej Szkole Technik Komputerowych</strong> ze specjalizacją \'<i>Mobilne Urządzenia<i>\'.',

            PROJECTS: 'Project History',
            WROCLAW: 'Wroclaw',
            WARSZAWA: 'Warsaw',
            CAPGEMINI_DESCRIPTION: '<strong>Software Engineer</strong><br />Code maintenance / bug fixing<br />Database administration<br />3rd level support',
            PENTEGY_DESCRIPTION: '<strong>Junior Developer</strong><br /> Praca nad wielowątkowym modułem dla <a target="_blank" href=\"http://www.mz.gov.pl/system-ochrony-zdrowia/panstwowe-ratownictwo-medyczne/organizacja-systemu-panstwowe-ratownictwo-medyczne/system-wspomagania-dowodzenia-prm\">Systemu Wspomagania Dowodzenia dla Państwowego Ratownictwa Medycznego</a>, którego celem jest przetwarzanie i zapisywanie pakietów otrzymywanych z karetek, zawierających informacje o położeniu, prędkości, włączonych światłach etc.',
            ACI_DESCRIPTION: '<strong>IT Analyst</strong><br />Preparation of project documents and technical specifications',
            BILANS: 'Bilans (Tax office), Warsaw',
            BILANS_DESCRIPTION: '<strong>IT Administrator / Web Developer</strong><ul><li><a target="_blank" href=\"http://bilans.eu\">www.bilans.eu</a></li><li><a target="_blank" href=\"http://wszystkodlafirmy.pl\">www.wszystkodlafirmy.pl</a></li><li><a target="_blank" href=\"http://gbadwokaci.pl\">www.gbadwokaci.pl</a></li></ul>',
            PJATK: 'Polish-Japanese Academy of Information Technology, Warsaw',
            WBS: 'Polish-German \'Willy-Brandt-School\', Warsaw',
            IT_ENGINEER: 'BSc in Computer Science<br/>(specialization <i>Mobile Devices</i>)',
            MATURA: 'Polish-German matura (high-school diploma)',
            EDUCATION: 'Education History',
            WHEN: 'When',
            WHERE: 'Where',
            WHAT: 'What',
            IT_ANALYST: 'IT Analyst',
            READY_TO_HIRE_ME: 'Ready to hire me for your next project? Awesome!',
            USE_THE_CONTACT_FORM: 'Use the contact form below and I will reply ASAP.',
            NAME_SURNAME: 'Name & surname',
            EMAIL: 'Email',
            MESSAGE: 'Message',
            SEND: 'Send',
            MESSAGE_SENT: 'Message sent!',
            ERROR: 'There was an error sending your message!<br/>Please use my email at \'alexander@ciesielski.co\'.',
            NAME_TOO_SHORT: 'Name & surname are too short.',
            NAME_TOO_LONG: 'Name & surname are too long.',
            NAME_REQUIRED: 'Please enter your name & surname.',
            EMAIL_REQUIRED: 'Please enter your email address.',
            EMAIL_INVALID: 'The entered email address is invalid.',
            MESSAGE_TOO_SHORT: 'Your message is too short.',
            MESSAGE_TOO_LONG: 'Your message is too long.',
            MESSAGE_REQUIRED: 'Please enter your message.',
        });

        $translateProvider.translations('de', {
            NAVIGATION: 'Navigation',
            TECHNOLOGIES: 'Technologien',
            CONTACT: 'Kontakt',
            HI_MYNAMEIS: 'Hi, mein Name ist',
            ABOUTME: 'Iich bin ein Full-Stack Developer und ich interessiere mich für die neuesten Web-Technologien.',
            ABOUTME_2: 'Ich spezialisiere mich in Web-, Mobil- und Hybrid-Apps.',
            ABOUTME_3: '',
            LEARN_MORE: 'Erfahre mehr',
            DATABASES: 'Datenbanken',
            WILL_TO_LEARN: 'Lernspaß',
            NONSTOP_SELFDEVELOPMENT: 'Nonstop Self-Development',
            AND_INTEREST_IN_TECHNOLOGIES: 'und Interesse an den neuesten Technologien',

            CV_1: 'Urodziłem się w 1990 r. w Niemczech. Dwanaście lat później przeprowadziłem się z rodziną do Warszawy, gdzie zdałem maturę  Niemiecko-Polskiej Szkole im. Willyego Brandta.',
            CV_2: 'Następnie skończylem studia inżynierskie na <strong>Polsko-Japońskiej Wyższej Szkole Technik Komputerowych</strong> ze specjalizacją \'<i>Mobilne Urządzenia<i>\'.',

            PROJECTS: 'Projekte',
            WROCLAW: 'Breslau',
            WARSZAWA: 'Warschau',
            CAPGEMINI_DESCRIPTION: '<strong>Software Engineer</strong><br />Code maintenance / bug fixing<br />Database administration<br />3rd level support',
            PENTEGY_DESCRIPTION: '<strong>Junior Developer</strong><br /> Praca nad wielowątkowym modułem dla <a target="_blank" href=\"http://www.mz.gov.pl/system-ochrony-zdrowia/panstwowe-ratownictwo-medyczne/organizacja-systemu-panstwowe-ratownictwo-medyczne/system-wspomagania-dowodzenia-prm\">Systemu Wspomagania Dowodzenia dla Państwowego Ratownictwa Medycznego</a>, którego celem jest przetwarzanie i zapisywanie pakietów otrzymywanych z karetek, zawierających informacje o położeniu, prędkości, włączonych światłach etc.',
            ACI_DESCRIPTION: '<strong>IT Analyst</strong><br />Preparation of project documents and technical specifications',
            BILANS: 'Bilans (Steuerberatung), Warschau',
            BILANS_DESCRIPTION: '<strong>IT Administrator / Web Developer</strong><ul><li><a target="_blank" href=\"http://bilans.eu\">www.bilans.eu</a></li><li><a target="_blank" href=\"http://wszystkodlafirmy.pl\">www.wszystkodlafirmy.pl</a></li><li><a target="_blank" href=\"http://gbadwokaci.pl\">www.gbadwokaci.pl</a></li></ul>',
            PJATK: 'Polish-Japanese Academy of Information Technology, Warschau',
            WBS: 'Deutsch-Polnische Begegnungsschule \'Willy-Brandt-Schule\', Warschau',
            IT_ENGINEER: 'BSc in Computer Science<br/>(specialization <i>Mobile Devices</i>)',
            MATURA: 'Deutsch-polnisches Abitur',
            EDUCATION: 'Bildungsweg',
            WHEN: 'Wann',
            WHERE: 'Wo',
            WHAT: 'Was',
            IT_ANALYST: 'IT Analyst',
            READY_TO_HIRE_ME: 'Bereit mich für dein nächstes Projekt einzustellen?',
            USE_THE_CONTACT_FORM: 'Benutze das Kontaktformular und ich werde mich mich so schnell wie möglich melden.',
            NAME_SURNAME: 'Vor- & Nachname',
            EMAIL: 'Email',
            MESSAGE: 'Nachricht',
            SEND: 'Senden',
            MESSAGE_SENT: 'Nachricht gesendet!',
            ERROR: 'Ein Fehler ist aufgetreten!<br/>Bitte schicke die Nachricht an \'alexander@ciesielski.co\'.',
            NAME_TOO_SHORT: 'Vor- & Nachname sind zu kurz.',
            NAME_TOO_LONG: 'Vor- & Nachname sind zu lang.',
            NAME_REQUIRED: 'Bitte Vor- & Nachname eintragen.',
            EMAIL_REQUIRED: 'Bitte Email-Adresse eintragen.',
            EMAIL_INVALID: 'Die eingebene Email-Adresse ist ungültig.',
            MESSAGE_TOO_SHORT: 'Die Nachricht ist zu kurz.',
            MESSAGE_TOO_LONG: 'Die Nachricht ist zu lang.',
            MESSAGE_REQUIRED: 'Bitte eine Nachricht eintragen.',
        });

        $translateProvider.preferredLanguage('pl');
    }

    function runFunction($rootScope, $location) {
        var loading_screen = pleaseWait({
            backgroundColor: '#f46d3b',
            loadingHtml: "SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSss"
        });
    }

})();