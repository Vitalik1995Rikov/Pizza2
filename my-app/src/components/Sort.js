import { useState } from 'react';

function Sort() {
  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState(0);
  const onClickSetItem = function (i) {
    setSelected(i);
    setIsVisible(false);
  };
  const data = ['Popular', 'Price', 'Alphabet'];
  return (
    <div>
      <div onClick={() => setIsVisible(!isVisible)}>Sort by: {data[selected]}</div>
      {isVisible && (
        <div>
          {data.map((item, i) => (
            <div onClick={() => onClickSetItem(i)} className={selected === i ? 'bg-slate-500' : ''}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Sort;
