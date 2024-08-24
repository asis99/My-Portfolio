import React from "react";
import './style/About.css';
import { Container } from "react-bootstrap";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import data from "../src/assets/personaldata.json";
import Image from 'react-bootstrap/Image';


function About() {
    return (
        <div className="about-section">
            <Container fluid='sm' className="about-container">
                <Fade>
                    <h2 className="about-title">About Me</h2>
                </Fade>

                <Zoom delay={90}>
                    <p className="about-description">{data.aboutme.aboutme}</p>
                </Zoom>

                <Slide direction="up" delay={150}>
                    <div className="about-item">
                        <div className="item-title">
                            <Image src={data.aboutme.location.image} width={25} height={25} />
                            <h3>Location</h3>
                            <p className="item-description">{data.aboutme.location.currentloc}</p>
                        </div>
                    </div>
                </Slide>

                <Slide direction="up" delay={210}>
                    <div className="about-item">
                        <div className="item-title">
                            <Image src={data.aboutme.education.image} width={25} height={25} />
                            <h3>Education</h3>
                            <p className="item-description">{data.aboutme.education.stream}</p>
                            <p className="item-description">{data.aboutme.institute}</p>
                        </div>
                    </div>
                </Slide>

                <Slide direction="up" delay={270}>
                    <div className="about-item">
                        <div className="item-title">
                            <Image src={data.aboutme.previous_employers.image} width={25} height={25} />
                            <h3>Current Employer</h3>
                            <p className="item-description">{data.aboutme.previous_employers.employer}</p>
                        </div>
                    </div>
                </Slide>
            </Container>
        </div>
    );
}

export default About;
