import React from 'react';
import './FormInfo.css';

export default function FormInfo() {
  return (
    <>
        <img className='back-arrow' src={require('../images/fi_arrow-left.png')} />
        <div className='form-2'>
        <div className="cam-2">
            <img className='camera' src={require('../images/fi_camera.png')} />
        </div>
        <div className="formulir">
            <label className="label-info">
                Nama*
                <input type="text" className="input-text" name="Nama" />
            </label>
            <label className="label-info">
                    Kota*
                    <select className="input-text" aria-label="Default select example">
                        <option selected>Pilih Kota</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
            </label>
            <label className="label-info-alamat">
                Alamat*
                <textarea className="input-text" class="form-control"  rows="3" placeholder="Contoh: Jalan Ikan Hiu 33"></textarea>
            </label>
            <label className="label-info">
                    No Handphone*
                    <input type="text" className="input-text" name="Contoh: +628123456789" />
            </label>
            <button className="button-simpan">Simpan</button>
        </div>
        </div>
    </>
  )
}
