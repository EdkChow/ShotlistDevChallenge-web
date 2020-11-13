import { render } from '@testing-library/react';
import App from './App';

test('Should generate a snapshot for App component', () => {
  const { asFragment } = render(<App />);
  expect(asFragment(<App />)).toMatchSnapshot();
});
