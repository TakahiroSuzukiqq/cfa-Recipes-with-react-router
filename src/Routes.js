import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import App from './App';
import About from './About';

const Routes = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">App</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={App}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
)

export default Routes;
