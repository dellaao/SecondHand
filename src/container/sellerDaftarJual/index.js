import React from 'react'
import NavbarMain from '../../components/navbar/NavbarMain'
import './styles.css'
import {FiBox} from "react-icons/fi";
import {FiChevronRight} from "react-icons/fi";
import {FiHeart} from "react-icons/fi";
import {FiDollarSign} from "react-icons/fi";

export default function SellerDaftarJual() {
  return (
    <div>
        <NavbarMain/>
        <p className='text-daftar'>Daftar Jual Saya</p>
        <div className='seller-container'>
            <div className='seller-profile-wrapper'>
                <div className='seller-image'>
                    <img src={require('../../images/seller.png')}  alt="profile"/>
                </div>
                <div className='content-profile'>
                <div className='text-profile'>
                        <div className='name-profile'>Nama Penjual</div>
                        <div className='city-profile'>Kota</div>
                    </div>
                    <button className='edit-profile'>
                        Edit
                    </button>
                </div>
                
            </div>
            <div className='kategori-wrapper'>
                <p>Kategori</p>
                <div className='kategori-option'>
                    <div className='icon-text-option'>
                        <FiBox className='icon-box-profile'/>
                        <p>Semua Produk</p>
                    </div>
                    <FiChevronRight className='icon-box-chevron'/>
                </div>
                <div className='kategori-option'>
                    <div className='icon-text-option'>
                        <FiHeart className='icon-box-profile'/>
                        <p>Diminati</p>
                    </div>
                    <FiChevronRight className='icon-box-chevron'/>
                </div>
                <div className='kategori-option-last'>
                    <div className='icon-text-option'>
                        <FiDollarSign className='icon-box-profile'/>
                        <p>Terjual</p>
                    </div>
                    <FiChevronRight className='icon-box-chevron'/>
                </div>
            </div>
        </div>
        
    </div>
  )
}
