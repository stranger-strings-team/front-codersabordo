import React from 'react'
import { render, screen, userEvent } from '../utils/test-utils'
import Login from '../src/pages/Login/Login'
import { BrowserRouter } from 'react-router-dom'

describe('Input', async () => {
  it("should render the input", () => {
    render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
    )
    expect(screen.getByText("Inicia sesión")).toBeInTheDocument()
    expect(screen.getByRole("", { name: /email/i, })).toBeInTheDocument()
  })
})
