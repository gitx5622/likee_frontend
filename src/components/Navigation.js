import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import logo from '../assets/logo.jpg'
import { SignOut } from '../store/auth/actions/authActions';
import Default from '../assets/default.png'
import '../css/Navigation.css'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';


const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);

    const currentState = useSelector((state) => state);

    const { isAuthenticated, currentUser } = currentState.Auth;

    const dispatch = useDispatch();

    const logoutUser  = () => dispatch(SignOut());



    let imagePreview = null;
    if(currentUser && currentUser.avatar_path){
        imagePreview = (<img className="img_style_nav" src={currentUser.avatar_path} alt="profile 1"/>);
    } else {
        imagePreview = (<img className="img_style_nav" src={Default} alt="profile 2"/>);
    }

    const logout = (e) => {
        e.preventDefault();
        logoutUser()
    };

    const userProfile = isAuthenticated ?  `/profile/${currentState.Auth.currentUser.id}` : ""

    const SignedInLinks = (
        <React.Fragment>
            <NavItem className="mt-2" style={{marginRight: "15px" }}>
                <NavLink to="/createpost">Create Post</NavLink>
            </NavItem>
            <NavItem className="mt-2" style={{marginRight: "15px" }}>
                <NavLink to="/authposts">My Posts</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    {imagePreview}
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                        <NavItem>
                            <NavLink to={userProfile} style={{textDecoration: "none"}}>Profile</NavLink>
                        </NavItem>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        <a onClick={logout}>Logout ({currentUser.username})</a>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </React.Fragment>

    )

    const SignedOutLinks = (
        <React.Fragment>
            <NavItem style={{marginRight: "20px" }}>
                <Link to='/login'>Login</Link>
            </NavItem>
            <NavItem>
                <Link to='/signup'>Signup</Link>
            </NavItem>
        </React.Fragment>
    );


    return (
        <div className="mb-2">
            <Navbar className="navbar-header" color="light" light expand="md">

                <NavbarBrand className="mx-auto" href="/"><img className="logo"
                    src={logo} alt="logo" width="50px" height="50px" style={{borderRadius:"20px"}}/>&nbsp; <strong>L I K E E</strong></NavbarBrand>
                <NavbarToggler onClick={() => setIsOpen(!isOpen) } />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="links ml-auto" navbar>
                        { isAuthenticated ? SignedInLinks: SignedOutLinks }
                    </Nav>
                </Collapse>

            </Navbar>
        </div>
    );
};

export default Navigation
