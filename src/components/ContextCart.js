import React, { useContext, useRef, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from "./Cart";

const ContextCart = () => {
  const { item, totalItem, totalAmount } = useContext(CartContext);
  const [type, setType] = useState('');
  const [query, setQuery] = useState();
  const card = useRef();
  

  const handleChange =(e) =>{
    setType( e.target.value);
  }
  const handleQuery = (e) =>{
    setQuery(e.target.value);
  }

  const handleClick = () =>{
    card.current.innerText = "Thank you";
    card.current.style.backgroundColor = '#e8edef';
    card.current.style.color = 'green';
    card.current.style.fontSize = '4rem';
    card.current.style.fontWeight = "bold";
    card.current.style.fontStyle= "italic";

  }
  const filterData = item.filter((val) => {
      return val.title.toLowerCase().includes(type.toLowerCase())
})
console.log(filterData)

  if (item.length === 0) {
    return (
      <>
        <header>
          <div className="continue-shopping">
            <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
            <h3>continue shopping</h3>
          </div>

          <div className="cart-icon">
            <img src="./images/cart.png" alt="cart" />
            <p>{totalItem}</p>
          </div>
        </header>

        <section className="main-cart-section">
          <h1>shopping Cart</h1>
          <p className="total-items">
            Total items : <span className="total-items-count">{totalItem} </span>{" "}
            
          </p>
        </section>
      </>
    );
  }

  return (
    <>
      <header>
        <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>continue shopping</h3>
        </div>

        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>{totalItem}</p>
        </div>
          
      </header>
      <div className="subhead">
            <select className="dropdown" name="mobile" 
              onChange={(e) => handleQuery(e)}
            >
              <option value="" selected >All</option>
              <option value="mobile">Mobile</option>
              <option value="laptop">Laptops</option>
            </select>
            <input className="searchbar"type="text" placeholder="Search"  onChange={(e) => handleChange(e)} />
      </div>

      
      <section className="main-cart-section">
        <h1>shopping Cart</h1>
        <p className="total-items">
          Total items : <span className="total-items-count">{totalItem} </span> 
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {type? 
                    filterData.map((curItem) => {
                          return <Items key={curItem.id} {...curItem} />;
                    }):
                    (query? 
                      item.map((curItem) => {
                       if(curItem.category.includes(query)){
                          return <Items key={curItem.id} {...curItem} />;
                       }
                      }):
                    item.map((curItem) => {
                      
                      return <Items key={curItem.id} {...curItem} />;
                  })
            )}
               
            </Scrollbars>
          </div>
        </div>

        <div className="card-total" ref={card}>
          <h3>
            Cart Total : <span>₹ {totalAmount}</span>
          </h3>
          <button onClick={handleClick}>Proceed to checkout</button>
        
        </div>
      </section>
    </>
  );
};

export default ContextCart;
