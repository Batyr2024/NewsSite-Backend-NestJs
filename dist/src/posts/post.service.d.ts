import { Post } from './models/post.model';
export declare class PostService {
    private postRepository;
    constructor(postRepository: typeof Post);
}
