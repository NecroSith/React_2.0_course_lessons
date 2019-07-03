import React from 'react';
import './cart-table.scss';
import WithRestoService from '../hoc';
import {connect} from 'react-redux';
import {deleteFromCart, cleanItems} from '../../actions';

class CartTable extends React.Component {

    postItemsToCart = () => {
        const {RestoService} = this.props;
        RestoService.postItems(this.props.items)
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => new Error(err));
        this.props.cleanItems();
    }

    render() {
        const {items, deleteFromCart, itemsBought} = this.props;
        const data = items ? <button onClick={this.postItemsToCart} className="cart-btn">Купить все!</button> : null;

        const success = <div style={{marginTop: 30}}className="cart__title">Спасибо за покупку в нашем магазине!</div>;
        console.log(itemsBought);
        return (
            <>
                <div className="cart__title">Ваш заказ:</div>
                {itemsBought ? success : null}
                <div className="cart__list">
                    {
                        items.map(item => {
                            const {id, title, url, price, count} = item;
                            return (
                                <div key={id} className="cart__item">
                                    <img src={url} className="cart__item-img" alt={title}></img>
                                    <div className="cart__item-title">{title}{`\t x${count}`}</div>
                                    <div className="cart__item-price">{price}$</div>
                                    <div onClick={() => deleteFromCart(id)}className="cart__close">&times;</div>
                                </div>
                            )
                        })
                    }
                    {data}
                </div>
                
            </>
        );
     }
    
};

const mapStateToProps = ({items, itemsBought}) => {
    return {
        items,
        itemsBought
    }
}

const mapDispatchToProps = {
    deleteFromCart,
    cleanItems
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(CartTable));