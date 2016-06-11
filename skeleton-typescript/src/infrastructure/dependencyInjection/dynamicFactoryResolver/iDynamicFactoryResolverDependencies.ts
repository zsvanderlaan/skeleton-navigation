import {IDynamicFactoryResolver} from "./iDynamicFactoryResolver";
import {IDependency} from "../../mixins/dependency/iDependency";
import {Container} from "aurelia-dependency-injection";

export interface IDynamicFactoryResolverDependencies extends IDependency<IDynamicFactoryResolver> {
  container: Container;
}
