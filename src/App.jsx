import './App.css'
import Card from './Components/Cards/Card.jsx'
import NavBar from './Components/NavBar/NavBar.jsx'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='container'>
      <Card 
      img='public\img\prensa.avif'
      price={995}
      title='Titanium Strength SUPREME Leg Press / Hack Squat - KM0'
      genero='Musculación'
      description=''
      />
      <Card 
      img='public\img\extension-cuadriceps.avif'
      price={595}
      title='Titanium Strength 150CF Evolution Banco Extensión de Cuádriceps y Femoral'
      genero='Musculación'
      description=''
      />
      <Card 
      img='public\img\bici.webp'
      price={319}
      title='NordicTrack Bicicleta Ciclismo Indoor GX 3.9 Sport'
      genero='Cardio'
      description=''
      />
      <Card 
      img='public\img\caminadora.avif'
      price={399}
      title='Horizon T-R01 Cinta de Correr'
      genero='Cardio'
      description=''
      />
      <Card 
      img='public\img\remo.avif'
      price={1.079}
      title='Xebex Rower Air Power 2.0'
      genero='Funcional'
      description=''
      />
      <Card 
      img='public\img\bici-funcional.avif'
      price={1299}
      title='Airdyne Schwinn AD8 AirBike PRO'
      genero='Funcional'
      description=''
      />
      </div>
    </div>
  )
}

export default App
