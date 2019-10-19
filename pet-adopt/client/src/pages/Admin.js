// import DeleteBtn from "../components/DeleteBtn";
// import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
// import React from "react";
import Jumbotron from "../components/Jumbotron";
import { Input, Select, FormBtn } from "../components/Form";
import API from "../utils/API";
// import { MDBInput } from "mdbreact";
import React, { Component } from "react";
import { EventEmitter } from "events";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';
// import React from "react";
// import ReactDOM from "react-dom";



class Admin extends Component {
  state = {
    email: "",
    password: "",
    modal: false,
    petName: "",
    userName: ""

  };


  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidMount() {
    // this.loadPets();
    this.setState({
      modal: !this.state.modal
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    let userData = {
      email: this.state.email,
      password: this.state.password
    }
    API.saveUser(userData
    )
      .then(console.log("User saved"));

  }

  handleLogIn = event => {
    event.preventDefault();
  }

  handleFindPet = event => {
    event.preventDefault();
    let name = this.state.petName
    API.getOnePet(name)
      .then(res => {
        console.log(res.data);
      })
  }

  handleFindUser = event => {
    event.preventDefault();
    let name = this.state.userName
    API.getOneUser(name)
      .then(res => {
        console.log(res.data);
      })
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <form>
              <Input
                value={this.state.userName}
                onChange={this.handleInputChange}
                name="userName"
                placeholder="Client Name"
              />
              <FormBtn
                onClick={this.handleFindUser}>
                Search by Client Name
              </FormBtn>
              <Input
                value={this.state.petName}
                onChange={this.handleInputChange}
                name="petName"
                placeholder="Pet Name"
              />
              <FormBtn
                onClick={this.handleFindPet}>
                Search by Pet Name
              </FormBtn>
              {/* <FormBtn
                // onClick={this.handleFormSubmit}
                // onClick={this.pushToUserData}
                // onClick={this.clickFindPets}

                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn> */}
            </form>
          </Col>
        </Row>
        <MDBContainer>
          {/* <MDBBtn onClick={this.toggle}>Modal</MDBBtn> */}
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalHeader toggle={this.toggle}>Admin</MDBModalHeader>
            <MDBModalBody>
              <MDBInput
                onChange={this.handleInputChange}
                value={this.state.email}
                name="email"
                label="Email">
                {/* {this.state.name} */}
              </MDBInput>
              <MDBInput
                onChange={this.handleInputChange}
                value={this.state.password}
                name="password"
                label="Password">
                {/* {this.state.email} */}
              </MDBInput>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
              <MDBBtn color="primary" onClick={this.handleFormSubmit}>Submit</MDBBtn>
              <MDBBtn color="primary" onClick={this.handleLogIn}>Log In</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
      </Container>
    );
  }
}

export default Admin;


//WORK ON AUTHENTICATION

//THEN DELETE ROUTE FOR EACH CARD ON THIS PAGE, SET UP CARDS AS YOU DID ON PETS PAGE: MUST ADD DELETE BUTTON TO CARD COMPONENT