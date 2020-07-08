import React, { useContext, memo } from "react";
import { NavLink } from "react-router-dom";
import { __RouterContext as RouterContext } from "react-router";
import { Icon, Row, Col } from "bigbear-ui";
import useGetWidth from "../hooks/useGetWidth";

function Tabs() {
	const context = useContext(RouterContext);
	const width = useGetWidth();
	return (
		<footer className="bigbear-layout-block-default" style={{ width }}>
			<Row>
				<Col
					xs={4}
					sm={4}
					style={{ display: "flex", justifyContent: "center" }}
				>
					<div
						className={`linkbtn ${
							context.location.pathname === "/"
								? "bigbear-layout-wrapper-default"
								: "bigbear-layout-block-default"
						}`}
					>
						<NavLink exact to="/" className="navlink">
							<Icon icon="home" />
						</NavLink>
					</div>
				</Col>
				<Col
					xs={4}
					sm={4}
					style={{ display: "flex", justifyContent: "center" }}
				>
					<div
						className={`linkbtn ${
							context.location.pathname === "/cart"
								? "bigbear-layout-wrapper-default"
								: "bigbear-layout-block-default"
						}`}
					>
						<NavLink exact to="/cart" className="navlink">
							<Icon icon="shopping-cart" />
						</NavLink>
					</div>
				</Col>
				<Col
					xs={4}
					sm={4}
					style={{ display: "flex", justifyContent: "center" }}
				>
					<div
						className={`linkbtn ${
							context.location.pathname === "/profile"
								? "bigbear-layout-wrapper-default"
								: "bigbear-layout-block-default"
						}`}
					>
						<span>
							<Icon icon="user" />
						</span>
					</div>
				</Col>
			</Row>
		</footer>
	);
}

export default memo(Tabs);
