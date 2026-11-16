
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import rocket from '../assets/images/work-process-item-01.png';
import WorkCard from '../components/WorkCard';

const workItems = [
  { id: 1, title: 'Get Ideas', description: 'Godard pasbst parism fam cliche.' },
  { id: 2, title: 'Plan Project', description: 'Godard pasbst parism fam cliche.' },
  { id: 3, title: 'Start Work', description: 'Godard pasbst parism fam cliche.' },
  { id: 4, title: 'Develop', description: 'Godard pasbst parism fam cliche.' },
  { id: 5, title: 'Test Project', description: 'Godard pasbst parism fam cliche.' },
  { id: 6, title: 'Launch Project', description: 'Godard pasbst parism fam cliche.' },
];

const Work = () => {
  return (
    <>
      <section className='work' id='work'>
        <Container>
          <Row>
            <Col className='title'>
              <h3>Work Process</h3>
              <p className='mt-4'>
                Aenean nec tempor metus. Maecenas ligula dolor, commodo in imperdiet interdum, vehicula ut ex. Donec ante diam.
              </p>
            </Col>
          </Row>

          <Row className='mt-5 gy-4'>
            {workItems.map((item) => (
              <Col key={item.id} className='col-12 col-sm-12 col-md-4 col-lg-2'>
                <WorkCard
                  image={rocket}
                  title={item.title}
                  description={item.description}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Work;
