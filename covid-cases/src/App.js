import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/navBar'
import {Intro} from './components/Intro'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
    </div>
  );
}

export default App;
