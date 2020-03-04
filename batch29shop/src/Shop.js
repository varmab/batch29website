import React, {Component} from 'react'
import Catalog from './Catalog';
import Cart from './Cart';
import Checkout from './Checkout';
import "./Shop.css"

class Shop extends Component{
    constructor(){
        super();

        var items=[
            {
                id:1,
                name:"Pant",
                price:100
            },
            {
                id:2,
                name:"Shirt",
                price:100
            },
            {
                id:3,
                name:"Short",
                price:100
            }
        ]

        this.state={
            items:items,
            cartItems:[],
            orderTotal:0
        }
    }

    addItemToCart=(item)=>{
        console.log(JSON.stringify(item))
        var isItemExist=this.state.cartItems.some((currentItem)=>{
            return currentItem.id==item.id;
        });

        if(!isItemExist){
            item.qty=1;

            this.setState({
                cartItems:[
                    ...this.state.cartItems,
                    item
                ]
            },()=>{
                this.setState({
                    orderTotal:this.state.cartItems.reduce((total,cartItem)=>{
                        return total+cartItem.price*cartItem.qty;
                    },0)
                })
            })
        }
        else
        {
            item.qty++;

            //Remove that item
            var latestCarItems=this.state.cartItems.filter((currentItem)=>{
                return currentItem.id!=item.id
            })

            //Readded back with new qty
            this.setState({
                cartItems:[
                    ...latestCarItems,
                    item
                ]
            },()=>{
                this.setState({
                    orderTotal:this.state.cartItems.reduce((total,cartItem)=>{
                        return total+cartItem.price*cartItem.qty;
                    },0)
                })
            })
        }
    }

    removeFromCart=(item)=>{
        console.log(JSON.stringify(item));
        this.setState({
            cartItems:this.state.cartItems.filter((currentItem)=>{
                return currentItem.id!=item.id;
            })
        },()=>{
            this.setState({
                orderTotal:this.state.cartItems.reduce((total,cartItem)=>{
                    return total+cartItem.price*cartItem.qty;
                },0)
            })
        })
    }

    render(){
        return(
            <div className="row">
                <h1>Shop</h1>
                <div className="column">
                    <Catalog items={this.state.items} addItemToCart={this.addItemToCart}/>
                </div>
                <div className="column">
                    <Cart items={this.state.cartItems} removeFromCart={this.removeFromCart}/>
                    <Checkout orderTotal={this.state.orderTotal}/>
                </div>
            </div>
        )
    }
}

export default Shop;