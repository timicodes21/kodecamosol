import React from 'react'
import { Container, Row, Image } from 'react-bootstrap';


const AboutContent = ({ data, Image9 }) => {
  return (
    <div className='bg-white about-content'>
        <Container>
            <Row>
                <div className="col-12 col-md-6 d-md-none">
                    <div className="pt-5">
                        <div className="rounded-circle bg-piink img-circle">
                            <Image className="rounded-circle" src={Image9} fluid />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                    {
                        data.map(dat => <div key={dat.id} className="my-3">
                        <h4 className="font-32 font-700 text-black d-none d-md-block">{dat.heading}</h4>
                        <p className="font-18 font-400 text-black pt-3">{dat.body}</p>
                    </div>)
                    }  
                </div>
                <div className="col-12 col-md-6 d-none d-md-block">
                    <div className="px-5 pt-5">
                        <div className="rounded-circle bg-piink p-1 img-circle">
                            <Image src={Image9} fluid />
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default AboutContent