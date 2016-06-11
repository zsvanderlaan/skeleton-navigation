import {IConfiguration} from "../../infrastructure/mixins/configuration/iConfiguration";
import {IDependency} from "../../infrastructure/mixins/dependency/iDependency";
import {Composable} from "../../infrastructure/mixins/composable/Composable";

export class ApiFetchServiceBase extends Composable<IDependency<ApiFetchServiceBase>, IConfiguration<ApiFetchServiceBase>> {

  constructor(dependencies: IDependency<ApiFetchServiceBase>, configuration: IConfiguration<ApiFetchServiceBase>) {
    super(dependencies, configuration);
  }
}
