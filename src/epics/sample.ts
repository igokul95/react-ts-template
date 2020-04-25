import { Epic, combineEpics } from "redux-observable";
import { of } from "rxjs";

import {
  catchError,
  filter,
  mergeMap,
  switchMap,
  throttleTime
} from "rxjs/operators";
import { isActionOf } from "typesafe-actions";
import {
 sampleAsyncAction
} from "../actions";

import { Dependencies } from "../api/APIs";
import {
  RootInputAction,
  RootOutputAction,
  RootState,
} from "../types";


export const sampleEpic: Epic<
  RootInputAction,
  RootOutputAction,
  RootState,
  Dependencies
> = (action$, store$, { apis }) => {
  return action$.pipe(
    filter(isActionOf(sampleAsyncAction.request)),
    switchMap(action => {
        return apis.sample().pipe(
        throttleTime(1000),
        mergeMap(response => {
          return of(sampleAsyncAction.success());
        }),
        catchError(error => {
              
          return of(sampleAsyncAction.failure());
        })
      );
    })
  );
};


export const sampleEpics = combineEpics(
    sampleEpic
);