import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Navbar } from '../components/ui/Navbar';
import { HeroScreen } from '../components/hero/HeroScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/dc" component={ DcScreen } />
                    <Route exact path="/search" component={ SearchScreen } />
                    <Route exact path="/hero/:heroId" component={ HeroScreen } />
                    
                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}
