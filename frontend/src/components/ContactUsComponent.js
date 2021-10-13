import React, {useState} from 'react';
import { Button } from 'reactstrap';
// import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
//   Button, Modal, ModalHeader, ModalBody,
//   Form, FormGroup, Input, Label, Card, CardBody } from 'reactstrap';
// import NavCom from "./NavComponent";



function ContactUs(){

    return(
        <>
        <body className = "nav-appear">
        <div  class     = "container ">
        <div  class     = "row row-content">
        <div  class     = "col-12">
          <br/>
          <br/>
                <h2>Contact Us</h2>
                <hr />
            </div>
            <div   class = "col-md-10">
            <form  class = "offset-2">
            <div   class = "form-row">
            <div   class = "form-group col-md-6">
            <label for   = "inputEmail4">Email</label>
            <input type  = "email" class = "form-control" id = "inputEmail4" placeholder = "Email"/>
                      </div>
                      <div   class = "form-group col-md-6">
                      <label for   = "inputPassword4">Password</label>
                      <input type  = "password" class = "form-control" id = "inputPassword4" placeholder = "Password"/>
                      </div>
                    </div>
                    <div class = "form-row">
                    <div class = "form-group col-md-6">
                            May we contact you?
                            <br/>
                            <div   class = "form-check form-check-inline">
                            <input type  = "radio" class      = "form-check-input" id = "contactYes" name = "contactRadios" value = "yes" />
                            <label for   = "contactYes" class = "form-check-label">Yes</label>
                            </div>
                            <div   class = "form-check form-check-inline">
                            <input type  = "radio" class     = "form-check-input" id = "contactNo" name = "contactRadios" value = "no" />
                            <label for   = "contactNo" class = "form-check-label">No</label>
                            </div>
                        </div>
                    </div>
                    <div   class = "form-row">
                    <div   class = "form-group col-md-12">
                    <label for   = "feedback" class = "col-form-label">Your Feedback</label>

                                <textarea class = "form-control" id = "feedback" name = "feedback" rows = "8"></textarea>

                                <br/>
                                <Button>Submit</Button>

                         </div>
                    <div>
                        <br/>
                        <p>Feel free to call us!</p>
                         <a   class     = "btn-link" href     = "tel:+17192662837"><i class = "fa fa-phone"></i> 1-719-266-2837</a><br />
                        </div>
                    </div>
                </form>
            </div>
       </div>
       </div>
       
</body>
        </>
    );
}

export default ContactUs;