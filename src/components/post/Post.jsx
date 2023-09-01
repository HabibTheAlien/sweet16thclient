import "./post.css";
// import { format } from "timeago.js";
import { Link } from "react-router-dom";
import postImg from "../../assets/postImage.jpeg";

export default function Post({ item }) {
	let Img = postImg;
	if (item.photo) {
		Img = item.photo;
	} else {
		Img = postImg;
	}
	return (
		<div className="post">
			<Link to={`/post/${item._id}`} className="link">
				<img className="postImg" src={Img} alt="" />
				<div className="postInfo">
					<span className="postTitle">{item.title}</span>
					<hr />
					<span className="postDate">
						{new Date(item.createdAt).toDateString()}
					</span>
				</div>
				<p className="postDesc">{item.desc}</p>
			</Link>
		</div>
	);
}
