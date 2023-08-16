import React from "react";
import { InputBoard, InputContainer, InputContent, InputError, InputLabel, InputWrapper, StyledInput, StyledTextarea } from "./style";

type InputPropsType = {
    label?: string | React.ReactNode
    value: string
    onChange?: any
    placeholder?: string
    helpSide?: any,
    name?: string,
    type: "email" | "text" | "password" | "file" | "color" | "checkbox" | "button" | "date" | "datetime-local" | "image" | "hidden" | "month" | "number" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "time" | "url" | "weel"
    error?: string
}

export const Input: React.FC<InputPropsType> = ({
    label,
    helpSide,
    error,
    ...rest
}) => {
    return (
        <InputContainer>
            {label && (<InputLabel>{label}</InputLabel>)}
            <InputContent>
                <InputWrapper>
                    <StyledInput {...rest} />
                    {helpSide}
                </InputWrapper>
                <InputBoard error={error} />
            </InputContent>
            {error && <InputError>{error}</InputError>}
        </InputContainer>
    )
}

type TextareaPropsType = InputPropsType & {}

export const Textarea: React.FC<TextareaPropsType> = ({
    label,
    helpSide,
    ...rest
}) => {
    return (
        <InputContainer>
            {label && (<InputLabel>{label}</InputLabel>)}
            <InputContent>
                <InputWrapper>
                    <StyledTextarea as="textarea" rows={5} {...rest} />
                    {helpSide}
                </InputWrapper>
                <InputBoard />
            </InputContent>
        </InputContainer>
    )
}
