import React from 'react';
import BaseImage from '../statics/Base.png';
import { Container, Row, Col, Button, InputGroup, FormControl, Form } from 'react-bootstrap';
import './styles.css';

export default ({goToNextStep}) =>   {
  return ( 
    <Container className="pt-5">
      <Row>
        <Col md={7} className="side-box d-flex">
          <div className="side-box-shadow-left p-3">            
          </div>
          <div className="side-box-shadow-right"></div>
        </Col>
        <Col>
          <h3>Elige, <span className="text-primary">tu protección</span> </h3>
          <h5>Selecciona tu plan de salud ideal</h5>
          <br/>
          <InputGroup className="mb-3">        
            <FormControl as="select">
              <option>DNI</option>
            </FormControl>        
            <FormControl placeholder="Nro de Documento" />
          </InputGroup>

          <FormControl type="date" placeholder="Fecha de nacimiento" />
          
          <br/>

          <FormControl placeholder="Celular" />

          <br/>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Acepto la Politica de Protección de Datos Personales y los Términos y Condiciones" />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Acepto la Politica de Envio de Comunicaciones Comerciales" />
          </Form.Group>

          <Button onClick={goToNextStep}>Comencemos</Button>
        </Col>
      </Row>
    </Container>
  );
}