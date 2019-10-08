import React from "react";
import "../../styles/home.scss";
import { ControlledCarousel } from "../component/carousel";
export class Home extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<h1>Testing carousel</h1>
				<ControlledCarousel />
			</div>
		);
	}
}
