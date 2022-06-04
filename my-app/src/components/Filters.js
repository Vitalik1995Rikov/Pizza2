const filters = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

function Filters() {
  return (
    <div>
      <ul className="flex justify-center space-x-10">
        <li>
          <button>Все</button>
        </li>
        {filters &&
          filters.map((items, idx) => (
            <ul key={idx}>
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
