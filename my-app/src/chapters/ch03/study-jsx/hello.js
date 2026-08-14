// 실제 Javascript로 변환되는 내용
class Hello extends React.Component {
    render() {
        return React.createElement("div", null, "Hello ${this.props.toWhat}");
    }
}

const root = ReactDOM.craeteElemnt(document.getElementById("root"));
root.render(React.createElement(Hello, { toWhat: "World"}, null));