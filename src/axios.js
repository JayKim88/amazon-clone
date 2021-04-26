import axios from 'axios'

const instance = axios.create({
  baseURL: "https://us-central1-challenge-cc017.cloudfunctions.net/api" // THE API(cloud function) URL
  // baseURL: "http://localhost:5001/challenge-cc017/us-central1/api" // THE API Emulater URL
});

export default instance;