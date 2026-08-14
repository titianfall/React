// React 문법으로 작성하는 JSX 코드
import { Component } from 'react';

class Hello extends Component {
  render() {
    return <div> Hello {this.props.toWhat} </div>;
  }
}

export default Hello;
// const root = ReactDOM.craeteRoot(document.getElementById('root'));
// root.render(<Hello toWhat="World" />);
