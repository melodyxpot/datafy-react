import axios from "axios";
import { SERVER_API } from "config/endpoints";

// Create an instance of axios
const api = axios.create({
  baseURL: `${SERVER_API}/api`,
  headers: {
    "Content-Type": "application/json"
  }
});

api.interceptors.response.use(
  res => res,
  err => {
    if (err.response.status === 401) {
      // localStorage.clear();
    }
    return Promise.reject(err);
  }
);

export default api;
