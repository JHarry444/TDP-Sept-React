import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';
import {
  Col, Container, Nav, Row,
} from 'react-bootstrap';
import Poke from './Components/Data-Requests/Poke';
import Counter from './Components/States/Counter';
import Converter from './Components/States/Converter';
import OMDB from './Components/Data-Requests/OMDB';
import SearchableList from './Components/Lifting-State/SearchableList';
import Home from './Components/Routing/Home';
import Navigation from './Components/Routing/Navigation';
import ParamsExample from './Components/Routing/ParamsExample';
import People from './Components/Static-Data/People';
import FilmDetails from './Components/Routing/FilmDetails';
import Testing from './Testing';
import Hack from './Components/Hackathon/Hack';
import Create from './Components/Hackathon/Create';
import Read from './Components/Hackathon/Read';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav>
          <Container>
            <Row>
              <Col>
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </Col>
              <Col>
                <Link className="nav-link" to="/liftingState">
                  Lifting State
                </Link>
              </Col>
              <Col>
                <Link className="nav-link" to="/state">
                  State
                </Link>
              </Col>
              <Col>
                <Link className="nav-link" to="/staticData">
                  Static Data
                </Link>
              </Col>
              <Col>
                <Link className="nav-link" to="/dataRequests/example">
                  Data Req
                </Link>
              </Col>
              <Col>
                <Link className="nav-link" to="/filmSearch">
                  Film Search
                </Link>
              </Col>
              <Col>
                <Link className="nav-link" to="/testing">
                  Testing
                </Link>
              </Col>
              <Col>
                <Link className="nav-link" to="/hack">
                  Hack
                </Link>
              </Col>
              <Col lg={3}>
                <Navigation />
              </Col>
            </Row>
          </Container>

        </Nav>
        <br />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/state" element={<Counter />} />
          <Route path="/staticData" element={<People />} />
          <Route path="/liftingState" element={<SearchableList />} />
          <Route path="/dataRequests/example" element={<Poke />} />
          <Route path="/filmSearch" element={<OMDB />} />
          <Route path="/filmDetails/:id" element={<FilmDetails />} />
          <Route path="/params/:colour" element={<ParamsExample />} />
          <Route path="testing" element={<Testing />}>
            <Route path="ex1" element={<Converter />} />
            <Route path="ex2" element={<Counter />} />
            <Route path="ex3" element={<OMDB />} />
          </Route>
          <Route path="hack" element={<Hack />}>
            <Route path="create" element={<Create />} />
            <Route path="read" element={<Read />} />
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
