import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/navBar'
import {Intro} from './components/Intro'
import {Analytics} from './components/analytics'
import {Cowin} from './components/cowin'
import {Resources} from './components/resources'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Footer} from './components/footer'

function App() {
  return (
    <div className="App">
      <Router>

      <NavBar/>
      <Route path='/' exact component={Cowin}></Route>
      <Route path='/' exact component={Intro}></Route>
      <Route path='/resources' exact component={Resources}></Route>
      <Route path='/analytics' exact component={Analytics}></Route>
      <Footer/>

      </Router>
     
      
    </div>
  );
}

export default App;
