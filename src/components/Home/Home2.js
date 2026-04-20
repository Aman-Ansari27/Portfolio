import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/l.JPG";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      {/* Background decorative layers */}
      <div className="about-bg-layer">
        <div className="about-blob about-blob1"></div>
        <div className="about-blob about-blob2"></div>
        <div className="about-ring about-ring1"></div>
        <div className="about-ring about-ring2"></div>
      </div>

      <Container className="home-about-content">
        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I’m a Software Engineer passionate about building efficient, scalable, and real-world technology solutions. My journey in engineering has led me to explore both software development and embedded systems, allowing me to work on projects that combine logic, performance, and innovation.

              <br />
              <br />
              I’m skilled in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, C, C++, and Java,{" "}
                </b>
              </i>
               with practical experience in developing applications across different domains.
              <br />
              <br />
               I enjoy creating systems that are not only functional and reliable, but also designed to deliver a smooth and intuitive user experience.I have developed multiple websites and applications using modern technologies such as
              <i>
                <b className="purple">
                  {" "}
                   React.js, Tailwind CSS, and Node.js,{" "}
                </b>
              </i>
              with a strong focus on clean architecture, responsive design, and maintainable code.
              <br />
              <br />
              In addition to web and application development, I have experience working with embedded systems using
              <b className="purple">  Embedded C++, </b> where I’ve contributed to hardware-oriented engineering solutions. A major highlight of my technical work has been the design and development of a Vehicle Control Unit (VCU) for a Formula Student Electric Vehicle, giving me valuable exposure to automotive electronics, control logic, and system integration.{" "}
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              glareEnable={true}
              glareMaxOpacity={0.18}
              glareColor="#c770f0"
              glarePosition="all"
              scale={1.03}
              transitionSpeed={2000}
              className="avatar-tilt-card"
            >
              <div className="avatar-glow-wrap">
                <img src={myImg} className="img-fluid avatar-img" alt="avatar" />
              </div>
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;