// JSX 안에서 중괄호로 자바스크립트 값을 끼워 넣는다.
function Name() {
    const name = '소플';
    const element = <h1>안녕, {name}</h1>;

    return element;
}

export default Name;

// 책 원문은 CDN 전역 ReactDOM으로 직접 렌더한다.
// Vite에서는 ReactDOM이 전역에 없으므로 main.jsx 쪽에서 렌더한다.
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);
