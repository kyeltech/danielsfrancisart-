import React from "react";
import { Link } from "react-router-dom";
import "./header.css"


import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function Header() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");

  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  return (
    <Navbar className={"fixed-top " + "navbar"} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand tag={Link} to="/"  id="navbar-brand">
          Daniel Francis Art
          </NavbarBrand>
          <UncontrolledTooltip placement="bottom" target="navbar-brand">
             Daniel Francis Art
          </UncontrolledTooltip>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <NavbarBrand tag={Link} to="/"  id="navbar-brand">
                Daniel Francis Art
                    </NavbarBrand>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i class="fas fa-times-circle"></i>
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>

          <NavItem>
              <NavLink tag={Link} to="/">
                Home
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/about">
              About
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/gallery">
                Works
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/print">
              Prints
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/gallery">
                Photo Gallary
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/contact">
              Contact Us
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/subscribe">
              Subscribe
              </NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
