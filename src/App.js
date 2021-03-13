
import './App.css';
import Nav from "./components/Nav.js"
import Main from "./components/Main.js"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"


import Offices from "./components/Offices.js"
import Warehouses from "./components/Warehouses.js"
import Support from "./components/Support.js"
import Team from "./components/Team.js"
import Founders from "./components/Founders.js"
import Company from "./components/Company.js"
import Backdrop from "./components/Backdrop.js"
import SideDrawer from "./components/SideDrawer.js"
import Services from "./components/Services.js"
import {useState} from "react"
import contactForm from "./components/contactForm.js"


function App() {

  const [sideToggle, setSideToggle] = useState(false)

  return (
    <Router>
      <body background="https://media.istockphoto.com/vectors/blue-sky-with-white-clouds-background-border-of-clouds-simple-cartoon-vector-id1138179296?k=6&m=1138179296&s=612x612&w=0&h=DhIzmPmdkAi-L-K17qsTHGDYtTMlQzOjIeic7wki3v4=">
   

<Switch>

      <main>


      <Nav click={() => setSideToggle(true)}/>
      
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)}  />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />


    

          <Route  exact path="/">
         
      <Main />
      </Route>


      

      <Route exact path="/offices" component={Offices} />
      
      <Route exact path="/warehouses" component={Warehouses} />


      <Route exact path="/support" component={Support} />

      <Route exact path="/team" component={Team} />
      <Route exact path="/founders" component={Founders} />
      <Route exact path="/company" component={Company} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/contactform" component={contactForm} />


      </main>



   
      
          



      
      
      </Switch>

    
   
      </body>
    </Router>
  );
}

export default App;
