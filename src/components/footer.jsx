import React from 'react'
import { Container, Row, Image, InputGroup, FormControl } from 'react-bootstrap';
import Facebook from '../assets/facebook.png'
import Twitter from '../assets/twitter.png'
import Instagram from '../assets/instagram.png'
import Linkedin from '../assets/linkedin.png'

const Footer = ({ Image16, data }) => {
  return (
    <div className="bg-llblack">
        <Container>
            <Row>
                <div className="col-12 col-md-6 d-none d-md-block">
                    <div className="px-5 pt-5">
                        <div className="p-5 mmmin">
                            <Image src={Image16} fluid />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 px-md-5 pt-5 d-flex flex-column justify-content-center">
                    <h3 className="text-white font-40 d-none d-md-block font-700">Be a  member <br />of our community 🎉</h3>
                    <h3 className="text-white font-32 d-md-none font-700">Be a  member <br />of our community 🎉</h3>
                    <p className="font-14 text-white pt-2 font-400 roboto">We’d make sure you’re always first to know what’s happening on TradeEasy, the world.</p>
                    <div>
                    <InputGroup className="mb-3 in-group bg-lll rounded">
                        <FormControl placeholder="enter your email address" className="footer-input bg-transparent p-2 text-white" aria-label="enter your email address" aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text className="input-text" id="basic-addon2"><button className="font-13 font-500 roboto text-black bg-white rounded p-3 bor3">SUBSCRIBE</button></InputGroup.Text>
                    </InputGroup>
                    </div>
                </div>
                <div className="col-12 col-md-6 d-md-none">
                    <div className="">
                        <div className="py-5">
                            <Image src={Image16} fluid />
                        </div>
                    </div>
                </div>
            </Row>
            <Row className="roboto">
                <div className="col-6 col-md-3 d-flex flex-column justify-content-between roboto">
                    <p className="font-16 text-white pt-1 font-700 roboto">{data[0]}</p>
                    <p className="font-14 text-white pt-1 font-400 roboto">{data[1]}</p>
                    <p className="font-14 text-white pt-1 font-400 roboto">{data[2]}</p>
                    <p className="font-14 text-white pt-1 font-400 roboto">{data[3]}</p>
                    <p className="font-14 text-white pt-1 font-400 roboto">{data[4]}</p>
                </div>
                <div className="col-6 col-md-3 d-flex flex-column justify-content-between roboto">
                    <p className="font-16 text-white pt-1 font-700 roboto">{data[5]}</p>
                    <p className="font-14 text-white pt-1 font-400 roboto">{data[6]}</p>
                    <p className="font-14 text-white pt-1 font-400 roboto">{data[7]}</p>
                    <p className="font-14 text-white pt-1 font-400 roboto">{data[8]}</p>
                    <p className="font-14 text-white pt-1 font-400 roboto">{data[9]}</p>
                    <p className="font-14 text-white pt-1 font-400 roboto">{data[10]}</p>
                </div>
                <div className="col-6 col-md-3 d-flex flex-column justify-content-between roboto">
                    <p className="font-16 text-white pt-1 font-700 roboto">{data[11]}</p>
                    <p className="font-14 text-white pt-1 font-400 roboto">{data[12]}</p>
                    <p className="font-14 text-white pt-1 font-400 roboto">{data[13]}</p>
                    <p className="font-14 text-white pt-1 font-400 roboto">{data[14]}</p>
                    <p className="font-14 text-white pt-1 font-400 roboto">{data[15]}</p>
                </div>
                <div className="col-6 col-md-3 d-flex flex-column justify-content-between roboto">
                    <p className="font-16 text-white pt-1 font-700 roboto">{data[16]}</p>
                    <p className="font-14 text-white pt-1 font-400 roboto">{data[17]}</p>
                    <p className="font-14 text-white pt-1 font-400 roboto">{data[18]}</p>
                    <p className="font-14 text-white pt-1 font-400 roboto">{data[19]}</p>
                    <p className="font-14 text-white pt-1 font-400 roboto">{data[20]}</p>
                </div>
                <div className="col-6 col-md-3 d-flex flex-column justify-content-between roboto">
                    <p className="font-16 text-white pt-1 font-700 roboto">{data[21]}</p>
                    <div className="d-flex justify-content-between pt-2 pb-2">
                        <div className="rounded-circle bg-white"><Image className="p-3" src={Facebook} fluid /></div>
                        <div className="rounded-circle bg-white"><Image className="p-3" src={Instagram} fluid /></div>
                        <div className="rounded-circle bg-white"><Image className="p-3" src={Twitter} fluid /></div>
                        <div className="rounded-circle bg-white"><Image className="p-3" src={Linkedin} fluid /></div>
                    </div>
                    <p className="font-14 text-white pt-1 font-400 roboto">{data[22]}</p>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default Footer