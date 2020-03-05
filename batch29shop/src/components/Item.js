import React, {Component, Fragment} from 'react'
import {
    Link
} from 'react-router-dom'

class Item extends Component{
    constructor(props){
        super(props);

        this.state={
            item:props.item,
            isCart:props.isCart
        }
    }

    add=()=>{
        this.props.addItemToCart(this.state.item);
    }

    remove=()=>{
        this.props.removeFromCart(this.state.item)
    }

    render(){
        console.log("Item rendering..")
        var itemLink=`/items/${this.state.item.id}`
        return(
            <Fragment>
                <h1><Link to={itemLink}>{this.state.item.name}</Link></h1>
                <p>Price: {this.state.item.price}</p>
                {
                    (this.state.isCart==true)?
                    (<p>Qty:{this.state.item.qty}</p>):
                    ("")
                }
                {
                    (this.state.isCart==true)?
                    (<button onClick={this.remove}>Remove</button>):
                    (<button onClick={this.add}>Add to cart</button>)
                }
                
                
            </Fragment>
        )
    }
}

export default Item;