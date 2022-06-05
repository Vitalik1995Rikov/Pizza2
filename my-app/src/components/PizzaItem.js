import React from 'react';
import Button from './Button';

function PizzaItem({ obj }) {
  return (
    <div>
      <li key={obj.id}>
        <img className="w-40" src={obj.img} alt="img" />
        <span>{obj.name}</span>
        <div className="bg-[#858383]">
          <ul className="grid grid-cols-2">
            <li>тонкое</li>
            <li>стандарт</li>
          </ul>
          <ul className="grid grid-cols-3">
            <li>25</li>
            <li>30</li>
            <li>35</li>
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
