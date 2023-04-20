import React from 'react'

import '../Mostdestination/mostpick.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import nusaImage from '../../../asset/images/nusa.png'
import borobudurImage from '../../../asset/images/borobudur.png'
import bromoImage from '../../../asset/images/bromo.png'
import komodoImage from '../../../asset/images/komodo.png'
function Mostdestination() {
  return (
    <>
    <Container>
        <Row>
            <div className='conten-head px-3'>
            <Col md={6}>
                <p>Recommend</p>
                <h1>Most Picked Destination</h1>
            </Col>
            <Col md={6}>
                <div className='right'> 
                <Link>
                <button className='button-see'>See All</button>
                </Link>
                </div>
            </Col>
            </div>
        </Row>
        <Row className='mt-2'>
            <div className='conten-img'>
                <div className='card-img'>
                    <img src={nusaImage} alt="" />
                    <h2>Nusa Penida</h2>
                    <p>Kelungkung, Bali</p>
                </div>
                <div className='card-img'>
                    <img src={borobudurImage} alt="" />
                    <h2>Nusa Penida</h2>
                    <p>Kelungkung, Bali</p>
                </div>
                <div className='card-img'>
                    <img src={komodoImage} alt="" />
                    <h2>Nusa Penida</h2>
                    <p>Kelungkung, Bali</p>
                </div>
                <div className='card-img'>
                    <img src={bromoImage} alt="" />
                    <h2>Nusa Penida</h2>
                    <p>Kelungkung, Bali</p>
                </div>
            </div>
        </Row>
    </Container>
    </>
  )
}

export default Mostdestination