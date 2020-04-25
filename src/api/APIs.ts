import { Observable } from "rxjs";
import { ajax, AjaxResponse } from "rxjs/ajax";
import { CORE_HOST } from "../constants";
import { APIUrls, ConstructURL } from "../constants/APIUrls";
import {
  getConfig,
} from "./ApiConfig";

export interface Dependencies {
  apis: Apis;
}

interface Apis {
  sample: () => Observable<AjaxResponse>;
}

const apis: Apis = {
  sample: () =>
    ajax(
      getConfig(
        ConstructURL(CORE_HOST, APIUrls.sampleAPI),
        ''
      )
    ),
};

export const dependencies: Dependencies = {
  apis: apis
};
