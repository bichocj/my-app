import { Card } from 'react-bootstrap';
import './styles.css';

export default ({title, price, active, onClick}) => {
  return (
    <Card className={`card-box ${active ? 'active' : ''}`} onClick={onClick}>
      <Card.Body>
        { title }
        <br/>
        <span>S/</span><span className="price">{ price }</span>
        <br/>
        mensual
      </Card.Body>
    </Card>
  )
}