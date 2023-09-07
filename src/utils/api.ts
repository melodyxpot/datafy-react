import axios from "axios";

// Create an instance of axios
const api = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api`,
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
