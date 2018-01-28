define([], function () {

    var controllers = {};

    controllers.profileController = function ($scope, $http, $location, $rootScope, dataService) {

        app.getObject('QV01', 'EmvU');
        app.getObject('QV02', 'FJRPcr');
        app.getObject('QV03', 'kgGbB');
        
    }

    controllers.profileController.$inject = ['$http', '$location', '$rootScope', '$scope', 'dataService'];

    return controllers;

});