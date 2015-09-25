module app.services {
	'use strict';
	
	interface IUserService {
		getById(uniqueId: string): ng.IPromise<IUser>;
	}
	
	export interface IUser {
		eniqueId: string;
		email: string; 
		socialnetworks: ISocialNetwork[];
	}
	
	export interface ISocialNetwork {
		name: string;
		username: string;
	}
	
	class UserService implements IUserService {
		static $inject = ['$http'];
		constructor(private $http: ng.IHttpService) {
			
		}
		getById(uniqueId: string): ng.IPromise<IUser> {
			return this.$http.get('/api/users' + uniqueId)
				.then((response) => {
					return response.data;
				});
		}
	}
}