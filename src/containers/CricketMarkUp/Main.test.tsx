import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Main from './Main';
import { findByAriaLabel } from '@/lib/TestUtils/FindByAriaLabel';
import { render } from '@/lib/TestUtils/RenderMock';
import '@testing-library/jest-dom';

test('should rendering', async () => {
  const user = userEvent.setup();
  const { container } = render(<Main />);
  const buttons = screen.getAllByRole('button');
  await waitFor(() => user.click(findByAriaLabel(buttons, 'setting')));
  await waitFor(() => user.click(screen.getByRole('spinbutton', { name: 'target count' })));
  await waitFor(() => user.keyboard('{Control>}A{/Control}{Delete}3'));
  await waitFor(() => user.click(screen.getByRole('button', { name: 'new game' })));
  await waitFor(() => user.click(findByAriaLabel(buttons, '20 triple')));
  await waitFor(() => user.click(findByAriaLabel(buttons, '19 triple')));
  await waitFor(() => user.click(findByAriaLabel(buttons, '18 triple')));
  await waitFor(() => user.click(findByAriaLabel(buttons, 'round change')));
  await waitFor(() => user.click(findByAriaLabel(buttons, '17 triple')));
  await waitFor(() => user.click(findByAriaLabel(buttons, '16 triple')));
  await waitFor(() => user.click(findByAriaLabel(buttons, '15 triple')));
  await waitFor(() => user.click(findByAriaLabel(buttons, 'round change')));
  await waitFor(() => user.click(findByAriaLabel(buttons, 'outer bull')));
  await waitFor(() => user.click(findByAriaLabel(buttons, 'inner bull')));
  await waitFor(() => user.click(screen.getByRole('button', { name: 'round over' })));
  expect(screen.getByText(/Total: 8/i)).toBeInTheDocument();
  expect(container).toMatchSnapshot();
}, 30000);
