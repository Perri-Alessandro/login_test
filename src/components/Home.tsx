import { Col, Row } from "react-bootstrap";
import viteLogo from "/vite.svg";

const Home = () => (
  <Row className="flex-column flex-md-row justify-content-between align-items-center mb-3 h-100 mt-1">
    <Col xs={12} className="mb-3">
      <p className="fw-bold fs-2">Xxxxxx Rpc</p>
    </Col>
    <Col className="mb-3">
      <p className="fw-bold mb-0">I nostri piani di offerta</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt illum
        alias praesentium harum, a facilis quis natus explicabo labore et.
        Similique in numquam qui consequuntur possimus eligendi facilis
        voluptatum doloremque?
      </p>
    </Col>
    <Col>
      <Row>
        <img
          className="col mb-3"
          src={viteLogo}
          style={{ width: "20em" }}
          alt="viteLogo"
        ></img>
      </Row>
    </Col>
    <Col>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
        consequuntur eligendi sed voluptates fuga soluta ut natus porro
        accusamus totam dolorum corrupti ratione dicta officia labore, suscipit
        quam sint magnam?
      </p>
    </Col>
  </Row>
);

export default Home;
