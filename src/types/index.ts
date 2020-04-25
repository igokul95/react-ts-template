import { ActionType, StateType } from "typesafe-actions";

import * as actions from "../actions";
import { rootReducer } from "../reducers";

export type Store = StateType<typeof rootReducer>;

export type ACReduxActions = ActionType<typeof actions>;

export type RootState = StateType<typeof rootReducer>;
export type RootInputAction = ACReduxActions;
export type RootOutputAction = ACReduxActions;
