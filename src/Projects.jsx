import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";
import "./style/Projects.css";
// import { Zoom } from "react-awesome-reveal";
import Image from 'react-bootstrap/Image';
import data from "../src/assets/personaldata.json"


function Projects() {
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <Container>
                {/* <h3 className="d-flex justify-content-center align-items-center fs-35">Projects</h3> */}
                <br />
                <div className="row">
                    {
                        data.projects.map((elements) => (

                            <div className="col-lg-4 col-md-4 mb-4">
                                {/* <Zoom delay={90}> */}
                                <Card className="h-100" style={{ borderColor: '#191C1A' }}>
                                    <Card.Img variant="top" src={elements.projectImage} />
                                    <Card.Body className="d-flex flex-column" style={{ backgroundColor: '#191C1A', color: 'white' }}>
                                        <Card.Title className="card-title-inline">
                                            <Card.Title className="card-title-inline">
                                                <h4>{elements.projectName}</h4>
                                                <div className="tooltip-container">
                                                    <Image src={data.infoicon} width={17} height={17} round className="info-icon" />
                                                    <span className="tooltip-text" style={{ textAlign: 'left' }}>
                                                        <ul>
                                                            <li>{elements.abutProject}</li>
                                                        </ul>
                                                    </span>
                                                </div>
                                            </Card.Title>
                                        </Card.Title>
                                        <Button onClick={() => window.location.href = elements.projectLink} className="mt-auto" variant="primary">Visit project</Button>
                                    </Card.Body>
                                </Card>
                                {/* </Zoom> */}
                            </div>

                        ))
                    }
                </div>
            </Container>
        </div>
    );
}



