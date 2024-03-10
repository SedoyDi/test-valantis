import React from 'react';
import './Page404.css';

export default function Page404() {
    return (
        <main className='page-404'>
            <h1 className='page-404__title'>404</h1>
            <ul className='page-404__discription'>
                Ошибка 404 возникает:
                <li>когда сервер не может найти запрашиваемый ресурс.</li>
                <li>Неверно введён URL.</li>
                <li>Ссылка ведёт на несуществующие страницы.</li>
                <li>Ресурсы перемещены или удалены с сервера.</li>
            </ul>
        </main>
    )
}
