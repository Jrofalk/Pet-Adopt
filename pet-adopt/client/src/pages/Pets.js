import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, Select, FormBtn } from "../components/Form";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';

class Pets extends Component {
  state = {
    pets: [],
    userInfo: [],
    name: "",
    telephone: "",
    email: "",
    password: "",
    city: "",
    address: "",
    state: "",
    zip: "",
    choiceOne: "",
    choiceTwo: "",
    choiceThree: "",
    match: "",
    // modal: false,
    text: ""

  };

  // toggle = () => {
  //   this.setState({
  //     modal: !this.state.modal
  //   });
  // }

  handleFormSubmit = () => {
    // event.preventDefault();
    let userData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      city: this.state.city,
      address: this.state.address,
      zip: this.state.zip,
      state: this.state.state,
      userInfo: this.state.userInfo,
      telephone: this.state.telephone
    }
    API.saveUser(userData
    )
      .then(console.log("User saved"));

  }

  // componentDidMount() {
  //   // this.loadPets();
  //   this.setState({
  //     modal: !this.state.modal
  //   });
  // }

  pushToUserInfo = () => {
    let choices = this.state.userInfo;
    choices.push(this.state.choiceOne);
    choices.push(this.state.choiceTwo);
    choices.push(this.state.choiceThree);
    this.setState({ userInfo: choices })
    // console.log(this.state.userInfo);
  }

  loadPets = () => {
    // event.preventDefault();
    API.getPets()
      .then(res => {
        // console.log(res)
        let match = 0;
        let minimumDifference = 50;
        let eachDiff = [];
        let pet = [];
        //  console.log(res.data.length)
        for (let i = 0; i < res.data.length; i++) {
          let totalDifference = 0;
          for (let x = 0; x < res.data[i].petInfo.length; x++) {
            //parseInt here turns string responses from user into integers
            var difference = Math.abs(parseInt(this.state.userInfo[x]) - res.data[i].petInfo[x])
            totalDifference += difference;
          }

          eachDiff.push({ totalDifference: totalDifference, name: res.data[i].name });
          //Code edited out below provides a single match
          // if (totalDifference < minimumDifference) {
          //   match = i;
          //   minimumDifference = totalDifference;
          // }
        }

        eachDiff.sort(function (a, b) { return a.totalDifference - b.totalDifference });
        console.log(eachDiff)
        // console.log(pet);
        //console.log(res.data[match]);
        this.setState({ match: res.data[match].name })
      })
      .catch(err => console.log(err));

  };

  clickFindPets = (event) => {
    event.preventDefault();
    this.loadPets();
    this.pushToUserInfo();
    this.handleFormSubmit();
  }

  // deletePet = id => {
  //   API.deletePet(id)
  //     .then(res => this.loadPets())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Name (Required)"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email"
              />
              <Input
                value={this.state.telephone}
                onChange={this.handleInputChange}
                name="telephone"
                placeholder="Telephone"
              />
              <Input
                value={this.state.address}
                onChange={this.handleInputChange}
                name="address"
                placeholder="Street Address"
              />
              <Input
                value={this.state.city}
                onChange={this.handleInputChange}
                name="city"
                placeholder="City"
              />
              <Input
                value={this.state.state}
                onChange={this.handleInputChange}
                name="state"
                placeholder="State"
              />
              <Input
                value={this.state.zip}
                onChange={this.handleInputChange}
                name="zip"
                placeholder="Zip"
              />

              <Select value={this.state.choiceOne}
                onChange={this.handleInputChange}
                name="choiceOne"
              />
              <Select value={this.state.choiceTwo}
                onChange={this.handleInputChange}
                name="choiceTwo"
              />
              <Select value={this.state.choiceThree}
                onChange={this.handleInputChange}
                name="choiceThree"
              />
              <FormBtn
                // onClick={this.handleFormSubmit}
                // onClick={this.pushToUserInfo}
                onClick={this.clickFindPets}
              >
                Find Pet
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            {/* {this.state.name}
            {this.state.choiceOne}
            {this.state.choiceTwo}
            {this.state.choiceThree}
            {this.state.userInfo} */
              this.state.match}
          </Col>
        </Row>
        {/* <MDBContainer> */}
          {/* <MDBBtn onClick={this.toggle}>Modal</MDBBtn> */}
          {/* <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalHeader toggle={this.toggle}>Welcome</MDBModalHeader>
            <MDBModalBody> */}
              {/* <MDBInput
                onChange={this.handleInputChange}
                value={this.state.name}
                name="name"
                label="Name"> */}
                {/* {this.state.name} */}
              {/* </MDBInput>
              <MDBInput
                onChange={this.handleInputChange}
                value={this.state.email}
                name="email"
                label="Email"> */}
                {/* {this.state.email} */}
              {/* </MDBInput>
              <MDBInput
                onChange={this.handleInputChange}
                value={this.state.email}
                name="email"
                label="Email"> */}
                {/* {this.state.email} */}
              {/* </MDBInput>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
              <MDBBtn color="primary" onClick={this.toggle}>Submit</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer> */}
      </Container>
    );
  }
}

export default Pets;


////SAVE ALL USER DATA INCLUDING RESPONSES FOR MATCH TO USER DATABASE
///CREATE HOMEPAGE WITH JUMBOTRON