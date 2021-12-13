import React from 'react';
import ReactDOM  from 'react-dom';

const yellow = '#FFD712';
const red = '#FF0000';

class MyElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: 'red' };
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor() {
        this.setState({ color: this.state.color === 'red' ? 'yellow' : 'red' });
    }
    render() {
        const 
        return(
        <div>
            <button onClick={this.changeColor}>Change me</button>
        </div>
        );
    }
};

    export default MyElement;