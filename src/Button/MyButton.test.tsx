import { describe, it, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MyButton from './MyButton'

describe('MyButton component', () => {
  test('renders button', () => {
    // difference between 'it' and 'test'?
    render(<MyButton />)

    const buttonElement = screen.getByRole('button', { name: /Click me/i })
    expect(buttonElement).toBeInTheDocument() // not sure about the type error

    expect(screen.getByRole('button').textContent).toMatch(/Click me/i)
  })

  test('Function called on button click', async () => {
    // Mock console.log
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})

    render(<MyButton />)

    await userEvent.click(screen.getByText(/Click me/i))

    expect(consoleSpy).toHaveBeenCalledTimes(1)
    expect(consoleSpy).toHaveBeenCalledWith('working')

    // Clean up
    consoleSpy.mockRestore()
  })
})
