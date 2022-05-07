import React from 'react'
import { Container, Row, Image } from 'react-bootstrap';


const Homepage = ({ Image1 }) => {
  return (
    <div>
        <Container>
            <Row>
                <div className="col-12 col-md-6 d-flex flex-column p-2 justify-content-center">
                    <h3 className="text-dark font-48 d-none d-md-block font-700">Experience the <br />better way to shop.</h3>
                    <h3 className="text-dark font-32 pt-5 d-md-none font-700">Experience the <br />better way to shop.</h3>
                    <p className="font-18 text-ash pt-2 font-400">Shop, Sell and Get the best ecommerce experience with Vasiti</p>
                    <p className="font-18 text-ash pt-2 font-400">Here is what customers and vendors are saying about us, you can share your stories with us too.</p>
                </div>
                <div className="col-12 col-md-6">
                    <div className="px-md-5 pt-5">
                        <div className="rounded-circle bg-pink p-md-1 img-circle">
                            <Image src={Image1} fluid />
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default Homepage