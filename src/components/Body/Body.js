import React, { useEffect, Suspense, lazy } from 'react';
import './Body.sass';
import getNews from '../../store/actions/newsActions';

import Spinner from 'react-bootstrap/Spinner';

import { Switch, Route } from "react-router-dom";

import { useDispatch } from 'react-redux';

const Home = lazy(() => import('../Home/Home'));
const Quizzes = lazy(() => import('../Quizzes/Quizzes'));
const News = lazy(() => import('../News/News'));

const Body = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNews());
    }, [dispatch])

    return (
        <div className="home-container">
            <Suspense fallback={<div className="spinner-container"><Spinner animation="border" size="lg" /></div>}>
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
            </Suspense>
        </div>
    );
}

export default Body;