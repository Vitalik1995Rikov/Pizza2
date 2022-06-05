import React, { useState } from 'react';
import Button from './Button';

function PizzaItem({ obj }) {
  const typesOfPizzas = ['тонкое', 'стандарт'];
  const [activeType, setActiveType] = useState('');
  return (
    <div>
      <li key={obj.id}>
        <img className="w-40" src={obj.img} alt="img" />
        <span>{obj.name}</span>
        <div className="bg-[#858383]">
          <ul className="grid grid-cols-2">
            {obj.types.map((item, i) => (
              <li
                onClick={() => setActiveType(i)}
                className={activeType === i ? 'bg-slate-50' : ''}>
                {typesOfPizzas[i]}
              </li>
            ))}
          </ul>
          <ul className="grid grid-cols-3">
            {obj.sizes.map((item) => (
              <li>{item} sm</li>
            ))}
          </ul>
        </div>
        <div className="flex">
          <div>{obj.price}</div>
          <div>
            <Button />
          </div>
        </div>
      </li>
    </div>
  );
}

export default PizzaItem;
