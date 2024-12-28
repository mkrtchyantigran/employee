import './app-info.css'
import '../repeating-css/repeating-css.css'
import { Component } from 'react';

export default class AppInfo extends Component  {

    render() {

        const {employees, increased} = this.props;

        return (
            <div className="App-Info repeating-block-box">
                <h1>Data Agency LTD</h1>
                <h2>Employees Count: {employees}</h2>
                <h2>People who will recived a reward: {increased}</h2>
            </div>
        );
    };
};