import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incremented } from '../redux/counterSlice'
import { decremented } from '../redux/counterSlice'
import './Counter.css'

function Counter () {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <span className='border border-3'>{count}</span>
      <div className="controls">
        <button 
          className='btn btn-warning' 
          onClick={
            () => dispatch(decremented())}
        >
          Decrementar
        </button>
        <button 
          className='btn btn-primary' 
          onClick={
            () => dispatch(incremented())}
        >
          Incrementar
        </button>
      </div>
    </div>
  )
}

export default Counter