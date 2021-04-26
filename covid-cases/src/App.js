import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/navBar'
import {Intro} from './components/Intro'
import {Analytics} from './components/analytics'
import {Cowin} from './components/cowin'
import {Resources} from './components/resources'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Resources/>
     
      
    </div>
  );
}

export default App;
