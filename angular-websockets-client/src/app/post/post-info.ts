import { PostListing } from './post-listing';
import { Comment } from '../comment/comment';

export interface PostInfo extends PostListing {
  content: string;
  comments: Comment[];
}
