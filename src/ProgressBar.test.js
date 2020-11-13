import { render } from '@testing-library/react';
import ProgressBar from './ProgressBar';

test('Should generate a snapshot for ProgressBar component', () => {
  const { asFragment } = render(<ProgressBar color={"blue"} onboardingState={2} numOnboardingPages={4} />);
  expect(asFragment(<ProgressBar color={"blue"} onboardingState={2} numOnboardingPages={4} />)).toMatchSnapshot();
});
