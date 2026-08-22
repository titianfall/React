import {useState, useEffect} from 'react'
import {LoginButton} from "./LoginButton.jsx";
import Greeting from "./Greeting.jsx";
function LoginControlIfElse(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }
    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    return (
        <div>
            <Greeting isLoggedIn = {isLoggedIn} />
            {isLoggedIn ?
            <LoginButton onClick = {handleLogoutClick} /> :
                <LoginButton onClick = {handleLoginClick} />
            }
        </div>
    )
}

export default LoginControlIfElse;
