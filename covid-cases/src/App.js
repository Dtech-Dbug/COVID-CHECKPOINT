import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/navBar'
import {Intro} from './components/Intro'
import {Analytics} from './components/analytics'
import {Cowin} from './components/cowin'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Cowin/>
      <Intro/>
      <Analytics/>
      
    </div>
  );
}

export default App;
