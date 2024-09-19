'use client';

import React, { useState, useEffect } from 'react';
import ImageCard from '@/app/components/ImageCard';
import { fetchImages } from '@/app/services/imageService';
import useSearch from '@/app/hooks/useSearch';
import SearchBar from '@/app/components/SearchBar';
import Image from 'next/image';

interface Image {
  id: number;
  title: string;
  author: string;
  price: number;
  created_at: string;
  main_attachment: {
    big: string;
    small: string;
  };
  likes_count: number;
  liked: boolean;
  links: Array<{
    rel: string;
    uri: string;
    methods: string;
  }>;
}

const ImageGallery: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const { searchTerm, setSearchTerm } = useSearch();

  const loadImages = async (page: number) => {
    setLoading(true);
    try {
      const data = await fetchImages({ search: searchTerm, page });
      setImages((prev) => [...prev, ...data]);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadImages(page);
  }, [page, searchTerm]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 10
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLikeToggle = (id: number) => {
    setImages((prevImages) =>
      prevImages.map((image) =>
        image.id === id
          ? {
              ...image,
              liked: !image.liked,
              likes_count: image.liked
                ? image.likes_count - 1
                : image.likes_count + 1,
            }
          : image
      )
    );
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full bg-white py-6 px-8 md:px-16 lg:px-24 z-50">
        <div className="grid grid-cols-3 items-center gap-4">
          <div className="flex justify-start">
            <Image
              src="/images/logo.webp"
              alt="Logo"
              width={100}
              height={100}
            />
          </div>
          <div className="col-span-2 flex justify-end">
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          </div>
        </div>
      </div>
      <div className="pt-28 w-full px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-16">
          {images.map((image) => (
            <ImageCard
              key={image.id}
              image={image}
              onLikeToggle={handleLikeToggle}
            />
          ))}
        </div>
        {loading && <p className="text-center mt-4">Loading...</p>}
      </div>
    </div>
  );
};

export default ImageGallery;
