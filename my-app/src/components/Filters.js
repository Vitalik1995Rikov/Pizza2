import { useState } from 'react';

const filters = ['All', 'Meat', 'Vegetarian', 'Grilled', 'Spicy', 'Closed'];

function Filters() {
  const [activeButton, setActiveButton] = useState(0);
  const onClickCategory = (index) => {
    setActiveButton(index);
  };
  return (
    <div>
      <ul className="flex justify-center space-x-10">
        {filters &&
          filters.map((items, idx) => (
            <ul
              key={idx}
              onClick={() => onClickCategory(idx)}
              className={activeButton === idx ? 'bg-slate-400' : ''}>
              <li>
                <button>{items}</button>
              </li>
            </ul>
          ))}
      </ul>
    </div>
  );
}

export default Filters;
