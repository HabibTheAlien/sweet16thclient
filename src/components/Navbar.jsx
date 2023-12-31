import { Context } from "../contextApi/context";
import { Link } from "react-router-dom";
import avtar from "../assets/user.png";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useContext } from "react";

const Container = styled.div`
	z-index: 1000;
	height: 70px;
	width:100vw;
	background: white;
	border-bottom: 1px solid silver;
	display: flex;
	align-items: center;
	color: #1d1d1d;
	justify-content: space-between;
	padding: 5px 10px;
	position: sticky;
	top: 0;
`;

const Left = styled.div`
	cursor: pointer;
`;
const Logo = styled.h1`
	/* font-size:; */
	color: #703be7;
	@media only screen and (max-width: 600px) {
		font-size: 1.3rem;
	}
	@media only screen and (min-width: 600px) {
		font-size: 1.6rem;
	}
	@media only screen and (min-width: 768px) {
		font-size: 1.8rem;
	}
	@media only screen and (min-width: 1200px) {
		font-size: 2rem;
	}
`;
const Center = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Right = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;
const Avtar = styled.img`
	cursor: pointer;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: white;
	object-fit: cover;
	margin-right: 5px;

	${mobile({ width: "45px", height: "45px" })}
`;
const Items = styled.span`
	cursor: pointer;
	padding: 5px 10px;
	color: #1d1d1d;
	font-size: 15px;
	&:hover {
		color: blue;
	}

	@media only screen and (max-width: 600px) {
		font-size: 0.9rem;
		padding: 5px 5px;
	}
	@media only screen and (min-width: 600px) {
		font-size: 1rem;
		padding: 5px 6px;
	}

	@media only screen and (min-width: 768px) {
		font-size: 1.1rem;
		padding: 5px 7px;
	}
	@media only screen and (min-width: 1200px) {
		font-size: 1.2rem;
		padding: 5px 9px;
	}
`;
const Btn = styled.button`
	cursor: pointer;
	background: inherit;
	padding: 5px 10px;
	color: #1d1d1d;
	border: none;
	border-radius: 5px;
	font-size: 16px;
	border: 1px solid silver;
	${mobile({ padding: "5px" })}
`;

const Navbar = () => {
	const { user } = useContext(Context);

	return (
		<Container>
			<Left>
				<Link className="link" to="/">
					<Logo>Sweet 16th</Logo>
				</Link>
			</Left>
			<Center>
				<Link className="link" to="/">
					<Items>Home</Items>
				</Link>
				<Link className="link" to="/friends">
					<Items>Friends</Items>
				</Link>
				<Link className="link" to="/write">
					<Items> Write</Items>
				</Link>
			</Center>
			<Right>
				{user ? (
					<>
						<Link className="link" to="/profile">
							{user.profilePic ? (
								<Avtar src={user.profilePic} alt="" />
							) : (
								<Avtar src={avtar} alt="" />
							)}
						</Link>
						<Link className="link" to="/profile">
							{/* <Name>{user.username}</Name> */}
						</Link>
						{/* <Btn onClick={handleLogout}>Logout</Btn> */}
					</>
				) : (
					<Link className="link" to="/login">
						<Btn>Login</Btn>
					</Link>
				)}
			</Right>
		</Container>
	);
};

export default Navbar;
