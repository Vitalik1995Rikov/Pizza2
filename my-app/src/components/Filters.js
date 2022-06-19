const filters = ['All', 'Meat', 'Vegetarian', 'Grilled', 'Spicy', 'Closed'];

function Filters({ value, onClickCategory }) {
  return (
    <div>
      <ul className="flex justify-center space-x-10">
        {filters &&
          filters.map((items, idx) => (
            <ul
              key={idx}
              onClick={() => onClickCategory(idx)}
              className={value === idx ? 'bg-slate-400' : ''}>
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
