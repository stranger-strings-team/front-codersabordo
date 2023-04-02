import { test } from "vitest";
import { fireEvent, render } from '@testing-library/react';
import  Register  from '../src/pages/GamePages/RegisterPage/Register'
import React from "react";
import { BrowserRouter } from "react-router-dom";

describe('Register Page', () => {
  test('tests input fields', () => {
    render
        (<BrowserRouter>
            <Register />
        </BrowserRouter>)
    const input = document.querySelector(
      'input'
    ) as HTMLInputElement | null;
    
    expect(input).toBeTruthy()
    
    expect(input?.textContent).toBe('')

     if (input) {
        
      input.textContent = 'Juana'
      expect(input.textContent).toBe('Juana')

       expect(input.type).toBe('text')

      fireEvent.change(input, {
        target: {
          value: 'Pepe'
        }
      })
      expect(input.value).toBe('Pepe')

      expect(input).toBeRequired()
    }
  });
});
