'use client';

import React from 'react';
import Image from 'next/image';
import { LikeButtonProps } from '@/app/types';

const LikeButton: React.FC<LikeButtonProps> = ({ liked, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded ${liked ? 'text-red-500' : 'text-gray-500'}`}
    >
      <Image
        src={liked ? '/icons/like.svg' : '/icons/unlike.svg'}
        alt={liked ? 'Like' : 'Unlike'}
        width={35}
        height={35}
        className="fill-current"
      />
    </button>
  );
};

export default LikeButton;
