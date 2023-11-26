import { Col, Container, Row } from "react-bootstrap";
import "./slidercard.css";

const SlideCard = ({title,desc,cover}) => {
  return (
      <Container className='box' >
        <Row>
          <Col md={6}>
            <h1>{title}</h1>
            <p>Save on the hottest deals of the autumn. An unprecedented offer. Save up to 10% on all brand-new items and 50% extra off your initial purchase. The NAAN MUDHALVAN MEGA SALE is not to be missed!
</p>
          </Col>
          <Col md={6}>
            <img src={cover} alt="#" />
          </Col>
        </Row>

    </Container>
  )
}

export default SlideCard
