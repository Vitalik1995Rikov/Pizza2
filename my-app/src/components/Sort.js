import { useState } from 'react';

function Sort() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <div onClick={() => setIsVisible(!isVisible)}>Sort by:</div>
      {isVisible && (
        <div>
          <div>Popular</div>
          <div>Price</div>
          <div>Alphabet</div>
        </div>
      )}
    </div>
  );
}

export default Sort;
