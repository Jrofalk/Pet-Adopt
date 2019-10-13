// import DeleteBtn from "../components/DeleteBtn";
// import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import React from "react";
import Jumbotron from "../components/Jumbotron";
import { FormPage } from "../components/Login";

function Admin() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <FormPage>
          </FormPage>
        </Col>
      </Row>
    </Container>
  );
}


export default Admin;