import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
// add your own image for this if you have one
import nequit from "../../Assets/Projects/nequit.png"; 

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Chatify */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal chat room/workspace built using React.js, Material UI, and Firebase. Supports real-time messaging, media sharing, and message reactions. Designed for seamless communication and collaboration."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          {/* Team Nequit Website */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nequit}
              isBlog={false}
              title="Team Nequit Official Website"
              description="Website developed for Team Nequit Electric as part of a consultancy web development project. The platform showcases the Formula Student electric vehicle team, highlighting their vision, projects, achievements, and technical capabilities with a modern, responsive UI."
              ghLink="https://github.com/Aman-Ansari27/team_nequit"
              demoLink="https://www.teamnequit.in"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;