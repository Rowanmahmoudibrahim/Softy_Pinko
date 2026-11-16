
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logo.png';

const Header = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <Navbar
                className='navbar'
                expand="lg"
                expanded={expanded}
                onToggle={setExpanded}
            >
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle
                        aria-controls="navbarScroll"
                        aria-label="Toggle navigation"
                        className="custom-toggler"
                    />

                    <Navbar.Collapse id="navbarScroll">
                        <Nav className='links'>
                            <Nav.Link href="#welcome" onClick={() => setExpanded(false)}>Home</Nav.Link>
                            <Nav.Link href="#about" onClick={() => setExpanded(false)}>About</Nav.Link>
                            <Nav.Link href="#work" onClick={() => setExpanded(false)}>Work Process</Nav.Link>
                            <Nav.Link href="#testi" onClick={() => setExpanded(false)}>Testimonials</Nav.Link>
                            <Nav.Link href="#price" onClick={() => setExpanded(false)}>Pricing Tables</Nav.Link>
                            <Nav.Link href="#blog" onClick={() => setExpanded(false)}>Blog Entries</Nav.Link>
                            <Nav.Link href="#contact" onClick={() => setExpanded(false)}>Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
