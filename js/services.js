define([], function() { 
    
    var services = {};

    services.dataService = function($http, $q) {
        this.app = qlik.openApp('---appId---', config);
		window.app = this.app;
	};
    services.dataService.$inject = ['$http', '$q'];

    return services;
});