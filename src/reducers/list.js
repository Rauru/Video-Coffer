const listReducerDefaultState = [];

const listReducer = (state = listReducerDefaultState  , action) => {
    switch (action.type) {
        case 'REMOVE_LIST':
            return state.filter(({sid})=>{
                //console.log(action.id);
                return sid !== action.sid
            })
        case 'ADD_LIST':
            return [
                ...state,
                action.video
            ]
        case 'GET_LIST':
            return [
                ...state,
                ...action.list
            ]
            
    default:
        return state;
    }

}

export default listReducer;