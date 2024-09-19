import React from 'react';
import Image from 'next/image';
import LikeButton from '@/app/components/LikeButton';
import { ImageCardProps } from '@/app/types';

const ImageCard: React.FC<ImageCardProps> = ({ image, onLikeToggle }) => {
  return (
    <div className="relative border flex flex-col items-center bg-white group overflow-hidden">
      <div className="relative w-full h-0 pb-[100%] group-hover:opacity-100">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,2,2,0.8)_0%,rgba(0,0,0,0.4)_100%)] opacity-0 group-hover:opacity-60 z-10 hidden md:block"></div>
        <Image
          src={image.main_attachment.small}
          alt={image.title}
          layout="fill"
          objectFit="contain"
          className="relative z-0"
        />
        <div className="absolute top-0 left-0 w-0 h-0 border-t-[100px] border-t-white border-r-[160px] border-r-transparent z-20">
          <div className="absolute top-1/2 left-1/2 transform translate-x-6 -translate-y-20 text-black text-xl">
            <span className="span-black font-brandon-grotesque font-medium">
              {image.price}.00€
            </span>
          </div>
        </div>
        <div className="absolute top-2 right-2 hidden group-hover:flex flex-col gap-2 z-20 md:flex">
          <div className="flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <LikeButton
              liked={image.liked}
              onClick={() => onLikeToggle(image.id)}
            />
            <span className="text-white text-2xl font-open-sans font-normal">
              {image.likes_count}
            </span>{' '}
          </div>
          <div className="flex flex-col items-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Image
              src="/icons/reload-web.svg"
              alt="reload"
              width={35}
              height={34}
              className="fill-current"
            />
            <span className="text-white text-2xl font-open-sans font-normal mt-2">
              000
            </span>{' '}
          </div>
        </div>
      </div>

      <span className="text-3xl mt-4 text-center text-black font-open-sans uppercase font-normal">
        {image.title}
      </span>
      <span className="text-xl mb-4 text-center text-gray-500 font-droid-serif">
        by <span className="text-black font-droid-serif">{image.author}</span>
      </span>
      <div className="flex md:hidden w-full mt-2">
        <div className="border p-2 flex-1 flex justify-center items-center border-l-0 border-b-0">
          <span className="text-2xl text-gray-182">{image.likes_count}</span>
          <LikeButton
            liked={image.liked}
            onClick={() => onLikeToggle(image.id)}
          />
        </div>
        <div className="border p-5 flex-1 flex justify-center items-center border-lr-0 border-b-0">
          <Image
            src="/icons/reload.svg"
            alt="reload"
            width={24}
            height={24}
            className="fill-current"
          />
          <span className="ml-2 text-2xl text-gray-182">000</span>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
