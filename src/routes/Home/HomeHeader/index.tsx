import React, { memo } from "react";
import { Menu, SubMenu, MenuItem, Icon } from "bigbear-ui";
import useGetWidth from "../../../components/hooks/useGetWidth";

function HomeHeader() {
	const width = useGetWidth();
	const handleSelect = (
		index: string,
		current: string | undefined,
		setState: React.Dispatch<React.SetStateAction<string | undefined>>
	) => {
		if (index === current) {
			setState("-1");
		} else {
			setState(index);
			switch (index) {
				case "0-0":
					break;
				case "0-1":
					break;
				default:
					break;
			}
		}
	};

	return (
		<div
			className="home-homeheader bigbear-layout-block-default"
			style={{ width }}
		>
			<div>
				<span className="home-text">BIGBEAR-UI </span>
			</div>
			<Menu
				style={{
					justifyContent: "flex-end",
					flex: "1",
					boxShadow: "none",
					borderBottom: "none",
				}}
				customHandle={handleSelect}
			>
				<SubMenu
					className={"subm"}
					style={{ display: "flex" }}
					icon={false}
					title={<Icon icon="align-justify"></Icon>}
				>
					<MenuItem>react</MenuItem>
					<MenuItem>vue</MenuItem>
				</SubMenu>
			</Menu>
		</div>
	);
}

export default memo(HomeHeader);
