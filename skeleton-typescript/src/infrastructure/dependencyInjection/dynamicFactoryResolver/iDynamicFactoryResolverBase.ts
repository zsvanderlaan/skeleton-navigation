import {DynamicFactoryResolverDependencies} from "./dynamicFactoryResolverDependencies";
import {DynamicFactoryResolverConfiguration} from "./dynamicFactoryResolverConfiguration";
import {getImplementationComposition} from "../../mixins/ImplementationFactory";

export interface IDynamicFactoryResolverStatic {
  new(_dependencies: DynamicFactoryResolverDependencies, _configuration: DynamicFactoryResolverConfiguration): IDynamicFactoryResolverBase;
  (_dependencies: DynamicFactoryResolverDependencies, _configuration: DynamicFactoryResolverConfiguration): void;
}

export interface IDynamicFactoryResolverBase extends DynamicFactoryResolverConfiguration, DynamicFactoryResolverDependencies {
  
}

export let IDynamicFactoryResolverBase = getImplementationComposition(DynamicFactoryResolverConfiguration, DynamicFactoryResolverDependencies) as IDynamicFactoryResolverStatic;
