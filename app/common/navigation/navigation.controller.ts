module app.layout {
	'use strict';
	
	interface INavigationScope {
		fullName: string;
	}
	
	class NavigationController implements INavigationScope {
		fullName: string;
		
		static $inject = [
			'app.services.UserService'
		];
		constructor($scope: INavigationScope, userService: app.services.IUserService){
			var vm = this;
			userService.getById('bla')
				.then((user: app.services.IUser): void => {
					vm.fullName = user.firstName + ' ';
				})
		}
	}	
}