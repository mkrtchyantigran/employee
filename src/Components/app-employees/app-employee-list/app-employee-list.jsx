import { Component } from "react";
import AppEmployeeItem from "../app-employee-item/app-employee-item"


export default class AppEmployeeList extends Component {
    render() {
        const { data, onDelete, addNewEmployee } = this.props;

        const employees = data.map(item => {
            return < AppEmployeeItem
             key={item.id} 
             {...item}
             onDelete = {() => onDelete(item.id)}
             
            />;
        });

        return (
            <div className="repeating-block-box">
                {employees }
            </div>
        );
    }
    
}