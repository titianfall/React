import React from 'react';
import {useState} from 'react';

/**
 * Class Component
 * @State isToggleOn
 *
 */
class Toggle extends React.Component {
    // 생성자 안에 state 정의
    constructor(props) {
        super(props);

        this.state = { isToggleOn: true };

        // callback에서 `this`를 사용하기 위해서는 바인딩을 필수적으로 해 줘야 함
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick = {this.handleClick}>
                {this.state.isToggleOn ? "켜짐" : "꺼짐"}
            </button>
        );
    }
}

function Toggle2(props) {
    const [isToggleOn, setIsToggleOn] = useState(true);

    // 방법1. 함수 안에 함수로 정의
    function handleClick2() {
        setIsToggleOn(!isToggleOn);
    }

    // 방법2. arrow function을 을 사용하여 정의
    const handleClick3 = () => {
        setIsToggleOn((isToggleon) => !isToggleOn);
    };

    return (
        <button onClick={handleClick3}>
            {isToggleOn ? "켜짐" : "꺼짐"}
        </button>
    );
}

export default Toggle2;
