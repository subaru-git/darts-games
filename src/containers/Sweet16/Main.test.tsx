import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Main from './Main';
import { findByAriaLabel } from '@/lib/TestUtils/FindByAriaLabel';
import { render } from '@/lib/TestUtils/RenderMock';
import '@testing-library/jest-dom';

test('should rendering', async () => {
  const user = userEvent.setup();
  const { container } = render(<Main />);
  const buttons = screen.getAllByRole('button');
  await user.click(findByAriaLabel(buttons, 'setting'));
  await user.click(screen.getByRole('button', { name: 'new game' }));
  for (const _ of Array(19)) {
    await user.click(findByAriaLabel(buttons, '16 double'));
    await user.click(findByAriaLabel(buttons, '16'));
    await user.click(findByAriaLabel(buttons, '8 double'));
    await user.click(findByAriaLabel(buttons, 'round change'));
  }
  expect(screen.getByText('190')).toBeInTheDocument();
  await user.click(findByAriaLabel(buttons, '16 double'));
  await user.click(findByAriaLabel(buttons, '16 double'));
  await user.click(findByAriaLabel(buttons, '16 double'));
  await user.click(screen.getByRole('button', { name: 'round over' }));
  expect(screen.getByText(/Total: 205/i)).toBeInTheDocument();
  expect(container).toMatchSnapshot();
}, 30000);
