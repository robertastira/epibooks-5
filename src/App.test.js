import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

test('welcome message is working', () => {
  render(<App />)
  const welcomeElement = screen.getByText(/Benvenuti in EpiBooks!/i)
  expect(welcomeElement).toBeInTheDocument()
})


test('comment section is showing up', () => {
  render(<App/>)
  const previousComments = screen.getByRole('ListGroup')
  expect(previousComments).toBeInTheDocument()
  
})

describe('clickonthecardbehaviour', () => {
  it('makes the commentsection visible and the red border visibles', () => {
    render(<App/>)
    const cardoftheBook = screen.getAllByRole('card')
    fireEvent.click('cardoftheBook')
    expect (cardoftheBook).toBeInTheDocument()

  })
})