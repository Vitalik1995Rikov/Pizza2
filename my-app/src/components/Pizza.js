import React, { useEffect, useState } from 'react';
import PizzaItem from './PizzaItem';
import MyLoader from './MyLoader';

const Pizza = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(
    () =>
      fetch('https://62a8e484943591102bab74e4.mockapi.io/items')
        .then((res) => {
          res.json();
        })
        .then((json) => {
          setPizzas(json);
          setIsLoading(false);
        }),
    [],
  );

  return (
    <div className="m-5">
      <span className="text-2xl font-bold">All pizzas</span>
      <ul className="grid grid-cols-4">
        {isLoading
          ? [...new Array(6)].map(() => <MyLoader />)
          : pizzas.map((item) => <PizzaItem key={item.id} obj={item} />)}
      </ul>
    </div>
  );
};

export default Pizza;
