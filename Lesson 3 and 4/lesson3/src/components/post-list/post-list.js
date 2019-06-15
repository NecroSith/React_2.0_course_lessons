import React from 'react';

import PostListItem from '../post-list-item';
import { ListGroupItem, ListGroup } from 'reactstrap';
import styled from 'styled-components';

const listGroup = styled.ul`
    margin-top: 50px;
    li {
        padding: 20px 35px 10px 35px;
        margin-top: 10px;
    }
`;

const PostList = ({posts, deleteItem, onToggleImportant, onToggleLiked}) => {

    const elements = posts.map((item) => {
        if (typeof(item) == 'object') {
            const {id, ...itemProps} = item;
            return (
                <ListGroupItem key={id}>
                    <  PostListItem 
                        {...itemProps}
                        onDelete={() => deleteItem(id)}
                        // toggleModal={() => toggleModal(label)}
                        onToggleImportant={() => onToggleImportant(id)}
                        onToggleLiked = {() => onToggleLiked(id)}
                    />
                </ListGroupItem>
            )
        }
    })
    return (
        <ListGroup>
            {elements}
        </ListGroup>
    )
}

export default PostList;