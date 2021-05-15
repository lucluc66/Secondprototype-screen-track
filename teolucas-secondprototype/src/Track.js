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
import demo from "./68947288-242bf100-07c6-11ea-8b08-184be2dd306a.png";
import Login from "./Login";
import About from "./About";
import Tips from "./Tips";
import Contact from "./Contact";

class Track extends React.Component {
  constructor() {
    super();
    this.state = {
      signin: false,
      about: false,
      track: true,
      tips: false,
      contact: false,
      username: "",
      email: "",
      password: "",
      errorMessage: "Invalid email.",
    };
  }

  handleHome() {
    this.setState({
      signin: true,
    });
  }

  handleContact() {
    this.setState({
      contact: true,
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
    if (this.state.contact) {
      return (
        <div>
          <Contact />
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
                <Dropdown.Item>Track</Dropdown.Item>
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
          <h1>Web activity tracking</h1>
          <h3>Under development</h3>
          <h4>Final product of this page will look somthing like this:</h4>
          <img src={demo} width="auto" height="auto" />
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
                <Dropdown.Item>Track</Dropdown.Item>
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

export default Track;
