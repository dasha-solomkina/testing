import { useState } from 'react'
import './App.css'
import MyButton from './Button/MyButton'
import double from './utils.ts'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
    console.log('doubled count', double(count + 1))
  }

  return (
    <>
      <h1>Unit and React testing</h1>

      <div className="card">
        <button onClick={handleClick}>count is {count}</button>
        <MyButton />
      </div>
    </>
  )
}

export default App
