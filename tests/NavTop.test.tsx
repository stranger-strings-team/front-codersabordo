import React from 'react'
import { render, screen, userEvent, } from '../utils/test-utils'
import { NavTop } from "../src/components/NavTop/NavTop";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from '../src/pages/GamePages/Profile/Profile'
import { UserButton } from '../src/components';


describe('NavTop should render appropriately', ()=>{
  
    it('navtop should render "coders a bordo" logo', ()=>{    
      render(
        <BrowserRouter>
        <NavTop/>
        </BrowserRouter>
        )
        expect(screen.getByText('CODERS A BORDO')).toBeInTheDocument()
    })

    it('should navigate to the profile page', async ()=>{
      render( 
            <BrowserRouter>
           
            <Routes>
                <Route path="/profile" element={<Profile />} />
            </Routes> 
        
            </BrowserRouter>
        )

        await userEvent.click(screen.getByRole('button'));
        screen.debug()
        expect(UserButton).toBeInTheDocument()
    })
  })
