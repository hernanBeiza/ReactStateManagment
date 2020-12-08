import React, {useState} from 'react';

import { ListGroupItem, Badge } from 'reactstrap';

const Movie = ({name,price}) => {
	
	const verDetalle = () => {
		console.log("verDetalle");
		console.log(name,price);
	}

	return (
    <ListGroupItem onClick={verDetalle} action tag="button">{name} <Badge pill>${price}</Badge></ListGroupItem>
	);

}

export default Movie;