import Redux, { createStore } from "redux";

export function addEmployee(emp_details){
    return {
        type:"ADD_EMPLOYEE",
        payload:emp_details
    }
}

export function updateEmployee(emp_details){
    return {
        type:"UPDATE_EMPLOYEE_STATUS",
        payload:emp_details
    }
}

export function updateCurrentUser(emp_id){
    return {
        type:"UPDATE_CURRENT_USER",
        payload:emp_id
    }
}

const initState={
    "current_user":"0",
    "employees":[{
        "employee_id":1,
        "employee_name":"admin",
        "employee_email":"admin",
        "employee_password":"admin",
        "employee_city":"Chennai",
        "employee_status":"1",
        "employee_uibadge_status":"0",
        "employee_uibadge_date":"0000-00-00"
    },
    {
        "employee_id":2,
        "employee_name":"Hari",
        "employee_email":"hari@ibm.com",
        "employee_password":"hari123",
        "employee_city":"Chennai",
        "employee_status":"2",
        "employee_uibadge_status":"-1",
        "employee_uibadge_date":"0000-00-00"
    },
    {
        "employee_id":3,
        "employee_name":"Kumar",
        "employee_email":"kumar@ibm.com",
        "employee_password":"kumar123",
        "employee_city":"Mumbai",
        "employee_status":"2",
        "employee_uibadge_status":"-1",
        "employee_uibadge_date":"0000-00-00"
    }]
}

function employeeReducer(state=initState,action){
    switch(action.type){
        case "UPDATE_CURRENT_USER":
            return{
                ...state,
                current_user:action.payload
            }
        case "ADD_EMPLOYEE":
            return {
                ...state,
                employees:[...state.employees,action.payload]
            }
        case "UPDATE_EMPLOYEE_STATUS":
            const new_employee_list=state.employees.map(eachemp => eachemp.employee_id==action.payload.employee_id ? action.payload:eachemp);
            return {
                ...state,
                employees:new_employee_list
            }
        default:
            return {
                ...state
            }
    }
}

const store=createStore(employeeReducer);

export default store;