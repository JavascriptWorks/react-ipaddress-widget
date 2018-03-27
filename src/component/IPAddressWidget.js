import React, {Component} from 'react';
import IPAddress from './IPAddress';

let xhr;
class IPAddressWidget extends Component {
    constructor() {
        super();        
        this.fetchMyIP = this.fetchMyIP.bind(this);
        this.processIPRequest = this.processIPRequest.bind(this);
        this.cleanupEventListeners = this.cleanupEventListeners.bind(this);
    }

    state = {
        ip: '0.0.0.0'
    };

    componentDidMount() {
        this.fetchMyIP();
    }

    componentWillMount() {
        this.cleanupEventListeners();
    }

    cleanupEventListeners() {
        if(typeof(xhr) != 'undefined') {
            xhr.removeEvevntListener("readystatechange", this.processIPRequest, false);
        }
    }

    fetchMyIP() {
        xhr = new XMLHttpRequest();
        xhr.open("GET", "https://ipinfo.io/json", true);
        xhr.send();
        xhr.addEventListener("readystatechange", this.processIPRequest, false);
    }

    processIPRequest() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            this.setState({
                ip: response.ip
            });
        }
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