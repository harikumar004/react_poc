import logo from './assets/images/logo_white.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';

import { useSelector } from 'react-redux/es/hooks/useSelector';
import EmployeeList from './pages/EmployeeList';
import EmployeeAdd from './pages/EmployeeAdd';
import EmployeeEdit from './pages/EmployeeEdit';

function App() {
  const stateval=useSelector(state => state);
  return (
    <Router>
      <header>
        <div className='header_div'>
          <div className='logo_div'><Link to="/home"><img src={logo} /></Link></div>
          <h1 className='header_title'>UI Garage</h1>
          <ul className='header_menu'>
            <li>
              {
                stateval.current_user=="0"?<Link to="/login">Login</Link>:<Link to="/login?logout=1">Logout</Link>
              }
            </li>
          </ul>
        </div>
      </header>
      <div className='content_div'>
      <div className={"pendingcount"+(stateval.current_user=="0"?" hide":"")}>Pending: {stateval.employees.filter(eachemp => eachemp.employee_uibadge_status=="-1").length}</div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/employeelist" element={<EmployeeList />} />
        <Route path="/employeeadd" element={<EmployeeAdd />} />
        <Route path="/employeeedit" element={<EmployeeEdit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;