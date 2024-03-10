import React from 'react';
import "./ItemCard.css";

function ItemCard({ item }) {
    return (
        <li className='item-card'>
            <div className='item-card__img'>
                <p className='item-card__brand'>Бренд : <span>{item.brand ? item.brand : 'неизвесен'}</span></p>
            </div>
            <div className='item-card__discription'>
                <p className='item-card__product'>{item.product}</p>
                <p className='item-card__price'>Цена = <span>{item.price} &#8381;</span></p>
            </div>
            <p className='item-card__id'>id : <span>{item.id}</span></p>
        </li>
    )
}

export default ItemCard
