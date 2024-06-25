import React from "react";
import './About.css';
import { Container } from "react-bootstrap";
import {Fade, Slide} from "react-awesome-reveal";

function About() {
    return (
        
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <Container fluid='sm' className="text-center">
                <Fade><h2 className="about-me">About Me</h2></Fade>
                <Slide delay={90}>
                <p className="about">Python developer with 2+ years of experience in developing efficient and scalable application. Proficient in Python frameworks Flask & FastAPI, database management systems like SQL and NoSQL. Skilled in implementing RESTful APIs and integrating third party libraries. Experienced in handling big data, manipulating, modelling and preprocessing data using Python for data driven solutions. Strong problem – solving and debugging skills. Committed to continuously improving code quality and staying updated with the latest industry trends.</p>
                </Slide>
            </Container>
        </div >
    );
}

export default About;