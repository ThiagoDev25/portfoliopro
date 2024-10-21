import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { contactImg } from "../assets/img/";
export const Contact =  () => {
    const formInitialDetails = {
        FirstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    
    
    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}