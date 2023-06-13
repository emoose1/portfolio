import React from "react";

import Demo from "./demo";
import Project from "../projects/project";

import INFO from "../../data/user";

import "./styles/allDemos.css";

const AllDemos = () => {
	return (
		<div className="all-projects-container">
            <div>
                <h3>
                    alldemos component START
                </h3>

                <Demo>

                </Demo>
            
			{/* {INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))} */}
            
                <h3>
					alldemos component END
                </h3>
                
            </div>
		</div>
	);
};

export default AllDemos;