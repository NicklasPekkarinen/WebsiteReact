import './App.css';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Tunes from './Tunes';
import { useState } from 'react'

function App() {

  const [checked, setChecked] = useState(false)
  const handleChange = () => setChecked(!checked)

  return (

    <Router>
      <div id="menu-wrap">
        <input type="checkbox" className="toggler" checked={checked} onChange={handleChange} />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  <Link to='/' onClick={handleChange}>Start</Link>
                </li>
                <li>
                  <Link to="/tunes" onClick={handleChange}>What I'm listening to</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/tunes"><Tunes /></Route>
      </Switch>
    </Router >
  );
}

export default App;
