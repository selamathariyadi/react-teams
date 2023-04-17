import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {BsFacebook, BsYoutube, BsInstagram} from 'react-icons/bs'

import logofooter from '../../asset/images/footer-travelark.png'
import '../footer/index.css'


function Footer() {
  return (
    <div className='footer'>
        <Container>
           <div className='footer-conten'>
            <div className='up-side-footer d-flex'>
                <div className='menu pe-4'>
                    <h6 className='mb-4'>
                        Menu
                    </h6>
                    <ul>
                        <Link><li>Discovery</li></Link>
                        <Link><li>Destination</li></Link>
                        <Link><li>Package</li></Link>
                        <Link><li>About Us</li></Link        >
                    </ul>
                </div>
                <div className='features px-4'>
                    <h6 className='mb-4'>Features</h6>
                    <ul>
                        <Link><li>Open Trip</li></Link>
                        <Link><li>Private Trip</li></Link>
                        <Link><li>Destination Trip</li></Link>
                    </ul>
                </div>
                <div className='travelark px-4'>
                    <h6 className='mb-4'>Travelark</h6>
                    <ul>
                        <Link><li>Need Help</li></Link>
                        <Link><li>Business Inquiry</li></Link>
                        <Link><li>Who we are</li></Link>
                    </ul>
                </div>
            </div>

            <div className='down-side-footer'>
                <div className='left'>
                    <img src={logofooter} alt="" className='travelark-orange-logo'/>
                    <h6>Jakarta, Indonesia</h6>
                </div>
                <div className='right'>
                    <div className='icon mb-2'>
                        <Link><i className='px-2'> <BsYoutube/></i></Link>
                        <Link><i className='px-2'> <BsFacebook/></i></Link>
                        <Link><i className='px-2'> <BsInstagram/></i></Link>
                    </div>
                    <p>Copyright © 2023 Travelark. Indonesia</p>
                </div>
            </div>
           </div>
        </Container>
    </div>
  )
}

export default Footer