const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
}

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'
    }
}

const menuError = (newMenu) => {
    return {
        type: 'MENU_ERROR',
        errorType: newMenu
    }
}
export {
    menuLoaded,
    menuRequested,
    menuError
}