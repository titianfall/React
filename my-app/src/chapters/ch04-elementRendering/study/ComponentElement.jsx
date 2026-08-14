// element type이 문자열이 아닌 경우
// React의 Component Element - type이 일반적인 자바스크립트 함수(컴포넌트)인 엘리먼트
/**
    React.createElement(
        [type],
        [props],
        [...children]
    )

    // ① <ConfirmDialog /> 가 만드는 엘리먼트
    //    type이 아직 함수 그 자체. 안이 펼쳐져 있지 않음
    {
        type: ConfirmDialog,
        props: {}
    }

    // ② React가 ConfirmDialog(props)를 호출한 결과 (return 문이 만드는 객체)
    {
        type: 'div',
        props: {
            children: [
                {
                    type: 'p',
                    props: {
                        children: '내용을 확인하셨으면 확인 버튼을 눌러주세요.'
                    }
                },
                {
                    type: ComponentElementButton,   // 이것도 아직 함수인 채로! (Component Element)
                    props: {
                        color: 'green',
                        children: '확인'
                    }
                }
            ]
        }
    }

    // ③ React가 ComponentElementButton({ color: 'green', children: '확인' })을 호출한 결과
    //    type이 전부 문자열이 될 때까지 이 과정을 반복하는 것이 렌더링
    {
        type: 'button',
        props: {
            className: 'bg-green',
            children: {
                type: 'b',
                props: {
                    children: '확인'
                }
            }
        }
    }
 */

// props는 부모쪽에서 넘겨서 props라는걸 받는다.
function ComponentElementButton(props) {
    return (
        <button className = {`bg-${props.color}`}>
            <b>
                {props.children}
            </b>
        </button>
    )
}

function ConfirmDialog(props) {
    return (
        <div>
            <p>내용을 확인하셨으면 확인 버튼을 눌러주세요.</p>
            <ComponentElementButton color = 'green'>확인</ComponentElementButton>
        </div>
    )

}

// export가 없으면 Vite가 이 파일을 컴포넌트 모듈로 인식하지 못해
// Fast Refresh 대신 페이지 전체 새로고침이 일어남
export { ComponentElementButton };

