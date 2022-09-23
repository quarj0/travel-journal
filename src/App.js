import './index.css'
import data from './components/data';
import Main from './components/main'
function App() {
  const cards = data.map(item => {
    return (
      <Main img={item.img}
        title={item.title}
        date={item.date}
        desp={item.description}
        location={item.location}
        map={item.googleMap}
      />)

  }) 
  return (
    <div className="App">
      {cards}
    </div>
  );
}

export default App;
