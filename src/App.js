import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import CantidadPokemon from './components/cantidadPokemon';
import CompraPokemon from './components/compraPokemon';

function App() {
  return (
    <div className="App">
      <div className='row'>
        <div className='col-12'>
          <div className='card mt-5' style={{maxWidth: '370px'}}>
            <div className='row no-gutters'>
              <div className='col-4'>
                <img className='card-img' src='https://m.media-amazon.com/images/I/71cj5cNm7ZL._SL1500_.jpg' alt='logo'/>
              </div>
              <div className='col-8'>
                <div className='card-body'>
                  <div className='card-title h3 text-center'>
                    <CantidadPokemon />
                  </div>
                  <CompraPokemon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

