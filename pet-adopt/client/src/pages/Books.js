import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, Select, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    books: [],
    name: "",
  };
 
  
  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", authors: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
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
    if (this.state.title && this.state.authors) {
      API.saveBook({
        title: this.state.title,
        author: this.state.authors,
        synopsis: this.state.description
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };
//Replaced title with name
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
              <Select
              />
              <Select
              />
              <Select
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
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;