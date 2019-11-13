import React from "react";
import './App.scss'
import logo from './images/logo_sumba.png'


function Header() {
    return (

    
        <div style={{height:'19vh', 
            background: '#4473c4',
            width: '100%'
            
        
        }}>


           
                <img src={logo} style={{
                    height:'9vh',
                    margin:'5px'
                }}>
                </img>
                <p style={{
                    marginLeft: '11vh',
                    position: 'absolute',
                    top: '5px',
                    color: 'white'

                }}>
                    <span style={{
                    fontSize: '2.5vh'
                    }}>SISTEM INFORMASI GEOGRAFIS</span>
                    <br></br>
                    <span style={{
                        fontSize: '2.5vh'
                    }}>DATABASE JALAN DAN JEMBATAN</span>
                    <br></br>
                <span style={{
                    fontSize: '3vh'
                }}>KABUPATEN SUMBA BARAT DAYA</span>

                    
                </p>
                

           

            <div data-role="appbar" data-expand-point="md" style={{
                marginTop:'11vh'
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