import './Fruits.css'

function Fruits({ fruits }) {
  return (
    <>  
      <title>Fuits</title>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            <span>{fruit.emoji}</span>
            <span>{fruit.name}</span>
            <span>{fruit.color}</span>
            <span>{fruit.inStock ? "In Stock" : "Out of Stock"}</span>
          </li>
        ))}
      </ul>
    </>
  )}

export default Fruits