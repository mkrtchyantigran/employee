import React, {Component} from 'react';
import './app.css';
import '../repeating-css/repeating-css.css'

import AppInfo from '../app-info/app-info';
import AppSearch from '../app-search/app-search';
import AppFilter from '../app-filter/app-filter';
import AppEmployeeList from '../app-employees/app-employee-list/app-employee-list';
import AppAddEmployee from '../app-add-employee/app-add-employee';



export default class  App  extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          id: 1,
          name: "John Smith",
          salary: 1000,
          increase: false
        },
        {
          id: 2,
          name: "Alex Shepard",
          salary: 950,
          increase: false
        },
        {
          id: 3,
          name: "Tom Jackson",
          salary: 645,
          increase: false
        },
        {
          id: 4,
          name: "Adam Miller",
          salary: 1245,
          increase: false
        },
        {
          id: 5,
          name: "Mila Yohovich",
          salary: 877,
          increase: false
        },

        {
          id: 6,
          name: "Jane brendan",
          salary: 329,
          increase: false
        },
        {
          id: 7,
          name: "Mike friddman",
          salary: 442,
          increase: false
        },
      ],
    }
  }

  AddNewEmployee = (newEmployee) => {
    this.setState((prevState) => ({
      data: [...prevState.data, newEmployee],
    }))
  }

  deleteEmployee = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
      
    });
  };
   
    render() {
      const { data, AddNewEmployee} = this.state;
      return(
        <div className="App">
              < AppInfo />
              <div className='repeating-block-box'>
                    < AppSearch />
                    < AppFilter />
                </div>
                < AppEmployeeList  
                data={this.state.data}
                onDelete={this.deleteEmployee}
                />
                < AppAddEmployee 
                  data={data} 
                  addNewEmployee={AddNewEmployee} 
                />
        </div>
      );
    }
}