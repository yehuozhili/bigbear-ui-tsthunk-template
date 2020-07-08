import axios from "axios";
import "../mock/index";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
axios.interceptors.request.use(
	(config) => {
		let access_token = sessionStorage.getItem("access_token");
		config.headers = {
			Authorization: `Bearer ${access_token}`,
		};
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);
axios.interceptors.response.use(
	(response) => response.data,
	(error) => Promise.reject(error)
);
export default axios;
