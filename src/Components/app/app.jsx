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
          increase: false,
          rise: false
        },
        {
          id: 2,
          name: "Alex Shepard",
          salary: 950,
          increase: false,
          rise: false
        }
      ],
      term: "",
      filter: "all"
    }
    this.employeeId = 3;
  }
  
  onDeleteEmployee = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id)
      }
      
    });
  };


  onAddNewEmployee = (name, salary) => {
    this.state(({data}) => {
      return {
        data: [
          ...data,
          {
            name,
            salary,
            increase: false,
            rise: false
          }
        ]
      }
    })
  }

    

  onToggleIncreaseAndRise = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
      if (item.id === id && item.increase === item.rise || item.increase !== true) {
        return {  ...item, increase: !item.increase }
      } else if (item.id === id &&  item.increase === true || item.increase === true ) {
        return {  ...item, rise: !item.rise }
      }
      return item;
      })
    }));
  }
  


  onEmloyeeSearch = (items, term) => {
    if(term.length === 0) return items;

    return items.filter(item => {
      return item.name.indexOf(term) > -1;
    });
  }

  onUpdateSearch = (term) => {
    this.setState({ term });
  }

  onEmployeeFilter = (items, filter) => {
    switch (filter) {
      case "rise": 
      return items.filter(item => item.rise);
      case "salary": 
      return items.filter(item => item.salary > 1000);
      default: 
      return items;
    }
  }



  onFilterSelect = (filter) => {
    this.setState(({ filter }))
  }
   
    render() {
     
      const { data, term, filter} = this.state

      const {
        onDeleteEmployee,
        onAddNewEmployee,
        onToggleIncreaseAndRise,
        onEmloyeeSearch,
        onUpdateSearch,
        onEmployeeFilter,
        onFilterSelect
        } = this;

      const employees = data.length;
      const increased = data.filter(e => e.increase).length;
      const visibleData = onEmployeeFilter(onEmloyeeSearch(data, term), filter)

      return(

          <div className="App">
              < AppInfo  employees={employees} increased={increased}/>
              <div className='repeating-block-box'>
                    <h3>Search or Filter</h3>
                    < AppSearch onUpdateSearch={onUpdateSearch}/>
                    < AppFilter filter={filter} onFilterSelect={onFilterSelect}  />
              </div>
                < AppEmployeeList  
                data={data}
                onDelete={onDeleteEmployee}
                onToggleIncreaseAndRise={onToggleIncreaseAndRise}
              />
                <AppAddEmployee onAdd={onAddNewEmployee} />
          </div>
      );
    }
}