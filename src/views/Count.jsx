
import React, { useEffect, useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import rate from '../assets/images/circle-dec.png';

const Count = () => {
    const targets = [126, 63, 126, 27];
    const [counts, setCounts] = useState([0, 0, 0, 0]);
    const sectionRef = useRef(null);
    const [started, setStarted] = useState(false);
    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {

            if (entries[0].isIntersecting) {
                setStarted(true);
                observer.disconnect();
            }

        }, {
            threshold: 0.3
        });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();

    }, []);

    useEffect(() => {

        if (!started) return;

        let startTime = null;
        let animationFrame;

        const duration = 2000;

        const animate = (timestamp) => {

            if (!startTime) {
                startTime = timestamp;
            }

            const progress = Math.min(
                (timestamp - startTime) / duration,
                1
            );

            const ease = 1 - Math.pow(1 - progress, 3);

            setCounts(
                targets.map(num => Math.floor(num * ease))
            );

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCounts(targets);
            }

        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);

    }, [started]);

    return (
        <>
            <section className='count' id='count' ref={sectionRef}>
                <Container>
                    <Row>

                        <Col className='col-12 col-sm-6 col-md-3 rate'>
                            <div className="rate_num">
                                <p>{counts[0]}</p>
                                <span>Projects</span>
                            </div>
                            <div className="img_rate">
                                <img src={rate} alt="" />
                            </div>
                        </Col>

                        <Col className='col-12 col-sm-6 col-md-3 rate'>
                            <div className="rate_num">
                                <p>{counts[1]}</p>
                                <span>Happy Clients</span>
                            </div>
                            <div className="img_rate">
                                <img src={rate} alt="" />
                            </div>
                        </Col>

                        <Col className='col-12 col-sm-6 col-md-3 rate'>
                            <div className="rate_num">
                                <p>{counts[2]}</p>
                                <span>Awards Wins</span>
                            </div>
                            <div className="img_rate">
                                <img src={rate} alt="" />
                            </div>
                        </Col>

                        <Col className='col-12 col-sm-6 col-md-3 rate'>
                            <div className="rate_num">
                                <p>{counts[3]}</p>
                                <span>Countries</span>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Count;
