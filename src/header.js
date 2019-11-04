import React from "react";
import './App.scss'
import logo from './images/logo_sumba.png'


function Header() {
    return (

    
        <div style={{height:'120px', 
            background: '#4473c4',
            width: '100%'
        
        }}>


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
                    fontSize : '16px',
                    position:'absolute',
                    top:'0px',
                    color : 'white'
                }}>SISTEM INFORMASI GEOGRAFIS</span>
                <span style={{
                    marginLeft: '5px',
                    fontSize: '16px',
                    position: 'absolute',
                    top: '18px',
                    color: 'white'
                }}>DATABASE JALAN DAN JEMBATAN</span>
                <span style={{
                    marginLeft: '5px',
                    fontSize: '20px',
                    position: 'absolute',
                    top: '35px',
                    color: 'white'
                    
                }}>KABUPATEN SUMBA BARAT DAYA</span>

            </div>

            <div data-role="appbar" data-expand-point="md" style={{
                marginTop:'70px'
            }}>
                <ul className="app-bar-menu">
                    <li><a href="/">Peta</a></li>
                    <li><a href="/ringkasan">Ringkasan</a></li>
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