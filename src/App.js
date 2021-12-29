import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Interest  from './pages/Interest';
import Home from "./pages/Home";
import Register from "./pages/register";
import RegisterDetail from './pages/registerDetail';
import UserManual from './pages/UserManual';
import UserSaving from './pages/UserSaving';
import UserHistory from './pages/UserHistory';
import AdminPage from './pages/Admin';
import AdminCustomer from './pages/AdminCustomer';
import AdminInterest from './pages/AdminInterest';
import AboutUs from './pages/About';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/Welcome/Login" />}> </Route>
        <Route exact path="/Welcome/Login" element={<Home />}> </Route>
        <Route path="/Welcome/Register" element={<Register />}> </Route>
        <Route path="/registerDetail" element={<RegisterDetail />}> </Route>
        <Route path="/Welcome/userArea" element={<UserSaving />}> </Route>
        <Route path="/Welcome/userArea/History" element={<UserHistory />}> </Route>
        <Route path="/Welcome/userManual" element={<UserManual />}> </Route>
        <Route path="/Welcome/About" element={<AboutUs/>}> </Route>
        <Route path="/Welcome/InterestRate" element={<Interest />}> </Route>
        <Route path="/Welcome/Admin" element={<AdminPage />}> </Route>
        <Route path="/Welcome/Admin/Customer" element={<AdminCustomer />}> </Route>
        <Route path="/Welcome/Admin/Interest" element={<AdminInterest />}> </Route>
      </Routes>
    </Router>
  )
}

export default App;


