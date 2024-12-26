import { Component } from "react"

import "./app-add-employee.css"

export default class AppAddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
    };
  }

  onInputValueChange = (e) => {
    const { name, value} = e.target;
    this.setState({ [name]: value });
  }


  AddNewEmployee = () => {
    const { name, salary } = this.state;
    const { data, addNewEmployee } = this.props;

    if(name && salary) {
      const newEmployee = {
        id: data.length ? data[data.length - 1].id + 1 : 1,
        name,
        salary: parseFloat(salary),
      }
        addNewEmployee(newEmployee)
        this.setState({ name: '', salary: ''});
    };

    
  };

 
  


    render() {
      const { name , salary} = this.state;

      return (
        <div className="add-new-employee repeating-block-box">

          <h3>Add new Employee</h3>
    
          <form className="add-new-employee-group" onSubmit={this.AddNewEmployee}>
            <input 
            className="name"
              type="text"
              name="name"
              value={name}
              placeholder="Employee name" 
              onChange={this.onInputValueChange}
            />
            <input 
              className="salary"
              type="text"
              name="salary"
              value={salary}
              placeholder="Employee salary" 
              onChange={this.onInputValueChange}
            />
            <button  type="submit">Add</button>
          </form>
        </div>
      )
    }
}