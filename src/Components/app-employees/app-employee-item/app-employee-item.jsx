import './app-employee-item.css';

import trashIcon from '../../icons/trash.svg';

export default function AppEmployeeItem () {
    return (
        <div className="employee-item repeating-block-box">
            <h2>Adding Employee</h2>
            <img src={trashIcon} alt="icons" />
        </div>
    )
}