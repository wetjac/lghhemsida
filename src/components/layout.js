import React from 'react'

import Header from './header'
import Footer from './footer'
import '../styles/home.scss'

const Layout = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout