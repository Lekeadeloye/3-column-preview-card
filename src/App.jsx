import cars from './components/Content/cars.js'
import Card from './components/Card/Card.jsx'



function App() {
  return (
    <section className='card-container'>
      {cars.map(cars => <Card 
          key={cars.id}
          img={cars.img} 
          type={cars.type} 
          detail={cars.detail} 
        />)}
    </section>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
  )
}
export default App
