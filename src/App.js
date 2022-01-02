// import logo from './logo.svg';
import './App.css';
// import CakeContainer from './components/cakeContainer';

// Import Provider from the react-redux (Most Important step)
import { Provider } from 'react-redux'
import store from './redux/store';
import NavBar from './components/NavBar';

// React router dom
import {
  BrowserRouter as Router,
  Route,
  Routes

} from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Project from './components/pages/Project';
import Course from './Course';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer /> */}



        {/* Switching different router */}
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Course />} />
            <Route path="home" element={<Home />} />
            <Route path="plan" element={<About />} />
            <Route path="projects" element={<Project />} />
          </Routes>

        </Router>

      </div>
    </Provider>
  );
}

export default App;
