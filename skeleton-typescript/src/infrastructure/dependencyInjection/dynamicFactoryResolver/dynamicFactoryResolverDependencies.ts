import {autoinject} from "aurelia-dependency-injection";
import {Container} from "aurelia-dependency-injection";

@autoinject()
export class DynamicFactoryResolverDependencies {

  container: Container;
  
  constructor(
    container: Container
  ) { 
    this.container = container.createChild();
  }
}
