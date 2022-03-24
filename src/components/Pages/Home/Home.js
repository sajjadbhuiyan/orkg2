import React from 'react'
import Banner from '../../Banner/Banner'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import HomeBody from '../../HomeBody/HomeBody'

export default function Home() {
  return (
    <div>
        <Header></Header>
    {/* <Banner2></Banner2> */}
    <Banner></Banner>
    <HomeBody></HomeBody>
    <Footer></Footer>
    </div>
  )
}
