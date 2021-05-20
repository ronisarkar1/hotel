import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faBed, faChartArea } from "@fortawesome/free-solid-svg-icons";
import { Button, Container, Row, Col, Card, Form } from "react-bootstrap";
const RoomSuitCard = (props) => {
  const { title, subTitle, area, person, type, imgUrl } = props.dt;
  return (
    <div>
      {/* <Col xs={12} md={8}> */}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={imgUrl} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {subTitle}
            </Card.Subtitle>
            <Card.Link href="#">
              <FontAwesomeIcon icon={faUsers} /> {person}
            </Card.Link>
            <Card.Link href="#">
              <FontAwesomeIcon icon={faBed} /> {type}
            </Card.Link>
            <Card.Link href="#">
              <FontAwesomeIcon icon={faChartArea} /> {area}
            </Card.Link>
          </Card.Body>
        </Card>
      {/* </Col> */}
      {/* <Col xs={6} md={4}>
      <p>dfds</p>
      <p>dfds</p>
      <p>dfds</p>
      <p>dfds</p>
      </Col> */}
    </div>
  );
};

export default RoomSuitCard;
