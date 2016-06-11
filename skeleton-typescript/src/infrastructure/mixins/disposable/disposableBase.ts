import {Composable} from "../composable/Composable";
import {IDependency} from "../dependency/iDependency";
import {IConfiguration} from "../configuration/iConfiguration";

export class DisposableBase extends Composable<IDependency<DisposableBase>, IConfiguration<DisposableBase>> {

  constructor(dependencies: IDependency<DisposableBase>, configuration: IConfiguration<DisposableBase>) {
    super(dependencies, configuration);
  }
}
