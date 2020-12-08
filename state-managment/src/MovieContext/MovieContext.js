import React, {useState, createContext} from 'react';

//Se exportarán varios, por eso no default

export const MovieContext = createContext();

//El problema de usar este método es que todos los componentes que están usando este Provider, se van a renderear nuevamente

export const MovieProvider = (props) =>{
	const [movies, setMovies] = useState([
		{
			name: 'Harry Potter',
			price: '9',
			id: 1
		},
		{
			name: 'Game of Thrones',
			price: '10',
			id: 2
		},
		{
			name: 'Inception',
			price: '20',
			id: 3
		}
	]);

	return (
		<MovieContext.Provider value={[movies,setMovies]}>
			{/*Render todo lo que esté acá, pasado desde afuera*/}
			{props.children}
		</MovieContext.Provider>
	);

}