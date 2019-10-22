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
import PetCards from "../components/PetCards";
import Wrapper from "../components/Wrapper";
import UserCards from "../components/UserCards";
// import ReactDOM from "react-dom";
import { MDBCol, MDBRow, MDBFooter } from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';


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

  handleDeletePet = event => {
    let id = event.target.getAttribute('data-id');
    console.log(id);
    API.deletePet(id)
      .then(window.location.reload())
    //.catch(err => console.log(err));
    console.log('Deleted Pet')
  }

  handleDeleteUser = event => {
    let id = event.target.getAttribute('data-id');
    console.log(id);
    API.deleteUser(id)
      .then(window.location.reload())
    console.log('Deleted User')
  }

  handleFindPet = event => {
    event.preventDefault();
    let name = this.state.petName
    API.getOnePet(name)
      .then(res => {
        console.log(res.data)
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
            <PetCards
              key={match.id}
              id={match.id}
              name={match.name}
              image={match.image}
              matches={this.state.matches}
              handleDeletePet={this.handleDeletePet}
            />
          ))}
        </Wrapper>
        <Wrapper>
          {this.state.userMatches.map(userMatch => (
            <UserCards
              key={userMatch.id}
              id={userMatch.id}
              name={userMatch.name}
              email={userMatch.email}
              telephone={userMatch.telephone}
              userMatches={this.state.userMatches}
              handleDeleteUser={this.handleDeleteUser}
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
        <MDBFooter color="white" className="font-small pt-4 mt-4 fixed-bottom">
          <MDBContainer fluid className="text-center text-md-left">

            <MDBContainer fluid>
            <a className="nav-link text-center" href="https://github.com/Jrofalk/Pet-Adopt" target="_blank"><FontAwesomeIcon icon={faGithubAlt} style={{ color: 'black' , fontSize: "24px"}}/></a>
            </MDBContainer>
          </MDBContainer>
        </MDBFooter>
      </Container>
    );
  }
}

export default Admin;
//CREATE Create route to create pet on admin side

//CREATE WAY TO "LOVE" PETS AND DISPLAY ON DETAILS PAGE LIKE BOOK SEARCH, THEN ALLOW ADMIN TO SEE LOVED PETS VIA SEARCH
//THIS REQUIRES SEARCH BY A SPECIFIC CRITERIA. LOOK UP HOW TO DO

//Put github icon in footer

//IMPORTANT

//Create fake login for admin side


//Create create route for a new pet on admin side (2)

//Launch on Heroku (2) DO NOT USE MERN README PER ERICS SLACK MESSAGE


