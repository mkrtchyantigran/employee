import './app-info.css'
import '../repeating-css/repeating-css.css'
import { Component } from 'react';

export default class AppInfo extends Component  {

    render() {
        
        return (
            <div className="App-Info repeating-block-box">
                <h1>Data Agency LTD</h1>
                <h2>Employees Count: 0</h2>
                <h2>People who will recived a reward: 0</h2>
            </div>
        );
    };
};