import React from 'react';
import './menu-list-item.scss';

const MenuListItem = ({menuItem}) => {
    const {title, price, url, category} = menuItem;

    let iconType = '';
    switch (category) {
        case 'salads':
            iconType = './img/vegetables.svg';
            break;
        case 'pizza':
            iconType = './img/pizza-slice.svg';
            break;
        case 'meat':
            iconType = './img/steak.svg';
            break;
        default: 
            iconType = './img/fork.svg';
            break;
    }
    return (
        <li className="menu__item">
            <div className="menu__title">
                <img src={iconType} alt={title}></img>
                {title}
            </div>
            <img className="menu__img" src={url} alt="Cesar salad"></img>
            <div className="menu__category">Category: <span>{category}</span></div>
            <div className="menu__price">Price: <span>{price}$</span></div>
            <button className="menu__btn">Add to cart</button>
        </li>
    )
}

export default MenuListItem;