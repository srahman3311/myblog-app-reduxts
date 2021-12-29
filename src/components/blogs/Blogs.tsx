import { useSelector } from "react-redux";
import { State } from "../../store/reducers/index";
import { Link } from "react-router-dom";

import styles from "../../styles/Blogs.module.css";


const Blogs: React.FC = (): JSX.Element => {

    
    const blogs = useSelector((state: State) => state.blogs);



    return (
        <div className={styles.blog_list}>
            { 
                blogs &&
                <div className="">
                    {blogs.map(blog => {
                        return (
                            <div className={styles.blog} key = {blog.id}>
                                <h2>{blog.title}</h2>
                                <p>{blog.content.substring(0, 100)}.........</p>
                                <Link to = {`/blogs/blog/${blog.id}`}>Read more</Link>
                            </div>
                        );
                    })}
                </div>
            }
           
        </div>
    );
}

export default Blogs;