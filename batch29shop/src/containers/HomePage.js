import React, {Component} from 'react'
import Header from '../components/Header'
import Shop from '../components/Shop'
import Footer from '../components/Footer'


class HomePage extends Component{
    render(){
        return(
           <React.Fragment>
                <Header/>
                <Shop/>
                <Footer/>
           </React.Fragment>
        )
    }
}

export default HomePage;