// LikeButton: React Class Component
/**
 * @state {liked: false}
 */
class LikeButton extends React.Component {
    // Class Component는 constructor(생성자)가 있습니다.
    constructor(props) {
        super(props);
        // state는 하나의 javascript Object 입니다.
        // Class Component는 생성자에서 state를 선언합니다.
        this.state = {
            liked: false,
        };
    };
}

// state를 직접 수정 (잘못된 사용법) >> React가 수정된 것을 제대로 인지하지 못할 수 있습니다.
// 결론적으로 state는 직접적인 변경이 불가능하다 라고 생각하는 것이 좋습니다.
this.state = {
    liked: "Inje"
};

// setState함수를 통한 수정 (정상적인 사용법)
this.setState({
    liked: "Inje"
});
