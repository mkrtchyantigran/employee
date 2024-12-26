import { Component } from 'react'
import './app-filter.css'

export default class AppFilter extends Component {
    render () {

        return (
            <div className="app-filter ">
                <button>All Employees</button>
                <button>Promotion</button>
                <button>Salary &gt; 1000$</button>
            </div>
        )
    }
}