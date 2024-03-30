import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>The Buffet Indicator</h1>
      </div>
      <div className="card">
        In this project, I am going to be demonstrating a process to calculate the "Buffet Indicator".<br/>
          As part of this exercise; I will address these action items related to the data.
          <ul className="flex max-">
              <li>Retrieving</li>
              <li>Processing</li>
              <li>Publishing</li>
              <li>Presenting</li>
          </ul>
      </div>
      <p className="read-the-docs">
        placeholder for components (Single Page App)
      </p>
    </>
  )
}

export default App
