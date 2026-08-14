// pure 함수
function sum(a, b) {
    return a + b;
}

let account = {
    total: 100000,
}
// impure 함수: 인자로 받은 account를 직접 변경 (side effect)
function withdraw(account, amount) {
    return account.total -= amount;
}

import Profile from './Profile.jsx';
function App(props) {
    return (
        <Profile
            name = "소플"
            introduction = "안녕하세요, 소플입니다."
            viewCount = {15000} // 문자열 이외 정수, 변수 다른 컴포넌트시에 {}
        />
    );
}

import Layout from "./Layout.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
function App2(props) {
    return (
        <Layout
            width = {2560}
            height = {1440}
            header = {
                <Header title = "소플의 블로그입니다." />
            }
            footer = {
                <Footer />
            }
        />
    );
}
// export default App;
export{ App, App2 };

/**
 * <App2 /> 가 실제 DOM이 되기까지 만들어지는 React 엘리먼트
 *
 * ① <App2 /> 가 만드는 엘리먼트 — type이 아직 함수 그 자체
 * {
 *     type: App2,
 *     props: {}
 * }
 *
 * ② React가 App2()를 호출한 결과
 *    header / footer에 넘긴 JSX는 넘기기 "전에" 이미 엘리먼트 객체로 만들어져 props에 담긴다.
 *    엘리먼트도 결국 객체이므로 얼마든지 prop으로 전달할 수 있다. (컴포넌트 합성)
 * {
 *     type: Layout,
 *     props: {
 *         width: 2560,
 *         height: 1440,
 *         header: {
 *             type: Header,
 *             props: { title: '소플의 블로그입니다.' }
 *         },
 *         footer: {
 *             type: Footer,
 *             props: {}
 *         }
 *         // children 없음: <Layout ... /> 로 닫아서 태그 사이에 넣은 내용이 없다
 *     }
 * }
 *
 * ③ React가 Layout(props)를 호출한 결과
 *    props.header / props.footer로 받은 엘리먼트가 children 자리에 그대로 꽂힌다
 * {
 *     type: 'div',
 *     props: {
 *         style: { width: 2560, height: 1440 },
 *         children: [
 *             {
 *                 type: 'header',
 *                 props: {
 *                     children: { type: Header, props: { title: '소플의 블로그입니다.' } }
 *                 }
 *             },
 *             {
 *                 type: 'main',
 *                 props: { children: undefined }   // props.children이 없으므로 빈 채로 렌더링된다
 *             },
 *             {
 *                 type: 'footer',
 *                 props: {
 *                     children: { type: Footer, props: {} }
 *                 }
 *             }
 *         ]
 *     }
 * }
 *
 * ④ 아직 함수인 채로 남아 있던 Header / Footer를 호출한 결과
 *    type이 전부 문자열이 될 때까지 반복하면 렌더링이 끝난다
 * {
 *     type: 'div',
 *     props: {
 *         children: {
 *             type: 'p',
 *             props: {
 *                 // 텍스트와 {표현식}이 섞이면 children은 배열
 *                 children: ['제목: ', '소플의 블로그입니다.']
 *             }
 *         }
 *     }
 * }
 * {
 *     type: 'div',
 *     props: {
 *         children: {
 *             type: 'p',
 *             props: { children: '안녕하가세요' }
 *         }
 *     }
 * }
 */
