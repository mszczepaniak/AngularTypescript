module app.services {
	'use strict';
	
	export interface IUserService2 {
		getById(uniqueId: string): ng.IPromise<IUser>;
	}
	
	export interface IUser2 {
		firstName: string;
		eniqueId: string;
		email: string; 
		socialnetworks: ISocialNetwork2[];
	}
	
	export interface ISocialNetwork2 {
		name: string;
		username: string;
	}
	
	export class UserService2 implements IUserService2 {
		static $inject = ['$http'];
		constructor(private $http: ng.IHttpService) {
			
		}
		getById(uniqueId: string): ng.IPromise<IUser> {
			return this.$http.get('/api/users' + uniqueId)
				.then((response: ng.IHttpPromiseCallbackArg<IUser>): IUser => {
					return response.data;
				});
		}
	}
	
	angular
		.module('app.services')
		.factory('app.services.UserService2', UserService2);
}