// function Projects() {
//     return (
//         <div className="d-flex justify-content-center align-items-center min-vh-100">
//             <Container>
//                 <h3>Projects</h3>
//                 <br />
//                 <div className="row">
//                     <div className="col-lg-4 col-md-4 mb-4">
//                         <Zoom delay={90}>
//                             <Card className="h-100" style={{ borderColor: '#191C1A' }}>
//                                 <Card.Img variant="top" src="https://raw.githubusercontent.com/asis99/git-images/main/portfolio.jpg" />
//                                 <Card.Body className="d-flex flex-column" style={{ backgroundColor: '#191C1A', color: 'white' }}>
//                                     <Card.Title className="card-title-inline">
//                                         <Card.Title className="card-title-inline">
//                                             <h4>Portfolio Project</h4>
//                                             <div className="tooltip-container">
//                                                 <Image src="./src/assets/info-circle-svgrepo-com.svg" width={17} height={17} round className="info-icon" />
//                                                 <span className="tooltip-text" style={{ textAlign: 'left' }}>
//                                                     <ul>
//                                                         <li>Developer Portfolio Website made in React & Boot-Strap.</li>
//                                                         <li>Fully customisable and dynamic, easily change data, renders images & easy navigation.</li>
//                                                     </ul>
//                                                 </span>
//                                             </div>
//                                         </Card.Title>
//                                     </Card.Title>
//                                     {/* <br /> */}
//                                     <Card.Text style={{ textAlign: 'left' }}>
//                                         {/* <ul>
//                                             <li>Developer Portfolio Website made in React & Boot-Strap.</li>
//                                             <li>Fully customisable and dynamic, easily change data, renders images & easy navigation.</li>
//                                         </ul> */}
//                                     </Card.Text>
//                                     <Button className="mt-auto" variant="primary">Visit project</Button>
//                                 </Card.Body>
//                             </Card>
//                         </Zoom>
//                     </div>
//                     <div className="col-lg-4 col-md-4 mb-4">
//                         <Zoom delay={90}>
//                             <Card className="h-100" style={{ borderColor: '#191C1A' }}>
//                                 <Card.Img variant="top" src="https://raw.githubusercontent.com/asis99/git-images/main/pokemon.jpg" />
//                                 <Card.Body className="d-flex flex-column" style={{ backgroundColor: '#191C1A', color: 'white' }}>
//                                     <Card.Title><h4>Pokedex</h4></Card.Title>
//                                     {/* <br /> */}
//                                     <Card.Text style={{ textAlign: 'left' }}>
//                                         {/* <ul>
//                                             <li>Pokedex to search any poekemon. To know all about their special moves and power.</li>
//                                             <li>Fully Responsive made with JS, HTML, CSS, used poekmon API to collect data for all Pokemons.</li>
//                                         </ul> */}
//                                     </Card.Text>
//                                     <Button className="mt-auto" variant="primary" onClick={() => window.location.href = "https://pokedex-sigma-flame.vercel.app/"}>Visit Project</Button>
//                                 </Card.Body>
//                             </Card>
//                         </Zoom>
//                     </div>
//                     <div className="col-lg-4 col-md-4 mb-4">
//                         <Zoom delay={90}>
//                             <Card className="h-100" style={{ borderColor: '#191C1A' }}>
//                                 <Card.Img variant="top" src="./src/assets/cat-and-dog.jpg" />
//                                 <Card.Body className="d-flex flex-column" style={{ backgroundColor: '#191C1A', color: 'white' }}>
//                                     <Card.Title><h4>Cat & Dog Classifier</h4></Card.Title>
//                                     {/* <br /> */}
//                                     <Card.Text>
//                                         {/* <ul>
//                                             <li>Implmented custom model using CNN to classify the image of Dog & Cat</li>
//                                             <li>Trained on multicore GPU's, used TenssorFlow to develop the Neural networks</li>
//                                             <li>Built the UI to make my model available to the public using Stramlit.</li>
//                                         </ul> */}
//                                     </Card.Text>
//                                     <Button className="mt-auto" variant="primary" onClick={() => window.location.href = "https://custom-cat-dog-mode.streamlit.app/"}>Visit Project</Button>
//                                 </Card.Body>
//                             </Card>
//                         </Zoom>
//                     </div>
//                     <div className="col-lg-4 col-md-4 mb-4">
//                         <Zoom delay={90}>
//                             <Card className="h-100" style={{ textAlign: 'center', borderColor: '#191C1A' }}>
//                                 <Card.Img variant="top" src="./src/assets/development.svg" />
//                                 <Card.Body className="d-flex flex-column" style={{ backgroundColor: '#191C1A', color: 'white' }}>
//                                     <Card.Title><h4>Card Title</h4></Card.Title>
//                                     <br />
//                                     <Card.Text>
//                                         Some quick example text to build on the card title and make up the
//                                         bulk of the card's content.Save your favorite articles to read offline, sync your reading lists across devices and customize your reading experience with the official Wikipedia app.
//                                     </Card.Text>
//                                     <Button className="mt-auto" variant="primary">Go somewhere</Button>
//                                 </Card.Body>
//                             </Card>
//                         </Zoom>
//                     </div>
//                     <div className="col-lg-4 col-md-4 mb-4">
//                         <Zoom delay={90}>
//                             <Card className="h-100" style={{ textAlign: 'center', borderColor: '#191C1A' }}>
//                                 <Card.Img variant="top" src="./src/assets/development.svg" />
//                                 <Card.Body style={{ backgroundColor: '#191C1A', color: 'white' }}>
//                                     <Card.Title><h4>Card Title</h4></Card.Title>
//                                     <br />
//                                     <Card.Text>
//                                         Some quick example text to build on the card title and make up the
//                                         bulk of the card's content.Save your favorite articles to read offline, sync your reading lists across devices and customize your reading experience with the official Wikipedia app.
//                                     </Card.Text>
//                                     <Button variant="primary">Go somewhere</Button>
//                                 </Card.Body>
//                             </Card>
//                         </Zoom>
//                     </div>
//                     <div className="col-lg-4 col-md-4 mb-4">
//                         <Zoom delay={90}>
//                             <Card className="h-100" style={{ textAlign: 'center', borderColor: '#191C1A' }}>
//                                 <Card.Img variant="top" src="./src/assets/development.svg" />
//                                 <Card.Body style={{ backgroundColor: '#191C1A', color: 'white' }}>
//                                     <Card.Title><h4>Card Title</h4></Card.Title>
//                                     <br />
//                                     <Card.Text>
//                                         Some quick example text to build on the card title and make up the
//                                         bulk of the card's content.Save your favorite articles to read offline, sync your reading lists across devices and customize your reading experience with the official Wikipedia app.
//                                     </Card.Text>
//                                     <Button variant="primary">Go somewhere</Button>
//                                 </Card.Body>
//                             </Card>
//                         </Zoom>
//                     </div>
//                 </div>
//             </Container>
//         </div>
//     );
// }
export default Projects;