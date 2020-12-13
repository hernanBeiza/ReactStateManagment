import React, {useContext} from 'react';

import { MovieContext } from './../MovieContext/MovieContext';

const Nav = () => {
	const [movies, setMovies] = useContext(MovieContext);

	return (
		<div>
			<h3>Ejemplo de State Managment</h3>
			<p>Total de Películas: {movies.length}</p>
		</div>
	);

}

export default Nav;