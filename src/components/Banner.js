import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import me1 from "../assets/img/me1.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }


  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <a href="https://drive.google.com/file/d/1OwDJ-7Pu9B2vMMxybEnY8iuEOIxv9YaA/view?usp=sharing">
                  <span className="tagline">
                    Download CV
                    </span>
                    </a>
                  <h1>{`Hi! I'm Melaku`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Mobile App  Developer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>

                    Hello world ! I am Melaku Abebe . I am website developer . I am 5th year software engineering student at ADDIS ABABA SCEINCE AND TECHNOLOGY UNIVERSITY. My passion is on computer related things . I started computer programming since I joned to campus in 2019.</p>
                  <button onClick={()=>alert('0961295261')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                {/* will be added */}
                </div>}
              {/* <Progress  type="cirular" percent={98}/> */}

            </TrackVisibility>
          </Col>
          <Col xs={2} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={me1} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
