import axios from "axios";
import postImg from "../../assets/postImage.jpeg";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../contextApi/context";
import "./singlePost.css";
import { baseURL } from "../../App";
import DeletePopup from "../DeletePopup";

export default function SinglePost({ data }) {
	const location = useLocation();
	const path = location.pathname.split("/")[2];
	const [post, setPost] = useState({});
	const { user } = useContext(Context);
	const [del, setDel] = useState(false);

	useEffect(() => {
		const getPost = async () => {
			const res = await axios.get(`${baseURL}/posts/${path}`);
			setPost(res.data);
		};
		getPost();
	}, [path]);

	let Img = postImg;
	if (post.photo) {
		Img = post.photo;
	} else {
		Img = postImg;
	}

	return (
		<>
			{del && <DeletePopup setDel={setDel} text="post" postId={post._id} />}
			<div className="singlePost">
				<div className="singlePostWrapper">
					<img src={Img} alt="" className="singlePostImg" />
					<h1 className="singlePostTitle">{post.title}</h1>
					{user && post.userId === user._id && (
						<div className="singlePostEdit">
							<Link to={`/postedit/${post._id}`}>
								<i className="far fa-edit" />
							</Link>
							<i
								className="singlePostIcon far fa-trash-alt"
								onClick={() => setDel(true)}
							/>
						</div>
					)}
					<div className="singlePostInfo">
						<span className="singlePostAuthor">
							Author : <b> {post.username}</b>
						</span>
						<span className="singlePostDate">
							{new Date(post.createdAt).toDateString()}
						</span>
					</div>
					<p className="singlePostDesc">{post.desc}</p>
				</div>
			</div>
		</>
	);
}
