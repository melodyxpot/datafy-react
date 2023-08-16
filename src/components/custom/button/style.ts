import styled from "styled-components";
import { GV } from "../../../utils/style.util";

export type StyledButtonType = {
    bg?: string
    color?: string
    p?: string
    w?: string
    h?: string
    fsize?: string
    border?: string
    hideBg?: boolean,
    vAlign?: string,
    hAlign?: string
}

export const StyledButton = styled.button<StyledButtonType>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    border-radius: 5px;
    font-size: ${GV("font-size")};
    transition: all ease-in-out .1s;
    /* clipPath: polygon(100% 0, 100% 86%, 84% 100%, 0 100%, 0 0); */

    ${({ w }) => w ? `width: ${w};` : ``}
    ${({ h }) => `line-height: ${h ? h : '2rem'};`}
    ${({ h }) => `min-height: ${h ? h : '0rem'};`}
    ${({ p }) => `padding: ${p ?? '0 2rem'};`}
    ${({ color }) => color ? `color: ${color};` : ``}
    ${({ fsize }) => fsize ? `font-size: ${fsize};` : ``}
    ${({ border }) => border ? `border: 1px solid ${border};` : ``}
    ${({ bg }) => bg ? `background: ${bg};` : ``}
    ${({ vAlign }) => vAlign ? `align-items: ${vAlign};` : ``}
    ${({ hAlign }) => hAlign ? `jutify-content: ${hAlign};` : ``}

    background-size: 100% 100%;
    background-position: center;

    &:after {
        position: absolute;
        top: 0.5rem;
        left: 0.5rem;
        width: calc(100% - 1rem);
        height: calc(100% - 1rem);
        z-index: -1;
        content: "";

        ${({ hideBg }) => !hideBg ? `
            background-size: 100% 100%;
            background-position: center;
        ` : ``}
    }
`
