import { useContext, useEffect, useState } from "react";
import axios from "axios";
import postImg from "../../assets/postImage.jpeg";
import { Context } from "../../contextApi/context";
import { baseURL } from "../../App";

export default function Page() {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [file, setFile] = useState(null);
	const [picURL, setPicURL] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isFetching, setIsFetching] = useState(false);

	const { user } = useContext(Context);

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

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsFetching(true);
		const newPost = {
			userId: user._id,
			userPhoto: user.profilePic,
			username: user.username,
			title,
			desc,
			photo: picURL,
		};
		try {
			const res = await axios.post(`${baseURL}/posts`, newPost);
			setIsFetching(false);
			res && window.location.replace("/");
		} catch (err) {
			console.log(err);
		}
	};

	let Img = postImg;
	if (file) {
		Img = URL.createObjectURL(file);
	} else {
		Img = postImg;
	}

	return (
		<div className="p-5 flex flex-col items-center justify-center">
			<img
				src={Img}
				alt=""
				className="w-90 h-60 rounded-lg object-cover"
			/>
			<form className="w-full flex items-center justify-center flex-col">
				<div className="w-90">
					<label htmlFor="fileInput">
						{isLoading ? (
							<i className="fas fa-spinner fa-pulse" />
						) : (
							<span className="p-2 cursor-pointer font-semibold border border-silver flex items-center justify-start w-32">
								<i className="fas fa-plus text-xl mr-1"></i>
								Add Picture
							</span>
						)}
					</label>
					<input
						type="file"
						id="fileInput"
						style={{ display: "none" }}
						onChange={(e) => setFile(e.target.files[0])}
					/>
					<input
						type="text"
						placeholder="Title"
						autoFocus={true}
						className="text-xl w-full p-2 border rounded-lg border-silver my-2"
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className="w-90">
					<textarea
						placeholder="Tell your story..."
						type="text"
						className="text-base resize-none h-25vh PageText"
						onChange={(e) => setDesc(e.target.value)}></textarea>
				</div>
				{isFetching ? (
					<i className="fas fa-spinner fa-pulse text-2xl mt-4" />
				) : (
					<button
						onClick={handleSubmit}
						disabled={isLoading}
						className={
							isLoading
								? "bg-gray-400 cursor-not-allowed text-gray-200 font-light rounded-lg text-sm mb-10"
								: "bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg text-sm mb-10"
						}>
						Publish
					</button>
				)}
			</form>
		</div>
	);
}
