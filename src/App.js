import React, { useEffect, useState } from 'react';
import './App.css';
import ButtonList from './components/ButtonList/ButtonList';
import ItemCard from './components/ItemCard/ItemCard';
import Loader from './components/Loader/Loader';
import { getIds, getItems } from './utils/api';

function App() {

  const [isLoading, setIsLoading] = useState(false)
  const [listIds, setListIds] = useState([]);
  const length = listIds.length / 50; // вычисляю кол-во страниц
  const [itemList, setItemList] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const [stepDec, setStepDec] = useState(0);
  const [stepInc, setStepInc] = useState(50);



  const [count, setCount] = useState(1);

  function hendleDecItem() {
    if ((startIndex - 50) >= 0) {
      setStepDec(startIndex - 50)
    } else {
      setStepDec(0)
    }
    const arrayIds = listIds.slice(stepDec, startIndex);
    setIsLoading(true);
    getItems(arrayIds)
      .then((res) => {
        setItemList(res.result);
        setStartIndex(stepDec)
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }

  function hendleIncItem() {
    if ((startIndex + 50) < listIds.length) {
      setStepInc(startIndex + 50)
    } else {
      setStepInc(listIds.length)
    }
    const arrayIds = listIds.slice(startIndex, stepInc);

    setIsLoading(true)
    getItems(arrayIds)
      .then((res) => {
        setItemList(res.result);
        setStartIndex(stepInc)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false)
      });
  }

  useEffect(() => {
    getIds()
      .then((res) => {
        const result = JSON.parse(JSON.stringify(res.result));
        const uniqueIds = result.filter((value, index, self) => self.indexOf(value) === index);
        setListIds(uniqueIds);// создаём массив уникальных id
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (listIds.length !== 0) {
      const arrayIds = listIds.slice(startIndex, stepInc);
      setIsLoading(true)
      getItems(arrayIds)
        .then((res) => {
          setStepInc(startIndex + 50)
          setItemList(res.result);
          setStartIndex(stepInc)
          setIsLoading(false)
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false)
        });
    }
  }, [listIds])

  return (
    <>
      <header className='app__header'>
        <h1>Тестовое задание</h1>
      </header>
      <main className="app__main">
        <ButtonList
          length={length}
          count={count}
          setCount={setCount}
          hendleInc={hendleIncItem}
          hendleDec={hendleDecItem} />
        {isLoading
          ? (<Loader />)
          : (<ul className='app__item-list'>
            {itemList.map((item, key) => <ItemCard key={key} item={item} />)}
          </ul>)
        }
        <ButtonList
          length={length}
          count={count}
          setCount={setCount}
          hendleInc={hendleIncItem}
          hendleDec={hendleDecItem} />
      </main>
    </>
  );
}

export default App;
