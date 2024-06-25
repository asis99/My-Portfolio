import React from "react";
import { Container } from "react-bootstrap";
import { SocialIcon } from 'react-social-icons';
import Typewriter from 'typewriter-effect';
import {Zoom, Fade} from "react-awesome-reveal";
import './Home.css';




function Home() {
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <Zoom>
                <Container fluid className="text-center">
                    <h1>Asis Dash</h1>
                    <div className='role'>
                        <Typewriter
                            options={{
                                loop: true,
                                autoStart: true,
                                strings: "I'm a Developer",
                            }}
                        />
                    </div>
                    <div className='socialicons'>
                        <SocialIcon url="https://discord.com" />
                        <SocialIcon url="https://github.com" />
                        <SocialIcon url="https://linkedin.com" />
                        <SocialIcon url="mailto:example@example.com" />
                    </div>
                </Container>
            </Zoom>
        </div>
    );
}

export default Home;