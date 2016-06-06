import {ApiRequestEvent} from "../../apiRequestEvent";

export interface IApiFetchService {
  onApiRequestEvent(event: ApiRequestEvent): void;
}
