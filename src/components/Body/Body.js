import React, { useEffect } from 'react';
import './Body.sass';
import Quizzes from '../Quizzes/Quizzes';
import Home from '../Home/Home';
import News from '../News/News';
import getNews from '../../store/actions/newsActions';

import { Switch, Route } from "react-router-dom";

import { useDispatch } from 'react-redux';

const Body = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNews());
    }, [dispatch])

    return (
        <div className="home-container">
            <Switch>
                <Route path="/tests">
                    <Quizzes />
                </Route>
                <Route path="/news">
                    <News />
                </Route>
                <Route path="/bio">
                    <Quizzes />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    );
}

export default Body;