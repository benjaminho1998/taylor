import { GET_NEWS, NEWS_ERROR } from '../types';

const initialState = {
    news: []
};

const newsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_NEWS:
            return {
                ...state,
                news: action.payload
            };
        case NEWS_ERROR:
            return {
                error: action.payload
            }
        default:
            return state;
    }
}

export default newsReducer;