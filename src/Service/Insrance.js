import axios from "axios";
const Axios = axios.create({
    baseURL: "https://api.waterfrontconcerts.com/"
});

export default Axios;