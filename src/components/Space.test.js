import {render, screen} from '@testing-library/react'

import App from '../App'

describe('Destination Component', () => {
    test('Deve conter no documento a palavra Explore que será o botão inicial.', () => {
        render(<App />);

        const appearExplore = screen.getByText("EXPLORE")
        expect(appearExplore).toBeInTheDocument
    })

    test('O botão com a string "EXPLORE" deve ter a classe "explorePath"', () => {
        render(<App />)

        const classExplore = screen.getByText("EXPLORE")
        expect(classExplore).toHaveClass="explorePath"
    })

    test('O Navbar principal deve estar com o "Home" actived.', () => {
        render(<App />)

        const typeClass = screen.getAllByRole("link", { Name: "00 HOME"})
        expect(typeClass).toHaveClass="directionActived"
    })
})