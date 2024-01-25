import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import "./NavBar.css";

function NavBar() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" >
            <Container className='barra'>
            <Navbar.Brand href="#home" className='logo'>
            <img
                alt="Logotipo"
                src="public\img\Logo.jpg"
                width="150"
                height="100"
                className="d-inline-block align-top"
            />{' '}
            
            </Navbar.Brand>
                <Nav>
                    
                <div className='musculacion'>
                <img
                alt="Logo-musculacion"
                src="public\img\icono-mancuerna.ico"
                width="80"
                height="80"
                
            />{' '}
                    <Nav.Link href="#home">MUSCULACIÓN</Nav.Link>
                </div>
                <div className='cardio'>
                <img
                alt="Logo-cardio"
                src="public\img\icono-caminadora.ico"
                width="80"
                height="80"
                
            />{' '}
                    <Nav.Link href="#features">CARDIO</Nav.Link>
                </div>
                <div className='funcional'>
                <img
                alt="Logo-funcional"
                src="public\img\icono-cuerda.ico"
                width="80"
                height="80"
                
            />{' '}
                    <Nav.Link href="#pricing">FUNCIONAL</Nav.Link>
                </div>
                <div className='carrito'>
                <img
                alt="carrito"
                src="public\img\carrito.png"
                width="60"
                height="60"
                
            />{' '}
                </div>
                </Nav>
            </Container>
            </Navbar>
        </>
    )}

export default NavBar;