import { USERS } from './userData';
import { setLoading } from '../../../app/store/loadingScreen';

export class userAPI {
  static fetchUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
      return response.json();
    })
  }

  static fetchUsersTest(dispatch) {
    dispatch(setLoading())
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(setLoading())
        resolve([...USERS]);
      }, 1000);
    });
  }
}
