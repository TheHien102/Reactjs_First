import React from 'react'
import { BoxDashboard } from '../components/Admin/Dashboard/index.jsx';
import NavbarAdmin from '../components/Admin/Navbar/navbar.jsx';


const AdminPage = () => {
    return (
        <div>
            <NavbarAdmin />
            <BoxDashboard/>
        </div>
    )
}

export default AdminPage;