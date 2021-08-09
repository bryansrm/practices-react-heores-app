import React from 'react'
import { Redirect, useParams } from 'react-router-dom';

import { getHeroesById } from '../../selectors/getHeroById';

export const HeroScreen = ( props ) => {
    const { history } = props;

    const { heroId } = useParams();

    const hero = getHeroesById( heroId );

    if( !hero.length ){
        return <Redirect to="/" />;
    }

    const handleReturn = () => {
        history.length <= 2 ? history.push('/') : history.goBack();
    }

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero[0];

    return (
        <div className="row">
            <div className="col-md-4">
                <img 
                    src={`/assets/heroes/${id}.jpg`}
                    alt={ superhero }
                    className="img-thumbnail"
                />
            </div>
            <div className="col-md-8">
                <h4>{ superhero }</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego:</b> { alter_ego } </li>
                    <li className="list-group-item"> <b>Publishe:</b> { publisher } </li>
                    <li className="list-group-item"> <b>First appearance:</b> { first_appearance } </li>
                </ul>

                <h4 className="mt-4"> Characters </h4>
                <p> { characters } </p>

                <button
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>

            </div>
        </div>
    )
}
