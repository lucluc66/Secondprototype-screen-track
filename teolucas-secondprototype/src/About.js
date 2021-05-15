import React from "react";
import "./Login.css";
import { Container, Row, Col, Button, DropdownButton, Dropdown } from "react-bootstrap";
import Track from "./Track";
import Login from "./Login";
import Tips from "./Tips";
import Contact from "./Contact";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      signin: false,
      about: true,
      track: false,
      tips: false,
      contact: false,
    };
  }

  handleHome() {
    this.setState({
      signin: true,
    });
  }

  handleTrack() {
    this.setState({
      track: true,
    });
  }

  handleTips() {
    this.setState({
      tips: true,
    });
  }

  handleContact() {
    this.setState({
      contact: true,
    });
  }

  render() {
    if (this.state.signin) {
      return (
        <div>
          <Login />
        </div>
      );
    }
    if (this.state.track) {
      return (
        <div>
          <Track />
        </div>
      );
    }
    if (this.state.tips) {
      return (
        <div>
          <Tips />
        </div>
      );
    }
    if (this.state.contact) {
      return (
        <div>
          <Contact />
        </div>
      );
    }
    return (
      <div class="body">
        {/* Buttons Icon https://www.w3schools.com/howto/howto_css_icon_buttons.asp */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <div class="row">
          <Col>
            <Button
              id="top-bar"
              variant="Home"
              onClick={() => this.handleHome()}
            >
              <i class="fa fa-home">Home</i>
            </Button>
          </Col>
          <Col>
            <DropdownButton
              id="dropd-btn"
              title={<i class="fa fa-bars">Menu</i>}
            >
              <div class="droptd-content">
                <Dropdown.Item>About us</Dropdown.Item>
              </div>
              <div class="droptd-content">
                <Dropdown.Item onClick={() => this.handleTrack()}>
                  Track
                </Dropdown.Item>
              </div>
              <div class="droptd-content">
                <Dropdown.Item onClick={() => this.handleTips()}>
                  Tips
                </Dropdown.Item>
              </div>
            </DropdownButton>
          </Col>
          <Col>
            <Button
              id="top-bar"
              variant="Contact us"
              onClick={() => this.handleContact()}
            >
              <i class="fa fa-address-book">Contact us</i>
            </Button>
          </Col>
        </div>
        <main class="form-signin">
          <h1>About us</h1>
          <h3>
            This is the beta version (we are still developing this application,
            stay tuned.)
          </h3>
          <p>
            This application would monitor screen time and keep track of the
            sites or applications used by the user. Furthermore, the application
            will send an alert to the user when their screen time exceeds a
            certain threshold that the user could set depending on the
            importance of the task. The application would also send useful tips
            to user that could reduce or relive eye strain. The application can
            also analyse the screen time of the user and give recommendation on
            time spend on different sites to improve productivity and eye
            health.
          </p>
          <p class="mt-5 mb-3">© 2021</p>
        </main>
        <div id="footer">
          <Container>
            <Row>
              <Col>
                <Dropdown.Item onClick={() => this.handleHome()}>
                  Home
                </Dropdown.Item>
              </Col>
              <Col>
                <Dropdown.Item>About</Dropdown.Item>
              </Col>
              <Col>
                <Dropdown.Item onClick={() => this.handleTrack()}>
                  Track
                </Dropdown.Item>
              </Col>
              <Col>
                <Dropdown.Item onClick={() => this.handleTips()}>
                  Tips
                </Dropdown.Item>
              </Col>
              <Col>
                <Dropdown.Item onClick={() => this.handleContact()}>
                  Contact
                </Dropdown.Item>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default About;
