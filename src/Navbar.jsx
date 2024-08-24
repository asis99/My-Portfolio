import { Navbar, Container, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import './style/Navbar.css';
import Image from 'react-bootstrap/Image';
import data from "../src/assets/personaldata.json"

const PDFViewer = () => {
    return (
        <div className="pdf-container">
            <iframe src={data.resumelink} className="pdf-iframe" width="640" height="480" allow="autoplay"></iframe>
        </div>
    );
};


function NavBar() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
                <Navbar.Brand className="ml-auto">
                    <Image src={data.logo} width={50} height={50} rounded />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className="navbar-nav" variant="underline">
                        <Nav.Link href="/home" className='nav-link'>Home</Nav.Link>
                        <Nav.Link href="/about" className='nav-link'>About Me</Nav.Link>
                        <Nav.Link href="/skills" className='nav-link'>Skills</Nav.Link>
                        <Nav.Link href="/projects" className='nav-link'>Projects</Nav.Link>
                        {/* <Nav.Link href="/resume" className='nav-link'>Resume</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}



function NavBarRouter() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                {/* <Route path="/resume" element={<PDFViewer />} /> */}
                <Route path="/projects" element={<Projects />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}
export default NavBarRouter;
