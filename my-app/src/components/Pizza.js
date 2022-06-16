import React, { useEffect, useState } from 'react';
// import PizzaItem from './PizzaItem';
import MyLoader from './MyLoader';

const Pizza = () => {
  const [pizzas, setPizzas] = useState([]);
  useEffect(
    () =>
      fetch('https://62a8e484943591102bab74e4.mockapi.io/items')
        .then((res) => res.json())
        .then((json) => setPizzas(json)),
    [],
  );

  return (
    <div className="m-5">
      <span className="text-2xl font-bold">All pizzas</span>
      <ul className="grid grid-cols-4">
        {pizzas.map((item) => (
          <MyLoader key={item.id} obj={item} />
        ))}
      </ul>
    </div>
  );
};

export default Pizza;
