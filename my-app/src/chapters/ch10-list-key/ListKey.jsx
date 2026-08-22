const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => {
    return <li key = {number.toString()}>
        {number}
    </li>
});

const todos = [
    { id: 1, text: "jpa" },
    { id: 2, text: "project" },
    { id: 3, text: "react" },
    { id: 4, text: "java" },
    { id: 5, text: "algorithm" },
];
const todoItems = todos.map((todo) => {
    return <li key = {todo.id}>
        {todo.text}
    </li>
});

const todoItems2 = todos.map((todo, index) => {
    return <li key = {index}>
        {todo.text}
    </li>
});

