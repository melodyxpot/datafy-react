import React, { HTMLAttributes } from "react";
import { BadgeContainer } from "./style";

type BadgePropsType = HTMLAttributes<HTMLElement> & {
    children?: any
}

const Badge: React.FC<BadgePropsType> = ({
    children
}) => {
    return (
        <BadgeContainer>
            {children}
        </BadgeContainer>
    )
}

export default Badge;