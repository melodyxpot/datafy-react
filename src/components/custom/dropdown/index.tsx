import React from "react";
import { DropdownBox, DropdownContainer, DropdownPicker } from "./style";
import { Icon } from "components/basic";

interface PropsType {
  initialLabel?: string
  label: string
  onClose?: any
  container?: any
  direct?: 'bottom' | 'top'
}

const DropDown: React.FC<PropsType> = ({ initialLabel, label, onClose, container, direct = "bottom", ...rest }) => {

    const [isDropdown, setIsDropdown] = React.useState<boolean>(false);
    const dropdownRef = React.useRef<any>(null);

    React.useEffect(() => {
        const windowClick = (e: any) => {
            if (!dropdownRef.current.contains(e.target)) {
                setIsDropdown(false);
            }
        }

        window.addEventListener("click", windowClick);

        return () => window.removeEventListener("click", windowClick);
    }, []);

    return (
        <DropdownContainer ref={dropdownRef} className="dropdown">
            <DropdownPicker className="dropdown-picker" onClick={() => setIsDropdown(!isDropdown)}>
                <span>
                    {label === undefined
                        ? (initialLabel !== undefined ? initialLabel : "Select the item")
                        : label}
                </span>
                <Icon icon={"ArrowDown"} />
            </DropdownPicker>
            {container !== undefined && (
                <DropdownBox direct={direct} style={isDropdown ? { display: "block" } : { display: "none"}}>
                    {container(() => setIsDropdown(false))}
                </DropdownBox>
            )}
        </DropdownContainer>
    )
}

export default DropDown;