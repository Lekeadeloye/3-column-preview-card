import Button from '../Button/Button.jsx'
import './card.css';

function Card(props) {

  return (
    <>
      <div className={props.type}>
        {props.img}
        <h1 className='title'>{props.type}</h1>
        <p className='info'>{props.detail}</p>
        <Button />
      </div>
    </>
  )
}

export default Card