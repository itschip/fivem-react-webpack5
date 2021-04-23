import React from 'react'
import "./App.css"
import { useVisibility } from './context/ResourceProvider'

export function App() {
  const { visibility } = useVisibility()

  return (
    <>
      {visibility ? (
        <div className='App'>
          <h1>Hello FiveM</h1>
        </div>
      ) : null}
    </>
  )
}
