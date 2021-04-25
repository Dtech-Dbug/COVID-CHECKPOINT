import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/navBar'
import {Intro} from './components/Intro'
import {Analytics} from './components/analytics'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Analytics/>
      
    </div>
  );
}

export default App;
