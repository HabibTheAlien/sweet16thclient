import React from "react";
import styled from "styled-components";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

const FooterWrapper = styled.footer`
	height: 70px;
	width: 100%;
	/* position: absolute; */
	bottom: 0;
	left: 0;
	padding: 15px 0;
	text-align: center;
	border-top: 1px solid gray;
`;

const Copyright = styled.p`
	font-size: 15px;
	margin-bottom: 15px;
`;

const SocialLinks = styled.div`
	margin-top: 15px;
	display: flex;
	justify-content: center;

	a {
		color: #3c3c3c;

		text-decoration: none;
		margin: 0 10px;
		font-size: 24px;

		&:hover {
			color: purple;
			transition: all 0.5s ease;
		}
	}
`;

const Footer = () => {
	return (
		<FooterWrapper>
			<Copyright>&copy; 2023 Habibur Rahman</Copyright>
			<SocialLinks>
				<a
					href="https://www.facebook.com/habibthealien"
					target="_blank"
					rel="noopener noreferrer">
					<FaFacebook />
				</a>
				<a
					href="https://www.github.com/habibthealien"
					target="_blank"
					rel="noopener noreferrer">
					<FaGithub />
				</a>
				<a
					href="https://www.twitter.com/habibthealien"
					target="_blank"
					rel="noopener noreferrer">
					<FaTwitter />
				</a>
			</SocialLinks>
		</FooterWrapper>
	);
};

export default Footer;
