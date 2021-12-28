import { ChangeEventHandler, ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addNewBlog } from "../../store/action-creators/blogs";

// Interface
import { BlogInfoState } from "../../interfaces/BlogInfoState";

// Component
import InputField from "../reuseable-components/InputField";
import TextAreaInputField from "../reuseable-components/TextAreaInputField";



const CreateBlog: React.FC = (): JSX.Element => {

    const dispatch = useDispatch();

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