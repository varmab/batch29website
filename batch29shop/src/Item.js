import React, {Component, Fragment} from 'react'

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
        return(
            <Fragment>
                <h1>{this.state.item.name}</h1>
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