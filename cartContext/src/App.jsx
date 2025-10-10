import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import Product from './components/Product.jsx'
// import CartContextProvider from './store/Shopping-Cart-Context.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import CartContextProvider  from './store/Shopping-Cart-Context.jsx';
import { useReducer,useState } from 'react';
import TodoReducer from './components/TodoReducer.jsx';


function App() {
  return (
    <>
    <CartContextProvider>
      <Header/>
      <Shop  >
      {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>

    <TodoReducer />
      {/* <CartContext.Consumer>
        {(ctxValue)=>{
          return (
            <>
                <Header
                  cart={shoppingCart}
                  onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
                />
                <Shop  >
                {DUMMY_PRODUCTS.map((product) => (
                    <li key={product.id}>
                      <Product {...product} />
                    </li>
                  ))}
                </Shop>
          </>
          )
        }}
      </CartContext.Consumer> */}
    </>
  );
}

export default App;
