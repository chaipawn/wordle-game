import React from 'react'
import './App.css'
import Letter, { AccuracyEnum } from './component/Letter'

function App() {
  return (
    <div>
      <Letter accuracy={AccuracyEnum.correct} position={0} value='R' />
      <Letter accuracy={AccuracyEnum.doesNotExist} position={1} value='E' />
      <Letter accuracy={AccuracyEnum.wrongPosition} position={2} value='A' />
      <Letter accuracy={AccuracyEnum.wrongPosition} position={3} value='C' />
      <Letter accuracy={AccuracyEnum.correct} position={4} value='T' />
    </div>
  )
}

export default App