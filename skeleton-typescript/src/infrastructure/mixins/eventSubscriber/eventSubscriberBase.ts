import {Composable} from "../composable/Composable";
import {IDependency} from "../dependency/iDependency";
import {IConfiguration} from "../configuration/iConfiguration";

export class EventSubscriberBase extends Composable<IDependency<EventSubscriberBase>, IConfiguration<EventSubscriberBase>> {

  constructor(dependencies: IDependency<EventSubscriberBase>, configuration: IConfiguration<EventSubscriberBase>) {
    super(dependencies, configuration);
  }
}
