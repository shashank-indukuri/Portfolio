import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Particle from "../Particle";
import ContactCard from "./ContactCard";
function Contact() {
  return (
    <Container fluid className="contact-section">
      <Particle />
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col md={4} className="contact-card">
          <ContactCard
            title="Phone"
            icon="FiPhoneCall"
            description="(513) 884-3924"
          />
        </Col>
        <Col md={4} className="contact-card">
          <ContactCard
            title="Email"
            icon="MdEmail"
            description="sinduku1@depaul.edu"
            link="mailto:sinduku1@depaul.edu"
          />
        </Col>
        <Col md={4} className="contact-card">
          <ContactCard
            title="Address"
            icon="FaAddressCard"
            description="Chicago, IL, 60610"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
