import './app.css';
import '../repeating-css/repeating-css.css'

import AppInfo from '../app-info/app-info';
import AppSearch from '../app-search/app-search';
import AppFilter from '../app-filter/app-filter';
import AppEmployeeItem from '../app-employees/app-employee-item/app-employee-item';
// import AppEmployeeList from '../app-employees/app-employee-list/app-employee-list';
// import AppAddEmployee from '../app-add-employee/app-add-employee';


export default function App () {
    return (
        <div className="App">
            < AppInfo />
            <div className='repeating-block-box'>
                < AppSearch />
                < AppFilter />
            </div>
            <div >
                < AppEmployeeItem />
            </div>
        </div>
    )
}