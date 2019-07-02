import React from 'react';
import MenuListItem from '../menu-list-item';
// import connect from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const ItemPage = ({items}) => {
    return (
        <Router>
            <Route path={`/main/${items}`} component={MenuListItem} />
        </Router>
        
    )
}

// const mapStateToProps = ({id}) => {
//     return {
//         payload: id
//     }
// }

export default ItemPage;