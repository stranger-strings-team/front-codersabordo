import React from 'react'
import { fireEvent, render, screen } from '../utils/test-utils'
import { BrowserRouter, useNavigate } from 'react-router-dom'
import { createMemoryHistory } from '@remix-run/router'
import { vi } from 'vitest'
import * as router from "react-router"
import userEvent from "@testing-library/user-event"

import ButtonVamos from '../src/components/ButtonVamos/ButtonVamos'


describe('ButtonVamos', async () => {
  const ui = userEvent
  const navigate = vi.fn()

  beforeEach(() => {
    vi.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
  })


  it('should render the button and read "¡Vamos!"', () => {
    render(
    <BrowserRouter>
      <ButtonVamos />
    </BrowserRouter>
    )
    const button = screen.getByText('¡Vamos!')
    expect(button).toBeInTheDocument()
  });

  it('should be called when clicked', async () => {
    render(
      <BrowserRouter>
        <ButtonVamos />
      </BrowserRouter>
      )
    const vamosMock = vi.fn();
    const vamosButton = screen.getByText("¡Vamos!") 

    vamosButton.addEventListener('click', vamosMock);

    await userEvent.click(vamosButton);

    expect(vamosMock).toHaveBeenCalled;

})

  it("should redirect to login", async () => {
    render(
    <BrowserRouter>
      <ButtonVamos />
    </BrowserRouter>
    )
    const button = screen.getByText('¡Vamos!')
    await ui.click(button)
    expect(navigate).toHaveBeenCalledWith("/login")
  })
})
