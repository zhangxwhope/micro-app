import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter basename={window.__MICRO_APP_BASE_ROUTE__ || '/'}>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
            |
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
