import { useState } from 'react';
import Heading from './components/Heading';
import Button from './components/Button';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Heading level={1}>baus</Heading>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
      React Component Library
      </p>
    </>
  )
}

export default App
