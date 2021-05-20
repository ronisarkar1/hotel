import React from "react";
import { Form, Container, Row, Col, CardGroup,Card } from "react-bootstrap";

import RoomSuitCard from "../RoomSuitCard/RoomSuitCard";
import RoomSuitSideBar from "../RoomSuitSideBar/RoomSuitSideBar";
const RoomSuit = () => {
  // https://i.ibb.co/gtbbq4B/photo-1489171078254-c3365d6e359f-370x210.jpg
  // https://i.ibb.co/ZzQzs3N/photo-1493809842364-78817add7ffb-370x210.jpg
  // https://i.ibb.co/BPwxrzk/photo-1506664453913-f326aa81f54d-370x210.jpg
  const fakeData = [
    {
      title: "Deluxe Yellow Room",
      subTitle:
        "A spacious deluxe room which has a double bed and a single bed. Ideal for any...",
      person: 4,
      type: "king",
      area: "75m",
      imgUrl:
        "https://i.ibb.co/zJCDbP4/Fotolia-52888103-Subscription-Monthly-M-370x210.jpg",
    },
    {
      title: "Studio Broadway Room",
      subTitle:
        "Classic Rooms in the our Hotel have been refurbished to a very high standard....",
      person: 4,
      type: "king",
      area: "75m",
      imgUrl:
        "https://i.ibb.co/ZYx7ZYc/Interior-of-a-modern-hotel-apartment.jpg",
    },
    {
      title: "Deluxe King Room",
      subTitle:
        "A spacious deluxe room which has a double bed and a single bed. Ideal for any...",
      person: 4,
      type: "king",
      area: "75m",
      imgUrl:
        "https://i.ibb.co/xhRFHyb/Fotolia-163203222-Subscription-Monthly-M-370x210.jpg",
    },
    {
      title: "Standart Economic Single",
      subTitle:
        "Economy Single Room is well-furnished guest rooms 11 square meters with the m...",
      person: 4,
      type: "king",
      area: "75m",
      imgUrl:
        "https://i.ibb.co/9bgNk28/Fotolia-179700361-Subscription-Monthly-M-370x210.jpg",
    },
  ];
  return (
    <Container>
            <Card.Text className="text-center">Room and Suits</Card.Text>

      <Row>
        <Col xs={12} md={10}>
          <CardGroup>
            {fakeData.map((dt) => (
              <RoomSuitCard dt={dt}></RoomSuitCard>
            ))}
          </CardGroup>
        </Col>
        <Col xs={12} md={2}>
          <RoomSuitSideBar></RoomSuitSideBar>
        </Col>
      </Row>
    </Container>
  );
};

export default RoomSuit;
