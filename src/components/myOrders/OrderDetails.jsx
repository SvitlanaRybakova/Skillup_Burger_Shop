// OrderDetails.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom/dist';

const OrderDetails = () => {
  const { id } = useParams();



  return (
    <section className='orderDetails'>
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b>
            {'random'}
          </p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b>
            {'Bob Marley'}
          </p>
          <p>
            <b>Phone</b>
            {"123-123-34-54"}
          </p>
        </div>
        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status</b>
            {'Processing'}
          </p>
          <p>
            <b>Placed At</b>
            {'23-02-2002'}
          </p>
          <p>
            <b>Delivered At</b>
            {'tomorrow'}
          </p>
        </div>
        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method</b>
            {'COD'}
          </p>
          <p>
            <b>Payment Reference</b>#{'random'}
          </p>
          <p>
            <b>Paid At</b>
            {'today'}
          </p>
        </div>
        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total</b>₹{2132}
          </p>
          <p>
            <b>Shipping Charges</b>₹{200}
          </p>
          <p>
            <b>Tax</b>₹{232}
          </p>
          <p>
            <b>Total Amount</b>₹{200}
          </p>
        </div>
        <article>
          <h1>Ordered Items</h1>
          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span>{1}</span> x <span>{200}</span>
            </div>
          </div>
          <div>
            <h4>Veg Cheese Burger</h4>
            <div>
              <span>{1}</span> x <span>{500}</span>
            </div>
          </div>
          <div>
            <h4>Burger Fries</h4>
            <div>
              <span>{1}</span> x <span>{1800}</span>
            </div>
          </div>
          <div>
            <h4
              style={{
                fontWeight: 800,
              }}
            >
              Sub Total
            </h4>
            <div
              style={{
                fontWeight: 800,
              }}
            >
              ₹{2500}
            </div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;
