import { MantineProvider, useMantineColorScheme } from '@mantine/core'
import '@mantine/core/styles.css'
import { addons } from '@storybook/preview-api'
import { useEffect, type ReactNode } from 'react'
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode'
import { theme } from '../src/utils'
// biome-ignore lint/style/useImportType: <explanation>
import React from 'react'

interface ColorSchemeWrapperProps {
  children: ReactNode
}

const ColorSchemeWrapper = ({ children }: ColorSchemeWrapperProps) => {
  const { setColorScheme } = useMantineColorScheme()
  const handleColorScheme = (value: boolean) =>
    setColorScheme(value ? 'dark' : 'light')

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const channel = addons.getChannel()
    channel.on(DARK_MODE_EVENT_NAME, handleColorScheme)
    return () => {
      channel.off(DARK_MODE_EVENT_NAME, handleColorScheme)
    }
  }, [])

  return children
}

const withColorSchemeWrapper = (Story: React.ComponentType) => (
  <ColorSchemeWrapper>
    <Story />
  </ColorSchemeWrapper>
)

const withMantineProvider = (Story: React.ComponentType) => (
  <MantineProvider theme={theme}>
    <Story />
  </MantineProvider>
)

export const decorators: Array<(Story: React.ComponentType) => ReactNode> = [
  withColorSchemeWrapper,
  withMantineProvider,
]
