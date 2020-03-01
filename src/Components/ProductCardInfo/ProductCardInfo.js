import React from "react";
import './ProductCardInfo.scss'

function ProductCardInfo (props) {

    const { brand, size, price } = props.info;

    return (
        <div className="ProductCardInfo">
            <span>Brand: {brand}</span>
            <span>Size: {size}</span>
            <span>£ {parseInt(price).toFixed(2)}</span>
        </div>
    );
}

export default ProductCardInfo;