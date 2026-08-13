// JSX
// const element = {
//     <h1 className="greeting">
//         Hello, world!
//     </h1>
// };

const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!',
  },
};

// 위가 변환된 결과 (JS)
// JSX의 꺾쇠 부분만 React.createElement 호출로 바뀐다.
const elementCompiled = React.createElement(
  'h1', // type 값으로 div, span 같은 값들
  { className: 'greeting' }, // props 특성들
  'Hello, world!' //
);

/*
React.crateElement{
    type,
    [props],
    [...children]
}
*/

const element2 = (
    <div>
        <h1>안녕하세요</h1>
        <h2>열심히 리액트를 공부해 봅시다!</h2>
    </div>
)
