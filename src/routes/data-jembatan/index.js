import React, { Component } from 'react';
import {Tbl} from './Tbl'

class DataJembatan extends Component {
   
    componentWillMount() {
     
    }

    render() {
        return (
            
            <div style={{ width: "100%", height: "100%", paddingLeft: '20px', paddingRight: '20px' }}>
                <Tbl 
                    data={this.rowData}
                >

                </Tbl>
            </div>
        );
    }
}

export default DataJembatan;