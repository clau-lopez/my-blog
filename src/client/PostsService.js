class PostsService {

    getPost(id){
       return  fetch("https://run.mocky.io/v3/c40dab0d-0863-43ec-9369-f1d3ef59f06b")
    }

    getAllSummarizedPosts(){

    }
}

const postServiceInstance = new PostsService()
export default postServiceInstance;