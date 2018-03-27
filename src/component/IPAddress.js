import React, {Component} from 'react';
// import '../css/ipaddress-widget.css';

class IPAddress extends Component {
    render() {
        return (
            <div className="ip-address-display">
                {this.props.ip}
            </div>
        );
    }
}

export default IPAddress;