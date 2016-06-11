import {HttpClient} from "aurelia-fetch-client";
import {inject} from "aurelia-dependency-injection";
import {ApiFetchService} from "./apiFetchService";
import {Dependency} from "../../infrastructure/mixins/dependency/Dependency";
import {IApiFetchServiceDependencies} from "./iApiFetchServiceDependencies";
import {DynamicFactoryResolver} from "../../infrastructure/dependencyInjection/dynamicFactoryResolver/dynamicFactoryResolver";
import {EventAggregator} from "aurelia-event-aggregator";
import {ObserverLocator} from "aurelia-binding";

@inject(
  HttpClient
)
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
