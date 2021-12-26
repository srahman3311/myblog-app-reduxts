import React from "react";

// Stylesheet
import styles from "./InputField.module.css";


const Label: React.FC<{ label: string }>  = ({ label }): JSX.Element => {
    return (
        <label className = {styles.label}>{label}</label>
    );
}


export default Label;