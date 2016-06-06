import {autoinject} from "aurelia-dependency-injection";
import {ObserverLocator} from "aurelia-binding";

@autoinject()
export class ActivatableDependencies {

  constructor(
    public observerLocator: ObserverLocator
  ) { }
}
