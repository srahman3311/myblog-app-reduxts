import React from "react";

// Component
import InputField from "../reuseable-components/InputField";



const CreateBlog: React.FC = (): JSX.Element => {

    return (
        <div className="">
            <h2>Create Blog</h2>
            <InputField 
                type = "text" 
                name = "abc" 
                value = "abc" 
                validationError = {true} 
            />
        </div>
    );
}

export default CreateBlog;