// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components' 
import Home from './Component/Home'
import Print from './Component/Print'
import About from './Component/About'
import Gallery from './Component/Gallery'
import ContactUs from './Component/ContactUs'
import SelectedGallery from './Component/SelectedGallery'
import Header from "./Component/Header/Header"
import SubcribePage from './Component/SubcribePage';


const Navigation = styled.div`
  display: flex;
  padding: 5px;
  justify-content: flex-end;
  width: auto;
  align-item: flex-start;
  flex-basis: 400%;
`
const NavigationContainer = styled.div`
padding: 10px;
`
const List = styled.li`
  list-style: none;
  justify-self: stretch;  
  margin: 0% 2%
`
 


 

function App() {
  return (


    <div>
    <Router >
   
    {/* <NavigationContainer>

      <nav className="routeContainer">

                  <div className="Logo">
              <Link className="App-logo" to="/"  >Daniel Francis Art</Link>
              

                  </div>
                  <Navigation>

                
                  <List>
                    <Link className="linking" to="/">Home</Link>
                    </List>

                    <List>
                    <Link className="linking" to="/gallery">Works</Link>
                    </List>

                    <List>
                    <Link className="linking" to="/about">About</Link>
                    </List>

                    <List>
                    <Link className="linking" to="/prints">Prints</Link>
                    </List>

                    <List>
                    <Link className="linking" to="/contact">Contact Us</Link>
                    </List>

                    <List>
                    <Link className="linking" to="/subscribe">Subscribe</Link>
                    </List>
                    </Navigation>
                    
      </nav>
      </NavigationContainer>       */}

      <Header/>


      <Switch>
        <Route exact path="/">
    <Home/>
        </Route>
        <Route  path="/gallery">
    <Gallery/>
        </Route>
             <Route  path="/print">
    <Print/>
        </Route>
        <Route  path="/subscribe">
      <SubcribePage/>
        </Route>
        <Route  path="/about">
    <About/>
        </Route>
        <Route  path="/contact">
    <ContactUs/>
        </Route>
        <Route path="/product/:id">
           <SelectedGallery/>
        </Route>
      </Switch>

      </Router>

    </div>
    
  );
}

export default App;
