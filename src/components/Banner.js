import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Design", "Gestão de Tráfego", "Landing Page", "Soluções de T.I" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100); 
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length +1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }
        if (!isDeleting && updatedText  === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
         <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                {({ isVisible }) => 
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">Seja Bem-Vindo ao Portfolio CyberMarketing!</span>
                    <h1>{'Nossa Agência faz '}<span className="wrap">{text}</span></h1>
                    <p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     </p>
                    <button onClick={() => window.location.href='https://wa.me/5561993143694?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o!'}> Vamos nos Conectar! <ArrowRightCircle size={25} /></button>
                </div>} 
                </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                  <img src={headerImg} alt="Header Img" />
                </Col>
            </Row>
         </Container>

        </section>
    )
}