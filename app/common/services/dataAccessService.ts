module app.common {
	interface IDataAccessService {
		getProductResource(): ng.resource.IResourceClass<IProductResource>;
	}
	
	interface IProductResource 
		extends angular.resource.IResource<app.domain.IProduct> {
		
	}
	
	export class DataAccessService 
		implements IDataAccessService {
			
			static $inject = ["$resource"];
			constructor(private $resource: ng.resource.IResourceService) {
				
			}
			
			getProductResource(): ng.resource.IResourceClass<IProductResource> {
				return this.$resource("/api/products/:productId");
			}
		}
}