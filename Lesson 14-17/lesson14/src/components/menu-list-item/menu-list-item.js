import React from 'react';
import './menu-list-item.scss';
import {Link} from 'react-router-dom';

const MenuListItem = ({menuItem, onAddToCart}) => {
    const {title, price, url, id, category} = menuItem;

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
            <button onClick={() => onAddToCart()} className="menu__btn">Add to cart</button>
            <Link to={`/menu/${id}`} className="menu__btn">Details</Link>
        </li>
    )
}

export default MenuListItem;