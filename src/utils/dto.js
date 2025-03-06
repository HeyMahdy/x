


const postDto = (post) => {
    return {
        data : {
            title : post.title,
            content : post.content,
            author : post.author,
            year : post.year,
            createdAt: post.createdAt
        }
    };
};

export default postDto;