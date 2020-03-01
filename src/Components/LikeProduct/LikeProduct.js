import React, { useState } from "react";
import './LikeProduct.scss';
import { Button } from "react-bootstrap";
import { FaRegThumbsUp } from 'react-icons/fa';

import { connect } from 'react-redux';
import { setLikedProducts, removeLikedProduct } from '../../actions';

export function LikeProduct (props) {

    const [like, setLike] = useState(false);
    const { product, setLikedProducts, removeLikedProduct } =  props;

    const handleLike = () => {
        return like ? (setLike(false), removeLikedProduct(product)) : (setLike(true), setLikedProducts(product));
    }

    return (
        <div className="LikeProduct">
            <Button 
                className={like ? "LikeProduct__like" : "LikeProduct__button"} 
                variant="link"
                onClick={handleLike}>
                <FaRegThumbsUp />
            </Button>
        </div>
    );
}


const mapDispatchToProps = () => {
    return {
        setLikedProducts,
        removeLikedProduct
    }
}

export default connect(null, mapDispatchToProps())(LikeProduct);
