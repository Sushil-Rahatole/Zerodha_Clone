import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import Hero from '../Landing_Page/Home/Hero'

//Test Suite
describe('Hero Component',()=>{
    test('renders hero image',()=>{
        render(<Hero />)
        const heroImage = screen.getByAltText('HeroImage')
        expect(heroImage ).toBeInTheDocument();
        expect(heroImage ).toHaveAttribute('src',"media/images/homeHero.png");
    })

    test('renders signup button',()=>{
        render(<Hero />)
        const signupButton = screen.getByRole('button',{Name:'/Signup Now/i'})
        expect(signupButton ).toBeInTheDocument();
        expect(signupButton ).toHaveClass("btn-primary");
    })
})