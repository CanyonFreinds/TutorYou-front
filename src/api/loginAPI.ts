import axios from 'axios';

interface LoginAPIRequest {
  email: string;
  password: string;
}

export const loginAPI = async ({ email, password }: LoginAPIRequest) => {
  try {
    const response = await axios({
      method: 'POST',
      url: `/api/v1/login`,
      data: {
        email,
        password,
      },
    });
    return response.data;
  } catch (error) {
    window.alert('error');
    return false;
  }
};
