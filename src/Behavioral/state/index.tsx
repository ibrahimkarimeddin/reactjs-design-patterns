export interface ProductPageState {
    render: () => JSX.Element;
  }
  
  // Concrete State 1: Viewing state
  export const ViewingState: ProductPageState = {
 
    render: () => (
      <div>
          Your Custom Product View Page 
      </div>
    ),
  };
  
  // Concrete State 2: Adding to Cart state
  export const AddingToCartState: ProductPageState = {
    render: () => (
      <div>
        Your Custom Add To Cart
      </div>
    ),
  };

  export const CheckingOutState: ProductPageState = {
  
    render: () => (
      <div>
          Your Custom Check out Page 
      </div>
    ),
  };
  