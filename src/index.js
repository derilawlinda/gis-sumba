import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./header";
import Footer from "./footer";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Peta from './routes/peta';
import DataJalan from './routes/data-jalan';
import DataJembatan from './routes/data-jembatan';
import Ringkasan from './routes/ringkasan';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Container, Row, Col } from 'react-bootstrap'


ReactDOM.render(<Router>
    <div>
        <Container fluid="true">
            <Row>
                <Header />
            </Row>
            <Row>
                <div style={{ width: "100%", height: "67vh", overflow: 'auto', marginTop:"3vh" }}>
                    <Switch>
                        <Route exact path="/" component={Peta} />
                        <Route path="/ringkasan" component={Ringkasan} />
                        <Route path="/data-jalan" component={DataJalan} />
                        <Route path="/data-jembatan" component={DataJembatan} />
                    </Switch>
                </div>
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
       
        
    </div>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
