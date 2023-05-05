import { Link } from "react-router-dom";
import "./BlogCard.css";

export default function BlogCards({ blog }) {
  console.log(blog, "props");

  return (
    <>
      <Link to={`/getSingleBlog/${blog._id}`} style={{ textDecoration: "none" }}>
        <div className="card-div">
          <div className="img-div">
            <img src="" alt="image" />
          </div>
          <div className="blog-info-div">
            <h1>Blog Title: {blog.title}</h1>
            <h2>Written By : {blog.authorName}</h2>
          </div>
        </div>
      </Link>
    </>
  );
}
