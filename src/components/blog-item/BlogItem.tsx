import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { BlogState } from "../../store/interfaces/BlogState";
import { State } from "../../store/reducers/index";

const BlogItem: React.FC = (): JSX.Element => {

    const blogs = useSelector((state: State) => state.blogs);
    const [blog, setBlog] = useState<BlogState | undefined>()
    const { blogId } = useParams();

    
    useEffect(() => {
        setBlog(blogs.find(blog => blog.id === blogId));
    }, [])

    return (
        <div className="blog_item">
            {
                blog &&
                <>
                    <h2>{blog.title}</h2>
                    <p>{blog.content}</p>
                </>
            }
            
            <p>{blogId}</p>

        </div>
    );
}

export default BlogItem;