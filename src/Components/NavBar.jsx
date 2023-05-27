import React , {useEffect} from 'react'
import {Link,useLocation} from "react-router-dom";
import '../App.css'; //importing css file

 const NavBar=()=> {               //This is navbar component
     let location=useLocation();
     useEffect(() => {
      //  console.log(location.pathname);
     }, [location])
     

    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Category</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbaSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/"? "text-info fw-bold":""}`} aria-current="page" to="/">Home</Link>
              </li>
              <li  className=" nav-item"><Link className={`nav-link ${location.pathname==="/business"? "text-info fw-bold":""}`} to="/business">Business</Link></li>
              <li className="nav-item"><Link  className={`nav-link ${location.pathname==="/entertainment"? "text-info fw-bold":""}`} to="/entertainment">Entertainment</Link></li>
              {/* <li  className="nav-item"><Link className="nav-link" to="/general">General</Link></li> */}
              <li  className="nav-item"><Link className={`nav-link ${location.pathname==="/health"? "text-info fw-bold":""}`} to="/health">Health</Link></li>
              <li  className="nav-item"><Link className={`nav-link ${location.pathname==="/science"? "text-info fw-bold":""}`} to="/science">Science</Link></li>
              <li  className="nav-item"><Link className={`nav-link ${location.pathname==="/sports"? "text-info fw-bold":""}`} to="/sports">Sports</Link></li>
              <li  className="nav-item"><Link className={`nav-link ${location.pathname==="/technology"? "text-info fw-bold":""}`} to="/technology">Technology</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default NavBar //here we're exporting our Navbar component.