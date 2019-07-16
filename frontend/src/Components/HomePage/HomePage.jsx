import React, { Component, Fragment } from "react";
import "./HomePage.css";
import { Container, Row, Col } from "reactstrap";

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <div className="body">
          <Container className="homePage">
            <h2 className="WildCircusWelcome">Welcome to the Wild Circus !</h2>
            <Row>
              <Col xs="6" sm="4">
                <p className="presHomepage">
                  Who said circus were only for children ? Every adult still
                  have a child's soul. Leave the responsabilities behind and be
                  a child again. Clowns, wild cats, attractions, magic,
                  fireworks, acrobats, artists, cotton candy, all the
                  ingredients for fun.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default HomePage;
