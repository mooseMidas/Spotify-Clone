import React from "react";
import "./Main.css";
import PlaylistCard from "../PlaylistCard/PlaylistCard";
//imported data arrays below
import { focus, playlist } from "../PlaylistData/PlaylistData";
import { Container, Row } from "react-bootstrap";

/*Main comp will essentially contain PlaylistCards comp
PlaylistCard component accepts props from PlaylistData file */

export default function Main() {
  const focusElements = focus.map((x) => {
    return <PlaylistCard img={x.img} title={x.title} descrip={x.descrip} />;
  });

  const playlistElements = playlist.map((x) => {
    return <PlaylistCard img={x.img} title={x.title} descrip={x.descrip} />;
  });

  return (
    <Container fluid="md" className="main--container">
      <Row>
        <div className="main--section-header">
          <h2 className="main--header">Focus</h2>
          <span className="main--link">Show all</span>
        </div>
      </Row>
      <Row>
        {/* Focus elements are returned below  */}
        <div className="main--section">{focusElements}</div>
      </Row>
      <Row>
        <div className="main--section-header">
          <h2 className="main--header">Playlists</h2>
          <span className="main--link">Show all</span>
        </div>
      </Row>
      <Row>
        {/* Playlist elements are returned below */}
        <div className="main--section">{playlistElements}</div>
      </Row>
    </Container>
  );
}
