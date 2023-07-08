import "./Header.css";
import { Container, Row } from "react-bootstrap";

// Header comp will display buttons for login and sign-up.

export default function Header() {
  return (
    <Container className="header-container">
      <Row className="header-row">
        <div className="header-buttons">
          <button className="header--sign-up">Sign up</button>
          <button className="header--login">Log in</button>
        </div>
      </Row>
    </Container>
  );
}

/*
 */
