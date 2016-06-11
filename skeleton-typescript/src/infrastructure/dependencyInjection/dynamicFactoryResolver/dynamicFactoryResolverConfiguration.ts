import {DynamicFactoryResolverBase} from "./dynamicFactoryResolverBase";
import {Configuration} from "../../mixins/configuration/Configuration";
import {IDynamicFactoryResolverConfiguration} from "./iDynamicFactoryResolverConfiguration";

export class DynamicFactoryResolverConfiguration extends Configuration<DynamicFactoryResolverBase> implements IDynamicFactoryResolverConfiguration {

  constructor() {
    super();
  }
}
