import React, { useState } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );

    const [searchInput, setSearchInput] = useState(q);

    let heroesFilter = getHeroesByName( q );
    
    const handleInputChange = ({ target }) => {
        setSearchInput( target.value );
    }

    const handleBtnSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchInput}`);
    };
    
    return (
        <div>
            <h1>Search Hero</h1>
            <hr />

            <form className="mt-3 d-flex justify-content-between">
                <input 
                    type="text"
                    name="search"
                    className="form-input w-75"
                    placeholder="Hero..."
                    value={ searchInput }
                    onChange={ handleInputChange }
                    
                />
                <button
                    className="btn btn-outline-primary"
                    onClick={ handleBtnSearch }
                >
                    Search
                </button>
            </form>

            <div className="card-columns mt-4 animate__animated animate__fadeIn">
                {
                    heroesFilter.map( hero => (
                        <HeroCard 
                            key={ hero.id }
                            { ...hero } 
                        />
                    ))
                }
            </div>

        </div>
    )
}
