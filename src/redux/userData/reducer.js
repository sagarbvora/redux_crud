import {USER_ADD, USER_DELETE, USER_EDIT} from "./reduxType";

const initalState = {
    data: []
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case USER_ADD:
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        case USER_DELETE:
            return {
                ...state,
                data: state.data.filter(data => data.id !== action.payload)
            };
        case USER_EDIT:
             const updateRecord = state.data.map(users =>{
                 if (users.id === action.payload.id){
                     return action.payload;
                 }
                 return users
             })
            return{
                 data: updateRecord
            }
            default:
                return state

    }
}

export default reducer;