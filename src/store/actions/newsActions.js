import { GET_NEWS, NEWS_ERROR } from '../types';
import axios from 'axios';

const getNews = () => dispatch => {
    const url = 'https://newsapi.org/v2/everything';
    const q = 'Taylor Swift';
    const sortBy = 'popularity';
    const key = "41b4f2a8284d4a6392f9c64f299d8241";

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    axios.get(url, {
        params: {
            q: q,
            from: today,
            sortBy: sortBy,
            apiKey: key
        }
    })
    .then((res) => {
        console.log('res', res);
        dispatch({
            type: GET_NEWS,
            payload: res.data
        });
    })
    .catch((err) => {
        dispatch({
            type: NEWS_ERROR,
            payload: err
        });
    });
}

export default getNews;