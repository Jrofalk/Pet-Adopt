// import DeleteBtn from "../components/DeleteBtn";
// import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Input, Select, FormBtn } from "../components/Form";
import API from "../utils/API";
// import { MDBInput } from "mdbreact";
import React, { Component } from "react";
import { EventEmitter } from "events";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';
import Axios from "axios";
import Card from "../components/Cards";
import Wrapper from "../components/Wrapper";
// import ReactDOM from "react-dom";

class Admin extends Component {
  state = {
    email: "",
    password: "",
    modal: false,
    petName: "",
    userName: "",
    petsName: "",
    petImage: "",
    matches: [],
    userMatches: []
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

    //LogIn

    //   event.preventDefault();
    //   Axios.post('/users/login', {
    //     email: this.state.email,
    //     password: this.state.password
    //   })
    //  .then(response => {
    //    console.log(response)
    //  }
    //   )
  }

  handleFindPet = event => {
    event.preventDefault();
    let name = this.state.petName
    API.getOnePet(name)
      .then(res => {
        //console.log(res.data)
        let matches = []
        matches.push({ name: res.data.name, id: res.data._id, image: res.data.image })
        console.log(matches);
        this.setState({ matches: matches })
      })
  }

  handleFindUser = event => {
    event.preventDefault();
    let name = this.state.userName
    API.getOneUser(name)
      .then(res => {
        console.log(res.data);
        let userMatches = []
        userMatches.push({ name: res.data.name, id: res.data._id, email: res.data.email, telephone: res.data.telephone })
        this.setState({ userMatches: userMatches })
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
        <Wrapper>
          {this.state.matches.map(match => (
            <Card
              key={match.id}
              name={match.name}
              image={match.image}
            />
          ))}
        </Wrapper>
        <Wrapper>
          {this.state.userMatches.map(userMatch => (
            <Card
              key={userMatch.id}
              name={userMatch.name}
              email={userMatch.email}
              telephone={userMatch.telephone}
            />
          ))}
        </Wrapper>

        {/* <MDBContainer> */}
        {/* <MDBBtn onClick={this.toggle}>Modal</MDBBtn> */}
        {/* <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalHeader toggle={this.toggle}>Admin</MDBModalHeader>
            <MDBModalBody>
              <MDBInput
                onChange={this.handleInputChange}
                value={this.state.email}
                name="email"
                label="Email"> */}
        {/* {this.state.name} */}
        {/* </MDBInput>
              <MDBInput
                onChange={this.handleInputChange}
                value={this.state.password}
                name="password"
                label="Password"> */}
        {/* {this.state.email} */}
        {/* </MDBInput>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
              <MDBBtn color="primary" onClick={this.handleFormSubmit}>Submit</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer> */}
      </Container>
    );
  }
}

export default Admin;

//THEN DELETE ROUTE FOR EACH CARD ON THIS PAGE, SET UP CARDS AS YOU DID ON PETS PAGE: MUST ADD DELETE BUTTON TO CARD COMPONENT
//CREATE Create route to create pet on admin side


//Try changing search for one pet route so that it searches for all pets, and then only console logs if name matches search name; base off loop in pets
//This might do better job of displaying cards

//IF CANT GET THIS LOOP TO WORK, STOP FOCUSING ON ADMIN

//CREATE WAY TO "LOVE" PETS AND DISPLAY ON DETAILS PAGE LIKE BOOK SEARCH, THEN ALLOW ADMIN TO SEE LOVED PETS VIA SEARCH
//THIS REQUIRES SEARCH BY A SPECIFIC CRITERIA. LOOK UP HOW TO DO