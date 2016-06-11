import {inject} from "aurelia-dependency-injection";
import {DynamicFactoryResolverConfiguration} from "./dynamicFactoryResolverConfiguration";
import {DynamicFactoryResolverDependencies} from "./dynamicFactoryResolverDependencies";
import {IDynamicFactoryResolverBase} from "./iDynamicFactoryResolverBase";
import {Factory} from "aurelia-dependency-injection";
import {transient} from "aurelia-dependency-injection";
import {IDynamicFactoryResolver} from "./iDynamicFactoryResolver";

// todo: &&&& this class needs to match the shape of my mixins.
// after shape matching consider if its time to build a generator / scaffold

@transient()
@inject(DynamicFactoryResolverDependencies)
export class DynamicFactoryResolver extends IDynamicFactoryResolverBase implements IDynamicFactoryResolver {

  constructor(dependencies: DynamicFactoryResolverDependencies, configuration: DynamicFactoryResolverConfiguration) {
    super(dependencies, configuration);
  }

  get<T>(key: T, configuration): T {
    this.container.registerResolver(key, Factory.of(key));
    let eventTypeFactory: (configuration) => any = this.container.get(key);
    let event = eventTypeFactory(configuration) as T;
    return event;
  }
}
