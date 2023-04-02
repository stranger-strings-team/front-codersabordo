import React from 'react'
import { render, screen} from '@testing-library/react';
import  userEvent  from '@testing-library/user-event'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserButton } from '../src/components';
import { vi } from 'vitest';
import * as router from "react-router"



describe('User Button tests', ()=>{
  const ui = userEvent
  const navigate = vi.fn()
  const token = "access_token"

  beforeEach(() => {
    vi.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
  })

    it('navtop should render user button', ()=>{    
      render(
        <BrowserRouter>
        <UserButton loggedInUser={null} />
        </BrowserRouter>
        )
        expect(screen.getByAltText('user')).toBeInTheDocument()
    })

    it('should be called when clicked', async () => {
      render(
        <BrowserRouter>
          <UserButton loggedInUser={null}/>
        </BrowserRouter>
        )
      const userMock = vi.fn();
      const userButton = screen.getByAltText("user") 
  
      userButton.addEventListener('click', userMock);
  
      await userEvent.click(userButton);
  
      expect(userMock).toHaveBeenCalled;
  
  })

  })
