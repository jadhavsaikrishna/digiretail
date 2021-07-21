import axios from "axios";

const api = axios.create({
  headers: {
    "app-id": "60b6023c98e5768341aefad0"
  }
});

export default api;
