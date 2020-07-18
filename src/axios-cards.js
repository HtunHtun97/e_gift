import axios from "axios";

const instance = axios.create({
  baseURL: "https://ayainno.glitch.me/",
});

export default instance;
