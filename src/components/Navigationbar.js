import React from 'react';

import { NavLink } from 'react-router-dom';
import { Row, Col, Nav, Navbar, NavItem } from 'react-bootstrap';

const Navigation = () => (

  <Row className="show-grid">
    <Col xs={12} md={8}>      
      <Navbar>
        <Navbar.Header>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem>
              <NavLink to="/lebenslauf" activeClassName="is-active" exact={true}>Lebenslauf</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/kannich" activeClassName="is-active" exact={true}>Kann ich</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/magich" activeClassName="is-active" exact={true}>Mag ich</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/sprechich" activeClassName="is-active" exact={true}>Spreche ich</NavLink>
            </NavItem>            
            <NavItem>
              <NavLink to="/andereuebermich" activeClassName="is-active" exact={true}>Andere über mich</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/projekte" activeClassName="is-active" exact={true}>Meine Projekte</NavLink>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Col>
  </Row>  

);

export default Navigation;