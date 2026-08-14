// 엘리먼트 렌더링하기

// id = root 인 div 태그
// 단 하나
// root DOM node: 리액트 엘리먼트들이 렌더링됩니다.(React DOM에 의한 관리대상)
// let div = <div id = "root" />;

/** root <div>에 리액트 엘리먼트를 렌더링 하는 과정
 * 1. 엘리먼트 하나 생성(element)
 * 2. 생성된 엘리먼트를 root div에 렌더링 합니다.
 *   렌더링을 위해 createRoot() 함수를 사용하여 만든 root의 render() 함수를 사용합니다.
 *   render(): 파라미터로 받은 리액트 엘리먼트(element)를 root DOM node에 렌더링 하는 역할을 합니다.
 *   단, Virtual DOM(React Element) != Browser DOM(DOM Element)임을 상기하십시오
 *
 *  리액트 엘리먼트가 렌더링되는 과정은 객체를 읽고 실제 DOM을 새로 생성하는 과정입니다.
 */
const element = <h1>안녕, 리액트!</h1>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
