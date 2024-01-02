import React from "react";
import { Link, useNavigate } from "react-router-dom";

function EmployeeMenu(){
    return(
        <div className="menu_div">
            <ul>
                <li><Link to="/employeeadd">Add Employee</Link></li>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <li><Link to="/employeelist">View Employees</Link></li>
            </ul>
        </div>
    )
}

export default EmployeeMenu;