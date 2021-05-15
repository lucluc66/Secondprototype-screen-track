import React from "react";
import "./Login.css";
import {
  Container,
  Row,
  Col,
  Button,
  DropdownButton,
  Dropdown,
  Form,
} from "react-bootstrap";
import logo from "./screentracklogo.png";
import Track from "./Track";
import About from "./About";
import Tips from "./Tips";
import Contact from "./Contact";
import NewAccount from "./NewAccount";
import Forget from "./Forget";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      signin: false,
      about: false,
      track: false,
      tips: false,
      contact: false,
      new: false,
      forgot: false,
      username: "",
      email: "",
      password: "",
      errorMessage: "Invalid email.",
    };
  }

  validateEmail(e) {
    console.log("Validate email!");
    const re = /\w+@[\w+\.\w+]+/g;
    return re.test(e);
  }

  signin() {
    console.log(this.state.email);
    console.log(this.state.username);
    console.log(this.state.password);
    if (
      this.state.username === "" ||
      this.state.email === "" ||
      this.state.password === ""
    ) {
      alert("Please complete the form.");
    } else if (this.validateEmail(this.state.email) !== true) {
      alert(this.state.errorMessage);
    } else {
      this.setState({
        track: true,
      });
    }
  }

  handleAbout() {
    this.setState({
      about: true,
    });
  }

  handleTrack() {
    if (this.state.signin === false) {
      alert("Please signin.");
    }
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

  handleNewAccount() {
    this.setState({
      new: true,
    });
  }

  handleForgot() {
    this.setState({
      forgot: true,
    });
  }

  render() {
    if (this.state.track) {
      return (
        <div>
          <Track />
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
    if (this.state.new) {
      return (
        <div>
          <NewAccount />
        </div>
      );
    }
    if (this.state.forgot) {
      return (
        <div>
          <Forget />
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
            <Button id="top-bar" variant="Home">
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
            <Button
              id="top-bar"
              variant="Contact us"
              onClick={() => this.handleContact()}
            >
              <i class="fa fa-address-book">Contact us</i>
            </Button>
          </Col>
        </div>
        <div>
          <main class="signin-form">
            <Form id="login-form">
              <img class="screentracklogo" src={logo} />
              <h1 class="mb-3">Please sign in</h1>
              <Form.Group id="forminput" controlId="formBasicUsername" required>
                <Form.Control
                  name="username"
                  type="text"
                  placeholder="Username: lucasteo"
                  onChange={(e) => this.setState({ username: e.target.value })}
                  value={this.state.username}
                />
              </Form.Group>
              <Form.Group id="forminput" controlId="formBasicEmail" required>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Email address: lucasteo@umd.edu"
                  onChange={(e) => this.setState({ email: e.target.value })}
                  value={this.state.email}
                />
              </Form.Group>
              <Form.Group id="forminput" controlId="formBasicPassword" required>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password: password"
                  onChange={(e) => this.setState({ password: e.target.value })}
                  value={this.state.password}
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Button id="login" type="submit" onClick={() => this.signin()}>
                Sign in
              </Button>
              <div>
                <Button id="newaccount" onClick={() => this.handleNewAccount()}>
                  Create new account
                </Button>
                <span class="psw">
                  Forgot{" "}
                  <Dropdown.Item onClick={() => this.handleForgot()}>
                    password?
                  </Dropdown.Item>
                </span>
              </div>
              <p class="mt-5 mb-3">© 2021</p>
            </Form>
          </main>
        </div>
        <div id="footer">
          <Container>
            <Row>
              <Col>
                <Dropdown.Item>Home</Dropdown.Item>
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

export default Login;
