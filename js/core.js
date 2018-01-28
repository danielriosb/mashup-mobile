require(["js/routes.js", "js/controllers/main.js", "js/services.js"], function(routes, controllers, services){
    
    /* ANGULAR APP */
    var app = angular.module('app', ['ngRoute']);

    /* CONFIG FILE */
    app.config(routes);
    

	//open apps -- inserted here --
    app.service('dataService', services.dataService);
    

    /* CONTROLLERS */
    
    app.controller('profileController', controllers.profileController);

});