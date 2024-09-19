import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LikeButton from '@/app/components/LikeButton';

describe('LikeButton', () => {
  it('renders with the correct initial state and icon', () => {
    const handleClick = jest.fn();
    render(<LikeButton liked={false} onClick={handleClick} />);
    expect(screen.getByText('🤍')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('text-gray-500');
    render(<LikeButton liked={true} onClick={handleClick} />);
    expect(screen.getByText('❤️')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('text-red-500');
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<LikeButton liked={false} onClick={handleClick} />);

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
