import {useEffect, useState} from 'react';
import useCounter from './UseCounter.jsx';

const MAX_CAPACITY = 10;

/**
 * useCounter()훅을 사용하는 함수 컴포넌트
 * @param props
 * @constructor
 */
function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    // dependency Array가 없는 useEffect << 컴포넌트 업데이트시
    // ComponentMount()직후 실행
    useEffect(() => {
        console.log("==============START================");
        console.log("useEffect is Called", useEffect);
        console.log(`isFull: ${isFull}`);
    });

    // dependency Array가 존재하는 useEffect << count 값이 변경되었을 경우
    // ComponentMount() 직후 실행 및 count 값을 isFull이라는 state에 저장합니다.
    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return (
        <div style = {{ padding: 16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button
                onClick = {increaseCount}
                disabled = {isFull}>
                입장
            </button>
            <button
                onClick = {decreaseCount}>
                퇴장
            </button>
            {isFull && <p style = { {color: 'red'} }>정원이 가득 찼습니다.</p>}
        </div>
    );
}

export default Accommodate;
