/* eslint-disable func-names */
/* eslint-disable object-shorthand */

import axios from 'axios';

interface CareerFormType {
  content: string;
  careerType: string;
}

export function signUp(email: string, name: string, password: string, role: string, careers: CareerFormType[]) {
  axios
    .post('/api/v1/signup', {
      email: email,
      name: name,
      password: password,
      role: role,
      careers: careers,
    })
    .then(function (response) {
      if (response.status === 201) {
        // eslint-disable-next-line no-restricted-globals
        history.pushState(null, '', '/login');
        window.location.reload();
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default signUp;
