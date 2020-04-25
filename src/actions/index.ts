import { createAction, createAsyncAction } from 'typesafe-actions';  
import * as constants from '../constants'

export const sampleAction = createAction(
    constants.SAMPLE_ACTION,
)<void>();

export const sampleAsyncAction = createAsyncAction(
    constants.SAMPLE_ACTION_REQUEST,
    constants.SAMPLE_ACTION_SUCCESS,
    constants.SAMPLE_ACTION_FAILURE
)<void, void, void>();

