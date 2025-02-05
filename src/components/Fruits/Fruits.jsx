import './Fruits.css';

function Fruits({ fruits, toggleInStock, addToInventory, removeFromInventory, userInventory }) {
  return (
    <>  
    <div className="container">
      <div className="left-col">
        <h2>Shop</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            {fruit.emoji} {fruit.name} ({fruit.color})
            {fruit.inStock && (
              <button onClick={() => addToInventory(fruit.id)}>
                Buy
              </button>
            )}
            <button onClick={() => toggleInStock(fruit.id)}>
              {fruit.inStock ? "In Stock" : "Out of Stock"}
            </button>
          </li>
        ))}
      </ul>
      </div>
      <div className="right-col">
      <h2>Inventory</h2>
      {userInventory.length === 0 ? <p>Inventory is empty.</p> : (
        <ul>
          {userInventory.map((fruit, index) => (
            <li key={index}>
              {fruit.emoji} {fruit.name}
              <button onClick={() => removeFromInventory(fruit.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      </div>
      </div>
    </>
  );
}

export default Fruits;
