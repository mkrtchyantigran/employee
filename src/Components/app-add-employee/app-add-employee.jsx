import "./app-add-employee.css"


export default  function AppAddEmployee () {
    return (
        <div className="add-new-employee block repeating-block-box">
          <h3>Add new Employee</h3>
    
          <div className="add-new-employee-group">
            <input type="text" placeholder="Employee name" />
            <input type="text" placeholder="Employee salary" />
            <button type="button">Add</button>
          </div>
        </div>
      )
}