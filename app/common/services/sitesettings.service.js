var app;
(function (app) {
    var service;
    (function (service) {
        'use strict';
        var SiteSettingsService = (function () {
            function SiteSettingsService($http) {
                this.$http = $http;
            }
            return SiteSettingsService;
        })();
        factory.$inject = ['$http'];
        function factory($http) {
            return new SiteSettingsService($http);
        }
        angular
            .module('app.services')
            .factory('app.services.SiteSettingsService', factory);
    })(service = app.service || (app.service = {}));
})(app || (app = {}));
