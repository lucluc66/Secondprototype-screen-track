import React from "react";
import "./Login.css";
import {
  Container,
  Row,
  Col,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import Track from "./Track";
import Login from "./Login";
import About from "./About";
import Tips from "./Tips";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      signin: false,
      about: false,
      track: false,
      tips: false,
      contact: true,
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

  handleAbout() {
    this.setState({
      about: true,
    });
  }

  handleTips() {
    this.setState({
      tips: true,
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
    if (this.state.about) {
      return (
        <div>
          <About />
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
                <Dropdown.Item onClick={() => this.handleAbout()}>
                  About us
                </Dropdown.Item>
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
            <Button id="top-bar" variant="Contact us">
              <i class="fa fa-address-book">Contact us</i>
            </Button>
          </Col>
        </div>
        <main class="form-signin">
          <h1>Fondeded by Lucas Teo</h1>
          <h1>Email: lucasteo@umd.edu</h1>
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
                <Dropdown.Item onClick={() => this.handleAbout()}>
                  About
                </Dropdown.Item>
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
                <Dropdown.Item>Contact</Dropdown.Item>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Contact;
