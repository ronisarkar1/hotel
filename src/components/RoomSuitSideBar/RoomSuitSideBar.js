import React from "react";
import { Form, Container, Row, Col, CardGroup } from "react-bootstrap";

const RoomSuitSideBar = () => {
  return (
    <div>
      <fieldset>
        <Form.Group as={Row}>
          <Form.Label as="legend">ROOM TYPE</Form.Label>
          <Col sm={10}>
            <Form.Check type="checkbox" label="Deluxe" />
            <Form.Check type="checkbox" label="Standart" />
            <Form.Check type="checkbox" label="Stuio" />
          </Col>
          <Form.Label as="legend">ROOM RATE</Form.Label>
          <Col sm={10}>
            <Form.Check type="checkbox" label="Breakfase and dinner include" />
     
          </Col>
          <Form.Label as="legend">GUESTS</Form.Label>
          <Col sm={10}>
            <Form.Check type="checkbox" label="1" />
            <Form.Check type="checkbox" label="2" />
            <Form.Check type="checkbox" label="3" />
          </Col>
          <Form.Label as="legend">Childern</Form.Label>
          <Col sm={10}>
            <Form.Check type="checkbox" label="1" />
            <Form.Check type="checkbox" label="2" />
            <Form.Check type="checkbox" label="3" />
          </Col>
        </Form.Group>
      </fieldset>
    </div>
  );
};

export default RoomSuitSideBar;
