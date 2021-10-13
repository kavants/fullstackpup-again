import React from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
  Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label, Card, CardBody } from 'reactstrap';

function ThankYou(){
    return(
        <>
        <nav ></nav>
         <body className = "nav-appear ">
      
        <br/>
        <br/>

        <div className = "container top-margins">
        <div className = "row row-content align-items-center">
        <div className = "col">
                   <h2>Thank You</h2>
                   <hr/>
        <div className = "row row-content">
        <div className = "offset-md-3 col-sm-6">
                <p>
                    Your subscription has been confirmed.
                    <br/>
                    You've been added to our list and will hear from us soon.
                </p>
        </div>
        
    </div>  

    </div>
</div>
</div>
</body>

        </>
    )
}

export default ThankYou;