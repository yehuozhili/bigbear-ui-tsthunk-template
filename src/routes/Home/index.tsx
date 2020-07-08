import React, { PropsWithChildren } from "react";
import HomeHeader from "./HomeHeader";
import { connect } from "react-redux";
import { CustomCombinedState } from "../../store/reducer/index";
import { HomeState } from "../../store/reducer/home";
import { RouteComponentProps } from "react-router-dom";
import HomeSliders from "./HomeSlider";
const mapStateToProps = (state: CustomCombinedState): HomeState => state.home;

type HomeProps = PropsWithChildren<RouteComponentProps & HomeState>;

function Home(props: HomeProps) {
	return (
		<>
			<HomeHeader></HomeHeader>

			<div className="home-container">
				<HomeSliders sliders={props.sliders}></HomeSliders>
			</div>
		</>
	);
}

export default connect(mapStateToProps)(Home);
