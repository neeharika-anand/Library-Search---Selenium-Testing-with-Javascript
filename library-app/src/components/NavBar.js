import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap";

import { useNavigate } from "react-router-dom";



const NavBar = () => {
  const navigate = useNavigate();

  return (
    <header >
        
      <h2 className="head">Library Search</h2>
        <Container>
          
          <Navbar style={{backgroundColor:'#fff'}}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
                    <Nav >
                      <Nav.Link onClick={() => navigate("/")}>
                Book Search
              </Nav.Link>
              </Nav>
                    <Nav >
                      <Nav.Link onClick={() => navigate("/profile")}>
               Profile Search
              </Nav.Link>
                      
                  
            </Nav>
            
          </Navbar.Collapse>
          </Navbar>
        </Container>
      
    </header>
  );
};

export default NavBar;