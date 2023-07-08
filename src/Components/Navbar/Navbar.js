import "./Navbar.css";
import { Container, Col } from "react-bootstrap";
import {
  HouseDoorFill,
  Search,
  Collection,
  FilePlusFill,
  Heart,
  Globe,
} from "react-bootstrap-icons";

/*Navbar component 
Navbar will be a pannel on the left
Added bootstrap icons to mimic Spotify page
terms array is mapped to create span elements
Navbar position is fixed*/

export default function Navbar() {
  let logo =
    "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png";

  let terms = [
    "Legal",
    "Privacy Center",
    "Privacy Policy",
    "Cookies",
    "About Ads",
    "Accessibility",
    "Cookies",
  ];

  return (
    <Container className="nav--container">
      <Col>
        <nav className="nav--items">
          <img src={logo} alt="Logo" id="logo" />
          <div className="nav--section-one">
            <button className="nav--buttons">
              <HouseDoorFill className="nav--icons" />
              <span className="nav--text">Home</span>
            </button>
            <button className="nav--buttons">
              <Search className="nav--icons" />
              <span className="nav--text">Search</span>
            </button>
            <button className="nav--buttons">
              <Collection className="nav--icons" />
              <span className="nav--text">Library</span>
            </button>
          </div>

          <div className="nav--section-two">
            <button className="nav--buttons">
              <FilePlusFill className="nav--icons" />
              <span className="nav--text">Create Playlist</span>
            </button>
            <button className="nav--buttons">
              <Heart className="nav--icons" />
              <span className="nav--text">Liked Songs</span>
            </button>
          </div>
          <div className="nav--terms-container">
          <div className="nav--section">
            <div className="terms">
              {terms.map((x) => (
                <span className="terms-list">{x}</span>
              ))}
            </div>
          </div>
          </div>
          <div className="nav--section-three">
            <div className="nav--language-button">
              <button className="nav--globe">
                <Globe /> English
              </button>
            </div>
          </div>
          
        </nav>
      </Col>
    </Container>
  );
}

/*
 */
