// src/App.js
import React from 'react';

import TopItems from './components/TopItems'
import AttractionList from './components/AttractionList'
import MenuItems from './components/MenuItems'
import ImageCarousel from './components/ImageCarousel'
import Header from './components/Header'


const App = () => {
  return (
    <>
      <Header />
      <ImageCarousel />
      <TopItems />
      <MenuItems />
      <AttractionList />
    </>
  )
}

export default App