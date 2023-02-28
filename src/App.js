
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
  
import Home from "./components/Home";

import About from "./components/About";

import Contact from "./components/Contact";

function App() {
  return (
    <>
    
    {/* <Router>
      <Routes>
        
        <Route exact path='/' element={<Home/>} />
          
        
        <Route path='/about' elements={<About/>} />
          
        
        <Route path='/contact' component={<Contact/>} />
        
      </Routes>
    </Router> */}

<Router>
      <Routes>
     
        <Route exact path='/' element={<Home/>} />
          
       
        <Route path='/about' element={<About/>} />
          
       
        <Route path='/contact' element={<Contact/>} />
       
      </Routes>
    </Router>
  </>
  );
}

export default App;
