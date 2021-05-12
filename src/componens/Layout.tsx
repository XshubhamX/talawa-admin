import React from 'react';
import { Navbar, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Logo from '../assets/Talawa-Logo.svg';

interface Props {
  children: any;
}

function layout(props: Props) {
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg" sticky="top">
        <LinkContainer to="/">
          <Navbar.Brand>
            <Image src={Logo} fluid />
            Talawa Admin
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
      </Navbar>

      {props.children}
    </React.Fragment>
  );
}

export default layout;
