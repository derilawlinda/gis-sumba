import React, { PureComponent, Component } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { Container, Row, Col } from 'react-bootstrap';
import '../../css/simple_table.css'

class Ringkasan extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            dataChart: [],
            dataPerkerasan : []
        };
    }

    
   
    componentWillMount() {
        const cdbEndpoint = 'http://demo.zenit.id/user/dev/api/v2/sql?api_key=75c090475cfc5242c2902142cbbe843b31a05dc4&q=';
        const cdbQuery = `select status,
            sum((case when Kondisi = 'Baik' then panjang_jl else 0 end)) as "Baik",
            sum((case when Kondisi = 'Rusak Ringan' then panjang_jl else 0 end)) as "Rusak Ringan",
            sum((case when Kondisi = 'Rusak Berat' then panjang_jl else 0 end)) as "Rusak Berat",
            sum((case when Kondisi = 'Sedang Dikerjakan' then panjang_jl else 0 end)) as "Sedang Dikerjakan"
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
     
    }
    componentDidMount() {
        
    }


    render() {
        return (
            <Container fluid="true">
                <Row>
                        <div style={{
                            marginTop: '30px',
                            textAlign: 'center',
                            width : '100%'
                        }}>
                            <h3 >Kondisi per Status Jalan</h3>
                        </div>
                </Row>
                <Row>
                        <Col sm>
                        <BarChart
                            width={700}
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
                            <Bar dataKey="Sedang Dikerjakan" stackId="a" fill="#060eef" />
                        </BarChart>
                        </Col>
                        <Col sm>
                        <table class="simple-table" style={{ marginTop: '26px', width: '100%'}}>
                            <thead>
                                <tr>
                                    <th rowSpan="2" style={{verticalAlign:'middle',textAlign:'center'}}>Status</th>
                                    <th colSpan="4" style={{verticalAlign: 'middle', textAlign: 'center' }}>Kondisi (km)</th>                                   
                                </tr>
                                <tr>
                                    <th>Baik</th>
                                    <th>Rusak Ringan</th>
                                    <th>Rusak Berat</th>
                                    <th>Sedang Dikerjakan</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.dataChart.map((listValue, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{listValue.status}</td>
                                            <td>{listValue["Baik"]}</td>
                                            <td>{listValue["Rusak Berat"]}</td>
                                            <td>{listValue["Rusak Ringan"]}</td>
                                            <td>{listValue["Sedang Dikerjakan"]}</td>
                                        </tr>
                                    );
                                })}
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
                        <h3> Perkerasan per Status Jalan </h3>
                    </div>
                </Row>
                <Row>
                    <Col sm>
                        <BarChart
                            width={700}
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
                                    <th rowSpan="2" style={{ verticalAlign: 'middle', textAlign: 'center' }}>Status</th>
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
                                    return (
                                        <tr key={index}>
                                            <td>{listValue.status}</td>
                                            <td>{listValue.hotmix}</td>
                                            <td>{listValue.lapen}</td>
                                            <td>{listValue.sirtu}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
               
               

                

                

        );
    }
}

export default Ringkasan;