// import DeleteBtn from "../components/DeleteBtn";
// import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
// import React from "react";
import Jumbotron from "../components/Jumbotron";
import { Input, Select, FormBtn } from "../components/Form";
import API from "../utils/API";
// import { MDBInput } from "mdbreact";
import React, { Component } from "react";
import { EventEmitter } from "events";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
  "mdbreact";
import { image } from "../assets/images/fritz.jpg";
import { MDBCol, MDBRow, MDBFooter } from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';


class Home extends Component {
  state = {
    email: "",
    password: "",
    modal: false,
    petName: ""

  };

  render() {
    return (
      <MDBContainer>
        <MDBCarousel 
          activeItem={1}
          length={2}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner style={{ height: "550px"}}>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://www.tiffanybolkphotography.com/wp-content/uploads/2018/08/Cat-Photography-10.jpg"
                  // src={require("../assets/images/fritz.jpg")}
                  alt="First slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption>
                <h1 className="display-1" style={{ position: 'relative', fontFamily: 'Yantramanav, sans-serif', opacity: "0.7", bottom: "200px" }}>PET ADOPT</h1>
                {/* <p>First text</p> */}
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://yuppypuppyspa.com/wp-content/uploads/2016/07/iStock_92168649_LARGE_1.jpg"
                  alt="Second slide"
                />
                <MDBMask overlay="black-strong" />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive" style={{ position: 'relative', bottom: "0px", opacity: "0.7" }}>Find Your Best Friend</h3>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
        <MDBFooter color="white" className="font-small pt-4 mt-4">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBContainer fluid>
              <a className="nav-link text-center" href="https://github.com/Jrofalk/Pet-Adopt" target="_blank"><FontAwesomeIcon icon={faGithubAlt} style={{ color: 'black', fontSize: "24px" }} /></a>
            </MDBContainer>
          </MDBContainer>
        </MDBFooter>
      </MDBContainer>
    );
  }
};

export default Home;