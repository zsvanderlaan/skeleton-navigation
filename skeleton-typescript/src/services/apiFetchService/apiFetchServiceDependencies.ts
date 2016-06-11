import {HttpClient} from "aurelia-fetch-client";
import {ApiFetchService} from "./apiFetchService";
import {Dependency} from "../../infrastructure/mixins/dependency/Dependency";
import {IApiFetchServiceDependencies} from "./iApiFetchServiceDependencies";
import {DynamicFactoryResolver} from "../../infrastructure/dependencyInjection/dynamicFactoryResolver/dynamicFactoryResolver";
import {EventAggregator} from "aurelia-event-aggregator";
import {ObserverLocator} from "aurelia-binding";
import {autoinject} from "aurelia-dependency-injection";

@autoinject()
export class ApiFetchServiceDependencies extends Dependency<ApiFetchService> implements IApiFetchServiceDependencies  {
  constructor(
    public http:HttpClient
    , public observerLocator:ObserverLocator
    , public eventAggregator:EventAggregator
    , public dynamicFactoryResolver:DynamicFactoryResolver
  ) {
    super();
  }
}
