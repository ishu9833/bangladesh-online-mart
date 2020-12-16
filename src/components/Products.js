import React, { Component } from 'react';

class Products extends Component {
    render() {
        return (
            <div className="row container" style={{padding: "20px", margin:"10px"}}>
                {this.props.products.map(product => (
                    <div key={product._id} class="card shadow" style={{width: "20rem", margin:"10px"}}>
                        <div className="inner">
                            <a href={"#" + product._id}>
                                <img style={{height:"250px"}} src={product.image} alt={product.title} className="card-img-top w-100"/>
                            </a>
                        </div>
                    <div class="card-body">
                        <h5 class="card-title">{product.title}</h5>
                        
                        <p class="card-text"></p>
                        <div className="d-flex justify-content-between" style={{display: "flex", alignItems:"center"}}>
                            <p>$ {product.price}</p>
                            <button className="btn btn-md mb-3">Add To Cart</button>
                        </div>
                    </div>
                    </div>
                ))}
                
            </div>
        )}
}

export default Products;
