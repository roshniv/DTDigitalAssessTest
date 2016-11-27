import ActionTypes from '../constants/ActionTypes';
import BaseStore from './BaseStore';



class ProgressBarStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this));
    //this.dispatchToken = AppDispatcher.register(this._registerToActions.bind(this));
    this._error = null;
    this._data = null;
    this._status = null;
    this._errorMessage = null;
    this._errorCode = null;
  }

  _registerToActions(action) {
    switch(action.type) {
      case ActionTypes.REQUEST_PROGRESSBAR_DATA:
        console.log("REQUEST_PROGRESSBAR_DATA");
        break;

      case ActionTypes.REQUEST_PROGRESSBAR_DATA_SUCCESS:
      console.log("REQUEST_PROGRESSBAR_DATA_SUCCESS");
        this._data = action.body;
        this._status = true;//action.body.status;
        this.emitChange();
        this._error = null;
        break;

      case ActionTypes.REQUEST_PROGRESSBAR_DATA_FAILURE:
      console.log("REQUEST_PROGRESSBAR_DATA_FAILURE");
        this._error = action.error;
        this._errorMessage = action.error.errors[0].message;
        this._errorCode = "invallid_token"; // this need to be changed when dashboard api come up with the proper error handlings.
        this.emitChange();
        break;

      default:
        break;
    };
  }

  get data() {
    return this._data;
  }

  getData () {
    return this._data;
  }

  setdata(data) {
    this._data = data;
    this.emitChange();
  }

  get error() {
    return this._error;
  }

  getErrorMessage() {
    return this._errorMessage;
  }

  getErrorCode() {
    return this._errorCode;
  }

}

export default new ProgressBarStore();
