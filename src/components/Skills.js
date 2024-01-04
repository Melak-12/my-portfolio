
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/banner-bg.png"
import { ProgressBar } from 'react-bootstrap';

export const Skills = () => {

  const skills = [
    {
      tech: "React",
      persent: "98",
    }, {
      tech: "NextJs",
      persent: "85",
    }, {
      tech: "NodeJs",
      persent: "80",
    }, {
      tech: "Flutter",
      persent: "70",
    },
    {
      tech: "Laravel",
      persent: "82",
    }, {
      tech: "Figma",
      persent: "85",
    }, {
      tech: "SQL",
      persent: "78",
    }, {
      tech: "MongoDB",
      persent: "84",
    }, {
      tech: "JAVA",
      persent: "90",
    },
    {
      tech: "C++",
      persent: "95",
    }, {
      tech: "Tailwind",
      persent: "98",
    }, {
      tech: "PHP",
      persent: "80",
    },
  ]

  return (
   

    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn ">
              <h2>Skills</h2>
              <p>I am quite skilled at those technologies, mastering their intricacies and leveraging their potential to innovate and solve complex challenges efficiently.</p>
              <div className='skill-list'>

                <div className="skill-list scrollable-skills">
                  {skills.map((item, index) => (
                    <div className="skill-item" key={index}>
                      <div className="skill-row">
                        <div className="tech-label">
                          <h5 style={{ color: "#767e99" }}>{item.tech}</h5>
                        </div>
                        <div className="progress-bar">
                          <ProgressBar animated now={item.persent} striped label={`${item.persent}%`} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}
