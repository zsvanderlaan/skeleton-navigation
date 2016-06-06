import {autoinject} from "aurelia-dependency-injection";

@autoinject()
export class DisposableDependencies {

  constructor(
    // todo: improve compose function so that this throws a compile error in EventSubscriber
    // this is because EventSubscriberDependencies is not a superset of the shape { foo: string }
    public foo: string
  ) { }
}
