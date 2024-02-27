import { Button, Card, Col, Row } from "react-bootstrap";

const OurServices = () => {
  return (
    <>
      <Row className="w-100 justify-content-center align-items-center mt-1">
        <h2>Our Service</h2>
      </Row>
      <Row className="justify-content-center align-items-center mt-1 g-4 ">
        <Col xs={12}>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            recusandae praesentium accusantium magnam, commodi rerum repellat,
            enim, natus blanditiis odio alias repellendus corrupti. Alias
            temporibus ipsa obcaecati. Fugiat, magni molestiae?
          </p>
        </Col>
        <Col xs={12} md={4}>
          <Card className="rounded-4 p-0 border-info border-2">
            <Card.Img
              className="rounded-top-4"
              variant="top"
              src="https://placekitten.com/200"
              alt="gatto"
            />
            <Card.Body>
              <Card.Title>PLAN X</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button className="border-warning border-2" variant="primary">
                BUY IT
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="rounded-4 p-0 border-info border-2">
            <Card.Img
              className="rounded-top-4"
              variant="top"
              src="https://placekitten.com/597"
              alt="gatto"
            />
            <Card.Body>
              <Card.Title>PLAN Y</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button className="border-warning border-2" variant="primary">
                BUY IT
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="rounded-4 p-0 border-info border-2">
            <Card.Img
              className="rounded-top-4"
              variant="top"
              src="https://placekitten.com/300"
              alt="gatto"
            />
            <Card.Body>
              <Card.Title>PLAN Z</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button className="border-warning border-2" variant="primary">
                BUY IT
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default OurServices;
