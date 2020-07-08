import { useEffect, useState } from "react";

function useGetWidth() {
	const [width, setWidth] = useState<number>(
		document.body.getBoundingClientRect().width
	);
	useEffect(() => {
		const handler = () => {
			setWidth(document.body.getBoundingClientRect().width);
		};
		window.addEventListener("resize", handler);
		return () => {
			window.removeEventListener("resize", handler);
		};
	}, []);
	return width;
}

export default useGetWidth;
