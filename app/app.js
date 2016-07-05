angular
    .module('taskMan', ['ngMaterial', 'tasks'])
    .config(function ($mdThemingProvider, $mdIconProvider) {
        $mdIconProvider
            .icon("calendar", "./assets/svg/calendar.svg", 128)
            .icon("clock", "./assets/svg/clock.svg", 128)
            .icon("light-bulb", "./assets/svg/light-bulb.svg", 128)
            .icon("monitor", "./assets/svg/monitor.svg", 128)
            .icon("notepad", "./assets/svg/notepad.svg", 128)
            .icon("briefcase", "./assets/svg/briefcase.svg", 128)
            .icon("menu", "./assets/svg/menu.svg", 24)
            .icon("done", "./assets/svg/status/done.svg", 24)
            .icon("doing", "./assets/svg/status/doing.svg", 24)
            .icon("snooze", "./assets/svg/status/snooze.svg", 24)
            .icon("pin", "./assets/svg/status/pin.svg", 24)
            .icon("cancel", "./assets/svg/status/cancel.svg", 24)
            .icon("share", "./assets/svg/tablet.svg", 24)
            .icon("google_plus", "./assets/svg/google_plus.svg", 512)
            .icon("hangouts", "./assets/svg/hangouts.svg", 512)
            .icon("twitter", "./assets/svg/twitter.svg", 512)
            .icon("phone", "./assets/svg/phone.svg", 512);
        $mdThemingProvider.theme('default')
            .primaryPalette('green')
            .accentPalette('red');
    });