import React from 'react';
import Search from '../components/search';
import { fetchPokemon } from '../services/getPokemon';
import PokemonData from '../components/PokemonData';
import { Spinner, Alert } from 'react-bootstrap';
import PokemonList from '../components/pokemon/PokemonList';

const spinnerStyle = {
    width: '5rem',
    height: '5rem',
    color: '#E21A1A',
}

const spinnerWrapperStyle = {
    textAlign: 'center',
    marginTop: '50px',
}

export default function HomePage(){

    const [pokemon, setPokemon] = React.useState();
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [errorMsg, setErrorMsg] = React.useState('');


    const getPokemon = async (query) => {
        if (!query) {
            setErrorMsg('Você deve preencher o campo de pesquisa!')
            setError(true);
            return;
        }
        setError(false);
        setLoading(true);
        setTimeout(async () => {
        try {
        const response = await fetchPokemon(query);
        const results = await response.json();
        setPokemon(results);
        setLoading(false);
        } catch (err) {
            setLoading(false);
            setError(true);
            setErrorMsg('Pokémon não encontrado');
        }
        }, 1500);
    }


    return (
        <div>
            {error ? (<Alert variant='danger'>
                {errorMsg}
            </Alert>): null}
            <Search getPokemon={getPokemon} />
            {loading ? (
            <div style={spinnerWrapperStyle}>
            <Spinner style={spinnerStyle} animation="border" /> 
            </div>
            ): null}            
            {!loading && pokemon ? (
                <PokemonData 
                key={pokemon.name}
                name={pokemon.name}
                sprite={pokemon.sprites.front_default}
                abilities={pokemon.abilities}
                stats={pokemon.stats}
                types={pokemon.types}
                />
            ): <div className="row">
                <div className="col">            
            <PokemonList />
            </div>
            </div>
            }
            
        </div>
        
    )
}