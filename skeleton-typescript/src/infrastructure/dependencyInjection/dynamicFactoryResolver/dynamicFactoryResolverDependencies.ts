import {autoinject} from "aurelia-dependency-injection";
import {Container} from "aurelia-dependency-injection";
import {IDynamicFactoryResolverDependencies} from "./iDynamicFactoryResolverDependencies";
import {DynamicFactoryResolverBase} from "./dynamicFactoryResolverBase";
import {Dependency} from "../../mixins/dependency/Dependency";

@autoinject()
export class DynamicFactoryResolverDependencies extends Dependency<DynamicFactoryResolverBase> implements IDynamicFactoryResolverDependencies {

  container: Container;
  
  constructor(
    container: Container
  ) {
    super();
    this.container = container.createChild();
  }
}
