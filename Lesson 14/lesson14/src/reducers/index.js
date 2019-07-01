const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: [],
    itemsBought: false,
    itemMultiplier: 1
}

const reducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false,
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu,
                loading: true,
            };
        case 'MENU_ERROR':
            return {
                ...state,
                loading: true,
                error: true
            };
        case 'ITEM_ADD_TO_CART':
            const id = action.payload;
            const item = state.menu.find(item => item.id === id);
            const itemExists = state.items.find(item => item.id === id);
            if (itemExists) {
                console.log('it is here');
                console.log(state.itemMultiplier);
                const itemIndex = state.items.findIndex(item => item.id === id);
                const newMultiplier = state.itemMultiplier + 1;
                const newItem = {
                    title: item.title,
                    price: item.price * newMultiplier,
                    url: item.url,
                    id: item.id
                };
                return {
                    ...state,
                    itemsBought: false,
                    itemMultiplier: newMultiplier,
                    items: [
                        ...state.items.slice(0,itemIndex),
                        newItem,
                        ...state.items.slice(itemIndex+1)
                       
                    ]
                };
            }
            else {
                const newItem = {
                    title: item.title,
                    price: item.price,
                    url: item.url,
                    id: item.id
                };
                return {
                    ...state,
                    itemsBought: false,
                    items: [
                        ...state.items,
                        newItem
                    ]
                };
            }
            
        case 'ITEM_REMOVE_FROM_CART':
            const index = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === index)
            return {
                ...state,
                itemsBought: false,
                items: [
                    ...state.items.slice(0,itemIndex),
                    ...state.items.slice(itemIndex+1)
                ]
            };
        case 'CLEAN_ITEMS_IN_CART':
            return {
                ...state,
                itemsBought: true,
                items: []
            }
        default: return state;
    }
}

export default reducer;