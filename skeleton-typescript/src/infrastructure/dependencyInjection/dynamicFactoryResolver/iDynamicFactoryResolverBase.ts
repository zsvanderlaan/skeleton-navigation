import {compose} from "../../mixins/compose";
import {IDynamicFactoryResolverConfiguration} from "./iDynamicFactoryResolverConfiguration";
import {IDynamicFactoryResolverDependencies} from "./iDynamicFactoryResolverDependencies";
import {DynamicFactoryResolverBase} from "./dynamicFactoryResolverBase";

export interface IDynamicFactoryResolverStatic {
  new(dependencies: IDynamicFactoryResolverDependencies, configuration: IDynamicFactoryResolverConfiguration): IDynamicFactoryResolverBase;
  (dependencies: IDynamicFactoryResolverDependencies, configuration: IDynamicFactoryResolverConfiguration): void;
}

export interface IDynamicFactoryResolverBase extends
  DynamicFactoryResolverBase
  , IDynamicFactoryResolverDependencies
  , IDynamicFactoryResolverConfiguration {

}

export let IDynamicFactoryResolverBase = compose() as IDynamicFactoryResolverStatic;
