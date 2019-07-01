import React from 'react';
import MenuListItem from '../menu-list-item';
// import connect from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const ItemPage = ({id}) => {
    return (
        <Router>
            <Route path={`/main/${id}`} component={MenuListItem} />
        </Router>
        
    )
}

const mapStateToProps = (state) => {
    return {
        id: state.id
    }
}

export default ItemPage;