
import axios from 'axios';

export const login = async (email, password) => {
  try {

    const response = await axios.post('https://localhost:7066/login', null, {
        params: {
          email,
          password
        }
      });
      
    // Extract the token from the response
    const token = response.data.token;

    // Save the token in local storage or a cookie
    localStorage.setItem('jwtToken', token);
    //console.log("token"+ token);

    // Return true to indicate successful login
   // console.log(response);
    return true;
  } catch (error) {
    // Handle any errors that occur during login
    console.error('Error during login:', error);
    return false;
  }
};


export const setToken = (token) => {
    localStorage.setItem('jwtToken', token);
};

export const getToken = () => {
    return localStorage.getItem('jwtToken');
};

export const removeToken = () => {
    localStorage.removeItem('jwtToken');
};
