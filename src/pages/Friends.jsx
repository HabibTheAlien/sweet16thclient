import styled from "styled-components";
import Status from "../components/Status";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../App";

const Container = styled.div`
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const Friends = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		const getData = async () => {
			try {
				const res = await axios.get(`${baseURL}/users`);
				setData(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		getData();
	}, []);

	return (
		<Container>
			{data.map((item) => (
				<Status data={item} key={item._id} id={item._id} />
			))}
		</Container>
	);
};

export default Friends;
