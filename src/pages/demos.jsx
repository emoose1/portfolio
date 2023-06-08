import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";
import AllDemos from "../components/demos/allDemos";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/demo.css";
import "./styles/projects.css";


const Demos = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "demos");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Demos | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="demos" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							A live showcase of a few things I've created.
						</div>

						<div className="subtitle projects-subtitle">
							I have gained valuable experience working on various projects over the years and I'm proud of the progress I've made. 
							If you're interested in any of the projects I've worked on, please feel free to explore the code and share any suggestions 
							or enhancements you may have in mind.
						</div>
						<div className="demos-list">
							<AllDemos />
						</div>
						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Demos;