import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import "./NavBar.css";
import CarWidget from '../CartWidget/CarWidget';
import { Link, NavLink } from "react-router-dom";

function NavBar() {
    return (
        <header>
            <Navbar bg="dark" data-bs-theme="dark" >
            
                <Link to="/" className='logo'>
                    <img
                    alt="Logotipo"
                    src="/img/Logo.jpg"
                    width="120"
                    height="80"
                    className="d-inline-block align-top"
                />{' '}
                </Link>

                    <Nav className='cat'>
                            <NavLink className="barra" to="/categoria/Musculación" >MUSCULACIÓN</NavLink>
                            <NavLink className="barra" to="/categoria/Cardio">CARDIO</NavLink>
                            <NavLink className="barra" to="/categoria/Funcional" >FUNCIONAL</NavLink>
                            <NavLink className="barra" to="/carrito"> <CarWidget/> </NavLink>
                            
                    </Nav>
            
            </Navbar>
        </header>
    )}

export default NavBar;