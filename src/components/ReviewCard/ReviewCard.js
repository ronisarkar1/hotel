import React from 'react';
import { Button, Container, Row, Col, Card, Form } from "react-bootstrap";

const ReviewCard = (props) => {
  const {title,text} = props.fd
console.log(title);
    return (
        <Col xs={6} md={4}>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
{text}            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default ReviewCard;