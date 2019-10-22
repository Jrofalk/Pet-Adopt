import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { MDBCol, MDBRow, MDBFooter } from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>404 Page Not Found</h1>
          </Jumbotron>
        </Col>
      </Row>
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

export default NoMatch;