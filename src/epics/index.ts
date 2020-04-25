import { combineEpics } from "redux-observable";

import { sampleEpics } from './sample'

export const rootEpic = combineEpics(sampleEpics);
