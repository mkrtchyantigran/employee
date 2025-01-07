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
    this.setState({
      [e.target.name]: e.target.value
    });
  }




  onAddHandler = (e) => {
    e.preventDefault();
      if(this.state.name.length < 3 || !this.state.salary) return;

      this.props.onAdd(this.state.name, this.state.salary)
      this.setState({
        name: "",
        salary: "",
      });
    };
  
    render() {
      const { name , salary} = this.state;

      return (
        <div className="add-new-employee repeating-block-box">

          <h3>Add new Employee</h3>
    
          <form 
            className="add-new-employee-group" 
            onSubmit={this.onAddHandler}
          >
            <input 
              type="text"
              name="name"
              value={name}
              placeholder="Employee name" 
              onChange={this.onInputValueChange}
            />
            <input 
              type="text"
              name="salary"
              value={salary}
              placeholder="Employee salary" 
              onChange={this.onInputValueChange}
            />
            <button  type="submit">Add</button>
          </form>
        </div>
      );
    }
}