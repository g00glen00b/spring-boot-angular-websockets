import { Author } from '../author/author';

export interface PostListing {
  id: number;
  title: string;
  postedAt: Date;
  author: Author;
}
