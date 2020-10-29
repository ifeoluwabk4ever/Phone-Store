import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data'

let ProductContext = React.createContext();

class ProductProvider extends Component {

    state = {
        products : [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0 
    } 

    componentDidMount() {
        this.setProducts()
    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            let singleItem = {...item}
            tempProducts = [...tempProducts, singleItem];
        })

        this.setState( () => {
            return {products:tempProducts}
        })
    }

    getItem = id => {
        let product = this.state.products.find(item => item.id === id)
        return product
    }

    handleDetail = id => {
        let product = this.getItem(id)
        this.setState(() => {
            return {detailProduct:product}
        })
    }

    addToCart = id => {
        let tempProducts = [...this.state.products]
        let index = tempProducts.indexOf(this.getItem(id))
        let product = tempProducts[index]
        product.inCart = true
        product.count = 1
        let price = product.price
        product.total = price

        this.setState( () => {
            return {
                products:tempProducts,
                cart: [...this.state.cart, product]
            }
        }, () => {
            this.addTotals();
        })
    }

    openModal = id => {
        let product = this.getItem(id)
        this.setState( () => {
            return {
                modalProduct:product, 
                modalOpen: true
            }
        })
    }

    closeModal = () => {
        this.setState( () => {
            return {
                modalOpen: false
            }
        })
    }

    increment = id =>{
        let tempCart = [...this.state.cart]
        let selectedProduct = tempCart.find( item => item.id === id)
        let index = tempCart.indexOf(selectedProduct)
        let product = tempCart[index]

        product.count += 1
        product.total = product.count * product.price

        this.setState( () => {
            return {
                cart: [...tempCart]
            }
        }, () => {
            this.addTotals()
        })
    }

    decrement = id => {
        let tempCart = [...this.state.cart]
        let selectedProduct = tempCart.find( item => item.id === id)
        let index = tempCart.indexOf(selectedProduct)
        let product = tempCart[index]

        product.count -= 1
        if ( product.count === 0) {
            this.removeItem(id)
        } else {
            product.total = product.count * product.price

            this.setState( () => {
                return {
                    cart: [...tempCart]
                }
            }, () => {
                this.addTotals()
            })
        }
        

    }

    removeItem = id => {
        let tempProducts = [...this.state.products]
        let tempCart = [ ...this.state.cart]

        tempCart = tempCart.filter( item => item.id !== id)

        let index = tempProducts.indexOf(this.getItem(id))
        let removedProduct = tempProducts[index]
        removedProduct.inCart = false
        removedProduct.count = 0
        removedProduct.total = 0

        this.setState( () => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            }
        }, () => {
            this.addTotals()
        })

    }

    clearCart = () => {
        this.setState( () => {
            return {
                cart: []
            }
        }, () => {
            this.setProducts()
            this.addTotals()
        })
    }

    addTotals = () => {
        let subTotal = 0
        this.state.cart.map( item => (subTotal += item.total))
        let tempTax = subTotal * 0.1
        let tax = Number(tempTax.toFixed(2))
        let total = subTotal + tax
        this.setState( () => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                decrement: this.decrement,
                increment: this.increment,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                    {this.props.children} 
            </ProductContext.Provider>
        )
    }
}

let ProductConsumer = ProductContext.Consumer;

export { ProductContext, ProductProvider, ProductConsumer }