import React, {Component} from 'react';
import IPAddress from './IPAddress';
import $ from "jquery";

class IPAddressWidget extends Component {
    constructor() {
        super();        
        this.fetchMyIP = this.fetchMyIP.bind(this);
    }

    state = {
        ip: '0.0.0.0',
    };

    componentDidMount() {
        this.fetchMyIP();
    }

    fetchMyIP() {
        $.getJSON("https://ipinfo.io/json")
        .done((data)=> this.setState({ip: data.ip}))
        .fail((xhr,status,err)=>console.log(status));
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