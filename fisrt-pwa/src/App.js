import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Link to="/">
                <Nav.Link as="div">Home</Nav.Link>
              </Link>
              <Link to="about">
                <Nav.Link as="div">About</Nav.Link>
              </Link>
              <Link to="users">
                <Nav.Link as="div">Users</Nav.Link>
              </Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
