import { ChangeEventHandler, ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewBlog } from "../../store/action-creators/blogs";

// Interface
import { BlogInfoState } from "../../interfaces/BlogInfoState";
import { State } from "../../store/reducers/index";

// Component
import InputField from "../reuseable-components/InputField";
import TextAreaInputField from "../reuseable-components/TextAreaInputField";



const CreateBlog: React.FC = (): JSX.Element => {

    const dispatch = useDispatch();
    const blogs = useSelector((state: State) => state.blogs)

    const [blogInfo, setBlogInfo] = useState<BlogInfoState>({
        id: "1",
        title: "",
        content: ""
    });
    const [validationError, setValidationError] = useState(false);


    const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {

        const { name, value } = event.target;

        setBlogInfo(currentValue => {
            return {
                ...currentValue,
                [name]: value
            }
        });
    }




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
            <h2>Create Blog</h2>
            <InputField
                label = "Title" 
                type = "text" 
                name = "title" 
                value = {blogInfo.title} 
                validationError = {validationError}
                handleChange = {handleChange} 
            />
            <TextAreaInputField 
                label = "Content"
                name = "content"
                value = {blogInfo.content}
                validationError = {validationError}
                handleChange = {handleChange}
            />
            <button onClick={() => dispatch(addNewBlog(blogInfo))}>Add</button>

        </div>
    );
}

export default CreateBlog;