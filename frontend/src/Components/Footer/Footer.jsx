import React from "react";
import "./Footer.css";
import Contact from "../Contact/Contact";
import { Col, Container } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container className="footer">
          <ul className="footerElements">
            <Col>
              <li>
                <Contact />
              </li>
            </Col>
            <div className="social-network">
              <Col>
                <h4 className="RS">Social Networks</h4>
              </Col>
              <Col>
                <a
                  href="https://www.facebook.com/profile.php?id=339727919509400&ref=br_rs"
                  target="blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src="https://cdn.pixabay.com/photo/2017/06/22/06/22/facebook-2429746_960_720.png"
                    alt="facebook"
                    className="fbicon"
                  />
                </a>

                <a
                  href="https://twitter.com/bet_2_invest"
                  target="blank"
                  rel="noreferrer noopener"
                >
                  <img src="/img/wild.png" alt="wild" className="wildicon" />
                </a>
              </Col>
            </div>
          </ul>
          <Col>
            <p className="wild-code-school">
              MADE WITH
              <a
                href="https://wildcodeschool.fr/"
                target="_blank"
                rel="noreferrer noopener"
              >
                ❤
              </a>
              BY
              <a
                href="https://www.linkedin.com/in/axelle-adamkiewicz/"
                target="_blank"
                rel="noreferrer noopener"
              >
                AXELLE ADAMKIEWICZ
              </a>
              FOR THE WILD CODE SCHOOL
            </p>
          </Col>
        </Container>
      </React.Fragment>
    );
  }
}

export default Footer;
