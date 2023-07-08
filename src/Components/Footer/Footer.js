import "./Footer.css";
// imported bootstrap components below including icons
import { Container, Row, Col } from "react-bootstrap";
// imported bootstrap icons
import { Facebook, Twitter, Instagram } from "react-bootstrap-icons";

/*Footer comp with link to actual Spotify page that I am cloning*/

export default function Footer() {
  return (
    <Container fluid="md" className="footer--container">
      <Row>
        <Col className="footer--list-container">
          <h4 className="footer--headers">Company</h4>
          <ul className="footer--lists">
            <li>About</li>
            <li>Jobs</li>
            <li>For the Record</li>
          </ul>
        </Col>
        <Col className="footer--list-container">
        <h4 className="footer--headers">Communities</h4>
          <ul className="footer--lists">
            <li>For Artists</li>
            <li>Developers</li>
            <li>Advertising</li>
            <li>Investors</li>
            <li>Vendors</li>
            <li>Spotify for Work</li>
          </ul>
        </Col>
        <Col className="footer--list-container">
        <h4 className="footer--headers">Useful links</h4>
          <ul className="footer--lists">
            <li>Support</li>
            <li>Free Mobile App</li>
          </ul>
        </Col>
        <Col className="footer--socials-container">
          <div className="footer--socials">
            <div className="footer--icon"> <Instagram /> </div> 
            </div>
            <div className="footer--socials">
            <div className="footer--icon"> <Twitter /> </div>
            </div>
            <div className="footer--socials">
            <div className="footer--icon"> <Facebook /></div>
            </div>
        </Col>
        <hr/>
        <a href="https://open.spotify.com/" target="_blank" rel="noreferrer" className="footer--link">Link to Spotify</a>
      </Row>
    </Container>
    
  );
}
