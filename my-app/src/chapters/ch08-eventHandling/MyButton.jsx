// bind 문법이 번거로울 경우 사용가능

class MyButton extends React.Component {
    handleClick = () => {
        console.log("this is: ", this);
    }

    render() {
        return (
            <button onClick={ this.handleClick}>
                클릭
            </button>
        )
    }
}

class MyButton2 extends React.Component {
    handleClick() {
        console.log("this is: ", this);
    }

    render() {
        return (
            <button onClick = {() => {this.handleClick()}}>
                클릭
            </button>
        )
    }
}
