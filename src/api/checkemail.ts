import axios from 'axios';

export function checkEmail(email: string) {
  axios
    .get('http://13.209.190.73:8080/api/v1/users/validation', {
      params: {
        email: email,
      },
    })
    .then(function (response) {
      if (response.status === 204) {
        alert('사용 가능한 이메일 입니다.');
      }
    })
    .catch(function () {
      alert('유효하지 않은 이메일입니다.');
    });
}

export default checkEmail;
