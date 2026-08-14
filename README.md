# React 학습 저장소

《소플의 처음 만난 리액트》를 교재로 리액트를 공부하며 작성한 예제와 정리 노트를 모아둔 저장소입니다.
책의 흐름을 따라가되, 개념마다 [ko.react.dev](https://ko.react.dev) 공식 문서를 함께 읽고 최신 권장 방식으로 다시 써보는 것을 원칙으로 합니다.

## 학습 목표

- 리액트의 핵심 개념(JSX, 컴포넌트, Props, State, Hook)을 예제로 직접 구현해보기
- 책의 클래스 컴포넌트 예제를 함수 컴포넌트 + Hook 방식으로 바꿔보며 차이 이해하기
- 공식 문서를 1차 자료로 삼는 습관 들이기
- 마지막 장의 미니 프로젝트를 스스로 확장해 하나의 완성된 앱 만들기

## 참고 자료

| 자료 | 링크 | 용도 |
| --- | --- | --- |
| 소플의 처음 만난 리액트 | — | 주 교재, 진도 기준 |
| React 공식 문서 (한국어) | https://ko.react.dev | 개념 확인, 최신 권장 방식 |
| Learn React | https://ko.react.dev/learn | 튜토리얼 형식 학습 |
| API 레퍼런스 | https://ko.react.dev/reference/react | Hook·API 상세 스펙 |
| Thinking in React | https://ko.react.dev/learn/thinking-in-react | 컴포넌트 설계 사고법 |
| Vite 공식 문서 (한국어) | https://ko.vite.dev | 빌드 도구 설정·개발 서버 |
| Vite 공식 문서 (영문) | https://vite.dev | 최신 내용 확인 |
| Vite 시작하기 | https://ko.vite.dev/guide/ | 프로젝트 생성·기본 사용법 |
| Vite 설정 레퍼런스 | https://ko.vite.dev/config/ | `vite.config.js` 옵션 |
| @vitejs/plugin-react | https://github.com/vitejs/vite-plugin-react | React 플러그인·HMR |

## 개발 환경

책은 `create-react-app`(CRA) 기준으로 설명하지만, CRA는 현재 지원이 중단되어 공식 문서에서도 권장하지 않습니다.
이 저장소는 **Vite**로 환경을 구성하고, 책의 예제 코드는 그대로 옮겨 실습합니다.

```bash
npm create vite@latest . -- --template react
npm install
npm run dev
```

| 항목 | 버전 |
| --- | --- |
| Node.js | 20 LTS 이상 |
| React | 19.x |
| 빌드 도구 | Vite |

## 디렉터리 구조

장(chapter)마다 별도 프로젝트를 만들면 `node_modules`가 중복되므로, **하나의 Vite 앱 안에서 장별 폴더**로 나눕니다.

```
React/
├─ CLAUDE.md           # 저장소 작업 규칙 (커밋 · 노트 · 코드)
├─ README.md
├─ notes/
│  ├─ README.md        # 30초 요약 인덱스 (모든 장의 요약 모음)
│  └─ chXX.md          # 장별 정리 노트
└─ my-app/             # Vite + React 앱
   └─ src/
      ├─ App.jsx
      ├─ main.jsx
      └─ chapters/
         ├─ ch03/                    # JSX
         ├─ ch04-elementRendering/   # 엘리먼트 렌더링
         └─ ch05-component-props/    # 컴포넌트와 Props
```

각 장 폴더 안의 `study*/`에는 **책 예제를 그대로 따라 친 코드**를, 바깥에는 **실습 결과물**을 둡니다.
노트(`notes/chXX.md`)의 본문에서 해당 파일로 링크를 겁니다.

## 진도표

각 장을 마치면 체크하고, 대응하는 공식 문서를 함께 읽습니다.
장별 30초 요약은 [notes/README.md](notes/README.md)에 모여 있습니다.

| # | 장 | 노트 | 대응 공식 문서 | 완료 |
| --- | --- | --- | --- | :---: |
| 0 | 준비하기 | [ch00.md](notes/ch00.md) | [React 설치하기](https://ko.react.dev/learn/installation) | ☑ |
| 1 | 리액트 소개 | [ch01.md](notes/ch01.md) | [빠른 시작](https://ko.react.dev/learn) | ☑ |
| 2 | 리액트 시작하기 | [ch02.md](notes/ch02.md) | [React 프로젝트 시작하기](https://ko.react.dev/learn/start-a-new-react-project) | ☑ |
| 3 | JSX | [ch03.md](notes/ch03.md) | [JSX로 마크업 작성하기](https://ko.react.dev/learn/writing-markup-with-jsx) | ☑ |
| 4 | 엘리먼트 렌더링 | [ch04.md](notes/ch04.md) | [렌더링하고 커밋하기](https://ko.react.dev/learn/render-and-commit) | ☑ |
| 5 | 컴포넌트와 Props | [ch05.md](notes/ch05.md) | [컴포넌트에 props 전달하기](https://ko.react.dev/learn/passing-props-to-a-component) | ☐ |
| 6 | State와 생명주기 | — | [State: 컴포넌트의 기억 저장소](https://ko.react.dev/learn/state-a-components-memory) | ☐ |
| 7 | 훅 | — | [Hook 레퍼런스](https://ko.react.dev/reference/react/hooks) | ☐ |
| 8 | 이벤트 핸들링 | — | [이벤트에 응답하기](https://ko.react.dev/learn/responding-to-events) | ☐ |
| 9 | 조건부 렌더링 | — | [조건부 렌더링](https://ko.react.dev/learn/conditional-rendering) | ☐ |
| 10 | 리스트와 키 | — | [리스트 렌더링](https://ko.react.dev/learn/rendering-lists) | ☐ |
| 11 | 폼 | — | [state로 입력에 반응하기](https://ko.react.dev/learn/reacting-to-input-with-state) | ☐ |
| 12 | State 끌어올리기 | — | [컴포넌트 간 state 공유하기](https://ko.react.dev/learn/sharing-state-between-components) | ☐ |
| 13 | 합성 vs 상속 | — | [children으로 JSX 전달하기](https://ko.react.dev/learn/passing-props-to-a-component#passing-jsx-as-children) | ☐ |
| 14 | 컨텍스트 | — | [context로 데이터 깊게 전달하기](https://ko.react.dev/learn/passing-data-deeply-with-context) | ☐ |
| 15 | 스타일링 | — | [CSS 스타일 적용하기](https://ko.react.dev/reference/react-dom/components/common#applying-css-styles) | ☐ |
| 16 | 미니 프로젝트 | — | [React로 사고하기](https://ko.react.dev/learn/thinking-in-react) | ☐ |

> 0~2장은 책의 실제 목차를 확인해 반영했고, 3장부터는 일반적인 구성 기준입니다. 진도를 나가며 수정합니다.

## 학습 기록 규칙

- 장을 마칠 때마다 `notes/chXX.md`에 **배운 것 / 헷갈린 것 / 책과 공식 문서가 다른 점**을 남깁니다.
- 노트 맨 위에는 **⏱ 30초 요약**(5줄 이내)을 적고, 각 줄은 본문 해당 절로 링크합니다.
- 노트를 쓰거나 고치면 [notes/README.md](notes/README.md)의 요약 인덱스도 **같이 갱신**합니다.
- 노트 맨 아래에는 이전 / 다음 장 네비게이션을 둡니다.
- 책이 클래스 컴포넌트로 설명하는 부분(주로 6장 State와 생명주기)은 Hook 버전도 함께 작성해 비교합니다.

자세한 작업 규칙은 [CLAUDE.md](CLAUDE.md)에 정리되어 있습니다.

### 커밋 컨벤션

```
ch05: props 전달 예제 실습
ch07: useEffect 정리 노트 추가
docs: README 진도표 갱신
```

- 커밋 메시지에 `Co-Authored-By`나 생성 도구 태그를 붙이지 않습니다.
- README 갱신은 노트·코드 변경과 **별도 커밋**으로 분리합니다.

## 책과 최신 React의 차이 메모

공부하며 마주친 차이를 여기에 계속 추가합니다.

| 책의 설명 | 최신 React |
| --- | --- |
| `create-react-app`으로 프로젝트 생성 | 지원 중단. Vite 또는 Next.js 권장 |
| `ReactDOM.render()` | React 18부터 `createRoot()` |
| 클래스 컴포넌트 + 생명주기 메서드 | 함수 컴포넌트 + Hook 권장 |
| 전역 `React` · `ReactDOM` 사용 (CDN 스크립트 기준) | `import { createRoot } from 'react-dom/client'` |
| `React.createElement`를 쓰려면 `React` import 필요 | JSX만 쓴다면 `import React` 불필요 (React 17+ 새 JSX 변환) |
| 4장 `tick()`에서 **매초 `createRoot()` 호출** | `createRoot()`는 한 번만, `render()`만 반복 |
| 4장 시계 예제를 `setInterval` + 반복 `render()`로 구현 | `useState` + `useEffect`로 컴포넌트가 스스로 갱신 |
| 5장 `function Welcome(props)` → `props.name` | 구조 분해 `function Welcome({ name })`이 일반적 |
