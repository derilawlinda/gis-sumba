import React from "react";
import './App.scss'
import { Container, Row, Col } from "react-bootstrap";


function Footer() {
    return (


        <div style={{
            height: '13vh',
            background: '#4473c4',
            width: '100%',
            fontSize : '2vh',


        }}>
            <Container fluid="true">
                <Row>
                    <Col sm>
                        <div >
                            <span style={{ color: 'white' }}><strong>TENTANG KAMI</strong></span>
                            <p style={{ color: 'white', marginTop:'5px' }}>
                                Sistem Informasi Geografis Jalan Dan
                            <br></br>
                                Jembatan ini berisi data ruas jalan dan jembatan
                            <br></br>
                                Kabupaten Sumba Barat Daya, Nusa Tenggara Timur
                            </p>
                        </div>
                        
                    </Col>
                    <Col sm>
                        <div>
                            <span style={{ color: 'white' }}><strong>KONTAK</strong></span>
                            <p style={{ color: 'white', marginTop: '5px' }}>
                                PEMERINTAH KABUPATEN SUMBA BARAT DAYA
                            <br></br>
                                DINAS PEKERJAAN UMUM DAN PENATAAN RUANG
                            <br></br>
                                Jl. Ir. Soekarno, Komplek Puspem Kaduka, Kec. Kota Tambolaka
                        </p>
                        </div>
                        
                    </Col>
                </Row>
            </Container>


            
        </div>

    );
}
export default Footer;