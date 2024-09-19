import { fetchImages, likeImage } from '../../services/imageService';

describe('imageService', () => {
  it('fetches images', async () => {
    const data = await fetchImages({ search: 'Test', page: 1 });
    expect(data).toBeDefined();
    // Add more assertions as needed
  });

  it('likes an image', async () => {
    await expect(likeImage(1)).resolves.not.toThrow();
    // Add more assertions as needed
  });
});
