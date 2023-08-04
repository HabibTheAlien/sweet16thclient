import { Link } from "react-router-dom";
import styled from "styled-components";
import avtar from "../assets/user.png";
import { mobile } from "../responsive";

const Container = styled.div`
	width: 95%;
	height: 130px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 10px;
	padding: 10px;
	border-radius: 10px;
	cursor: pointer;

	/* ${mobile({
		height: "100px",
		width: "90%",
		margin: "7px",
	})} */
`;
const Left = styled.div`
	flex: 4;
`;
const Avtar = styled.img`
	cursor: pointer;
	width: 70px;
	height: 70px;
	margin-right: 5px;
	background-color: white;
	object-fit: contain;
	border-radius: 50%;
	${mobile({ height: "60px", width: "60px" })}
`;
const Right = styled.div`
	flex: 8;
`;
const Text = styled.p`
	text-align: center;
	color: white;
	font-size: 18px;
	${mobile({ fontSize: "15px", textAlign: "left" })}
`;

const Name = styled.span`
	font-weight: 600;
`;
const Status = ({ data, id }) => {
	return (
		<Link to={`/single/${id}`} className="link">
			<Container
				style={{
					backgroundColor: data.status ? "#1dbf73" : "#ff0000",
				}}>
				<Left>
					{data.profilePic ? (
						<Avtar src={data.profilePic} alt="" />
					) : (
						<Avtar src={avtar} alt="" />
					)}
				</Left>
				<Right>
					{data.status ? (
						<Text>
							<Name>{data.username}&nbsp;</Name>
							is now studying
						</Text>
					) : (
						<Text>
							<Name>{data.username}&nbsp;</Name> is not studying
						</Text>
					)}
				</Right>
			</Container>
		</Link>
	);
};

export default Status;
