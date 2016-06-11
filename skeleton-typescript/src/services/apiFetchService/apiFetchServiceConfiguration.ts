import {Configuration} from "../../infrastructure/mixins/configuration/Configuration";
import {ApiFetchService} from "./apiFetchService";
import {IApiFetchServiceConfiguration} from "./iApiFetchServiceConfiguration";

export class ApiFetchServiceConfiguration extends Configuration<ApiFetchService> implements IApiFetchServiceConfiguration  {

  activateAfterComposition:boolean = true;
  subscribeOnActivation:boolean = true;
  unsubscribeOnDeactivation:boolean = true;

  public requestMethod: string = 'GET';

  public activateOnConstruction: boolean = true;
  public isActive: boolean = false;

  public hasBody: boolean = false;
  public body: Object = Object.create(Object);

  // todo: create map of route to responseType so that route does not have to be provided as a param
  public apiRoute: Request | string;

  constructor(
    public responseType: Function | string
  ) {
    super();
  }
}
