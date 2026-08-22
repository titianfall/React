function NumberList(props) {
    const { numbers } = props;

    const listItems = numbers.map((number) => {<li>{number}</li>});

    return (
        <ul>{listItems}</ul>
    );
}

const numbers = [1, 2, 3, 4, 5];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<NumberList numbers={numbers} />);
