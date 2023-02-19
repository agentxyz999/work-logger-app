import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./assets/Projects.css";

function Projects({
  personalProjects,
  workProjects,
  deletePersonalHandler,
  deleteWorkHandler,
}) {
  let personalTotalTIme = 0;
  let workTotalTIme = 0;

  personalProjects.forEach((item) => {
    personalTotalTIme += parseInt(item.duration);
  });

  workProjects.forEach((item) => {
    workTotalTIme += parseInt(item.duration);
  });

  //get personal projects from local storage
  const personalProjectsList = personalProjects
    .sort((a, b) => b.duration - a.duration)
    .map((personalProjects) => {
      return (
        <div className="personalProjContent" key={personalProjects.id}>
          <p style={{ color: "green" }}>{personalProjects.duration}</p>
          <p className="personalProjdescription">
            {personalProjects.description}
          </p>
          <svg
            onClick={() => deletePersonalHandler(personalProjects.id)}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="red"
            className="delete-btn"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
      );
    });

  //get work projects from local storage
  const workProjectsList = workProjects
    .sort((a, b) => b.duration - a.duration)
    .map((workProject) => {
      return (
        <div className="workProjContent" key={workProject.id}>
          <p style={{ color: "green" }}>{workProject.duration}</p>
          <p className="workProjdescription">{workProject.description}</p>
          <svg
            onClick={() => deleteWorkHandler(workProject.id)}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="red"
            className="delete-btn"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
      );
    });

  return (
    <Row className="all-projects-container">
      <Col xs={12} sm={12} md={12} lg={6} xl={6} className="text-center">
        <Card className="personalProjects-container " key={personalProjects.id}>
          <Card.Header className="card-header">
            <h3 className="text-left"> Personal </h3>
            <p style={{ color: "#0D6BF7", fontSize: "20px" }}>
              {personalTotalTIme} minutes
            </p>
          </Card.Header>
          <Card.Body>{personalProjectsList}</Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={12} md={12} lg={6} xl={6} className="text-center">
        <Card className="workProject-container " key={workProjects.id}>
          <Card.Header className="card-header">
            <h3> Work </h3>
            <p style={{ color: "#0D6BF7", fontSize: "20px" }}>
              {workTotalTIme} minutes
            </p>
          </Card.Header>
          <Card.Body>{workProjectsList}</Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
export default Projects;
