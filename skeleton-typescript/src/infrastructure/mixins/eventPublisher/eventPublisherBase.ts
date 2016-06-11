import {Composable} from "../composable/Composable";
import {IDependency} from "../dependency/iDependency";
import {IConfiguration} from "../configuration/iConfiguration";

export class EventPublisherBase extends Composable<IDependency<EventPublisherBase>, IConfiguration<EventPublisherBase>> {

  constructor(dependencies: IDependency<EventPublisherBase>, configuration: IConfiguration<EventPublisherBase>) {
    super(dependencies, configuration);
  }
}
