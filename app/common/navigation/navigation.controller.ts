module app.layout {
	
	interface INavigationScope {
		fullName: string;
		username: string;
	}
	class NavigationController {
		constructor($scope: INavigationScope){
			var vm = this;
		}
	}	
}