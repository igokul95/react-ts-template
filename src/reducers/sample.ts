import { combineReducers } from "redux";
import { getType } from "typesafe-actions";

import { ACReduxActions } from "../types";
import * as actions from "../actions";


export type SampleState = {
    message: string;
};

export default combineReducers<SampleState, ACReduxActions>({
    message: (state = '', action) => {
        switch(action.type) {
            case getType(actions.sampleAsyncAction.request): {
                return 'api request';
            }
            case getType(actions.sampleAsyncAction.success): {
                return 'api success';
            }
            case getType(actions.sampleAsyncAction.failure): {
                return 'api failed';
            }
            default:
                 return state;
        }
    },
})