import React from "react";
import Card from "react-bootstrap/Card";
import { FaAddressCard } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import Button from "react-bootstrap/Button";

function ContactCard(props) {
  var logo;
  var icon = props.icon;
  if (icon === "FiPhoneCall") {
      logo = <FiPhoneCall />;
  } else if (icon === "MdEmail") {
      logo = <MdEmail />;
  } else {
      logo = <FaAddressCard />
  }
  return (
    <Card className="contact-card-view">
      <Card.Body>
        {logo}
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>
        {props.link ?  
          <Button variant="primary" href={props.link} target="_blank">
            Mail To
          </Button> : ""}
      </Card.Body>
    </Card>
  );
}

export default ContactCard;
