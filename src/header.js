import React from "react";
import './App.scss'

function Header() {
    return (
        <div style={{height:'50px'}}>
            <div data-role="appbar" data-expand-point="md">
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