import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { TypeAnimation } from 'react-type-animation';
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							<TypeAnimation
								sequence={[INFO.contactPage.title]}
								speed={15}
								repeat={4}
							/>
						</div>

						<div className="subtitle contact-subtitle">
							Your feedback, questions, and suggestions are warmly welcomed. 
							If you have a particular inquiry or comment, please don't 
							hesitate to reach me via email at&nbsp;{""}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>. 
							<br></br>
							<br></br>
							Also, you can schedule a conversation by booking a time slot on my&nbsp;{""} 
							<a href={`mailto:${INFO.socials.calendly}`}>
								Calendly calendar
							</a>.
							Simply fill out the required fields and I'll get back to you as soon as possible. 
							<br></br>
							<br></br>
							I strive to reply to all messages within 24 hours, although there might be delays 
							during busy periods. Once again, thank you for your interest, and I look forward
							to hearing from you! 
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
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

export default Contact;
