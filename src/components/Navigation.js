import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo from "../assets/logo.jpg";
import { SignOut } from "../store/auth/actions/authActions";
import Default from "../assets/default.png";
import "../css/Navigation.css";
import { Dropdown, Menu } from "antd";
import { Navbar, NavbarBrand, Nav } from "shards-react";

const Navigation = () => {
  const currentState = useSelector((state) => state);

  const { isAuthenticated, currentUser } = currentState.Auth;

  const dispatch = useDispatch();

  const logoutUser = () => dispatch(SignOut());

  let imagePreview = null;
  if (currentUser && currentUser.avatar_path) {
    imagePreview = (
      <img
        className="img_style_nav"
        src={currentUser.avatar_path}
        alt="profile 1"
      />
    );
  } else {
    imagePreview = (
      <img className="img_style_nav" src={Default} alt="profile 2" />
    );
  }

  const logout = (e) => {
    e.preventDefault();
    logoutUser();
  };

  const userProfile = isAuthenticated
    ? `/profile/${currentState.Auth.currentUser.id}`
    : "";

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <NavLink to={userProfile} style={{ textDecoration: "none" }}>
          Profile
        </NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
        <a onClick={logout}>Logout ({currentUser.username})</a>
      </Menu.Item>
    </Menu>
  );

  const SignedInLinks = (
    <React.Fragment>
      <div style={{ display: "inline-block" }}>
        <ul className="logged-nav mt-2">
          <li style={{ marginRight: "15px" }}>
            <NavLink to="/createpost">Create Post</NavLink>
          </li>
          <li style={{ marginRight: "15px" }}>
            <NavLink to="/authposts">My Posts</NavLink>
          </li>
          <li>
            <Dropdown overlay={menu}>{imagePreview}</Dropdown>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );

  const SignedOutLinks = (
    <ul className="signout-links">
      <li>
        <a href="/login">Login</a>
      </li>
      <li>
        <a href="/signup">Signup</a>
      </li>
    </ul>
  );

  return (
    <div className="mb-2 fixed-top" style={{backgroundColor:"#00203FFF"}}>
      <Navbar className="navbar-header" color="light" light expand="md">
        <NavbarBrand className="mx-auto" href="/">
          <img
            className="logo"
            src={logo}
            alt="logo"
            width="50px"
            height="50px"
            style={{ borderRadius: "20px" }}
          />
          &nbsp; <strong style={{color:"white"}}>L I K E E</strong>
        </NavbarBrand>
        <Nav className="links ml-auto" navbar>
          {isAuthenticated ? SignedInLinks : SignedOutLinks}
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navigation;
