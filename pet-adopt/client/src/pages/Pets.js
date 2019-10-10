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
    choiceOne: "",
    choiceTwo: "",
    choiceThree: ""
  };

  //Create JS here. Reference the responses from the user here ex. {this.state.choiceOne} via concat method, push to userInfo array.

  componentDidMount() {
    this.loadPets();
  }

  loadPets = () => {
    API.getPets()
      .then(res =>
        this.setState({ pets: res.data, title: "", authors: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deletePet = id => {
    API.deletePet(id)
      .then(res => this.loadPets())
      .catch(err => console.log(err));
  };

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
                onClick={this.handleFormSubmit}
              >
                Find Pet
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            {this.state.name}
            {this.state.choiceOne}
            {this.state.choiceTwo}
            {this.state.choiceThree}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Pets;