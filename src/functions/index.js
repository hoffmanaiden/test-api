export async function getItems() {
  try {
    let readableStream = await fetch("https://ah0nxu0shk.execute-api.us-east-1.amazonaws.com/items")
    let response = await readableStream.json()
    response.Items.map((item) => {
      // how do I use state from App.js in these functions?
      setItems(items => ([...items, item]))
    })
  } catch (err) { console.log(err) }
}

export const handleChange = e => {
  setForm({
    ...form,
    [e.target.name]: e.target.value
  })
}

export async function handleSubmit(e) {
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