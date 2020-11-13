import { render } from '@testing-library/react';
import BrandOnboarding from './BrandOnboarding';

test('Should generate a snapshot for BrandOnboarding component', () => {
  const { asFragment } = render(<BrandOnboarding />);
  expect(asFragment(<BrandOnboarding />)).toMatchSnapshot();
});
