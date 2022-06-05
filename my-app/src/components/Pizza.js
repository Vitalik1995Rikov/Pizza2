import React from 'react';
import PizzaItem from './PizzaItem';

const pizzas = [
  {
    id: 1,
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/e5c6c0eab4584aca913210aef749d6a7_138x138.jpeg',
    name: 'Индейка в мандаринах',
    sizes: [30, 35],
    types: [0, 1],
    price: 250,
  },
  {
    id: 2,
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/2c71cd53e50746279f7aa0f59c7ec50f_138x138.jpeg',
    name: 'Сырная',
    sizes: [25, 35],
    types: [1],
    price: 350,
  },
  {
    id: 3,
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/e9624d2bf1ae41598cd6635c0d3ed0f6_138x138.jpeg',
    name: 'Пепперони фреш',
    sizes: [25, 30, 35],
    types: [0, 1],
    price: 420,
  },
  {
    id: 4,
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/9bd4c76d4c2548c090ac6ae5a1eabae6_138x138.jpeg',
    name: 'Песто',
    sizes: [25, 30],
    types: [0, 1],
    price: 170,
  },
  {
    id: 5,
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2a933294-138d-42ff-9ae3-9a3dda115aa0.jpg',
    name: 'Ветчина и сыр',
    sizes: [25, 30, 35],
    types: [0, 1],
    price: 250,
  },
  {
    id: 6,
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/7a0fac09c2264f8e8928f205c7acb5cf_138x138.jpeg',
    name: 'Карбонара',
    sizes: [30, 35],
    types: [0, 1],
    price: 270,
  },
  {
    id: 7,
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/dd4b719911d048e0b05c3e4219880e64_138x138.jpeg',
    name: 'Двойной ципленок',
    sizes: [25, 35],
    types: [1],
    price: 290,
  },
  {
    id: 8,
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/ca0730a9b2d6457a899a41765555dc29_138x138.jpeg',
    name: 'Додо Микс',
    sizes: [25, 30, 35],
    types: [0, 1],
    price: 300,
  },
  {
    id: 9,
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/80af1cf2138447b4a9afc30df6af712c_138x138.jpeg',
    name: 'Пепперони',
    sizes: [25],
    types: [0, 1],
    price: 320,
  },
  {
    id: 10,
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/6b61691078454b3793cdbfbbaa15cf58_138x138.jpeg',
    name: 'Маргарита',
    sizes: [25, 35],
    types: [0, 1],
    price: 150,
  },
  {
    id: 11,
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/67040d5b9c3a42e2a0deb93cca61f1ac_138x138.jpeg',
    name: 'Фристайло',
    sizes: [30, 35],
    types: [1],
    price: 430,
  },
  {
    id: 12,
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/1130292c8ffb4c34bb0a20619e65efb3_138x138.jpeg',
    name: 'Четыре сыра',
    sizes: [25, 30, 35],
    types: [0],
    price: 410,
  },
];

const Pizza = () => {
  return (
    <div className="m-5">
      <span className="text-2xl font-bold">Все пиццы</span>
      <ul className="grid grid-cols-4">
        {pizzas.map((item) => (
          <PizzaItem obj={item} />
        ))}
      </ul>
    </div>
  );
};

export default Pizza;
