import React, {useState, useEffect} from 'react'

function UseEffect(props) {
    const [count, setCount] = useState(0);

    // useEffect(effect function, an Array of dependencies): 첫 컴포넌트 렌더링 or 업데이트로 인한 재 렌더링
    // an Array of dependencies: 배열 안에 있는 변수 중에 하나라도 값이 변경되었을 때 이펙트 함수가 실행됩니다.
    // ComponentDidMount, ComponentDidUpdate와 비슷하게 작동

    // 의존성 배열에 빈 배열([])이 삽입: Mount, Unmount시 단 한 번씩만 실행됩니다.
    // props의 어떤 값에도 의존하지 않게되어 여러 번 실행되지 않습니다.

    /**
     * 의존성 배열이 생략된 경우
     * Component가 업데이트 될 때마다 호출됩니다.
     */
    useEffect(() => {
        // 브라우저 API를 사용해서 document의 title을 업데이트
        document.title = `총 ${count}번 클릭했습니다.`;
    });

    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick = {() => setCount(count + 1)}>
                클릭
            </button>
        </div>
    );
}

export default UseEffect;
