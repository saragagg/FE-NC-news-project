import axios from 'axios';

const newsApi = axios.create({ baseURL: 'https://nc-newsapp.onrender.com/api'});

export const getTopics = () => {
    return newsApi.get('/topics').then(({data}) => {
        return data.topics;
        //array of topic objects
    })
}

export const getArticles = () => {
    return newsApi.get('/articles').then(({ data: {articles}}) => {
        return articles; 
    })
}

export const getArticleById = (article_id) => {
    return newsApi.get(`/articles/${article_id}`).then(({data: {article}}) => {
        return article;
    })
}

export const getCommentsByArticleId = (article_id) => {
    return newsApi.get(`/articles/${article_id}/comments`).then(({data: {comments}}) => {
        return comments;
    })
}

export const voteForArticle = (article_id, vote) => {
   return newsApi.patch(`/articles/${article_id}`, { inc_votes: vote }).then(({data: {updatedArticle}}) => {
        return updatedArticle; 
    }) 
}

export const postArticleComment = (article_id) => {
    return newsApi.post(`/articles/${article_id}/comments`).then(({data: {postedComment}}) => {
        console.log(postedComment)
    })
}








