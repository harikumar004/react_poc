import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import EmployeeList from "./EmployeeList";
import EmployeeMenu from "./EmployeeMenu";

function Home(){
    const stateval=useSelector(state => state);
    const navigate=useNavigate();
    useEffect(()=>{
        if(stateval.current_user=="0"){
            navigate("/login");
        }
    },[])
    return(
        <EmployeeList />
    )
}

export default Home;