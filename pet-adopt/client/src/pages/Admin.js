// import DeleteBtn from "../components/DeleteBtn";
// import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
// import React from "react";
import Jumbotron from "../components/Jumbotron";
import { Input, Select, FormBtn } from "../components/Form";
import API from "../utils/API";
import { MDBInput } from "mdbreact";
import React, { Component } from "react";
import { EventEmitter } from "events";


class Admin extends Component {
  state = {
    email: "",
    password: ""

  };


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
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password"
              />
              <FormBtn
                // onClick={this.handleFormSubmit}
                // onClick={this.pushToUserData}
                // onClick={this.clickFindPets}

                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
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
              this.state.userData
            }
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Admin;