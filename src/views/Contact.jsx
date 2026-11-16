
import React from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (!form.checkValidity()) {
      e.stopPropagation();
    }

    form.classList.add('was-validated');
  };

  return (
    <>
      <section className="contact" id="contact">
        <Container>

          <Row>
            <Col className='title'>
              <h3>Talk To Us</h3>
              <p className='mt-4'>
                Maecenas pellentesque ante faucibus lectus vulputate sollicitudin.
                Cras feugiat hendrerit semper.
              </p>
            </Col>
          </Row>

          <Row>

            <Col className='desc col-12 col-sm-12 col-md-4'>
              <h3>Blog Entries</h3>

              <p className='mt-4'>
                110-220 Quisque diam odio,
                maximus ac consectetur eu, 10260 auctor non lorem
              </p>

              <p className='mt-4'>
                You are NOT allowed to re-distribute Softy Pinko
                template on any template collection websites. Thank you.
              </p>
            </Col>

            <Col className='form col-12 col-sm-12 col-md-8'>

              <div className="form-box">

                <Form noValidate onSubmit={handleSubmit}>

                  {/* Name & Email */}
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="Full Name"
                          required
                          minLength={3}
                        />

                        <Form.Control.Feedback type="invalid">
                          Please enter your full name (at least 3 characters).
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="email"
                          placeholder="Full Email"
                          required
                        />

                        <Form.Control.Feedback type="invalid">
                          Please enter a valid email address.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Message */}
                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Control
                          as="textarea"
                          rows={5}
                          placeholder="Your Message"
                          required
                          minLength={10}
                        />

                        <Form.Control.Feedback type="invalid">
                          Please write your message (at least 10 characters).
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Submit Button */}
                  <Button type="submit">
                    Send Message
                  </Button>

                </Form>

              </div>

            </Col>

          </Row>
        </Container>
      </section>
    </>
  )
}

export default Contact
