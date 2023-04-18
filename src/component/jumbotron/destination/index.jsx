import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

function Destination() {
  return (
    <div className='hero'>
        <Container>
            <Row>
                <Col lg={8} md = {12}  className='left-hero'>
                    <div className='content-box'>
                        <h1>Exploring Wonderful Indonesia</h1>
                        <p>
                            At Wonderful Indonesia, we believe that travel should be an unforgettable experience, and we're dedicated to making sure that every moment you spend with us is one to remember. So why wait? Book your adventure today and discover the magic of Indonesia.
                        </p>
                        <Button variant='outline'>Explore Now<i className='px-3'></i></Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Destination