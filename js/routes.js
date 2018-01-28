define([], function(){
    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '../partials/home.html',
            })
            .when('/modules', {     // we will want this protected so you have to be logged in to visit
                templateUrl: '../partials/modules.html',
                controller: 'profileController'
            })
            .when('/location', {
                templateUrl: '../partials/location.html',
            })
            .otherwise({
                templateUrl: '../partials/home.html',
            });
    }

    config.$inject=["$routeProvider"];
    return config;
});

