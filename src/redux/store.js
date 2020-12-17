import {createStore, applyMiddleware,compose} from "redux";
import reducer from "./userData/reducer";
import logger from 'redux-logger';

const store = createStore(reducer,compose( applyMiddleware(logger),   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) )

export default store;