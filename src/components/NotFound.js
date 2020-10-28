import React, { Component } from 'react';
import logo from '../404.jpg';

class NotFound extends Component {

    render() {
        return (
            <div>
                <center>
                    <h1>ERROR 404 - PAGE NOT FOUND</h1>
                    <img src={logo}/>
                </center>
            </div>
        );
    }
}

export default NotFound;