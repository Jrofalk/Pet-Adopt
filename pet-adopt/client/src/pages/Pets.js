import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, Select, FormBtn } from "../components/Form";


class Pets extends Component {
  state = {
    pets: [],
    userInfo: [],
    name: "",
    city: "",
    address: "",
    state: "",
    zip: "",
    choiceOne: "",
    choiceTwo: "",
    choiceThree: "",
    match: ""
  };

  // componentDidMount() {
  //   this.loadPets();
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
        //  console.log(res.data.length)
        for (let i = 0; i < res.data.length; i++) {
          let totalDifference = 0;
          for (let x = 0; x < res.data[i].petInfo.length; x++) {
            //parseInt here turns string responses from user into integers
            var difference = Math.abs(parseInt(this.state.userInfo[x]) - res.data[i].petInfo[x])
            totalDifference += difference;
          }
          if (totalDifference < minimumDifference) {
            match = i;
            minimumDifference = totalDifference;
          }
        }
        console.log(res.data[match]);
        this.setState({ match: res.data[match].name })
      })
      .catch(err => console.log(err));

  };

  clickFindPets = (event) => {
    event.preventDefault();
    this.loadPets();
    this.pushToUserInfo();
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

  handleFormSubmit = event => {
    event.preventDefault();
    // if (this.state.title && this.state.authors) {
    //   API.savePet({
    //     title: this.state.title,
    //     author: this.state.authors,
    //     synopsis: this.state.description
    //   })
    //     .then(res => this.loadPets())
    //     .catch(err => console.log(err));
    // }
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
      </Container>
    );
  }
}

export default Pets;