import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {menuLoaded, menuRequested, menuError} from '../../actions';
import Spinner from '../spinner';


import './menu-list.scss';

class MenuList extends Component {

    componentDidMount() {
        this.props.menuRequested();

        const {RestoService} = this.props;
        RestoService.getMenuItems()
            .then(res => this.props.menuLoaded(res))
            .catch(res => this.props.menuError(res));
    }
    
    render() {
        const {menuItems, loading} = this.props;
        console.log(menuItems);

        const menuListItem = menuItems.map(menuItem => {
            return <MenuListItem key={menuItem.id} menuItem={menuItem} />
        })

        const content = loading ? <Spinner /> : menuListItem;

        return (
            <ul className="menu__list">
                {
                   content 
                }
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
        menuLoaded,
        menuRequested,
        menuError
}


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));