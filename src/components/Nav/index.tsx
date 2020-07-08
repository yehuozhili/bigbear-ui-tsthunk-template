import React, { ReactNode } from "react";
import { Icon } from "bigbear-ui";
import { History } from "history";
import useGetWidth from "../hooks/useGetWidth";

interface Props {
	history: History;
	children: ReactNode;
}
export default function NavHeader(props: Props) {
	const width = useGetWidth();
	return (
		<div className="bigbear-layout-block-default nav" style={{ width }}>
			<span className="navicon" onClick={() => props.history.goBack()}>
				<Icon icon="angle-left"></Icon>
			</span>
			<span className="nav-text">{props.children}</span>
		</div>
	);
}
