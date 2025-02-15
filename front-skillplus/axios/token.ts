
// Assuming you have a function to get the current token from storage
//page token
import axios from 'axios';
export const getToken = async () => {
    const token = localStorage.getItem('token');
    return token;
  };
  
  // Assuming you have a function to refresh the token
  export const refreshToken = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    // Make a request to the server to refresh the token
    const response = await axios.post('/token/refresh', { refreshToken });
    // Update the token in localStorage
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('refreshToken', response.data.refreshToken);
  };
