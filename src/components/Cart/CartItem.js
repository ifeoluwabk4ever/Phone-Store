import React from 'react'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa'

export default function CartItem({item, value}) {

    let { id, title, img, price, total, count } = item
    let { increment, decrement, removeItem } = value

    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{width:'5rem', height: '5rem'}} alt={title} className="img-fluid" />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product:</span>{title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price:</span>${price}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={ () => decrement(id)}><FaMinus /></span>
                        <span className="btn btn-black mx-1">{count}</span>
                        <span className="btn btn-black mx-1" onClick={ () => increment(id)}><FaPlus /></span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon btn mx-1" onClick={ () => removeItem(id)}><FaTrash /></div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong><span className="d-lg-none">item total:</span> ${total}</strong>
            </div>
        </div>
    )
}
