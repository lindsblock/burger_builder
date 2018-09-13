import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-653c5.firebaseio.com/'
});

export default instance;
