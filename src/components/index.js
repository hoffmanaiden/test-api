export function Item({item}) {
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.price}</td>
    </tr>
  )
}

// adding a comment

export function ItemList({items}) {
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