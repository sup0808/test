import {createStore, combineReducers, applyyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {dishes} from './dishes';
import {comments} from './comments.js';
import { promotions } from './promotions';
import { leaders } from './leaders';

export const ConfigureStore  =()  => {
    const store = createStore(
        combineReducers({
            dishes,
            comments,
            promotions,
            leaders
        }),
        applyyMiddleware(thunk,logger)

    );
    return store;
}