import { render, screen, fireEvent } from '@testing-library/react';
import ImageGallery from '@/app/components/ImageGallery';
import { fetchImages } from '@/app/services/imageService';

jest.mock('@/app/services/imageService', () => ({
  fetchImages: jest.fn(),
}));

describe('ImageGallery', () => {
  beforeEach(() => {
    (fetchImages as jest.Mock).mockResolvedValue([
      {
        id: 1,
        title: 'Test Image',
        author: 'Test Author',
        main_attachment: { small: 'http://test.com/image.jpg' },
        likes_count: 10,
        liked: false,
      },
    ]);
  });

  it('renders images and handles search input', async () => {
    render(<ImageGallery />);

    expect(await screen.findByText('Test Image')).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText('Search images'), {
      target: { value: 'Test' },
    });
  });
});
