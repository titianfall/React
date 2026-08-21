import {useState, useEffect} from 'react';

function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    // 콜백 함수
    function onConfirm(isConfirm) {
        setIsConfirmed(!isConfirm);
    }

    useEffect(() => {
        console.log("Confirm clicked");
    });

    return (
        <button onClick={() => onConfirm(isConfirmed)}>
            {isConfirmed ? 'Yes' : 'No'}
        </button>
    )
}

function ConfirmButtonGroup() {
    return (
        <div>
            <ConfirmButton />
            <ConfirmButton />
        </div>
    );
}

export default ConfirmButtonGroup;
