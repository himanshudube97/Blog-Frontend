import {useState, useEffect} from "react";
import "./CreateBlog.css";
import axios from "axios";

function CreateBlog() {
    const [blogInfo, setBlogInfo] = useState({
        blogTitle: "",
        blogText: "",
        authorName: ""
    });

    const handleInputChange = (e)=>{
        const {name, value} = e.target;
        setBlogInfo((prev)=>{
            return {...prev, [name]: value}
        })
    };
    console.log(blogInfo, "bloginfo");

    const handleSubmit =async (e)=>{
        e.preventDefault();
        try {
            let req = {
                title: blogInfo.blogTitle,
                description: blogInfo.blogText,
                authorName: blogInfo.authorName
            }
            const response = await axios.post("http://localhost:8000/api/v1/newBlog", req );
            console.log(response, "response")
        } catch (error) {
            console.log(error)
            alert("error hai bhai")
        }
    }
    
    
  return (
    <div className="create-blog-container">
      <h3>Create A Blog</h3>
      <div className="create-blog-fields">
        <div className="group">
          <h3>Blog Title</h3>
          <input type="text" name="blogTitle" placeholder="blog title" onChange={handleInputChange} value={blogInfo.blogTitle} />
        </div>
        <div className="group">
          <h3>Blog Text</h3>
          <textarea className="textarea" name="blogText" onChange={handleInputChange} value={blogInfo.blogText}  />
        </div>
        <div className="group">
          <h3>Author Name</h3>
          <input type="text" name="authorName" onChange={handleInputChange} placeholder="author name" value={blogInfo.authorName} />
        </div>
        <button type="submit"  onClick={handleSubmit}>Submit Blog</button>
      </div>
    </div>
  );
}

export default CreateBlog;
