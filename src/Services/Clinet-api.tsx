import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7a975e0d12da49d7ad21eab5a283ce3e",
  },
});
