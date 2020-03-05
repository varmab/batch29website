import React, {PureComponent} from 'react'
import Item from './Item';

class Catalog extends PureComponent{
    constructor(props){
        super(props);

        this.state={
            items:props.items
        }
    }

    addItemToCart=(item)=>{
        console.log(JSON.stringify(item))
        this.props.addItemToCart(item)
    }

    // shouldComponentUpdate(newProps,newState){
    //     return false;
    // }

    render(){
        console.log("Catalog rendering..")
        return(
            <React.Fragment>
                <h1>Catalog</h1>
                {
                    this.state.items.map((item)=>{
                        return <Item key={item.id} item={item} isCart={false} addItemToCart={this.addItemToCart}/>
                    })
                }
            </React.Fragment>
        )
    }
}

export default Catalog;