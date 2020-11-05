const initialState = {
    items: null,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'POSTS:SET_ITEMS':
            return {
                ...state,
                items: payload,
            }
        default:
            return state;
    }
}