import AppEmployeeItem from "../app-employee-item/app-employee-item"


export default  function AppEmployeeList({data}) {
    const employees = data.map(item => {
        return <AppEmployeeItem  key={item.id} {...item} />;
    });
    return (
        <div className="employee-list repeating-block-box">
            {employees}
        </div>
    );
}