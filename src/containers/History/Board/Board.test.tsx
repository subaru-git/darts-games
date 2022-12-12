import { waitFor } from '@testing-library/react';
import Board from './Board';
import { render } from '@/lib/TestUtils/RenderMock';

test('should rendering', async () => {
  const { container } = render(<Board history={initialQuery} user={null} />);
  await waitFor(() => expect(container).toMatchSnapshot());
});

const initialQuery: GameResultModel = {
  cricketMarkUp: [],
  eaglesEye: [],
  doubleTrouble: [],
  sweet16: [],
  topsAndTens: [],
  twoDartCombinations: [],
  aroundTheCompass: [],
  tonsUp: [],
  route64: [],
  eightyThrew: [],
  shanghaiNights: [],
  switchHitter: [],
  bullyBully: [],
  treblesForShow: [],
};
