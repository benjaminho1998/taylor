import { combineReducers } from 'redux';
import newsReducer from './newsReducer';

const cr = combineReducers({
    newsList: newsReducer
});

export default cr;