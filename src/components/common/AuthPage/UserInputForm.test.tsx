import { render, screen, fireEvent } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import '@testing-library/jest-dom';
import UserInputForm from './UserInputForm';
import { errorCodeToMessage } from '../../../utils/authUtils/errorCodeToMessage';

describe('UserInputForm', () => {
  const mockOnInputChange = vi.fn();
  const mockInputRef = { current: null };

  const defaultProps = {
    label: 'Test Label',
    onInputChange: mockOnInputChange,
    required: true,
    hideInput: false,
    inputRef: mockInputRef,
    errorCode: '',
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly with default props', () => {
    render(<UserInputForm {...defaultProps} />);

    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByText('*')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders password input when hideInput is true', () => {
    render(<UserInputForm {...defaultProps} hideInput={true} />);

    const input = screen.getByDisplayValue('');
    expect(input).toHaveAttribute('type', 'password');
  });

  it('calls onInputChange when input value changes', () => {
    render(<UserInputForm {...defaultProps} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test value' } });

    expect(mockOnInputChange).toHaveBeenCalledWith('test value');
  });

  it('displays error message when errorCode is provided', () => {
    const errorCode = 'auth/invalid-email';
    render(<UserInputForm {...defaultProps} errorCode={errorCode} />);

    const errorMessage = errorCodeToMessage(errorCode);
    const errorElement = screen.getByText((content, element) => {
      return element?.tagName.toLowerCase() === 'ins' && content.includes(errorMessage);
    });
    expect(errorElement).toBeInTheDocument();
    expect(screen.queryByText('*')).not.toBeInTheDocument();
  });

  it('displays helper text when focused and text prop is provided', () => {
    const helperText = 'Helper text';
    render(<UserInputForm {...defaultProps} text={helperText} />);

    const input = screen.getByRole('textbox');
    fireEvent.focus(input);

    expect(screen.getByText(helperText)).toBeInTheDocument();
  });

  it('hides helper text when blurred', () => {
    const helperText = 'Helper text';
    render(<UserInputForm {...defaultProps} text={helperText} />);

    const input = screen.getByRole('textbox');
    fireEvent.focus(input);
    fireEvent.blur(input);

    const helperTextParent = screen.getByText(helperText).parentElement;
    expect(helperTextParent).toHaveClass('opacity-0');
    expect(helperTextParent).toHaveClass('absolute');
  });

  it('applies required attribute when required is true', () => {
    render(<UserInputForm {...defaultProps} required={true} />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('required');
  });

  it('does not show required asterisk when error is present', () => {
    render(<UserInputForm {...defaultProps} errorCode="auth/invalid-email" />);

    expect(screen.queryByText('*')).not.toBeInTheDocument();
  });
}); 