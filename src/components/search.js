import React from 'react'
import { Form, Container, Col, Button } from 'react-bootstrap';

import logo from './pokemon/Logo.png';
import { Link } from 'react-router-dom';
export default function Search(props) {

    
    const [search, setSearch] = React.useState('');

        return (
            <Container>
                <Form className="mt-2">
                    <Form.Row className="aling-items-center">
                    <Col sm={7} className="my-1 aling-items-center">
                    <Link to='/'> 
                        <img src={logo} style={{width:'150', height:'50', marginLeft:'470px' }} alt="Pokémon">
                       
                        </img>   
                        </Link>                      
                    </Col>
                        <Col sm={10} className="my-1">
                            <Form.Control
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Pokémon ou ID" />
                        </Col>
                        <Col sm={2} className="my-1">
                            <Button block onClick={(e) => props.getPokemon(search)}>Buscar</Button>
                        </Col>
                    </Form.Row>
                </Form>
            </Container>
    )
}
