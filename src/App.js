import './index.css'
import Data from './components/data';
function App(props) {
  const Data = (()=>{
    console.log(Data)
  })
  return (
    <div className="App">
      <div>
        <p>
          <span className='location'></span> 
        <span className='google-map'></span>
        </p>
      <h1 className='title'>{}</h1>
      <img src="" alt="" className='image' />
      <p className='date'></p>
      <p className='description'>{}</p>
      </div>
      <div>
        <p>
          <span className='location'></span> 
        <span className='google-map'></span>
        </p>
      <h1 className='title'>{}</h1>
      <img src="" alt="" className='image' />
      <p className='date'></p>
      <p className='description'>{}</p>
      </div>
      <div>
        <p>
          <span className='location'>{}</span> 
        <span className='google-map'>{}</span>
        </p>
      <h1 className='title'>{}</h1>
      <img src="" alt="" className='image' />
      <p className='date'></p>
      <p className='description'>{}</p>
      </div>
    </div>
  );
}

export default App;
