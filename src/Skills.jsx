import React from "react";
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import './Skills.css';
import { Zoom, Fade } from "react-awesome-reveal";

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
                        < Col xs="auto" className="m-4">
                            <Image src=".\images\python.png" width={75} height={75} rounded />
                        </Col>
                        < Col xs="auto" className="m-4">
                            <Image src=".\images\js.png" width={75} height={75} rounded />
                        </Col>
                        < Col xs="auto" className="m-4">
                            <Image src=".\images\go.png" width={75} height={75} rounded />
                        </Col>
                        < Col xs="auto" className="m-4">
                            <Image src=".\images\postgres.png" width={75} height={75} rounded />
                        </Col>
                        < Col xs="auto" className="m-4">
                            <Image src=".\images\mysql.png" width={75} height={75} rounded />
                        </Col>
                        < Col xs="auto" className="m-4">
                            <Image src=".\images\cassandra.png" width={120} height={75} rounded />
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <h2 className="w-100">Frameworks & Libraries</h2>
                        < Col xs="auto" className="m-4">
                            <Image src=".\images\Django_Python_WKeIxm6.png" width={90} height={85} rounded />
                        </Col>
                        < Col xs="auto" className="m-4">
                            <Image src=".\images\flask.png" width={75} height={75} rounded />
                        </Col>
                        < Col xs="auto" className="m-4">
                            <Image src=".\images\fastapi.png" width={120} height={75} rounded />
                        </Col>

                        < Col xs="auto" className="m-4">
                            <Image src=".\images\react.png" width={75} height={75} rounded />
                        </Col>
                        < Col xs="auto" className="m-4">
                            <Image src=".\images\nodejs.png" width={75} height={75} rounded />
                        </Col>
                        < Col xs="auto" className="m-4">
                            <Image src=".\images\pandas.png" width={120} height={75} rounded />
                        </Col>
                        < Col xs="auto" className="m-4">
                            <Image src=".\images\numpy.png" width={120} height={70} rounded />
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <h2 className="w-100">Tools & Platforms</h2>
                        < Col xs="auto" className="m-4">
                            <Image src=".\images\git.png" width={75} height={75} rounded />
                        </Col>
                        < Col xs="auto" className="m-4">
                            <Image src=".\images\Docker.png" width={85} height={75} rounded />
                        </Col>
                        < Col xs="auto" className="m-4">
                            <Image src=".\images\spark.png" width={95} height={75} rounded />
                        </Col>
                    </Row>
                </Zoom>
            </Container>
        </div>
    );
}

export default Skills;