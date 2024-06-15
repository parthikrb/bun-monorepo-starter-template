import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('should render button', () => {
    render(<App />)
    expect(screen.getByRole('button')).not.toBeNull()
  })
})
