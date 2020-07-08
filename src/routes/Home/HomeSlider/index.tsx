import React, {
	PropsWithChildren,
	useLayoutEffect,
	useState,
	useMemo,
	memo,
} from "react";
import { Carousel } from "bigbear-ui";
import { Slider } from "../../../store/reducer/home";
import { useDispatch } from "react-redux";
import actions from "../../../store/actionsCreaters/home";
import useGetWidth from "../../../components/hooks/useGetWidth";
type Props = PropsWithChildren<{
	sliders: Slider[];
}>;
function HomeSliders(props: Props) {
	const dispatch = useDispatch();
	const [retry, setRetry] = useState(0);
	useLayoutEffect(() => {
		if (props.sliders.length === 0 && retry === 0) {
			dispatch(actions.getSliders());
			setRetry((x) => x + 1);
		}
	}, [dispatch, props.sliders.length, retry]);
	const width = useGetWidth();
	const px = useMemo(() => {
		const px = (width / 10) * 5;
		return px;
	}, [width]);
	return (
		<Carousel height={px}>
			{props.sliders.map((item: Slider, index: number) => (
				<div key={index} style={{ height: "100%", width: "100%" }}>
					<img
						src={item.url}
						style={{ height: "100%", width: "100%" }}
						alt={"sliderimg"}
					/>
				</div>
			))}
		</Carousel>
	);
}

export default memo(HomeSliders);
