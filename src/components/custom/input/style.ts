import styled from "styled-components";
import { GV } from "../../../utils/style.util";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const InputLabel = styled.span`
    font-size: 0.8rem;
    font-weight: 500;
    text-transform: capitalize;
    margin-bottom: 0.5rem;
    line-height: normal;
`

export const InputContent = styled.div`
    position: relative;
`

export const InputWrapper = styled.label`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.2rem;
    line-height: 3.5rem;
    min-height: 3rem;
    cursor: text;
    z-index: 1;
`

export const InputBoard = styled.div<{error?: string}>`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    width: 100%;
    height: 100%;
    background: ${GV('input-bg')};
    border-radius: 0.5rem;
    border: 1px solid #DADADA;
    border-color: ${({ error }) => error ? "red" : "#DADADA" };
`

export const StyledInput = styled.input`
    flex: 1;
    display: block;
    min-width: 0;
    padding: 0;
    background: none;
    border: none;
    outline: none;
    font-size: 1rem;

    &::placeholder {
        color: #808080;
    }
`

export const StyledTextarea = styled(StyledInput)`
`

export const InputError = styled.span`
  margin-top: 3px;
  color: red;
`;
