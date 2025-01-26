import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

// context
import { useDarkMode } from "../../contexts/DarkModeContext";

// ui
import ButtonIcon from "../global/ButtonIcon";

function DarkModeToggle() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <>
            <ButtonIcon
                onClick={() => {
                    toggleDarkMode();
                }}
            >
                {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
            </ButtonIcon>
        </>
    );
}

export default DarkModeToggle;
