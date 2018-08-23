import { Author } from '../author/author';

export interface Comment {
  id?: number;
  content: string;
  postedAt?: Date;
  author: Author;
}
