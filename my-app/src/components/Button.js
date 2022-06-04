import { useState } from 'react';

function Button() {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount(count + 1);
  };
  return <div onClick={onClick}>Добавить {count}</div>;
}

export default Button;
