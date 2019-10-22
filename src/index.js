import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./header";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Peta from './routes/peta';
import DataJalan from './routes/data-jalan';
import DataJembatan from './routes/data-jembatan';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router>
    <div>
        <Header />
        <div style={{ width: "100%", height: "500px" }}>
            <div style={{ width: "100%", height: "10px" }}></div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/peta" component={Peta} />
                <Route path="/data-jalan" component={DataJalan} />
                <Route path="/data-jembatan" component={DataJembatan} />
                {/* <Route path="/data-jalan" component={DataJalan} />
            <Route path="/data-jembatan" component={DataJembatan} />
            <Route component={Notfound} /> */}
            </Switch>
        </div>
        
    </div>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
