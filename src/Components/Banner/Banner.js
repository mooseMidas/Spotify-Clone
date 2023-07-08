import "./Banner.css";
import { Container, Row } from "react-bootstrap";

// Banner component will be displayed at the bottom of the page 

export default function Banner() {
  return (
    <Container className="banner-container">
      <Row className="banner-row">
        <div className="banner--text">
         <span>PREVIEW OF SPOTIFY</span><br/>
          Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.
          <button className="banner--sign-up">Sign up free</button>
        </div>
      </Row>
    </Container>
  );
}

/*
 */
