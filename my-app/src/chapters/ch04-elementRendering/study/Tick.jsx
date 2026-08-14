/**
 * 현재 시간을 포함하고 있는 엘리먼트를 생성하여 root div에 렌더링하는 역할
 * Tick() 함수를 호출하여 기존 엘리먼트 변경 대신 새로운 엘리먼트를 생성해서 바꿔치기합니다.
 */
function Tick() {
    const element = (
        <div>
            <h1>안녕, 리액트!</h1>
            <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
        </div>
    );

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(element);
}

setInterval(Tick, 1000);

export { Tick };

/**
 * Tick()이 매초 새로 만드는 React 엘리먼트 (Virtual DOM 객체)
 * {
 *     type: 'div',
 *     props: {
 *         children: [
 *             {
 *                 type: 'h1',
 *                 props: {
 *                     children: '안녕, 리액트!'
 *                 }
 *             },
 *             {
 *                 type: 'h2',
 *                 props: {
 *                     // JSX에서 텍스트와 {표현식}이 섞이면 children은 배열이 된다
 *                     children: ['현재 시간: ', '10:23:45']  // ← 두 번째 값은 렌더링 시점의 시각
 *                 }
 *             }
 *         ]
 *     }
 * }
 * React DOM은 새 엘리먼트를 이전 엘리먼트와 비교해서
 * 실제로 바뀐 부분(h2의 시간 텍스트)만 실제 DOM에 반영한다.
 */
