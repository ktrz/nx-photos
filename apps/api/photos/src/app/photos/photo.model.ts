export interface Photo {
  id: string;
  title: string;
  url: string;
  likes: number;
  dislikes: number;
}

export interface PhotoState {
  [id: string]: Photo;
}
