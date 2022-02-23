import axios from "axios";

const KEY = "AIzaSyAEpzX0I5c8O5djpm4TYtbyOa_mdPMFZJM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResult: 5,
    key: KEY,
  },
});
