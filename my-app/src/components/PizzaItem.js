import React, { useState } from 'react';
import Button from './Button';

function PizzaItem({ obj }) {
  const typesOfPizzas = ['thin', 'standart'];
  const [activeType, setActiveType] = useState('');
  const [activeSize, setActiveSize] = useState(null);
  return (
    <div>
      <li key={obj.id}>
        <img className="w-40" src={obj.img} alt="img" />
        <span>{obj.name}</span>
        <div className="bg-[#858383]">
          <ul className="grid grid-cols-2">
            {obj.types.map((item, i) => (
              <li
                key={i}
                onClick={() => setActiveType(i)}
                className={activeType === i ? 'bg-slate-50' : ''}>
                {typesOfPizzas[i]}
              </li>
            ))}
          </ul>
          <ul className="grid grid-cols-3">
            {obj.sizes.map((item) => (
              <li
                key={item}
                onClick={() => setActiveSize(item)}
                className={activeSize === item ? 'bg-slate-50' : ''}>
                {item} sm
              </li>
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
