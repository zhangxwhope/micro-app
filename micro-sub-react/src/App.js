import './App.css';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">React子应用【app1】-Home</Link>
          |
          <Link to="/about">React子应用【app1】-About</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
