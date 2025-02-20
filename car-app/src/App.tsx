import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Car from "./Components/Car";


function App() {
  return (
    <Router>
      <header>
        <h1>Recipe App</h1>
      </header>
      <nav className="navbar navbar-expand-lg bg-secondary bg-gradient text-light">
        <div className="container">
          <a className="navbar-brand" href="#">Recipe-App</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/car">carrr</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/car" element={<Car />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;