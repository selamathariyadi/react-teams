import React from 'react'
import './style.css'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Discount() {
  return (
    <>
    <div className='discount'>
        <Container>
            <div className='content1'>
                <div className='content-left'>
                    <h1>Get 15% <span> for your </span>first trip</h1>
                    <p>Attention all first-time travelers! We're excited to offer an exclusive discount just for you. Book your first trip with us today and receive 10% off your entire journey.</p>
                </div>
                <div className='content-right'>
                    <Link className='button'>Get Started</Link>
                </div>
            </div>
        </Container>
    </div>
    </>
  )
}

export default Discount
