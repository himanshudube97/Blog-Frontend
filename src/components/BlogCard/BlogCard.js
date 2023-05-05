export default function BlogCards({ blog }) {
    console.log(blog, "props");
    return (
      <>
        <div className="card-div">
          <h1>Blog Title: {blog.title}</h1>
          <h2>Written By : {blog.authorName}</h2>
        </div>
      </>
    );
  }