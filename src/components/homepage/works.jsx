import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./images/home_depot_logo.png"
								alt="home depot"
								className="work-image"
							/>
							<div className="work-title">Home Depot</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2021 - Present</div>
						</div>

						<div className="work">
							<img
								src="./images/gtri_logo.svg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Georgia Tech Research Institute</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2020 - 2021</div>
						</div>

						<div className="work">
							<img
								src="./images/us_bank_logo.svg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">U.S. Bank</div>
							<div className="work-subtitle">
								Software Engineer Intern
							</div>
							<div className="work-duration">2019 - 2020</div>
						</div>

						<div className="work">
							<img
								src="./images/fcg_logo.svg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Fulton County Government</div>
							<div className="work-subtitle">
								Software Engineer Intern
							</div>
							<div className="work-duration">2019 - 2020</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
