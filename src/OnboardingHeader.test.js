import { render, screen } from '@testing-library/react';
import OnboardingHeader from './OnboardingHeader';

describe('OnboardingHeader Component Testing', () => {
  test('should have a back button', () => {
    render(<OnboardingHeader />);
    expect(screen.getByRole('button')).toHaveTextContent('< Back');
  });

  test('should have one button', () => {
    render(<OnboardingHeader />);
    expect(screen.getAllByRole('button')).toHaveLength(1);
  });
  
  test('should have a title called "testing titlie"', () => {
    render(<OnboardingHeader title='testing title'/>);
    expect(screen.getByRole('heading')).toHaveTextContent('testing title');
  });
});
