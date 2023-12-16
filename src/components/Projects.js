import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import game from "../assets/img/game.jpg";
import foodapp from "../assets/img/foodapp.png";
import pms from "../assets/img/pms.png";
import colorSharp2 from "../assets/img/banner-bg.png";
import songapp from "../assets/img/songapp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    // {
    //   title: "Tik Tak game",
    //   description: "flutter mobile app development",
    //   imgUrl: game,
    // },
    {
      title: "Restaurant",
      description: "web app ",
      link: "https://restaurants-blond-five.vercel.app/",
      imgUrl: foodapp,
    },
    {
      title: "Project management system",
      description: "web app",
      link: "https://projectmgmtsystem.vercel.app/userTasks",
      imgUrl: pms,
    },
    {
      title: "Song App",
      description: "mern stack app",
      link: "https://songapp-ten.vercel.app/",
      imgUrl: songapp,
    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>My portfolio showcases my diverse range of web and mobile app creations, reflecting my expertise and dedication in crafting innovative digital solutions.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="section">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                               
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                         
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <div className="d-flex flex-column flex-md-row">
                          <div className="width-full">
                            <p>
                              <b>
                                Bid Management app
                              </b> <br />
                              A platform where users can sign up, log in, and access various
                              functionalities like viewing, creating, and winning bids.</p>

                          </div>
                          <div className="width-full">
                            <p>
                              <b> Ymaru online course</b><br />
                              The website that allows users to register as either a teacher or a
                              student, granting them access to our platform</p>
                          </div>

                          
                        </div>
                        
                      </Tab.Pane>


                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
