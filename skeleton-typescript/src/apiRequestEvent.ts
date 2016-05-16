import {autoinject} from "aurelia-dependency-injection";
import {EventAggregator} from "aurelia-event-aggregator";

///* comment this class and uncomment the one at the end of the file to hide the error
@autoinject()
export class ApiRequestEvent {
  constructor(
    _dependencies: ApiRequestEventDependencies
    , configuration: ApiRequestEventConfiguration
  ) { }
}
//*/

@autoinject()
export class ApiRequestEventDependencies {
  constructor(
    public eventAggregator: EventAggregator
  ) { }
}

@autoinject()
export class ApiRequestEventConfiguration {
  constructor(
    public eventType: Function
  ) { }
}

/* uncomment this class and comment the one at the beginning to hide the error
@autoinject()
export class ApiRequestEvent {
  constructor(
    _dependencies: ApiRequestEventDependencies
    , configuration: ApiRequestEventConfiguration
  ) { }
}
//*/