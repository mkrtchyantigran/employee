import { Component } from 'react'
import './app-filter.css'



export default class AppFilter extends Component {

    render () {
        const { filter, onFilterSelect } = this.props;

        const btnsData = [
            {name: "all", label: "All Emloyess"},
            {name: "rise", label: "Rise"},
            {name: "salary", label: "Salary"},
        ];
        
        const btns = btnsData.map(({ name, label }) => {
            const active = filter === name;
            return (
                <button 
                 key={name}
                 type='button'
                 className={active ? "active_btn" : null}
                 onClick={() => onFilterSelect(name)}
                >
                    {label}
                </button>
            )
        });

        return (
            <div className="app-filter">
                {btns}
            </div>
        );
    }
}