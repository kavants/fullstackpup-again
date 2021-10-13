import react from 'react';
import {  Collapse, 
    Button, Modal, } from 'reactstrap';
import Fade from 'react-reveal/Fade';


function Home(){

    return(
    <>
    <header>

        <div className = "container hero-text-box">
        <div className = "row">
        <div className = "col-4 col-sm-4 col-md-3 align-self-center">
        <a   href      = "/"><img src = "../img/logo-white.png" alt="White logo" className = "img-fluid logo" /></a>
                 </div>
                <div className = "col ">
                    <h1>MealPup<br/> Food for dogs</h1>
                    <a className = "btn btn-full" href  = "plans">Get Started!</a>
                    <a className = "btn btn-ghost" href = "about">Tell me more</a>
                </div>
            </div>
        </div>
    </header>


    <div className = "container nav-appear">
    {/* <div className = "container"> */}
    <div className = "row row-content align-items-center ">
    <div className = "col-sm-4 order-sm-last col-md-3">
                <h2>Choose your plan</h2>
            </div>
            <div className = "col">
            <div className = "media">
            <img className = "d-flex mr-3 photo" src = "./img/choose.png" alt = "food in bowl" />
            <div className = "media-body align-self-center">
            <p   className = "d-sm-block">We have a number of recipies and plans to fit your dog's specific needs and tastes!</p>
                    </div>
                </div>
            </div>
        </div>
        <div className = "row row-content align-items-center">
        <div className = "col-sm-4 col-md-3">
                <h2>Unpack your box</h2>
            </div>
            <div className = "col">
            <div className = "media">
            <img className = "d-flex mr-3 order-sm-last photo" src = "../img/unbox.png" alt = "three boxes" />
            <div className = "media-body align-self-center">
            <p   className = "d-sm-block">All of our ingriedents are meticulously portioned into travel safe packaging.</p>
                    </div>
                </div>
   			</div>
        </div>
        <div className = "row row-content align-items-center">
        <div className = "col-sm-4 order-sm-last col-md-3">
                <h2>Cook and serve!</h2>
            </div>
            <div className = "col">
            <div className = "media">
            <img className = "d-flex mr-3 photo" src = "../img/bootstrap-thumb.png" alt = "food in pan" />
            <div className = "media-body align-self-center">
            <p   className = "d-sm-block">Our recipies have simple step-by-step intrusctions with pictures along the way that will have your dog enjoying it in no time.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className = "container" id = "works">
    <div className = "row ">
    <div className = "col-md-12">
            <h2> Download Our App &mdash; Get started today!</h2>
            </div>
        </div>
        <div className = "row" >
        <div className = "col-md-6 steps-box">
        <Fade bottom>
        <img src       = "../img/iphone.png" alt = " iPhone" className = "app-screen"/>
        </Fade>
            </div>
            <div className = "col-md-6 steps-box">
            <div className = "works-step">
                    <div>1</div>
                    <p>Choose the subscription plan that best fits your needs.</p>
                </div>
                <div className = "works-step">
                    <div>2</div>
                    <p> Give us money. You will not receive anything in return.</p>
                </div>
                <div className = "works-step">
                    <div>3</div>
                    <p>There is no app, unfortunately. But there are other ways to give us money</p>
                </div>
            <div className = "row">
            <a   href      = "/sorry" className = "btn-app"><img src = "../img/download-app-android.png" alt = "Google Play Store"/></a>
            <br  className = "mobile-break"/>
            <a   href      = "/sorry" className = "btn-app"><img src = "../img/download-app.svg" alt         = "App Store"/></a>
            </div>
            </div>
        </div>
    </div>
    </>
    );
}

export default Home;