import * as TYPES from "../actiontypes";
import { AnyAction } from "redux";
export interface Slider {
	url: string;
}
export interface HomeState {
	sliders: Slider[];
}
const homeInitState = {
	sliders: [],
};

export default function (state: HomeState = homeInitState, action: AnyAction) {
	switch (action.type) {
		case TYPES.GET_SLIDERS:
			return { ...state, sliders: action.payload.data };
		default:
			return state;
	}
}
