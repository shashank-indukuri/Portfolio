import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Shashank Indukuri </span>
            from <span className="purple"> Chicago.</span>
            <br />I am a Graduate student pursuing Master's in Computer Science from DePaul University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games (My favourite is FIFA)
            </li>
            <li className="about-activity">
              <ImPointRight /> Professional at Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Make it work, make it right, make it fast"{" "}
          </p>
          <footer className="blockquote-footer">Kent Beck</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
