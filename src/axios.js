import axios from "axios";
const instance = axios.create({
baseURL: 'http://localhost:5001/clone-react-f0d50/us-central1/api',
});

export default instance;