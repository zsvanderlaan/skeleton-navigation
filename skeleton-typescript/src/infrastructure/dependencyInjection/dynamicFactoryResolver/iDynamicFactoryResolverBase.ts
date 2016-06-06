import {DynamicFactoryResolverDependencies} from "./dynamicFactoryResolverDependencies";
import {DynamicFactoryResolverConfiguration} from "./dynamicFactoryResolverConfiguration";
import {compose} from "../../mixins/Compose";

export interface IDynamicFactoryResolverStatic {
  new(_dependencies: DynamicFactoryResolverDependencies, _configuration: DynamicFactoryResolverConfiguration): IDynamicFactoryResolverBase;
  (_dependencies: DynamicFactoryResolverDependencies, _configuration: DynamicFactoryResolverConfiguration): void;
}

export interface IDynamicFactoryResolverBase extends DynamicFactoryResolverConfiguration, DynamicFactoryResolverDependencies {
  
}

export let IDynamicFactoryResolverBase = compose(DynamicFactoryResolverConfiguration, DynamicFactoryResolverDependencies) as IDynamicFactoryResolverStatic;
