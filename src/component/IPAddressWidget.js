import React, {Component} from 'react';
import IPAddress from './IPAddress';
import $ from "jquery";

let xhr;
class IPAddressWidget extends Component {
    constructor() {
        super();        
        this.fetchMyIP = this.fetchMyIP.bind(this);
    }

    state = {
        ip: '0.0.0.0'
    };

    componentDidMount() {
        this.fetchMyIP();
    }

    fetchMyIP() {
        $.getJSON( "https://ipinfo.io/json", 
                    (data)=>this.setState({ip: data.ip})
                );
    }

    render() {
        return (
            <div>
                <IPAddress ip={this.state.ip}/>
            </div>
        );
    }
}

export default IPAddressWidget;