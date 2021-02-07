import React, {useState} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './styles.css';

export default () =>   {  
  return ( 
    <Container className="pt-5">
      <Row>
        <Col className="pack-side-box">
          <div className="pack-side-box-shadow-right"></div>
        </Col>
        <Col>
          <div style={{paddingTop:"300px"}}>
            <h3>Gracias por <span className="text-primary">confiar en nosotros!</span> </h3>
            <h5>Queremos conocer mejor la salud de los asegurados. Un asesor <b>se pondrá en contacto</b> contigo en las siguientes <b>48 horas.</b></h5>
            <br/>
          </div>
          <div className="d-flex">          
            <Button>IR A SALUD</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}