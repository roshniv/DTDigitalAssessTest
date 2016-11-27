import request from 'request';
import bluebird from 'bluebird';
import url from '../constants/AppConstants';

class ProgressBarService {

  fetch() {
    return new bluebird( (resolve, reject) => {
      request.get(
        {
          url: url.PROGRESS_BAR_DATA_URL,
          json: true,
          withCredentials: false
        },
        (err, response, body) => {
          if(err){
            return reject(err);
          }
          if(response.statusCode >= 400){
            return reject(body);
          }
          return resolve(body);
        }
      );
    });
  }

}

export default new ProgressBarService();
