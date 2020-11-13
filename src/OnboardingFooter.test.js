import { render, screen } from '@testing-library/react';
import OnboardingFooter from './OnboardingFooter';

describe('OnboardingFooter Component Testing', () => {
  test('should have two buttons', () => {
    render(<OnboardingFooter />);
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });
});
