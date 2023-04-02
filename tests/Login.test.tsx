import React from 'react'
import { render, screen } from '@testing-library/react';
import Login from '../src/pages/GamePages/Login/Login'
import { BrowserRouter } from 'react-router-dom'

describe('Input', async () => {
  it("should render the email input", () => {
    render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
    )
    expect(screen.getByText("Inicia sesión")).toBeInTheDocument()
    expect(screen.getByRole("textbox", { name: "email" })).toBeInTheDocument()
  })
})
