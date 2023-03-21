import React from 'react'
import { render, screen, userEvent } from '../utils/test-utils'
import ButtonVamos from '../src/components/ButtonVamos/ButtonVamos'
import { BrowserRouter } from 'react-router-dom'

describe('Input', async () => {
  it('should render the button', () => {
    render(
    <BrowserRouter>
      <ButtonVamos />
    </BrowserRouter>
    )
    expect(screen.getByText('¡Vamos!')).toBeInTheDocument()
  })
})
