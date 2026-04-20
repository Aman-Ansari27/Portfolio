import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
         <p style={{ textAlign: "justify" }}>
  Hi everyone! I’m <span className="purple">Aman Ansari</span>{" "}
  from <span className="purple">Ishwarpur, Maharashtra, India</span>.
  <br />
  I’m currently studying{" "}
  <span className="purple">Second Year, Computer Engineering</span> at{" "}
  <span className="purple">Rajarambapu Institute of Technology</span>.
  <br />
  I’m also an active part of the{" "}
  <span className="purple">Formula Student Club</span>, where I currently
  work as a <span className="purple">Team Coordinator</span> and contribute
  as <span className="purple">CEO in the Business Plan Domain</span>.
  <br />
  I’m passionate about building{" "}
  <span className="purple">real-world projects</span> and enjoy working on{" "}
  <span className="purple">
    software development, web applications, and embedded systems
  </span>.
  <br />
  <br />
  Outside of coding, I love engaging in activities that keep me creative
  and inspired:
</p>

<ul>
  <li className="about-activity">
    <ImPointRight /> Playing Games 🎮
  </li>
  <li className="about-activity">
    <ImPointRight /> Watching Movies 🎬
  </li>
  <li className="about-activity">
    <ImPointRight /> Traveling and Exploring New Places 🌍
  </li>
</ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Aman Ansari</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
