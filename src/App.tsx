import React from 'react'
import './App.css'
import Word from './component/Word'

function App() {
  return (
    <div>
      <Word isWordEvaluated={false} guessWordValue='TESTS' />
    </div>
  )
}

export default App