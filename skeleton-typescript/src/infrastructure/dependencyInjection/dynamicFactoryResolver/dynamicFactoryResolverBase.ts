import {Composable} from "../../mixins/composable/Composable";
import {IDependency} from "../../mixins/dependency/iDependency";
import {IConfiguration} from "../../mixins/configuration/iConfiguration";

export class DynamicFactoryResolverBase extends Composable<IDependency<DynamicFactoryResolverBase>, IConfiguration<DynamicFactoryResolverBase>> {
  
  constructor(dependencies: IDependency<DynamicFactoryResolverBase>, configuration: IConfiguration<DynamicFactoryResolverBase>) {
    super(dependencies, configuration);
  }
}
