import React from 'react';
import MenuCard from './MenuCard';
import burger1 from '../../assets/burger1.png';
import burger2 from '../../assets/burger2.png';
import burger3 from '../../assets/burger3.png';

const items = [
  {
    id: 1,
    src: burger1,
    price: 200,
    title: 'Cheese Burger',
    delay: 0.1,
  },
  {
    id: 2,
    src: burger2,
    price: 500,
    title: 'Cheese Burger vegane',
    delay: 0.4,
  },
  {
    id: 3,
    src: burger3,
    price: 1800,
    title: 'Cheese Burger with french fries',
    delay: 0.8,
  },
];
const Menu = () => {
  const addToCart = () => {
    console.log('add');
  };

  return (
    <section id='menu'>
      <h1>MENU</h1>
      <div>
        {items.map((item) => (
          <MenuCard
            key={item.id}
            itemNum={item.id}
            burgerSrc={item.src}
            price={item.price}
            title={item.title}
            handler={addToCart}
            delay={item.delay}
          />
        ))}
      </div>
    </section>
  );
};

export default Menu;
