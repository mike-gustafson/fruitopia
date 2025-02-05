import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fruits from './components/Fruits/Fruits'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

const initialFruits = [
  { id: 1, name: "Apple", color: "Red", inStock: true, emoji: "🍎" },
  { id: 2, name: "Banana", color: "Yellow", inStock: false, emoji: "🍌" },
  { id: 3, name: "Grapes", color: "Purple", inStock: true, emoji: "🍇" },
  { id: 4, name: "Kiwi", color: "Brown", inStock: false, emoji: "🥝" },
  { id: 5, name: "Strawberry", color: "Red", inStock: true, emoji: "🍓" },
  { id: 6, name: "Watermelon", color: "Green", inStock: false, emoji: "🍉" },
  { id: 7, name: "Pineapple", color: "Yellow", inStock: true, emoji: "🍍" },
  { id: 8, name: "Mango", color: "Orange", inStock: false, emoji: "🥭" },
  { id: 9, name: "Peach", color: "Orange", inStock: true, emoji: "🍑" },
  { id: 10, name: "Pear", color: "Green", inStock: false, emoji: "🍐" },
  { id: 11, name: "Cherry", color: "Red", inStock: true, emoji: "🍒" },
  { id: 12, name: "Blueberry", color: "Blue", inStock: false, emoji: "🫐" }
]

function App() {
  const [fruits, setFruits] = useState(initialFruits)
  const [userInventory, setUserInventory] = useState([])

  const toggleInStock = (id) => {
    setFruits(
      fruits.map((fruit) =>
        fruit.id === id ? { ...fruit, inStock: !fruit.inStock } : fruit
      )
    );
    }

    const addToStock = (id) => {
      setFruits(
        fruits.map((fruit) =>
          fruit.id === id ? { ...fruit, inStock: true } : fruit
        )
      );
    }

  const addToInventory = (id) => {
    const fruitToAdd = fruits.find((fruit) => fruit.id === id)
    const updatedInventory = [...userInventory, fruitToAdd]
    toggleInStock(id)
    setUserInventory(updatedInventory)
  }

  const removeFromInventory = (id) => {
    const index = userInventory.findIndex((fruit) => fruit.id === id);
  
    if (index !== -1) {
      const updatedInventory = [
        ...userInventory.slice(0, index),
        ...userInventory.slice(index + 1)
      ];
      setUserInventory(updatedInventory);
      addToStock(id);
    }
  };
  
  

  const fruitsProps = {
    fruits,
    userInventory,
    toggleInStock,
    addToInventory,
    removeFromInventory
  }

  return (
    <>
    hello
      <NavBar />
      <Fruits {...fruitsProps} />
      <Footer />
    </>
  )
}

export default App
