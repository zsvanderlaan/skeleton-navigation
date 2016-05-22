import {Factory} from "aurelia-dependency-injection";
import {Child} from "./child";
import {inject} from "aurelia-dependency-injection";
import {ChildConfiguration} from "./childConfiguration";


@inject(Factory.of(Child))
export class TestServiceDependencies {

  constructor(
    public childFactory: (configuration: ChildConfiguration) => Child
  ) {
  }
}
