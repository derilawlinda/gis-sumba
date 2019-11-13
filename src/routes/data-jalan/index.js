import React, { Component } from 'react';
import {Tbl} from './Tbl'

class DataJalan extends Component {
   
    componentWillMount() {
     
    }

    render() {
        return (
            
            <div style={{ width: "100%", height: "70vh", paddingLeft: '20px', paddingRight: '20px' }}>
                <Tbl 
                    data={this.rowData}
                >

                </Tbl>
            </div>
        );
    }
}

export default DataJalan;