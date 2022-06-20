import React from "react"
import { useState, useEffect } from "react";
import { Filters, Sort } from '../components';
import PizzaItem from '../components/PizzaItem';
import MyLoader from '../components/MyLoader';

function Home() {
    const [categoryId, setCategoryId] = useState(0);
    const [pizzas, setPizzas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true)
      fetch('https://62a8e484943591102bab74e4.mockapi.io/items?category=' + categoryId)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          setPizzas(json);
          setIsLoading(false);
        });
        window.scrollTo(0, 0);
      }, [categoryId],
      );
    return (
        <div>
            <div className="flex justify-around">
                <Filters value={categoryId} onClickCategory={(i) => setCategoryId(i)}/>
                <Sort />
            </div>
            <div className="m-5">
      <span className="text-2xl font-bold">All pizzas</span>
      <ul className="grid grid-cols-4">
        {isLoading
          ? [...new Array(6)].map((i, item) => <MyLoader key={item} />)
          : pizzas.map((item) => <PizzaItem key={item.id} obj={item} />)}
      </ul>
    </div>
        </div>
    )
}

export default Home;

