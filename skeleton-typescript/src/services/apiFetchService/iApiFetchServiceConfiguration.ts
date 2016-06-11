import {IApiFetchService} from "./iApiFetchService";
import {IConfiguration} from "../../infrastructure/mixins/configuration/iConfiguration";
import {IActivatableConfiguration} from "../../infrastructure/mixins/activatable/iActivatableConfiguration";
import {IEventSubscriberConfiguration} from "../../infrastructure/mixins/eventSubscriber/iEventSubscriberConfiguration";
import {IEventPublisherConfiguration} from "../../infrastructure/mixins/eventPublisher/iEventPublisherConfiguration";

export interface IApiFetchServiceConfiguration extends IConfiguration<IApiFetchService>, IActivatableConfiguration, IEventSubscriberConfiguration, IEventPublisherConfiguration {

  requestMethod: string;

  activateOnConstruction: boolean;
  isActive: boolean;

  hasBody: boolean;
  body: Object;

  // todo: create map of route to responseType so that route does not have to be provided as a param
  apiRoute: Request | string;
  responseType: Function | string
}
