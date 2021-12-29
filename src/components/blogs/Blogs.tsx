import { useSelector } from "react-redux";
import { State } from "../../store/reducers/index";



const Blogs: React.FC = (): JSX.Element => {

    const blogs = useSelector((state: State) => state.blogs);

    console.log(blogs);


    return (
        <div className="">

            { 
                blogs &&
                <div className="">
                    {blogs.map(blog => {
                        return (
                            <p>{blog.title}</p>
                        );
                    })}
                </div>
            }
           
        </div>
    );
}

export default Blogs;