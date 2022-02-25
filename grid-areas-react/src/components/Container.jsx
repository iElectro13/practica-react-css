import React from 'react'
import Aside from './Aside'
import AsideRight from './AsideRight'
import Content from './Content'
import Footer from './Footer'
import Navbar from './Navbar'

const Container = () => {
  return (
    <div className='Container'>
        <Navbar />
        <Aside />
        <Content />
        <AsideRight />
        <Footer />
    </div>
  )
}

export default Container