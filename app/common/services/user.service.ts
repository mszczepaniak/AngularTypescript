module app.services {
	'use strict';
	
	export interface IUserService {
		getById(uniqueId: string): ng.IPromise<IUser>;
	}
	
	export interface IUser {
		firstName: string;
		eniqueId: string;
		email: string; 
		socialnetworks: ISocialNetwork[];
	}
	
	export interface ISocialNetwork {
		name: string;
		username: string;
	}
	
	export class UserService implements IUserService {
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
		.service('app.services.UserService', UserService);
}
