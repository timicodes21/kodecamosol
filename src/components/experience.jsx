import React from 'react'
import { Container, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Experience = ({ Image2, data }) => {
  return (
    <div className='bg-black m-minus'>
        <Container>
            <Row>
                <div className="col-12 col-md-6 d-none d-md-block">
                    <div className="px-md-5 pt-5">
                        <div className="rounded-circle bg-lblack p-md-1 img-circle">
                            <Image src={Image2} fluid />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                    <div className="p-4">
                        <h4 className="font-32 font-700 text-white d-none d-md-block">{data.heading}</h4>
                        <p className="font-24 font-600 text-white d-md-none">{data.heading}</p>
                        <button className="font-13 font-500 text-white bg-transparent rounded p-2 bor">CUSTOMER</button>
                        <p className="font-18 font-400 d-none d-md-block text-white pt-3">{data.body}</p>
                        <p className="font-15 font-400 d-md-none text-white pt-3">{data.body}</p>
                        <Link to="/" className="font-16 mt-4 pt-2 font-500 text-white bg-transparent share-button">SHARE YOUR OWN STORY!</Link>
                    </div>
                </div>
                <div className="col-12 col-md-6 d-md-none">
                    <div className="px-md-5 pt-5">
                        <div className="rounded-circle bg-lblack p-md-1 img-circle">
                            <Image src={Image2} fluid />
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default Experience