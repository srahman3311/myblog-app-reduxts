import { ChangeEventHandler } from "react";

export interface InputProps {
    label?: string, // Not on all input fields we will need a label so define it as optional
    type?: string, // textarea input field doesn't have a type attribute so define it as optional
    name: string, 
    value: string,
    validationError: boolean,
    handleChange: ChangeEventHandler<Element>
}
