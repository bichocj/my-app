import React from 'react';
import BaseImage from '../statics/Base.png';
import { Container, Row, Col, Button, InputGroup, FormControl, Form } from 'react-bootstrap';
import './styles.css';

export default ({goToNextStep}) =>   {
  return ( 
    <Container className="pt-5">
      <Row>
        <Col className="person-side-box">
          <div className="person-side-box-shadow-right"></div>
        </Col>
        <Col>
          <h3>Hola, <span className="text-primary">Pepito</span> </h3>
          <h5>Valida que los datos sean correctos</h5>
          <br/>
          <InputGroup className="mb-3">        
            <Form.Control as="select" size="lg" custom>
                <option>DNI</option>
            </Form.Control>        
            <FormControl placeholder="Nro de Documento" size="lg" />
          </InputGroup>

          <FormControl placeholder="Nombres" size="lg"/>
          
          <br/>
          <FormControl placeholder="Apellido Paterno" size="lg"/>
          
          <br/>
          <FormControl placeholder="Apellido Materno" size="lg"/>
          
          <br/>
          <FormControl placeholder="Fecha de Nacimiento" type="date" size="lg"/>
          
          
          <br/>
          Sexo
          <Form.Check 
            type={'radio'}
            name={`radio-0`}
            label={`Masculino`}
          />
          <Form.Check 
            type={'radio'}
            name={`radio-0`}
            label={`Femenino`}
          />

          
          <br/>
          A quien vamos a asegurar?
          <Form.Check 
            type={'radio'}
            name={`radio-1`}
            label={`solo a mi`}
          />
          <Form.Check 
            type={'radio'}
            name={`radio-1`}
            label={`A mi y a mi familia`}
          />

          <br/>
          <br/>

          <Button onClick={goToNextStep}>Continuar</Button>
        </Col>
      </Row>
    </Container>
  );
}