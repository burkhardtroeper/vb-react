import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

import NotFoundPage from '../components/NotFoundPage';
import Headercontainer from '../components/Header';
import Navigation from '../components/Navigationbar';
import Lebenslauf from '../components/Lebenslauf';
import Kannich from '../components/Kannich';
import Magich from '../components/Magich';
import Sprechich from '../components/Sprechich';
import Andereuebermich from '../components/Andereuebermich';
import Projekte from '../components/Projekte';
import HomePage from '../components/HomePage';
import Kontakt from '../components/Kontakt';
import Footer from '../components/Footer';
import Impressum from '../components/Impressum';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={8}>
            <Headercontainer />
          </Col>        
        </Row> 

        <Row className="show-grid">
          <Col xs={12} md={8}>
            <Navigation />
          </Col>        
        </Row> 

        <Row className="show-grid">
          <Col xs={12} md={8}>
            <div className="mainContainer">
              <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/lebenslauf" component={Lebenslauf} exact={true} />
                <Route path="/kannich" component={Kannich} exact={true}/>
                <Route path="/magich" component={Magich} exact={true}/>
                <Route path="/sprechich" component={Sprechich} exact={true} />
                <Route path="/andereuebermich" component={Andereuebermich} />
                <Route path="/projekte" component={Projekte} exact={true}/>
                <Route path="/kontakt" component={Kontakt} exact={true} />
                <Route path="/impressum" component={Impressum} exact={true}/>
                <Route component={NotFoundPage} />
              </Switch>
            </div>
          </Col>        
        </Row> 

        <Row className="show-grid">
          <Col xs={12} md={8}>
           <Footer />
          </Col>        
        </Row> 
      </Grid>
    </div>
  </BrowserRouter>
);

export default AppRouter;