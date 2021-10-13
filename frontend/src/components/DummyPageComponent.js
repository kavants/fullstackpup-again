import React from "react";
import { Button} from 'reactstrap';
import MapContainer from "./MapComponent";
function DummyPage(){
    return(
        <>
         <body className = "nav-appear ">
      
        <br/>
        <br/>

        <div className = "container top-margins">
        <div className = "row row-content align-items-center">
        <div className = "col">
                   <h2>Sorry!</h2>
                   <hr/>
        <div className = "row row-content">
        <div className = "offset-md-2 col-sm-8">
                <p>
                This website is purely demonstrative. If you're seeing this, you clicked on a feature
             that will not be implimented. This should be limited to anything that would lead you to an actual purchase or forward you to an app.
             <br/>
             <br/>
             There is nothing to sell or an app currently in place (or planned in the foreseeable future).This page is meant to clear any confusion in case you arrived here on accident (e.g. Google lottery) or just clicking around
             to test functionality.
             <br/>
             <br/>
             Thank you for your understanding (or sorry for your disappointment if you were hoping to buy quality dog food!)
                
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

export default DummyPage;