import React from 'react'
import { BoxCustomer } from '../components/Admin/Customer/index.jsx';
import NavbarAdmin from '../components/Admin/Navbar/navbar.jsx';


const AdminCustomer = () => {
    return (
        <div>
            <NavbarAdmin />
            <BoxCustomer/>
        </div>
    )
}

export default AdminCustomer;