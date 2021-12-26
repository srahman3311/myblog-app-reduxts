import React from "react";
import { InputFieldProps } from "../../intefaces/InputFieldProps";


const InputField: React.FC<InputFieldProps> = ({ type, name, validationError }) => {

    console.log(validationError);

    return (
        <div className="input_field">
            <input
                type = {type}
                name = {name}
                // value = {value}
            />
        </div>
    );
}

export default InputField;