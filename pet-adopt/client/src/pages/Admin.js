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


class Admin extends Component {
  state = {
    email: "",
    password: "",
    modal: false,

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
                name="name"
                placeholder="Client Name"
              />
              <FormBtn>
                Search by Client Name
              </FormBtn>
              <Input
                name="petName"
                placeholder="Pet Name"
              />
              <FormBtn>
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
          <Col size="md-6 sm-12">
            {/* {this.state.name}
            {this.state.choiceOne}
            {this.state.choiceTwo}
            {this.state.choiceThree}
            {this.state.userInfo} */
              // this.state.userName}
              // {this.state.password}
              // this.state.userData
            }
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
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
      </Container>
    );
  }
}

export default Admin;