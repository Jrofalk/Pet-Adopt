import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, SelectOne, SelectTwo, SelectThree, SelectFour, SelectFive, SelectSix, FormBtn } from "../components/Form";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';
import MatchCard from "../components/MatchCard";
import Wrapper from "../components/Wrapper";
import Jumbotron from "../components/Jumbotron";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from
  "mdbreact";
import { MDBCol, MDBRow, MDBFooter } from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

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
    choiceFour: "",
    choiceFive: "",
    choiceSix: "",
    choiceSeven: "",
    matches: [],
    text: ""

  };


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


  pushToUserInfo = () => {
    let choices = this.state.userInfo;
    choices.push(this.state.choiceOne);
    choices.push(this.state.choiceTwo);
    choices.push(this.state.choiceThree);
    choices.push(this.state.choiceFour);
    choices.push(this.state.choiceFive);
    choices.push(this.state.choiceSix);
    choices.push(this.state.choiceSeven);
    this.setState({ userInfo: choices })
    // console.log(this.state.userInfo);
  }

  loadPets = () => {

    API.getPets()
      .then(res => {
        // console.log(res)
        //Code commented out below involves finding a single match
        // let match = 0;
        // let minimumDifference = 50;
        let eachDiff = [];
        //  console.log(res.data.length)
        for (let i = 0; i < res.data.length; i++) {
          let totalDifference = 0;
          for (let x = 0; x < res.data[i].petInfo.length; x++) {
            //parseInt here turns string responses from user into integers
            var difference = Math.abs(parseInt(this.state.userInfo[x]) - res.data[i].petInfo[x])
            totalDifference += difference;
          }
          eachDiff.push({ totalDifference: totalDifference, id: res.data[i]._id, name: res.data[i].name, image: res.data[i].image, description: res.data[i].description  });
          //Code commented out below provides a single match
          // if (totalDifference < minimumDifference) {
          //   match = i;
          //   minimumDifference = totalDifference;
          // }
        }
        //Sorts each pet by totalDifference in ascending order
        eachDiff.sort(function (a, b) { return a.totalDifference - b.totalDifference });
        //console.log(eachDiff)
        let matches = eachDiff
        console.log(matches)
        //Pushes matches array into matches array in state
        this.setState({ matches: matches })
        //Code commented out below displays single match
        // this.setState({ match: res.data[match].name })
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
        <MDBView>
          <img style={{ height: "550px" }, { width: '1000px' }}
            className="d-block w-100"
            src="https://static01.nyt.com/images/2018/09/01/science/01TB-CATS/01TB-CATS-facebookJumbo.jpg"
            alt="First slide"
          />
          <MDBMask overlay="black-light" />
        </MDBView>
        <MDBCarouselCaption style={{ top: "675px" }}>
          <h3 className="h3-responsive" style={{ fontSize: "24px", fontFamily: 'Yantramanav, sans-serif', opacity: "0.7" }}>Make A Meaningful Connection</h3>
        </MDBCarouselCaption>
        <br>
        </br>
        <br>
        </br>
        <Row>
          <Col size="md-4">
            <h3 className="text-center" style={{ fontSize: "24px", fontFamily: 'Yantramanav, sans-serif' }}>Subscribe</h3>
            <br>
            </br>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Name (Required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password"
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
            </form>
          </Col>
        </Row>
        <br>
        </br>
        <Row>
          <Col size='md-4'>
            <h3 className="text-center" style={{ transform: "rotate(-10deg)", fontSize: "24px", fontFamily: 'Yantramanav, sans-serif' }}>Search</h3>
          </Col>
        </Row>
        <br>
        </br>
        <Row>
          <Col size='md-4'>
            <form>
              <label>How many hours per day can you dedicate to your pet?</label>
              <SelectOne value={this.state.choiceOne}
                onChange={this.handleInputChange}
                name="choiceOne"
              />
              <label>How many pets (cats/dogs) currently reside within your household?</label>
              <SelectTwo value={this.state.choiceTwo}
                onChange={this.handleInputChange}
                name="choiceTwo"
              />
              <label>If there is another pet present in your household, are they a dog or cat?</label>
              <SelectFour value={this.state.choiceFive}
                onChange={this.handleInputChange}
                name="choiceFive"
              />

              <label>How many children currently reside in your home?</label>
              <SelectTwo value={this.state.choiceThree}
                onChange={this.handleInputChange}
                name="choiceThree"
              />
            </form>
          </Col>
          <Col size='md-4'>
            <form>
              <label>Would you be willing to care for a pet with special medical needs? (Administering medication, etc.)</label>
              <SelectThree value={this.state.choiceFour}
                onChange={this.handleInputChange}
                name="choiceFour"
              />
              <label>Would you be willing to commit to at least one long walk a day?</label>
              <SelectFive value={this.state.choiceSix}
                onChange={this.handleInputChange}
                name="choiceSix"
              />
              <label>How would you describe the relative size of your living space?</label>
              <SelectSix value={this.state.choiceSeven}
                onChange={this.handleInputChange}
                name="choiceSeven"
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
        </Row>
        <Wrapper>
          {this.state.matches.map(match => (
            <MatchCard
              key={match.id}
              name={match.name}
              image={match.image}
              description={match.description}

            />
          ))}
        </Wrapper>
        <MDBFooter color="white" className="font-small pt-4 mt-4">
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

export default Pets;

