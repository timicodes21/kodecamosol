import React from 'react'
import { Container, Row, Image } from 'react-bootstrap';

const Customers = ({ data }) => {
    
  return (
    <div>
        <Container className="pt-5">
            
            <Row className="gx-md-5">
                {
                    data.map(person => <div key={person.id} className="col-12 col-md-4">
                    <div>
                        <Image src={person.image} fluid />
                    </div>
                    <div className="mt-2">
                        <p className="font-600 font-24 text-ashh">{person.name}</p>
                    </div>
                    <div mt-1>
                        <p className="font-500 font-15 text-ashhh">{person.location} <button className="font-13 font-500 text-blue bg-llgreen rounded p-2 bor">CUSTOMER</button></p>
                    </div>
                    <div mt-1>
                        <p className="font-400 font-16 text-ashhh">{person.story}</p>
                    </div>
                </div>)
                }
            </Row>
        </Container>
    </div>
  )
}

export default Customers