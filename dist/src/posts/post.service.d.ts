import { CreatePostData } from 'src/posts/data/CreatePost.data';
import { TagsPosts } from 'src/tags-posts/tags-posts.model';
export declare class PostService {
    private tagsPostsRepository;
    constructor(tagsPostsRepository: typeof TagsPosts);
    createPost(postObject: CreatePostData): Promise<string>;
}
