import { useState, useEffect } from 'react'

export default function SSR() {

  const [state, setState] = useState('bye');

  console.log('hello')
  const val = 0

  useEffect(() => {
    console.log('useEffect')
    window.localStorage.setItem('key', 'value')
  }, [])

  return <h3>{state}</h3>
}
