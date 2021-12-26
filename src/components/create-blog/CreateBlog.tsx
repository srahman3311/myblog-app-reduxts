import { ChangeEventHandler, ChangeEvent, useState } from "react";

// Interface
import { BlogInfoState } from "../../intefaces/BlogInfoState";

// Component
import InputField from "../reuseable-components/InputField";
import TextAreaInputField from "../reuseable-components/TextAreaInputField";



const CreateBlog: React.FC = (): JSX.Element => {

    const [blogInfo, setBlogInfo] = useState<BlogInfoState>({
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




    console.log(blogInfo);

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
        </div>
    );
}

export default CreateBlog;