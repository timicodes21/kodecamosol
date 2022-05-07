import React from 'react'
import { Container } from 'react-bootstrap';

const Heading = ({ data }) => {
  return (
    <div className='shadow-sm pt-3 d-none d-md-block'>
        <Container className="px-md-5 ">
            <div className="d-flex justify-content-between">
                {
                    data.map(header => <p key={header.id} className="font-13 text-black roboto p-md-1 font-400">{header.name}</p>)
                }
            </div>
        </Container>
    </div>
  )
}

export default Heading