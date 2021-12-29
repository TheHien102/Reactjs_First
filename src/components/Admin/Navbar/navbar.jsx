import React from 'react'
import './navbar.css';
import logo from '../../../assets/commerce.png';

const NavbarAdmin = () => {

    return (
        <div>
            <div class="sidenav">
                <div className="boxName">
                    <figure className="iconBank"> <img src={logo} alt="Bank Image" /></figure>
                    <h4 className="nameBank"> Universe <br /> Bank</h4>
                </div>
                <div className="tabDashboard hover">
                    <i class="icon center fab fa-windows fa-lg"></i>
                    <a href="/Welcome/Admin"> Dashboard </a>
                </div>
                <div className="tabCustomer hover">
                    <i class="icon center fas fa-users fa-lg"></i>
                    <a href="/Welcome/Admin/Customer"> Customer </a>
                </div>
                <div className="tabInterest hover">
                    <i class="icon center fas fa-percentage fa-lg"></i>
                    <a href="/Welcome/Admin/Interest">Interest rate</a>
                </div>
            </div>
        </div>
    )
}
export default NavbarAdmin;