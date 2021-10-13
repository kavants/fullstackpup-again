import React from "react";
import {  Collapse, 
  Button, Card, CardBody, CardText, CardImg, CardTitle } from 'reactstrap';
// import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,
//         Button, Modal, ModalHeader, ModalBody,
//         Form, FormGroup, Input, Label, Card, CardBody } from 'reactstrap';
function Plans(){


  
    return(
        <>
         <body className = "nav-appear">
    <br/>
    <br/>

    <div class = "modal fade" id     = "loginModal" >
    <div class = "modal-dialog" role = "document">
        
          <div    class       = "modal-content form-signup">
          <div    class       = "modal-header text-center">
          <h3     class       = "modal-title w-100 dark-grey-text font-weight-bold my-3" id = "myModalLabel"><strong>Sign in</strong></h3>
          <button type        = "button" class                                              = "close" data-dismiss = "modal" aria-label = "Close">
          <span   aria-hidden = "true">&times;</span>
              </button>
            </div>
            <div   class = "modal-body mx-4">
            <div   class = "mb-5">
            <input type  = "email" class = "form-control"/>
            <label for   = "loginEmail">Your email</label>
              </div>
        
              <div   class = " pb-3">
              <input type  = "password"  class                                                = "form-control"/>
              <label for   = "loginEmail">Your password</label>
              <p     class = "font-small blue-text d-flex justify-content-end">Forgot <a href = "/sorry" class = "blue-text ml-1">
                    Password?</a></p>
              </div>
        
              <div    class = "mb-3">
              <button type  = "button" class = "btn btn-block btn-rounded z-depth-1a">Sign in</button>
              </div>
              <p class = "dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or Sign in
                with: </p>
        
              <div    class = "row my-3 d-flex justify-content-center">
              <button type  = "button" class = "btn btn-white btn-rounded mr-md-3 z-depth-1a"><i class = "fa fa-facebook-f text-center"></i></button>
              <button type  = "button" class = "btn btn-white btn-rounded mr-md-3 z-depth-1a"><i class = "fa fa-twitter"></i></button>
              <button type  = "button" class = "btn btn-white btn-rounded z-depth-1a"><i class         = "fa fa-google -g"></i></button>
              </div>
            </div>
            <div class = "modal-footer mx-5 pt-3 mb-1">
            <p   class = "font-small grey-text d-flex justify-content-end">Not a member? <a href = "/sorry" class = "blue-text ml-1">
                  Sign Up</a></p>
            </div>
          </div>
        
        </div>
        </div> 

    <div class = "container-fluid">
    <div class = "row row-content">
    <div class = "col">
               <h2>Plans</h2>
               <div class = "bkd">
               <div class = "row">
               <div class = "offset-md-2 col-md-4">
               <Card>
                      <CardImg className="card-img-top" src="./img/test1.jpg" />
                      <CardBody>
                        <CardTitle><strong><h5>Protein Basics</h5></strong></CardTitle>
                        <hr/>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </CardText>
                        <a href="/sorry" className="btn btn-plan">Go somewhere</a>
                      </CardBody>
                    </Card>
                    </div>
                    <div class = " col-md-4">
                    <Card>
                      <CardImg className="card-img-top" src="./img/test2.jpg" />
                      <CardBody>
                        <CardTitle><strong><h5>Variety Basics</h5></strong></CardTitle>
                        <hr/>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </CardText>
                        <a href="/sorry" className="btn btn-plan">Go somewhere</a>
                      </CardBody>
                    </Card>
                    </div>
                 </div>
                 <br/>
                 <div class = "row">
                 <div class = "offset-md-2 col-md-4">
                 <Card>
                      <CardImg className="card-img-top" src="./img/test3.png" />
                      <CardBody>
                        <CardTitle><strong><h5>Protein Premium</h5></strong></CardTitle>
                        <hr/>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </CardText>
                        <a href="/sorry" className="btn btn-plan">Go somewhere</a>
                      </CardBody>
                    </Card>
                    </div>
                   <div class = " col-md-4">

                    <Card>
                      <CardImg className="card-img-top" src="./img/test4.png" />
                      <CardBody>
                        <CardTitle><strong><h5>Variety Premium</h5></strong></CardTitle>
                        <hr/>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </CardText>
                        <a href="/sorry" className="btn btn-plan">Go somewhere</a>
                      </CardBody>
                    </Card>
                    </div>
                  </div>       
              </div>  
          </div>
        </div>
    </div>
  
     <div class = "section-testimonials" id = "testimonials">
     <div class = "col">
           <h2> Customer testimonials!</h2>
      </div>
    
      <div class = "row row-content">
      <div class = "col-md-2 offset-md-2">
             <blockquote>
                 I fed my dog MealPup and now he controls the weather!
                 <cite><img src = "./img/customer-1.jpg" alt="Customer 1"/>Alberto Balsalm</cite>
             </blockquote>
          </div>
          <div class = "col-md-2 offset-md-1">
             <blockquote>
                 My senior dog was super low energy before MealPup. Now he's back to playing golf and doing my taxes.
                 <cite><img src = "./img/customer-2.jpg" alt="Customer  2"/>Joana Silva</cite>
             </blockquote>
          </div>
          <div class = "col-md-2 offset-md-1">
             <blockquote>
                 The quick brown fox jumped over the lazy dog.
                 <cite><img src = "./img/customer-3.jpg" alt="customer  3"/>Jeffery Lei</cite>
             </blockquote>
          </div>
      </div>
      </div>
      <div class = "col">
           <h2> Third row to round things out</h2>
      </div>
      <div class = "row row-content">
      <div class = "col-md-3">
          <p>This is something</p>
        </div>        
        <div class = "col-md-3">
          <p>This is something else</p>
        </div>
        <div class = "col-md-3">
          <p>This is something else pt 2</p>
        </div>
        <div class = "col-md-3">
          <p>This is something else pt3</p>
        </div>
      </div>
      <div class = "section-doge">
      <div class = "col">
           <h2> Much food!</h2>
      </div>
      <div class = "row">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

      </div>
      </div>
</body>
        </>
        );
    }

export default Plans;