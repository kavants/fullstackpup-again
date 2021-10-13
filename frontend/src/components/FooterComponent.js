import React from "react";

function Footer(){
    return(
            

<footer>
    <div class = "container align-items-center">
    <div class = "row row-content">
    <div class = "col-12">
    <h2  class = "test">Stay up to date!</h2>
                <hr />
            </div>
            <div    class = "offset-md-4 col-md-8">
            <div    class = "col-md-8 flex">
                
            <form action="/" method="POST" class="form-inline" >

            <input  type  = "email" class   = "form-control" id = "email" name = "email" placeholder = "Email Address" />
            <button type  = "submit" class = "btn btn2" >Submit</button>
            </form>
                    </div>  
             </div>
        </div>
        <div   class = "row">
        <div   class = "col col-6">
        <ul    class = "footer-nav">
        <li><a href  = "about">About us</a></li>
        <li><a href  = "plans">Plans</a></li>
        <li><a href  = "contactus">Help</a></li>
        <li><a href  = "/sorry">iOS App</a></li>
        <li><a href  = "/sorry">Android App</a></li>
                </ul>
            </div>
            <div   class = "col col-6">
            <ul    class = "social-links">
            <li><a href  = "https://www.linkedin.com/in/kyle-avants-63520a104/"><i class = "fa fa-facebook-f"></i></a></li>
            <li><a href  = "https://www.linkedin.com/in/kyle-avants-63520a104/"><i class = "fa fa-twitter"></i></a></li>
            <li><a href  = "https://www.linkedin.com/in/kyle-avants-63520a104/"><i class = "fa fa-instagram"></i></a></li>
            <li><a href  = "https://www.linkedin.com/in/kyle-avants-63520a104/"><i class = "fa fa-google-plus"></i></a></li>

                </ul>
            </div>
        </div>
        <div class = "row">
            <p>
                Copyright &copy; 2021 by Kyle. All rights reserved.
            </p>
        </div>
        </div>
    </footer>
    );
}
export default Footer;