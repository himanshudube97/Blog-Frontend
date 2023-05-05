import { getAllBlogs } from "../../actions/blogAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import BlogCards from "../BlogCard/BlogCard";


export default function Home() {
  const dispatch = useDispatch();

  const { loading, error, blogs } = useSelector((state) => {
    return state.blogs;
  });

  useEffect(() => {
    if(error){
        console.log(error)
    }
    dispatch(getAllBlogs());
  }, [dispatch]);

  return (
    <>
      {blogs[0]?.data?.map((item) => {
        return <BlogCards blog={item}/>;
      })}
    </>
  );
}
