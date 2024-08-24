import React from "react";
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import './style/Skills.css';
import { Zoom, Fade } from "react-awesome-reveal";
import data from "../src/assets/personaldata.json"

function Skills() {
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <Container className="text-center">
                <Fade>
                    <h3>Skills</h3>
                    <p className="skill-motive">I love to learn new things and experiment with new technologies.
                        These are some of the major languages, technologies, tools and platforms I have worked with:</p>
                </Fade>
                <Zoom>
                    <Row className="justify-content-center">
                        <h2 className="w-100">Languages & Databases</h2>
                        < Col xs="auto" className="m-3">
                            <Image src={data.skills.lang_and_database.python} width={75} height={75} rounded />
                        </Col>
                        < Col xs="auto" className="m-3">
                            <Image src={data.skills.lang_and_database.rust} width={75} height={75} rounded />
                        </Col>
                        < Col xs="auto" className="m-3">
                            <Image src={data.skills.lang_and_database.js} width={75} height={75} rounded />
                        </Col>
                        < Col xs="auto" className="m-3">
                            <Image src={data.skills.lang_and_database.sql} width={75} height={75} rounded />
                        </Col>
                        < Col xs="auto" className="m-3">
                            <Image src={data.skills.lang_and_database.postgresql} width={75} height={75} rounded />
                        </Col>
                        < Col xs="auto" className="m-3">
                            <Image src={data.skills.lang_and_database.mysql} width={120} height={95} rounded />
                        </Col>
                        < Col xs="auto" className="m-3">
                            <Image src={data.skills.lang_and_database.cassandra} width={100} height={100} rounded />
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <h2 className="w-100">Frameworks & Libraries</h2>
                        < Col xs="auto" className="m-3">
                            <Image src={data.skills.frameworks_and_libraries.django} width={110} height={85} rounded />
                        </Col>
                        < Col xs="auto" className="m-3">
                            <Image src={data.skills.frameworks_and_libraries.fastapi} width={75} height={75} rounded />
                        </Col>
                        < Col xs="auto" className="m-3">
                            <Image src={data.skills.frameworks_and_libraries.flask} width={120} height={75} rounded />
                        </Col>

                        < Col xs="auto" className="m-3">
                            <Image src={data.skills.frameworks_and_libraries.scikit_learn} width={120} height={100} rounded />
                        </Col>

                        < Col xs="auto" className="m-3">
                            <Image src={data.skills.frameworks_and_libraries.tensorflow} width={120} height={75} rounded />
                        </Col>

                        < Col xs="auto" className="m-3">
                            <Image src={data.skills.frameworks_and_libraries.pytorch} width={120} height={75} rounded />
                        </Col>

                        < Col xs="auto" className="m-3">
                            <Image src={data.skills.frameworks_and_libraries.react} width={75} height={75} rounded />
                        </Col>
                        < Col xs="auto" className="m-3">
                            <Image src={data.skills.frameworks_and_libraries.spark} width={100} height={75} rounded />
                        </Col>
                        < Col xs="auto" className="m-3">
                            <Image src={data.skills.frameworks_and_libraries.pandas} width={120} height={75} rounded />
                        </Col>
                        < Col xs="auto" className="m-3">
                            <Image src={data.skills.frameworks_and_libraries.numpy} width={120} height={70} rounded />
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <h2 className="w-100">Tools & Platforms</h2>
                        < Col xs="auto" className="m-4">
                            <Image src={data.skills.tools_and_paltforms.git} width={80} height={80} rounded />
                        </Col>
                        < Col xs="auto" className="m-4">
                            <Image src={data.skills.tools_and_paltforms.docker} width={100} height={90} rounded />
                        </Col>
                        < Col xs="auto" className="m-4">
                            <Image src={data.skills.tools_and_paltforms.anaconda} width={95} height={75} rounded />
                        </Col>
                        < Col xs="auto" className="m-4">
                            <Image src={data.skills.tools_and_paltforms.node} width={100} height={95} rounded />
                        </Col>
                    </Row>
                </Zoom>
            </Container>
        </div>
    );
}

export default Skills;