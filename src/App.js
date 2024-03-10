import React, { useEffect, useState } from 'react';
import './App.css';
import ButtonList from './components/ButtonList/ButtonList';
import ItemCard from './components/ItemCard/ItemCard';
// import { getIds } from './utils/api';

function App() {
  const [itemList, setItemList] = useState([
    {
      "brand": null,
      "id": "1789ecf3-f81c-4f49-ada2-83804dcc74b0",
      "price": 16700.0,
      "product": "Золотое кольцо с бриллиантами"
    },
    {
      "brand": '',
      "id": "1789ecf3-f81c-4f49-ada2-83804dcc74b0",
      "price": 16700.0,
      "product": "Золотое кольцо с бриллиантами"
    },
    {
      "brand": "null",
      "id": "1789ecf3-f81c-4f49-ada2-83804dcc74b0",
      "price": 16700.0,
      "product": "Золотое кольцо с бриллиантами"
    },
    {
      "brand": '',
      "id": "1789ecf3-f81c-4f49-ada2-83804dcc74b0",
      "price": 16700.0,
      "product": "Золотое кольцо с бриллиантами"
    },
    {
      "brand": null,
      "id": "1789ecf3-f81c-4f49-ada2-83804dcc74b0",
      "price": 16700.0,
      "product": "Золотое кольцо с бриллиантами"
    },
    {
      "brand": null,
      "id": "1789ecf3-f81c-4f49-ada2-83804dcc74b0",
      "price": 16700.0,
      "product": "Золотое кольцо с бриллиантами"
    },
    {
      "brand": null,
      "id": "1789ecf3-f81c-4f49-ada2-83804dcc74b0",
      "price": 16700.0,
      "product": "Золотое кольцо с бриллиантами"
    },
    {
      "brand": null,
      "id": "1789ecf3-f81c-4f49-ada2-83804dcc74b0",
      "price": 16700.0,
      "product": "Золотое кольцо с бриллиантами"
    },
  ]);

  const length = itemList.length;

  const [count, setCount] = useState(1);

  console.log(itemList.length)
  // useEffect(() => {
  //   getIds()
  //     .then((res) => {
  //       console.log(`результат ${res}`)
  //     })
  //     .catch(err => console.log(err))
  // }, []);

  return (
    <>
      <header className='app__header'>
        <h1>Тестовое задание</h1>
      </header>
      <main className="app__main">
        <ButtonList
          length={length}
          count={count}
          setCount={setCount} />
        <ul className='app__item-list'>
          {itemList.map((item, key) => <ItemCard key={key} item={item} />)}
        </ul>
        <ButtonList
          length={length}
          count={count}
          setCount={setCount} />
      </main>
    </>
  );
}

export default App;
