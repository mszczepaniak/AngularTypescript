var app;
(function (app) {
    var services;
    (function (services) {
        'use strict';
        var UserService2 = (function () {
            function UserService2($http) {
                this.$http = $http;
            }
            UserService2.prototype.getById = function (uniqueId) {
                return this.$http.get('/api/users' + uniqueId)
                    .then(function (response) {
                    return response.data;
                });
            };
            UserService2.$inject = ['$http'];
            return UserService2;
        })();
        services.UserService2 = UserService2;
        angular
            .module('app.services')
            .factory('app.services.UserService2', UserService2);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
