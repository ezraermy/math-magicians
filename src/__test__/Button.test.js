// Import dependencies
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/button';

describe('Button component', () => {
  it('renders a button with the correct label and class', () => {
    const mockOnClick = jest.fn();
    const { container } = render(
      <Button label="Click me!" onClick={mockOnClick} className="btn" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('calls the onClick function when the button is clicked', () => {
    const mockOnClick = jest.fn();
    render(<Button label="Click me!" onClick={mockOnClick} className="btn" />);
    const button = screen.getByRole('button', { name: /Click me!/i });
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalled();
  });
});
