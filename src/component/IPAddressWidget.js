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

    fetchMyIP(attempt=0,maxAttempt=5) {
        attempt++;
        $.ajaxSetup({
            timeout: 3000,
            retryAfter: 3000, //1 sec
        });
        $.ajax({
            url: "https://ipinfo.io/json"
        }).done((data)=> this.setState({ip: data.ip}))
        .fail((xhr,status,err)=> {
            console.log(status, ": retrying in "+ $.ajaxSetup().retryAfter/1000 + ' seconds');
            if(attempt<maxAttempt) {
                setTimeout(this.fetchMyIP(attempt), $.ajaxSetup().retryAfter);
            }
        });
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