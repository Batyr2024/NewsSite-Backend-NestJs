async createPost(postObject:CreatePostData){
    try{
    await this.tagsPostsRepository.create(postObject);
    return 'Post was successfully created'
    }catch(error){
        return `ERROR: ${error}`;
    }
}