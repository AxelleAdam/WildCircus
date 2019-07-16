import React from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarBrand,
  NavLink
} from "reactstrap";
import "./NavBar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Container>
        <Navbar color="light" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <NavbarBrand href="/" className="WCS">
              Wild Circus
            </NavbarBrand>
            <Nav className="ml-auto NavLinknav" navbar>
              <NavItem>
                <NavLink href="/activity">Activities</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/tickets">Tickets</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    );
  }
}
export default NavBar;
