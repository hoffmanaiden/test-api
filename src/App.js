import './App.css';
import { useState, useEffect } from 'react'


function App() {
  const [state, setState] = useState()
  const [form, setForm] = useState({
    id: '',
    price: '',
    name: ''
  })
  const [items, setItems] = useState([])

  function Item({item}) {
    return (
      <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.price}</td>
      </tr>
    )
  }

  // adding a comment

  function ItemList() {
    console.log(items)
    return (
      <table>
        <tbody>
          <tr>
            <th>I.D.</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
          {items.map(item => (
            <Item item={item} key={item.id} />
          ))}
        </tbody>
      </table>
    )
  }

  async function getItems() {
    try {
      let readableStream = await fetch("https://ah0nxu0shk.execute-api.us-east-1.amazonaws.com/items")
      let response = await readableStream.json()
      response.Items.map((item) => {
        setItems(items => ([...items, item]))
      })
    } catch (err) { console.log(err) }
  }

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e) {
    const readableStream = await fetch("https://ah0nxu0shk.execute-api.us-east-1.amazonaws.com/items", {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
    let response = await readableStream.json()
    // console.log("Submit response: " + response)
    setForm(form => ({
      ...form,
      id: '',
      price: '',
      name: ''
    }))
  }

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
      <ItemList />
    </div>
  );
}

export default App;
