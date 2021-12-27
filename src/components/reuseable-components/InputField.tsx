import React from "react";
import { InputProps } from "../../interfaces/InputProps";

// Stylesheet
import styles from "./InputField.module.css";

// Components
import Label from "./Label";


const InputField: React.FC<InputProps> = ({ label, type, name, value, validationError, handleChange }) => {


    return (
        <div className={styles.input_field}>
            {label && <Label label = {label} />}
            <input
                type = {type}
                name = {name}
                value = {value}
                onChange = {handleChange}
            />
        </div>
    );
}

export default InputField;