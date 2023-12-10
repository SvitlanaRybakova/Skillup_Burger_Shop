import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEye } from 'react-icons/ai';
import { items } from '../home/Menu';

const MyOrders = () => {
 
  return (
    <section className='tableClass'>
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{`random_id __${item.id}`}</td>
                <td>Processing</td>
                <td>23</td>
                <td>₹{2132}</td>
                <td>COD</td>
                <td>
                  <Link to={`/order/${'random_uri'}`}>
                    <AiOutlineEye />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
