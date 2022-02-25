import './App.css';
import Cards from './components/Cards';
import PaginatedItems from './components/PaginatedItems';
import { useEffect, useState} from 'react'

function App() {

  const [items, setItems] = useState([])

  async function traerPersonajes(){
      const resp = await fetch('http://hp-api.herokuapp.com/api/characters')
      const data = await resp.json()
      setItems(data)
  }

  useEffect(()=>{
    traerPersonajes()
  })


  return (
    <div className="App">
      <PaginatedItems itemsPerPage={20} items={items} />
    </div>
  );
}

export default App;
