import React, {useState, useEffect} from 'react';

const ServerAPI = {
    _timers: {},
    subscribeUserStatus(userId, callback) {
        console.log(`[ServerAPI] ${userId} 구독 시작`);
        this._timers[userId] = setInterval(() => {
            callback(Math.random() > 0.5);
        }, 2000);
    },
    unsubscribeUserStatus(userId, callback) {
        console.log(`[ServerAPI] ${userId} 구독 해제`);
        clearInterval(this._timers[userId]);
        delete this._timers[userId];
    },
};

function UserStatusWithCounter(props) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `총 ${count}번 클릭했습니다.`;
    })

    const [isOnline, setIsOnline] = useState(false);
    function handleStatusChange(status) {
        setIsOnline(status);
    }
    useEffect(() => {
        ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
        return () => {
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
        }
    });

    if(isOnline == null) {
        return "대기중"
    }

    return isOnline ? "온라인" : "오프라인";
}

export default UserStatusWithCounter;
