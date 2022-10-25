import {
  Col, Container, Nav, Row,
} from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

function Hack() {
  return (
    <Container>
      <Row>
        <Nav>
          <Col>
            <Link className="nav-link" to="create">
              CREATE
            </Link>
          </Col>
          <Col>
            <Link className="nav-link" to="read">
              READ
            </Link>
          </Col>
        </Nav>
      </Row>
      <Outlet />
    </Container>
  );
}

export default Hack;
