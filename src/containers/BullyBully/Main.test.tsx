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
    await user.click(findByAriaLabel(buttons, 'inner bull'));
    await user.click(findByAriaLabel(buttons, 'outer bull'));
    await user.click(findByAriaLabel(buttons, 'non bull'));
    await user.click(findByAriaLabel(buttons, 'round change'));
  }
  expect(screen.getByText('133')).toBeInTheDocument();
  await user.click(findByAriaLabel(buttons, 'inner bull'));
  await user.click(findByAriaLabel(buttons, 'outer bull'));
  await user.click(findByAriaLabel(buttons, 'non bull'));
  await user.click(screen.getByRole('button', { name: 'round over' }));
  expect(screen.getByText(/Total: 140/i)).toBeInTheDocument();
  expect(container).toMatchSnapshot();
}, 30000);
