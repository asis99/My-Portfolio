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
                            <Image src="https://i.ibb.co/hZqNh5V/python.png" width={75} height={75} rounded />
                        </Col>
                        < Col xs="auto" className="m-4">
                            <Image src="https://i.ibb.co/ygwxNTZ/js-1.png" width={75} height={75} rounded />
                        </Col>
                        < Col xs="auto" className="m-4">
                            <Image src="https://i.ibb.co/10n3tJj/go.png" width={75} height={75} rounded />
                        </Col>
                        < Col xs="auto" className="m-4">
                            <Image src="https://i.ibb.co/jM5Q5yd/postgres.png" width={75} height={75} rounded />
                        </Col>
                        < Col xs="auto" className="m-4">
                            <Image src="https://i.ibb.co/vkYpQCX/mysql.png" width={75} height={75} rounded />
                        </Col>
                        < Col xs="auto" className="m-4">
                            <Image src="https://i.ibb.co/QfdmMVC/cassandra.png" width={120} height={75} rounded />
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <h2 className="w-100">Frameworks & Libraries</h2>
                        < Col xs="auto" className="m-4">
                            <Image src="https://i.ibb.co/hK2Js4F/Django-Python-WKe-Ixm6.png" width={90} height={85} rounded />
                        </Col>
                        < Col xs="auto" className="m-4">
                            <Image src="https://i.ibb.co/KDQwt9L/flask.png" width={75} height={75} rounded />
                        </Col>
                        < Col xs="auto" className="m-4">
                            <Image src="https://i.ibb.co/bsC2sw8/fastapi.png" width={120} height={75} rounded />
                        </Col>

                        < Col xs="auto" className="m-4">
                            <Image src="https://i.ibb.co/1r1YtXk/react.png" width={75} height={75} rounded />
                        </Col>
                        < Col xs="auto" className="m-4">
                            <Image src="https://i.ibb.co/Twbv8s7/nodejs.png" width={75} height={75} rounded />
                        </Col>
                        < Col xs="auto" className="m-4">
                            <Image src="https://i.ibb.co/wdsVfKs/pandas.png" width={120} height={75} rounded />
                        </Col>
                        < Col xs="auto" className="m-4">
                            <Image src="https://i.ibb.co/1Gq2SvG/numpy.png" width={120} height={70} rounded />
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <h2 className="w-100">Tools & Platforms</h2>
                        < Col xs="auto" className="m-4">
                            <Image src="https://i.ibb.co/7yfSCrz/git-icon.png" width={80} height={80} rounded />
                        </Col>
                        < Col xs="auto" className="m-4">
                            <Image src="https://i.ibb.co/qsbGsyC/docker.png" width={85} height={75} rounded />
                        </Col>
                        < Col xs="auto" className="m-4">
                            <Image src="https://i.ibb.co/PTzPrfk/Spark.png" width={95} height={75} rounded />
                        </Col>
                    </Row>
                </Zoom>
            </Container>
        </div>
    );
}

export default Skills;