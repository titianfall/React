import { useState } from 'react';
import { LogoutButton, LoginButton } from "./LoginButton.jsx";
import Greeting from "./Greeting.jsx";

function LoginControl(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleLogoutClick() {
        setIsLoggedIn(false);
    }
    function handleLoginClick() {
        setIsLoggedIn(true);
    }

    let button;
    if(isLoggedIn) {
        button = <LogoutButton onClick = {handleLogoutClick} />
    } else {
        button = <LoginButton onClick = {handleLoginClick} />
    }
    return (
        <div>
            <Greeting isLoggedIn = {isLoggedIn} />
            {button}
        </div>
    );
}

export default LoginControl;
