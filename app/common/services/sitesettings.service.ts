module app.service {
	'use strict';
	
	export interface ISiteSettingsService {
		
	}
	
	class SiteSettingsService implements ISiteSettingsService {
		constructor(private $http: ng.IHttpService) {}
	}
	
	factory.$inject = ['$http'];
	
	function factory($http: ng.IHttpService): ISiteSettingsService {
		return new SiteSettingsService($http);
	}
	
	angular
		.module('app.services')
		.factory('app.services.SiteSettingsService', factory);
}
