import React, { useState } from 'react';

function Counter(props) {
    var count = 0;
    // const [변수명, set함수명] = useState(초깃값);
    // const [count, setCount] = useState(0);

    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick = {() => count++}>
                클릭
            </button>
        </div>
    );
}

export default Counter;
