import React from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
  Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label, Card, CardBody } from 'reactstrap';
import MapContainer from "./MapComponent";

function AboutUs(){
    return(
        <>
        <nav ></nav>
         <body className = "nav-appear ">
      
        <br/>
        <br/>

        <div    className   = "modal fade" id                                             = "loginModal" >
        <div    className   = "modal-dialog" role                                         = "document">
        <div    className   = "modal-content form-signup">
        <div    className   = "modal-header text-center">
        <h3     className   = "modal-title w-100 dark-grey-text font-weight-bold my-3" id = "myModalLabel"><strong>Sign in</strong></h3>
        <button type        = "button" className                                          = "close" data-dismiss = "modal" aria-label = "Close">
        <span   aria-hidden = "true">&times;</span>
                  </button>
                </div>
                <div   className = "modal-body mx-4">
                <div   className = "mb-5">
                <input type      = "email" className = "form-control"/>
                <label for       = "loginEmail">Your email</label>
                  </div>
            
                  <div   className = " pb-3">
                  <input type      = "password"  className                                            = "form-control"/>
                  <label for       = "loginEmail">Your password</label>
                  <p     className = "font-small blue-text d-flex justify-content-end">Forgot <a href = "#" className = "blue-text ml-1">
                        Password?</a></p>
                  </div>
            
                  <div    className = "mb-3">
                  <button type      = "button" className = "btn btn-block btn-rounded z-depth-1a">Sign in</button>
                  </div>
                  <p className = "dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or Sign in
                    with: </p>
            
                  <div    className = "row my-3 d-flex justify-content-center">
                  <button type      = "button" className = "btn btn-white btn-rounded mr-md-3 z-depth-1a"><i className = "fa fa-facebook-f text-center"></i></button>
                  <button type      = "button" className = "btn btn-white btn-rounded mr-md-3 z-depth-1a"><i className = "fa fa-twitter"></i></button>
                  <button type      = "button" className = "btn btn-white btn-rounded z-depth-1a"><i className         = "fa fa-google -g"></i></button>
                  </div>
                </div>
                <div className = "modal-footer mx-5 pt-3 mb-1">
                <p   className = "font-small grey-text d-flex justify-content-end">Not a member? <a href = "#" className = "blue-text ml-1">
                      Sign Up</a></p>
                </div>
              </div>
            
            </div>
            </div> 

        <div className = "container top-margins">
        <div className = "row row-content align-items-center">
        <div className = "col">
                   <h2>About Us</h2>
                   <hr/>
        <div className = "row row-content">
        <div className = "offset-md-3 col-sm-6">
            <h3>Our Mission</h3>
                <p>There are an endless amount of meal kits catering to our needs, but until now there hasn't been an option for our best friends.
                    For those who want to treat our them a home-cooked, healthy meal; or who happen to have special needs, MealPup is here. 
                </p>
        </div>
        
    </div>  

    </div>
</div>
</div>
<MapContainer/>
</body>

        </>
    )
}

export default AboutUs;