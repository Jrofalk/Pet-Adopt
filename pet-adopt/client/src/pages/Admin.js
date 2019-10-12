// import DeleteBtn from "../components/DeleteBtn";
// import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import React from "react";
import Jumbotron from "../components/Jumbotron";

function Admin() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Admin</h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }


export default Admin;