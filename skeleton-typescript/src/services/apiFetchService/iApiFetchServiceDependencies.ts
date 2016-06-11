import {IApiFetchService} from "./iApiFetchService";
import {IDependency} from "../../infrastructure/mixins/dependency/iDependency";
import {IActivatableDependencies} from "../../infrastructure/mixins/activatable/iActivatableDependencies";
import {IEventPublisherDependencies} from "../../infrastructure/mixins/eventPublisher/iEventPublisherDependencies";
import {IEventSubscriberDependencies} from "../../infrastructure/mixins/eventSubscriber/iEventSubscriberDependencies";
import {HttpClient} from "aurelia-fetch-client";

export interface IApiFetchServiceDependencies extends IDependency<IApiFetchService>, IActivatableDependencies, IEventSubscriberDependencies, IEventPublisherDependencies {
  http: HttpClient;
}
