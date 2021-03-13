import React from 'react'
import "./Main.css"
import { Link } from "react-router-dom"

import {useState, useRef} from "react"







function Main() {

    return(

    <div className="Main-body">

        <h1 className="main-title">Cloud consulting
and implementation
services</h1>
        <h4 className="main-text">Harness the power of the cloud for lower operational costs, ultimate scalability, and unparalleled performance with our all-encompassing cloud services
</h4>
<img src="https://media.istockphoto.com/vectors/blue-sky-with-white-clouds-background-border-of-clouds-simple-cartoon-vector-id1138179296?k=6&m=1138179296&s=612x612&w=0&h=DhIzmPmdkAi-L-K17qsTHGDYtTMlQzOjIeic7wki3v4=" />

<Link to="/contactform">
<button className="main-button" ><h3>Talk to our experts</h3></button>
</Link>


    
      </div>
    )
      


  




        

       
    
}

export default Main