import {inject} from "aurelia-dependency-injection";
import {DynamicFactoryResolverConfiguration} from "./dynamicFactoryResolverConfiguration";
import {DynamicFactoryResolverDependencies} from "./dynamicFactoryResolverDependencies";
import {IDynamicFactoryResolverBase} from "./iDynamicFactoryResolverBase";
import {Factory} from "aurelia-dependency-injection";
import {transient} from "aurelia-dependency-injection";
import {IDynamicFactoryResolver} from "./iDynamicFactoryResolver";

@transient()
@inject(DynamicFactoryResolverDependencies)
export class DynamicFactoryResolver extends IDynamicFactoryResolverBase implements IDynamicFactoryResolver {

  constructor(_dependencies: DynamicFactoryResolverDependencies, _configuration: DynamicFactoryResolverConfiguration) {
    super(_dependencies, _configuration);
  }

  get<T>(key: T, configuration): T {
    this.container.registerResolver(key, Factory.of(key));
    let eventTypeFactory: (configuration) => any = this.container.get(key);
    let event = eventTypeFactory(configuration) as T;
    return event;
  }
}
