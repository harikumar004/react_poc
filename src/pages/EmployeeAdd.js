import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../redux";
import EmployeeMenu from "./EmployeeMenu";

function EmployeeAdd(){
    const stateval=useSelector(state => state);
    const navigate=useNavigate();
    useEffect(()=>{
        if(stateval.current_user=="0"){
            navigate("/login");
        }
    },[])
    const dispatch=useDispatch();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [city,setCity]=useState("");
    function employeeadd_submit(){
        const employees_list=stateval.employees;
        if(name!=="" && email!=="" && city!==""){
            const employee_details={
                "employee_id":employees_list.length+1,
                "employee_name":name,
                "employee_email":email,
                "employee_password":"",
                "employee_city":city,
                "employee_status":"2",
                "employee_uibadge_status":"-1",
                "employee_uibadge_date":"0000-00-00"
            }
            dispatch(addEmployee(employee_details))
            navigate("/employeelist")
        }
        else{
            alert("Please fill in all details");
        }
    }
    return(
        <div className="employeeadd_page">
            <h1 className="page_title">Employee Add</h1>
            <EmployeeMenu />
            <div className="field_div">
                <div className="field_div_label">Name</div>
                <div className="field_div_element"><input type="text" name="name" onChange={ev => setName(ev.target.value)} /></div>
            </div>
            <div className="field_div">
                <div className="field_div_label">Email</div>
                <div className="field_div_element"><input type="text" name="email" onChange={ev => setEmail(ev.target.value)} /></div>
            </div>
            <div className="field_div">
                <div className="field_div_label">City</div>
                <div className="field_div_element"><input type="text" name="city" onChange={ev => setCity(ev.target.value)} /></div>
            </div>
            <div className="field_div">
                <button onClick={employeeadd_submit} className="field_div_button">Submit</button>
            </div>
        </div>
    )
}

export default EmployeeAdd;