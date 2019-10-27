import React from "react";
import './App.scss'
import logo from './images/logo_sumba.png'

function Header() {
    return (
        <div style={{height:'125px'}}>


            <div style={{
                height:'70px'
            }}>
                <img src={logo} style={{
                    height:'55px',
                    margin:'5px'
                }}>
                </img>
                <span style={{
                    marginLeft : '5px',
                    fontSize : '20px',
                    position:'absolute',
                    top:'10px'
                }}>Dinas Pekerjaan Umum dan Penataan Ruang</span>
                <span style={{
                    marginLeft: '5px',
                    fontSize: '20px',
                    position: 'absolute',
                    top: '35px'
                }}>Kabupaten Sumba Barat Daya</span>

            </div>

            <div data-role="appbar" data-expand-point="md" style={{
                marginTop:'70px'
            }}>
                <ul className="app-bar-menu">
                    <li><a href="/">Peta</a></li>
                    {/* <li><a href="/peta">Peta</a></li> */}
                    <li><a href="/data-jalan">Data Jalan</a></li>
                    <li><a href="/data-jembatan">Data Jembatan</a></li>
                    {/* <li>
                    <a href="#" class="dropdown-toggle">Products</a>
                    <ul class="d-menu" data-role="dropdown">
                        <li><a href="#">Windows 10</a></li>
                        <li><a href="#">Office 365</a></li>
                        <li class="divider bg-lightGray"></li>
                        <li><a href="#">Skype</a></li>
                    </ul>
                </li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contacts</a></li> */}
                </ul>
            </div>
        </div>
        
    );
}
export default Header;