import React from "react";
import './Footer.css'
import { Button, Container, Row, Col, Card,Form } from "react-bootstrap";
const Footer = () => {
  return (
    <div className='footer'>
      <Container >
        <Row>
          <Col className='footerCol' xs={6} md={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Hotello</Card.Title>
                <Card.Text>
                  We always strive for growth and development as StylemixThemes.
                  We don’t want to have a large team, we want to have a team
                  that works in unity. Our slogan is “Every day is the last
                  day”.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className='footerCol' xs={6} md={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Hotello</Card.Title>
                <Card.Text>
                  We always strive for growth and development as StylemixThemes.
                  We don’t want to have a large team, we want to have a team
                  that works in unity. Our slogan is “Every day is the last
                  day”.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className='footerCol' xs={6} md={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>CONTACT US</Card.Title>
                <Card.Text>
                  1010 Berkler avenue, Brooklyn, New York City, NY 10018 US
                </Card.Text>
                <Card.Text>
                  Tel.: +1 998 150 3020 <br /> Fax.: +1 998 150 3020
                </Card.Text>
                <Card.Text>info@stylemixthemes.com</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className='footerCol' xs={6} md={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>STAY IN TOUCH</Card.Title>
                <Form>
                  <Row>
                    <Col>
                      <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                    <button>></button>
                    </Col>
                  </Row>
                </Form>
                <Card.Text>
                  Enter your email address for promotions and news.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
