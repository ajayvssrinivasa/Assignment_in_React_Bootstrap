import React, { Component } from 'react'
import Header1 from './Header'
import Butt from './Butt'
import Features from './Features'
import Featureditems from './Featureditems'
import Hotdeals from './Hotdeals'
import Instagram from './Instagram'
import Topitems from './Topitems'
import Bottom from './Bottom'
import Footer from './Footer'
import Navbar1 from './Navbar1'
export class Home extends Component {
    render() {
        return (
            <>
            <Navbar1 />
             <Header1 /><br/>
            <Butt /><br/>
            <Features />
            <Featureditems /><br/>
            <Hotdeals /><br/>
            <Instagram /><br/>
            <Topitems /><br/>
            <Bottom />
            <Footer />
            </>
        )
    }
}

export default Home
