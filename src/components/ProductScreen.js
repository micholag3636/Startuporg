import React from 'react'
import "./Productscreen.css"

function Productscreen(props) {
    return (
        <div   className="Service">
            <div>


               

            <h1 id="services-title">Amazon Web Services</h1>
            <img   className="img-service" src={props.img}/>
            
          
         
                 <div className="overlay">
        
              <p className="text">{props.text}</p>

            </div>

            </div>
            

            
        </div>
    )
}

export default Productscreen
