import { type MantineColorsTuple, createTheme } from '@mantine/core'

const primary: MantineColorsTuple = [
  '#effee7',
  '#e0f8d4',
  '#c2efab',
  '#a2e67e',
  '#87de57',
  '#75d940',
  '#6bd731',
  '#59be23',
  '#4da91b',
  '#3d920c',
]

export const theme = createTheme({
  fontFamily: 'Inter, sans-serif',
  colors: {
    primary: primary,
  },
  primaryColor: 'primary',
})
