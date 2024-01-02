import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { updateEmployee } from "../redux";
import EmployeeMenu from "./EmployeeMenu";

function EmployeeEdit(){
    const stateval=useSelector(state => state);
    const navigate=useNavigate();
    const [urlparams]=useSearchParams();
    const employee_id=urlparams.get("id");
    const dispatch=useDispatch();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [city,setCity]=useState("");
    const [uibadge_status,setUIBadgeStatus]=useState("");
    useEffect(()=>{
        if(stateval.current_user=="0"){
            navigate("/login");
        }
        if(!employee_id || employee_id<0){
            navigate("/home")
        }
        const employee_current=stateval.employees.filter(eachemp => eachemp.employee_id==employee_id);
        if(employee_current.length<=0){
            navigate("/home")
        }
        setName(employee_current[0].employee_name)
        setEmail(employee_current[0].employee_email)
        setCity(employee_current[0].employee_city)
        setUIBadgeStatus(employee_current[0].employee_uibadge_status)
    },[])
    function employeeupdate_submit(){
        const employees_list=stateval.employees;
        if(name!=="" && email!=="" && city!=="" && uibadge_status!==""){
            const employee_details={
                "employee_id":employee_id,
                "employee_name":name,
                "employee_email":email,
                "employee_password":"",
                "employee_city":city,
                "employee_status":"2",
                "employee_uibadge_status":uibadge_status,
                "employee_uibadge_date":"0000-00-00"
            }
            dispatch(updateEmployee(employee_details))
            navigate("/employeelist")
        }
        else{
            alert("Please fill in all details");
        }
    }
    return(
        <div className="employeeadd_page">
            <h1 className="page_title">Employee Edit</h1>
            <EmployeeMenu />
            <div className="field_div">
                <div className="field_div_label">Email</div>
                <div className="field_div_element">{email}</div>
            </div>
            <div className="field_div">
                <div className="field_div_label">Name</div>
                <div className="field_div_element"><input type="text" name="name" value={name} onChange={ev => setName(ev.target.value)} /></div>
            </div>
            <div className="field_div">
                <div className="field_div_label">City</div>
                <div className="field_div_element"><input type="text" name="city" value={city} onChange={ev => setCity(ev.target.value)} /></div>
            </div>
            <div className="field_div">
                <div className="field_div_label">Badge Status</div>
                <div className="field_div_element">
                    <select name="uibadge_status" onChange={ev => setUIBadgeStatus(ev.target.value)} >
                        <option selected={uibadge_status=="-1"} value="-1">Pending</option>
                        <option selected={uibadge_status=="0"} value="0">Completed</option>
                    </select>
                </div>
            </div>
            <div className="field_div">
                <button onClick={employeeupdate_submit} className="field_div_button">Update</button>
            </div>
        </div>
    )
}

export default EmployeeEdit;