function Profile(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.introduction}</p>
            <p>조회수: {props.viewCount}</p>
        </div>
    )
}

export default Profile;
