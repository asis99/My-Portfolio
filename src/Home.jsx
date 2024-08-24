import React from "react";
import { Container } from "react-bootstrap";
import { SocialIcon } from 'react-social-icons';
import Typewriter from 'typewriter-effect';
import {Zoom, Fade} from "react-awesome-reveal";
import './style/Home.css';
import data from "../src/assets/personaldata.json"

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
                        {/* <SocialIcon url="https://discord.com" /> */}
                        <SocialIcon url={data.githubAddress} />
                        <SocialIcon url={data.linkedinurl} />
                        <SocialIcon url={data.emailaddress} />
                    </div>
                </Container>
            </Zoom>
        </div>
    );
}

export default Home;