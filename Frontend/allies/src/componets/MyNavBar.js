import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './mynavbar.css'

const MyNavBar = () => {
    return (
        <div>

            <Navbar className='navbar sticky-top ' expand="lg">
                <Container>
                    <Col>
                        <div className="container">
                            <a className="navbar-brand" href="#">
                                <img className='logo' src=".\img\logo.png" alt="logo" width="100" height="100" ></img>
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Col>

                    <Col xs="auto" className="d-flex justify-content-end"> {/* Use d-flex and justify-content-end to move the button to the end */}
                        <Button className='btn logout'>Log out</Button>
                    </Col>
                </Container>
            </Navbar>
        </div>
    )
}

export default MyNavBar