import React, { PureComponent, Component } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { Container, Row, Col } from 'react-bootstrap';
import '../../css/simple_table.css'
import '../../css/jquery.dataTables.css'
import { Tbl } from './Tbl'
import './const'


class Ringkasan extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            dataChart: [],
            dataPerkerasan : [],
            dataPanjangJalanByStatus : []
           
        };
    }

    
   
    componentWillMount() {
        
        const cdbEndpoint = 'https://'+global.config.carto_url+'/user/prod/api/v2/sql?api_key=flYIQpNn1yHrnVuWXfQypg&q=';
        const cdbQuery = `select status,
            sum((case when Kondisi = 'Baik' then panjang_jl else 0 end)) as "Baik",
            sum((case when Kondisi = 'Rusak Ringan' then panjang_jl else 0 end)) as "Rusak Ringan",
            sum((case when Kondisi = 'Rusak Berat' then panjang_jl else 0 end)) as "Rusak Berat"
            from ruas_jalan_sumba_bd
            group by status;`
        const queryURIencoded = cdbEndpoint + encodeURI(cdbQuery);
        fetch(queryURIencoded)
            .then(response => response.json())
            .then(data => this.setState({ dataChart: data.rows }));
        const cdbPerkerasan = `select status,
            sum((case when Perkerasan = 'Hotmix' then panjang_jl else 0 end)) as "hotmix",
            sum((case when Perkerasan = 'Lapen' then panjang_jl else 0 end)) as "lapen",
            sum((case when Perkerasan = 'Sirtu' then panjang_jl else 0 end)) as "sirtu"
            from ruas_jalan_sumba_bd
            group by status;`
        const queryURIencodedPerkerasan = cdbEndpoint + encodeURI(cdbPerkerasan);
        fetch(queryURIencodedPerkerasan)
            .then(response => response.json())
            .then(data => this.setState({ dataPerkerasan: data.rows }));
        const cdbDataPanjangJalanByStatus = `SELECT
            status,
            SUM (panjang_jl) AS total
        FROM
            ruas_jalan_sumba_bd
        GROUP BY
            status`
        const queryURIencodedDataPanjangJalanByStatus = cdbEndpoint + encodeURI(cdbDataPanjangJalanByStatus);
        fetch(queryURIencodedDataPanjangJalanByStatus)
            .then(response => response.json())
            .then(data => this.setState({ dataPanjangJalanByStatus: data.rows }));
     
    }
    componentDidMount() {
        
    }


    render() {
        let totalBaik = 0;
        let totalRusakRingan = 0;
        let totalRusakBerat = 0;
        let totalSedangDikerjakan = 0;
        let totalHotmix = 0;
        let totalLapen = 0;
        let totalSirtu = 0;
        return (
            
            <Container fluid="true">
                <Row>
                    <div style={{
                        marginTop: '3vh',
                        marginBottom: '2vh',
                        textAlign: 'center',
                        marginLeft: '2vw',
                        width: '100%'
                    }}>
                        <h3 style={{
                            fontSize: '2.5vh',
                            fontWeight: "bolder",
                            color: "rgb(68, 115, 196)"
                        }}>Ringkasan Panjang Jalan</h3>
                    </div>
                </Row>
                <Row>
                    <div style={{ width: "100%", height: "30vh", paddingLeft: '20px', paddingRight: '20px' }}>
                        <Tbl
                            data={this.rowData}



                        >

                        </Tbl>
                    </div>
                </Row>
                
                <Row>
                        <div style={{
                            marginTop: '35px',
                            textAlign: 'center',
                            width : '100%'
                        }}>
                            <h3 style={{
                                fontSize:'2.5vh',
                                fontWeight : "bolder",
                                color: "rgb(68, 115, 196)"
                            }} >Kondisi per Status Jalan</h3>
                        </div>
                </Row>
                <Row>
                        <Col sm>
                        <BarChart
                            width={800}
                            height={300}
                            data={this.state.dataChart}
                            style={{
                                margin: '25px'
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="status" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Baik" stackId="a" fill="#21c40f" />
                            <Bar dataKey="Rusak Ringan" stackId="a" fill="#dfae0c" />
                            <Bar dataKey="Rusak Berat" stackId="a" fill="#cc1313" />
                        </BarChart>
                        </Col>
                        <Col sm>
                        <table className="simple-table" style={{ marginTop: '26px', width: '100%'}}>
                            <thead>
                                <tr>
                                    <th rowSpan="2" style={{ verticalAlign: 'middle', textAlign: 'center', width: '30%'}}>Status</th>
                                    <th colSpan="4" style={{verticalAlign: 'middle', textAlign: 'center' }}>Kondisi (km)</th>                                   
                                </tr>
                                <tr>
                                    <th>Baik</th>
                                    <th>Rusak Berat</th>
                                    <th>Rusak Ringan</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.dataChart.map((listValue, index) => {
                                    totalBaik += listValue["Baik"];
                                    totalRusakBerat += listValue["Rusak Berat"];
                                    totalRusakRingan += listValue["Rusak Ringan"];
                                    return (
                                        <tr key={index}>
                                            <td>{listValue.status}</td>
                                            <td>{listValue["Baik"]}</td>
                                            <td>{listValue["Rusak Berat"]}</td>
                                            <td>{listValue["Rusak Ringan"]}</td>
                                        </tr>
                                    );
                                })}
                                <tr>
                                    <td><strong>Total</strong></td>
                                    <td>{totalBaik.toFixed(2)}</td>
                                    <td>{totalRusakBerat.toFixed(2)}</td>
                                    <td>{totalRusakRingan.toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </table>
                        </Col>
                </Row>
                <Row>
                    <div style={{
                        marginTop: '10px',
                        textAlign: 'center',
                        width: '100%'
                    }}>
                        <h3 style={{
                                fontSize:'2.5vh',
                                fontWeight: "bolder",
                                color: "rgb(68, 115, 196)"
                            }}> Perkerasan per Status Jalan </h3>
                    </div>
                </Row>
                <Row>
                    <Col sm>
                        <BarChart
                            width={800}
                            height={300}
                            data={this.state.dataPerkerasan}
                            style={{
                                margin: '25px'
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="status" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="hotmix" stackId="a" fill="#21c40f" />
                            <Bar dataKey="lapen" stackId="a" fill="#dfae0c" />
                            <Bar dataKey="sirtu" stackId="a" fill="#cc1313" />
                        </BarChart>
                    </Col>
                    <Col sm>
                        <table class="simple-table" style={{ marginTop: '26px', width:'100%' }}>
                            <thead>
                                <tr>
                                    <th rowSpan="2" style={{ verticalAlign: 'middle', textAlign: 'center', width: '30%' }}>Status</th>
                                    <th colSpan="3" style={{ verticalAlign: 'middle', textAlign: 'center' }}>Perkerasan (km)</th>
                                </tr>
                                <tr>
                                    <th>Hotmix</th>
                                    <th>Lapen</th>
                                    <th>Sirtu</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.dataPerkerasan.map((listValue, index) => {
                                    totalHotmix += listValue.hotmix;
                                    totalLapen += listValue.lapen;
                                    totalSirtu += listValue.sirtu;
                                    return (
                                        <tr key={index}>
                                            <td>{listValue.status}</td>
                                            <td>{listValue.hotmix}</td>
                                            <td>{listValue.lapen}</td>
                                            <td>{listValue.sirtu}</td>
                                        </tr>
                                    );
                                })}
                                <tr>
                                    <td><strong>Total</strong></td>
                                    <td>{totalHotmix.toFixed(2)}</td>
                                    <td>{totalLapen.toFixed(2)}</td>
                                    <td>{totalSirtu.toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>
                
            </Container>
               
               

                

                

        );
    }
}

export default Ringkasan;