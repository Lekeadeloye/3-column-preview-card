import {Sedan, Suv, Luxury} from '../Svg/Svgs.jsx'

const cars = [
  {
    id: 1,
    img: <Sedan/>,
    type: 'sedans',
    detail: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
    button: 'sedans-btn'
  },

  {
    id: 2,
    img: <Suv/>,
    type: 'suvs',
    detail: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
    button: 'suvs-btn'
  },

  {
    id: 3,
    img: <Luxury/>,
    type: 'luxury',
    detail: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
    button: 'luxury-btn'
  }
];

export default cars;