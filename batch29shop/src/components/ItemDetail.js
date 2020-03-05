import React, {Component} from 'react'

class ItemDetail extends Component{
    render(){
        return(
            <h1>Item Detail {this.props.id}</h1>
        )
    }
}

export default ItemDetail;