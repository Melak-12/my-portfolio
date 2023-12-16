
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/banner-bg.png"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
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
              <p>I am quite skilled at those technologies, mastering their intricacies and leveraging their potential <br></br>to innovate and solve complex challenges efficiently.




              </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skills.map((item => (

                  <div className="item" style={{ width: 90 }}>
                    <div style={{ width: '80px', height: '80px' }}>
                      <CircularProgressbar
                        value={item.persent}
                        text={`${item.persent}%`}
                        strokeWidth={8}
                        styles={buildStyles({
                          strokeLinecap: 'butt',
                          textSize: '20px',
                          pathColor: `rgba(61, 182, 186, ${item.persent / 100})`,
                          trailColor: '#000000',
                          textColor: '#657d68',

                        })}

                      />
                    </div>
                    <h5 style={{ color: "#767e99" }}>{item.tech}</h5>
                  </div>
                )))}


              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
