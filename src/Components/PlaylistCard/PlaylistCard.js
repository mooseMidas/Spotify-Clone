import "./PlaylistCard.css";
// imported bootstrap components below;
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// installed and imported bootstrap icons
import { PlayFill } from "react-bootstrap-icons";

/*
PlaylistCard component accepts props to display elements 
This component will be used in Main component  
 */

export default function PlaylistCard(props) {

  return (
    <Container fluid="md" >
      <Row>
        <Col class="col-md-2" className="playlist-col">
          <div className="playlist">
            <div className="playlist--image-container">
              <img
                src={props.img}
                className="playlist--image"
                alt={props.title}
              ></img>
              <div className="playlist--button-container">
                <PlayFill className="playlist--button" />
              </div>
            </div>
            <h3 className="playlist--title">{props.title}</h3>
            <div className="playlist-description-container">
              <span className="playlist--description">{props.descrip}</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

/*
React Course - Beginner's Tutorial for React JavaScript Library [2022], YouTube Retrieved on 01 June 2023 from https://www.youtube.com/watch?v=bMknfKXIFA8&t=14652s
*/
