import {useState, useEffect} from 'react';

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

function useUserStatus(userId) {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        function handleUserStatus(status) {
            setIsOnline(status);
        }

        ServerAPI.subscribeUserStatus(userId, handleUserStatus);
        return () => {
            ServerAPI.unsubscribeUserStatus(userId, handleUserStatus);
        };
    });

    return isOnline;
}

export default useUserStatus;
