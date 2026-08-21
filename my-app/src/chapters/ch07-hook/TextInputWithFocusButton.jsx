import React, {useRef} from 'react';

function TextInputWithFocusButton(props) {
    const inputElemRef = useRef(null);

    const onButtonClick = () => {
        // `current`는 마운트된 input element를 가리킴
         inputElemRef.current.focus();
    };

    return (
        <div>
            <input type = "text" ref = {inputElemRef}/>
            <button onClick = { onButtonClick }>
                Focus the input
            </button>
        </div>
    );
}

export default TextInputWithFocusButton;
