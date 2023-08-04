import Google from "../assets/google.png";
import styled from "styled-components";
const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid gray;
	padding: 5px 15px;
	width: 100%;
	cursor: pointer;
`;
const Btn = styled.button`
	background: none;
	border: none;
	margin-left: 10px;
	cursor: pointer;
`;

const SocialLogin = () => {
	return (
		<Container>
			<img style={{ width: "25px" }} src={Google} alt="" />
			<Btn> Login with Google</Btn>
		</Container>
	);
};

export default SocialLogin;
