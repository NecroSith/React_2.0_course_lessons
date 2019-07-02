const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: [],
    itemsBought: false,
    itemMultiplier: 1
}

const reducer = (state = initialState, action) => {
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
            console.log('Multiplier ' + state.itemMultiplier);
           

            const id = action.payload;
            const item = state.menu.find(item => item.id === id);
            console.log('Count ' + item.count);
            const itemExists = state.items.find(item => item.id === id);
            if (itemExists) {
                console.log(state.itemMultiplier);
                const itemIndex = state.items.findIndex(item => item.id === id);
                const newMultiplier = state.itemMultiplier + 1;
                console.log('Multiplier new' + newMultiplier);
                state.itemMultiplier = item.price;
                const newItem = {
                    title: item.title,
                    count: 1,
                    price: item.price + state.itemMultiplier ,
                    url: item.url,
                    id: item.id
                };
                return {
                    ...state,
                    itemsBought: false,
                    // itemMultiplier: newMultiplier,
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
                    count: 1,
                    price: item.price,
                    url: item.url,
                    id: item.id,
                    
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
                itemMultiplier: 1,
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