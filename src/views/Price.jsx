
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Price = () => {
  return (
    <section className="price mt-5" id="price">
      <Container>
        <Row>
          <Col className="title">
            <h3>Pricing Plans</h3>
            <p className="mt-4">
              Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu elementum, quis congue risus volutpat.
            </p>
          </Col>
        </Row>

        <Row className="mt-5 price-row g-0">

          {/* Starter Plan */}
          <Col className="col-12 col-sm-12 col-md-6 col-lg-4 list">
            <p className="name">Starter</p>

            <div className="num">
              <p>
                <span>$</span> 14.50
              </p>
              <p><small>monthly</small></p>
            </div>

            <ul className="features">
              <li>
                <span className="check">✓</span>
                <span className="feature-text">60 GB space</span>
              </li>
              <li>
                <span className="check">✓</span>
                <span className="feature-text">600 GB transfer</span>
              </li>
              <li>
                <span className="check">✓</span>
                <span className="feature-text">Pro Design Panel</span>
              </li>
              <li className="disabled">
                <span className="cross">✕</span>
                <span className="feature-text">15-minute support</span>
              </li>
              <li className="disabled">
                <span className="cross">✕</span>
                <span className="feature-text">Unlimited Emails</span>
              </li>
              <li className="disabled">
                <span className="cross">✕</span>
                <span className="feature-text">24/7 Security</span>
              </li>
            </ul>

            <Button>PURCHASE NOW</Button>
          </Col>

          {/* Premium Plan */}
          <Col className="col-12 col-sm-12 col-md-6 col-lg-4 list">
            <div className="popular">MOST POPULAR</div>

            <p className="name">Premium</p>

            <div className="num2">
              <p>
                <span>$</span> 21.50
              </p>
              <p><small>monthly</small></p>
            </div>

            <ul className="features">
              <li>
                <span className="check">✓</span>
                <span className="feature-text">120 GB space</span>
              </li>
              <li>
                <span className="check">✓</span>
                <span className="feature-text">1200 GB transfer</span>
              </li>
              <li>
                <span className="check">✓</span>
                <span className="feature-text">Pro Design Panel</span>
              </li>
              <li>
                <span className="check">✓</span>
                <span className="feature-text">15-minute support</span>
              </li>
              <li className="disabled">
                <span className="cross">✕</span>
                <span className="feature-text">Unlimited Emails</span>
              </li>
              <li className="disabled">
                <span className="cross">✕</span>
                <span className="feature-text">24/7 Security</span>
              </li>
            </ul>

            <Button>PURCHASE NOW</Button>
          </Col>

          {/* Advanced Plan */}
          <Col className="col-12 col-sm-12 col-md-6 col-lg-4 list">
            <p className="name">Advanced</p>

            <div className="num">
              <p>
                <span>$</span> 42.00
              </p>
              <p><small>monthly</small></p>
            </div>

            <ul className="features">
              <li>
                <span className="check">✓</span>
                <span className="feature-text">250 GB space</span>
              </li>
              <li>
                <span className="check">✓</span>
                <span className="feature-text">5000 GB transfer</span>
              </li>
              <li>
                <span className="check">✓</span>
                <span className="feature-text">Pro Design Panel</span>
              </li>
              <li>
                <span className="check">✓</span>
                <span className="feature-text">15-minute support</span>
              </li>
              <li>
                <span className="check">✓</span>
                <span className="feature-text">Unlimited Emails</span>
              </li>
              <li>
                <span className="check">✓</span>
                <span className="feature-text">24/7 Security</span>
              </li>
            </ul>

            <Button>PURCHASE NOW</Button>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Price;
