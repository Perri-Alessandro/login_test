import { Col, Row } from "react-bootstrap";

const Link = () => {
  return (
    <Row className="justify-content-center align-items-center mt-1">
      <Col className="mb-3" xs={12}>
        <h2>Link</h2>
      </Col>
      <Col xs={6}>
        <p>Instagram</p>
      </Col>
      <Col xs={6}>
        <p>Facebook</p>
      </Col>
      <Col xs={6}>
        <p>X</p>
      </Col>
      <Col xs={6}>
        <p>Linkedin</p>
      </Col>
    </Row>
  );
};

export default Link;
