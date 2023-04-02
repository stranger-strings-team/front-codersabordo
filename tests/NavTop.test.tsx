import React from 'react'
import { NavTop } from "../src/components/NavTop/NavTop";
import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react';


describe('NavTop should render appropriately', ()=>{
  
    it('navtop should render "coders a bordo" logo', ()=>{    
      render(
        <BrowserRouter>
        <NavTop/>
        </BrowserRouter>
        )
        expect(screen.getByText('CODERS A BORDO')).toBeInTheDocument()
    })

  })
