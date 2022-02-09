import axios from "axios";

export default axios.create({
  baseURL: "https://62021971b8735d00174cb749.mockapi.io",
  headers: {
    "Content-type": "application/json"
  }
});
