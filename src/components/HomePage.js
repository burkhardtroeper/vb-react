import React from 'react';
import { Row, Col } from 'react-bootstrap';

const HomePage = () => (
  <div>
    <Row className="show-grid">
      <Col xs={12} md={8}>
        <h1>Hallo lieber Besucher</h1>
        <p> Willkommen auf meiner Profilseite. Hier erfahren Sie einiges über mich: meine Ausbildung, meine beruflichen Stationen, meine aktuellen Projekte (schauen Sie auf den entsprechenden Seiten mal vorbei), meine Hobbys und einiges mehr. Der Liveticker meines Twitter-Accounts zeigt Ihnen, was ich gerade so im Internet entdeckt habe. In Kontakt treten Sie mit mir am besten über Email, Xing oder Facebook. Dann freue ich mich auf eine baldige persönliche Nachricht.</p>
        <p>Bis dahin ...</p>
      </Col>
      </Row>
  </div>
);

export default HomePage;
