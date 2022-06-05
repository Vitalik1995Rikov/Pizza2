import React from 'react';
import Button from './Button';

function PizzaItem({ obj }) {
  return (
    <div>
      <li key={obj.id}>
        <img className="w-40" src={obj.img} alt="img" />
        <span>{obj.name}</span>
        <div>
          <Button />
        </div>
      </li>
    </div>
  );
}

export default PizzaItem;
