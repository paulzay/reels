const filter = (state = 'All', action) => {
    switch (action.type) {
        case 'CHANGE_FILTER':
            return action.network;
        default:
            return state;
    }
};

export default filter;
