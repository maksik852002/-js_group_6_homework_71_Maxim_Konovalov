import axios from 'axios';

const axiosSetup = axios.create({
  baseURL: 'https://base-konovalov.firebaseio.com/'
});

export default axiosSetup;
