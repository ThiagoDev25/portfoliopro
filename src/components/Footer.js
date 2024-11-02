import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import Logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center" >
                    <MailchimpForm />
                    <Col sm={6}>
                        <img src={Logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end"> 
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/thiagoafonso-dev"><img src={navIcon1} /></a>
                            <a href="https://www.behance.net/diegodesigner5"><img src={navIcon2} /></a>
                            <a href="https://www.instagram.com/cybermarketingoficial"><img src={navIcon3} alt="Instagram"/></a>
                        </div>
                        <p>CopyRight 2024, Todos os direitos reservados </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}