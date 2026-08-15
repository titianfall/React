import React from 'react';
import Notification from './Notification.jsx';

const reservedNotifications = [
    {
        id: 1,
        message: '안녕하세요, 오늘` 일정을 알려드립니다.',
    },
    {
        id: 2,
        message: '점심 식사 시간입니다.',
    },
    {
        id: 3,
        message: '이제 곧 미팅이 시작됩니다.',
    }
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: [],
        };
    }

    // 컴포넌트 업데이트 과정
    componentDidMount() {
        // 1. notifications: [] 를 받아옴
        const { notifications } = this.state;
        // 2. 1000ms 마다 실행
        timer = setInterval(() => {
            // 잔여 message 검사
            if(notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                //
                notifications.push(reservedNotifications[index]);

                // 상태 변경 - rendering
                this.setState({
                    notifications: notifications,
                });
            } else {
                // 반복 실행 해제
                clearInterval(timer);
            }
        }, 1000);
    }

    // 컴포넌트가 사라지는 과정
    componentWillUnmount() {
        if (timer) {
            clearInterval(timer);
        }
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return <Notification
                                key = {notification.id}
                                id = {notification.id}
                                message = {notification.message}
                    />;
                })}
            </div>
        );
    }
}

export default NotificationList;

