import React, {useState, useContext} from 'react';

import { ListGroup } from 'reactstrap';

import { MovieContext } from './../MovieContext/MovieContext';
import Movie from './../Movie/Movie';
import Nav from './../Nav/Nav';

const MovieList = () => {
	const [movies,setMovies] = useContext(MovieContext);

	return (
		<div>
			<h2>Listado de películas</h2>
			<ListGroup>
			{movies.map(movie=>{
				//return <li>{movie.name}</li>
				return <Movie key={movie.id} name={movie.name} price={movie.price}/>
				})
			}
			</ListGroup>
		</div>
	);

}

export default MovieList;