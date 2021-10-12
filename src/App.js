
import './App.css';
import {Container,Nav,Navbar} from 'react-bootstrap'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Contact from './components/Contact';
import Navbar1 from './components/Navbar1';
import Home from './components/Home';

// import Header1 from './components/Header';
// import Features from './components/Features';
// import Featureditems from './components/Featureditems';
// import Hotdeals from './components/Hotdeals';
// import Instagram from './components/Instagram';
// import Topitems from './components/Topitems';
// import Bottom from './components/Bottom';
// import Butt from './components/Butt';
// import Footer from './components/Footer';
function App() {
  return (
    
    <>
    
    <Router>
      <Switch>
      <Route path="/" exact component={Home } />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
