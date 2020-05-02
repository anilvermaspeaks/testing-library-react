

import React, { useReducer } from 'react'

const initialState = {
  isConfirmed: false,
}

export function reducer(state = initialState, action) {
    console.log("action", action)
  switch (action.type) {
    case 'SUCCESS':
      return {
        ...state,
        isConfirmed: true,
      }
    default:
        console.log("errr")
      throw Error('unknown action')
  }
}

const Example = () => {
 const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <div>
        {state.isConfirmed ? (
          <p>Confirmed!</p>
        ) : (
          <p>Waiting for confirmation...</p>
        )}
      </div>
      <button onClick={() => dispatch({ type: 'SUCCESS' })}>Confirm</button>
    </div>
  )
}
export default Example