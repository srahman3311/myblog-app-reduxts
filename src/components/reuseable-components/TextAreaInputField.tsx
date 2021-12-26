import React from "react";
import { InputProps } from "../../intefaces/InputProps";


// Stylesheet
import styles from "./InputField.module.css";

// Components
import Label from "./Label";


const TextAreaInputField: React.FC<InputProps> = (
    { label, name, value, validationError, handleChange }
): JSX.Element => {

    return (
        <div className={styles.input_field}>
            {label && <Label label = {label} />}
            <textarea
                rows = {20}
                name = {name}
                value = {value}
                onChange = {handleChange}
                
            />
        </div>
    );
}

export default TextAreaInputField;