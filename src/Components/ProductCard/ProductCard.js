import React, { useState } from "react";
import './ProductCard.scss'
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import ProductCardInfo from '../ProductCardInfo/ProductCardInfo';
import LikeProduct from '../LikeProduct/LikeProduct';
import { connect } from 'react-redux';

export function ProductCard (props) {

    const { products } = props;
    const [sold, hideSold] = useState(false);

    const handelSold = () => {
        sold ? hideSold(false) : hideSold(true);
    }

    return (
        <div className="ProductCard">
            <Container>
                <div className="ProductCard__button">
                    <Button onClick={handelSold}>Hide Sold Items</Button>
                </div>
            <Row>
            { products.map((product) => {
                return <Col className={`${product.sold && sold ? "hidden" : ""}`} key={product.id}>
                    <Card className="ProductCard__card" bg="light" style={{ width: '18rem' }}>

                        { product.sold ? 
                            <div>
                                
                                <Card.Img className="ProductCard__card--sold" variant="top" src={product.img}></Card.Img>
                                <span className="ProductCard__card--soldText">SOLD</span>
                            </div> : 
                            <Card.Img variant="top" src={product.img} />
                        }

                        <LikeProduct product={product.title} />
                        <Card.Body>
                            <Card.Title>
                                {product.title}
                                <hr />
                            </Card.Title>
                            <ProductCardInfo info={product}/>
                        </Card.Body>
                    </Card>
                </Col>
            }) }
            </Row>    
            </Container>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(ProductCard);