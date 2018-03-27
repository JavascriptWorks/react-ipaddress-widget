import React, {Component} from 'react';

class IPAddress extends Component {
    render() {
        return (
            <div>{this.props.ip}</div>
        );
    }
}

export default IPAddress;