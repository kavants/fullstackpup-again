import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {  Collapse, 
    Button, Modal, } from 'reactstrap';
// import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,
//         Button, Modal, ModalHeader, ModalBody,
//         Form, FormGroup, Input, Label, Card, CardBody } from 'reactstrap';
import AboutUs from './AboutUsComponent';
import ContactUs from './ContactUsComponent';
import Plans from './PlansComponent';
import Home from './HomeComponent';
import ThankYou from './ThankYouComponent';
import DummyPage from './DummyPageComponent';
import 'font-awesome/css/font-awesome.min.css';


function NavCom(){
 
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }
    
    const [collapse, setCollapse] = useState(false);
    const [status, setStatus]     = useState('Closed');
  
    const onEntering = () => setStatus('Opening...');
  
    const onEntered = () => setStatus('Opened');
  
    const onExiting = () => setStatus('Closing...');
  
    const onExited = () => setStatus('Closed');
  
    const toggle = () => setCollapse(!collapse);

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
      setActive(!isActive);
    };
    
    return(
        <>
        <div className = "modal fade" id     = "loginModal" >
<div className = "modal-dialog" role = "document">

  <div    className   = "modal-content form-signup">
  <div    className   = "modal-header text-center">
  <h3     className   = "modal-title w-100 dark-grey-text font-weight-bold my-3" id = "myModalLabel"><strong>Sign in</strong></h3>
  <Button type        = "button" className                                          = "close" data-dismiss = "modal" aria-label = "Close">
  <span   aria-hidden = "true">&times;</span>
      </Button>
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
      <Button type      = "button" className = "btn btn-block btn-rounded z-depth-1a">Sign in</Button>
      </div>
      <p className = "dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or Sign in
        with: </p>

      <div    className = "row my-3 d-flex justify-content-center">
      <Button type      = "button" className = "btn btn-white btn-rounded mr-md-3 z-depth-1a"><i className = "fa fa-facebook-f text-center"></i></Button>
      <Button type      = "button" className = "btn btn-white btn-rounded mr-md-3 z-depth-1a"><i className = "fa fa-twitter"></i></Button>
      <Button type      = "button" className = "btn btn-white btn-rounded z-depth-1a"><i className         = "fa fa-google -g"></i></Button>
      </div>
    </div>
    <div className = "modal-footer mx-5 pt-3 mb-1">
    <p   className = "font-small grey-text d-flex justify-content-end">Not a member? <a href = "#" className = "blue-text ml-1">
          Sign Up</a></p>
    </div>
  </div>

</div>
</div> 
    

     <Router>
                    <nav className = "navbar navbar-expand-sm navbar-dark">
               <div className = "container">
               <a   className = "navbar-brand " href = "/"><img src = "../img/logo.png" alt="logo" className = "logo-black " /></a>
              <Button className = "navbar-toggler "  onClick = {toggle} >
                <span   className = "navbar-toggler-icon"></span>
              </Button>
              <Collapse className="collapse navbar-collapse"
          isOpen     = {collapse}
          onEntering = {onEntering}
          onEntered  = {onEntered}
          onExiting  = {onExiting}
          onExited   = {onExited}
                     >
                <ul       className = "navbar-nav">
                <li><a href="/"><i className          = "fa fa-home fa-lg"/>    home</a></li>
                <li ><a href="/about"><i className    = "fa fa-globe fa-lg"/>    about</a></li>
                <li ><a href="/plans"><i className    = "fa fa-spoon fa-lg"/>    plans</a></li>
                <li><a href="/contactus"><i className = "fa fa-phone fa-lg"/>    Help</a></li>
                <li className = "nav-item login"  onClick  = {setModalIsOpenToTrue} ><a><i className = "fa fa-user fa-lg"/>    LOGIN</a></li>
                </ul>
                </Collapse>
        </div> 
    </nav>
    <Switch>
        <Route exact path = "/">
            <Home/>
        </Route>
        <Route path = "/contactus">
            <ContactUs/>
        </Route>
        <Route path = "/about">
            <AboutUs/>
        </Route>
        <Route path = "/plans">
            <Plans/>
        </Route>
        <Route path = "/success">
            <ThankYou/>
        </Route>
        <Route path = "/sorry">
            <DummyPage/>
        </Route>
    </Switch>
   
        </Router>         
        <Modal isOpen = {modalIsOpen}>
  <div    className   = "modal-content form-signup">
  <div    className   = "modal-header text-center">
  <h3     className   = "modal-title w-100 dark-grey-text font-weight-bold my-3" id = "myModalLabel"><strong>Sign in</strong></h3>
  <Button className   = "close" onClick = {setModalIsOpenToFalse} aria-label = "Close">
  <span   aria-hidden = "true">&times;</span>
      </Button>
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
      <Button className = "btn btn-block btn-rounded z-depth-1a">Sign in</Button>
      </div>
      <p className = "dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or Sign in
        with: </p>

      <div    className = "row my-3 d-flex justify-content-center">
      <Button className = "btn btn-white btn-rounded mr-md-3 z-depth-1a"><i className = "fa fa-facebook-f text-center"></i></Button>
      <Button className = "btn btn-white btn-rounded mr-md-3 z-depth-1a"><i className = "fa fa-twitter"></i></Button>
      <Button className = "btn btn-white btn-rounded z-depth-1a"><i className         = "fa fa-google -g"></i></Button>
      </div>
    </div>
    <div className = "modal-footer mx-5 pt-3 mb-1">
    <p   className = "font-small grey-text d-flex justify-content-end">Not a member? <a href = "#" className = "blue-text ml-1">
          Sign Up</a></p>
    </div>
  </div>
</Modal>
</> 


    );
}
export default NavCom;