import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import NucampLogo from '../app/assets/img/logo.png';
import UserLoginForm from '../features/user/userLoginForm';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
             <UserLoginForm />
            <NavbarBrand className='ms-5' href='/'>
                <img src={NucampLogo} alt='nucamp logo' className='float-start' />
                <h1 className='mt-1'>NuCamp</h1>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/directory'>
                            <i className='fa fa-list fa-lg' /> Directory
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/about'>
                            <i className='fa fa-info fa-lg' /> About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact'>
                            <i className='fa fa-address-card fa-lg' /> Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;










// import React from 'react';
// import '../styles/App.css';
// import { Navbar, NavbarBrand, Container } from 'reactstrap';
// import NucampLogo from '../app/assets/img/logo.png';
// import { FaHome, FaInfo, FaListUl, FaAddressCard } from "react-icons/fa";
// import UserLoginForm from '../features/user/userLoginForm';

// const Header = () => {
//     return (
//         <Navbar dark color='primary' sticky='top' expand='md'>
//             <UserLoginForm />
//             <Container>
//                 <NavbarBrand href='/HomePage'>
//                     <div className='navbar-content'>
//                         <img src={NucampLogo} alt='nucamp logo' />

//                         <h3 > NuCamp</h3>

//                         <div className='container-head-icons'>
//                             <div>
//                                 <a href='/HomePage'>
//                                     <FaHome /> Home
//                                 </a>

//                             </div>
//                             <div>
//                                 <a href='/Directory'>
//                                     <FaListUl /> Directory
//                                 </a>

//                             </div>
//                             <div>
//                                 <a href='/AboutPage'>
//                                     <FaInfo /> About
//                                 </a>

//                             </div>
//                             <div>
//                                 <a href='/ContactPage'>
//                                     <FaAddressCard /> Contact
//                                 </a>

//                             </div>
//                         </div>
//                     </div>
//                 </NavbarBrand>
//             </Container>
//         </Navbar>
//     )
// }

// export default Header;