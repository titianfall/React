import React from "react";

function BookJS(props) {
    return React.createElement(
        'div',
        null,
        [
            React.createElement(
                'h1',
                null,
                `이 책의 이름은 ${props.name}입니다.`
            ),
            React.createElement(
                'h2',
                null,
                `이 책은 총 ${props.numOfPages}페이지로 이뤄져 있습니다.`
            )
        ]
    )
}

export default BookJS; // 파일당 한개 사용 가능
