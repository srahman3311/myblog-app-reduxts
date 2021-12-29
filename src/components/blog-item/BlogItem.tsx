import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteBlog } from "../../store/action-creators/blogs";
import { State } from "../../store/reducers/index";
import styles from "../../styles/Blogs.module.css";

const BlogItem: React.FC = (): JSX.Element => {

    const { blogId } = useParams();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const blogs = useSelector((state: State) => state.blogs);
    const blog = blogs.find(blog => blog.id === blogId);

    const removeBlog = () => {

        if(blog) dispatch(deleteBlog(blog.id));

        alert("deleted successfully");
        
        navigate("/blogs");
    }

    return (
        <div className={styles.blog_item}>
            {
                blog &&
                <>
                    <h2>{blog.title}</h2>
                    <p>{blog.content}</p>
                    <button onClick={removeBlog}>Delete</button>

                </>
            }

        </div>
    );
}

export default BlogItem;