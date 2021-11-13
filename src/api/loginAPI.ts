/* eslint-disable object-shorthand */
import axios from 'axios';

export function signUp(email: string, password: string) {
  axios
    .post('http://13.209.190.73:8080/api/v1/login', {
      email: email,
      password: password,
    })
    .then(function (response) {
      if (response.status === 200) {
        // eslint-disable-next-line no-restricted-globals
        history.pushState(null, '', '/');
        window.location.reload();
      }
    })
    .catch(function () {
      alert('아이디 또는 비밀번호를 확인해주세요.');
    });
}

export default signUp;
