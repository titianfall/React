import React, {useState, useEffect} from 'react';

// 실제 백엔드가 없으므로 ServerAPI를 흉내 낸 목(mock) 객체.
// 2초마다 무작위로 온라인/오프라인 상태를 콜백으로 전달한다.
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

function UseEffectWillUnmount(props) {
    const [isOnline, setIsOnline] = useState(null);

    function handleStatusChange(status) {
        setIsOnline(status);
    }

    useEffect(() => {
        ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
        return () => {
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
        };
    });

    if(isOnline == null) {
        return "대기중..."
    }

    return isOnline ? "온라인" : "오프라인";
}

export default UseEffectWillUnmount;
