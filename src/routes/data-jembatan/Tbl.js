import '../../css/jquery.dataTables.css'
import React, {Component} from 'react'

const $ = require('jquery')
$.Datatable = require('datatables.net')

export class Tbl extends Component{

    componentDidMount(){
        this.$el = $(this.el);
        const tableName = 'jembatan_1';
        const cdbEndpoint = 'http://demo.zenit.id/user/dev/api/v2/sql?api_key=75c090475cfc5242c2902142cbbe843b31a05dc4&q=';
        const cdbQuery = "SELECT nama_jemba,tipe,name_code,panjang,lebar FROM " + tableName;
        const queryURIencoded = cdbEndpoint + encodeURI(cdbQuery);      
        this.$el.DataTable(
        {
                ajax: {
                    url: queryURIencoded,
                    type: 'GET',
                    dataSrc: 'rows'
                },
                order: [[0, "desc"]],
                columns:  [
                    {
                        title: 'Nomor',
                        data: 'name_code',
                        searchable: true,
                        orderable: true
                    },
                    {
                        title: 'Nama',
                        data: 'nama_jemba',
                        searchable: true,
                        orderable: true,
                        width: '250px'
                    },
                    {
                        title: 'Panjang (m)',
                        data: 'panjang',
                        searchable: true,
                        orderable: true
                    },
                    {
                        title: 'Lebar (m)',
                        data: 'lebar',
                        searchable: true,
                        orderable: true
                    },
                    {
                        title: 'Tipe',
                        data: 'tipe',
                        searchable: true,
                        orderable: true,
                        width: '90px'
                    }
                ]

        })
    }

    componentWillUnmount(){
        this.$el.DataTable.destroy(true);
    }

    render() {
        return <div>
            <table className="display" width="100%" ref={el => this.el = el}>

            </table>

        </div>
    }


}

export default Tbl;