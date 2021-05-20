import React from "react";
import { Button, Container, Row, Col, Card, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faCocktail,
  faConciergeBell,
  faSwimmer,
  faDumbbell,
  faTshirt,
  faUtensils,
  faSpa,
} from "@fortawesome/free-solid-svg-icons";
const ChooseUs = () => {
  return (
    <Container>
      <Card.Text className="text-center">Why Choose Us</Card.Text>
      <Card.Text className="text-center">
        Of is appear in face creeping and whose don’t blessed. Female our herb
        you’ll female earth second moveth.
      </Card.Text>

      <Row>
        <Col xs={4} md={3}>
          <FontAwesomeIcon icon={faWifi} />
          <br />
          INTERNET
        </Col>
        <Col xs={4} md={3}>
          <FontAwesomeIcon icon={faCocktail} />
          <br />
          DRINKS
        </Col>
        <Col xs={4} md={3}>
          <FontAwesomeIcon icon={faConciergeBell} />
          <br />
          CONCIERGE
        </Col>
        <Col xs={4} md={3}>
          <FontAwesomeIcon icon={faSwimmer} />
          <br />
          POOL
        </Col>
        <Col xs={4} md={3}>
          <FontAwesomeIcon icon={faDumbbell} />
          <br />
          FITNESS
        </Col>
        <Col xs={4} md={3}>
          <FontAwesomeIcon icon={faDumbbell} />
          <br />
          SPA
        </Col>
        <Col xs={4} md={3}>
          <FontAwesomeIcon icon={faSpa} />
          <br />
          LOUNDRY
        </Col>
        <Col xs={4} md={3}>
          <FontAwesomeIcon icon={faUtensils} />
          <br />
          RESTAURANT
        </Col>
      </Row>
    </Container>
  );
};

export default ChooseUs;
