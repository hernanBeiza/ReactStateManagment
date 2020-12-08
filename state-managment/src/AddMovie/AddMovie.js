import React, {useState, useContext, useEffect} from 'react';
import PropTypes from 'prop-types';

import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import Movie from './../Movie/Movie';
import { MovieContext } from './../MovieContext/MovieContext';

const AddMovie = () => {
	const [movies,setMovies] = useContext(MovieContext);

	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
  const [disabled, setDisabled] = useState(true);

	const updateName = (e) => {
		setName(e.target.value);
	}
	const updatePrice = (e) => {
		setPrice(e.target.value);
	}

  useEffect(() => {
    setDisabled( formValidation() )
  }, [name, price]);

  const formValidation = () => {
    if (name === "") {
      //setNameError('Name cant be blank!')
      return true;
    } else if (price === "") {
      return true;
    } else {
      //setNameError(null)
      return false;
    }
  }

	const addMovie = (e) => {
		e.preventDefault();
		let pelicula = {id:movies.length+1,name:name,price:price}
		setMovies(prevMovies=>[...prevMovies,pelicula]);
		//
		setName("");
		setPrice("");
	}

	return (
		<Form onSubmit={addMovie}>
			<FormGroup row>
        <Col xs={6}>
				  <Input type="text" name="text" id="exampleEmail" placeholder="Nombre" value={name} onChange={updateName} />
        </Col>
        <Col xs={3}>
	  		  <Input type="text" name="price" id="examplePassword" placeholder="Precio" value={price} onChange={updatePrice}/>
        </Col>
        <Col xs={3}>
		  		<Button disabled={disabled} block>Guardar</Button>
        </Col>
			</FormGroup>
		</Form>	);
}

AddMovie.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number
}

export default AddMovie;