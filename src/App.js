import './App.css';
import { useState, useEffect } from 'react'
import {Item, ItemList} from './components'
import {getItems, handleChange, handleSubmit} from './functions'


function App() {
  const [state, setState] = useState()
  const [form, setForm] = useState({
    id: '',
    price: '',
    name: ''
  })
  const [items, setItems] = useState([])





  useEffect(() => {
    getItems()
  }, [])

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" placeholder="id" onChange={handleChange} /><br />
        <input type="text" name="name" placeholder="name" onChange={handleChange} /><br />
        <input type="text" name="price" placeholder="price" onChange={handleChange} /><br />
        <button>Submit</button>
      </form>
      <ItemList items={items}/>
    </div>
  );
}

export default App;
