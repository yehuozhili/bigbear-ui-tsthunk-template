import axios from "./index";
export function APIgetSliders() {
	return axios.get("/slider/list");
}
