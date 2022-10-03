import React from 'react';
import './index.css'
import Amazon from './components/images/14.-Amazon-1.jpg'
import Castle from './components/images/castle.jpg'
import atwea from './components/images/atwea.jpg'
import {GoLocation} from 'react-icons/go'
const Data = () => {
  return (
    <>
      <div className='card'>
        <div className='first-card'>

    <img src={Amazon} alt="Amazon forest" className='image' />
          <h1 className='map'><GoLocation/> Brazil<a href="https://www.bing.com/maps?osid=4fb30de3-9313-4c0f-89ee-e03ed312b5e8&cp=-3.159958~-60.030653&lvl=20&v=2&sV=2&form=S00027">view on google map</a></h1>
        <h2 className='location' > Amazon Forest</h2>
          <span className='date-span'>18th November 2019 - 27th December, 2019</span>
  <p className='description'>The Amazon rainforest, Amazon jungle or Amazonia is a moist broadleaf tropical rainforest in the Amazon biome that covers most of the Amazon basin of South America. This basin encompasses 7,000,000 km², of which 5,500,000 km² are covered by the rainforest. This region includes territory belonging to nine nations and 3,344 formally acknowledged indigenous territories.</p>
      <h5>
        </h5>
        </div>
        <div className='second-card'>

      <img src={Castle} alt="Cape Coast Castle" className='image'/>
     <h1 className='map'><GoLocation/>Ghana<a href="https://www.bing.com/maps?osid=dcd1ff34-c94c-4c63-bcec-b6044650fffc&cp=5.104006~-1.252971&lvl=16&v=2&sV=2&form=S00027">view on google map</a></h1>
      <h2 className='location'>Cape Coast Castle</h2>
            <span className='date-span'>20th March, 2021 - 20th April, 2021</span>
      <p className='description'>Cape Coast Castle is a European -built fortress situated on the central coastline of Ghana. Since its initial construction in 1652, the Castle served as a trading post for European nations and as the headquarters of British colonial administration for the Gold Coast Colony. Today the Castle is a designated UNESCO World Heritage Site.</p>
      <h5>
      </h5>
        </div>
        <div className='card-3'>
          
      <img src={atwea} alt="Atwea Mountains" className='image'/>
     <h1 className='map'><GoLocation/>Ghana<a href="https://www.bing.com/maps?osid=2024d684-84bf-4deb-9aef-e0dab8aea543&cp=6.898136~-1.712017&lvl=10&v=2&sV=2&form=S00027">view on google map</a></h1>
      <h2 className='location'>Atwea Mountains</h2>
            <span className='date-span'>20th April, 2019 - 27th April, 2019</span>
      <p className='description'>Atwea Mountains in Ghana are located in Kumasi, Ashanti regions of Ghana and they are popular for holding prayer camps not only for the Christian in Ghana, but for Africa as whole. Quite a number of people that find time annually to go and dedicate their grievances unto God.</p>
      <h5>
      </h5>
        </div>
      </div>
    </>
  );
}


function App() {
 
  return (
    <div className="App">
      < Data />
    </div>
  );
}

export default App;
