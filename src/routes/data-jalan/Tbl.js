import '../../css/jquery.dataTables.css'
import React, {Component} from 'react'

const $ = require('jquery')
$.Datatable = require('datatables.net')

export class Tbl extends Component{

    componentDidMount(){
        this.$el = $(this.el);
        const tableName = 'ruas_jalan_sumba_bd';
        const cdbEndpoint = 'http://demo.zenit.id/user/dev/api/v2/sql?api_key=75c090475cfc5242c2902142cbbe843b31a05dc4&q=';
        const cdbQuery = "SELECT nama_jalan,nama_ruas,kondisi,status,perkerasan,panjang_jl,kecamatan FROM " + tableName;
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
                        title: 'Nama Jalan',
                        data: 'nama_jalan',
                        searchable: true,
                        orderable: true,
                        width: '250px'
                    },
                    {
                        title: 'Ruas',
                        data: 'nama_ruas',
                        searchable: true,
                        orderable: true,
                        width: '90px'
                    },
                    {
                        title: 'Kecamatan',
                        data: 'kecamatan',
                        searchable: true,
                        orderable: true,
                    },
                    {
                        title: "Kondisi",
                        data: 'kondisi',
                        searchable: true,
                        orderable: true
                    },
                    {
                        title: "Status",
                        data: 'status',
                        searchable: true,
                        orderable: true
                    },
                    {
                        title: "Perkerasan",
                        data: 'perkerasan',
                        searchable: true,
                        orderable: true
                    }, {
                        title: "Panjang (km)",
                        data: 'panjang_jl',
                        searchable: true,
                        orderable: true
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