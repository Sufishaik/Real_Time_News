// import logo from './logo.svg';
import './App.css';
// import NavBar from './Components/NavBar.jsx'
import NavBar from './Components/Navbar';
import React, { useState} from 'react'
// import News from './components/News';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom"; //here we are importing react router for routing.


const App=()=>  {
  const pageSize=5;
  const [progress, setProgress] = useState(0) //Initializing our state variable.progress is a state variable and setProgress is a function through which we can update or change value of progress variable.
    return (         //Whatever we write in return this will consider as JSX- javascript XML.
      <>
        <Router>          {/*Here we are wrapping all components within Router to use features of routing*/}
          <NavBar />      {/* Rendering Navbar component*/}
          <LoadingBar      
        color='#f11946'   //{/*To use feature of loading bar this is syntax we have to write*/}
        height={3}
        progress={progress}
      />
         {/*Those component which are not wraaped within Routes and Route, we can't navigate between them.*/ } 
         <Routes> 
           {/* Here we are rendering and wrapping News component within Routes and Route. */}
            <Route exact path="/" element={<News setProgress={setProgress}  key="general"  pageSize={pageSize} country="in" category="general" />} />
            <Route exact path="/business" element={<News setProgress={setProgress}  key="business" pageSize={pageSize} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress}  key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
            {/* <Route exact path="/general" element={<News setProgress={setProgress}  key="general2" pageSize={pageSize} country="in" category="general" />} /> */}
            <Route exact path="/health" element={<News setProgress={setProgress}  key="health" pageSize={pageSize} country="in" category="health" />} />
            <Route exact path="/science" element={<News setProgress={setProgress}  key="science" pageSize={pageSize} country="in" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress}  key="sports" pageSize={pageSize} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress}  key="technology" pageSize={pageSize} country="in" category="technology" />} />
          </Routes>

        </Router>
      </>
    )
  }

export default App   //returning our App component.