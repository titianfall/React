/*{
    type: 'button',
    props: {
        className: 'bg-green',
        children: {
            type:'b',
            props: {
                children: 'Hello, element!'
            }
        }
    }
};*/

// type에 HTML 태그가 들어갈 경우 엘리먼트는 해당 태그 이름을 가진 DOM Node가 됩니다.
// 실제로 렌더링 되는 DOM Node
const myButton = <button className='bg-green'>
    <b>
        Hello, element!
    </b>
</button>
