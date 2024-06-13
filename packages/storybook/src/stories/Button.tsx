import {
  Button as MantineButton,
  type ButtonProps as MantineButtonProps,
} from '@mantine/core'

interface ButtonProps extends MantineButtonProps {
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ backgroundColor, label, ...props }: ButtonProps) => {
  return (
    <MantineButton type="button" style={{ backgroundColor }} {...props}>
      {label}
    </MantineButton>
  )
}
