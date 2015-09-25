var app;
(function (app) {
    var service;
    (function (service) {
        'use strict';
        var SiteSettingsService = (function () {
            function SiteSettingsService($http, apiEndpoint) {
                this.$http = $http;
                this.apiEndpoint = apiEndpoint;
            }
            return SiteSettingsService;
        })();
        factory.$inject = ['$http', 'app.blocks.ApiEndpoint'];
        function factory($http, apiEndpoint) {
            return new SiteSettingsService($http, apiEndpoint);
        }
        angular
            .module('app.services')
            .factory('app.services.SiteSettingsService', factory);
    })(service = app.service || (app.service = {}));
})(app || (app = {}));
