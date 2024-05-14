import React from 'react';
import '../styles/App.css';
import { Navbar, NavbarBrand, Container } from 'reactstrap';
import NucampLogo from '../app/assets/img/logo.png';
import { FaHome, FaInfo, FaListUl, FaAddressCard } from "react-icons/fa";
import UserLoginForm from '../features/user/userLoginForm';

const Header = () => {
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <UserLoginForm />
            <Container>
                <NavbarBrand href='/HomePage'>
                    <div className='navbar-content'>
                        <img src={NucampLogo} alt='nucamp logo' />

                        <h3 > NuCamp</h3>

                        <div className='container-head-icons'>
                            <div>
                                <a href='/HomePage'>
                                    <FaHome /> Home
                                </a>

                            </div>
                            <div>
                                <a href='/Directory'>
                                    <FaListUl /> Directory
                                </a>

                            </div>
                            <div>
                                <a href='/AboutPage'>
                                    <FaInfo /> About
                                </a>

                            </div>
                            <div>
                                <a href='/ContactPage'>
                                    <FaAddressCard /> Contact
                                </a>

                            </div>
                        </div>
                    </div>
                </NavbarBrand>
            </Container>
        </Navbar>
    )
}

export default Header;