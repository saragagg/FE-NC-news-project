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