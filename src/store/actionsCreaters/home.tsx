import { APIgetSliders } from "../../api/axios/home";
import * as TYPES from "../actiontypes";
const homeDispatchAction = {
	getSliders() {
		return {
			type: TYPES.GET_SLIDERS,
			payload: APIgetSliders(),
		};
	},
};
export default homeDispatchAction;
