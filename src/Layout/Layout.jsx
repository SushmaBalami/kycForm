import React from 'react'
import Nav from '../Navbar/Nav'

const Layout = ({children}) => {
  
  
    return (
      <>
      <Nav/>
      {children}
      </>
  )
}

export default Layout