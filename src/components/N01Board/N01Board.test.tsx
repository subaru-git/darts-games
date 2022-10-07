import { render, screen } from '@testing-library/react'
import N01Board from './N01Board'

test('should rendering', () => {
  const { container } = render(<N01Board data={[[501, 401], [501]]} />)
  expect(screen.getAllByText('501')).toHaveLength(2)
  expect(screen.getAllByText('401')).toHaveLength(1)
  expect(container).toMatchSnapshot()
})
