import React from 'react'
import Carousel from '../carousel/Index'
import Kategori from '../kategori/Index'
import NavbarMain from '../navbar/NavbarMain'

export default function Home() {
  return (
    <div>
        <NavbarMain/>
        <Carousel/>
        <Kategori/>
    </div>
  )
}
