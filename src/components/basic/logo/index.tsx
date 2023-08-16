import { LogoContainer } from "./style";
import LogoImg from "assets/images/avatar.png"

const Logo = () => {
    return (
        <LogoContainer to={""}>
            <img src={LogoImg} alt="Logo" />
        </LogoContainer>
    )
}

export default Logo;
