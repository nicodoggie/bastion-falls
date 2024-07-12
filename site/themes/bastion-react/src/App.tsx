import { useState } from 'react'
import './App.css'

function App({context}: {context: Object}) {
  const [count, setCount] = useState(0)

  return (
    <>
      <pre>{JSON.stringify(context, null, 2)}</pre>
    </>
  )
}

export default App
