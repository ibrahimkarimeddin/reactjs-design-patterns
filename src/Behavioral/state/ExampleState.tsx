import React, { useState } from "react";
import { AddingToCartState, CheckingOutState, ProductPageState, ViewingState } from ".";

const ProductPage: React.FC = () => {
    const [currentProductPageState, setCurrentProductPageState] = useState<ProductPageState>(ViewingState);
  
    const handleAddToCart = () => {
      setCurrentProductPageState(AddingToCartState);
    };
  
    const handleCheckout = () => {
      setCurrentProductPageState(CheckingOutState);
    };
  
    return (
      <div>
        {currentProductPageState.render()}
        <button onClick={handleAddToCart}>Add to Cart</button>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    );
  };