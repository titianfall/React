import Comment from './Comment';

const comments = [
    {
        name: '박지호',
        comment: '안녕하세요, titanfall입니다.',
    },
    {
        name: '유재석',
        comment: '리액트 재미있어요~!',
    },
    {
        name: '강민경',
        comment: '저도 리액트 배워보고 싶어요!!',
    },
]


function CommentList(props) {
    return (
        <div>
            {/*<Comment name = {'박지호'} comment = {'안녕하세요, titanfall입니다.'}/>
            <Comment name = {'유재석'} comment = {'리액트 재미있어요~'}/>*/}
            {comments.map((comment) => {
                return (
                    <Comment
                        name = {props.name}
                        comment = {props.comment}
                    />
                );
            })}
        </div>
    );
}

export default CommentList;
