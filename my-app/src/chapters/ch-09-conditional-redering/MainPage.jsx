import {useState} from "react";
import WarningBanner from "./WarningBanner.jsx";

function MainPage(props) {
    const [showWarning, setShowWarning] = useState(false);

    const handleToggleClick = () => {
        setShowWarning(prevShowwarning => !prevShowwarning);
    }

    return (
        <div>
        <WarningBanner warning={showWarning} />
            <button onClick = {handleToggleClick}>
                {showWarning ? "감추기" : "보이기"}
            </button>
        </div>
    );
}

export default MainPage;
