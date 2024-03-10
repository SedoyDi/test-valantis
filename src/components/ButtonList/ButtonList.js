import React from 'react';
import './ButtonList.css';

function ButtonList({ count, length, setCount, hendleInc, hendleDec }) {

    const textCount = count === 1
        ? `${count}* ... ${length}`
        : (count === length
            ? `1 ... ${count}*`
            : `1 ... ${count}* ... ${length}`)

    function decCount() {
        hendleDec()
        let res = count - 1;
        setCount(res);
    }

    function incCount() {
        hendleInc()
        let res = count + 1;
        setCount(res);
    }

    return (
        <section className='button-list'>
            <button
                className='button button-list__left-button'
                onClick={decCount}
                disabled={count === 1}
            >Назад</button>
            <span className='button-list__counter'>{textCount}</span>
            <button
                className='button button-list__right-button'
                onClick={incCount}
                disabled={count === length}
            > Вперед</button>
        </section >
    )
}

export default ButtonList
