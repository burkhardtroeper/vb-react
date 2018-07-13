import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
  <div>    
    <NavLink to="/kontakt" activeClassName="is-active" exact={true}>Kontakt</NavLink>
    <NavLink to="/impressum" activeClassName="is-active" exact={true}>Impressum</NavLink>
  </div>
);

export default Footer;