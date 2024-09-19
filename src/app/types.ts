// types.ts
export interface Image {
  id: number;
  title: string;
  author: string;
  price: number;
  main_attachment: {
    small: string;
  };
  likes_count: number;
  liked: boolean;
}

export interface ImageCardProps {
  image: Image;
  onLikeToggle: (id: number) => void;
}

export interface LikeButtonProps {
  liked: boolean;
  onClick: () => void;
}
