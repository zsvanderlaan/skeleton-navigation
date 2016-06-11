import {Composable} from "../composable/Composable";
import {IDependency} from "../dependency/iDependency";
import {IConfiguration} from "../configuration/iConfiguration";

export class ActivatableBase extends Composable<IDependency<ActivatableBase>, IConfiguration<ActivatableBase>> {
  
  constructor(dependencies: IDependency<ActivatableBase>, configuration: IConfiguration<ActivatableBase>) {
    super(dependencies, configuration);
  }
}
