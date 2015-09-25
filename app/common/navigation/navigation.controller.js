var app;
(function (app) {
    var layout;
    (function (layout) {
        'use strict';
        var NavigationController = (function () {
            function NavigationController($scope, userService) {
                var vm = this;
            }
            NavigationController.$inject = [
                'app.services.UserService'
            ];
            return NavigationController;
        })();
    })(layout = app.layout || (app.layout = {}));
})(app || (app = {}));
