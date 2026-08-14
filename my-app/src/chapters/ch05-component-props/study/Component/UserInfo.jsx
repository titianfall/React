import Avatar from "./Avatar.jsx";

// Comment가 user라는 이름으로 넘겨주므로 여기서도 props.user로 받는다.
// 넘기는 쪽 이름과 받는 쪽 이름이 어긋나면 undefined가 된다.
function UserInfo(props) {
    return (
        <div className="user-info">
            <Avatar user={props.user}/>
            <div className="user-info-name">
                {props.user.name}
            </div>
        </div>
    );
}

export default UserInfo;
