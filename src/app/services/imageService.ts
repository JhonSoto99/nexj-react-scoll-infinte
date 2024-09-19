const API_BASE_URL = 'http://localhost:3100';

interface FetchImagesParams {
  search?: string;
  page?: number;
}

export const fetchImages = async ({
  search = '',
  page = 1,
}: FetchImagesParams) => {
  const response = await fetch(
    `${API_BASE_URL}/images?search=${search}&page=${page}`
  );
  if (!response.ok) throw new Error('Failed to fetch images');
  return response.json();
};

export const likeImage = async (id: number) => {
  const response = await fetch(`${API_BASE_URL}/images/${id}/likes`, {
    method: 'POST',
  });
  if (!response.ok) throw new Error('Failed to like image');
};
