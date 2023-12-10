import { useState } from 'react';
import { Link } from 'react-router-dom';
import burger1 from '../../assets/burger1.png';
import burger2 from '../../assets/burger2.png';
import burger3 from '../../assets/burger3.png';

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className='cartItem'>
    <div>
      <h4>{title}</h4>
      <img src={img} alt='Item' />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type='number' readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
 
  const [itemCounts, setItemCounts] = useState({
    1: 0, 
    2: 0, 
    3: 0, 
  });


  const increment = (itemId) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: prevCounts[itemId] + 1,
    }));
  };


  const decrement = (itemId) => {
    if (itemCounts[itemId] > 0) {
      setItemCounts((prevCounts) => ({
        ...prevCounts,
        [itemId]: prevCounts[itemId] - 1,
      }));
    }
  };

  return (
    <section className='cart'>
      <main>
        <CartItem
          title={'Cheese Burger'}
          img={burger1}
          value={itemCounts[1]}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />

        <CartItem
          title={'Veg Cheese Burger'}
          img={burger2}
          value={0}
          value={itemCounts[2]}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />

        <CartItem
          title={'Cheese Burger with french fries'}
          img={burger3}
          value={itemCounts[3]}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{2000}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{2000 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{200}</p>
          </div>{' '}
          <div>
            <h4>Total</h4>
            <p>₹{2000 + 2000 * 0.18 + 200}</p>
          </div>
          <Link to='/shipping'>Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
