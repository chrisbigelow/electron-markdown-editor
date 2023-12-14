import React, { useState } from 'react'
import Editor from './editor'
import './app.css'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="app">
      <Editor />
    </div>
  )
}

export default App