import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import "./style.css";

export const FormPage = () => {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="4">
                    <form>
                        <p className="h5 text-center mb-4">Sign in</p>
                        <div className="black-text">
                            <MDBInput
                                label="Your name"
                                icon="user"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                            />
                            <MDBInput
                                label="Type your password"
                                icon="lock"
                                group
                                type="password"
                                validate
                            />
                        </div>
                        <div className="text-center">
                            <MDBBtn color="white">Login</MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default FormPage;