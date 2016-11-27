import { dispatch, dispatchAsync } from '../dispatchers/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import ProgressBarService from '../services/ProgressBarService';

export default {
  fetch: () => {
    let promise = ProgressBarService.fetch();

    dispatchAsync(promise, {
      request: ActionTypes.REQUEST_PROGRESSBAR_DATA,
      success: ActionTypes.REQUEST_PROGRESSBAR_DATA_SUCCESS,
      failure: ActionTypes.REQUEST_PROGRESSBAR_DATA_FAILURE
    });
  }
}
