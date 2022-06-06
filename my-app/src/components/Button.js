import { useState } from 'react';

function Button() {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount(count + 1);
  };
  return <div onClick={onClick}>Add {count}</div>;
}

export default Button;
