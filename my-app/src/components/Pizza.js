import React from 'react';

const pizzas = [
  {
    id: 1,
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/e5c6c0eab4584aca913210aef749d6a7_138x138.jpeg',
    name: 'Индейка в мандаринах',
  },
  {
    id: 2,
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/2c71cd53e50746279f7aa0f59c7ec50f_138x138.jpeg',
    name: 'Сырная',
  },
  {
    id: 3,
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/e9624d2bf1ae41598cd6635c0d3ed0f6_138x138.jpeg',
    name: 'Пепперони фреш',
  },
  {
    id: 4,
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/9bd4c76d4c2548c090ac6ae5a1eabae6_138x138.jpeg',
    name: 'Песто',
  },
  {
    id: 5,
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2a933294-138d-42ff-9ae3-9a3dda115aa0.jpg',
    name: 'Ветчина и сыр',
  },
  {
    id: 6,
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/7a0fac09c2264f8e8928f205c7acb5cf_138x138.jpeg',
    name: 'Карбонара',
  },
  {
    id: 7,
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/dd4b719911d048e0b05c3e4219880e64_138x138.jpeg',
    name: 'Двойной ципленок',
  },
  {
    id: 8,
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/ca0730a9b2d6457a899a41765555dc29_138x138.jpeg',
    name: 'Додо Микс',
  },
  {
    id: 9,
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/80af1cf2138447b4a9afc30df6af712c_138x138.jpeg',
    name: 'Пепперони',
  },
  {
    id: 10,
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/6b61691078454b3793cdbfbbaa15cf58_138x138.jpeg',
    name: 'Маргарита',
  },
  {
    id: 11,
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/67040d5b9c3a42e2a0deb93cca61f1ac_138x138.jpeg',
    name: 'Фристайло',
  },
  {
    id: 12,
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/1130292c8ffb4c34bb0a20619e65efb3_138x138.jpeg',
    name: 'Четыре сыра',
  },
];

const Pizza = () => {
  return (
    <div className="m-5">
      <span className="text-2xl font-bold">Все пиццы</span>
      <ul className="grid grid-cols-4">
        {pizzas.map((item) => (
          <li key={item.id}>
            <img className="w-40" src={item.img} alt="img" />
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pizza;
