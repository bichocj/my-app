import React, {useState} from 'react';
import CardBox from './components/card';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import Illustration from './../../statics/Illustration.png';
import './styles.css';

export default ({goToNextStep}) =>   {
  const [planSelected, setPlanSelected] = useState(undefined);
  const plans = ["BÁSICO", "AVANZADO", "PREMIUM", "FULL"];
  return ( 
    <Container className="pt-5">
      <Row>
        <Col className="pack-side-box">
          <div className="pack-side-box-shadow-right"></div>
        </Col>
        <Col>
          <h3>Elige, <span className="text-primary">tu protección</span> </h3>
          <h5>Selecciona tu plan de salud ideal</h5>
          <br/>
          <div className="d-flex justify-content-between">
            {
              plans.map((plan, index) => (
                  <CardBox title={plan} price="160" active={planSelected===index} onClick={() => setPlanSelected(index)}/>
                )
              )
            }
            
          </div>
          <br/>
          <Card>
            <Card.Header className="text-center">
              Cuentas con estos beneficios:
            </Card.Header>
            <Card.Body>
              <p className="p-4">
                <div className="d-flex justify-content-between">
                  <div>
                    <p>Covertura máxima</p>
                    <p>S/ 1MM</p>
                    <span className="badge bg-success">Plan {plans[planSelected]}</span>
                  </div>
                  <div className="border-start">
                    <img src={Illustration} />
                  </div>
                </div>
              </p>
            </Card.Body>
          </Card>
          <br/>
          <br/>
          <div className="d-flex">
            <div className="px-4">ENVIAR COTIZACIÓN POR CORREO</div>
            <Button onClick={goToNextStep}>COMPRAR PLAN</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}