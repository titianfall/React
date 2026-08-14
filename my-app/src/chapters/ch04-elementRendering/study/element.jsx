/**
 * JSX는 React.createElement('h1', null, 'Hello, World') 호출로 변환되고,
 * 그 반환값(React 엘리먼트)은 아래 형태의 평범한 객체다.
 * {
 *      $$typeof: Symbol(react.element),  // "React 엘리먼트임"을 표시하는 내부 필드
 *      type: 'h1',
 *      key: null,
 *      ref: null,
 *      props: {
 *          children: 'Hello, World'      // 자식은 props.children 안에 들어간다
 *      }
 *  }
 * @return ReactElement
 */
// immutable: 한번 생성되면 변경될 수 없습니다.
const element = <h1>Hello, World</h1>

