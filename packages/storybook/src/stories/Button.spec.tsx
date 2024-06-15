import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Button } from './Button'
import { MantineProvider } from '@mantine/core'

describe('Button', () => {
  it('should render button', () => {
    render(
      <MantineProvider theme={{}}>
        <Button label="test" />
      </MantineProvider>,
    )
    expect(screen.getByRole('button')).not.toBeNull()
  })
})
