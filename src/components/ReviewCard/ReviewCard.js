import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  Form,
  Image,
  Badge,
} from "react-bootstrap";
import "./ReviewCard.css";
const ReviewCard = (props) => {
  const { title, text } = props.fd;
  return (
    <Col xs={6} md={4}>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text} </Card.Text>
        </Card.Body>
        <Row className='reviewUser'>
          <Col sm={6}>
          <Image
          className='reviewImg'
            src="https://i.ibb.co/gtbbq4B/photo-1489171078254-c3365d6e359f-370x210.jpg"
            roundedCircle
          />
          </Col>
          <Col sm={6}>
        <h4>Swapno </h4>
          </Col>
        </Row>
        {/* <div className="reviewImg">
          <Image
            src="https://i.ibb.co/gtbbq4B/photo-1489171078254-c3365d6e359f-370x210.jpg"
            roundedCircle
          />
          <Badge pill variant="primary">
            Primary
          </Badge>{" "}
        </div> */}
      </Card>
    </Col>
  );
};

export default ReviewCard;
