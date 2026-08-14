// 함수 컴포넌트

// 하나의 props 객체를 받아
// 인사말이 담긴 리액트 엘리먼트를 리턴합니다.
function Welcome(props) {
    return (
        <h1>
            안녕, {props.name}
        </h1>
    );
}

function App(props) {
    return (
        <div>
            <Welcome name = "Mike" />
            <Welcome name = "Steve" />
            <Welcome name = "Jane" />

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export {App};
