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

class Home extends Component {
  state = {
    email: "",
    password: "",
    modal: false,
    petName: ""

  };

  render() {
    return (
        <MDBCarousel
          activeItem={1}
          length={2}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                  alt="First slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption>
                <h1 className="display-1" style={{position:'relative', bottom: "200px"}}>PET ADOPT</h1>
                {/* <p>First text</p> */}
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  // className="d-block w-100"
                  // src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                  // alt="Second slide"
                />
                <MDBMask overlay="black-strong" />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive">Strong mask</h3>
                <p>Second text</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
    );
  }
};

export default Home;