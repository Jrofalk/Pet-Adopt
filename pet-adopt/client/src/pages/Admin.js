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
    userMatches: [],
    newPetName: "",
    newPetDescription: "",
    newPetImage: "",
    newPetInfo: [],
    responseOne: "",
    responseTwo: "",
    responseThree: "",
    responseFour: "",
    responseFive: "",
    responseSix: "",
    responseSeven: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidMount() {
    // this.loadPets();
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

  completeSavePet = () => {
    this.pushToNewPetInfo();
    this.toggle();

  }

  handleFormSubmitPet = () => {
    let petData = {
      name: this.state.newPetName,
      image: this.state.newPetImage,
      description: this.state.newPetDescription,
      petInfo: this.state.newPetInfo
    }
    API.savePet(petData
    )
      .then(console.log("Pet saved"));
  }

  pushToNewPetInfo = () => {
    let choices = this.state.newPetInfo;
    choices.push(this.state.responseOne);
    choices.push(this.state.responseTwo);
    choices.push(this.state.responseThree);
    choices.push(this.state.responseFour);
    choices.push(this.state.responseFive);
    choices.push(this.state.responseSix);
    choices.push(this.state.responseSeven);
    this.setState({ newPetInfo: choices })
    // console.log(this.state.userInfo);
    this.handleFormSubmitPet();
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
        <br>
        </br>
        <br>
        </br>
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
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <FormBtn
              color="white" onClick={this.toggle}>Add Pet
              </FormBtn>
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
        <MDBContainer>
          <MDBModal isOpen={this.state.modal} toggle={this.toggle} className="modal-dialog-scrollable">
            <MDBModalBody>
              <MDBInput
                onChange={this.handleInputChange}
                value={this.state.newPetName}
                name="newPetName"
                label="Name">
              </MDBInput>
              <MDBInput
                onChange={this.handleInputChange}
                value={this.state.newPetDescription}
                name="newPetDescription"
                label="Description">
              </MDBInput>
              <MDBInput
                onChange={this.handleInputChange}
                value={this.state.newPetImage}
                name="newPetImage"
                label="Image (URL)">
              </MDBInput>
              <MDBInput
                onChange={this.handleInputChange}
                value={this.state.responseOne}
                name="responseOne"
                label="Question One">
              </MDBInput>
              <MDBInput
                onChange={this.handleInputChange}
                value={this.state.responseTwo}
                name="responseTwo"
                label="Question Two">
              </MDBInput>
              <MDBInput
                onChange={this.handleInputChange}
                value={this.state.responseThree}
                name="responseThree"
                label="Question Three">
              </MDBInput>
              <MDBInput
                onChange={this.handleInputChange}
                value={this.state.responseFour}
                name="responseFour"
                label="Question Four">
              </MDBInput>
              <MDBInput
                onChange={this.handleInputChange}
                value={this.state.responseFive}
                name="responseFive"
                label="Question Five">
              </MDBInput>
              <MDBInput
                onChange={this.handleInputChange}
                value={this.state.responseSix}
                name="responseSix"
                label="Question Six">
              </MDBInput>
              <MDBInput
                onChange={this.handleInputChange}
                value={this.state.responseSeven}
                name="responseSeven"
                label="Question Seven">
              </MDBInput>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="white" onClick={this.completeSavePet}>Add</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
        <MDBFooter color="white" className="font-small pt-4 mt-4 fixed-bottom">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBContainer fluid>
              <a className="nav-link text-center" href="https://github.com/Jrofalk/Pet-Adopt" target="_blank"><FontAwesomeIcon icon={faGithubAlt} style={{ color: 'black', fontSize: "24px" }} /></a>
            </MDBContainer>
          </MDBContainer>
        </MDBFooter>
      </Container>
    );
  }
}

export default Admin;

