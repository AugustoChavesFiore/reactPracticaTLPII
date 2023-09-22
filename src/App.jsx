import React from 'react'
import { FormLogin } from './components/FormLogin'
import { Navbar } from './components/Navbar';
import { Footer } from './components/footer';

export const App = () => {
  return (
    <>
    <Navbar/>
    <FormLogin/>
    <Footer/>
    </>
  )
}
