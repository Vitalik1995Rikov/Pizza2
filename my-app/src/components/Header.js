import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex shadow-lg m-5 p-3 justify-between">
      <Link to="/">
        <div className="flex">
          <div>
            <img src="https://img.icons8.com/stickers/50/000000/pizza.png" alt="img" />
          </div>
          <div>
            <div className="text-lg font-bold">MY PIZZA</div>
            <div className="text-sm">The best pizza in the world</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Header;
