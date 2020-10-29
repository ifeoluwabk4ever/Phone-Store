import React from 'react'

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block p-0">
            <div className="row mr-0">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-capitalize">products</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-capitalize">name of product</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-capitalize">price</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-capitalize">quantity</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-capitalize">remove</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-capitalize">total</p>
                </div>
            </div>
        </div>
    )
}
