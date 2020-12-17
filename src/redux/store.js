import {createStore, applyMiddleware,compose} from "redux";
import reducer from "./userData/reducer";
import logger from 'redux-logger';

const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState'))
    : {
        data: []
    };

const store = createStore(reducer,persistedState ,compose( applyMiddleware(logger),   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) );

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})
export default store;