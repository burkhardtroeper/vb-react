import React from 'react';
import { Button, Modal, Row, Col } from 'react-bootstrap';

class Lebenslauf extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {

    return (

        <Row className="show-grid">
          <Col xs={12} md={8}>
            <div>
              <h2>Lebenslauf</h2>
              <p>Kurzfassung: Abitur, Studium der Molekularbiologie, Burda Journalistenschule, Redakteur beim Nachrichtenmagazin Focus, Kommunikationsmanager bei Aventis, Redakteur bei der Apotheken Umschau, Stellv. Chefredakteur Apotheken Umschau Online, Chefredakteur Lifeline.de, Projektleiter/Entwicklung Neue Medien beim Wort & Bild Verlag (AR/VR/Apps/E-Learning)</p>
              <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
                Hier klicken für ausführlichen Lebenslauf
              </Button>
      
              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Lebenslauf</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h4>1979 bis 1984</h4>
                  <p>
                  Besuch der 1. bis 6. Klasse am Colégio Marista Dom Silvério (Privatschule) in Belo Horizonte, Brasilien
                  </p>
      
                  <h4>1985 bis 1991</h4>
                  <p>
                  Besuch des Gymnasiums ab der 7. Klasse am Mariengymnasium in Bocholt. Abschluss mit dem Abitur 1991
                  </p>
      
                  <h4>1991 bis 1992</h4>
                  <p>
                  Zivildienst beim V.I.S. (Verein für individuelle Schwerbehinderten Betreuung) in Köln/Bonn
                  </p>
      
                  <h4>1992 bis 1994</h4>
                  <p>
                  Studium der Biologie (Diplom) an der Johann Wolfgang Goethe-Universität in Frankfurt am Main. Vordiplomsprüfung im August 1994 (Note: sehr gut)
                  </p>
      
                  <h4>1994 bis 1999</h4>
                  <p>
                  Studium der Biologie (Diplom) an der Johannes Gutenberg-Universität Mainz
                  </p>
      
                  <p>
                  Schwerpunkte: Biochemie, Molekulargenetik, Pharmakologie
                  </p>
      
                  <p>
                  Abschluss mit dem Diplom im Februar 1999 (Note: sehr gut)
                  </p>
      
                  <p>
                  Während der Diplomarbeit: Förderstipendium der Universität Mainz
                  </p>
      
                  <p>
                  Während des Studiums: Journalistische Praktika bei der „Apotheken Praxis“, dem „Bocholter Borkener Volksblatt“ und dem Fachjournal „Nature“
                  </p>
      
                  <h4>September 1996 bis Februar 1997</h4>
                  <p>
                  Auslandsstudium an der Universitat de Barcelona in Barcelona/Spanien im Rahmen des Erasmus-Programms
                  </p>
      
                  <h4>Januar 1998 bis Februar 1999</h4>
                  <p>
                  Mitgründer der „Stuz“ (Konzeption, Entwicklung, Produktion, Marktpositionierung), das mittlerweile führende Stadt- und Hochschulmagazin im Rhein-Main-Nahe-Gebiet. Erscheint monatlich mit einer Auflage von 30.000 Heften. Online unter www.stuz.de
                  </p>
      
                  <h4>Juli 1999 bis Juli 2000</h4>
                  <p>
                  Feste freie Mitarbeit beim Nachrichtenmagazin FOCUS, Ressort Forschung und Technik. Freie Mitarbeit bei diversen anderen Verlagen und Institutionen
                  </p>
      
                  <h4>August 2000 bis Juli 2002</h4>
                  <p>
                  Besuch der Burda Journalistenschule in München.
                  </p>
                  <p>
                  Stammredaktion beim Nachrichtenmagazin FOCUS, Ressort Forschung und Technik
                  </p>
                  <p>
                  Unter anderem Konzeption und Produktion der „Focus Ärzte-Serie“, die später auch als Buch erschienen ist
                  </p>
                  <p>
                  Ausbildungsstationen bei der Tageszeitung „Tagesspiegel“ (Berlin) und beim Fernsehwissensmagazin „Galileo“ (ProSieben, München)
                  </p>
                  <p>
                  Zum Abschluss der Journalistenschule: Erster Focus-Volontär, dem eine Titelgeschichte ("Schmerz lässt nach") in kompletter Eigenregie zugeteilt wurde
                  </p>
      
                  <h4>August 2002 bis Dezember 2002</h4>
                  <p>
                  Redakteur beim Nachrichtenmagazin FOCUS, Ressort Deutschland Aktuell
                  </p>
                  <p>
                  Aufgaben: Ideenentwicklung, Konzeption und Realisation von Deutschland-Themen
                  </p>
      
                  <h4>Januar 2003 bis März 2004</h4>
                  <p>
                  Kommunikationsmanager bei Aventis Deutschland, Frankfurt (heute Sanofi)
                  </p>
                  <p>
                  Aufgaben: Interne und externe Unternehmenskommunikation im Bereich „Forschung“ am Standort Frankfurt an alle Standorte von Aventis weltweit (neben Deutschland hauptsächlich Frankreich und USA). Unter anderem Pflege und Relaunch des Intranets, damit zusammenhängende Budgetplanung, Pressesprecherfunktion
                  </p>
      
                  <h4>April 2004 bis Dezember 2008</h4>
                  <p>
                  Redakteur beim Gesundheitsmagazin Apotheken Umschau
                  </p>
                  <p>
                  Aufgaben: Ideenentwicklung, Konzeption und Realisation von Gesundheitsthemen – von kleinen Einseitern bis hin zu großen, im Fernsehen beworbenen Titelgeschichten – für ein Massenpublikum von bis zu 19 Millionen Lesern. Vor-Ort-Recherche, Betreuung von Fotografen, Infografikern und Layoutern
                  </p>
      
                  <h4>Januar 2009 bis März 2012</h4>
                  <p>
                  Stellvertretender Chefredakteur der Online Redaktion des Wort & Bild Verlags (www.apotheken-umschau.de, www.senioren-ratgeber.de, www.baby-und-familie.de, www.diabetes-ratgeber.net)
                  </p>
                  <p>
                  Aufgaben: Koordination des täglichen Redaktionbetriebs inklusive Mitarbeiterführung; Ideenentwicklung (unter anderem Social Media-Auftritte des Verlags), Konzeption und Umsetzung sowohl von Textinhalten als auch multimedialen Inhalten (Audios, Videos, animierte Infografiken – hierbei auch Budgetplanung); Inhaltliche Konzeption und Koordination des Teams beim Relaunch (ein optischer Relaunch, zwei technische Umstellungen) der Online-Portale in den Jahren 2009/2010
                  </p>
      
                  <h4>April 2012 bis August 2012</h4>
                  <p>
                  Chefredakteur der Lifeline-Gesundheitsportale beim Gong Verlag/WAZ-Mediengruppe
                  </p>
                  <p>
                  Aufgaben: Koordination des täglichen Redaktionbetriebs inklusive Mitarbeiterführung. Inhaltliche Konzeption und Koordination des Teams bei diversen Relaunch-Vorhaben. Optimierung der Seiten, Budgetplanung, Business Development
                  </p>
      
                  <h4>Seit September 2012</h4>
                  <p>
                  Projektleiter für Neue Medien beim Wort & Bild Verlag
                  </p>
                  <p>
                  Aufgaben: Entwicklung, Konzeption und Realisation neuer Produkte (Augmented Reality, Virtual Reality, Chatbots, Apps, E-Learning) im Bereich Neue Medien für den Wort und Bild Verlag.
                  </p>   
      
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.handleClose}>Schließen</Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Col>        
        </Row> 
      
    );
  }
}

export default Lebenslauf;