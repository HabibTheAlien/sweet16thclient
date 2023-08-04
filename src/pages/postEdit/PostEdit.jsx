import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import postImg from "../../assets/postImage.jpeg";
import { Context } from "../../contextApi/context";

import { baseURL } from "../../App";
import axios from "axios";
import "./postEdit.css";

const PostEdit = () => {
	const location = useLocation();
	const path = location.pathname.split("/")[2];
	const [post, setPost] = useState(JSON.parse(localStorage.getItem("post")));
	const [title, setTitle] = useState(post ? post.title : " ");
	const [desc, setDesc] = useState(post ? post.desc : " ");
	const [file, setFile] = useState(null);
	const [picURL, setPicURL] = useState(post ? post.photo : " ");
	const [isLoading, setIsLoading] = useState(false);
	const [isFetching, setIsFetching] = useState(false);
	const { user } = useContext(Context);

	useEffect(() => {
		const getPost = async () => {
			const res = await axios.get(`${baseURL}/posts/${path}`);
			localStorage.setItem("post", JSON.stringify(res.data));
			// setPost();
			console.log(res.data);
		};
		getPost();
	}, [path]);

	useEffect(() => {
		if (file) {
			const handlePic = async () => {
				setIsLoading(true);
				const data = new FormData();
				data.append("file", file);
				data.append("upload_preset", "auth-image");
				data.append("cloude_name", "djfnygr4y");
				try {
					const res = await axios.post(
						"https://api.cloudinary.com/v1_1/djfnygr4y/image/upload",
						data
					);
					setPicURL(res.data.url);
					setIsLoading(false);
				} catch (error) {
					console.log(error);
				}
			};
			handlePic();
		}
	}, [file]);

	const handleUpdate = async (e) => {
		e.preventDefault();
		setIsFetching(true);
		const updatedPost = {
			userId: user._id,
			title,
			desc,
			photo: picURL,
		};

		try {
			const res = await axios.put(
				`${baseURL}/posts/${path}`,
				updatedPost
			);

			console.log(res.data);
			setIsFetching(false);
			localStorage.removeItem("post");
			res && window.location.replace(`/post/${path}`);
		} catch (err) {}
	};

	let Img = postImg;
	if (file) {
		Img = URL.createObjectURL(file);
	} else if (post) {
		Img = post.photo;
	} else {
		Img = postImg;
	}
	return (
		<div className="postEdit">
			<img className="postEditImg" src={Img} alt="" />
			<form className="postEditForm" onSubmit={handleUpdate}>
				<div className="postEditFormGroup">
					<label htmlFor="fileInput">
						{isLoading ? (
							<i className="fas fa-spinner fa-pulse" />
						) : (
							<span className="postEditIconDiv ">
								<i className="postEditIcon fas fa-plus"></i>
								Change Picture
							</span>
						)}
					</label>
					<input
						type="file"
						id="fileInput"
						name="photo"
						style={{ display: "none" }}
						onChange={(e) => setFile(e.target.files[0])}
					/>
					<input
						type="text"
						placeholder="Title"
						className="postEditInput"
						value={title}
						name="title"
						autoFocus={true}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className="postEditFormGroup">
					<textarea
						placeholder="Tell your story..."
						type="text"
						value={desc}
						name="desc"
						className="postEditInput postEditText"
						onChange={(e) => setDesc(e.target.value)}
					/>
				</div>

				{isFetching ? (
					<i className="fas fa-spinner fa-pulse" />
				) : (
					<button
						type="submit"
						className={
							isLoading ? "load postEditSubmit" : "postEditSubmit"
						}
						onClick={handleUpdate}
						disabled={isLoading}>
						Update
					</button>
				)}
			</form>
		</div>
	);
};
export default PostEdit;
