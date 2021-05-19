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


setTimeout(() => {
  window.dispatchEvent(
    new MessageEvent('message', {
      data: {
        app: 'RESOURCE',
        method: 'setVisibility',
        data: true
      }
    })
  )
}, 0)