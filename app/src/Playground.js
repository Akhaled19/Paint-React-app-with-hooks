import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import randomColor from 'randomcolor'

export default function Playground() {
  const [count, setCount] = useState(30)
  
  const inputRef = useRef()
  
  const [color, setColor] = useState(randomColor())
  useEffect(() => inputRef.current.focus(), [count])
  
  const calculate = useCallback(<Calculate />, [count])
  
  return (
    <div style={{ borderTop: `10px solid ${color}`}}>
      {count}
      <button onClick={() => setCount(currentCount => currentCount - 1)}>-</button>
      <button onClick={() => setCount(currentCount => currentCount + 1)}>+</button>
      <button onClick={() => setColor(randomColor())}>Change Color</button>
      <hr />
      <input ref={inputRef} type="range" onChange={e => setCount(e.target.value)} value={count} />
      {calculate}
    </div>
  )
}

function Calculate() {
  const renderCount = useRef(1)
  return <div>{renderCount.current ++}</div>
}