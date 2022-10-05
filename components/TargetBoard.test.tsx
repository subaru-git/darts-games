import { render, screen } from '@testing-library/react'
import TargetBoard from './TargetBoard'

test('should rendering', () => {
  const { container } = render(<TargetBoard target='501' message='next target' />)
  expect(screen.getAllByText('501')).toHaveLength(1)
  expect(screen.getAllByText('next target')).toHaveLength(1)
  expect(container).toMatchSnapshot()
})
