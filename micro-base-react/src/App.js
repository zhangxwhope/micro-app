import './App.css';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">基座应用-Home</Link>
          |
          <Link to="/sub-app/">基座应用-SubApp</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
