import React, {useReducer} from 'react'
import { render, fireEvent } from '@testing-library/react'
import Example, {reducer} from './testUseReducer'
import { renderHook, act } from '@testing-library/react-hooks'

test('shows success message after confirm button is clicked', () => {
  const { getByText } = render(<Example />)

  expect(getByText(/waiting/i)).toBeInTheDocument()

  fireEvent.click(getByText('Confirm'))

  expect(getByText('Confirmed!')).toBeInTheDocument()
})


test('test for default case', () => {
    const { result } = renderHook(() => useReducer(reducer, null));
    const [, dispatch] = result.current;
  
    act(() => {
      dispatch({ type: "whaaat" });
    });

    expect(result.error).toEqual(Error("unknown action"));
    
  })

