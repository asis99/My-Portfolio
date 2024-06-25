import { Navbar, Container, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import './Navbar.css';


const PDFViewer = () => {
    const pdfURL = './images/Asis-Dash.pdf';
    return (
        <div className="pdf-container">
           <iframe src="./images/Asis-Dash.pdf" className="pdf-iframe" height="auto" width="100%"></iframe>
        </div>
    );
};


function NavBar() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
                <Navbar.Brand className="ml-auto"><h3>AD</h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className="navbar-nav" variant="underline">
                        <Nav.Link href="/home" className='nav-link'>Home</Nav.Link>
                        <Nav.Link href="/about" className='nav-link'>About</Nav.Link>
                        <Nav.Link href="/skills" className='nav-link'>Skills</Nav.Link>
                        <Nav.Link href="/education" className='nav-link'>Education</Nav.Link>
                        <Nav.Link href="/experience" className='nav-link'>Experience</Nav.Link>
                        <Nav.Link href="/projects" className='nav-link'>Projects</Nav.Link>
                        <Nav.Link href="/resume" className='nav-link'>Resume</Nav.Link>
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
                <Route path="/resume" element={<PDFViewer />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}
export default NavBarRouter;
