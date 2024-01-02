import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import EmployeeMenu from "./EmployeeMenu";
import { Link, useNavigate } from "react-router-dom";

function EmployeeList(){
    const stateval=useSelector(state => state);
    const navigate=useNavigate();
    useEffect(()=>{
        if(stateval.current_user=="0"){
            navigate("/login");
        }
    },[])
    const employees_list=stateval.employees;
    return(
        <div className="employeelist_page">
            <h1 className="page_title">Employee List</h1>
            <EmployeeMenu />
            <div className="employeelist">
                <div className="employeelist_div">
                    <div className="employeelist_header">
                        <div>Name</div>
                        <div>Email</div>
                        <div>City</div>
                        <div>Badge Status</div>
                        <div>Edit</div>
                    </div>
                    {
                        employees_list.map(employee => <div key={employee.employee_id} className={employee.employee_status>1?"employeelist_each":"employeelist_each hide"}> 
                            <div title={employee.employee_name}>{employee.employee_name}</div>
                            <div title={employee.employee_email}>{employee.employee_email}</div>
                            <div title={employee.employee_city}>{employee.employee_city}</div>
                            <div>{employee.employee_uibadge_status=="0"?<span className="badgedone">Completed</span>:<span className="badgepending">Pending</span>}</div>
                            <div><Link to={"/employeeedit?id="+employee.employee_id}>Edit</Link></div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default EmployeeList;