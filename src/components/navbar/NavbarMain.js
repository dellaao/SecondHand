import React from 'react'
import './NavbarMainStyles.css'
import {loginIcon} from '../../images/fi_log-in.svg'
import { FiLogIn } from 'react-icons/fi';

export default function NavbarMain() {
  return (
    <>
        <div className="navbar-main-style">
        <div className="logo-navbar"/>
        <div className='search'>
            <input type="text" placeholder="Cari di sini ..." name="search"></input>
            <img className='search-icon' src={require('../../images/fi_search.png')} />
        </div>
        <button className='masuk'>
          <FiLogIn className='login-icon'/>
          <a>Masuk</a>
        </button>
      </div>
    </>
  )
}
