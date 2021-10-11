import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Shashank_Indukuri_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Graduate Assistantship as a Tutor [DePaul University, Chicago]"
              date="September 2021 - Present"
              content={[
                "To assist undergraduate and graduate students in the College of Computing and Digital Media with their academic work.",
                "Students book in-person, online, or walk-in appointments, and depending on that, I need to assist them with assignments.",
                "HTML, CSS, JavaScript, Mobile App Development, and Algorithm Designing are among the key topics addressed.",
              ]}
            />
            <Resumecontent
              title="System Engineer [TATA Consultancy Services, Bangalore, India]"
              date="September 2018 - December 2020"
              content={[
                "In charge of supporting the SAPUI5 application for enhancements and bug fixes as part of the CRM sales team.",
                "Responsible to handle project management application, which included Microsoft Access and VBA.",
                "Using Conventional AI and the SAPUI5 application as a frontend, created a chatbot as a proof of concept to demonstrate a" +
                  "sales partner's data.",
              ]}
            />
            {/* <h3 className="resume-title">Extracurricular Activities</h3> */}
            <Resumecontent
              title="Trainee [TATA Consultancy Services, Gandhinagar, India]"
              date="June 2018 - September 2018"
              content={[
                "SAP ABAP training encompasses fundamental ABAP programming with standard Data Dictionary objects as well as advanced OOP techniques.",
                "Developed a Class Management tool using advanced concepts of ABAP.",
                "Aside from technical knowledge, I gained soft skills that helped me advance in the corporate sector.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="M.S in Computer Science [DePaul University, Chicago] "
              date="January 2021 - December 2022"
              content={[
                `CGPA: 4.0`,
                "Relevant Coursework: Algorithm Design, Full Stack Mobile and Web Development",
              ]}
            />
            <Resumecontent
              title="B.Tech in Information Technology [Sagi Rama Krishnam Raju Engineering College, Bhimavaram, India] "
              date="September 2014 - May 2018"
              content={[
                "CGPA: 3.62",
                "Relevant Coursework: Data Structures, Programming in C, Java, Web Technologies, Database Systems",
              ]}
            />

            {/* <h3 className="resume-title">Licenses and Certifications</h3>
            <Resumecontent
              title="Git Complete: The definitive, step-by-step guide to Git"
              content={[
                "Udemy",
              ]}
            /> 
            <Resumecontent
              title="React - The Complete Guide (incl Hooks, React Router, Redux)"
              content={[
                "Udemy",
              ]}
            /> 
            <Resumecontent
              title="Android"
              content={[
                "Hewlett Packard Enterprise",
              ]}
            />  */}

            <h3 className="resume-title">Organizations</h3>
            <Resumecontent
              title="National Society of Leadership and Success"
              content={[
                "A member of this DePaul organization that offers life-changing lectures from the nation's leading presenters and a community where like-minded, success-oriented individuals come together and help one another succeed.",
              ]}
            />
            <Resumecontent
              title="Computer Science Society"
              content={[
                "This organization is a resource that provides an opportunity for students at DePaul University to collaborate on computer science-related projects, expand their education outside the classroom, and join a network of hardworking people both in school and in the field.",
              ]}
            />
            <Resumecontent
              title="Digital Engagement Network"
              content={[
                "DEN is a one-stop-shop resource to share and learn information for virtual opportunities for students.",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
