import { Component } from "react";
import AppEmployeeItem from "../app-employee-item/app-employee-item"


export default class AppEmployeeList extends Component {
    render() {
        const { 
            data, 
            onDelete,
            onToggleProp
             } = this.props;

        const employees = data.map(item => {
            return < AppEmployeeItem
             key={item.id} 
             {...item}
             onDelete = {() => onDelete(item.id)}
             onToggleProp={(e) => onToggleProp(item.id, e.currentTarget.dataset.toggle)}
            />;
        });

        return (
            <>
                {
                    data.length ?
                    <div className="repeating-block-box">
                        {employees}
                    </div>
                    : 
                    <div className="repeating-block-box">
                        <h2> Not Found</h2>
                        <p>please try with another method, for example `John Smith</p>
                    </div>
                }     
            </>
        );
      }
    }