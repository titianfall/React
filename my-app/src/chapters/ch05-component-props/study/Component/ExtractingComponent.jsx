// 컴포넌트 추출(Extracting Components)
// 큰 컴포넌트에서 일부를 별도 컴포넌트로 떼어내면 재사용하기 쉬워진다.
// Comment -> UserInfo -> Avatar 순서로 두 번 추출한 결과다.

import UserInfo from "./UserInfo.jsx";

// props를 쓰지 않으므로 컴포넌트 밖에 둔다. 안에 두면 렌더링될 때마다 다시 만들어진다.
function formatDate(date) {
    return date.toLocaleDateString();
}

function Comment(props) {
    return (
        <div className = "comment">
            {/* 추출 전에는 user-info 부분이 Comment 안에 그대로 들어 있었다.
            <div className = "user-info">
                <img className = "avatar"
                     src = {props.author.avatarUrl}
                     alt = {props.author.name}
                />
                <div className = "user-info-name">
                    {props.author.name}
                </div>
            </div>
            */}

            {/* author를 user라는 이름으로 바꿔서 넘긴다.
                UserInfo와 Avatar는 "댓글 작성자"라는 맥락을 몰라야 다른 곳에서도 재사용할 수 있다. */}
            <UserInfo user = {props.author}/>

            <div className = "comment-text">
                {props.text}
            </div>

            <div className = "comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

// props는 위에서 아래로 전달된다. 실제 데이터를 만드는 것은 이렇게 최상위 컴포넌트의 몫이다.
const comment = {
    date: new Date(),
    text: '제 프로필 사진입니다.',
    author: {
        name: '소플',
        avatarUrl: 'https://placehold.co/64x64',
    },
};

function App() {
    return (
        <Comment
            author = {comment.author}
            text = {comment.text}
            date = {comment.date}
        />
    );
}

export default Comment;
export { App };
