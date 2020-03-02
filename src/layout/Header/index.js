import React, { Component } from "react";
import {
  Img,
  UserCircleIcon,
  SignOutLogo,
  NavbarLinkColorBlack
} from './headerStyle';
import Store from '../../utils/store';
import { Nav, Container, Navbar, NavbarLink } from 'styled-bootstrap-components';


class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      logoUrl: window.location.href + 'images/logo.png'
    }
    
  }
  
  handleLogout = (e) => {
    e.preventDefault();

    Store.store.dispatch({
      type: 'CLEAR'
    });
    Store.store.dispatch({
      type: 'LOGOUT'
    });

  }

  render() {
 
    return (
      //   <nav className="navbar navbar-light bg-light justify-content-between" id="Navmenu">
      //       <a className="navbar-brand" href={window.location.href}> 
      //       <Img src={this.state.logoUrl} alt="Logo"/> 
      //         React Assignment</a>
      //       <form className="form-inline" onSubmit={this.handleLogout}>
      //           <div className="username"><UserCircleIcon /> Shaadi</div>
      //           <button className="btn btn-outline-success my-2 my-sm-0 logout" type="submit"><i className="fa fa-sign-out" aria-hidden="true"></i></button>
      //       </form>
      // </nav>
      <Container fluid>
        <Container fluid>
          <Navbar light>
            <Nav start="true" >
              <NavbarLink light brand href={window.location.href}>
              <Img src={this.state.logoUrl} alt="Logo"/> 
                React Assignment
              </NavbarLink>
            </Nav>
            <Nav end="true">
              <NavbarLinkColorBlack href="#"><UserCircleIcon /> Shaadi</NavbarLinkColorBlack>
              <NavbarLink light href="#" onClick={this.handleLogout}><SignOutLogo /></NavbarLink>
            </Nav>
          </Navbar>
        </Container>
      </Container>
    );
  }
}

export default Header;
