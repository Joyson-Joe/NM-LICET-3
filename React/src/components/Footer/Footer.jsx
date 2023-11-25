import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
        <Container>
          <Row className="footer-row">
            <Col md={3} sm={5} className='box'>
              <div className="logo">
                  <ion-icon name="bag"></ion-icon>
                  <h1>Multimart</h1>
              </div>
              <p>Multimart is a reputable clothing ecommerce website that has been operating since 1998. With over two decades of experience in the fashion industry, we pride ourselves on offering a curated selection of trendy and high-quality apparel for men and women. Our mission is to provide our customers with a seamless online shopping experience, offering a wide range of stylish clothing, accessories, and footwear.</p>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>About Us</h2>
              <ul>
                <p>We are committed to staying up-to-date with the latest fashion trends and providing exceptional customer service to ensure our customers look and feel their best.</p>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Contact us</h2>
              <ul>
                <li>Email: multimart@gmail.com </li>
                <li>Instagram: @multimartshop</li>
                <li>Phone: +1 1123 456 780</li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Address</h2>
              <ul>
                <li>70 Washington Square South, Prince Towers, Multimart Express, New York, NY 10012, United States </li>
              </ul>
            </Col>
          </Row>
        </Container>
    </footer>
  )
}

export default Footer
