module app.layout {
	
	interface INavigationScope {
		fullName: string;
		username: string;
	}
	class NavigationController {
		constructor($scope: INavigationScope){
			$scope.fullName = 'Michael S.';
		}
	}	
}