import styled from "styled-components";

export interface IconWrapperType {
    $width?: number
    $height?: number
    $color?: string
}

export const IconWrapper = styled.div<IconWrapperType>`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    ${({ $width }) => $width ? `width: ${$width}px;` : ``}
    ${({ $height }) => $height ? `height: ${$height}px;` : ``}
    ${({ $color }) => $color ? `color: ${$color};` : ``}
`