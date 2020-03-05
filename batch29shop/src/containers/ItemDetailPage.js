import React, {Component} from 'react'
import Header from '../components/Header'
import ItemDetail from '../components/ItemDetail'
import Footer from '../components/Footer'

class ItemDetailPage extends Component{
    render(){
        return(
            <React.Fragment>
                <Header/>
                <ItemDetail id={this.props.match.params.id}/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default ItemDetailPage;