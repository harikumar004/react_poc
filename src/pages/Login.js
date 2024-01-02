import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { updateCurrentUser } from "../redux";

function Login(){
    const stateval=useSelector(state => state);
    const navigate=useNavigate();
    const [urlparams]=useSearchParams();
    const logout_done=urlparams.get("logout");
    useEffect(()=>{
        if(logout_done){
            dispatch(updateCurrentUser("0"))
        }
        else if(stateval.current_user!="0"){
            navigate("/home");
        }
    },[])
    const dispatch=useDispatch();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    function login_submit(){
        const manager_details=stateval.employees.filter(emp => emp.employee_status==1);
        if(email===manager_details[0].employee_email && password===manager_details[0].employee_password){
            navigate("/home");
            dispatch(updateCurrentUser(manager_details[0].employee_id));
        }
        else{
            alert("Invalid login details")
        }
    }
    return(
        <div className="login_page">
            <h1 className="page_title">Login</h1>
            <div className="field_div">
                <div className="field_div_label">Email</div>
                <div className="field_div_element"><input type="text" name="email" onChange={ev => setEmail(ev.target.value)} /></div>
            </div>
            <div className="field_div">
                <div className="field_div_label">Password</div>
                <div className="field_div_element"><input type="password" name="password" onChange={ev => setPassword(ev.target.value)} /></div>
            </div>
            <div className="field_div">
                <button onClick={login_submit} className="field_div_button">Submit</button>
            </div>
        </div>
    )
}

export default Login;